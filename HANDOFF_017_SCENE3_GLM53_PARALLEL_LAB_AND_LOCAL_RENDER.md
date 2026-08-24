# HANDOFF 017 — Scene 3 GLM-5.3 Parallel Lab and Local Render

## 1. Final Scope (Amended After Manual Browser Verification)

The first Mission 017 completion report was **provisional and incomplete**. It preserved Jem's incumbent Scene 3 and the complete pristine GLM archive, created and compiled a disposable GLM Test copy, and exposed `/scene3-glm`, but compilation and HTTP checks alone did not establish a renderable visual-comparison environment. Subsequent manual browser verification showed that the route's React content rendered without its Test-only Tailwind utilities. The source-discovery defect and its repair are recorded in Section 1A below; the amended verification supersedes any earlier statement implying that Mission 017 had already fully achieved a styled comparison render.

### Created

- `Scene3_GLM53_Test/data/scene3ValidationData.ts`
- `Scene3_GLM53_Test/store/useDataVaultStore.ts`
- `Scene3_GLM53_Test/components/CausalDataCloudCanvas.tsx`
- `Scene3_GLM53_Test/components/scenes/Scene3.tsx`
- `app/scene3-glm/page.tsx`
- `HANDOFF_017_SCENE3_GLM53_PARALLEL_LAB_AND_LOCAL_RENDER.md`

The Test canvas was initially copied byte-for-byte and then received only the compiler-demonstrated compatibility repairs documented below.

### Modified existing files

- `tsconfig.json` — appended only `Scene3_GLM53_Lab/**/*` to the existing `exclude` array under the explicit Act Mode override. No compiler option, include entry, path alias, module-resolution setting, strictness setting, JSX setting, or other exclusion changed.
- `app/globals.css` — after the provisional completion, added one Tailwind v4 `@source` registration for the isolated executable Test tree. No existing global rule or theme token changed.

Exact authorized diff:

```diff
-  "exclude": ["node_modules", "sections"]
+  "exclude": ["node_modules", "sections", "Scene3_GLM53_Lab/**/*"]
```

Pre-edit `tsconfig.json`: 21 physical lines, SHA-256 `DBC6ED591BF62EB8F8395AEBB4D1B1CF290802D30F0790317527D610BFC812D0`.

Post-edit `tsconfig.json`: 21 physical lines, SHA-256 `971CC9139D50C8BF61C7BBFADC9CB0C51A5A2E88A0330B9E62D69CEF1C977B59`.

### Protected and confirmed byte-identical

- Entire `Scene3_GLM53_Lab/` tree
- `components/CausalDataCloudCanvas.tsx`
- `components/scenes/Scene3.tsx`
- `store/useDataVaultStore.ts`
- `components/SceneController.tsx`
- `components/scenes/Scene1.tsx`
- `components/scenes/Scene2.tsx`
- `app/page.tsx` and `app/layout.tsx` (`app/globals.css` is the one-file styling-integration repair documented below)
- `package.json` and `package-lock.json`
- Every pre-existing handoff

## 1A. Completion Amendment — Tailwind Source-Discovery Repair

### Failure exposed by manual browser verification

The first browser inspection of `http://127.0.0.1:3000/scene3-glm` found an effectively unstyled document despite HTTP 200 and rendered React content:

- white browser-default background;
- default serif typography and native button styling;
- no intended grid/layout;
- no black cinematic vault presentation; and
- no correctly sized/sticky WebGL composition.

This invalidated the first completion claim: the route existed, but it was not yet suitable for visual comparison.

### Confirmed root cause

`app/globals.css` used Tailwind v4 through `@import "tailwindcss";` with automatic source detection only. The executable source lived in the root-level `Scene3_GLM53_Test/` tree. Before repair, the generated `.next` CSS contained common utilities found elsewhere in the application but omitted Test-only selectors including `bg-[#020204]`, `h-[110vh]`, `focus-visible:ring-white/70`, `md:grid-cols-[260px_1fr]`, and `text-[clamp(2.5rem,6vw,5rem)]`. The HTML loaded the global stylesheet, so this selector-level absence confirmed a Tailwind source-discovery boundary rather than a missing CSS import or failed route render.

### Exact repair

One line was added immediately after the existing Tailwind import:

```diff
 @import "tailwindcss";
+@source "../Scene3_GLM53_Test/**/*.{ts,tsx}";
```

This path is relative to `app/globals.css` and registers only the isolated executable Test TS/TSX tree. No Test file was moved; no utilities were duplicated; no inline styling, aesthetic tuning, empirical data, physics, shaders, camera, bloom, audio, focus behavior, or scroll behavior changed.

`app/globals.css` provenance for this amendment:

| State | Physical lines | SHA-256 |
|---|---:|---|
| Pre-repair | 61 | `370693F85509189B1812B299280EFF764A8DF9040412A5AD9FDE540B2739818D` |
| Post-repair | 62 | `D774C95A2ED1A7BA2823F7B8EE859526AFA93D1327C6101402ED7F1BDAD727A5` |

### Amended verification

1. **Typecheck:** `npm run typecheck` emitted the script header and `tsc --noEmit` with no diagnostics; explicit child marker `TYPECHECK_EXIT=0`.
2. **Build:** the first amended build was invalidated by concurrent writes from the reused `next dev` process to the same `.next` directory. It compiled, then failed while prerendering `/404` with mixed drive-letter-casing module identities and `Cannot read properties of null (reading 'useContext')`. Because the server was no longer safe to reuse and `/scene3-glm` subsequently returned 500, only that repository server process tree was stopped, generated `.next` was removed, and the build was rerun cleanly.
3. **Clean amended build:** `npm run build` completed with explicit `BUILD_EXIT=0`: compiled successfully in 11.5s, passed lint/type validation, collected page data, generated 5/5 static pages, and listed `/scene3-glm` as a static route (16.8 kB route size, 455 kB first load JS).
4. **Server restoration:** the repository development server was restarted on port 3000 after the green clean build. Final listener PID was `11080`; startup reached `Ready in 2.7s`.
5. **HTTP:** final `GET http://127.0.0.1:3000/` returned 200 (13,267-character response); final `GET http://127.0.0.1:3000/scene3-glm` returned 200 (26,351-character response).
6. **Tailwind generation/application evidence:** production CSS `90ada9dab6c59d51.css` contained the Test-only selectors sampled above. The live GLM route linked `/_next/static/css/app/layout.css?v=1787521222171`; that served stylesheet also contained all five sampled selectors. This establishes that the rendered route loads CSS in which the black background, viewport-height composition, responsive grid, focus styling, and cinematic heading sizing are generated rather than falling back to browser defaults.
7. **Visual follow-up status:** no screenshot/browser-automation capability was available to this coding agent. The user's manual inspection supplied the failure observation; generated and live-served CSS evidence now confirms the integration defect is repaired. Manual WebGL/GPU/audio/interaction inspection is ready to continue against the styled route, without aesthetic tuning.
8. **Typography boundary:** `font-editorial` still does not compile because the current Tailwind theme has no token with that name; existing globals instead define `font-serif` and `font-display`. This pre-existing GLM baseline limitation was already recorded below. It does not explain the prior total loss of layout/background/button utilities, and no unauthorized theme/design change was made during this source-discovery repair.

### Revalidated protected provenance

After the repair and amended build, all eight entries in `Scene3_GLM53_Lab/SHA256SUMS.txt` matched their archived SHA-256 values. The complete Lab tree therefore remains pristine. The protected Jem/neighbor files were rehashed and remain byte-identical to the Mission 017 pre-edit values:

| Protected file | Physical lines | Final SHA-256 |
|---|---:|---|
| `components/CausalDataCloudCanvas.tsx` | 709 | `196FFD1820778ACD459A0F15215A8AF043EB2F56C06DF4EEC0A56B22703FDF06` |
| `components/scenes/Scene3.tsx` | 149 | `D82A76C5ABDA5E1CBC23900D89A0706405D41A64E4C316004B33EE2F3D835749` |
| `store/useDataVaultStore.ts` | 15 | `8B6E1CB9E575CAB2D80913BB1229C32BD3F226DB7C91AE0F03BA15E623F70609` |
| `components/SceneController.tsx` | 123 | `78191B2AD733B575DBACB57EDC624DE0E76035E4A6D1F3D3E2FED8BB3B09C4A5` |
| `components/scenes/Scene1.tsx` | 92 | `5F9FACED22B40C09ED7EA6C55B44841F178026BA365BA41CE3AD2F61E7E0A38A` |
| `components/scenes/Scene2.tsx` | 288 | `89137FE78328E7D4990099D97D0F50F011E51BA28312DC6E928A92CF7082BE61` |

`package.json` and `package-lock.json` were not modified by this amendment. Handoff 017 itself is the only handoff amended; no Handoff 018 was created.

## 2. Architecture Decisions & Citations

