# HANDOFF_013_SCENE2_TOTAL_ARCHITECTURE_AUDIT

## 1. Scope Completed

Mission 013 completed a read-only structural audit of Scene 2's CSS layout, scroll ownership, programmatic scroll calculations, and Framer Motion presence tree. It did not implement the repair or modify application source.

### Created

- `BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md` — definitive root-cause analysis, target DOM/CSS/Motion architecture, mathematical scroll model, implementation sequence, and acceptance matrix.
- `HANDOFF_013_SCENE2_TOTAL_ARCHITECTURE_AUDIT.md` — this sequential handoff.

### Modified

- None.

### Protected and confirmed unmodified

- `components/scenes/Scene2.tsx`
- `components/SceneController.tsx`
- `components/HeroTerminalCanvas.tsx`
- `components/KineticCursor.tsx`

No `.tsx`, CSS, package, configuration, existing handoff, or unrelated module was edited. No temporary script, probe file, mock harness, development server, or browser test was created or run.

## 2. Architecture Decisions & Citations

### Decision 1: Treat viewport ownership, not API selection, as the primary defect

The last four missions tried relative rectangle math, native `scrollIntoView`, `offsetTop` plus direct `scrollTo`, and stable ID lookup plus lock/end-jump behavior. All four targeted the same structurally overloaded node. `components/SceneController.tsx:91-104` places the ref, stable ID, scene key, horizontal Motion transform, dynamic overflow, and scene content on one `motion.div` inside `AnimatePresence`.

The blueprint concludes that the root cause is the absence of a persistent scroll viewport and deterministic pre-scroll geometry (`BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md:9-29,165-177`).

### Decision 2: Separate the persistent viewport from the keyed Motion panel

The next implementation must place a persistent, non-keyed, untransformed `overflow-y-auto` viewport outside `AnimatePresence`, then place the keyed horizontal-transition `motion.div` inside it. The viewport must own the ref, stable ID, and `scrollTop`; the inner panel must own scene presence and transforms (`BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md:223-267`).

This follows directly from `components/SceneController.tsx:95-100`, where the current scroll owner is keyed by `scene`, transformed from `x: "100%"` to `x: 0` and out to `x: "-100%"`, and given both `absolute` and `relative` position utilities.

### Decision 3: Make Scene 2 geometry deterministic before scrolling

`components/scenes/Scene2.tsx:171` combines `p-8 md:p-24 lg:p-32` with `pt-[30vh] pb-[60vh]`. The shorthand and longhand utilities write overlapping padding properties, making the intended runway dependent on generated CSS precedence. The next implementation must separate horizontal gutters from explicit top and bottom runway (`BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md:269-305`).

`components/scenes/Scene2.tsx:182-196` assigns `hidden` to all future rows. Those `display: none` rows contribute no layout height. The new active row becomes visible while `displayText` is initially empty (`components/scenes/Scene2.tsx:35,65-82,186`), then grows every 22 ms. The scroll effect runs only when `currentParaIndex` changes (`components/scenes/Scene2.tsx:98-134`), not as the target's height grows. The next implementation must use stable anchors/reserved geometry or a bounded geometry-stabilization signal.

### Decision 4: Keep overflow stable and lock user input separately

`components/SceneController.tsx:100` changes the scroll owner between `overflow-hidden` and `overflow-y-auto`. The next architecture must keep the persistent viewport `overflow-y-auto` throughout its lifetime and implement cinematic lock semantics by gating user wheel, touch, and keyboard input without disabling code-owned scrolling (`BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md:319-337`).

The blueprint does not claim that `overflow: hidden` alone always prevents programmatic scrolling; modern browsers commonly retain a programmatic scroll mechanism. The problem is that dynamic overflow adds another mutable responsibility to an already transient viewport (`BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md:413-420`).

### Decision 5: Require a positive scroll range and one coordinate system

The current calculation at `components/scenes/Scene2.tsx:117-121` is bounded by:

```text
maxScroll = scrollHeight - clientHeight
clampedTarget = max(0, min(targetTop, maxScroll))
```

If `scrollHeight <= clientHeight`, maximum scroll is zero and every request resolves to zero. If `offsetTop` is not in the viewport's content coordinate system, the target is invalid even when positive range exists. If target height grows after measurement, the final center changes.

The blueprint formalizes this as `V`, `S`, `M`, `Y`, `H`, `T`, and `C` and requires pre/post runtime assertions in the implementation mission (`BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md:179-221`).

### Decision 6: Do not attempt another imperative API substitution first

The next mission must restructure ownership and geometry before choosing or polishing the scroll call. The final architecture decision is recorded at `BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md:422-426`:

> persistent owner + positive range + stable target + shared coordinate system = observable programmatic movement.

## 3. Implementation & Integration Details

Mission 013 created documentation only. The blueprint prescribes this next-mission integration order:

