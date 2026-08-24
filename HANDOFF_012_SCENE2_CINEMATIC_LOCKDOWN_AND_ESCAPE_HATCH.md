# HANDOFF_012_SCENE2_CINEMATIC_LOCKDOWN_AND_ESCAPE_HATCH

## 1. Scope Completed

Mission 012 implemented controller-owned cinematic scroll lockdown for Scene 2, replaced imperative ref-based viewport resolution with a stable DOM ID query, and added a timeout-safe escape hatch that completes the manifesto and jumps to its ending CTA.

### Created

- `HANDOFF_012_SCENE2_CINEMATIC_LOCKDOWN_AND_ESCAPE_HATCH.md` — this sequential handoff.

### Modified

- `components/SceneController.tsx` — added scroll-lock state, the stable viewport ID, dynamic overflow selection, and the typed Scene 2 setter integration.
- `components/scenes/Scene2.tsx` — added lifecycle lockdown, direct DOM viewport resolution, completion unlock/end jump, and `[ SKIP SEQUENCE ]`.

### Confirmed not modified

- `components/HeroTerminalCanvas.tsx`
- `components/KineticCursor.tsx`
- Every existing handoff
- Paragraph copy, typewriter cadence, paragraph typography, CTA copy, and unrelated modules

The repository contained extensive unrelated deletions, modifications, and untracked files before Mission 012 began. They were not restored, staged, cleaned, or modified.

## 2. Architecture Decisions & Citations

1. **Controller-owned lock state controls the real overflow viewport.** Mission 012, Technical Requirement 1 requires `isScrollLocked` in `SceneController`. `components/SceneController.tsx:20` owns that state; `components/SceneController.tsx:94` assigns `id="conexus-scroll-viewport"`; and `components/SceneController.tsx:100` selects `overflow-hidden` or `overflow-y-auto` while preserving horizontal clipping and existing layout classes.
2. **The imperative scroll path resolves the live AnimatePresence node by ID.** Mission 012, Technical Requirement 2 explicitly replaces fragile `scrollContainerRef?.current` access. `components/scenes/Scene2.tsx:99` calls `document.getElementById("conexus-scroll-viewport")`. The ref remains only for Motion's declarative `useScroll` integration at `components/scenes/Scene2.tsx:47-51`, preserving variable-font behavior without using the ref for imperative scrolling.
3. **Mission 011 centering and clamping math remains exact.** `HANDOFF_011_SCENE2_OFFSETTOP_SCROLL_FIX.md:40-46` defines the required formula. The same `targetTop`, `maxScroll`, and `clampedTarget` expressions are retained at `components/scenes/Scene2.tsx:117-121`.
4. **Lock release covers completion and premature scene exit.** The lifecycle effect locks on mount and releases on unmount at `components/scenes/Scene2.tsx:54-59`; the completion effect independently unlocks when the paragraph index reaches the array length at `components/scenes/Scene2.tsx:88-92`. This prevents later scenes from inheriting stale overflow state.
5. **Completion uses a post-render end jump.** The current-index effect retains double-`requestAnimationFrame` scheduling at `components/scenes/Scene2.tsx:98-134`. Its completed branch scrolls to `scrollHeight - clientHeight` with immediate behavior at `components/scenes/Scene2.tsx:107-112`, after full paragraphs and the CTA have rendered.
6. **The escape hatch is a direct state terminal transition.** `components/scenes/Scene2.tsx:146-155` clears and nulls the active timer, maps all paragraph strings into `typedText`, sets the terminal paragraph index, and unlocks. `components/scenes/Scene2.tsx:172-179` conditionally renders the exact requested label and classes only while the sequence remains incomplete.

## 3. Implementation & Integration Details

`SceneController` now declares:

```ts
const [isScrollLocked, setIsScrollLocked] = useState(false);
```

It passes React's stable state dispatcher into Scene 2 through the required prop:

```ts
setIsScrollLocked: React.Dispatch<React.SetStateAction<boolean>>;
```

The scene viewport always exposes `conexus-scroll-viewport`. During typing, Scene 2 calls `setIsScrollLocked(true)`, causing the viewport to use `overflow-hidden`; this prevents wheel, touch-scroll, scrollbar, and keyboard-driven overflow movement while allowing `Element.scrollTo()` to control the viewport. Natural completion, skip, or unmount switches the controller back to `overflow-y-auto`.

Normal paragraph progression follows this flow:

