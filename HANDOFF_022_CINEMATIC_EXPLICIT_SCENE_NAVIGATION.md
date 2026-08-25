# HANDOFF 022 — Cinematic Explicit Scene Navigation

Date: 2026-08-24  
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`  
Branch: `main`  
Authoritative baseline: `fc5278edb3e0fc4c1c9f44200007d258ce39bb81`  
Accepted Scene 3 mobile-rail parent: `bbb66bb478f9b5c240c4763f2f61210e213eb3a9`

## 1. Scope Completed

Mission 022 replaced implicit cinematic scene navigation with one explicit previous/next grammar.

Created:

- `HANDOFF_022_CINEMATIC_EXPLICIT_SCENE_NAVIGATION.md`

Modified:

- `components/SceneController.tsx`

`components/SceneController.tsx` was the only existing application source modified. No Scene source, stylesheet, store, canvas, ledger source, route, dependency manifest, lockfile, public asset, or historical handoff changed. No dependency was added. No commit, push, Vercel action, or deployment occurred.

Completed behavior:

- Removed mouse-edge scene switching and both edge-gradient affordances.
- Removed touch/swipe scene switching without introducing another gesture.
- Added fixed, explicit Previous/Next buttons with one canonical mirrored SVG chevron.
- Enforced boundary omission and one-transition-at-a-time locking.
- Made horizontal scene motion respect previous versus next direction.
- Converted nine navigation dots into passive position indicators.
- Stopped supplying Scene 2's optional `onAdvance`, removing its alternate scene CTA without editing Scene 2.
- Preserved Scene 2 scrolling and Scene 3's accepted mobile four-column rail and causal canvas.

## 2. Architecture Decisions & Citations

### Replaced legacy architecture

The baseline Git blob `fc5278edb3e0fc4c1c9f44200007d258ce39bb81:components/SceneController.tsx` contained:

- mouse-edge navigation and its `mousemove` listener at lines 37–48;
- touch origin and ±50 px swipe transitions at lines 20 and 50–58;
- root touch handlers and 50 px gradient strips at lines 79–88;
- interactive dot buttons, `goto`, and magnetic behavior at lines 105–118;
- the former 1200 ms timestamp debounce at lines 21 and 24–35.

The old Scene 2 controller binding was at baseline `components/SceneController.tsx:66`. Scene 2 itself conditionally renders the alternate CTA only when `onAdvance` exists (`components/scenes/Scene2.tsx:269-285`), allowing removal at the controller boundary while preserving Scene 2 byte-for-byte.

### Preserved accepted architecture

- `HANDOFF_021_FINAL_PRODUCTION_LAUNCH.md:373-390` documents the accepted Scene 3 mobile horizontal-rail amendment and source commit.
- `components/scenes/Scene3.tsx:108-137` retains the bottom control region, persistent `grid-cols-4`, and four interactive arm buttons.
- `components/scenes/Scene2.tsx:24-78` defines Scene 2's scroll-driven content architecture; the file remains byte-identical.

### Final controller architecture

- `components/SceneController.tsx:17-24` defines direction types and direction-aware enter/exit variants.
- `components/SceneController.tsx:26-58` implements the local shared chevron button and one canonical SVG polyline.
- `components/SceneController.tsx:48` mirrors that geometry deterministically for Previous.
- `components/SceneController.tsx:64-84` implements the synchronous transition lock and completion release.
- `components/SceneController.tsx:90-100` preserves all nine scenes and their ordering.
- `components/SceneController.tsx:92` mounts Scene 2 without `onAdvance`.
- `components/SceneController.tsx:108-124` passes direction through `AnimatePresence` and preserves the 0.8-second accepted easing.
- `components/SceneController.tsx:126-127` omits unavailable boundary controls from the rendered DOM.
- `components/SceneController.tsx:129-144` implements passive, non-focusable scene-position indicators.

## 3. Implementation & Integration Details

### Removed implicit and alternate paths

`touchStartX`, `handleTouchStart`, `handleTouchEnd`, both root touch props, ±50 px delta logic, the mouse `useEffect`, `mousemove` registration, both edge gradients, direct `goto`, clickable/magnetic dots, and Scene 2's supplied `onAdvance` were deleted. The now-unused React `useEffect` import was removed. No Pointer Events, drag, pan, wheel, keyboard-arrow, timer, or replacement gesture was added.

### Canonical mirrored chevrons

`SceneChevron` renders a semantic `<button type="button">` named `Previous scene` or `Next scene`. One `polyline` (`4 2 20 20 4 38`) supplies exactly two visible open strokes. Previous uses `translate(24 0) scale(-1 1)`; Next uses the canonical coordinates unchanged. This guarantees geometric mirroring without separately authored icons.

Each target is 56×56 CSS pixels. The mark is 40 px tall on mobile and 48 px at the desktop breakpoint. The target has a transparent background and zero-width borders under Tailwind Preflight. Hover/focus/active feedback affects color or moves only the mark by 4 px in the navigation direction.

### Placement and boundaries

Buttons are fixed at vertical center with responsive physical-edge insets and `z-50`. Only their local 56×56 targets receive input. Scene index 0 renders Next only; indexes 1–7 render both; index 8 renders Previous only. No disabled or hidden boundary substitute exists.

### Transition locking and direction

`transitionLock` engages synchronously before state changes, while `transitionTarget` records the one adjacent destination. Repeated activation during exit/entry is ignored. The lock releases only after the intended incoming scene reports animation completion. There is no former 1200 ms post-transition dead time.

Direction `1` makes the outgoing scene move left and incoming scene enter from the right. Direction `-1` makes the outgoing scene move right and incoming scene enter from the left. `AnimatePresence mode="wait"`, duration `0.8`, and ease `[0.76, 0, 0.24, 1]` remain.

### Passive indicators and scene preservation

The nine bottom marks are `<span>` elements within a non-interactive `role="status"` container labeled `Scene N of 9`. They retain active width/brightness and inactive size/dimming but have no click, focus, magnetic, or direct-jump behavior.

Scene 2 retains the controller's `overflow-y-auto` viewport, `scrollContainerRef`, Motion `useScroll`, typing sequence, and `[ SKIP SEQUENCE ]`. Scene 3 remains byte-identical with all four arm controls and causal canvas.

## 4. Verbatim Verification Evidence

### Compilation and build

Executed once after implementation:

```text
npm run typecheck
> conexus-2@2.0.0 typecheck
> tsc --noEmit
TYPECHECK_EXIT=0
```

Executed once after successful typecheck:

```text
npm run build
> conexus-2@2.0.0 build
> next build
✓ Compiled successfully in 7.6s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (33/33)
✓ Collecting build traces
✓ Finalizing page optimization
BUILD_EXIT=0
```

The build retained the accepted route surface. `/scene3-hybrid` was absent. The command wrapper reported a terminal-close transport status after the process printed `BUILD_EXIT=0`; the build was not rerun.

### Desktop browser — 1440×900

Chrome DevTools Protocol against `http://127.0.0.1:3000/` produced:

```text
PASS: Scene 1 previous=0 next=1 visible=True enabled=True inside=True
PASS: settled Scene 2 of 9
PASS: settled Scene 3 of 9
PASS: settled Scene 4 of 9
PASS: settled Scene 5 of 9
PASS: settled Scene 6 of 9
PASS: settled Scene 7 of 9
PASS: settled Scene 8 of 9
PASS: settled Scene 9 of 9
PASS: Scene 9 previous=1 next=0; Next absent from DOM
PASS: desktop viewport 1440x900
PASS: nine position marks are passive and non-clickable
PASS: mouse movement at both physical 50px edges does not navigate
PASS: next outgoing scene moves left
PASS: rapid repeated desktop activations cannot skip Scene 2
PASS: Scene 2 Enter the refinery CTA is absent
PASS: Scene 2 SKIP SEQUENCE is present
PASS: Scene 2 SKIP SEQUENCE functions
PASS: previous outgoing scene moves right
PASS: chevrons use one canonical geometry and deterministic mirror
PASS: desktop chevron targets are local, visible 56x56 areas
PASS: no captured hydration, React, Next, console, or runtime errors
PASS: no Next error overlay
DESKTOP_VALIDATION_EXIT=0
```

### Mobile browser — 390×844

Corrected visual-container evidence:

```text
status=Scene 1 of 9
borderTopStyle=solid; borderRightStyle=solid
borderBottomStyle=solid; borderLeftStyle=solid
borderTopWidth=0px; borderRightWidth=0px
borderBottomWidth=0px; borderLeftWidth=0px
backgroundColor=rgba(0, 0, 0, 0)
rect={x:326,y:394,width:56,height:56,right:382,bottom:450}
visibility=visible; enabled=true
CORRECTED_BORDER_GATE=PASS
```

The temporary 56×56 element crop visually showed only the thin open two-stroke chevron on the dark scene: no circle, square, pill, plate, shaft, or enclosing border. It was deleted after verification.

Interaction evidence:

```text
MOBILE_STAGE1_PASS swipeLeft=inert swipeRight=inert next=Scene2
vertical=0->158 diagonal=158->183 status=Scene2

MOBILE_STAGE2_PASS lock=Scene3 rail=4-horizontal arm=tappable
canvas=visible framesDiffer=True
frame 1=BAA7E7D6BCC87EFE40FD30650778FA2A6302670F7A9CDE3075F74B5F005603A3
frame 2=EF49ECC11293B51D1F30109601D93C20006D6F6024E44636220E3AA4840B495A
```

The final navigation smoke passed Scene 3 → Scene 4 → Scene 3 with 56×56 local targets. Scene 3 retained four in-viewport arm controls in one horizontal row, and its two in-memory frames captured 700 ms apart differed.

### Scoped application runtime integrity

Tested origin: `http://127.0.0.1:3000`. Sequence: Scene 1 → Scene 2 → Scene 3 → Scene 4 → Scene 3. Collectors were installed before fresh navigation for page `error`, `unhandledrejection`, `console.error`, DevTools exceptions, and error logs.

```text
ORIGIN=http://127.0.0.1:3000 FINAL=Scene 3 of 9
single application root: PASS count=1
single viewport: PASS count=1
Next runtime overlay absent: PASS
hydration failure absent: PASS count=0
application uncaught exceptions: PASS count=0
application unhandled rejections: PASS count=0
application console.error: PASS count=0
React runtime integrity: PASS count=0
CLASSIFIED_EVENTS
NONE
browser-infrastructure events observed: 0 non-failing
APPLICATION_RUNTIME_INTEGRITY=PASS
```

Chrome emitted `google_apis/gcm ... DEPRECATED_ENDPOINT` in the browser process before the scoped page collection. It had no page URL, frame, application execution context, or application stack and was classified as browser infrastructure, not an application failure.

### Final source and output checks

```text
FORBIDDEN_SEARCH
FORBIDDEN_EXIT=1
REQUIRED_SEARCH
33: aria-label={isPrevious ? "Previous scene" : "Next scene"}
108: <AnimatePresence mode="wait" custom={direction}>
118: onAnimationComplete={handleTransitionComplete}
120: ... overflow-y-auto ...
126: {scene > 0 && <SceneChevron ... />}
127: {scene < 8 && <SceneChevron ... />}
131: role="status"
REQUIRED_EXIT=0
DIFF_CHECK_EXIT=0
```

## 5. Protected Baseline Provenance Table

