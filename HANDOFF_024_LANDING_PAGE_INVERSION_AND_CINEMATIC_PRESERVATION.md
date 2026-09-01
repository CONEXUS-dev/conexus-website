# HANDOFF 024 — Canonical Company and Cinematic Routing

Date: 2026-08-31  
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`  
Branch: `main`  
Authoritative baseline: `70ebc3a336de846fcfc6cd26a6b7af6ddf0e806a`

## 1. Scope Completed

Mission 024 made the professional company site canonical at `/`, moved the nine-scene experience to `/cinematic`, retained `/ledger` as a server redirect to `/`, normalized professional home links, added explicit cross-navigation, and recalibrated Scene 1's mobile hierarchy.

Moved:

- `app/(cinematic)/page.tsx` → `app/(cinematic)/cinematic/page.tsx`
- Professional homepage content from `app/(ledger)/ledger/page.tsx` → `app/(ledger)/page.tsx`

Created:

- `app/(ledger)/ledger/page.tsx` as a Next.js server redirect to `/`
- `HANDOFF_024_LANDING_PAGE_INVERSION_AND_CINEMATIC_PRESERVATION.md`

Modified:

- `app/(ledger)/directory/page.tsx`
- `app/(ledger)/observer/page.tsx`
- `app/(ledger)/refinery/page.tsx`
- `components/LedgerEscapeHatch.tsx`
- `components/nav/GlobalNav.tsx`
- `components/scenes/Scene1.tsx`
- `sections/Footer.tsx`

No dependency, lockfile, route-group layout, global stylesheet, controller, canvas, Scene 2–9 source, or public asset changed.

## 2. Final Routing Architecture

| Route | Result |
|---|---|
| `/` | Professional company homepage under the `(ledger)` root layout |
| `/cinematic` | Nine-scene experience under the `(cinematic)` root layout |
| `/ledger` | HTTP 307 server redirect to `/` |
| `/refinery` | HTTP 307 server redirect to `/#refinery` |

No top-level `app/layout.tsx`, middleware, rewrite, or duplicate homepage was introduced. The existing route-group roots continue to isolate each experience's fonts, providers, global CSS, scrolling, and viewport behavior.

Active professional links that formerly traversed `/ledger` now target the canonical route directly:

- home: `/`
- top: `/#top`
- refinery: `/#refinery`
- team: `/#team`

This normalization covers `GlobalNav`, `Footer`, the site directory, the observer return link, and the refinery compatibility redirect. Historical handoffs retain their period-correct route references.

## 3. Cross-Navigation

### Cinematic to company

`components/LedgerEscapeHatch.tsx` now renders:

- label: `VIEW COMPANY SITE`
- destination: `/`

Its existing fixed position, visual treatment, focus treatment, and responsive behavior remain unchanged.

Scene 1's approved CONEXUS logo also links directly to `/`.

### Company to cinematic

Desktop and mobile `GlobalNav` gateways now render:

- label: `ENTER CINEMATIC EXPERIENCE`
- destination: `/cinematic`

The navigation was not redesigned. The mobile gateway uses narrowly scoped responsive typography and hides the adjacent `CONEXUS/2.0` status below `sm` so the exact copy fits at narrow widths. A rendered `320×568` homepage DOM check confirmed both the copy and destination.

## 4. Scene 1 Mobile Composition

Mission 024 did not restore Mission 023's crowded `1.75rem` primary-mobile quote. It selected an intermediate hierarchy:

| Tier | Quote | Attribution | Tagline | Logo/tagline vertical offset |
|---|---:|---:|---:|---:|
| Primary mobile, height > 650px | `1.3rem` | `0.7rem` | `0.9rem` | `40px` |
| Compact mobile, height ≤ 650px | `1.1rem` | `0.65rem` | `0.8rem` | `32px` |
| Desktop, `md+` | unchanged | unchanged | unchanged | `0px` |

The logo width is `calc(100vw - 6rem)` below `md`, matching its responsive image `sizes` hint. The stale mobile `-translate-x-6` was removed, and the logo now centers at a measured `0px` viewport-center delta.

The former `81px` primary and `64px` compact vertical offsets were not preserved automatically. An initial zero-offset browser pass found that the centered logo intersected the fixed Next control. The final reduced `40px` and `32px` offsets clear that control while preserving the logo/tagline block and leaving desktop untouched.

Typing content, phase timing, motion timing, controller behavior, Scene 1 viewport lock, and the approved PNG remain unchanged.

## 5. Validation

### Static and production checks

- `npm run typecheck`: PASS after clearing stale pre-move `.next/types` output.
- `npm run build`: PASS.
- Production build: 34 generated static pages.
- Build route table includes `/`, `/cinematic`, and `/ledger`.
- `git diff --check`: PASS.
- Active-source `/ledger` search: no stale link destination; remaining references are historical documentation.

