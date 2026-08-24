# HANDOFF_010_PROJECT_SYNC_AND_SCROLL_HOTFIX

## Mission Result

Mission 010 audited the partial Mission 009 implementation, removed its rogue title-based debug trace, and replaced Scene 2's regressed manual auto-scroll calculation with native centered scrolling.

The source change is isolated to `components/scenes/Scene2.tsx`. The only other file created is this required handoff. No protected component was edited.

## Files Directly Read This Session

The following exact files were read during this session:

- `HANDOFF_009_SCENE2_CANVAS_READABILITY_AND_SCROLL_REPAIR.md` — read in full, lines 1–284.
- `components/scenes/Scene2.tsx`
- `components/KineticCursor.tsx`
- `components/SceneController.tsx`
- `package.json`
- `tsconfig.json`

Git status and diffs were also inspected before editing. The workspace already contained many unrelated deletions, modifications, and untracked files. Those pre-existing changes were not cleaned up or altered by this mission.

## Mission 009 Audit

### Auto-scroll regression and rogue trace found

Before this repair, `components/scenes/Scene2.tsx` calculated a manual target from paragraph and container rectangles, clamped it, wrote the values into the browser title, and scrolled the container:

```ts
const targetTop =
  scrollContainer.scrollTop +
  (paragraphRect.top - containerRect.top) -
  (scrollContainer.clientHeight - paragraphRect.height) / 2;
const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
const clampedTargetTop = Math.max(0, Math.min(targetTop, maxScroll));
// TEMP DEBUG
document.title = `DBG idx=${currentParaIndex} target=${Math.round(targetTop)} pT=${Math.round(paragraphRect.top)} pH=${Math.round(paragraphRect.height)} cT=${Math.round(containerRect.top)} cH=${scrollContainer.clientHeight} sh=${scrollContainer.scrollHeight}`;
scrollContainer.scrollTo({ top: clampedTargetTop, behavior: "smooth" });
```

This is the exact path that allowed a negative target such as the mission-reported `target=-122` to become `0`, preventing downward paragraph-follow scrolling.

### Kinetic Cursor mount verified

`components/SceneController.tsx` contains the exact import:

```ts
import KineticCursor from "./KineticCursor";
```

It renders the cursor inside the root `<main>` after the navigation dots:

```tsx
<KineticCursor />
```

`components/KineticCursor.tsx` was inspected directly. Its fine-pointer guard, magnetic target handling, event registration/cleanup, spring-driven reticle, and pointer dot were present. No edits were made to it.

### Scene 2 font-weight feature verified

`components/scenes/Scene2.tsx` retains the scroll-driven variable typography setup:

```ts
const { scrollYProgress } = useScroll({
  container: scrollContainerRef,
  target: p0Ref,
  offset: ["start 0.3", "end start"],
});
const fontWeight = useTransform(scrollYProgress, [0, 1], [300, 800]);
```

Paragraph 0 remains bound to that MotionValue:

```tsx
ref={i === 0 ? p0Ref : undefined}
style={i === 0 ? { fontWeight } : undefined}
```

### CTA verified

The completion CTA remains in `components/scenes/Scene2.tsx` with its existing callback and magnetic behavior:

```tsx
<button
  onClick={onAdvance}
  data-magnetic
  data-magnetic-strength="0.5"
  className="font-mono text-[0.65rem] uppercase tracking-widest text-white/70 border border-white/20 px-6 py-3 hover:bg-white hover:text-void transition-colors"
>
  Enter the refinery →
</button>
```

`components/SceneController.tsx` continues to supply the callback:

```tsx
<Scene2 key="scene2" onProgressChange={handleScene2Progress} scrollContainerRef={scrollContainerRef} onAdvance={() => transitionScene("next")} />
```

## Implemented Repair

Only the auto-scroll block in `components/scenes/Scene2.tsx` was changed. Its current implementation is:

```ts
// Auto-scroll the active paragraph within SceneController's nested overflow
// viewport. Native centering accounts for the section padding without the
// negative-offset regression from manual container math. Fires only when
// currentParaIndex changes (never per typed character).
useEffect(() => {
  const scrollContainer = scrollContainerRef?.current;
  const activeParagraph = activeRef.current;
  if (!scrollContainer || !activeParagraph) return;

  let raf1: number | null = null;
  let raf2: number | null = null;

  const performScroll = () => {
    activeParagraph.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  raf1 = requestAnimationFrame(() => {
    raf2 = requestAnimationFrame(performScroll);
  });

  return () => {
    if (raf1 !== null) cancelAnimationFrame(raf1);
    if (raf2 !== null) cancelAnimationFrame(raf2);
  };
}, [currentParaIndex, scrollContainerRef]);
```