1. Move the scroll viewport outside `AnimatePresence` so it mounts once with `SceneController`.
2. Move scene `key`, horizontal entry/exit transforms, and presence lifecycle to an inner `motion.div`.
3. Give the viewport one explicit position/height contract and stable `overflow-y-auto overflow-x-hidden` behavior.
4. Define explicit scene-entry scroll resets rather than inheriting accidental `scrollTop` values.
5. Replace Scene 2's overlapping padding utilities with responsive horizontal gutters and independent top/bottom runway.
6. Create stable paragraph anchors or wait for a bounded geometry-stabilization event before measurement.
7. Keep `useScroll({ container })` attached to the persistent viewport for paragraph-zero variable typography.
8. Replace overflow lock toggling with scoped user-input gating and complete cleanup.
9. Calculate the target in the persistent viewport's content coordinate system and assert positive range.
10. Verify all 14 current paragraphs, indices `0-13`, first with instant scrolling and then with smooth/reduced-motion behavior.

The blueprint explicitly avoids prescribing another blind `scrollIntoView`/`offsetTop` swap. Either verified rect conversion or a verified offset chain is acceptable only after the DOM establishes a stable coordinate basis (`BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md:339-358`).

The target implementation hierarchy is:

```text
main fixed scene shell
├─ persistent background
├─ persistent scroll viewport (ref, ID, overflow, scrollTop)
│  └─ AnimatePresence
│     └─ keyed motion scene panel (entry/exit transform)
│        └─ current scene
├─ persistent navigation
└─ persistent cursor
```

## 4. Verbatim Verification Evidence

The required verification scripts were invoked in one sequential, stop-on-failure phase after the blueprint was complete. This was the sole test phase. No command was rerun.

### Exact command requested

```powershell
$ErrorActionPreference = 'Continue'; & npm.cmd run typecheck; $typecheckExit = $LASTEXITCODE; Write-Output "TYPECHECK_EXIT_CODE=$typecheckExit"; if ($typecheckExit -ne 0) { exit $typecheckExit }; & npm.cmd run build; $buildExit = $LASTEXITCODE; Write-Output "BUILD_EXIT_CODE=$buildExit"; exit $buildExit
```

### Verbatim tool output

```text
[Terminal closed while the command was running; output may be incomplete]
C:\Program : The term 'C:\Program' is not recognized as
the name of a cmdlet, function, script file, or
operable program. Check the spelling of the name, or if
a path was included, verify that the path is correct
and try again.
At line:1 char:1
+ C:\Program Files\nodejs\npm.cmd run typecheck
+ ~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Progr
   am:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

:\Program Files\WindowsApps\Microsoft.PowerShell_7.6.5.0_x64__8wekyb3d8bbwe\pwsh.exe\TYPECHECK_EXIT_CODE=1
[The terminal closed while the command was running; output may be incomplete.]
```

Tool result: `Command exited with code 1`.

### Results

- `npm run typecheck` — **UNVERIFIED**. The terminal transport rewrote the npm invocation to an unquoted absolute path containing a space. PowerShell attempted to execute `C:\Program`, so npm and TypeScript did not start. The wrapper emitted `TYPECHECK_EXIT_CODE=1`.
- `npm run build` — **NOT EXECUTED / UNVERIFIED**. The approved stop-on-failure condition exited after the typecheck transport failure.
- Application syntax regression — **not established by scripts**. The task made no application-code edits, and protected source hashes remained byte-identical, but this is not represented as a compilation pass.

The commands were not rerun because Mission 013 requires one verification phase. This is a command-transport failure, not evidence of a TypeScript or Next.js source failure.

## 5. Protected Baseline Provenance Table

Hashes use PowerShell `Get-FileHash -Algorithm SHA256`. Physical line counts use `[System.IO.File]::ReadAllLines(...).Count`. Pre-write and post-blueprint values matched; final values were captured again after the handoff was created.

| Protected/unmodified file | Physical lines | Pre-write SHA-256 | Final SHA-256 | Result |
|---|---:|---|---|---|
| `components/scenes/Scene2.tsx` | 240 | `9B0FFF0EC06CD29CDB5C4E58BA481E9D17F66D5823A2198445657121BE37FA0D` | `9B0FFF0EC06CD29CDB5C4E58BA481E9D17F66D5823A2198445657121BE37FA0D` | Byte-identical |
| `components/SceneController.tsx` | 124 | `5274B69AEDBE5B950610D9A074E208081A86876F66A7B97FF52CE5EDC26370E1` | `5274B69AEDBE5B950610D9A074E208081A86876F66A7B97FF52CE5EDC26370E1` | Byte-identical |
| `components/HeroTerminalCanvas.tsx` | 101 | `3C6888B04957106087065B199DFA8D3BC00F221C3457811F8669E46E640E84D9` | `3C6888B04957106087065B199DFA8D3BC00F221C3457811F8669E46E640E84D9` | Byte-identical |
| `components/KineticCursor.tsx` | 143 | `6D58C4C2900BCDB79A18701F18DA8E57048F298E6C42F1F6D42708E49A3C4B13` | `6D58C4C2900BCDB79A18701F18DA8E57048F298E6C42F1F6D42708E49A3C4B13` | Byte-identical |

## 6. Deliverable Provenance Table

| Deliverable | Status | Physical lines | SHA-256 |
|---|---|---:|---|
| `BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md` | Created | 426 | `7F4773633787E950F488DFF9639DCD69AF82A27A09C7F92E834C651FBA54A251` |