1. **Jem remains the incumbent application Scene 3.** Mission 016 documents that Jem's implementation was installed as the third scene (`HANDOFF_016_SCENE3_INTERACTIVE_CAUSAL_DATA_VAULT.md:5-20`) and that `SceneController` preserves it at array index 2 (`HANDOFF_016_SCENE3_INTERACTIVE_CAUSAL_DATA_VAULT.md:34`). Mission 017 therefore did not edit or reconnect any Jem file.
2. **The GLM Lab remains an immutable archive.** `Scene3_GLM53_Lab/README_BASELINE.txt:6-8` defines the directory as a preserved greenfield implementation for isolated testing. Its preservation notes state that no fixes or visual tuning had been applied (`Scene3_GLM53_Lab/README_BASELINE.txt:17-27`). Every Lab file was hashed before and after execution and matched exactly.
3. **The Test tree is disposable and executable.** The Lab README explicitly directs a separate route without changing Jem (`Scene3_GLM53_Lab/README_BASELINE.txt:29-33`). Only the four runtime files named at `Scene3_GLM53_Lab/README_BASELINE.txt:10-15` were copied into `Scene3_GLM53_Test`.
4. **The route is isolated from normal navigation.** Direct inspection established the active App Router at root `app/`; `src/app/` does not exist. `app/scene3-glm/page.tsx` imports only `@/Scene3_GLM53_Test/components/scenes/Scene3`. It is not linked from `/`, `SceneController`, or the nine-scene sequence.
5. **Route-local scroll compatibility preserves the global contract.** `app/globals.css:36-45` applies `overflow: hidden` and `height: 100vh` to `html, body`. The isolated route uses a client `useLayoutEffect` to snapshot the exact inline values and priorities of `overflow` and `height` on both elements, temporarily applies a scrollable document contract, and restores those exact declarations on cleanup. No global CSS or GLM Scene3 source was changed for scrolling.
6. **The Lab is excluded as archival input, while Test remains compiled.** The root TypeScript glob originally included both Lab and Test. Under the explicit override, `tsconfig.json:20` now excludes only `Scene3_GLM53_Lab/**/*`; `Scene3_GLM53_Test/**/*` remains in the `**/*.ts`/`**/*.tsx` include at `tsconfig.json:19`.
7. **The empirical model remains equation-derived.** Canonical data is externalized in `Scene3_GLM53_Lab/data/scene3ValidationData.ts:12-16,95-104`. The Test canvas retains `GM = 34`, `K = 10`, and `DISTANCE_SCALE = 35` at lines 81-83 and computes `radius0`, `vLaunch`, `vEscape`, and `isEscaped` from the equation at lines 214-217. No arm-name escape shortcut exists.
8. **Compatibility changes follow existing evidence without visual tuning.** Mission 016 identified the same typed-array mismatch and unsupported wrapper props (`HANDOFF_016_SCENE3_INTERACTIVE_CAUSAL_DATA_VAULT.md:31-33,231-235,250-256`). Mission 017 did not preemptively apply them; the first actual compiler run independently demonstrated them in the pristine Test copy.

## 3. Implementation & Integration Details

### Lab → Test copy flow

Four direct filesystem byte copies were made:

- `Scene3_GLM53_Lab/data/scene3ValidationData.ts` → `Scene3_GLM53_Test/data/scene3ValidationData.ts`
- `Scene3_GLM53_Lab/store/useDataVaultStore.ts` → `Scene3_GLM53_Test/store/useDataVaultStore.ts`
- `Scene3_GLM53_Lab/components/CausalDataCloudCanvas.tsx` → `Scene3_GLM53_Test/components/CausalDataCloudCanvas.tsx`
- `Scene3_GLM53_Lab/components/scenes/Scene3.tsx` → `Scene3_GLM53_Test/components/scenes/Scene3.tsx`

Immediately after copying, all four source/destination SHA-256 pairs matched. No README, checksum file, or `_source_chunks` artifact was copied.

### Test import structure

- Test `Scene3.tsx` imports `../CausalDataCloudCanvas` and `../../store/useDataVaultStore` entirely within the Test tree.
- Test canvas imports `../store/useDataVaultStore` and `../data/scene3ValidationData` entirely within the Test tree.
- The route uses the existing `@/*` → `./*` alias and imports only the Test scene.

### Route structure

`app/scene3-glm/page.tsx` is a client route module. It renders `<Scene3 />` and owns only document scroll compatibility. For each changed property on `document.documentElement.style` and `document.body.style`, it records both `getPropertyValue` and `getPropertyPriority`; cleanup restores the prior declaration or removes only a property that was originally absent.

### Compatibility repairs

Only `Scene3_GLM53_Test/components/CausalDataCloudCanvas.tsx` differs from the Lab runtime source:

1. Line 958 casts `SATURATION_CURVE` to `Float32Array<ArrayBuffer>` for `WaveShaperNode.curve`.
2. Line 1020 casts `BITCRUSH_CURVE` to `Float32Array<ArrayBuffer>` for `WaveShaperNode.curve`.
3. The unsupported `radialModulation` and `modulationOffset={0.41}` React-wrapper props were removed from `ChromaticAberration`; its direct-effect offset animation remains intact.

The two casts are compile-time type bridges only. No array values or runtime audio parameters changed. No empirical data, classification, shader source, physics constant, camera value, bloom value, audio profile, focus behavior, or scroll progression changed.

### Dev server configuration

An existing development server for this exact repository was already running. It was reused rather than restarted:

- URL: `http://127.0.0.1:3000/scene3-glm`
- Port: `3000`
- Server PID: `24132`
- Parent `next dev` PID: `19916`
- Server command: `"C:\Program Files\nodejs\node.exe" "C:\Users\Derek Angell\Desktop\CONEXUS Website 2.0\node_modules\next\dist\server\lib\start-server.js"`

Mission 017 did not start, stop, or take ownership of that process. Consequently there is no Mission 017 startup transcript; process identity and HTTP responses are the reuse evidence.

## 4. Verbatim Verification Evidence

### Initial invocation transport failure — TypeScript did not start

The first shell form was rewritten by the terminal wrapper to an unquoted path and failed before npm execution. This was not counted as the pristine typecheck:

```text
C:\Program : The term 'C:\Program' is not recognized as the name of a
cmdlet, function, script file, or operable program.
...
CommandNotFoundException
```

### First actual pristine-source typecheck

Command:

```text
cmd.exe /d /c "npm run typecheck"
```

Exit code: `1`

Verbatim compiler output, excluding terminal control/spinner sequences:

```text
> conexus-2@2.0.0 typecheck
> tsc --noEmit

Scene3_GLM53_Lab/components/CausalDataCloudCanvas.tsx:958:5 - error TS2322: Type 'Float32Array<ArrayBufferLike>' is not assignable to type 'Float32Array<ArrayBuffer>'.
  Type 'ArrayBufferLike' is not assignable to type 'ArrayBuffer'.
    Type 'SharedArrayBuffer' is missing the following properties from type 'ArrayBuffer': resizable, resize, detached, transfer, transferToFixedLength

958     saturate.curve = SATURATION_CURVE;
        ~~~~~~~~~~~~~~

Scene3_GLM53_Lab/components/CausalDataCloudCanvas.tsx:1020:5 - error TS2322: Type 'Float32Array<ArrayBufferLike>' is not assignable to type 'Float32Array<ArrayBuffer>'.
  Type 'ArrayBufferLike' is not assignable to type 'ArrayBuffer'.
    Type 'SharedArrayBuffer' is missing the following properties from type 'ArrayBuffer': resizable, resize, detached, transfer, transferToFixedLength

1020     shaperCrush.curve = BITCRUSH_CURVE;
         ~~~~~~~~~~~~~~~~~

Scene3_GLM53_Lab/components/CausalDataCloudCanvas.tsx:2083:9 - error TS2322: Type '{ ref: RefObject<ChromaticAberrationEffect | null>; offset: Vector2; radialModulation: true; modulationOffset: number; }' is not assignable to type 'IntrinsicAttributes & Omit<Partial<{ blendFunction?: BlendFunction | undefined; offset?: Vector2 | undefined; radialModulation: boolean; modulationOffset: number; } | undefined>, "offset"> & { ...; }'.
  Property 'radialModulation' does not exist on type 'IntrinsicAttributes & Omit<Partial<{ blendFunction?: BlendFunction | undefined; offset?: Vector2 | undefined; radialModulation: boolean; modulationOffset: number; } | undefined>, "offset"> & { ...; }'.

2083         radialModulation
             ~~~~~~~~~~~~~~~~

Scene3_GLM53_Test/components/CausalDataCloudCanvas.tsx:958:5 - error TS2322: Type 'Float32Array<ArrayBufferLike>' is not assignable to type 'Float32Array<ArrayBuffer>'.
  Type 'ArrayBufferLike' is not assignable to type 'ArrayBuffer'.
    Type 'SharedArrayBuffer' is missing the following properties from type 'ArrayBuffer': resizable, resize, detached, transfer, transferToFixedLength

958     saturate.curve = SATURATION_CURVE;
        ~~~~~~~~~~~~~~

Scene3_GLM53_Test/components/CausalDataCloudCanvas.tsx:1020:5 - error TS2322: Type 'Float32Array<ArrayBufferLike>' is not assignable to type 'Float32Array<ArrayBuffer>'.
  Type 'ArrayBufferLike' is not assignable to type 'ArrayBuffer'.
    Type 'SharedArrayBuffer' is missing the following properties from type 'ArrayBuffer': resizable, resize, detached, transfer, transferToFixedLength

1020     shaperCrush.curve = BITCRUSH_CURVE;
         ~~~~~~~~~~~~~~~~~

Scene3_GLM53_Test/components/CausalDataCloudCanvas.tsx:2083:9 - error TS2322: Type '{ ref: RefObject<ChromaticAberrationEffect | null>; offset: Vector2; radialModulation: true; modulationOffset: number; }' is not assignable to type 'IntrinsicAttributes & Omit<Partial<{ blendFunction?: BlendFunction | undefined; offset?: Vector2 | undefined; radialModulation: boolean; modulationOffset: number; } | undefined>, "offset"> & { ...; }'.
  Property 'radialModulation' does not exist on type 'IntrinsicAttributes & Omit<Partial<{ blendFunction?: BlendFunction | undefined; offset?: Vector2 | undefined; radialModulation: boolean; modulationOffset: number; } | undefined>, "offset"> & { ...; }'.

2083         radialModulation
             ~~~~~~~~~~~~~~~~

Found 6 errors in 2 files.

Errors  Files
     3  Scene3_GLM53_Lab/components/CausalDataCloudCanvas.tsx:958
     3  Scene3_GLM53_Test/components/CausalDataCloudCanvas.tsx:958
```