| Protected file | Lines before | SHA-256 before | Lines after | SHA-256 after | Result |
|---|---:|---|---:|---|---|
| `components/scenes/Scene1.tsx` | 92 | `5f9faced22b40c09ed7ea6c55b44841f178026ba365ba41ce3ad2f61e7e0a38a` | 92 | `5f9faced22b40c09ed7ea6c55b44841f178026ba365ba41ce3ad2f61e7e0a38a` | unchanged |
| `components/scenes/Scene2.tsx` | 288 | `89137fe78328e7d4990099d97d0f50f011e51ba28312dc6e928a92cf7082be61` | 288 | `89137fe78328e7d4990099d97d0f50f011e51ba28312dc6e928a92cf7082be61` | unchanged |
| `components/scenes/Scene3.tsx` | 149 | `bf4eb4dda7e639acd17d0cf33281b43a9b282d103da2d7be5337576e8cea444b` | 149 | `bf4eb4dda7e639acd17d0cf33281b43a9b282d103da2d7be5337576e8cea444b` | unchanged |
| `components/scenes/Scene4.tsx` | 54 | `f46613c3636d6758b20380fdd7e328990dc0227547161a4d4b045f82520ce203` | 54 | `f46613c3636d6758b20380fdd7e328990dc0227547161a4d4b045f82520ce203` | unchanged |
| `components/scenes/Scene5.tsx` | 62 | `feaa581d0767d25da8669ae3298f494dbd10bf74cc3b9d7fb1e02f789ded7866` | 62 | `feaa581d0767d25da8669ae3298f494dbd10bf74cc3b9d7fb1e02f789ded7866` | unchanged |
| `components/scenes/Scene6.tsx` | 48 | `5192da11ae3b3ae91d8894fc66ff4ffa575d928a653bea456df5bec433d99d1c` | 48 | `5192da11ae3b3ae91d8894fc66ff4ffa575d928a653bea456df5bec433d99d1c` | unchanged |
| `components/scenes/Scene7.tsx` | 11 | `f325fa1a87c1fd9ea21d71c8ebe7a3ad18cc8713fa4da6fcc630dac74eb773ca` | 11 | `f325fa1a87c1fd9ea21d71c8ebe7a3ad18cc8713fa4da6fcc630dac74eb773ca` | unchanged |
| `components/scenes/Scene8.tsx` | 11 | `35b05fcfa5b8a6d06bcdedeef90c4ec0efa666678ef7aa0e7a23e7a81a047390` | 11 | `35b05fcfa5b8a6d06bcdedeef90c4ec0efa666678ef7aa0e7a23e7a81a047390` | unchanged |
| `components/scenes/Scene9.tsx` | 35 | `79a4f6afb730e02f73c78a6fa28c7a562afa8cc7a69c3ebbb90f08a80567a21d` | 35 | `79a4f6afb730e02f73c78a6fa28c7a562afa8cc7a69c3ebbb90f08a80567a21d` | unchanged |
| `components/CausalDataCloudCanvas.tsx` | 709 | `196ffd1820778acd459a0f15215a8af043eb2f56c06df4eec0a56b22703fdf06` | 709 | `196ffd1820778acd459a0f15215a8af043eb2f56c06df4eec0a56b22703fdf06` | unchanged |
| `components/HeroTerminalCanvas.tsx` | 101 | `3c6888b04957106087065b199dfa8d3bc00f221c3457811f8669e46e640e84d9` | 101 | `3c6888b04957106087065b199dfa8d3bc00f221c3457811f8669e46e640e84d9` | unchanged |
| `components/KineticCursor.tsx` | 143 | `6d58c4c2900bcdb79a18701f18da8e57048f298e6c42f1f6d42708e49a3c4b13` | 143 | `6d58c4c2900bcdb79a18701f18da8e57048f298e6c42f1f6d42708e49a3c4b13` | unchanged |
| `store/useDataVaultStore.ts` | 15 | `8b6e1cb9e575cab2d80913bb1229c32bd3f226db7c91ae0f03ba15e623f70609` | 15 | `8b6e1cb9e575cab2d80913bb1229c32bd3f226db7c91ae0f03ba15e623f70609` | unchanged |
| `app/(cinematic)/globals.css` | 61 | `370693f85509189b1812b299280eff764a8df9040412a5ad9fde540b2739818d` | 61 | `370693f85509189b1812b299280eff764a8df9040412a5ad9fde540b2739818d` | unchanged |

Every protected file is byte-identical to its Mission 022 pre-change baseline.

## 6. Deliverable Provenance Table

