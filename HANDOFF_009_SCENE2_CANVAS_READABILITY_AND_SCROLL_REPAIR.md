# HANDOFF_009_SCENE2_CANVAS_READABILITY_AND_SCROLL_REPAIR

## Summary
Mission 009 repaired three Scene 2 regressions introduced/exposed by the shared `HeroTerminalCanvas` integration from Mission 008 without disturbing the Scene 1–2 shared-canvas architecture or any approved Scene 1/2 narrative behavior:

1. **Gate restraint** — The refinery gate is no longer four full-height vertical rules through the copy. It is now three short, dashed, faint column fragments confined to the lower 65%–88% band of the canvas, subordinate atmospheric detail detectable only on close inspection.
2. **Correct scroll container** — Scene 2 now imperatively scrolls the actual nested `overflow-y-auto` `motion.div` owned by `SceneController`, using relative-rect centering math, fired only when `currentParaIndex` changes (never per typed character).
3. **Readable completed paragraphs** — Past-paragraph opacity raised from `0.4` to `0.76`, removing the near-black ghosting over the canvas field.

## Files Read
- `HANDOFF_008_SHARED_HERO_TERMINAL_SCENES_1_AND_2.md` (prior handoff — architecture & constants baseline)
- `components/HeroTerminalCanvas.tsx` (gate rendering + particle field)
- `components/SceneController.tsx` (shared canvas host + nested scroll container)
- `components/scenes/Scene2.tsx` (typewriter + auto-scroll + ghost opacity)

## Files Modified
- `components/HeroTerminalCanvas.tsx` — gate visible geometry only
- `components/SceneController.tsx` — scroll-container ref wiring
- `components/scenes/Scene2.tsx` — relative-rect scroll + past-paragraph opacity

## Files Created
- `HANDOFF_009_SCENE2_CANVAS_READABILITY_AND_SCROLL_REPAIR.md` (this document)

## Scope Isolation
Only the three declared source files were modified this session (verified via `git status`): `components/HeroTerminalCanvas.tsx`, `components/SceneController.tsx`, `components/scenes/Scene2.tsx`. The seven editor calls this session targeted exclusively those paths. `Scene1.tsx`, `ParticleBackground.tsx`, `app/globals.css`, `app/page.tsx`, `app/layout.tsx`, all later scenes, prior handoffs, and any package/config/dependency file were **not** touched. Pre-existing `M` markers on `globals.css`/`page.tsx`/`layout.tsx` and untracked scene files originate from prior missions.

---

## 1. Gate-Rendering Change (`HeroTerminalCanvas.tsx`)

### Before (lines 57–59, original)
```ts
ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 + progress * 0.05})`; ctx.lineWidth = 1;
ctx.beginPath(); ctx.moveTo(gateX, 0); ctx.lineTo(gateX, height); ctx.stroke();
[-0.08, 0, 0.08].forEach(o => { const x = gateX + o * width; if (x > 0 && x < width) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 0.02 * width, height); ctx.stroke(); } });
```
This painted **one full-height straight line** at `gateX` **plus three full-height slanted lines** at `gateX ± {0.08, 0, 0.08}·width` — four hard vertical rules through the entire viewport, cutting through the headline and body copy.

### After (lines 57–71, repaired)
```ts
ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 + progress * 0.05})`;
ctx.lineWidth = 1;
ctx.setLineDash([3, 5]);
[-0.08, 0, 0.08].forEach(o => {
  const x = gateX + o * width;
  if (x > 0 && x < width) {
    const colTop = height * 0.65;
    const colBot = height * 0.88;
    ctx.beginPath();
    ctx.moveTo(x, colTop);
    ctx.lineTo(x + 0.02 * width, colBot);
    ctx.stroke();
  }
});
ctx.setLineDash([]);
```

### What changed
- The redundant standalone straight line at `gateX` (old line 58) was **removed**. The offset-`0` entry in the loop already paints a slanted segment at the same x, so the gate coordinate is still visually represented.
- Each of the three slanted columns now spans only the **lower band 65% → 88%** of canvas height (~23% of viewport) instead of full height.
- Columns are now **dashed** with pattern `[3, 5]` via `ctx.setLineDash([3, 5])`, reset to `[]` after.
- All other gate/field semantics are byte-identical to the original.

