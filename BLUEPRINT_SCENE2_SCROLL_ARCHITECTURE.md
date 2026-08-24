# BLUEPRINT: Scene 2 Scroll Architecture

## Mission and Boundary

This document is the Mission 013 read-only architectural blueprint for Scene 2. It diagnoses the repeated programmatic-scroll failures in `components/scenes/Scene2.tsx` and `components/SceneController.tsx` and defines the structure that the next implementation mission must build.

No application source was changed in Mission 013. This blueprint is prescriptive documentation, not an implementation.

## Executive Conclusion

The last four repairs changed the scrolling command without first establishing a stable scrolling contract. Relative-rectangle math, `scrollIntoView`, `offsetTop`, and direct DOM lookup all ultimately depended on the same element and the same changing layout:

- the element that owns `scrollTop` is also the keyed Framer Motion scene-transition node;
- that node is replaced by `AnimatePresence`, horizontally transformed, and given contradictory positioning utilities;
- its overflow mode changes while Scene 2 is active;
- Scene 2 removes future rows from layout with `display: none`;
- the newly active row is measured while its text is empty or only beginning to type;
- the scroll effect does not run again as typing changes the row's height;
- Scene 2's vertical runway is expressed alongside responsive all-side padding utilities whose cascade must be treated as ambiguous until generated CSS is inspected.

The architectural root cause is therefore **the absence of a persistent scroll viewport and deterministic pre-scroll geometry**. The imperative APIs are downstream symptoms. A scroll call cannot create scroll range, cannot make an unstable target measurable, and cannot preserve state on a DOM node that the transition system owns and replaces.

The permanent repair is to separate responsibilities:

1. a persistent, non-animated viewport owns `scrollTop` and always remains `overflow-y-auto`;
2. a keyed inner scene panel owns Framer Motion entry and exit transforms;
3. Scene 2 owns a deterministic content runway and stable target geometry;
4. cinematic lock state gates user input, not the viewport's programmatic scroll capability;
5. target measurement occurs only after target geometry is committed and is expressed in viewport-content coordinates.

## Evidence Base

The diagnosis is based on the current source and the recorded sequence of failed repairs:

- `components/SceneController.tsx:80-104`
- `components/scenes/Scene2.tsx:42-59`
- `components/scenes/Scene2.tsx:88-134`
- `components/scenes/Scene2.tsx:170-238`
- `app/globals.css:36-45`
- `HANDOFF_009_SCENE2_CANVAS_READABILITY_AND_SCROLL_REPAIR.md:121-174`
- `HANDOFF_010_PROJECT_SYNC_AND_SCROLL_HOTFIX.md:22-40,99-142`
- `HANDOFF_011_SCENE2_OFFSETTOP_SCROLL_FIX.md:25-63,213-218`
- `HANDOFF_012_SCENE2_CINEMATIC_LOCKDOWN_AND_ESCAPE_HATCH.md:25-32,140-146`

Current source contains 14 paragraphs, indexed `0-13`, despite older handoffs referring to 13 paragraphs or indices `0-12` (`components/scenes/Scene2.tsx:7-22`). The next implementation must use the array length rather than a historical literal.

## 1. Current Architecture

### 1.1 Scroll ownership chain

The page mounts only `SceneController` (`app/page.tsx:1-5`). The document cannot scroll because `html, body` have `overflow: hidden`, `height: 100vh`, and `width: 100vw` (`app/globals.css:36-45`). Consequently, the nested controller viewport is the sole available scrolling mechanism.

The current DOM responsibilities are effectively:

```text
html/body (100vh; overflow hidden)
└─ main (h-screen; overflow hidden; SceneController)
   ├─ HeroTerminalCanvas
   ├─ edge indicators
   ├─ AnimatePresence mode="wait"
   │  └─ motion.div key={scene}
   │     ├─ ref={scrollContainerRef}
   │     ├─ id="conexus-scroll-viewport"
   │     ├─ horizontal entry/exit transform
   │     ├─ h-screen
   │     ├─ overflow-hidden OR overflow-y-auto
   │     └─ Scene2 section
   │        ├─ top padding/runway
   │        ├─ visible past rows
   │        ├─ active row
   │        ├─ display:none future rows
   │        └─ completion CTA
   ├─ navigation dots
   └─ KineticCursor
```

`SceneController.tsx:91-104` makes the keyed `motion.div` both transition surface and scroll viewport. This is the central responsibility collision.

