# HANDOFF 025 — Professional Homepage Repositioning and Thematic Deep-Link Integration

Date: 2026-09-11  
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`  
Baseline/current HEAD: `f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b`

## 1. Scope Completed

Created application files: `sections/Builds.tsx`, `sections/Echoagent.tsx`, `sections/Cyndicate.tsx`, `sections/Technology.tsx`, `sections/RefinerBridge.tsx`, `sections/Partnerships.tsx`. Created documentation: this handoff.

Modified: `app/(ledger)/page.tsx`, `app/(ledger)/layout.tsx` (metadata only), `app/(cinematic)/cinematic/page.tsx`, `components/SceneController.tsx`, `components/hero/HeroTerminal.tsx`, `components/hero/ScrollRunway.tsx`, `components/nav/GlobalNav.tsx`, `content/vault.ts`, `sections/Validation.tsx`, `sections/Products.tsx`, `sections/Nairthex.tsx`, `sections/Echoform.tsx`, `sections/Team.tsx`, `sections/Footer.tsx`.

Derek approved the professional information architecture during human review but found the logo-only hero too static, the centered thematic CTA too prominent, and the professional-to-cinematic relationships insufficiently discoverable. The authorized same-mission correction changed exactly six application files: `components/hero/HeroTerminal.tsx`, `components/hero/ScrollRunway.tsx`, `components/nav/GlobalNav.tsx`, `sections/Technology.tsx`, `sections/Nairthex.tsx`, and `sections/Echoform.tsx`. `sections/Validation.tsx` and `sections/RefinerBridge.tsx` already contained the required Scene 3 and Scene 2 mappings and were not changed during this correction.

Unmounted from `/` but retained unchanged: `sections/Inversion.tsx`, `sections/Manifesto.tsx`, `sections/Evidence.tsx`. Historical `components/products/ProductGateways.tsx` also remains retained and unmounted.

No dependency, lockfile, global stylesheet, cinematic layout, cinematic scene source, protected route, contact API, protected cinematic canvas, cursor, or public asset changed. The homepage-only `components/hero/HeroTerminal.tsx` canvas was deliberately adapted for ambient use.

Final rendered sequence: Hero → Builds → ECHOagent → Evidence → Cyndicate → Technology → Products → NAiRTHEX → ECHOform → Company → Refiner → Partnerships → Footer. At chapter level, NAiRTHEX and ECHOform belong to Products, yielding the approved Hero → Builds → ECHOagent → Evidence → Cyndicate → Technology → Products → Company → Refiner → Partnerships → Footer sequence.

## 2. Architecture Decisions & Citations

- **Ambient logo hero:** the unchanged approved transparent logo is the only hero content. `ScrollRunway` now layers the existing particle/refinement canvas at `0.7` opacity under a radial black vignette and the centered logo, while retaining a single-viewport hero rather than restoring the historical `200vh` runway (`components/hero/ScrollRunway.tsx:1-26`). `HeroTerminal` accepts an optional `ambient` mode, fixes refinement at a subtle continuous mid-state, and suppresses `REFINERY_STREAM`, `SCROLL_INDEX`, and `SUBTRACTION` diagnostics (`components/hero/HeroTerminal.tsx:19-34,72-76,131-153`). No hero copy or CTA remains.
- **Professional header:** `usePathname` gives `/` exactly six primary section links and non-home ledger routes a compact logo/return treatment (`components/nav/GlobalNav.tsx:3-21,23-78`). On desktop, a three-column grid centers the six professional links and independently places `THEMATIC EXPERIENCE` at far right; on mobile, all seven items remain in the same nonwrapping, horizontally scrollable rail. The alternate uses 35% data color versus 70% for primary links, with no border, logo, orange default, second row, or hamburger (`components/nav/GlobalNav.tsx:32-55`).
- **Intentional thematic mappings:** Refiner remains Scene 2 (`sections/RefinerBridge.tsx:19-24`); Evidence retains `/evidence` as the ember primary action and Scene 3 as its quieter visualization (`sections/Validation.tsx:64-71`); Technology adds Scene 4 (`sections/Technology.tsx:47-56`); NAiRTHEX retains its real primary destination and adds Scene 5 (`sections/Nairthex.tsx:33-43`); ECHOform retains its real demo and adds Scene 6 (`sections/Echoform.tsx:25-35`). ECHOagent and Cyndicate intentionally expose no Scene 7/8 CTA.
- **ECHOagent:** lead commercial trust-calibration system with continuity, authority boundaries, and handoff, not a generic assistant (`sections/Echoagent.tsx:9-31`). Primary authority was current checkout `C:\Users\Derek Angell\Desktop\ECHOagent\GITHUB ECHOagent\ECHOagent-mission-006`, remote `https://github.com/CONEXUS-dev/ECHOagent.git`, commit `bde8af9dd3583637c7ecdffe879c350952ceb38c`, not a Downloads dossier. Its runtime authority documents server-managed initialization/history, handoff validation, Azure/container/UI/test assets, and server-only boot state (`README.md:1-18,20-40`); its handoff says the live baseline is not production approval (`ECHOAGENT_SERENITY_REBUILD_HANDOFF.md:10-26,347-359,399-409`).
- **Four-Arm communication:** one homepage section explains the question, 50 runs × four conditions, semantic distance, four exact means, `d = 3.7824`, `p = 0.3612`, the Neutral/Token-only comparison, and the complete sequence's observed result (`sections/Validation.tsx:4-64`; `content/vault.ts:432-463`). The homepage nonclaim subsection was removed by Derek's copy-direction correction. The historical nonsignificant descriptive variance result remains stored but is not rendered (`content/vault.ts:70-89`).
- **Cyndicate:** an actively developed five-agent architecture spanning ECP calibration, Aurelius gate authority, Faye subtractive refinement, GRU worker execution, Librarian provenance, and current ALE substrate work (`sections/Cyndicate.tsx:11-44`). Primary authority was current checkout `C:\Users\Derek Angell\Desktop\CONEXUS Cyndicate\agents-last-exam`, remote `https://github.com/CONEXUS-dev/conexus-cyndicate.git`, commit `07f3da7c97c3e57244eb9d5d7876ca599f3de742`. The source identifies active ALE implementation/config/spec paths (`README.md:1-13`), five-role configuration (`configs/agents/cyndicate.yaml:1-18`), implemented GRU/Aurelius/Librarian/Faye division (`ale_run/agents/cyndicate/deployer.py:1-52`), and current architecture/spec mismatches (`C:\Users\Derek Angell\Desktop\CONEXUS Cyndicate\CYNDICATE_2.0_AS_BUILT_AUDIT_001.md:1-37,41-75,79-113`).
- **Technology / Research / IP / Optimization:** separate cards prevent benchmark, filing, architecture, and optimization claims from being conflated; filings are not issued patents and internal evidence is not replication (`sections/Technology.tsx:3-20,22-50`).
- **Refiner deduplication:** long historical Manifesto/Inversion chapters were unmounted and one bounded thesis bridge deep-links Scene 2 (`sections/RefinerBridge.tsx:3-35`).
- **Direct scene initialization:** server parsing accepts one `1..9` string and passes a zero-based index (`app/(cinematic)/cinematic/page.tsx:1-15`); the controller uses it only as initial local state (`components/SceneController.tsx:60-84,90-100,126-143`).
- **Local-only boundary:** branch/HEAD, empty index, and enumerated worktree in Section 7 prove no release action. Derek visual approval remains the release gate.