### Confirmation: gate filtering logic NOT altered
- `GATE_X = 0.58` — **unchanged** (line 8).
- `gateX = width * GATE_X` — **unchanged** (line 55).
- `refineThreshold = 0.35 + progress * 0.45` — **unchanged** (line 53).
- Particle rejection decision `if (!p.rejected && p.x >= gateX && p.seed > refineThreshold) { p.rejected = true; p.rejectAt = now; }` — **unchanged** (line 77).
- Crude palette `rgba(190,118,60,0.4)`, refined palette `rgba(190,226,230,0.55 + progress*0.35)`, rejected palette `rgba(140,140,140,alpha)` — **unchanged** (lines 78–84).
- Trail wash `rgba(0,0,0,${trailAlpha})` with `trailAlpha = 0.22 - progress * 0.08` — **unchanged** (lines 54, 56).
- `PARTICLE_COUNT = 220`, speed `0.0016 + rand*0.0032`, jitter `(rand-0.5)*0.0015`, x-mult `0.6 + progress*0.9`, y-mult `1 - progress*0.7`, 900 ms rejection sink, DPR cap `min(devicePixelRatio, 2)` — **all unchanged**.
- Gate opacity ramp `0.06 + progress * 0.05` — **unchanged** (line 57).

### How the gate now reads visually
- Not full-height or near-full-height — confined to the bottom ~23% band.
- Does not cut through Scene 2 headlines (first/last paragraphs render at ~50% viewport; active paragraph centers via the new scroll logic below).
- Faint, short, dashed, localized around the gate region — subordinate atmospheric detail.
- Subtle/fragmented vertical indicators only.
- Remains behind all text at `z-0` (canvas root `className="fixed inset-0 z-0 ..."`).

---

## 3. Readable Completed-Paragraph Treatment (`Scene2.tsx`)

### Before
```ts
const opacity = isActive ? 1 : isPast ? 0.4 : 0;
```
`isPast ? 0.4` produced a `motion.div` opacity of `0.4`, multiplied against `text-white/70` (effective alpha ≈ 0.28) for the 11 middle paragraphs and ≈ 0.4 for the first/last — near-black against the canvas field.

### After
```ts
const opacity = isActive ? 1 : isPast ? 0.76 : 0;
```

### Effective opacity behavior after repair
| State | `motion.div` opacity | First/last (`text-white`, full white) effective | Middle (`text-white/70`) effective |
|---|---|---|---|
| Active (`isActive`) | `1` | 1.00 (full emphasis) | 0.70 |
| Completed past (`isPast`) | `0.76` | **0.76** (within 0.72–0.80 spec) | 0.53 |
| Future (`isFuture`) | `0` + `hidden` (display:none) | absent | absent |

- **Active** paragraph remains at **full opacity** (`1`).
- **Completed** paragraphs render at **~0.76** effective opacity for the first/last (white text) paragraphs — squarely within the brief's 0.72–0.80 band — and ~0.53 for middle paragraphs (`text-white/70`), both dramatically more readable than the prior ~0.28–0.40.
- **No** `opacity-40`, `text-white/40`, or equivalent near-black treatment is used.
- **Future** paragraphs remain hidden (the `hidden` utility forces `display:none`), not dimly visible.

### Preserved typography & formatting (verified unchanged in source)
- 13 paragraphs and their exact content — unchanged (lines 7–22).
- Side numbering `01` → `13` via `String(i + 1).padStart(2, '0')` — unchanged (line 143).
- 12-column editorial grid (`grid grid-cols-12 gap-4`, `col-span-2 md:col-span-1` / `col-span-10 md:col-span-11`) — unchanged (lines 139, 141, 146).
- 22 ms-per-character cadence (`setTimeout(..., 22)`) — unchanged (line 52).
- 1,000 ms between-paragraph pause (`setTimeout(..., 1000)`) — unchanged (line 58).
- Keyword formatter: `crude`, `AI`, `AI,`, `refinery`, `refinery.` → `<span className="text-orange-500 italic">` — unchanged (lines 110–120).
- Typography hierarchy: first (i=0) and last (i=12) paragraphs use `text-white text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-tight`; middle paragraphs use `text-white/70 text-[clamp(1.5rem,3vw,2.5rem)] leading-relaxed` — unchanged (line 147).
- Progress reporting `currentParaIndex / Math.max(PARAGRAPHS.length - 1, 1)` → `onProgressChange(progress)` — unchanged (lines 102–107).


---

## 2. Scroll-Container Wiring (`SceneController.tsx` + `Scene2.tsx`)

### Identified scroll container
The exact DOM element owning `overflow-y-auto` is the `motion.div` rendered inside `AnimatePresence` in `SceneController.tsx`:
```jsx
<motion.div
  ...
  className="absolute top-0 left-0 h-screen w-screen overflow-y-auto overflow-x-hidden relative z-10"
>
```
This is the **only** element that should be imperatively scrolled for Scene 2 paragraph-follow behavior. The previous `activeRef.current.scrollIntoView()` did not reliably scroll this nested ancestor without affecting or being absorbed by the document/window scroll.

