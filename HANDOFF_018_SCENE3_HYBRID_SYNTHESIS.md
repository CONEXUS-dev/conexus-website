# HANDOFF 018 — Scene 3 Hybrid Synthesis

## 1. Scope Completed

### Final user acceptance status

The Mission 018 Hybrid is technically complete and verified, but Derek Angell manually reviewed it in-browser and **rejected it for forward website use**. This is a human visual/experience acceptance decision, not a technical failure. The incumbent Jem Scene 3 in the actual website files remains the canonical and forward implementation.

### Created

- `Scene3_Hybrid_Test/data/scene3ValidationData.ts`
- `Scene3_Hybrid_Test/store/useDataVaultStore.ts`
- `Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx`
- `Scene3_Hybrid_Test/components/scenes/Scene3.tsx`
- `app/scene3-hybrid/page.tsx`
- `HANDOFF_018_SCENE3_HYBRID_SYNTHESIS.md`

### Modified

- `app/globals.css` — replaced only the obsolete GLM Test Tailwind source registration with `@source "../Scene3_Hybrid_Test/**/*.{ts,tsx}";` at line 2.

### Removed after Hybrid proof

- `Scene3_GLM53_Test/`
- `app/scene3-glm/`

The Hybrid passed root typecheck, a staging production build, HTTP 200 on `/scene3-hybrid`, HTTP 200 on `/`, and served-CSS discovery before these obsolete runtime assets were removed. The final source state then passed a second production build and final route verification.

### Protected

The following remained byte-identical by matching pre/post SHA-256 and physical line counts:

- entire `Scene3_GLM53_Lab/` tree;
- current Jem canvas, Scene 3, and store;
- `components/SceneController.tsx`;
- Scene 1 and Scene 2;
- `app/page.tsx` and `app/layout.tsx`;
- `package.json` and `package-lock.json`.

`tsconfig.json` was not changed. Its `Scene3_GLM53_Lab/**/*` exclusion remains at line 20. Hybrid was not integrated into `SceneController` and Jem was not replaced.

## 2. Architecture Decisions & Citations

### Jem-derived visual decisions

1. **Compact cinematic composition.** Jem's incumbent scene places its title, experiment identity, and four-arm controls in a single visual frame (`components/scenes/Scene3.tsx:73-147`). The Hybrid follows that compact chassis at `Scene3_Hybrid_Test/components/scenes/Scene3.tsx:89-156` rather than GLM's former multi-screen editorial runway.
2. **Working project typography.** The Hybrid uses `font-display` and `font-mono` (`Scene3_Hybrid_Test/components/scenes/Scene3.tsx:97-152`), backed by the real Fraunces variable and global theme (`app/layout.tsx:2-12,25-27`; `app/globals.css:4-7`). It does not use undefined `font-editorial`.
3. **Direct arm isolation.** Jem's hover/focus control model (`components/scenes/Scene3.tsx:113-137`) informs the Hybrid's hover, keyboard, and tap controls (`Scene3_Hybrid_Test/components/scenes/Scene3.tsx:116-148`). Nonfocused runs remain ghosted rather than disappearing.
4. **Cinematic camera/postprocessing.** The Hybrid adopts Jem-like framing at `[0, 3.2, 25]`, FOV 42 (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1778-1842,1983-1988`) and condition-shaped bloom/aberration (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1844-1917`). CONEXUS receives the largest visual focus gain without changing classification.
5. **No dominant measurement rings.** GLM's reference-ring component was not transplanted into the final active Hybrid scene. `SceneRoot` contains the physical field, subtle centroid, dust, camera, and postprocessing only (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1924-1934`).

### GLM-derived mechanical decisions