## 3. Implementation & Integration Details

`app/(ledger)/page.tsx:1-33` renders the exact final order and wraps it in scoped `overflow-x-clip`. `ScrollRunway.tsx:1-24` is the logo/CTA hero. `GlobalNav.tsx:8-66` provides route-aware variants; `overflow-x-auto whitespace-nowrap` and `shrink-0` create the mobile rail.

`Builds.tsx:3-46` introduces Calibrate/Evaluate/Translate. `Echoagent.tsx:3-43` presents calibrated posture, server-managed continuity, structured handoff, implemented runtime, deployment architecture, staging, and test assets. Rebuilt `Validation.tsx:1-64` consumes `MISSION_025.evidence`, renders method, exact means, and comparisons, and links `/evidence` plus `/cinematic?scene=3`. `Cyndicate.tsx:3-44` separates ECP/Aurelius/Faye/GRU/Librarian and describes active ALE development. `Technology.tsx:3-55` separates the four programs.

`Products.tsx:3-22` introduces governed reflection and user-directed interpretation; `Nairthex.tsx:5-48` and `Echoform.tsx:4-40` provide affirmative summaries, real product/demo destinations, and Scene 5/6 thematic links. `Team.tsx:3-55` is Company and combines the sourced founder profile with `content/vault.ts:464-468`. `RefinerBridge.tsx:1-36` replaces duplicate refinery storytelling. `Partnerships.tsx:3-30` separates pilot, partnership, and investor paths while retaining the intentional founder-email routes. `Footer.tsx:1-70` uses the approved logo and six-link index.

`content/vault.ts:434-482` centralizes Mission 025 evidence/founder/footer copy while retaining historical exports. `app/(ledger)/layout.tsx:20-24` changes metadata only; lines 1-19 and 25-39 remain baseline-identical.

`app/(cinematic)/cinematic/page.tsx:3-15` awaits Next.js server `searchParams`; exactly one `/^[1-9]$/` string maps to index 0–8. Missing, repeated/array, decimal, negative, zero, nonnumeric, and out-of-range values fall back to 0/Scene 1. `SceneController.tsx:60-84` initializes state from the optional index while retaining bounded transition-lock navigation. Previous/Next **does not synchronize the URL**; history replacement and `popstate` were excluded. No individual Scene 1–9 source changed.

## 4. Verbatim Verification Evidence

Focused correction validation was run after implementation. Historical Mission 025 evidence remains below it for continuity.

- `npm run typecheck`: exit `0`; `tsc --noEmit` emitted no diagnostics.
- `npm run build`: exit `0`; Next.js `15.5.23` compiled successfully in `6.6s`, checked types, generated `34/34` static pages, and retained `/`, `/evidence`, and dynamic `/cinematic` in the route manifest.
- `git diff --check`: exit `0`, empty output. `git diff --cached --name-only`: empty. Protected Scene 1–9, route, dependency, and lockfile diff query: empty.
- Production browser checks used the built app on local port `3026`. At `320×568`, `390×844`, `768×1024`, and `1440×900`, document client/scroll widths matched (`320/320`, `390/390`, `753/753`, `1425/1425`); hero height matched the viewport; hero text was empty; legacy-copy checks were false; header image count was `0`; hamburger was false; and canvas checksums changed after 600 ms at every viewport.
- Logo boxes were `262.4×87.5`, `319.8×106.6`, `629.8×209.9`, and `960×320` respectively, preserving the source ratio (`2172×724`) without clipping. Horizontal center deltas were `0`, `0`, `-7.5`, and `-7.5` CSS px; the desktop offset reflects the browser's 15 px scrollbar and is centered in the document viewport.
- Mobile nav rendered as one flex rail with `698px` scroll width and the seven ordered labels; after scrolling to the end, the thematic item remained reachable. Desktop rendered as a grid and placed it at the right edge. Computed thematic color was `oklab(0.9 0 0 / 0.35)` versus primary `oklab(0.9 0 0 / 0.7)`.
- DOM href assertions confirmed Refiner Scene 2, Evidence Scene 3, Technology Scene 4, NAiRTHEX Scene 5, and ECHOform Scene 6; ECHOagent and Cyndicate had no links. Accessibility-state probes then returned `Scene 2 of 9` through `Scene 6 of 9` for their matching direct URLs.
- `/evidence` returned HTTP `200`; NAiRTHEX's real destination returned HTTP `200` with `GET` (it rejected unsupported `HEAD` with `405`); ECHOform's real demo returned HTTP `200`.