| Deliverable | Before lines | Before SHA-256 | After lines | After SHA-256 | Classification |
|---|---:|---|---:|---|---|
| `components/SceneController.tsx` | 123 | `78191b2ad733b575dbacb57edc624de0e76035e4a6d1f3d3e2fed8bb3b09c4a5` | 149 | `6bc29216d09752a59b389cca6141089490a8c4960ffb1feb6efdd326ffb3525b` | only existing application source modified |
| `HANDOFF_022_CINEMATIC_EXPLICIT_SCENE_NAVIGATION.md` | — | — | `364` | `a671b1dd2640bbf290fd13868d9b81a13c906a69e6a75698fcbfac17cd7d887d` | Mission 022 handoff plus post-completion amendment; normalized self-hash |

Normalized self-hash method: encode this file as UTF-8 after replacing the handoff table's 64-character self-hash value with 64 ASCII zeroes, then calculate SHA-256. The physical-file hash is reported externally in the final completion response because inserting it would change the file recursively.

## 7. Repository State & Worktree Status

Final repository identity before handoff creation:

```text
branch=main
HEAD=fc5278edb3e0fc4c1c9f44200007d258ce39bb81
origin/main=fc5278edb3e0fc4c1c9f44200007d258ce39bb81
live remote main=fc5278edb3e0fc4c1c9f44200007d258ce39bb81
staged=(none)
unstaged=M components/SceneController.tsx
untracked=(none)
```

Expected final Mission 022 local delta:

```text
M components/SceneController.tsx
?? HANDOFF_022_CINEMATIC_EXPLICIT_SCENE_NAVIGATION.md
```

No commit, push, production deployment, dependency installation, or Vercel action occurred.

## 8. Disclosed Limitations & Technical Debt

- Physical-phone acceptance remains pending after local Chrome mobile-emulation verification.
- The chevron design is the deliberately minimal first implementation and may receive later aesthetic refinement.
- Scene 3 gray-ray / attenuation treatment remains deferred.
- The logo and broader brand pass remain deferred.
- Known Recharts maintenance and npm-audit debt remain outside Mission 022 scope.
- Chrome emitted unrelated `google_apis/gcm` browser-process messages during some sessions; the final scoped page runtime audit captured and classified application-origin events independently.

## 9. Next-Session Startup Context

Read exactly:

1. `HANDOFF_022_CINEMATIC_EXPLICIT_SCENE_NAVIGATION.md`
2. `HANDOFF_021_FINAL_PRODUCTION_LAUNCH.md`
3. `components/SceneController.tsx`

## 10. Encountered Gotchas & Triage

1. **AnimatePresence direction:** Exit direction can be stale unless passed through `custom`. Direction is stored before changing scene, and both `AnimatePresence` and `motion.div` receive it. Browser transforms proved next-left and previous-right motion.
2. **Transition locking:** `mode="wait"` serializes exit and entry, so the lock releases on the intended incoming scene's completion rather than a fixed timeout or outgoing completion. Rapid desktop clicks and mobile taps advanced one scene only.
3. **Z-index and hit areas:** Fixed `z-50` controls stayed above content while retaining only local 56×56 targets; no full-height edge rail was introduced.
4. **Scene 2 scrolling:** Vertical and diagonal mobile drags moved `scrollTop` while status remained Scene 2. Removal of root touch handlers eliminated scene-switch collisions.
5. **Passive dots:** Button semantics, focusability, magnetic attributes, and direct jumps were removed; nine visual marks remain under one passive status description.
6. **Boundary false negative:** The first Scene 9 loop used fixed 1.65-second delays against serialized 0.8-second exit plus 0.8-second entry. A click could occur before lock release. The corrected test waited for both expected status and identity transform after every scene.
7. **PowerShell scalarization false negative:** An intermediate Scene 1 assertion treated a single returned string as though it were an array and checked `.Count`. Corrected boundary checks calculate numeric selector counts inside the browser with exact selectors.
8. **Tailwind border false negative:** The first mobile plate assertion required `borderStyle === "none"`. Tailwind Preflight yields dormant `solid` borders with `0px` width. Corrected evidence recorded all sides: four `solid` styles, four `0px` widths, transparent background, and a visual crop showing only the chevron.
9. **Browser automation transport:** Long inline CDP commands sometimes exceeded shell-integration capture limits or returned terminal-buffer text. Verification was split into short, fail-fast stages; no scratch script or repository probe was created.
10. **Runtime false negative:** A combined assertion mixed application and browser-level DevTools events. Chrome's `google_apis/gcm` background message is not page-origin evidence. The final scoped audit installed page collectors before navigation, classified by source/origin, ran 1→2→3→4→3, and reported every conjunct independently.
11. **WebGL verification:** Two in-memory Scene 3 frames 700 ms apart had different SHA-256 values, proving active rendering without retaining screenshot artifacts.
12. **Repository process ownership:** Only listeners whose command lines identified this repository's Next CLI and the isolated Chrome profile were stopped. Temporary profiles, logs, and visual evidence were removed.
13. **Build transport:** Next completed all phases and printed `BUILD_EXIT=0`; the wrapper subsequently reported terminal closure. The build was correctly not repeated.
14. **Scope containment:** No implementation issue required changes outside `components/SceneController.tsx`; all protected files remained byte-identical.