### 1.2 Current viewport classes

At `components/SceneController.tsx:100`, the scroll owner receives:

```text
absolute top-0 left-0 h-screen w-screen
overflow-hidden | overflow-y-auto
overflow-x-hidden relative z-10
```

`absolute` and `relative` are mutually exclusive values of `position`. Only the winner in generated CSS applies. JSX token order is not a reliable CSS precedence contract. Regardless of which currently wins, the class list does not communicate one invariant containing-block model.

The same node is keyed by `scene` (`SceneController.tsx:95`) and transformed from `x: "100%"` through `x: 0` to `x: "-100%"` (`SceneController.tsx:96-99`). `AnimatePresence mode="wait"` replaces that node between scenes (`SceneController.tsx:91-104`). Thus the ref and ID designate a scene-lifetime node, not an application-lifetime viewport.

### 1.3 Current Scene 2 geometry

Scene 2's section uses this single utility list (`components/scenes/Scene2.tsx:171`):

```text
w-full flex flex-col items-start justify-start
p-8 md:p-24 lg:p-32
max-w-[1400px] mx-auto
pt-[30vh] pb-[60vh]
```

The intended top and bottom runway is mixed with base and responsive `padding` shorthands. Because `p-*` writes all four padding sides while `pt-*`/`pb-*` write individual sides, generated-rule ordering and media-query placement can change the effective vertical padding. The current source alone proves the conflict exists; a browser computed-style check is required to state which value wins at each breakpoint. The next architecture must remove the conflict rather than rely on Tailwind ordering.

Every future paragraph row receives `hidden` (`Scene2.tsx:182-196`), which is `display: none`. Future rows therefore contribute no box, height, or offset to the scrollable layout. On an index transition, the newly active row becomes visible, but its `displayText` initially contains an empty string (`Scene2.tsx:35,65-82,186`). The row has fixed vertical padding, but its final text height does not exist when the index effect first measures it.

The text then grows every 22 ms (`Scene2.tsx:67-76`). The scroll effect depends only on `currentParaIndex` (`Scene2.tsx:98-134`), so it does not correct its target as the active row wraps and expands.

## 2. Why the Last Four Scroll Methods Failed

### 2.1 Mission 009: relative viewport rectangles

Mission 009 used:

```text
scrollTop
+ paragraphRect.top - containerRect.top
- (clientHeight - paragraphRect.height) / 2
```

and clamped the result. A recorded target of `-122` became `0` (`HANDOFF_010_PROJECT_SYNC_AND_SCROLL_HOTFIX.md:24-40`). The clamp behaved correctly; it exposed that the measured geometry requested a position above the valid range. Changing arithmetic could not establish missing scroll range or final active-row height.

Rectangles also participate in the current transform/viewport ambiguity: `getBoundingClientRect()` is visual-viewport geometry, while `scrollTop` is layout content geometry. Combining them is valid only when the transformed ancestor and containing-block relationship is known and stable. The current scroll owner itself is the transformed node.

### 2.2 Mission 010: native `scrollIntoView`

Mission 010 delegated ancestor selection and centering to the browser (`HANDOFF_010_PROJECT_SYNC_AND_SCROLL_HOTFIX.md:99-142`). This removed hand-built arithmetic but did not remove the architectural ambiguity:

- the intended ancestor was transient and could be `overflow-hidden`;
- document scrolling was unavailable;
- centering remained bounded by the available scroll range;
- target height was not stable when the command ran.

`scrollIntoView` can only move a scrollable ancestor through an existing range. It cannot center an element when the ancestor's maximum scroll offset is zero or smaller than the requested offset.

### 2.3 Mission 011: `offsetTop` and direct `scrollTo`

Mission 011 used the current formula (`Scene2.tsx:117-121`):

```ts
const targetTop = activeParagraph.offsetTop
  - scrollContainer.clientHeight / 2
  + activeParagraph.clientHeight / 2;
const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
const clampedTarget = Math.max(0, Math.min(targetTop, maxScroll));
```

This formula assumes `activeParagraph.offsetTop` is already in the scroll container's content coordinate system. That is only guaranteed if the active row's `offsetParent`/offset chain aligns with that container. Mission 011 itself recorded this dependency (`HANDOFF_011_SCENE2_OFFSETTOP_SCROLL_FIX.md:213-218`). The contradictory positioning classes make the assumption implicit rather than contractual.