The following records the earlier full Mission 025 validation:

Command `npm run typecheck`; exit `0`:

```text
> conexus-2@2.0.0 typecheck
> tsc --noEmit
```

Command `npm run build`; exit `0`. The session recorded a successful Next.js 15.5.23 production build, but exact stdout is no longer recoverable and is not invented.

Command `git diff --check`; exit `0`; successful output was empty.

Server command: `node node_modules\next\dist\bin\next start -p 3015`. Verbatim clean startup:

```text
▲ Next.js 15.5.23
- Local:        http://localhost:3015
- Network:      http://172.16.0.45:3015
✓ Starting...
✓ Ready in 615ms
```

Completed route probes returned HTTP 200 for `/`, `/evidence`, `/investors`, and tested cinematic variants. The exact original route command/stdout is no longer recoverable.

The all-in-one CDP homepage probe (`node "$env:TEMP\mission025-cdp2.js"`) inspected ordered IDs, metadata, hero image/link, six nav labels/hrefs, line count, and end scrolling. Its successful first-pass stdout is no longer recoverable; accepted results were exact order, expected metadata, one approved logo, one `/cinematic` CTA, and six expected links. A retained later stale-profile attempt was nonauthoritative.

Final CDP probe command `node "$env:TEMP\mission025-final-cdp.js"`; exit `0`; verbatim authoritative output:

```text
VIEW 320x568 {"viewport":[320,568],"document":[305,305],"body":[305,305],"nav":[305,544,1],"lastRight":289,"heroOnly":{"text":"ENTER THE THEMATIC EXPERIENCE","imageCount":1,"linkCount":1}}
VIEW 390x844 {"viewport":[390,844],"document":[375,375],"body":[375,375],"nav":[375,544,1],"lastRight":359,"heroOnly":{"text":"ENTER THE THEMATIC EXPERIENCE","imageCount":1,"linkCount":1}}
VIEW 768x1024 {"viewport":[768,1024],"document":[753,753],"body":[753,753],"nav":[753,753,1],"lastRight":682,"heroOnly":{"text":"ENTER THE THEMATIC EXPERIENCE","imageCount":1,"linkCount":1}}
VIEW 1440x900 {"viewport":[1440,900],"document":[1425,1425],"body":[1425,1425],"nav":[1425,1425,1],"lastRight":1018,"heroOnly":{"text":"ENTER THE THEMATIC EXPERIENCE","imageCount":1,"linkCount":1}}
QUERY (none) Scene 1 of 9
QUERY ?scene=1 Scene 1 of 9
QUERY ?scene=2 Scene 2 of 9
QUERY ?scene=3 Scene 3 of 9
QUERY ?scene=9 Scene 9 of 9
QUERY ?scene=0 Scene 1 of 9
QUERY ?scene=10 Scene 1 of 9
QUERY ?scene=2.5 Scene 1 of 9
QUERY ?scene=-1 Scene 1 of 9
QUERY ?scene=abc Scene 1 of 9
QUERY ?scene=2&scene=3 Scene 1 of 9
```

This proves no document overflow, one-line mobile rail, end reachability, and query fallback. Its early reverse click printed `ROUNDTRIP Scene 3 of 9 Scene 3 of 9` because the existing lock had not released; it was not accepted as reverse evidence.

Transition-aware command `node "$env:TEMP\mission025-debug.js"`; exit `0`; relevant verbatim output:

```text
START Scene 2 of 9
AT 500 Scene 3 of 9 matrix(1, 0, 0, 1, -253.886, 0)
AT 1000 Scene 3 of 9 matrix(1, 0, 0, 1, 3.78636, 0)
AT 1500 Scene 3 of 9 none
AT 2500 Scene 3 of 9 none
AT 4000 Scene 3 of 9 none
BACK 500 Scene 2 of 9
BACK 1000 Scene 2 of 9
BACK 2000 Scene 2 of 9
```

## 5. Protected Baseline Provenance Table

Pre/post comparison passed. Text entries show line count; binary logo has no text-line count.