The blueprint's hash was captured before creating this handoff and is revalidated in the final provenance check. This handoff cannot embed its own final SHA-256 because adding that value would change the file recursively; its existence and line count are checked externally after writing.

## 7. Repository State & Worktree Status

The repository was already broadly dirty before Mission 013. Initial `git status --short --branch` reported branch `main`, numerous tracked deletions, modifications to `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, and `tsconfig.json`, and many untracked handoffs/components.

Relevant pre-existing entries included:

```text
## main
 D HANDOFF_001_VISUAL_POLISH_AND_DEPLOY.md
 M app/globals.css
 M app/layout.tsx
 M app/page.tsx
 M tsconfig.json
 D components/primitives.tsx
?? HANDOFF_002_CONEXUS_FRONTEND_VERIFICATION_AND_LAUNCH.md
?? HANDOFF_009_SCENE2_CANVAS_READABILITY_AND_SCROLL_REPAIR.md
?? HANDOFF_010_PROJECT_SYNC_AND_SCROLL_HOTFIX.md
?? HANDOFF_011_SCENE2_OFFSETTOP_SCROLL_FIX.md
?? HANDOFF_012_SCENE2_CINEMATIC_LOCKDOWN_AND_ESCAPE_HATCH.md
?? components/HeroTerminalCanvas.tsx
?? components/KineticCursor.tsx
?? components/SceneController.tsx
?? components/scenes/
```

Mission 013 did not clean, restore, stage, or modify any pre-existing worktree entry. Its only intended additions are:

```text
?? BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md
?? HANDOFF_013_SCENE2_TOTAL_ARCHITECTURE_AUDIT.md
```

Because protected source files are already under untracked directories, ordinary Git diff cannot prove their internal stability. The matching pre/post SHA-256 values in Section 5 provide direct byte-level evidence.

## 8. Disclosed Limitations & Technical Debt

1. Typecheck and build are unverified because the one permitted verification phase failed in terminal path invocation before npm started. No source-check pass is claimed.
2. Mission 013 was explicitly prohibited from running a Next.js development server. No computed-style, live DOM geometry, visual, wheel, touch, keyboard, or smooth-scroll behavior was observed.
3. Source inspection proves overlapping padding utilities and contradictory positioning utilities exist. Generated Tailwind CSS and browser computed styles determine the current winners; the blueprint deliberately removes the conflicts rather than claiming an unobserved winner.
4. `AnimatePresence` is not inherently a scroll blocker, and `overflow: hidden` is not asserted as a universal blocker of programmatic scrolling. The diagnosed defect is the combined, mutable responsibility assigned to one transient node.
5. Exact final target stabilization remains an implementation choice: stable reserved anchors are preferred; a bounded `ResizeObserver`-style stabilization path is an acceptable alternative.
6. Current source contains 14 paragraphs, indices `0-13`, while older mission language sometimes references 13 paragraphs or indices `0-12`.
7. The broad pre-existing dirty repository state prevents a clean global worktree assertion. Mission isolation is demonstrated by direct protected hashes and the two new root documents.

## 9. Next-Session Startup Context

The next implementation session must read these exact files first:

1. `HANDOFF_013_SCENE2_TOTAL_ARCHITECTURE_AUDIT.md`
2. `BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md`
3. `components/scenes/Scene2.tsx`
4. `components/SceneController.tsx`

It should then inspect `app/globals.css` for the document-level viewport contract and `package.json` for verification scripts. The implementation must follow the blueprint sequence: restructure viewport ownership first, then establish deterministic geometry, then restore programmatic scrolling.

The next session must not start by substituting another scroll API into the current tree.

## 10. Encountered Gotchas & Triage

1. The initial mandated reads were output-truncated, so the files were paged by explicit line ranges before planning.
2. Historical scroll handoff filenames differed from guessed short names. Repository enumeration identified the actual Mission 009 and 010 files before they were read.
3. `offsetTop` is not automatically relative to the scroll owner. Its meaning follows the offset-parent chain, which must be made explicit by the next DOM structure.
4. A double `requestAnimationFrame` flushes frames but cannot stabilize an element whose text continues changing every 22 ms.
5. `hidden` means `display: none`; unrevealed rows provide no scroll range. Revealing an empty active row provides only its structural padding until text grows.
6. Tailwind class token order is not a safe way to reason about conflicting `absolute`/`relative` or shorthand/longhand padding declarations. Generated CSS order and breakpoints govern the cascade.
7. A successful call to `scrollTo` does not imply visual movement. If `scrollHeight - clientHeight` is zero, the only valid scroll offset is zero.
8. The verification transport expanded `npm.cmd` to an unquoted `C:\Program Files\nodejs\npm.cmd`, causing PowerShell to execute `C:\Program` and fail before npm started. The checks were not rerun under the single-phase constraint.
9. PowerShell physical line provenance uses `[System.IO.File]::ReadAllLines(...).Count`, not `Measure-Object -Line`.
10. The source component tree is untracked in Git, so cryptographic pre/post provenance is essential for proving no application drift.