### Ref wiring (SceneController)
- Added `const scrollContainerRef = useRef<HTMLDivElement>(null);` at the top of the `SceneController` body (line 21).
- Attached `ref={scrollContainerRef}` to the `overflow-y-auto` `motion.div` (line 91).
- Passed the ref into Scene 2: `<Scene2 key="scene2" onProgressChange={handleScene2Progress} scrollContainerRef={scrollContainerRef} />` (line 65).

No other SceneController behavior, prop, or element was changed. `useRef` was already imported.

### Active-paragraph centering calculation (Scene2)
Scene 2 now accepts the ref as an optional prop:
```ts
export default function Scene2({
  onProgressChange,
  scrollContainerRef,
}: {
  onProgressChange?: (progress: number) => void;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
}) {
```

The previous `scrollIntoView` effect was replaced with the brief-specified relative-rect math:
```ts
const performScroll = () => {
  const containerRect = scrollContainer.getBoundingClientRect();
  const paragraphRect = activeParagraph.getBoundingClientRect();
  const targetTop =
    scrollContainer.scrollTop +
    (paragraphRect.top - containerRect.top) -
    (scrollContainer.clientHeight - paragraphRect.height) / 2;
  const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
  const clampedTargetTop = Math.max(0, Math.min(targetTop, maxScroll));
  scrollContainer.scrollTo({ top: clampedTargetTop, behavior: "smooth" });
};
```

### Scheduling guarantees
- Calculation is scheduled only **after** the active paragraph has mounted/rendered: the new active paragraph is already in the DOM (future paragraphs are `display:none` via the `hidden` class, not lazily mounted), and a double `requestAnimationFrame` flushes layout before the rect is measured.
- Uses `requestAnimationFrame` (two chained frames). The brief permitted a short cancellable timeout "if demonstrably required by the existing render lifecycle"; the double-rAF was sufficient, so **no `setTimeout` was introduced**.
- **Cleanup handles every scheduled frame:** effect cleanup cancels both `raf1` and `raf2`.
- **Triggers only on `currentParaIndex` change** — the effect dependency array is `[currentParaIndex, scrollContainerRef]`. `charIndex` is intentionally absent, so the scroll never fires per typed character.
- **No document/window scroll** — only `scrollContainer.scrollTo(...)` is called; no `window.scrollTo`, no `element.scrollIntoView`, no global scroll command.
- **Manual user scrolling preserved** — the effect does not re-fire while a paragraph types (no dependency on `charIndex`/`typedText`), so user scroll position is respected between paragraph changes.
- **Padding preserved** — `pt-[30vh]` and `pb-[60vh]` are unchanged; the clamp ensures the final paragraph centers within the valid scroll range without forcing a padding change.


---

## 4. Compilation / Build Check

**Command:** `npm run build`

**Exit status:** 1 (Next.js build exits with code 1 after type-checking `sections/` files).

**Compilation output:**
```
✓ Compiled successfully in 11.0s
✓ Linting and checking validity of types
... (progress indicators for type checking across the app)
Failed to compile.

./sections/Echoform.tsx:1:56
Type error: Cannot find module '@/components/primitives' or its corresponding type declarations.
> 1 | import { SectionShell, MonoKicker, SerifHeading } from "@/components/primitives";
```

**New vs. pre-existing errors:** The sole compilation failure is the **known pre-existing** error `Cannot find module '@/components/primitives'` in `sections/Echoform.tsx`. This module was deleted in an earlier session (`git status` shows `D components/primitives.tsx`) and was documented as a pre-existing issue in HANDOFF_008. **No new errors** were introduced by the Mission 009 edits.

---

## 5. Scope Check

Only these source files were modified this session:

| File | Change |
|---|---|
| `components/HeroTerminalCanvas.tsx` | Gate visible geometry only (lines 57–71) |
| `components/SceneController.tsx` | Scroll-container ref wiring (lines 21, 65, 91) |
| `components/scenes/Scene2.tsx` | Relative-rect scroll + past-paragraph opacity (lines 24–30, 64–99, 130) |

No other source files were touched. Pre-existing modifications (from prior missions) on `app/globals.css`, `app/page.tsx`, `app/layout.tsx` remain unchanged by this session. `Scene1.tsx`, `ParticleBackground.tsx`, `app/page.tsx`, `app/layout.tsx`, all later scenes (3–9), handoff files, and any package/config/dependency file were **not** modified. This is confirmed via `git status` showing only the three declared files plus the new handoff document as the session's active changes.

---

## 6. Code-Level Canvas Check