| File/invariant | Lines | SHA-256 |
|---|---:|---|
| `public/branding/CONEXUS_Logo_White_Transparent.png` | binary | `42c7374397d3cabd22703c0209dbe36fc1b276986bb5b95ed75bea6fa3f32d39` |
| `app/(ledger)/globals.css` | 58 | `4c767b31e0b073d4c8a8f4fa2772fd92db2a9f868a7a54c584124a1871295762` |
| `app/(cinematic)/globals.css` | 61 | `370693f85509189b1812b299280eff764a8df9040412a5ad9fde540b2739818d` |
| `app/(cinematic)/layout.tsx` | 33 | `4949d03c1f1a7a206649b33177c28899fdc9d3bd6e7bec4127d67cdfef521e13` |
| Ledger layout protected ranges 1-19,25-39 (normalized LF) | 34 | `6b90a3e774b9cfcfb69bac0b930b0245a0f749e87333b1c4c06eac7aafde9d10` |
| `components/HeroTerminalCanvas.tsx` | 101 | `3c6888b04957106087065b199dfa8d3bc00f221c3457811f8669e46e640e84d9` |
| `components/CausalDataCloudCanvas.tsx` | 709 | `196ffd1820778acd459a0f15215a8af043eb2f56c06df4eec0a56b22703fdf06` |
| `components/KineticCursor.tsx` | 143 | `6d58c4c2900bcdb79a18701f18da8e57048f298e6c42f1f6d42708e49a3c4b13` |
| `components/LedgerEscapeHatch.tsx` | 12 | `f551077503ece6e1c35bf973a41f311c2787a9072f3d9f712d4548c88f87b4ba` |
| `components/scenes/Scene1.tsx` | 108 | `35547f8f1dd5ad9748762ad5dbeb0e6c1bb9c7fe51e1b6edda5a387b10fa2dfb` |
| `components/scenes/Scene2.tsx` | 288 | `89137fe78328e7d4990099d97d0f50f011e51ba28312dc6e928a92cf7082be61` |
| `components/scenes/Scene3.tsx` | 149 | `bf4eb4dda7e639acd17d0cf33281b43a9b282d103da2d7be5337576e8cea444b` |
| `components/scenes/Scene4.tsx` | 54 | `f46613c3636d6758b20380fdd7e328990dc0227547161a4d4b045f82520ce203` |
| `components/scenes/Scene5.tsx` | 62 | `feaa581d0767d25da8669ae3298f494dbd10bf74cc3b9d7fb1e02f789ded7866` |
| `components/scenes/Scene6.tsx` | 48 | `5192da11ae3b3ae91d8894fc66ff4ffa575d928a653bea456df5bec433d99d1c` |
| `components/scenes/Scene7.tsx` | 11 | `f325fa1a87c1fd9ea21d71c8ebe7a3ad18cc8713fa4da6fcc630dac74eb773ca` |
| `components/scenes/Scene8.tsx` | 11 | `35b05fcfa5b8a6d06bcdedeef90c4ec0efa666678ef7aa0e7a23e7a81a047390` |
| `components/scenes/Scene9.tsx` | 35 | `79a4f6afb730e02f73c78a6fa28c7a562afa8cc7a69c3ebbb90f08a80567a21d` |
| `app/(ledger)/evidence/page.tsx` | 578 | `d9cdb6ee93580ee807043e0f293169cea3ba26196983a538cf6983a6e59adee2` |
| `app/(ledger)/contact/page.tsx` | 239 | `2f68a4db10da7c5473e3189203214c3f5c76de310f79e9e7f9463f7e40f09889` |
| `app/api/contact/route.ts` | 33 | `4f9d44b99ba16a54e6ef4ef971886c203b915736dabaf9334cfcb40d2bb9d9af` |
| `app/(ledger)/investors/page.tsx` | 246 | `1784417c133af9a72a9fba2616c148dc29a313d142bb38592ba73927993d61ec` |
| `package.json` | 33 | `4b1790ab4743b29994724f85a0022cc5aa9293b20b586bfcdd6f5db313f37cf9` |
| `package-lock.json` | 2848 | `584e9f5aaf4ecd6a69874abed1175580db446ae228c1b977dc843635705f80a1` |

## 6. Deliverable Provenance Table

| State | File | Lines | SHA-256 |
|---|---|---:|---|
| Created | `sections/Builds.tsx` | 46 | `3bdb546dd10e98f9496aadf96d55f9ccdbea6ef6dafa0bdc6fc1e254f0f337da` |
| Created | `sections/Echoagent.tsx` | 44 | `5b071e6933fcfb67cec108dba51e469197b71f24433e7c8f44a1cda56564dc17` |
| Created | `sections/Cyndicate.tsx` | 45 | `b604ac7ded838a6bc84a0f13fbaa9735941d388e2499f21186df9e0de970bce0` |
| Created | `sections/Technology.tsx` | 59 | `6071bc9a2d57bf93bbff3e67ed549b26d21feeedeaf6ecf6dc6d7abd29b5fdf6` |
| Created | `sections/RefinerBridge.tsx` | 36 | `bb149f5db4553a2fa98de87a4539158ebe3c43677f3a469c7adacdd84fb25986` |
| Created | `sections/Partnerships.tsx` | 30 | `c76c126c33bb6984490b754f5e4b6746a29ee4ec1c834bfc1cc944960cd5c42b` |
| Modified | `app/(ledger)/page.tsx` | 33 | `7ef8361b3ae4d29feee9c4f32750d5f0c0c6e1a5e5ecb4ca6ac1e836af022901` |
| Modified | `app/(ledger)/layout.tsx` | 39 | `2bbfd43a6c57e606e24a9c9676f72b2fc9636ef64b67c83742cc5468556db823` |
| Modified | `app/(cinematic)/cinematic/page.tsx` | 15 | `2410aea3891c197a443cfbd502de6b865a8b30eb66e9d0c3ec4405dd4380c532` |
| Modified | `components/SceneController.tsx` | 149 | `2fcefe4932107131aeec8b58ac202b4977c30a831a9290459876369370797d29` |
| Modified | `components/hero/HeroTerminal.tsx` | 162 | `23e30ee709d461818adbe2753c360fc3064c07a86027be56502f179b47e769cd` |
| Modified | `components/hero/ScrollRunway.tsx` | 26 | `4a3df256d20553fd4c694a4028f8af135ba6f8927037593355dd6c3b4b4f2ecb` |
| Modified | `components/nav/GlobalNav.tsx` | 78 | `4ec76880fc3a22e01d2671fba6c569d726bd26f5adfefa38f54d295e9b1c7787` |
| Modified | `content/vault.ts` | 482 | `59906b89c6e6302913fcd067d1698c90c26f41f12916b5c86ffe072dff16cb3e` |
| Modified | `sections/Validation.tsx` | 75 | `df03ff2cc15365dcb9c636af0fdb924229c66c52e097cef404d48e9249a7e33a` |
| Modified | `sections/Products.tsx` | 22 | `535a63f9b4e43855b18cd0280f1e3c80d7f8ee79d2037bf66a14cc4cd1aa88cd` |
| Modified | `sections/Nairthex.tsx` | 48 | `e2b3d85764f7f808aa159e517c29c63e0c22a3f3087dcb5b5cd48d1572f03b71` |
| Modified | `sections/Echoform.tsx` | 40 | `f98f441e44812ec3a25634021d7199e06eca74cd93d72160439aa768278d1221` |
| Modified | `sections/Team.tsx` | 55 | `633f6656739f507bd9986723a308cf9f5a7ff45f73d1ad36bed163385cd2a282` |
| Modified | `sections/Footer.tsx` | 70 | `23d0aa15d4ff5b91123bc769c23bd7d92b9c1eb30a604d5bb538c5a275707745` |