### Why this removes the regression

- There is no longer a hand-built target that can become negative and clamp to the top.
- `block: "center"` delegates centered alignment and valid scroll limits to the browser.
- `activeParagraph` is a descendant of the `overflow-y-auto` SceneController viewport, so the native operation scrolls its enclosing scrollable ancestor.
- The existing double `requestAnimationFrame` scheduling remains, allowing the new active paragraph's layout to settle before scrolling.
- The effect still depends on `currentParaIndex`, not `charIndex` or `typedText`, so it does not re-fire for each typed character.
- The guard still uses `scrollContainerRef` to require the intended SceneController scroll viewport before scheduling the operation. The same ref remains the `useScroll` container for paragraph 0's font-weight transform.

### Cleanup result

A repository search after the edit found no matches for:

```text
document.title
TEMP DEBUG
console.log / console.debug / console.info / console.warn / console.error
```

## Preserved Scene 2 Invariants

The following exact current source was re-read after the edit:

- Typewriter character delay: `}, 22); // ~45 chars/sec — fast but readable`
- Between-paragraph pause: `}, 1000);`
- Completed paragraph opacity: `const opacity = isActive ? 1 : isPast ? 0.76 : 0;`
- Layout padding: `pt-[30vh] pb-[60vh]`
- Opening font-weight range: `useTransform(scrollYProgress, [0, 1], [300, 800])`
- CTA text: `Enter the refinery →`
- Effect dependencies: `[currentParaIndex, scrollContainerRef]`

No paragraph copy, typewriter timing, progress callback, typography class, opacity rule, CTA behavior, or public prop signature was changed.

## Protected-File Integrity

SHA-256 hashes were captured before the Scene 2 edit and again after it. The final full hashes matched the baselines exactly:

| Protected file | SHA-256 before and after |
|---|---|
| `components/HeroTerminalCanvas.tsx` | `3C6888B04957106087065B199DFA8D3BC00F221C3457811F8669E46E640E84D9` |
| `components/KineticCursor.tsx` | `6D58C4C2900BCDB79A18701F18DA8E57048F298E6C42F1F6D42708E49A3C4B13` |
| `components/SceneController.tsx` | `01E9BBD60875BD4FEECE28835D07EDC655B6A436822F60BC6700F91B231F403E` |

This directly verifies that Mission 010 did not modify any of those three files.

## Verification Results

The scripts were confirmed from `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "typecheck": "tsc --noEmit"
}
```

Each specified command was run exactly once after implementation.

### 1. TypeScript

Command:

```text
npm run typecheck
```

Result: **PASS, exit code 0**. `tsc --noEmit` reported no errors.

### 2. Production build

Command:

```text
npm run build
```

Result: **PASS, exit code 0**.

Direct terminal output included:

```text
✓ Compiled successfully in 5.0s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (4/4)
✓ Collecting build traces
✓ Finalizing page optimization
```

The build reported Next.js `15.5.23` and generated `/` plus `/_not-found` successfully.

### 3. Development build/startup

The `npm run dev` script was invoked once with explicit non-conflicting host/port arguments:

```text
npm run dev -- --hostname 127.0.0.1 --port 3010
```

The server was run in a PowerShell background job, queried at `/`, and then stopped and removed in the same command. No log or probe file was created.

Result: **PASS, command exit code 0**.

Direct terminal output included:

```text
✓ Ready in 2.8s
✓ Compiled / in 2.5s (1376 modules)
GET / 200 in 3595ms
GET / 200 in 81ms
DEV_HTTP_STATUS=200
```

## Scope Accounting

### Modified

- `components/scenes/Scene2.tsx` — removed title debugging and replaced manual scroll-target math with native centered `scrollIntoView`.

### Created

- `HANDOFF_010_PROJECT_SYNC_AND_SCROLL_HOTFIX.md` — this required sequential handoff.

### Explicitly not modified

- `components/HeroTerminalCanvas.tsx`
- `components/KineticCursor.tsx`
- `components/SceneController.tsx`
- All existing handoff files
- Package, TypeScript, Next.js, Tailwind, and dependency configuration
- Every other application component and route

## Verification Boundary

Compilation, type checking, development startup, root-route compilation, HTTP response, source invariants, debug-trace removal, and protected-file integrity were directly verified this session.

No interactive browser or automated browser harness was available in this session. Therefore, this handoff does **not** claim direct visual observation of all 13 timed paragraph transitions. The code path now uses the mission-recommended native centered scrolling API, and the development route compiled and served successfully, but a human browser pass should still watch the complete manifesto sequence to assess perceived smoothness and exact visual centering at each paragraph.