This showed both the three authorized Test compatibility defects and the unintended inclusion of the immutable archive. The Act Mode override authorized excluding only the Lab tree in `tsconfig.json`.

### Amended/final typecheck

Command:

```text
cmd.exe /d /c "npm run typecheck"
```

Output and explicit exit marker:

```text
> conexus-2@2.0.0 typecheck
> tsc --noEmit

__MISSION017_TYPECHECK_FINAL_EXIT_CODE=0
```

Result: **PASS, exit code 0**. No further typecheck was run.

### Production build

Command:

```text
cmd.exe /d /c "npm run build"
```

Output, with terminal progress-control sequences normalized away:

```text
> conexus-2@2.0.0 build
> next build

   ▲ Next.js 15.5.23

   Creating an optimized production build ...
 ✓ Compiled successfully in 16.8s
 ✓ Linting and checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (5/5)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                                 Size  First Load JS
┌ ○ /                                    67.3 kB         505 kB
├ ○ /_not-found                            993 B         104 kB
└ ○ /scene3-glm                          16.8 kB         455 kB
+ First Load JS shared by all             103 kB
  ├ chunks/255-87552e6e05b8e3aa.js       46.4 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.97 kB

○  (Static)  prerendered as static content

__MISSION017_BUILD_EXIT_CODE=0
```

Result: **PASS, exit code 0**. No source edits followed the green build.

### HTTP and server evidence

Command used `Invoke-WebRequest -UseBasicParsing -TimeoutSec 120` against both URLs.

```text
port=3000|pid=24132|address=::
command="C:\Program Files\nodejs\node.exe" "C:\Users\Derek Angell\Desktop\CONEXUS Website 2.0\node_modules\next\dist\server\lib\start-server.js"
http://127.0.0.1:3000/scene3-glm|status=200|bytes=26410
http://127.0.0.1:3000/|status=200|bytes=13266
```

HTTP 200 proves route serving only; it does not prove GPU rendering, browser shader compilation, smoothness, or audible output.

### Canonical integrity output

```text
CONTROL|runs=50|escaped=0
NEUTRAL|runs=50|escaped=0
TOKEN_ONLY|runs=50|escaped=0
CONEXUS|runs=50|escaped=50
TOTAL|runs=200
```

## 5. Protected Baseline Provenance Table

All SHA-256 values below matched before and after Mission 017.

### Recursive `Scene3_GLM53_Lab` provenance

| Relative path | Lines | Pre SHA-256 | Post SHA-256 | Result |
|---|---:|---|---|---|
| `_source_chunks/CausalDataCloudCanvas_CHUNK_A.txt` | 372 | `1A71FB07A312417FC2E20A19BCC1FEBD0A7D7A83A5EF119B18A5D775C90D10C0` | `1A71FB07A312417FC2E20A19BCC1FEBD0A7D7A83A5EF119B18A5D775C90D10C0` | Byte-identical |
| `_source_chunks/CausalDataCloudCanvas_CHUNK_B.txt` | 840 | `46F1B636D27AB062F22F7E4300B418FC285E58820A214DE119C8094D7F295598` | `46F1B636D27AB062F22F7E4300B418FC285E58820A214DE119C8094D7F295598` | Byte-identical |
| `_source_chunks/CausalDataCloudCanvas_CHUNK_C.txt` | 958 | `D7B98D7EFA253349D4FFF1AC1EC7A0531178607CCE049651EBB635B0B05DB0F5` | `D7B98D7EFA253349D4FFF1AC1EC7A0531178607CCE049651EBB635B0B05DB0F5` | Byte-identical |
| `_source_chunks/Scene3_STAGE3_RAW.txt` | 570 | `885F58BD738525359FCA078F1B4385A66675A55764E9A2D2128B3FB880383202` | `885F58BD738525359FCA078F1B4385A66675A55764E9A2D2128B3FB880383202` | Byte-identical |
| `components/CausalDataCloudCanvas.tsx` | 2172 | `1994679E44D2E5693457D47DC07061A0FA23A5A266060535FA50C2A228B073DF` | `1994679E44D2E5693457D47DC07061A0FA23A5A266060535FA50C2A228B073DF` | Byte-identical |
| `components/scenes/Scene3.tsx` | 570 | `885F58BD738525359FCA078F1B4385A66675A55764E9A2D2128B3FB880383202` | `885F58BD738525359FCA078F1B4385A66675A55764E9A2D2128B3FB880383202` | Byte-identical |
| `data/scene3ValidationData.ts` | 104 | `DF9EAB50138CBF2E2DE7C2952ADFC72F3EF677459E3AAF5CEF3EE1A7E431D858` | `DF9EAB50138CBF2E2DE7C2952ADFC72F3EF677459E3AAF5CEF3EE1A7E431D858` | Byte-identical |
| `README_BASELINE.txt` | 33 | `FB001C9F4FABBE4CC2670C83992E8507EFBEBA43008BDEE017A5F6976AEDBB15` | `FB001C9F4FABBE4CC2670C83992E8507EFBEBA43008BDEE017A5F6976AEDBB15` | Byte-identical |
| `SHA256SUMS.txt` | 8 | `DFCC2FD0970CD2D874921FCD63968BF93354ABD69443B505EAAC1B11A51E176B` | `DFCC2FD0970CD2D874921FCD63968BF93354ABD69443B505EAAC1B11A51E176B` | Byte-identical |
| `store/useDataVaultStore.ts` | 28 | `6A250ED73E73678F98F2FB27FCB36F3052CDBEFAD24150A642AF0A8587E59029` | `6A250ED73E73678F98F2FB27FCB36F3052CDBEFAD24150A642AF0A8587E59029` | Byte-identical |

