# HANDOFF_011_SCENE2_OFFSETTOP_SCROLL_FIX

## 1. Scope Completed

Mission 011 replaced Scene 2's ineffective native `scrollIntoView()` call with explicit scrolling of the Framer Motion overflow container. The implementation uses the active paragraph's `offsetTop`, centers it within the viewport, clamps the target to valid bounds, and retains the existing double-`requestAnimationFrame` schedule and cleanup.

### Created

- `HANDOFF_011_SCENE2_OFFSETTOP_SCROLL_FIX.md` — this sequential handoff.

### Modified

- `components/scenes/Scene2.tsx` — replaced `activeParagraph.scrollIntoView(...)` with bounded `scrollContainer.scrollTo(...)` offset math and updated only the adjacent explanatory comments.

### Confirmed not modified by Mission 011

- `components/HeroTerminalCanvas.tsx`
- `components/KineticCursor.tsx`
- `components/SceneController.tsx`
- Every existing handoff
- Paragraph copy, typewriter cadence, paragraph 0 variable-font transforms, CTA behavior, public prop signatures, and all other scene components

The repository had extensive unrelated modifications, deletions, and untracked files before Mission 011 began. They were left untouched.

## 2. Architecture Decisions & Citations

1. **Scroll the owning viewport directly.** Mission 011, **Technical Requirements for Scene 2 Scroll Math §2**, requires `scrollContainer.scrollTo(...)` because Mission 010's native `activeParagraph.scrollIntoView(...)` failed silently in the nested viewport. `components/SceneController.tsx:91-101` confirms that `scrollContainerRef` is attached to the Framer Motion element whose classes include `overflow-y-auto`.
2. **Use content-relative element position instead of viewport rectangles.** Mission 011, **Technical Requirements §2**, prescribes `activeParagraph.offsetTop` and explicitly rejects dynamic `getBoundingClientRect()` calculations affected by the section's `pt-[30vh]`. The implementation follows the supplied formula exactly in `components/scenes/Scene2.tsx:92-94`.
3. **Clamp both lower and upper bounds.** Mission 011, **Technical Requirements §2–3**, requires `Math.max(0, Math.min(targetTop, maxScroll))`. This prevents a negative target from propagating and prevents scrolling beyond the container's maximum range.
4. **Preserve post-layout scheduling.** Mission 011, **Technical Requirements §3**, requires the existing `raf1`/`raf2` double-rAF schedule, cancellation cleanup, and `[currentParaIndex, scrollContainerRef]` dependencies. These remain in `components/scenes/Scene2.tsx:88-109`.
5. **Keep scope isolated.** Mission 011, **Scope** and **Explicitly Out of Scope**, permits only the Scene 2 source edit and the required handoff. No canvas, cursor, controller, cadence, copy, typography, or other scene code was altered.
6. **Preserve established Scene 2 invariants.** `HANDOFF_010_PROJECT_SYNC_AND_SCROLL_HOTFIX.md:154-166` records the protected cadence, opacity, padding, variable-font range, CTA text, and effect dependencies. Mission 011 retained all of them.

## 3. Implementation & Integration Details

`SceneController` creates `scrollContainerRef`, attaches it to the scene viewport, and passes it to `Scene2`. On every `currentParaIndex` change, Scene 2 resolves both the viewport and the active paragraph. If either is absent, the effect exits without scheduling work.

After two animation frames, `performScroll` executes this data flow:

```ts
const targetTop = activeParagraph.offsetTop - (scrollContainer.clientHeight / 2) + (activeParagraph.clientHeight / 2);
const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
const clampedTarget = Math.max(0, Math.min(targetTop, maxScroll));

scrollContainer.scrollTo({ top: clampedTarget, behavior: "smooth" });
```

Signatures and units:

- `activeParagraph.offsetTop`: active row's content-relative vertical offset in pixels.
- `scrollContainer.clientHeight / 2`: viewport center in pixels.
- `activeParagraph.clientHeight / 2`: active row's half-height in pixels.
- `targetTop`: desired centered scroll position in pixels.
- `maxScroll`: largest valid container scroll position in pixels.
- `clampedTarget`: finite non-negative bounded target passed as `ScrollToOptions.top`.

The same branch is used by every active paragraph. Source inspection found 14 current paragraph entries, indices 0–13. Therefore the required indices 0–12 all use the bounded path, as does existing index 13. The effect still runs only on paragraph transitions, never on every typed character.

The double-rAF flow remains:

1. Assign the first scheduled frame to `raf1`.
2. Inside it, assign `requestAnimationFrame(performScroll)` to `raf2`.
3. On effect cleanup, cancel either frame if its identifier is non-null.

