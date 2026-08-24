# HANDOFF 020 — Architecture Merge

Date: 2026-08-23  
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`  
Branch: `main`  
Baseline HEAD / origin-main: `2d9dda8b6a16d74317cab882eb0a484b745d6624`

## Result

Website 1.0 has been integrated into Website 2.0 without replacing the cinematic `/` experience.

- `/` remains the cinematic vault.
- `/ledger` contains the incumbent Website 1.0 homepage.
- The incumbent route surface remains available under its original URLs.
- Cinematic and ledger pages use separate root route-group layouts and global styles.
- The cinematic shell links to `/ledger` with `> ACCESS RAW LEDGER`.
- The ledger shell links to `/` with `RETURN TO VAULT` at desktop and narrow widths.
- `/scene3-hybrid` is retired and returns 404.
- Its page source is preserved at `Scene3_Hybrid_Test/app-route/page.tsx` and excluded from TypeScript compilation.
- `/refinery` redirects to `/ledger#refinery` because the donor page referenced a nonexistent `RefineryNarrative` component.

## Architecture

```text
app/
├── (cinematic)/
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx                 -> /
├── (ledger)/
│   ├── layout.tsx
│   ├── globals.css
│   ├── ledger/page.tsx          -> /ledger
│   └── ...incumbent routes
└── api/contact/route.ts
```

There is intentionally no top-level `app/layout.tsx`. Each route group owns its complete `<html>`/`<body>` root shell:

- Cinematic: Fraunces font, viewport lock, cinematic CSS, and `LedgerEscapeHatch`.
- Ledger: Playfair Display and JetBrains Mono, normal document scrolling, `FocusProvider`, and `GlobalNav`.

Historical `SavingsCalculator.tsx` and `EvidenceInfographics.tsx` were restored from known repository commits. Historical per-page `Navigation` was not restored; the ledger layout supplies `GlobalNav` once for all ledger routes.

## Dependencies

The package manifest and lockfile resolve the approved exact versions:

- `framer-motion@12.43.0`
- `lucide-react@0.563.0`
- `recharts@2.15.4`

`npm install` reported that Recharts 2.x is no longer maintained and reported three high-severity audit findings. No unapproved `npm audit fix`, major upgrade, or unrelated dependency change was performed.

## Route Verification

The final build generated `/`, `/ledger`, all inventoried incumbent pages, and `/api/contact`.

Live HTTP verification covered:

- `200`: `/`, `/ledger`, `/atlas-80`, `/conexus-sovereign`, `/contact`, `/directory`, `/echoform`, `/ecp-experiment`, `/evidence`, `/evidence/calibration-validation-full`, `/experiences`, `/fe-algorithm`, `/fe-algorithm/plain-english`, `/investors`, `/nairthex`, `/observer`, `/the-future`, `/verticals/echopanion`, `/verticals/mira`, `/verticals/reflect`, `/verticals/soma`, `/vrp`.
- Expected `307`: `/canvas` -> `/experiences`, `/discovery` -> `/evidence`, `/dream-mirror` -> `/echoform`, `/follow-me` -> `/experiences`, `/pitch` -> `/investors`, `/verticals` -> `/experiences`, and `/refinery` -> `/ledger#refinery`.
- Expected `404`: `/scene3-hybrid`.
- Expected `405` for `GET /api/contact`; the endpoint is a POST route.

## Validation

- Final `npm run typecheck`: passed with exit code 0. Run exactly once.
- Final `npm run build`: passed with exit code 0. Run exactly once; 33 static pages generated and the contact API route compiled.
- Browser-only verification: Google Chrome through the DevTools Protocol at desktop and narrow/mobile emulation.
- Cinematic shell: document remains viewport-sized with hidden body overflow; the `/ledger` bridge is visible, inside the viewport, and non-overlapping at 1440x900 and narrow/mobile width.
- Ledger shell: document scrolls normally; the `/` bridge is visible and inside the viewport at desktop and narrow/mobile width.
- A donor-origin duplicate React key warning was discovered during browser validation because two footer entries share `/nairthex`. With explicit approval, the footer list key was changed from `href` to the unique `label`. Browser-only validation after that edit showed no React warning or runtime exception. Per the approved workflow, typecheck and build were not rerun.
- All 161 donor and recipient public assets remain byte-identical (`MISMATCH_COUNT=0`).
- No obsolete `Navigation`, nonexistent `RefineryNarrative`, or public `scene3-hybrid` source reference remains.

Chrome emitted a generic failed-resource 404 in desktop DevTools logging, but the Next development server recorded no corresponding 404 for the final `/` and `/ledger` loads. No application exception, hydration error, or React warning remained after the footer-key correction.

## Provenance and Protected Files

The Website 1.0 source snapshot remained unchanged:

- File count excluding build/dependency metadata: `221`
- Aggregate manifest SHA-256: `651BAD9ACE8869BCCA59C8D3E47C50FD564F600002BA3B091BD4E139E983CAB6`