### Jem and neighboring scene provenance

| Protected file | Lines | Pre SHA-256 | Post SHA-256 | Result |
|---|---:|---|---|---|
| `components/CausalDataCloudCanvas.tsx` | 709 | `196FFD1820778ACD459A0F15215A8AF043EB2F56C06DF4EEC0A56B22703FDF06` | `196FFD1820778ACD459A0F15215A8AF043EB2F56C06DF4EEC0A56B22703FDF06` | Byte-identical |
| `components/scenes/Scene3.tsx` | 149 | `D82A76C5ABDA5E1CBC23900D89A0706405D41A64E4C316004B33EE2F3D835749` | `D82A76C5ABDA5E1CBC23900D89A0706405D41A64E4C316004B33EE2F3D835749` | Byte-identical |
| `store/useDataVaultStore.ts` | 15 | `8B6E1CB9E575CAB2D80913BB1229C32BD3F226DB7C91AE0F03BA15E623F70609` | `8B6E1CB9E575CAB2D80913BB1229C32BD3F226DB7C91AE0F03BA15E623F70609` | Byte-identical |
| `components/SceneController.tsx` | 123 | `78191B2AD733B575DBACB57EDC624DE0E76035E4A6D1F3D3E2FED8BB3B09C4A5` | `78191B2AD733B575DBACB57EDC624DE0E76035E4A6D1F3D3E2FED8BB3B09C4A5` | Byte-identical |
| `components/scenes/Scene1.tsx` | 92 | `5F9FACED22B40C09ED7EA6C55B44841F178026BA365BA41CE3AD2F61E7E0A38A` | `5F9FACED22B40C09ED7EA6C55B44841F178026BA365BA41CE3AD2F61E7E0A38A` | Byte-identical |
| `components/scenes/Scene2.tsx` | 288 | `89137FE78328E7D4990099D97D0F50F011E51BA28312DC6E928A92CF7082BE61` | `89137FE78328E7D4990099D97D0F50F011E51BA28312DC6E928A92CF7082BE61` | Byte-identical |

## 6. Deliverable Provenance Table

| Deliverable | Lines | Final SHA-256 | Lab relationship / reason |
|---|---:|---|---|
| `Scene3_GLM53_Test/data/scene3ValidationData.ts` | 104 | `DF9EAB50138CBF2E2DE7C2952ADFC72F3EF677459E3AAF5CEF3EE1A7E431D858` | Byte-identical to Lab |
| `Scene3_GLM53_Test/store/useDataVaultStore.ts` | 28 | `6A250ED73E73678F98F2FB27FCB36F3052CDBEFAD24150A642AF0A8587E59029` | Byte-identical to Lab |
| `Scene3_GLM53_Test/components/CausalDataCloudCanvas.tsx` | 2170 | `BE0B01E18FBE3FC770357763BFB87055C54702CEE4099AD20CE878A9F3060063` | Differs only for two WaveShaper type casts and removal of two unsupported wrapper props |
| `Scene3_GLM53_Test/components/scenes/Scene3.tsx` | 570 | `885F58BD738525359FCA078F1B4385A66675A55764E9A2D2128B3FB880383202` | Byte-identical to Lab |
| `app/scene3-glm/page.tsx` | 55 | `3BDD3B7BA4E22A8AB7274357BDE2C3DAF1935ABFB75FC63FAB169137D848F8F3` | New isolated route and route-local scroll wrapper |
| `tsconfig.json` | 21 | `971CC9139D50C8BF61C7BBFADC9CB0C51A5A2E88A0330B9E62D69CEF1C977B59` | Existing file; appended only Lab archive exclusion |

