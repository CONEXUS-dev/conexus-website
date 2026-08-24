# HANDOFF_008_SHARED_HERO_TERMINAL_SCENES_1_AND_2

## Summary
Created shared full-viewport canvas background (`HeroTerminalCanvas`) for Scene 1 and Scene 2 based on recovered `HeroTerminal.tsx` logic. Canvas remains visually continuous during Scene 1→2 transition, disappears for Scene 3+.

## Files Created / Modified
- **Created**: `components/HeroTerminalCanvas.tsx`
- **Modified**: `components/SceneController.tsx`, `components/scenes/Scene1.tsx`, `components/scenes/Scene2.tsx`, `components/ParticleBackground.tsx`

## Recovered Constants Preserved
`PARTICLE_COUNT=220`, `GATE_X=0.58`, `refineThreshold=0.35+progress*0.45`, `trailAlpha=0.22-progress*0.08`, gate opacity `0.06+progress*0.05`, particle speed `0.0016+rand*0.0032`, jitter `(rand-0.5)*0.0015`, x-mult `0.6+progress*0.9`, y-mult `1-progress*0.7`, spawn logic, rejection at gate (`seed>threshold`), 900ms dissolve, crude `rgba(190,118,60,0.4)`, refined `rgba(190,226,230,0.55+progress*0.35)`, rejected `rgba(140,140,140,alpha)`, terminal readout format, DPR cap `min(devicePixelRatio,2)`.

## Reconstructed Details
Particle circles (r=1.5), 3 slanted refinery columns at gate±8%/0%/8% width, rejection sink velocity, Scene 1 progress=0.15, Scene 2 progress=`currentParaIndex/12` via `onProgressChange`, canvas mounted in SceneController at z-0 behind z-10 content.

## Architecture
Single `HeroTerminalCanvas` in SceneController before AnimatePresence. `showHeroTerminal = scene===0||scene===1`. `heroProgress = scene===0?0.15:scene===1?scene2Progress:0`. AnimatePresence mode="wait" keeps canvas mounted during transition.

## Scene 1 Progress
Fixed 0.15 → early crude field, low filtering, high trail wash.

## Scene 2 Progress
`currentParaIndex / 12` (0→1 across 13 paragraphs). Reports via `useEffect([currentParaIndex])` → `onProgressChange(progress)`.

## Auto-Scroll
No changes. Preserved 100ms timeout, smooth scroll to center, active ref on current paragraph.

## Build Result
`npm run build`: **Compiled successfully in 11.9s** (main app). 9 pre-existing errors in `sections/` (missing `@/components/primitives`) — unrelated.

## Visual Verification
**PENDING** — requires manual browser test.

## Known Limitations
1. Reduced-motion pauses entirely (static). 2. Terminal readout uses proxy values. 3. ParticleBackground returns null. 4. Pre-existing section errors unrelated.

## Next Steps
Run `npm run dev`, verify Scene 1 canvas, Scene 1→2 continuity, Scene 2 evolution, Scene 2→3 disappearance, text readability, typewriter/keywords/paragraph numbers unchanged, reduced-motion, tab visibility.