The handoff’s own final SHA-256 is omitted because embedding it would change and invalidate that hash.

## 7. Repository State & Worktree Status

Branch `main`; HEAD `f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b`. Exact final `git status --short`:

```text
 M app/(cinematic)/cinematic/page.tsx
 M app/(ledger)/layout.tsx
 M app/(ledger)/page.tsx
 M components/SceneController.tsx
 M components/hero/HeroTerminal.tsx
 M components/hero/ScrollRunway.tsx
 M components/nav/GlobalNav.tsx
 M content/vault.ts
 M sections/Echoform.tsx
 M sections/Footer.tsx
 M sections/Nairthex.tsx
 M sections/Products.tsx
 M sections/Team.tsx
 M sections/Validation.tsx
?? HANDOFF_025_PROFESSIONAL_HOMEPAGE_REPOSITIONING_AND_THEMATIC_DEEP_LINK_INTEGRATION.md
?? sections/Builds.tsx
?? sections/Cyndicate.tsx
?? sections/Echoagent.tsx
?? sections/Partnerships.tsx
?? sections/RefinerBridge.tsx
?? sections/Technology.tsx
```

`git diff --cached --name-only` was empty: nothing is staged. All listed paths are Mission 025 deliverables; no unrelated repository files exist. Temporary Mission 025 CDP scripts, screenshots, PID/hash/server files were removed from `%TEMP%`; no orphan probe script remains. Changes are intentionally uncommitted. No commit, push, pull request, GitHub mutation, deployment, or Vercel action occurred.

## 8. Disclosed Limitations & Technical Debt

- Derek approved the information architecture, but final visual approval of this correction remains pending; Mission 025 is not production-deployed.
- `/contact` remains the legacy closed-beta routing-optimization intake (`app/(ledger)/contact/page.tsx:50-68`) and was intentionally not used as a general contact funnel.
- ECHOagent staging/implementation evidence is not broad production or commercial approval (`sections/Echoagent.tsx:27-31`).
- Cyndicate is active development, not finished or broadly ALE-validated; its `1.0` was a narrow regression (`sections/Cyndicate.tsx:23-32`).
- Four-Arm homepage copy reports the tested model/task/configuration, exact displayed means, and measured comparisons; detailed study scope remains available on the protected `/evidence` route.
- Direct-entry URL initializes a scene; subsequent Previous/Next does not synchronize it. Reload uses the original query.
- Historical unmounted components remain intentionally for future scoped cleanup.
- Native horizontal rail scrolling has no custom snap/menu treatment.
- Existing transition lock must release before reverse navigation.
- Exact historical build, route, and first successful homepage-probe stdout was not retained; pass state is preserved without invented output.

## 9. Next-Session Startup Context

Begin by reading/inspecting exactly:

1. `HANDOFF_025_PROFESSIONAL_HOMEPAGE_REPOSITIONING_AND_THEMATIC_DEEP_LINK_INTEGRATION.md`
2. `C:\Users\Derek Angell\Downloads\WEBSITE 9-10-026 .pdf`
3. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\Public\Branding\CONEXUS_Logo_White_Transparent.png`

The corrected candidate remains local. Derek visual approval of the restored ambient hero, relocated header link, and added Scene 4–6 links must occur before a release gate; completed technical validation is not release approval. Do not commit, push, deploy, or begin Mission 026 without explicit authorization.

## 10. Encountered Gotchas & Triage

- The approved repository logo differs from legacy `/logos/` wordmarks; the homepage hero still uses unchanged `/branding/CONEXUS_Logo_White_Transparent.png`. Canonical `/` intentionally has no header logo; non-home ledger routes retain their compact logo (`ScrollRunway.tsx:14-22`; `GlobalNav.tsx:56-67`; `content/vault.ts:477-481`).
- Route-aware nav was necessary: homepage rail and non-home return header have different responsibilities (`GlobalNav.tsx:17-66`).
- Mobile rail must own horizontal scrolling; page-level clipping must not make Company unreachable (`GlobalNav.tsx:33-46`; `page.tsx:17-31`).
- Long editorial grid/min-content widened mobile layout; scoped `overflow-x-clip` fixed document overflow without touching protected global CSS.
- A stale process survived shell-parent termination on port 3015. Stopping the actual listener and restarting one rebuilt server produced authoritative measurements.
- Next.js supplies asynchronous server `searchParams`; awaiting it enables deterministic initial rendering (`cinematic/page.tsx:8-15`).
- Repeated `scene` keys become `string[]`; the strict string check intentionally falls back to Scene 1 (`cinematic/page.tsx:3-5`).
- URL synchronization/popstate were excluded because the requirement covered initialization, not a URL-driven router.
- A concise reverse-click probe hit the existing transition lock; a completion-aware probe verified 2→3→2 without changing timing.
- Ledger layout edits were restricted to metadata lines 20-24; protected lines 1-19 and 25-39 stayed baseline-identical.
- Duplicate Four-Arm evidence was consolidated into `Validation`; detailed `/evidence` remains protected and historical `sections/Evidence.tsx` remains retained.
- Manifesto/Inversion duplication was replaced on `/` by one bounded Refiner bridge while old components remain retained.
- `/contact` is specialized beta intake, so general pilot/partnership paths use founder email.
- Temporary browser probes/screenshots/logs were cleaned up; no application source or asset was touched during documentation correction.
- The first correction CDP harness waited on a load event after navigation state had raced and timed out; a second shell attempt had a redirection/syntax error before reaching the app. Neither produced accepted evidence. The final bounded readiness-polling probe produced the reported measurements, and all ports/processes/temp scripts were cleaned up.

## 11. Act-Mode Defensive Copy Cleanup

### Derek's Copy-Direction Decision

On 2026-09-11, Derek directed Mission 025 to remove homepage language whose primary purpose was to explain what CONEXUS, its systems, products, evidence, filings, and optimization work are not. The correction keeps factual descriptions of what CONEXUS is, what the systems do, what was observed, what was built, and where visitors can go next. It adds no customer, revenue, production, market-validation, or superiority claim. Protected `/evidence`, `/investors`, `/contact`, dedicated cinematic Scene 1–9 sources, global CSS, dependencies, and lockfiles were outside this correction and remain untouched.

### Files Changed by This Correction

- `sections/Echoagent.tsx`
- `sections/Validation.tsx`
- `sections/Cyndicate.tsx`
- `sections/Technology.tsx`
- `sections/Products.tsx`
- `sections/Nairthex.tsx`
- `sections/Echoform.tsx`
- `sections/RefinerBridge.tsx`
- `sections/Partnerships.tsx`
- `content/vault.ts`
- `HANDOFF_025_PROFESSIONAL_HOMEPAGE_REPOSITIONING_AND_THEMATIC_DEEP_LINK_INTEGRATION.md` (this existing handoff, updated in place)

`sections/Team.tsx` and `sections/Footer.tsx` were audited but required no component edit. The rendered footer statement was positively reframed in `content/vault.ts`. No second handoff was created.

### Defensive Sections and Framing Removed

- Removed the complete `What this does not prove` homepage subsection and all five nonclaim bullets from `MISSION_025.evidence`.
- Removed the Four-Arm sentence listing truth, intelligence, consciousness, and general-creativity nonclaims; retained the affirmative semantic-distance definition and observed result.
- Reframed the Token-only comparison around the exact aligned Neutral/Token-only means and the complete sequence's `0.2929` mean.
- Removed ECHOagent production/commercial-approval framing; retained implemented runtime, Azure/container deployment, UI, staging, test assets, trust calibration, continuity, authority boundaries, and handoff.
- Removed Cyndicate finished-release/broad-score framing and the awkward narrow `1.0`; retained the five-agent ALE architecture and active development.
- Removed Technology/IP issued-patent, commercial-readiness, guarantee, freedom-to-operate, and independent-replication framing; retained calibration architecture, controlled research, patent filings, Forgetting Engine optimization, provenance, and strategic elimination.
- Removed homepage NAiRTHEX therapy/diagnosis/clergy/autonomous-authority/crisis-support framing; retained reflective threshold, sacred-space positioning, restraint, voice/text, governed reflection, pastoral context, real destination, and Scene 5.
- Removed homepage ECHOform unconscious-decoding, psychological-truth, psychotherapy, diagnosis, and advice framing; retained dream/memory reflection, Shadow/Light/Reality, user-chosen interpretation, guided demo, and Scene 6.
- Positively reframed the Products overview, Refiner metaphor explanation, Funding card, and footer evidence statement.

### Affirmative Copy and Intentional Contrasts Retained

The Four-Arm question, four conditions, 200 runs, semantic-distance explanation, exact means (`0.2466`, `0.2219`, `0.2258`, `0.2929`), `d = 3.7824`, `p = 0.3612`, Neutral and Token-only explanations, `VIEW THE FULL VALIDATION`, and `SEE THE STUDY VISUALIZED` all remain rendered. Scene 2–6 thematic links remain exactly mapped.

Rendered homepage review found exactly three remaining uses of `not`; each is intentional positioning contrast rather than defensive copy:

1. `AI systems built around judgment, not output volume.`
2. `A trust-calibration layer for business and service moments where a correct answer is not enough.`
3. `Raw capability is not the same as useful intelligence.` (required exact brand line)

Rendered review found zero occurrences of `does not`, `doesn't`, `cannot`, or `not yet`, and zero targeted defensive phrases.

### Validation Results