## 4. Verbatim Verification Evidence

The required verification scripts were each invoked exactly once in one sequential PowerShell phase. No probe or log file was created.

### TypeScript compilation

Command:

```text
npm run typecheck
```

Observed output:

```text
> conexus-2@2.0.0 typecheck
> tsc --noEmit

TYPECHECK_EXIT_CODE=0
```

Result: **PASS — script exit code 0**.

### Production build / import and interface check

Command:

```text
npm run build
```

Observed output:

```text
> conexus-2@2.0.0 build
> next build

▲ Next.js 15.5.23
Creating an optimized production build ...
✓ Compiled successfully in 5.7s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (4/4)
✓ Collecting build traces
✓ Finalizing page optimization

Route (app)                                 Size  First Load JS
┌ ○ /                                    57.2 kB         160 kB
└ ○ /_not-found                            993 B         104 kB

BUILD_EXIT_CODE=0
```

Result: **PASS — script exit code 0**.

### Development startup and root-route compilation

Command invoked by the wrapper:

```text
npm run dev -- --hostname 127.0.0.1 --port 3010
```

Observed server output (the terminal transport rendered checkmark/box characters as `Γ` sequences):

```text
> conexus-2@2.0.0 dev
> next dev --hostname 127.0.0.1 --port 3010

Next.js 15.5.23
- Local:        http://127.0.0.1:3010
- Network:      http://127.0.0.1:3010

Starting...
Ready in 5.2s
Compiling / ...
Compiled / in 9.5s (1376 modules)
GET / 200 in 77ms
DEV_HTTP_STATUS=200
DEV_CHECK_EXIT_CODE=0
```

Result: **PASS at the application/check-wrapper level** — the server started, `/` compiled, returned HTTP 200, and the wrapper emitted `DEV_CHECK_EXIT_CODE=0`. A post-check query confirmed `PORT_3010_LISTENER_COUNT=0`.

Tool caveat: after all success markers were emitted, the command transport reported `[Terminal closed while the command was running; output may be incomplete]` and surfaced an outer tool code 1. In accordance with the one-run constraint, the dev command was not rerun. The direct runtime output above is complete through the wrapper's explicit success marker, but an outer transport exit code 0 cannot be claimed.

### Source invariant check

The post-edit source inspection emitted:

```text
PARAGRAPH_COUNT=14
INDEX_RANGE=0-13
REQUIRED_PRESENT=True :: activeParagraph.offsetTop - (scrollContainer.clientHeight / 2) + (activeParagraph.clientHeight / 2)
REQUIRED_PRESENT=True :: scrollContainer.scrollHeight - scrollContainer.clientHeight
REQUIRED_PRESENT=True :: Math.max(0, Math.min(targetTop, maxScroll))
REQUIRED_PRESENT=True :: scrollContainer.scrollTo({ top: clampedTarget, behavior: "smooth" })
REQUIRED_PRESENT=True :: [currentParaIndex, scrollContainerRef]
SCROLL_INTO_VIEW_PRESENT=False
```

This establishes that all current paragraph indices, including required indices 0–12, share the non-negative bounded path. It is a source-level validation; no interactive browser automation was available.

## 5. Protected Baseline Provenance Table

Hashes were captured before and after the source edit with PowerShell `Get-FileHash -Algorithm SHA256`. Physical line counts use `[System.IO.File]::ReadAllLines(...).Count`, avoiding wrapped-display or nonblank-line counting differences.

| Protected file | Physical lines | Mission 010 baseline SHA-256 | Mission 011 final SHA-256 | Result |
|---|---:|---|---|---|
| `components/HeroTerminalCanvas.tsx` | 101 | `3c6888b04957106087065b199dfa8d3bc00f221c3457811f8669e46e640e84d9` | `3c6888b04957106087065b199dfa8d3bc00f221c3457811f8669e46e640e84d9` | Unchanged |
| `components/KineticCursor.tsx` | 143 | `6d58c4c2900bcdb79a18701f18da8e57048f298e6c42f1f6d42708e49a3c4b13` | `6d58c4c2900bcdb79a18701f18da8e57048f298e6c42f1f6d42708e49a3c4b13` | Unchanged |
| `components/SceneController.tsx` | 122 | `01e9bbd60875bd4feece28835d07edc655b6a436822f60bc6700f91b231f403e` | `01e9bbd60875bd4feece28835d07edc655b6a436822f60bc6700f91b231f403e` | Unchanged |

## 6. Deliverable Provenance Table