Even with a correct coordinate basis, the formula still clamps to zero whenever there is no positive scroll range. It also measures the active row before the row reaches final typed height.

### 2.4 Mission 012: DOM ID lookup, overflow lock, and end jump

Mission 012 replaced transient imperative ref access with `document.getElementById` and added lock/unlock state (`Scene2.tsx:54-59,88-92,98-134`; `SceneController.tsx:20,94,100`). The lookup can find the live node, but it finds the same architecturally overloaded node. Identity resolution does not repair dimensions, coordinate systems, or overflow state.

The completion branch computes:

```ts
scrollHeight - clientHeight
```

(`Scene2.tsx:107-112`). If that difference is zero, the requested end position is zero. If it is positive, changing `overflow-hidden` to `overflow-y-auto` and rendering all previously hidden rows happen through React commits whose exact paint/measurement timing is still coupled to the keyed viewport.

### 2.5 Common failure shared by all four

All four methods changed **how** the browser was asked to scroll. None established, before issuing the command, all of these invariants:

1. the same viewport DOM node persists;
2. that node always owns vertical scrolling;
3. `scrollHeight > clientHeight` by a known amount;
4. the target has stable height and a known coordinate basis;
5. the target can be centered within the available top/bottom runway;
6. Framer Motion does not transform or replace the viewport;
7. lock state does not alter the viewport's scrolling model.

That missing contract is the definitive architectural defect.

## 3. Mathematical Diagnosis

Let:

- `V = viewport.clientHeight`
- `S = viewport.scrollHeight`
- `M = max(0, S - V)`, the maximum valid vertical scroll offset
- `Y = target top in viewport-content coordinates`
- `H = target height`
- `T = Y - V/2 + H/2`, the ideal centered offset
- `C = max(0, min(T, M))`, the executable offset

Programmatic scrolling can produce visible movement only if `C !== currentScrollTop`. In particular:

- If `S <= V`, then `M = 0`, therefore `C = 0` for every target.
- If `T < 0`, then `C = 0`; this is expected for an early target without enough top runway.
- If `T > M`, then `C = M`; the target cannot center without enough bottom runway.
- If `Y` is measured in a different coordinate system, `T` is invalid even when `M > 0`.
- If `H` grows after measurement, the final visual center differs from the requested center.

The current architecture allows every one of those preconditions to fail. `scrollTo()` returning normally is not evidence that scrolling was possible; it only means the browser accepted the command.

### Required runtime assertions for the next mission

Before every nonzero scroll request, development instrumentation must capture:

```text
viewport identity
viewport computed position
viewport computed overflowY
viewport clientHeight (V)
viewport scrollHeight (S)
viewport current scrollTop
target offsetParent identity
target content-coordinate top (Y)
target height (H)
ideal target (T)
maximum target (M)
clamped target (C)
post-scroll scrollTop on the next two animation frames
```

Acceptance requires `S > V`, a finite coordinate-consistent `Y`, and post-scroll movement whenever `C` differs from the prior `scrollTop`.

## 4. Required DOM and CSS Architecture

### 4.1 Target hierarchy

The next mission must restructure the controller conceptually as:

```text
main.scene-shell (fixed viewport; overflow hidden)
├─ persistent visual background
├─ persistent scroll viewport
│  └─ AnimatePresence mode="wait"
│     └─ keyed motion scene panel
│        └─ current scene content
├─ persistent navigation chrome
└─ persistent cursor
```

The key rule is: **the persistent scroll viewport must be outside `AnimatePresence`; the keyed motion panel must be inside it.**

### 4.2 Persistent viewport contract

The viewport must:

- mount once with `SceneController` and remain the same DOM node through all scene changes;
- have one unambiguous positioning mode, preferably an inset absolute layer within the fixed `main` shell;
- have a definite block size equal to the application viewport;
- always use `overflow-y-auto` and `overflow-x-hidden`;
- own the sole viewport ref and stable ID;
- never receive Framer Motion `x`, `y`, scale, or layout transforms;
- never be keyed by scene;
- expose a stable coordinate system for all targets;
- reset `scrollTop` explicitly on scene entry where scene semantics require it.

Do not put both `absolute` and `relative` on this element. Do not use the viewport as the scene transition surface.

### 4.3 Inner scene-panel contract

The child `motion.div` may:

- be keyed by `scene`;
- use horizontal entry and exit transforms;
- participate in `AnimatePresence mode="wait"`;
- establish a normal-flow content wrapper and `min-height` of at least the viewport block size.