1. **Canonical external data.** The Hybrid data module is byte-identical to `Scene3_GLM53_Lab/data/scene3ValidationData.ts`, including full-precision values and module invariants (`Scene3_Hybrid_Test/data/scene3ValidationData.ts:1-104`).
2. **Equation-only classification.** The Hybrid computes `radius0`, `vLaunch`, `vEscape`, and `isEscaped = vLaunch > vEscape` at `Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:205-220`. No arm-name classification exists.
3. **Deterministic physical state.** Position, velocity, home, tangent, radius, escape, excess, arm, seed, and scale arrays are constructed once (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:172-203`).
4. **One 200-instance field.** Run attributes are attached to one instanced geometry (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1398-1442`) and rendered through one `instancedMesh` (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1655-1661`).
5. **Integrated forces and restoration.** The frame loop integrates real XYZ velocity and position, with home spring and damping rather than position lerping (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1471-1653`).
6. **Distance-driven instability.** Exact run distance remains the shader's instability input (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:465-542`).
7. **Explicit Web Audio unlock.** The lazy audio engine and honest unlock entry point remain at `Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:869-1217`; the control invokes it directly from a click at `Scene3_Hybrid_Test/components/scenes/Scene3.tsx:26-64`.
8. **Richer sonification.** Profiles retain 40 Hz CONTROL/NEUTRAL/TOKEN_ONLY foundations, harmonic support, TOKEN_ONLY timbre, and a 119 Hz CONEXUS target (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:731-824`).

### Deliberate synthesis decisions

1. **Condition-scoped physical activation.** Presentation focus is shared, but each run receives physical activation only if its stored arm index matches the currently active/faded-in focus (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1545-1552`). Escape thrust additionally requires the equation-derived `escaped[i]` and excess (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1569-1589`). Ghosted CONEXUS runs cannot escape during CONTROL, NEUTRAL, or TOKEN_ONLY focus.
2. **Zero causal energy at rest.** `activeArm === "NONE"` sets causal energy to exactly zero (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1480-1488`). Resting life comes from shader noise, camera/dust motion, and display-only wander; home spring and damping restore physical state (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1551-1566,1611-1643`).
3. **Local pinned selection.** The Zustand store remains the unchanged GLM-derived 28-line contract (`Scene3_Hybrid_Test/store/useDataVaultStore.ts:1-28`). Pinned tap/click state is local to the overlay, while hover/focus temporarily overrides it and blur/leave restores it (`Scene3_Hybrid_Test/components/scenes/Scene3.tsx:67-87,127-145`). Canvas and audio consume only store `activeArm`.
4. **Responsive concentrated composition.** The route uses dynamic viewport sizing and scene-local vertical overflow (`Scene3_Hybrid_Test/components/scenes/Scene3.tsx:89-96`). Desktop remains one dominant viewport; short/mobile viewports may scroll only enough to reach controls and evidence.
5. **Reduced motion.** A media-query runtime flag suppresses autonomous camera motion and display wander without changing classification (`Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx:1293-1384,1631-1643,1809-1834`).
6. **Standalone GLM retirement.** Mission 017 established that GLM's engine was valuable but its long-form presentation failed manual acceptance. Once the Hybrid compiled, built, served, and emitted its Tailwind utilities, the disposable Test tree and `/scene3-glm` route were removed. The immutable Lab remains archival evidence.

### Final canonical architecture decision

The technical Hybrid experiment remains valid as R&D and retains its technical provenance. It is not the future, preferred, production-candidate, replacement, or canonical Scene 3. Following Derek Angell's final human visual acceptance decision, the incumbent Jem architecture remains canonical: `components/CausalDataCloudCanvas.tsx`, `components/scenes/Scene3.tsx`, `store/useDataVaultStore.ts`, integrated through `components/SceneController.tsx`. Future Scene 3 work must begin from that current website implementation unless Derek Angell explicitly authorizes a replacement.

## 3. Implementation & Integration Details

### Hybrid source tree and route

`app/scene3-hybrid/page.tsx:1-5` imports only the isolated Hybrid Scene 3. No production controller or normal-site route was changed.

### Data path and store contract

- Canonical data: `Scene3_Hybrid_Test/data/scene3ValidationData.ts`.
- Store: `activeArm`, `audioUnlocked`, `setActiveArm`, `resetActiveArm`, and `setAudioUnlocked` at `Scene3_Hybrid_Test/store/useDataVaultStore.ts:12-28`.
- Local UI state—not Zustand—holds pinned selection.

### Engine and interaction lifecycle

1. The deterministic builder creates all 200 records from full-precision runs.
2. The field is visible at rest with zero physical causal activation.
3. Hover/focus/tap publishes one authoritative `activeArm`.
4. Focus fades smoothly without interpolating through unrelated arm identifiers.
5. Per-run physical activation requires the current arm match.
6. Bound runs tighten/swirl without escaping; equation-classified runs receive excess-scaled thrust only during their condition's activation.
7. Clearing focus immediately zeros causal energy; GLM spring/damping restores the field.
8. No React state is written inside the 200-run frame loop.

### Audio lifecycle

- No AudioContext exists before explicit user activation.
- `ENABLE SOUND` invokes `unlockVaultAudio()` directly.
- `SOUND ON` is shown only from the engine-confirmed store flag.
- Active-arm changes drive smooth audio profile transitions.
- Visibility suspends/resumes audio and unmount closes/disconnects the graph.
- TypeScript 5.9/DOM-compatible WaveShaper casts remain at canvas lines 962 and 1024.

### Camera/depth and postprocessing

- Oblique Jem-like camera, controlled drift, pointer parallax, differential display scale, overlap, and deterministic dust provide immediate depth.
- Large GLM measurement rings are absent.
- Bloom, ACES tone mapping, vignette, and imperative chromatic offset are retained.
- Unsupported `radialModulation` and `modulationOffset` React props are absent.

### CONEXUS climax

CONEXUS focus combines its equation-derived 50 escaped runs with excess-scaled outward thrust, high measured-distance instability, focus enlargement, orange/white-hot emission, strong bloom, chromatic separation, and environmental energy. CONTROL, NEUTRAL, and TOKEN_ONLY remain physically bound because their equation result is 0/50.

### Tailwind and removed runtime

- `app/globals.css:2` registers only `Scene3_Hybrid_Test`.
- Served CSS contains Hybrid-exclusive `100dvh`, `min-h-dvh`, `h-dvh`, radial-gradient, and backdrop-blur output.
- `Scene3_GLM53_Test/` and `app/scene3-glm/` are absent.

## 4. Verbatim Verification Evidence

### Canonical data and invariant

Command: PowerShell byte comparison and direct formula evaluation over `Scene3_Hybrid_Test/data/scene3ValidationData.ts`.

```text
DATA_BYTE_IDENTICAL=True
CONTROL COUNT=50
NEUTRAL COUNT=50
TOKEN_ONLY COUNT=50
CONEXUS COUNT=50

FINAL_EMPIRICAL_INVARIANT
CONTROL 0/50
NEUTRAL 0/50
TOKEN_ONLY 0/50
CONEXUS 50/50
TOTAL=200
DATA_BYTE_IDENTICAL=True
```

### Typecheck

Command:

```text
cmd.exe /d /c "npm run typecheck"
```

Output:

```text
> conexus-2@2.0.0 typecheck
> tsc --noEmit
```

Exit code: `0`. It passed on the first run and was not rerun.

### Staging build before removal

Command: stop the verified repository-owned `next dev` tree, then `cmd.exe /d /c "npm run build"`.

```text
PORT_3000_AFTER_STOP=False
✓ Compiled successfully in 5.3s
✓ Linting and checking validity of types
✓ Generating static pages (6/6)
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /scene3-glm
└ ○ /scene3-hybrid
STAGING_BUILD_EXIT=0
```

Staging HTTP/CSS proof before deletion:

```text
http://127.0.0.1:3000/ STATUS=200 BYTES=13296
http://127.0.0.1:3000/scene3-hybrid STATUS=200 BYTES=20094
CSS_URL_COUNT=1
FOUND_TOKEN=100dvh
FOUND_TOKEN=radial-gradient
FOUND_TOKEN=min-h-dvh
FOUND_TOKEN=h-dvh
FOUND_TOKEN=backdrop-blur
```

### Final build after removal

Command: stop the re-identified repository-owned `next dev` tree, remove only the authorized obsolete paths, then `cmd.exe /d /c "npm run build"`.

```text
PORT_3000_AFTER_STOP=False
GLM_TEST_EXISTS=False
GLM_ROUTE_EXISTS=False
✓ Compiled successfully in 4.9s
✓ Linting and checking validity of types
✓ Generating static pages (5/5)
Route (app)
┌ ○ /
├ ○ /_not-found
└ ○ /scene3-hybrid
FINAL_BUILD_EXIT=0
```

The command transport reported wrapper code 1 after intentionally terminating the terminal-owned prior dev tree, but both builds printed explicit child exit markers `0` and complete successful route tables.

### Final routes and Tailwind output

```text
http://127.0.0.1:3000/ STATUS=200 BYTES=13295
http://127.0.0.1:3000/scene3-hybrid STATUS=200 BYTES=20092
http://127.0.0.1:3000/scene3-glm STATUS=404
CSS_TOKEN=100dvh
CSS_TOKEN=min-h-dvh
CSS_TOKEN=h-dvh
CSS_TOKEN=radial-gradient
CSS_TOKEN=backdrop-blur
```

### Final dev server

```text
FINAL_LISTENER_PID=2684
FINAL_NEXT_PID=11436
PORT=3000
STATUS=LISTENING
```

After the browser-runtime repair documented below, the listener command points to canonical `C:\Users\Derek Angell\Desktop\CONEXUS Website 2.0\node_modules\next\dist\server\lib\start-server.js`; parent PID 11436 is `next dev --hostname 127.0.0.1` in the same canonical repository path. The server was left running for inspection. No production build was run concurrently with this dev process.

### Resumed-session reconciliation (2026-08-23)

The filesystem was treated as authoritative rather than accepting the preserved completion summary. Every existing Mission 018 artifact was re-audited against the corrected plan before acceptance.

```text
npm run typecheck: PASS
npm run build: PASS (compiled successfully in 4.7s; generated 5/5 static pages)
GET /: 200
GET /scene3-hybrid: 200
GET /scene3-glm: 404
served CSS: .h-dvh, .min-h-dvh, .overflow-y-auto, .font-display, .grid-cols-2 present
canonical Hybrid/Lab data byte-identical: True (5967 bytes each)
Lab SHA256SUMS manifest failures: 0
protected baseline failures: 0
equation audit: CONTROL 0/50; NEUTRAL 0/50; TOKEN_ONLY 0/50; CONEXUS 50/50
```

The re-audit also directly confirmed local `pinnedArm` state in `Scene3.tsx`, per-run condition matching, immediate zero causal energy at `NONE`, spring/damping restoration, one 200-instance mesh, explicit audio unlock, audio disposal, responsive local overflow, retired executable GLM paths, and an unchanged production Jem/SceneController surface.

### Manual browser runtime failure and repair (2026-08-23)

The first manual browser attempt invalidated HTTP-only route acceptance: `/scene3-hybrid` displayed the Next development Runtime Error `invariant expected layout router to be mounted`, with `OuterLayoutRouter` at the top of the visible call stack, before the Hybrid rendered.

The failure was not a Hybrid route/module integration defect. `app/layout.tsx`, `app/page.tsx`, and `app/scene3-hybrid/page.tsx` were inspected and contained valid App Router structure and no direct router API use. Node resolved exactly one installed copy each of Next 15.5.23, React 19.2.8, and React DOM 19.2.8. The failed server's stderr instead repeatedly reported Webpack modules whose identifiers differed only by lowercase `c:\...` versus uppercase `C:\...`, including Next App Router modules and contexts (`app-index.js`, `app-router.js`, navigation, shared hooks, and router utilities). The old process was launched through a lowercase-drive working path while Windows resolved the repository as uppercase `C:\...`; its `.next` directory also predated the current dev compile and had survived prior build/dev activity. This demonstrated mixed path-casing duplicate module identities, compounded by reused generated state/client-chunk risk, as the cause of the missing router context.

The repair required zero source edits:

1. Identified the repository-owned tree through port 3000: listener PID 18632, Next PID 18088, and launcher PID 17916.
2. Stopped only that launcher and its descendants, then confirmed port 3000 was released.
3. Removed only generated `.next`.
4. Restarted `npm run dev -- --hostname 127.0.0.1` from canonical `C:\Users\Derek Angell\Desktop\CONEXUS Website 2.0` without running `next build` concurrently.
5. Confirmed the regenerated compile completed with 635 modules and zero mixed-case-module warnings and zero layout-router invariants in the new dev log.

Fresh-profile Chrome was then driven through the real browser runtime via Chrome DevTools Protocol. This was not an HTTP-only check:

```text
/                  readyState=complete; overlay empty; uncaught exceptions 0; console errors 0; canvas 764x485
/scene3-hybrid      readyState=complete; overlay empty; uncaught exceptions 0; console errors 0; canvas 764x485; "Primary Causal Study" present
/scene3-glm         readyState=complete; overlay empty; uncaught exceptions 0; console errors 0; rendered Next 404 page; canvas absent
```

Screenshots captured from those browser executions corroborated that the root composition rendered, the Hybrid reached its WebGL canvas/render surface, and the retired route rendered the 404 page rather than an error overlay. This establishes browser-route integration only; it does not accept visual quality, shader correctness across devices, interaction quality, performance, or audio quality. The post-repair protected baseline check remained at zero failures, and executable GLM Test/route paths remained absent.

## 5. Protected Baseline Provenance Table

Every row matched before and after Act Mode.

| Protected path | Lines | Pre SHA-256 | Post SHA-256 | Result |
|---|---:|---|---|---|
| `components/CausalDataCloudCanvas.tsx` | 709 | `196ffd1820778acd459a0f15215a8af043eb2f56c06df4eec0a56b22703fdf06` | same | unchanged |
| `components/scenes/Scene3.tsx` | 149 | `d82a76c5abda5e1cbc23900d89a0706405d41a64e4c316004b33ee2f3d835749` | same | unchanged |
| `store/useDataVaultStore.ts` | 15 | `8b6e1cb9e575cab2d80913bb1229c32bd3f226db7c91ae0f03ba15e623f70609` | same | unchanged |
| `components/SceneController.tsx` | 123 | `78191b2ad733b575dbacb57edc624de0e76035e4a6d1f3d3e2fed8bb3b09c4a5` | same | unchanged |
| `components/scenes/Scene1.tsx` | 92 | `5f9faced22b40c09ed7ea6c55b44841f178026ba365ba41ce3ad2f61e7e0a38a` | same | unchanged |
| `components/scenes/Scene2.tsx` | 288 | `89137fe78328e7d4990099d97d0f50f011e51ba28312dc6e928a92cf7082be61` | same | unchanged |
| `app/page.tsx` | 5 | `05fa1da288a606d849f4bf8b58728af07ee99de5082863e0c01c38750c01aa01` | same | unchanged |
| `app/layout.tsx` | 29 | `8848b186ecc726a11123832c7ab91ef5f4837d9ab40c6f220c5f673e0e033c55` | same | unchanged |
| `package.json` | 30 | `0a064cface82481cae2cb093b5b70f33917b7bb8c4d5c29c4b7262f6edd6486d` | same | unchanged |
| `package-lock.json` | 2455 | `908b28e3631c41c3235c839fcebd7ba7710f792eea3a9aeab1698915026e259d` | same | unchanged |
| `Scene3_GLM53_Lab/README_BASELINE.txt` | 33 | `fb001c9f4fabbe4cc2670c83992e8507efbeba43008bdee017a5f6976aedbb15` | same | unchanged |
| `Scene3_GLM53_Lab/SHA256SUMS.txt` | 8 | `dfcc2fd0970cd2d874921fcd63968bf93354abd69443b505eaac1b11a51e176b` | same | unchanged |
| `Scene3_GLM53_Lab/components/CausalDataCloudCanvas.tsx` | 2172 | `1994679e44d2e5693457d47dc07061a0fa23a5a266060535fa50c2a228b073df` | same | unchanged |
| `Scene3_GLM53_Lab/components/scenes/Scene3.tsx` | 570 | `885f58bd738525359fca078f1b4385a66675a55764e9a2d2128b3fb880383202` | same | unchanged |
| `Scene3_GLM53_Lab/data/scene3ValidationData.ts` | 104 | `df9eab50138cbf2e2de7c2952adfc72f3ef677459e3aaf5cef3ee1a7e431d858` | same | unchanged |
| `Scene3_GLM53_Lab/store/useDataVaultStore.ts` | 28 | `6a250ed73e73678f98f2fb27fcb36f3052cdbefad24150a642af0a8587e59029` | same | unchanged |
| `Scene3_GLM53_Lab/_source_chunks/CausalDataCloudCanvas_CHUNK_A.txt` | 372 | `1a71fb07a312417fc2e20a19bcc1febd0a7d7a83a5ef119b18a5d775c90d10c0` | same | unchanged |
| `Scene3_GLM53_Lab/_source_chunks/CausalDataCloudCanvas_CHUNK_B.txt` | 840 | `46f1b636d27ab062f22f7e4300b418fc285e58820a214de119c8094d7f295598` | same | unchanged |
| `Scene3_GLM53_Lab/_source_chunks/CausalDataCloudCanvas_CHUNK_C.txt` | 958 | `d7b98d7efa253349d4fff1ac1ec7a0531178607cce049651ebb635b0b05db0f5` | same | unchanged |
| `Scene3_GLM53_Lab/_source_chunks/Scene3_STAGE3_RAW.txt` | 570 | `885f58bd738525359fca078f1b4385a66675a55764e9a2d2128b3fb880383202` | same | unchanged |

## 6. Deliverable Provenance Table

| Deliverable | Lines | SHA-256 | Classification |
|---|---:|---|---|
| `Scene3_Hybrid_Test/data/scene3ValidationData.ts` | 104 | `df9eab50138cbf2e2de7c2952adfc72f3ef677459e3aaf5cef3ee1a7e431d858` | GLM-derived, byte-identical canonical data |
| `Scene3_Hybrid_Test/store/useDataVaultStore.ts` | 28 | `6a250ed73e73678f98f2fb27fcb36f3052cdbefad24150a642af0a8587e59029` | GLM-derived, byte-identical store |
| `Scene3_Hybrid_Test/components/CausalDataCloudCanvas.tsx` | 1994 | `c06c3b1b9db373958cf12250460f7be2df136d8c2d6ecc7504dcd40c8577282b` | GLM engine + Jem visual chassis + synthesis |
| `Scene3_Hybrid_Test/components/scenes/Scene3.tsx` | 157 | `8e022b2552ce8692407fe42d02095fdc698ab0e8d4bddc755118086c5520f5eb` | Jem-derived compact composition + synthesized controls |
| `app/scene3-hybrid/page.tsx` | 5 | `6ee7b8d48b81a30418ff51e86c66f1c63f53aa68e4c1d39870c2c3d7facae717` | Synthesized isolated route |
| `app/globals.css` | 62 | `8d7e72db2956e6fc6618a34900ee5ccab2eabf293eeeaebb9d8ee64404151ee2` | Synthesized integration; one authorized source-line replacement |

## 7. Repository State & Worktree Status

- The repository began with substantial pre-existing dirty/untracked state documented by prior handoffs.
- Mission 018 created only the Hybrid tree, Hybrid route, and this handoff; changed only the authorized Tailwind source line; and removed only the authorized obsolete GLM Test tree and route.
- Existing unrelated dirty/untracked state was not cleaned, restored, moved, or normalized.
- No stage, commit, push, merge, reset, checkout, rebase, or stash was performed.
- No deployment was performed.
- Generated `.next` output was allowed to be replaced by Next builds; no package mutation occurred.

## 8. Disclosed Limitations & Technical Debt

### Completed manual visual/experience acceptance

Derek Angell manually reviewed the Mission 018 Hybrid in-browser and compared it directly with the incumbent Jem Scene 3, including Jem's neutral state and its CONTROL, NEUTRAL, TOKEN-ONLY, and CONEXUS hover states. Derek Angell determined that Jem's incumbent implementation provides the stronger visual composition, hierarchy, interaction clarity, spatial impression, and overall cinematic impact.

Accordingly, the Mission 018 Hybrid is **REJECTED FOR FORWARD WEBSITE USE BY DEREK ANGELL**. This is the project owner's human visual/experience acceptance decision. It is not a technical failure and does not invalidate the Hybrid's successful typecheck, successful production build, canonical 200-run data integrity, equation-derived 0/50, 0/50, 0/50, and 50/50 classification, browser-runtime repair, route verification, protected provenance, or the technical findings from Missions 017 and 018.

Manual visual acceptance is no longer pending. Mobile/device behavior, audio behavior and quality, reduced-motion behavior, performance, and teardown/remount behavior may remain unverified, but these items no longer block the disposition because the Hybrid has already been rejected for forward use.

The isolated `Scene3_Hybrid_Test/` tree and `app/scene3-hybrid/` route are rejected experimental/R&D artifacts retained only for technical provenance and reference unless Derek Angell later instructs otherwise. They must not be treated as the future Scene 3, preferred Scene 3, production candidate, replacement, or canonical implementation.

The physical escape equation is a data-driven visualization of the measured values, not the original study estimator. The evidence supports this tested configuration and is not presented as a universal law about all AI systems.

## 9. Next-Session Startup Context

### CANONICAL SCENE 3

- `components/CausalDataCloudCanvas.tsx`
- `components/scenes/Scene3.tsx`
- `store/useDataVaultStore.ts`
- `components/SceneController.tsx`

These actual website files contain the incumbent Jem implementation preserved throughout Missions 017 and 018. They remain the production-design baseline and the website's forward Scene 3 unless Derek Angell explicitly authorizes a future replacement.

### REJECTED R&D REFERENCE

- `Scene3_Hybrid_Test/`
- `app/scene3-hybrid/`

The Hybrid is retained only for technical provenance and reference. Future Scene 3 work must begin from the canonical Jem implementation above unless Derek Angell explicitly orders otherwise.

## 10. Encountered Gotchas & Triage

1. **Dual-source interface seam:** Jem's visual engine hardcoded escape by arm, while GLM used an equation-derived array. The Hybrid kept GLM classification and created separate presentation and per-run physical activation.
2. **Focus leakage risk:** A global focus energy could have driven ghosted CONEXUS runs during another arm's focus. The final per-run match requires current active arm, faded visual focus, and run arm to agree before any physical force activates.
3. **Rest-energy risk:** The final runtime assigns zero causal energy immediately at `NONE`; only nonphysical display motion remains. Restoration uses spring/damping.
4. **Tailwind discovery:** Root-level Hybrid files required the explicit source registration at `app/globals.css:2`. Served CSS was checked for multiple Hybrid-only utilities rather than relying on HTTP 200.
5. **Postprocessing compatibility:** `@react-three/postprocessing@3.0.5` still does not accept `radialModulation` or `modulationOffset`; neither prop was introduced.
6. **Typed-array compatibility:** Both GLM Test WaveShaper casts were retained exactly in the Hybrid.
7. **Build/dev ownership:** Port 3000's repository-owned Next process tree was identified before each stop. No build ran concurrently with `next dev`.
8. **Route deletion order:** The Hybrid passed typecheck, staging build, HTTP, and CSS checks before old GLM assets were removed. A final build then proved the final route table.
9. **Tool transport:** Stopping a dev process descended from the tool terminal caused the command wrapper to report closure/nonzero after the child build completed. Explicit `STAGING_BUILD_EXIT=0` and `FINAL_BUILD_EXIT=0` markers plus complete route tables establish the underlying results.
10. **npm shim launch:** Direct `Start-Process` invocation of `npm.cmd` was misquoted once and failed before Next started. Launching through quoted `cmd.exe /d /c` succeeded. A harmless PowerShell `CALL` diagnostic appeared after launch, while the verified Next listener remained healthy.
11. **Editor timeout:** One large dead-ring removal patch timed out after partially applying. The affected centroid block was immediately reconstructed from the untouched Test source, the residual ring fragment was removed, and the subsequent first typecheck and both builds passed.
12. **Browser-runtime incident:** HTTP 200 did not establish a usable App Router route. The first manual attempt exposed `invariant expected layout router to be mounted`; live stderr proved mixed `c:\...`/`C:\...` Next module identities. A repository-scoped process stop, port-release check, `.next` deletion, and canonical uppercase-path restart repaired it without source edits. Fresh-profile Chrome then reached both real canvases with no runtime overlay, uncaught exception, or console error; `/scene3-glm` remained a rendered 404.
13. **Final human acceptance:** Derek Angell completed the comparative in-browser visual/experience review and rejected the Hybrid for forward website use. Remaining unverified mobile, audio, performance, reduced-motion, and teardown/remount boundaries do not block this final disposition. The technically verified Hybrid remains R&D reference only; Jem remains canonical.

# FINAL MISSION 018 DISPOSITION

Project Owner: Derek Angell

Hybrid Technical Status: COMPLETE / VERIFIED

Hybrid Human Acceptance Status: REJECTED

Canonical Scene 3 Moving Forward: JEM INCUMBENT IN ACTUAL WEBSITE FILES

Production Replacement Authorized: NO

SceneController Change Authorized: NO

Future Baseline: CURRENT WEBSITE SCENE 3

Decision Authority: Derek Angell