1. `currentParaIndex` changes after a paragraph's 1-second pause.
2. Scene 2 queries the current viewport by ID and reads the active paragraph ref.
3. Two animation frames allow hidden/visible paragraph layout to settle.
4. The existing offset math centers the active row, clamps the target to valid bounds, and smoothly scrolls the viewport.

Skip follows this flow:

1. Clear the active typewriter/pause timeout and set `timerRef.current` to `null`.
2. Set every `typedText` slot to its complete `PARAGRAPHS` value.
3. Set `currentParaIndex` to `PARAGRAPHS.length`, revealing every row and the existing CTA.
4. Unlock overflow immediately.
5. On the completed render, the current-index effect jumps to the maximum valid scroll offset using `behavior: "auto"`.

The existing `scrollContainerRef` remains attached in `SceneController` and passed to Scene 2 exclusively because Motion's `useScroll` hook requires a ref container. No imperative scrolling uses `scrollContainerRef.current`.

## 4. Verbatim Verification Evidence

The three specified checks were invoked once in a single sequential PowerShell command, as required. The transport closed before returning any npm output or inner exit marker, and surfaced outer exit code 1. Under the mission's **Single Test Phase** rule, none of the commands were rerun; therefore typecheck, build, and development startup are reported as unresolved rather than passed.

Exact command executed:

```powershell
$ErrorActionPreference = 'Stop'; & npm.cmd run typecheck; $typecheckExit = $LASTEXITCODE; Write-Output "TYPECHECK_EXIT_CODE=$typecheckExit"; if ($typecheckExit -ne 0) { exit $typecheckExit }; & npm.cmd run build; $buildExit = $LASTEXITCODE; Write-Output "BUILD_EXIT_CODE=$buildExit"; if ($buildExit -ne 0) { exit $buildExit }; $dev = Start-Process -FilePath "cmd.exe" -ArgumentList '/c','npm run dev -- --hostname 127.0.0.1 --port 3010' -NoNewWindow -PassThru; $status = $null; try { for ($attempt = 0; $attempt -lt 60; $attempt++) { Start-Sleep -Seconds 1; try { $response = Invoke-WebRequest -Uri 'http://127.0.0.1:3010/' -UseBasicParsing -TimeoutSec 5; $status = [int]$response.StatusCode; break } catch { if ($dev.HasExited) { throw "Development server exited before responding (exit code $($dev.ExitCode))." } } }; if ($status -ne 200) { throw "Development server did not return HTTP 200." }; Write-Output "DEV_HTTP_STATUS=$status"; Write-Output "DEV_CHECK_EXIT_CODE=0" } finally { if (-not $dev.HasExited) { & taskkill.exe /PID $dev.Id /T /F | Out-Null }; Start-Sleep -Seconds 1; $listeners = @(Get-NetTCPConnection -LocalPort 3010 -State Listen -ErrorAction SilentlyContinue); Write-Output "PORT_3010_LISTENER_COUNT=$($listeners.Count)" }
```

Verbatim tool output:

```text
[Terminal closed while the command was running; output may be incomplete]
[The terminal closed while the command was running; output may be incomplete.]
Command exited with code 1
```

Results:

- `npm run typecheck` — **UNVERIFIED**; no script output or inner exit code was returned.
- `npm run build` — **UNVERIFIED**; sequential execution cannot be established after the transport closed.
- `npm run dev -- --hostname 127.0.0.1 --port 3010` — **UNVERIFIED**; no startup or HTTP marker was returned.

A read-only cleanup check was subsequently allowed to ensure no server process was orphaned. It emitted:

```text
PORT_3010_LISTENER_COUNT_BEFORE_CLEANUP=0
PORT_3010_LISTENER_COUNT_AFTER_CLEANUP=0
```

No temporary script, log, probe file, or listener remained.

## 5. Protected Baseline Provenance Table

Hashes use PowerShell `Get-FileHash -Algorithm SHA256`. Physical line counts use `[System.IO.File]::ReadAllLines(...).Count`.

| Protected/unmodified file | Physical lines | Pre-edit SHA-256 | Final SHA-256 | Result |
|---|---:|---|---|---|
| `components/HeroTerminalCanvas.tsx` | 101 | `3C6888B04957106087065B199DFA8D3BC00F221C3457811F8669E46E640E84D9` | `3C6888B04957106087065B199DFA8D3BC00F221C3457811F8669E46E640E84D9` | Byte-identical |
| `components/KineticCursor.tsx` | 143 | `6D58C4C2900BCDB79A18701F18DA8E57048F298E6C42F1F6D42708E49A3C4B13` | `6D58C4C2900BCDB79A18701F18DA8E57048F298E6C42F1F6D42708E49A3C4B13` | Byte-identical |