### HTTP checks

- `/`: `200`
- `/cinematic`: `200`
- `/ledger`: `307`, `Location: /`
- `/refinery`: `307`, `Location: /#refinery`

### Fully revealed Scene 1 geometry

A dependency-free Chrome DevTools Protocol probe measured Scene 1 after its timed reveal:

| Viewport | Quote | Attribution | Logo | Tagline | Logo center delta |
|---|---:|---:|---:|---:|---:|
| `320×568` | `17.6px` | `10.4px` | `224×74.66px` | `12.8px` | `0px` |
| `390×844` | `20.8px` | `11.2px` | `294×98px` | `14.4px` | `0px` |
| `1440×900` | `48px` | `10.4px` | `736×245.33px` | `12.8px` | `0px` |

At all three viewports:

- document horizontal and vertical overflow were false;
- Scene 1 horizontal and vertical overflow were false;
- scene `scrollHeight` equaled `clientHeight`;
- quote, attribution, logo, and tagline did not intersect Next;
- logo and tagline did not intersect the indicators;
- logo and escape-hatch destinations were `/`;
- logo center delta was exactly `0px`.

Desktop geometry matched the earlier measurement, confirming that `md+` remained unchanged.

### Interaction checks

- Scene 1 initially reported `Scene 1 of 9` with no Previous control.
- Next advanced to `Scene 2 of 9` and Previous became available.
- Clicking the Scene 1 logo navigated to `/`.

Some temporary headless-Chrome commands returned nonzero shell cleanup statuses after printing successful measurements because Chrome profile/process cleanup was still settling. The recorded DOM, geometry, route, and interaction assertions completed before those cleanup-only statuses.

## 6. Protected Provenance

All protected hashes remained identical to the pre-edit baseline:

| Protected file | Lines | SHA-256 |
|---|---:|---|
| `app/(cinematic)/globals.css` | 61 | `370693f85509189b1812b299280eff764a8df9040412a5ad9fde540b2739818d` |
| `app/(ledger)/globals.css` | 58 | `4c767b31e0b073d4c8a8f4fa2772fd92db2a9f868a7a54c584124a1871295762` |
| `app/(cinematic)/layout.tsx` | 33 | `4949d03c1f1a7a206649b33177c28899fdc9d3bd6e7bec4127d67cdfef521e13` |
| `app/(ledger)/layout.tsx` | 39 | `989085573886fba3ef5941f1c88947512220eaef922c6b850c1cadf0af0ea5f5` |
| `components/SceneController.tsx` | 149 | `6bc29216d09752a59b389cca6141089490a8c4960ffb1feb6efdd326ffb3525b` |
| `components/CausalDataCloudCanvas.tsx` | 709 | `196ffd1820778acd459a0f15215a8af043eb2f56c06df4eec0a56b22703fdf06` |
| `components/HeroTerminalCanvas.tsx` | 101 | `3c6888b04957106087065b199dfa8d3bc00f221c3457811f8669e46e640e84d9` |
| `components/KineticCursor.tsx` | 143 | `6d58c4c2900bcdb79a18701f18da8e57048f298e6c42f1f6d42708e49a3c4b13` |
| `components/scenes/Scene2.tsx` | 288 | `89137fe78328e7d4990099d97d0f50f011e51ba28312dc6e928a92cf7082be61` |
| `components/scenes/Scene3.tsx` | 149 | `bf4eb4dda7e639acd17d0cf33281b43a9b282d103da2d7be5337576e8cea444b` |
| `components/scenes/Scene4.tsx` | 54 | `f46613c3636d6758b20380fdd7e328990dc0227547161a4d4b045f82520ce203` |
| `components/scenes/Scene5.tsx` | 62 | `feaa581d0767d25da8669ae3298f494dbd10bf74cc3b9d7fb1e02f789ded7866` |
| `components/scenes/Scene6.tsx` | 48 | `5192da11ae3b3ae91d8894fc66ff4ffa575d928a653bea456df5bec433d99d1c` |
| `components/scenes/Scene7.tsx` | 11 | `f325fa1a87c1fd9ea21d71c8ebe7a3ad18cc8713fa4da6fcc630dac74eb773ca` |
| `components/scenes/Scene8.tsx` | 11 | `35b05fcfa5b8a6d06bcdedeef90c4ec0efa666678ef7aa0e7a23e7a81a047390` |
| `components/scenes/Scene9.tsx` | 35 | `79a4f6afb730e02f73c78a6fa28c7a562afa8cc7a69c3ebbb90f08a80567a21d` |

Approved logo asset SHA-256 remained:

`42c7374397d3cabd22703c0209dbe36fc1b276986bb5b95ed75bea6fa3f32d39`

## 7. Operational State

No commit, push, deployment, Vercel action, or dependency installation occurred. A local production server was used only for validation and was stopped after verification.