Protected cinematic files remained byte-identical:

| File | SHA-256 |
| --- | --- |
| `components/CausalDataCloudCanvas.tsx` | `196FFD1820778ACD459A0F15215A8AF043EB2F56C06DF4EEC0A56B22703FDF06` |
| `components/scenes/Scene1.tsx` | `5F9FACED22B40C09ED7EA6C55B44841F178026BA365BA41CE3AD2F61E7E0A38A` |
| `components/scenes/Scene2.tsx` | `89137FE78328E7D4990099D97D0F50F011E51BA28312DC6E928A92CF7082BE61` |
| `components/scenes/Scene3.tsx` | `AF5A85EC921A52FB39DFD145E6E6135A7EC260C36A8F8CCD2334D1935DF0D6A1` |
| `store/useDataVaultStore.ts` | `8B6E1CB9E575CAB2D80913BB1229C32BD3F226DB7C91AE0F03BA15E623F70609` |
| `components/SceneController.tsx` | `78191B2AD733B575DBACB57EDC624DE0E76035E4A6D1F3D3E2FED8BB3B09C4A5` |

## Manual Review

The local development site is running from the canonical recipient repository at:

`http://localhost:3000`

Suggested review path:

1. Open `/` and confirm the cinematic experience and `> ACCESS RAW LEDGER` bridge.
2. Follow the bridge to `/ledger` and confirm normal scrolling and the isolated ledger visual shell.
3. Test `RETURN TO VAULT` at desktop and narrow/mobile widths.
4. Visit `/refinery` and confirm the redirect lands on `/ledger#refinery`.
5. Visit a sample of incumbent routes, especially `/evidence`, `/observer`, `/nairthex`, and `/verticals/echopanion`.
6. Confirm `/scene3-hybrid` is unavailable.

No commit, push, deployment, or production change was performed.

# POST-COMPLETION AMENDMENT — REAL-DEVICE SCENE 3 MOBILE SCROLL

Mission 020 initially completed successfully, including the architecture merge, typecheck, production build, route checks, and desktop/mobile bridge verification recorded above. Subsequent real-device manual acceptance testing by Derek Angell superseded the earlier narrow/mobile emulation result for this specific behavior and established that Scene 3 could not vertically scroll on his phone, leaving content below the available viewport unreachable.

An explicitly approved narrow repair was therefore performed after Mission 020 completion. Final real-device acceptance remains pending.

## Modified Files

- `components/scenes/Scene3.tsx`
- `HANDOFF_020_ARCHITECTURE_MERGE.md` (this appended record only)

No route, dependency, package file, ledger file, global architecture file, other scene, Scene 3 data, copy, four-arm mechanic, physics, or canvas-calculation file was modified.

## Technical Change

The repair is local to Scene 3 and compact viewports only:

- The Scene 3 section retains its accepted desktop `h-[300vh]` runway, while `max-md:h-dvh` constrains its compact viewport box.
- `max-md:overflow-y-auto` makes Scene 3 the compact vertical scroll owner.
- `max-md:touch-pan-y` explicitly permits vertical finger panning.
- `max-md:overscroll-contain` confines overscroll to Scene 3.
- `max-md:overflow-x-hidden` prevents horizontal scrolling.
- The compact sticky panel switches to relative, natural height with a `100dvh` minimum (`max-md:relative max-md:h-auto max-md:min-h-dvh max-md:overflow-visible`), allowing all vertically stacked Scene 3 content to contribute to the local scroll range.
- The compact content wrapper similarly uses natural height with a `100dvh` minimum (`max-md:h-auto max-md:min-h-dvh`).
- The canvas wrapper remains `pointer-events-none`, so it does not intercept vertical touch scrolling.

All new layout and overflow utilities are `max-md:` scoped. Desktop Scene 3 typography, layout, sticky presentation, and interaction behavior remain unchanged.

## Scene 3 Provenance

| Measurement | Before amendment | After amendment |
| --- | --- | --- |
| SHA-256 | `AF5A85EC921A52FB39DFD145E6E6135A7EC260C36A8F8CCD2334D1935DF0D6A1` | `438D9CABAA035E04F6163195D73BAC28B4A0DAC368D078CCA1D2756A84C6BBD0` |
| Line count | `149` | `149` |

## Verification