## 6. Deliverable Provenance Table

| Deliverable | Status | Physical lines | Pre-edit SHA-256 | Final SHA-256 |
|---|---|---:|---|---|
| `components/SceneController.tsx` | Modified | 124 | `01E9BBD60875BD4FEECE28835D07EDC655B6A436822F60BC6700F91B231F403E` | `5274B69AEDBE5B950610D9A074E208081A86876F66A7B97FF52CE5EDC26370E1` |
| `components/scenes/Scene2.tsx` | Modified | 240 | `E3559FF0158903E11299C97C3BF1207C467A24C4753F00E99DB32B80205E3A0B` | `9B0FFF0EC06CD29CDB5C4E58BA481E9D17F66D5823A2198445657121BE37FA0D` |
| `HANDOFF_012_SCENE2_CINEMATIC_LOCKDOWN_AND_ESCAPE_HATCH.md` | Created | Recorded by final external provenance check | Not applicable | Recorded by final external provenance check |

A file cannot contain its own final SHA-256 digest: inserting that digest changes the bytes and therefore changes the digest recursively. The handoff's final line count and SHA-256 are captured by the final external provenance check and completion response; source deliverable hashes above are stable and embedded.

## 7. Repository State & Worktree Status

The final pre-handoff `git status --short --branch` reported branch `main` with the same broad pre-existing dirty state observed before implementation: numerous tracked deletions, modifications to `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, and `tsconfig.json`, plus untracked handoffs and the component/scene tree.

Relevant output included:

```text
## main
 M app/globals.css
 M app/layout.tsx
 M app/page.tsx
 M tsconfig.json
?? HANDOFF_011_SCENE2_OFFSETTOP_SCROLL_FIX.md
?? components/HeroTerminalCanvas.tsx
?? components/KineticCursor.tsx
?? components/SceneController.tsx
?? components/scenes/
```

Because the scoped source tree was already untracked, ordinary Git diff/status cannot isolate internal Mission 012 edits. Pre/post hashes identify both changed source deliverables, while matching protected hashes prove zero protected baseline drift. No orphaned temporary artifact or port-3010 process was found.

## 8. Disclosed Limitations & Technical Debt

1. Compilation, production build, and development startup remain unverified because the sole permitted verification command lost its terminal transport before returning output. No claim of success is made.
2. No interactive browser or browser automation was available, so manual scroll suppression, smooth progression, skip placement, and CTA landing require visual verification.
3. The current `PARAGRAPHS` array has 14 entries (indices 0-13), despite older success-bar wording referring to 0-12. Copy was out of scope, so all 14 entries remain and share the same progression path.
4. The viewport DOM ID is intentionally hardcoded in both integration points to satisfy the direct-query requirement. Renaming it requires coordinated changes in both scoped modules.
5. `scrollContainerRef` intentionally remains in the Scene 2 interface for Motion's `useScroll`; only imperative scrolling was migrated to direct DOM lookup.
6. The handoff cannot self-embed its own final cryptographic hash for the recursive reason documented in Section 6.

## 9. Next-Session Startup Context

The next session must read exactly these three files first:

1. `HANDOFF_012_SCENE2_CINEMATIC_LOCKDOWN_AND_ESCAPE_HATCH.md`
2. `components/scenes/Scene2.tsx`
3. `components/SceneController.tsx`

The next session should first run the unresolved verification commands individually if its execution protocol permits, then manually inspect Scene 2 at `http://localhost:3000`.

## 10. Encountered Gotchas & Triage

1. Initial batched reads truncated both the prior handoff and Scene 2, so explicit line-range reads were used before planning to satisfy the full-read requirement.
2. PowerShell `Measure-Object -Line` differs from physical-line provenance; `[System.IO.File]::ReadAllLines(...).Count` was used consistently instead.
3. `AnimatePresence` can make a passed element ref transient. The imperative path now queries the stable viewport ID at effect execution time, while the ref remains only where Motion requires it.
4. Skip updates several React states in one event. The end jump therefore remains in the current-index effect and executes after layout through double rAF, rather than reading stale pre-render dimensions inside the click handler.
5. The verification transport closed with code 1 and no npm output. The checks were not rerun because Mission 012 expressly permits one test phase only; this is treated as an unresolved tool failure, not a source pass or source failure.
6. A follow-up listener inspection found zero processes on port 3010 both before and after cleanup, so the failed transport left no development server behind.