Mission 022 is locally complete and ready for physical-device acceptance. Production remains unchanged.

## Post-Completion Amendment — Scene 1 CONEXUS Gateway

Date: 2026-08-25

### Reason and implementation

Derek Angell's physical-phone acceptance review identified a missing intentional path from the cinematic experience into the information-rich company website. The existing monumental Scene 1 `CONEXUS` title therefore became a semantic Next.js `Link` to `/ledger`. The visible title remains exactly `CONEXUS`; the existing `motion.h1`, reveal transition, typography, size, phase sequencing, timing, spacing, and Scene 1 composition remain intact. The link adds the concise accessible label `CONEXUS company site`, a pointer cursor, and restrained focus-visible treatment.

The existing upper-right `> ACCESS RAW LEDGER` bridge remains unchanged and continues to coexist with the title gateway.

### Verification chronology

1. Pre-amendment provenance matched the required baseline: `components/scenes/Scene1.tsx` was 92 lines with SHA-256 `5f9faced22b40c09ed7ea6c55b44841f178026ba365ba41ce3ad2f61e7e0a38a`; `components/SceneController.tsx` was 149 lines with SHA-256 `6bc29216d09752a59b389cca6141089490a8c4960ffb1feb6efdd326ffb3525b`.
2. The initial gateway implementation passed its first `npm run typecheck` and `npm run build` executions with exit code 0. The first CDP audit then stopped because its evaluator attempted to return a browser object graph and Chrome reported `-32000: Object reference chain is too long`. This was a verifier serialization failure, not application evidence.
3. The same stop also identified trailing whitespace on the newly moved `motion.h1` lines 76–78. Only those terminal spaces were removed. `git diff --check` then passed, and Scene 1 became 99 lines with final SHA-256 `de37eda4903849f0cb648b141460620d83c80310fa7fa9cd3fbf9dd424aab972`.
4. Because Scene 1 had changed after the first compile phase, one bounded recovery phase ran. Recovery `npm run typecheck` passed once with `RECOVERY_TYPECHECK_EXIT=0`; recovery `npm run build` passed once with `RECOVERY_BUILD_EXIT=0`, including all 33 static pages and `/ledger`.
5. CDP observation was corrected so page evaluations returned only booleans or `JSON.stringify` output containing flat primitive values. The next audit stopped on a premature assertion during Scene 1's intentional 800 ms pre-typing delay. Primitive evidence was `sceneStatus="Scene 1 of 9"`, `typedLength=0`, and `titleExists=false`; this was valid initial lifecycle behavior, not an application failure.
6. Lifecycle verification was corrected to accept the initial state, wait conditionally for `typedLength > 0`, and then wait conditionally for the gateway. Desktop typing began at a captured `typedLength=4`, and the full gateway sequence passed. That run stopped only because two generic console messages reported an unidentified 404.
7. A fresh Network-enabled audit captured the exact request. It was `GET http://127.0.0.1:3000/favicon.ico`, path `/favicon.ico`, status `404 Not Found`, MIME type `text/html`, resource type `Other`, initiator type `other`, with no initiator URL or stack URL, while `/` was active. Repository search found no favicon or manifest reference. Both generic console 404 entries named that exact URL and correlated to the single network response, yielding `CONSOLE_404_CORRELATION=PASS`. It was classified `BROWSER_IMPLICIT_RESOURCE`: browser-originated, optional, not referenced by application source, unrelated to Scene 1, and without visual, navigation, hydration, React, or runtime impact.
8. An intermediate mobile audit used an unjustified verifier threshold requiring the title link width to exceed 300 px. It stopped despite primitive evidence showing an active, visible, centered `279.859375 × 96` link with `pointerEvents="auto"`. The continuation used the standard minimum touch-target criterion of at least 44 px in both dimensions; no application source changed.