- Command: `npm run typecheck`
- Result: passed with exit code 0 (`tsc --noEmit`). The command was rerun after final source normalization so the recorded result covers the exact amended source.
- Desktop verification at 1440×900: Scene 3 retained a 2700px (`300vh`) section, a 900px sticky viewport panel, no Scene 3-local scroll range, no horizontal overflow, and functional scene navigation. The accepted desktop presentation and controller-owned runway remain intact.
- Compact/mobile verification at true 390×844 device emulation: Scene 3 measured 844px high with 1078px of local content, producing a 234px local vertical scroll range. A synthesized vertical finger swipe moved Scene 3 from `scrollTop 0` to its full endpoint at `scrollTop 234`, demonstrating that all Scene 3 content is reachable.
- Mobile horizontal-overflow verification: Scene 3 `clientWidth` and `scrollWidth` both remained 390px; computed horizontal overflow was `hidden`.
- Mobile scroll-confinement verification: during the full finger swipe, Scene 3 alone changed scroll position. The parent scene controller, document element, and body remained at `scrollTop 0`.
- Touch behavior: computed Scene 3 `touch-action` was `pan-y`; computed overscroll behavior was `contain`; the canvas remained pointer-transparent.
- Scene navigation verification: navigation away from Scene 3 and back to Scene 3 remained functional at compact/mobile width; desktop navigation also remained functional.
- Outer cinematic shell verification: `html`, `body`, and the cinematic `main` remain viewport-locked with hidden overflow.
- Browser runtime result: no application console errors or runtime exceptions were observed during the compact/mobile interaction verification.

## Other Protected Cinematic Files

All previously protected cinematic files other than the explicitly amended Scene 3 remain unchanged:

| File | Reconfirmed SHA-256 |
| --- | --- |
| `components/CausalDataCloudCanvas.tsx` | `196FFD1820778ACD459A0F15215A8AF043EB2F56C06DF4EEC0A56B22703FDF06` |
| `components/SceneController.tsx` | `78191B2AD733B575DBACB57EDC624DE0E76035E4A6D1F3D3E2FED8BB3B09C4A5` |
| `components/scenes/Scene1.tsx` | `5F9FACED22B40C09ED7EA6C55B44841F178026BA365BA41CE3AD2F61E7E0A38A` |
| `components/scenes/Scene2.tsx` | `89137FE78328E7D4990099D97D0F50F011E51BA28312DC6E928A92CF7082BE61` |
| `store/useDataVaultStore.ts` | `8B6E1CB9E575CAB2D80913BB1229C32BD3F226DB7C91AE0F03BA15E623F70609` |

`components/SceneController.tsx` was inspected but not modified and remains byte-identical to its pre-amendment state.

No deployment, commit, or push was performed. Production deployment remains pending Derek Angell's final real-device acceptance.

# POST-COMPLETION AMENDMENT 2 — SCENE 3 MOBILE SCROLL ROLLBACK

Mission 020 completed successfully, after which the first post-completion amendment attempted to make compact/mobile Scene 3 scrolling local to the scene. That amendment changed `components/scenes/Scene3.tsx` to SHA-256 `438D9CABAA035E04F6163195D73BAC28B4A0DAC368D078CCA1D2756A84C6BBD0`.

Compact-width visual review subsequently found an unacceptable regression: although the four-arm layout remained visible in the vertical compact presentation, the 3D animated particle field disappeared or was effectively absent, leaving a largely static black background. Because this was worse than the pre-amendment Scene 3 presentation, the first mobile-scroll amendment was rejected.

Only the first amendment's compact Scene 3 layout and overflow classes were removed. `components/scenes/Scene3.tsx` was restored byte-for-byte to the pre-amendment Mission 020 implementation.

- Restored Scene 3 SHA-256: `AF5A85EC921A52FB39DFD145E6E6135A7EC260C36A8F8CCD2334D1935DF0D6A1`
- Restored Scene 3 line count: `149`
- Typecheck: `npm run typecheck` passed with exit code 0 (`tsc --noEmit`).
- Compact verification at 390×844: one visible 390×844 Scene 3 canvas was present at opacity 1; two frames captured 700ms apart produced different SHA-256 values, confirming the animated particle field was active again. The heading and all four arm controls remained present.
- Desktop verification at 1440×900: one visible full-viewport Scene 3 canvas was present at opacity 1; two frames captured 700ms apart also differed, confirming the animation remained active. The accepted 300vh Scene 3 presentation, heading, and all four arm controls remained intact.
- The outer cinematic shell remained viewport-locked at both sizes.

All other protected cinematic files remain unchanged:

| File | Reconfirmed SHA-256 |
| --- | --- |
| `components/CausalDataCloudCanvas.tsx` | `196FFD1820778ACD459A0F15215A8AF043EB2F56C06DF4EEC0A56B22703FDF06` |
| `components/SceneController.tsx` | `78191B2AD733B575DBACB57EDC624DE0E76035E4A6D1F3D3E2FED8BB3B09C4A5` |
| `components/scenes/Scene1.tsx` | `5F9FACED22B40C09ED7EA6C55B44841F178026BA365BA41CE3AD2F61E7E0A38A` |
| `components/scenes/Scene2.tsx` | `89137FE78328E7D4990099D97D0F50F011E51BA28312DC6E928A92CF7082BE61` |
| `store/useDataVaultStore.ts` | `8B6E1CB9E575CAB2D80913BB1229C32BD3F226DB7C91AE0F03BA15E623F70609` |

No deployment, commit, or push was performed. Production remains undeployed. The next acceptance step is Derek Angell's actual-phone validation over the local Wi-Fi development server.