- Initial post-edit `npm run typecheck`: **FAIL**, stopped before build because a fuzzy content patch temporarily duplicated `NAiRTHEX_SECTION.lead`. The stale duplicate was removed; no accepted validation relied on that run.
- Final `npm run typecheck`: **PASS**.
- Final `npm run build`: **PASS**, Next.js 15.5.23; 34/34 static pages generated and `/` emitted successfully.
- Final `git diff --check`: **PASS**.
- Fresh local production render at `http://localhost:3000/`: **PASS**.
- Desktop `1440×900` screenshot: `%TEMP%\MISSION025_COPY_CLEANUP_DESKTOP_1440x900.png`.
- Mobile `390×844` screenshot: `%TEMP%\MISSION025_COPY_CLEANUP_MOBILE_390x844.png`.
- Visual review: black / ivory / ember palette, CONEXUS logo hero, typography, founder image constraint, card grids, section order, and responsive composition preserved; no visible clipping, overlap, or layout regression.
- DOM review: all 11 expected section IDs exist in order; live hero canvas present; no empty hrefs; no browser exceptions.
- CTA review: `/evidence`, `/investors`, `/cinematic`, and `/cinematic?scene=2` through `scene=6` returned HTTP 200. NAiRTHEX staging, NAiRTHEX doctrine, ECHOform demo, and ECHOform how-it-works destinations also returned HTTP 200. Mail links remain syntactically intact.
- Rendered negative-copy audit: targeted defensive phrases absent; only the three manually approved contrast lines above remain.
- No commit, push, deployment, GitHub mutation, or Vercel action occurred. Derek visual approval remains pending.

### Updated Correction Hashes and Line Counts

| File | Lines | SHA-256 |
|---|---:|---|
| `sections/Echoagent.tsx` | 43 | `f41fcf1c032204b80d6599cbdfef2d9db49d1a61869db91500301e9b4259e5bd` |
| `sections/Validation.tsx` | 64 | `6f63c5b747fc58d85742c032f5db1bf9af44dd7daf11297923c570a609d7018c` |
| `sections/Cyndicate.tsx` | 44 | `4e7d693d2e5001aea52891acd1ef4e9a08b1e1d5e36b46b7b5de7bec8810804d` |
| `sections/Technology.tsx` | 55 | `220296b8224ad328c7478ff9cb9cf8f67850695e28bdd480034aaf8e20dfdc5b` |
| `sections/Products.tsx` | 22 | `12224af0774850bebf820952fc68c48292990e96b6087b6cf0e17f00166fae01` |
| `sections/Nairthex.tsx` | 48 | `9882a0ef72bcfb40d573510f99fe3f9ddeddac451f20f409d7fe1fe11e70797f` |
| `sections/Echoform.tsx` | 40 | `096b9f321a425e363bbb186994d35da0abbfacc44df14b3eb1cd5b829ea0f592` |
| `sections/RefinerBridge.tsx` | 36 | `4d9b72c24cc2dbed89a8d0e81a84b7203f6643f0ef15d2aff1675fd98a5b726c` |
| `sections/Partnerships.tsx` | 30 | `87f96ab4e0b5440759e4a8abb880fd67e219ef1ea0e2aafefe3e68805b1f5d39` |
| `content/vault.ts` | 474 | `09c71eca8c1ddc9f812bfea6afcb098968428a2163a61d70e9694fc5f5437c7b` |

### Final Local Worktree State

- Branch: `main`; HEAD remains `f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b`.
- Index/staged changes: none.
- Worktree: the existing uncommitted Mission 025 candidate plus this copy correction; exact `git status --short` inventory was rechecked after documentation.
- Local runtime: one production listener was used for final render/CTA checks and stopped after verification; ports 3000/3001 were left clear.
- Release state: local only; no commit, push, deployment, GitHub mutation, or Vercel action.
- This handoff's final line count is recorded by the final verification pass. Its own SHA-256 is intentionally not embedded because adding that digest to the file would immediately change the digest; all changed application-file hashes are stable and listed above.

## 12. Act-Mode Site-Wide Defensive Copy Cleanup — Second Pass

### Scope Change After Derek's Visual Review

On 2026-09-11, Derek visually inspected `/evidence` and determined that the first defensive-copy correction had been scoped too narrowly. He explicitly brought `/evidence` into scope for copy changes and directed a site-wide audit of public professional routes under `(ledger)`. This is the second defensive-copy cleanup pass within Mission 025, not a new mission. Dedicated cinematic Scene 1–9 source files, raw evidence artifacts, form validation, operational error handling, global CSS, dependencies, and lockfiles remained outside the correction.

### Professional Route Files Changed in the Second Pass

- `app/(ledger)/evidence/page.tsx`
- `app/(ledger)/evidence/calibration-validation-full/page.tsx`
- `app/(ledger)/investors/page.tsx`
- `app/(ledger)/conexus-sovereign/page.tsx`
- `app/(ledger)/directory/page.tsx`
- `app/(ledger)/echoform/page.tsx`
- `app/(ledger)/ecp-experiment/page.tsx`
- `app/(ledger)/experiences/page.tsx`
- `app/(ledger)/fe-algorithm/page.tsx`
- `app/(ledger)/nairthex/page.tsx`
- `app/(ledger)/observer/page.tsx`
- `app/(ledger)/the-future/page.tsx`
- `app/(ledger)/vrp/page.tsx`
- `HANDOFF_025_PROFESSIONAL_HOMEPAGE_REPOSITIONING_AND_THEMATIC_DEEP_LINK_INTEGRATION.md` (this existing handoff, updated in place)

No second handoff was created.

### `/evidence` Cleanup