| Modified source file | Physical lines | Pre-edit SHA-256 | Final SHA-256 |
|---|---:|---|---|
| `components/scenes/Scene2.tsx` | 195 | `17dcfd080bc26c548e938a1c1bae156ec7516a9a9ae36fac66cf93cf1a163a4b` | `e3559ff0158903e11299c97c3bf1207c467a24c4753f00e99db32b80205e3a0b` |

The required handoff itself is listed under Created in Section 1. This table follows the mission's explicit request for provenance of the modified file, `Scene2.tsx`.

## 7. Repository State & Worktree Status

The final pre-handoff `git status --short` remained broadly consistent with the initial status. It contained pre-existing deleted tracked routes/components, modifications to `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, and `tsconfig.json`, plus existing untracked handoffs and the current untracked scene/component tree.

Relevant entries included:

```text
 M app/globals.css
 M app/layout.tsx
 M app/page.tsx
 M tsconfig.json
?? HANDOFF_002_CONEXUS_FRONTEND_VERIFICATION_AND_LAUNCH.md
?? HANDOFF_004_SCENE1_CINEMATIC_PACING_FIX.md
?? HANDOFF_005_SCENE2_TASTEFUL_STREAMING_FIX.md
?? HANDOFF_006_SCENE2_TYPING_DEADLOCK_FIX.md
?? HANDOFF_007_AESTHETICS_AND_TYPOGRAPHIC_PERSONALITY.md
?? HANDOFF_008_SHARED_HERO_TERMINAL_SCENES_1_AND_2.md
?? HANDOFF_009_SCENE2_CANVAS_READABILITY_AND_SCROLL_REPAIR.md
?? HANDOFF_010_PROJECT_SYNC_AND_SCROLL_HOTFIX.md
?? components/HeroTerminalCanvas.tsx
?? components/KineticCursor.tsx
?? components/SceneController.tsx
?? components/scenes/
```

Because `components/scenes/` was already untracked as a directory, Git cannot isolate its internal Mission 011 change in ordinary `git diff` output. Direct pre/post hashes establish the `Scene2.tsx` change; matching protected hashes establish that protected files did not drift. Mission 011 added only this handoff and changed only `Scene2.tsx`. It did not clean, stage, restore, or otherwise alter pre-existing worktree changes.

## 8. Disclosed Limitations & Technical Debt

1. The mission success bar refers to paragraphs 0–12, but the existing `PARAGRAPHS` array contains 14 entries (indices 0–13). Paragraph copy was explicitly out of scope, so no entry was removed. The same safe calculation applies to all 14 indices.
2. No interactive browser or browser automation harness was available. Compilation, root serving, source structure, and arithmetic clamping were verified, but perceived smoothness and visual centering throughout the timed sequence were not directly observed.
3. The command transport surfaced outer code 1 after printing all inner success markers and saying its terminal closed while the wrapper was running. No rerun was performed due to the strict one-run requirement. Typecheck and build explicitly returned 0; development startup and HTTP validation explicitly emitted `DEV_CHECK_EXIT_CODE=0`, but the outer transport exit remains unverified as 0.
4. `offsetTop` is used exactly as mandated. Its correctness depends on the current DOM hierarchy in which the active paragraph row's offset chain aligns with the scroll container content. Future insertion of positioned ancestors should revalidate that assumption.

## 9. Next-Session Startup Context

The next session must read exactly these three startup files first:

1. `HANDOFF_011_SCENE2_OFFSETTOP_SCROLL_FIX.md`
2. `components/scenes/Scene2.tsx`
3. `components/SceneController.tsx`

## 10. Encountered Gotchas & Triage

1. The initial combined read was output-truncated, so the mandated files were paged by explicit line ranges to ensure complete inspection before planning.
2. PowerShell's `Measure-Object -Line` reported logical/nonblank-style counts that differed from displayed physical file lines. Provenance was standardized on `[System.IO.File]::ReadAllLines(...).Count`, yielding 101, 143, 122, and 195 physical lines for the final files recorded above.
3. The source tree is largely untracked, so `git diff -- components/scenes/Scene2.tsx` produced no useful patch. Pre/post SHA-256 values and direct full-file reads were used for deliverable verification instead.
4. A first paragraph-count regex counted 14 entries, exposing a mismatch with the mission's stated 0–12 range. Direct source review confirmed that 14 is the real current count; content was left untouched under strict scope isolation.
5. The terminal transport closed after the development wrapper emitted its successful HTTP and exit markers. The listener cleanup succeeded (`PORT_3010_LISTENER_COUNT=0`), and no process, script, log, or probe file was left behind.