Initial Test hashes before compatibility repair exactly matched all four Lab runtime hashes. The Test data remained byte-identical after repair and contains 50 values per arm, 200 total. Independent equation evaluation produced CONTROL `0/50`, NEUTRAL `0/50`, TOKEN_ONLY `0/50`, and CONEXUS `50/50` escaped.

## 7. Repository State & Worktree Status

The worktree had extensive deletions, modifications, and untracked files before Mission 017. These included tracked changes to `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `package.json`, `package-lock.json`, and `tsconfig.json`, plus many untracked handoffs and application modules. Mission 017 did not clean, restore, stage, delete, move, normalize, or otherwise modify unrelated state.

Final `git status --short --branch` retained that baseline and added the mission-specific untracked trees. Relevant complete categories were:

```text
## main
 D HANDOFF_001_VISUAL_POLISH_AND_DEPLOY.md
 D app/api/contact/route.ts
 D app/atlas-80/page.tsx
 D app/canvas/page.tsx
 D app/conexus-sovereign/page.tsx
 D app/contact/page.tsx
 D app/directory/page.tsx
 D app/discovery/page.tsx
 D app/dream-mirror/page.tsx
 D app/echoform/page.tsx
 D app/ecp-experiment/page.tsx
 D app/evidence/calibration-validation-full/page.tsx
 D app/evidence/layout.tsx
 D app/evidence/page.tsx
 D app/experiences/page.tsx
 D app/fe-algorithm/page.tsx
 D app/fe-algorithm/plain-english/page.tsx
 D app/follow-me/page.tsx
 M app/globals.css
 D app/investors/page.tsx
 M app/layout.tsx
 D app/nairthex/page.tsx
 D app/observer/page.tsx
 D app/observer/page.tsx.backup
 M app/page.tsx
 D app/pitch/page.tsx
 D app/refinery/page.tsx
 D app/the-future/page.tsx
 D app/verticals/echopanion/page.tsx
 D app/verticals/mira/page.tsx
 D app/verticals/page.tsx
 D app/verticals/reflect/page.tsx
 D app/verticals/soma/page.tsx
 D app/vrp/page.tsx
 D components/hero/HeroTerminal.tsx
 D components/hero/ScrollRunway.tsx
 D components/nav/FocusContext.tsx
 D components/nav/FocusProvider.tsx
 D components/nav/GlobalNav.tsx
 D components/primitives.tsx
 D components/products/ProductGateways.tsx
 M package-lock.json
 M package.json
 M tsconfig.json