### Final desktop verification — 1440×900

- Initial Scene 1 mounted with passive status `Scene 1 of 9`, application root present, no runtime overlay, and the intentional pre-typing state accepted.
- Whitman typing began under a condition-based wait; CONEXUS subsequently revealed visibly and entirely inside the viewport.
- Visible text was exactly `CONEXUS`; the semantic element was `<a>`; raw `href` was `/ledger`; resolved destination was `http://127.0.0.1:3000/ledger`.
- Clicking CONEXUS loaded `/ledger`; browser Back returned normally to `/`.
- The Scene 1 Next chevron remained present and functional with a 56×56 target; Previous remained absent at the boundary.
- Mouse movement at both physical edges remained inert.
- `> ACCESS RAW LEDGER` remained textually and functionally unchanged.
- No horizontal overflow, Next error overlay, page-captured hydration/React error, or application-origin uncaught exception occurred.
- The only 404 was the classified browser-implicit `/favicon.ico` request described above; it did not affect the application contract.

### Final mobile verification — 390×844

- A condition-based wait reached the revealed gateway. Primitive geometry was `x=55.0625`, `y=473.796875`, `width=279.859375`, `height=96`, with center delta `0.0078125` px, `pointerEvents="auto"`, and the full element inside the viewport.
- Visible text was exactly `CONEXUS`; the element was semantic `<a>`; raw destination was `/ledger`; resolved destination was `http://127.0.0.1:3000/ledger`.
- Touch activation loaded `/ledger`; stored origin status proved the tap originated from `Scene 1 of 9` without an accidental scene transition; browser Back restored cinematic `Scene 1 of 9`.
- Document width and viewport width were both 390 px, proving no horizontal overflow and preserved centering.
- Horizontal swipe remained inert. The independent right chevron retained its 56×56 target and advanced to `Scene 2 of 9` when tapped.
- No Next runtime overlay, page-captured hydration/React error, application-origin uncaught exception, console 404, or network 404 occurred in the final mobile continuation.

### Final provenance and scope boundary

| File | Pre-amendment lines | Pre-amendment SHA-256 | Final lines | Final SHA-256 | Result |
|---|---:|---|---:|---|---|
| `components/scenes/Scene1.tsx` | 92 | `5f9faced22b40c09ed7ea6c55b44841f178026ba365ba41ce3ad2f61e7e0a38a` | 99 | `de37eda4903849f0cb648b141460620d83c80310fa7fa9cd3fbf9dd424aab972` | authorized gateway amendment only |
| `components/SceneController.tsx` | 149 | `6bc29216d09752a59b389cca6141089490a8c4960ffb1feb6efdd326ffb3525b` | 149 | `6bc29216d09752a59b389cca6141089490a8c4960ffb1feb6efdd326ffb3525b` | unchanged |

All other protected Mission 022 hashes remained identical to the table in Section 5. No swipe behavior, mouse-edge behavior, Previous/Next chevron implementation, transition lock, scene boundary, passive indicator, Scene 2, Scene 3, Scenes 4–9, canvas, cursor, store, cinematic global CSS, ledger source, route architecture, dependency, or public asset changed. No commit, push, or deployment occurred. Physical-phone acceptance of the amended Scene 1 gateway remains pending.