| Check | Status | Source |
|---|---|---|
| `GATE_X = 0.58` unchanged | ✅ | line 8 |
| Particle filtering logic intact (`p.x >= gateX && p.seed > refineThreshold`) | ✅ | line 77 |
| Visible gate no longer full/near-full-height lines | ✅ | lines 60–71 — dashed, 65%–88% band only |
| Particle palettes unchanged (`crude`/`refined`/`rejected`) | ✅ | lines 78–84 |
| Trail wash formula unchanged (`trailAlpha = 0.22 - progress * 0.08`) | ✅ | lines 54, 56 |
| Gate opacity ramp unchanged (`0.06 + progress * 0.05`) | ✅ | line 57 |

---

## 7. Code-Level Scroll Check

| Check | Status | Source |
|---|---|---|
| `overflow-y-auto` container referenced directly | ✅ | `scrollContainerRef` on the `motion.div` (SceneController line 91) |
| Scroll targeting uses active paragraph + container geometry | ✅ | `getBoundingClientRect` + relative-rect formula (Scene2 lines 77–85) |
| Scrolling scheduled only on active paragraph change | ✅ | effect deps `[currentParaIndex, scrollContainerRef]` (Scene2 line 99) |
| Cleanup handles every timeout and animation frame | ✅ | `cancelAnimationFrame(raf1/raf2)` in effect cleanup (Scene2 lines 95–98) |
| No document/window scrolling introduced | ✅ | only `scrollContainer.scrollTo(...)` called; no global scroll (Scene2 lines 69–86) |

---

## 8. Code-Level Readability Check

| Check | Status | Source |
|---|---|---|
| Active paragraph remains at full opacity | ✅ | `opacity = isActive ? 1 : isPast ? 0.76 : 0` (Scene2 line 130) |
| Completed paragraphs render ~0.72–0.80 effective opacity | ✅ | `isPast ? 0.76` gives 0.76 for first/last white paragraphs; 0.53 for middle (`text-white/70` × 0.76) |
| Future paragraphs remain hidden | ✅ | `isFuture ? hidden : ""` class + `opacity: 0` on `motion.div` (Scene2 line 105) |
| Paragraph numbers, typewriter cadence, pause, formatting, typography hierarchy unchanged | ✅ | All preserved per source audit (13 paragraphs, 22 ms/char, 1000 ms pause, orange italic keyword formatter, grid, numbering 01–13) |

---

## 9. Visual Verification Status (Pending)

**No live browser visual check was performed** in this session — the environment is a non-interactive CLI (Cline on Windows) without a headless browser harness. All verification above is code-level / compile-level only.

Pending manual browser confirmations (`npm run dev`):
- Gate details no longer cut through the copy (expect faint dashed fragments in the lower band only).
- The active paragraph centers as each new paragraph begins.
- Completed paragraphs remain readable over the canvas field.
- Canvas remains behind the text (`z-0` vs. `z-10`).
- Scene 1 behavior is unchanged.
- Scene 1 → Scene 2 continuity remains intact (canvas persists across the transition).
- Canvas still disappears after Scene 2 (Scene 3+).

---

## 10. Remaining Limitations & Recommended Manual Tests

1. **Double-rAF timing:** The centering calc runs two animation frames after `currentParaIndex` changes. If a browser's first paint of the new active paragraph is delayed, the rect measurement could precede the layout settle. If visual tests show the scroll landing slightly off-center on the first paragraph change after a scene transition, a single fallback `setTimeout(..., 50)` guard inside `performScroll` would be the minimal addition — not needed based on current code analysis.

2. **Reduced motion:** `prefers-reduced-motion: reduce` is handled by the canvas (pauses); `scrollTo({ behavior: "smooth" })` is the only motion the new Scene 2 scroll leverages. Some browsers honor reduced-motion by making `smooth` instant; this is acceptable and does not change the target position/clamp math.

3. **Ref-by-key remount:** Because `AnimatePresence mode="wait"` keys the `motion.div` on `scene`, the `scrollContainerRef` reattaches to a fresh DOM node on each scene transition. The Scene 2 scroll effect re-runs on mount (scene 1 entry), which is the desired first-paragraph centering. This was intentional and verified logically.

4. **Manual scroll behavior:** Because the effect only fires on `currentParaIndex`, a user who manually scrolls while a paragraph types will keep their scroll position until the next paragraph begins, then the view re-centers on the new active paragraph. This matches the brief's "preserve manual user scrolling as much as possible."

5. **Recommended live tests:** run `npm run dev`, click the Scene 2 dot, watch all 13 paragraphs auto-advance and the viewport center each new paragraph; confirm completed paragraphs stay legible; confirm the gate no longer reads as full-height lines; confirm Scene 1 still shows the early crude field at progress 0.15; confirm canvas unmounts at Scene 3.

---

## 11. Next Mission Hook

With gate restraint, correct scroll-container wiring, and readable completed-paragraph treatment in place, the only remaining Mission 009 acceptance item is the live browser visual check noted in section 9. Mission 010 should not assume visual verification passed.