It must not own `overflow-y-auto`, the viewport ref, the viewport ID, or persistent `scrollTop` state.

### 4.4 Scene 2 runway contract

Scene 2 must separate horizontal gutters from vertical runway. The implementation must not combine a `padding` shorthand with independent vertical padding utilities at the same breakpoint.

Conceptually:

```text
Scene2 section
├─ explicit top runway
├─ paragraph list
│  └─ paragraph rows / stable anchors
├─ CTA
└─ explicit bottom runway
```

Requirements:

- horizontal padding may be responsive;
- top and bottom runway must be independently declared;
- computed top and bottom runway must be verified at mobile, medium, and large breakpoints;
- top runway must allow the first intended target alignment;
- bottom runway must be at least the amount required to center the final target and CTA;
- section width and `box-sizing` must not make padding calculations implicit;
- the content wrapper must grow naturally and make `S > V` before a positive target is requested.

Dedicated spacer elements or CSS custom properties are acceptable if they make computed geometry explicit. Relying on utility cascade coincidence is not.

### 4.5 Stable target geometry

The next implementation must choose one of these two explicit models:

#### Preferred model: stable row anchors

- Render a stable block anchor for every paragraph.
- Preserve each revealed/current row in normal flow.
- Measure a dedicated anchor whose position does not change as characters type.
- Reserve or otherwise stabilize the active row's intended geometry before scrolling.

#### Alternate model: scroll after geometry stabilization

- Reveal the row and allow text/layout to commit.
- Observe the target size with `ResizeObserver` or an equivalent bounded layout signal.
- Scroll once when the target reaches the mission-defined stable point.
- Prevent an unbounded scroll on every typed character.

A double `requestAnimationFrame` only waits for two frames; it does not guarantee that a 22 ms-per-character element has reached stable height. It may remain part of commit scheduling, but it is not the geometry contract.

Do not use `display: none` for elements whose reserved geometry is required for scroll-range planning. If unrevealed copy must not be visible or accessible, use stable non-copy anchors or reserved layout slots rather than exposing hidden narrative text.

## 5. Overflow Lock Redesign

`isScrollLocked` currently changes the viewport between `overflow-hidden` and `overflow-y-auto` (`SceneController.tsx:100`). The next architecture must keep `overflow-y-auto` stable.

If the cinematic sequence must suppress user scrolling, lock user input rather than changing the viewport's programmatic scrolling model. The implementation mission must define and test a scoped strategy for wheel, touch, and keyboard input while preserving:

- programmatic `scrollTo` capability;
- viewport identity;
- `scrollHeight`, `clientHeight`, and `scrollTop` semantics;
- cleanup on Scene 2 unmount and every navigation path;
- accessibility and reduced-motion behavior.

The lock must not be implemented on `html`/`body`; those are already globally non-scrolling. It must be scoped to the persistent nested viewport and must not block the code-owned scroll path.

## 6. Framer Motion Integration Rules

1. `AnimatePresence` owns scene-panel presence, not viewport presence.
2. Horizontal scene transitions apply only to the inner panel.
3. The viewport remains untransformed so viewport rectangles and content coordinates remain comparable.
4. `useScroll({ container })` receives the persistent viewport ref.
5. Scene 2 target refs belong to Scene 2, but the viewport ref belongs to the controller.
6. Scene exit cleanup may unlock input and cancel pending scroll work; it must not destroy the viewport.
7. New scene entry explicitly chooses its initial `scrollTop` rather than inheriting an accidental value.
8. Presence completion must not be used as a substitute for content-geometry stabilization.

## 7. Canonical Scroll Calculation

Once the hierarchy guarantees one coordinate system, calculate target position relative to the persistent viewport. The next mission may use either a verified offset chain or rect conversion, but it must document and assert the basis.

A rect-based conversion is valid when the viewport itself is untransformed:

```text
Y = currentScrollTop + targetRect.top - viewportRect.top
T = Y - viewportClientHeight / 2 + targetHeight / 2
M = max(0, scrollHeight - clientHeight)
C = clamp(T, 0, M)
```

An offset-based conversion is valid only if runtime/source structure proves the target offset is relative to the viewport content box. Do not assume `offsetTop` alone provides that guarantee.

The scroll operation must be issued to the persistent viewport. Reduced-motion preference should select instant behavior without changing the target calculation.

## 8. Next-Mission Refactoring Sequence