?? BLUEPRINT_SCENE2_SCROLL_ARCHITECTURE.md
?? HANDOFF_002_CONEXUS_FRONTEND_VERIFICATION_AND_LAUNCH.md
?? HANDOFF_004_SCENE1_CINEMATIC_PACING_FIX.md
?? HANDOFF_005_SCENE2_TASTEFUL_STREAMING_FIX.md
?? HANDOFF_006_SCENE2_TYPING_DEADLOCK_FIX.md
?? HANDOFF_007_AESTHETICS_AND_TYPOGRAPHIC_PERSONALITY.md
?? HANDOFF_008_SHARED_HERO_TERMINAL_SCENES_1_AND_2.md
?? HANDOFF_009_SCENE2_CANVAS_READABILITY_AND_SCROLL_REPAIR.md
?? HANDOFF_010_PROJECT_SYNC_AND_SCROLL_HOTFIX.md
?? HANDOFF_011_SCENE2_OFFSETTOP_SCROLL_FIX.md
?? HANDOFF_012_SCENE2_CINEMATIC_LOCKDOWN_AND_ESCAPE_HATCH.md
?? HANDOFF_013_SCENE2_TOTAL_ARCHITECTURE_AUDIT.md
?? HANDOFF_016_SCENE3_INTERACTIVE_CAUSAL_DATA_VAULT.md
?? "Jem's Scene 3 Files 1 - 3.md"
?? "SFAM WEBSITE GLM 5.2.md"
?? Scene3_GLM53_Lab/
?? Scene3_GLM53_Test/
?? "Website - Scenes From a Memory.md"
?? app/scene3-glm/
?? components/CausalDataCloudCanvas.tsx
?? components/HeroTerminalCanvas.tsx
?? components/KineticCursor.tsx
?? components/ParticleBackground.tsx
?? components/SceneController.tsx
?? components/scenes/
?? store/
```

Mission-specific additions are isolated to `Scene3_GLM53_Test/`, `app/scene3-glm/`, and this handoff. The one authorized existing-file modification is `tsconfig.json`; because it was already dirty, pre/post cryptographic provenance and the exact one-line diff above isolate Mission 017's change. No Git commit, push, stage, merge, rebase, checkout, reset, or stash occurred.

## 8. Disclosed Limitations & Technical Debt

Manual browser verification is still required for all of the following:

1. **WebGL rendering:** HTTP and build success do not prove that a browser/GPU renders the canvas correctly.
2. **Shader compilation in browser:** GLSL was not inspected through browser developer tools; runtime shader compilation remains unverified.
3. **Actual visual smoothness:** frame pacing, camera smoothness, bloom behavior, chromatic aberration, and GPU load require human observation.
4. **Hover/focus isolation:** semantic controls compiled, but pointer and keyboard isolation behavior requires interactive browser testing.
5. **Scroll physics:** the route-local document override enables the intended scroll contract, but progression and physical response require manual scrolling.
6. **Explicit Web Audio unlock:** the unlock button and native graph compiled, but browser autoplay policy and successful activation require a real click.
7. **40 Hz perceptual audibility:** hardware- and listener-dependent; unverified.
8. **~119 Hz CONEXUS transition:** runtime transition and audibility are unverified.
9. **Remount/reset behavior:** intentionally not changed in Mission 017; mutable module-level field/runtime structures may warrant later investigation.
10. **Mobile behavior:** touch interaction, viewport sizing, performance, and scroll behavior remain unverified.
11. **Reduced motion:** no redesign or dedicated behavioral validation was in scope.
12. **Typography:** the pristine overlay uses `font-editorial`, while current globals define `font-serif` and `font-display`; no global theme change was authorized.
13. **Wrapper-prop compatibility:** removal of `radialModulation` and `modulationOffset` means the installed wrapper defaults govern those two constructor options. Direct per-frame offset animation remains present.
14. **Existing dev server:** Mission 017 reused a pre-existing process and did not capture its original startup console. PID, command line, and successful HTTP responses are recorded instead.

## 9. Next-Session Startup Context

The next session must read exactly:

1. `HANDOFF_017_SCENE3_GLM53_PARALLEL_LAB_AND_LOCAL_RENDER.md`
2. `Scene3_GLM53_Test/components/CausalDataCloudCanvas.tsx`
3. `Scene3_GLM53_Test/components/scenes/Scene3.tsx`

The direct local comparison URL is `http://127.0.0.1:3000/scene3-glm`. Jem remains available through the normal application experience at `http://127.0.0.1:3000/`.

## 10. Encountered Gotchas & Triage

1. **Path/import issues:** Root `app/` is the only active App Router. Test relative imports already resolved within the copied tree, and the route uses the existing root alias. No Test import rewrite was needed.
2. **Archival Lab in TypeScript glob:** Root `tsconfig.json` included every repository-local TS/TSX file, so the first typecheck emitted the same errors in immutable Lab and executable Test. Explicit authorization added only `Scene3_GLM53_Lab/**/*` to `exclude`; Test remains compiled.
3. **Package API compatibility:** `@react-three/postprocessing@3.0.5` rejected `radialModulation` and `modulationOffset` on the React `ChromaticAberration` wrapper. Only those two Test JSX props were removed.
4. **TypeScript generic compatibility:** TypeScript 5.9.3 inferred `Float32Array<ArrayBufferLike>` while current DOM declarations require `Float32Array<ArrayBuffer>` for `WaveShaperNode.curve`. Two narrowly scoped Test casts resolved the compile-only mismatch.
5. **Route placement:** The route belongs at `app/scene3-glm/page.tsx`; `src/app/` is absent.
6. **Global scroll contract:** Existing global `overflow: hidden` and `height: 100vh` required route-local overrides on both `html` and `body`. Exact inline values and priorities are restored on cleanup; globals and GLM Scene3 remain untouched.
7. **npm command transport:** Direct PowerShell invocation was rewritten to unquoted `C:\Program Files\nodejs\npm.cmd` and failed before npm started. `cmd.exe /d /c "npm ..."` bypassed that wrapper issue. The transport subsequently labeled successful commands nonzero after terminal closure, but explicit child-process markers recorded typecheck and build exit code `0`.
8. **Server details:** Port 3000 was already owned by this repository's Next.js development server (PID 24132, parent `next dev` PID 19916). It served both routes successfully and was reused without restart or ownership changes. Port 3017 was not needed.
9. **Read-only integrity command typo:** One PowerShell data-check attempt had an interpolation parser error before execution. It changed nothing; the corrected read-only command confirmed all canonical counts and escape invariants.
10. **Dirty worktree:** The repository's broad pre-existing state makes ordinary Git status insufficient for internal isolation. Recursive and per-file SHA-256 provenance proves zero Lab/Jem/neighbor drift.