- Replaced `What the study supports, and what it does not.` with `What the study found.` and replaced its defensive subtitle with an affirmative experimental-context statement.
- Removed the complete `Limits and open questions` card, its `studyLimits` data, and all `studyLimits` rendering. The supported-findings card now occupies a balanced centered single-column layout.
- Reframed Complexity Inversion around the observed benchmark pattern and current research scope; removed the `Not yet established` label and defensive universal-law block.
- Retained all three exploratory astronomy candidate signals and their candidate-retention status; removed the complete `What it does not show` card and its independent-validation warning.
- Reframed `Review the record` around methods, results, source paths, and technical records without peer-review or replication disclaimers.
- Preserved each benchmark's exact metric and context while replacing the warning against metric combination with an affirmative benchmark-context statement.
- Preserved the Four-Arm means (`0.2466`, `0.2219`, `0.2258`, `0.2929`), `d = 3.7824`, `p = 0.3612`, run counts, benchmark counts, report paths, source link, evidence graphics, and experiment names.

### Site-Wide Professional Cleanup

- Reframed `/investors` diligence, patent-filing, product-stage, evidence-package, and benchmark-context copy affirmatively while retaining study scope and filing status.
- Removed paired defensive `is / is not` columns from `/conexus-sovereign`, `/echoform`, and `/nairthex`; rebalanced each remaining affirmative card with the existing design language.
- Reframed `/experiences`, `/directory`, `/ecp-experiment`, `/fe-algorithm`, `/observer`, `/the-future`, and `/vrp` around implemented functions, study design, archived records, named hypotheses, and tested contexts.
- Reframed the long-form calibration report's defensive headings and promotional negations while retaining all actual statistical outcomes and status labels.
- Manually retained `Not yet tested`, `Not yet tested at n=200`, `Not confirmed`, and statistical `not significant` language where those phrases are factual experimental statuses. Retained the observer malformed-data error as operational error handling. Retained ordinary poetic negatives and the required homepage brand line `Raw capability is not the same as useful intelligence.`

### Second-Pass Validation Results

- Final `npm run typecheck`: **PASS**.
- Final `npm run build`: **PASS**, Next.js 15.5.23; 34/34 static pages generated.
- Final `git diff --check`: **PASS**.
- Fresh local production responses: `/`, `/evidence`, `/investors`, `/evidence/calibration-validation-full`, both local audit-report links, and both evidence image links returned HTTP 200.
- External evidence source link `https://github.com/CONEXUS-dev/research-validation` returned HTTP 200; no GitHub mutation occurred.
- Rendered `/evidence` DOM retained all exact Four-Arm means, `d = 3.7824`, `p = 0.3612`, `30,800`, and benchmark trial counts.
- Rendered `/evidence` DOM contained `What the study found.`, `Research scope`, and all three retained astronomical candidate signals.
- Source and rendered audits found zero occurrences on `/evidence` of `What the study supports, and what it does not.`, `Limits and open questions`, `Not yet established`, or `What it does not show`; `studyLimits` has zero source occurrences.
- Desktop local captures were produced for `/`, `/evidence`, and `/investors`. The first-frame captures reflected the existing Framer Motion entrance opacity but confirmed route composition and section continuity. DOM, source-layout, build, and HTTP reviews found no missing cards, broken grids, missing links, or route regressions.
- No commit, push, deployment, GitHub mutation, or Vercel action occurred. Derek visual approval remains pending.

### Second-Pass Application File Hashes

| File | Lines | SHA-256 |
|---|---:|---|
| `app/(ledger)/evidence/page.tsx` | 539 | `93078406d21d1a32bfd89523b110c3725455534eebc0add5125c68946595bc68` |
| `app/(ledger)/evidence/calibration-validation-full/page.tsx` | 1139 | `75c752d8de5aebee8f885dea5061d8b3ee4867008e75dca15970d943f9b39f55` |
| `app/(ledger)/investors/page.tsx` | 245 | `e64795b30adb838a63d0258a50bcfffd6c1bcb548a725e3b952df4bce517cdae` |
| `app/(ledger)/conexus-sovereign/page.tsx` | 167 | `1642c117541ff4ab5ab1f5c83c68411d4091596789551c42bbd322b6c4b1f937` |
| `app/(ledger)/directory/page.tsx` | 232 | `c5a1cc6eccb32123962752b31c7f2ec586f783bc5ef01508fe6ad6d25d37122f` |
| `app/(ledger)/echoform/page.tsx` | 245 | `70a6c79c6293977cc9923d7d7f01707d0da54b3458ae04927c8dbec8fa618f63` |
| `app/(ledger)/ecp-experiment/page.tsx` | 77 | `2e20cedc13c9c38beee8ebe15396d1c1a19675cc8ca2c029213c5ba8482beed8` |
| `app/(ledger)/experiences/page.tsx` | 149 | `2851c00e7102621ddd0f82449a740f918707644b32508dd405ba448fee9b9d20` |
| `app/(ledger)/fe-algorithm/page.tsx` | 178 | `0b8756743811c891641749edf664b8c6ec23d507889810396b1488a51dcb1eb5` |
| `app/(ledger)/nairthex/page.tsx` | 278 | `a5db979830078359720de02d3abdb1b29101774557e9c0c2b6b6c436f837eb09` |
| `app/(ledger)/observer/page.tsx` | 370 | `d6ccb471346cf0cd447e3fb962d9e6e87e5cb22ee26de0dd7ded632753f77702` |
| `app/(ledger)/the-future/page.tsx` | 189 | `b9160db81df484807d641d9c244184359100badc254c29097400d14b608a2a29` |
| `app/(ledger)/vrp/page.tsx` | 125 | `bc19d976508dd068fd6896f1ce8e1fd295eb615ace6bb634170bb8ee01293198` |

The handoff intentionally omits its own hash because embedding it would invalidate it immediately.