Implement in this order so each dependency is established before scroll logic is restored:

1. **Split controller responsibilities.** Create the persistent viewport outside `AnimatePresence`; move the keyed `motion.div` inside it.
2. **Normalize CSS.** Give `main`, viewport, and motion panel one explicit height/position contract; remove contradictory position utilities.
3. **Keep overflow stable.** Make the viewport permanently `overflow-y-auto overflow-x-hidden`.
4. **Reset scene scroll deliberately.** Define controller behavior for entering Scene 1, Scene 2, and later scenes.
5. **Rebuild Scene 2 runway.** Separate responsive horizontal padding from explicit top/bottom spacers and verify computed values.
6. **Define stable anchors.** Ensure each paragraph transition has a committed, measurable target and sufficient range.
7. **Move Motion hooks to the persistent viewport.** Preserve paragraph-zero variable-font behavior without coupling viewport identity to presence transitions.
8. **Replace overflow lock with input gating.** Include wheel, touch, keyboard, unmount, skip, completion, and navigation cleanup.
9. **Use one canonical coordinate calculation.** Assert coordinate basis and clamp only after proving positive range.
10. **Instrument before polishing.** Record pre/post geometry for every paragraph index `0-13`.
11. **Add smooth behavior only after instant scrolling passes.** First prove exact movement with instant behavior; then enable smooth behavior and reduced-motion handling.
12. **Remove temporary instrumentation after evidence is captured.** Do not leave title mutation, console noise, probe files, or debug UI.

## 9. Acceptance Matrix for the Implementation Mission

### Structural

- The viewport node remains reference-equal across scene changes.
- The viewport is outside `AnimatePresence` and has no Motion transform.
- The keyed inner panel is inside `AnimatePresence`.
- Exactly one positioning utility governs the viewport.
- `overflow-y` remains `auto` before, during, and after Scene 2.

### Geometry

- At every paragraph transition, `scrollHeight > clientHeight` when a positive target is expected.
- Target coordinates are in viewport-content space.
- Paragraph indices `0-13` all produce finite measurements.
- The first target follows the explicitly chosen initial-alignment policy.
- The final paragraph and CTA can reach their intended alignment without an upper clamp caused by missing bottom runway.
- Responsive breakpoints preserve the vertical runway.

### Behavior

- Instant test scrolling changes `scrollTop` to the clamped target.
- Smooth scrolling reaches the same final target.
- Programmatic scrolling works while cinematic user-input lock is active.
- Skip cancels timers, reveals completion state, unlocks input, and reaches the final target.
- Scene exit cancels animation frames/observers and unlocks input.
- Entering another scene starts at its explicitly defined scroll position.
- Paragraph-zero `useScroll` typography remains bound to the persistent viewport.

### Accessibility and resilience

- Keyboard and touch lock behavior is explicitly tested.
- Reduced motion uses deterministic instant scrolling.
- No hidden future narrative copy becomes focusable or announced prematurely.
- Resizing/reflowing recomputes geometry without trapping the viewport.

## 10. Risks and Unverified Details

1. Mission 013 did not run a browser or development server by scope. Exact computed utility precedence and live geometry remain browser-verification items for the implementation mission.
2. The source proves conflicting padding and positioning declarations, but generated Tailwind CSS determines their current winner. The blueprint removes those conflicts rather than depending on a guessed winner.
3. `overflow: hidden` generally retains a programmatic scroll mechanism in modern browsers; therefore lock mode alone is not asserted as the sole cause. It is still an unstable responsibility and must be removed from the scrolling contract.
4. `AnimatePresence` does not inherently prevent scrolling. The defect is assigning presence/transform lifecycle and persistent viewport ownership to the same node.
5. The active row grows during typing. The implementation must choose whether visual alignment is based on an anchor, reserved final geometry, or a bounded stabilization event.
6. The repository has a pre-existing broad dirty state. Mission 013 does not resolve it.

## Final Architecture Decision

Do not attempt a fifth imperative API substitution inside the present tree. First create a persistent, untransformed, permanently scrollable viewport outside `AnimatePresence`; move scene transitions to an inner keyed panel; give Scene 2 explicit, breakpoint-safe runway and stable anchors; and gate user input independently of overflow. Only then apply one coordinate-verified scroll calculation.

That structure converts scrolling from a best-effort side effect into a testable invariant: **persistent owner + positive range + stable target + shared coordinate system = observable programmatic movement.**