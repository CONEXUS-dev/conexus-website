# HANDOFF 023 — Scene 1 Approved CONEXUS Logo and Mobile Composition

Date: 2026-08-25  
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`  
Branch: `main`  
Authoritative baseline: `9a07d5ac8560bab6e34d8030dd75e38d4afe5000`

## 1. Scope Completed

Mission 023 integrated the approved transparent CONEXUS logo into Scene 1 and enlarged/recomposed the mobile presentation while preserving desktop behavior and Mission 022 navigation.

Created:

- `public/branding/CONEXUS_Logo_White_Transparent.png`
- `HANDOFF_023_SCENE1_APPROVED_CONEXUS_LOGO_AND_MOBILE_COMPOSITION.md`

Modified:

- `components/scenes/Scene1.tsx`

No other application source, controller, route, stylesheet, dependency manifest, lockfile, historical handoff, store, canvas, or ledger source changed. No dependency was added. No commit, push, Vercel action, or deployment occurred.

## 2. Implementation

### Approved logo asset

- Copied byte-for-byte from `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\Public\Branding\CONEXUS_Logo_White_Transparent.png`.
- Destination: `public/branding/CONEXUS_Logo_White_Transparent.png`.
- Intrinsic dimensions: `2172×724`.
- Source and destination SHA-256: `42c7374397d3cabd22703c0209d9be36fc1b276986bb5b95ed75bea6fa3f32d39`.
- Rendered through `next/image` with `width={2172}`, `height={724}`, `priority`, responsive `sizes`, and `alt="CONEXUS"`.

### Scene 1 composition

- Replaced only the generated text wordmark with the approved transparent image.
- Preserved the semantic `Link` destination `/ledger` and its existing accessible label/focus treatment.
- Preserved all typing, attribution, logo, and tagline phase timing values exactly.
- Kept Scene 1 viewport-locked through `h-full` and local `overflow-hidden`; Scene 1 does not become a scroll owner.
- Added a navigation-safe mobile content lane so the quote and logo wrap/fit before the fixed 56×56 Next control.
- Primary mobile (`height > 650px`, below `md`):
  - quote `1.75rem`;
  - attribution `0.75rem`;
  - tagline `0.9rem`;
  - logo width `calc(100vw - 6rem)`.
- Compact short viewport (`max-height: 650px`, below `md`):
  - quote `1.55rem`;
  - attribution `0.65rem`;
  - tagline `0.8rem`;
  - reduced gaps and padding.
- Desktop (`md+`) retains the established quote clamp, attribution/tagline sizes, centered alignment, and accepted spacing while using the approved logo at a bounded responsive width.

## 3. Mission 022 Preservation

`components/SceneController.tsx` remained byte-identical:

- Final SHA-256: `6bc29216d09752a59b389cca6141089490a8c4960ffb1feb6efdd326ffb3525b`.
- Scene 1 has no Previous button at the first-scene boundary.
- The independent Next chevron remains a 56×56 control and advances to `Scene 2 of 9`.
- After advancing, Previous is present.
- Passive scene indicators remain unchanged.
- Clicking the Scene 1 logo navigates to `/ledger`.

## 4. Validation

### Static and production checks

- `npm run typecheck`: PASS.
- `npm run build`: PASS, including Next.js lint/type validation and all 33 generated static pages.
- Current Scene 1 SHA-256: `d50beea7e15576b79364c1354188ecdc598e76054a0f40b24cdc79f035f1c789` (108 lines).
- Production server asset audit: all 19 referenced CSS/JavaScript resources returned HTTP 200.

### Fully revealed browser geometry

A dependency-free Chrome DevTools Protocol probe waited 17 real seconds at each target size before measuring the complete quote, attribution, logo, tagline, navigation, and indicator composition.

| Viewport | Quote | Attribution | Logo | Tagline | Scroll/overflow | Control overlap |
|---|---:|---:|---:|---:|---|---|
| `320×568` | `24.8px` | `10.4px` | `224×74.7px` | `12.8px` | none | none |
| `390×844` | `28px` | `12px` | `294×98px` | `14.4px` | none | none |
| `1440×900` | `48px` | `10.4px` | `736×245.3px` | `12.8px` | none | none |

At every target size:

- document horizontal and vertical overflow were false;
- Scene 1 horizontal and vertical overflow were false;
- scene `scrollHeight` equaled `clientHeight`;
- quote, logo, and tagline had no intersection with the Next control;
- logo and tagline had no intersection with the passive indicators;
- all measured rectangles remained inside the viewport;
- the revealed text, attribution, logo, and tagline were present.

At `390×844`, the logo occupied `294px` of the `326px` navigation-safe lane (approximately `90.2%`). The quote (`28px`), attribution (`12px`), and tagline (`14.4px`) all exceed their former production results (`24px`, `10.4px`, and `12.8px`). At `320×568`, compact values meet or exceed those production baselines.

### Semantic and interaction checks

- Logo anchor raw destination: `/ledger`.
- Logo image alt: `CONEXUS`.
- Rendered intrinsic attributes: `width="2172"`, `height="724"`.
- Logo click: PASS; resulting path was `/ledger`.
- Next click: PASS; passive status became `Scene 2 of 9` and Previous became available.
- Previous on Scene 1 boundary: absent as required.

The interaction harness printed all passing assertions and then received a Windows `EPERM` while deleting Chrome's still-releasing temporary profile. This occurred after browser shutdown and after result collection; it was harness cleanup only, not an application or interaction failure.

## 5. Final Scope and Operational State

Final Git working-tree delta is intentionally limited to:

1. modified `components/scenes/Scene1.tsx`;
2. added `public/branding/CONEXUS_Logo_White_Transparent.png`;
3. added `HANDOFF_023_SCENE1_APPROVED_CONEXUS_LOGO_AND_MOBILE_COMPOSITION.md`.

No commit, push, or deployment was performed. Physical-device acceptance remains available as an optional follow-up; required desktop/mobile browser validation is complete.