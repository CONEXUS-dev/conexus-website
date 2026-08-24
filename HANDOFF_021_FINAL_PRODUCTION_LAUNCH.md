# HANDOFF 021 — Final Production Launch

Date: 2026-08-24  
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`  
Branch: `main`  
Release commit: `9e16ba0439e625fd1f7ecc21894c64e14d08035d`  
Release approval: Derek Angell approved the accepted Mission 020 unified website for production launch.

## 1. Scope Completed

Mission 021 promoted the accepted Mission 020 candidate without changing application source during the release mission.

1. Read `HANDOFF_020_ARCHITECTURE_MERGE.md`, `package.json`, and `package-lock.json` in full.
2. Verified repository root, branch, HEAD, `origin/main`, live remote SHA, remote URL, complete status, unstaged delta, staged state, and local-ahead state.
3. Verified both post-completion Scene 3 amendments and the final rollback chronology in Mission 020.
4. Recomputed all six protected cinematic file hashes and line counts.
5. Confirmed `app/scene3-hybrid` was absent and `Scene3_Hybrid_Test/` remained preserved.
6. Preserved `HANDOFF_001_VISUAL_POLISH_AND_DEPLOY.md` byte-for-byte from committed blob `7d754eaa0c2994daf3539fbf796bf57aaca32d4f`; its unintended pre-existing deletion was not released.
7. Stopped only the repository-owned Next development server after identifying its executable and exact repository command path.
8. Ran the authorized final `npm run typecheck` once, followed by `npm run build` once. Both exited 0.
9. Inspected the build route manifest and complete release/staged boundary.
10. Staged only the accepted Mission 020 source, reviewed documentation/provenance, and preserved R&D trees. Generated files, secrets, the Industrial Turn video, and a public Hybrid route were not staged.
11. Created exactly one release commit with message `Mission 021: launch unified CONEXUS cinematic and ledger website`.
12. Pushed `main` and verified local HEAD, local `origin/main`, and live remote `main` equality.
13. Observed the existing GitHub/Vercel integration reach a successful terminal production state for the release SHA.
14. Verified the Vercel production alias and custom public domain over HTTP and in Chrome at 1440×900.
15. Verified the two-way bridges, shell isolation, ledger scrolling, refinery redirect, Hybrid 404, and active Scene 3 particle animation.

No Scene 3 mobile redesign, dependency upgrade, audit remediation, architecture change, route restoration, public-asset change, or application-source edit occurred during Mission 021.

## 2. Architecture Decisions & Citations

Mission 021 preserved the accepted Mission 020 architecture exactly:

- `HANDOFF_020_ARCHITECTURE_MERGE.md:10-20` defines `/` as the cinematic vault, `/ledger` as the incumbent homepage, separate route-group shells, both bridge controls, retired `/scene3-hybrid`, and `/refinery` redirection.
- `HANDOFF_020_ARCHITECTURE_MERGE.md:24-43` records the `(cinematic)` and `(ledger)` root layouts and explains why no top-level `app/layout.tsx` exists.
- `HANDOFF_020_ARCHITECTURE_MERGE.md:178-203` records rejection and complete rollback of the Scene 3 mobile-scroll experiment.
- `app/(cinematic)/page.tsx:1-5` mounts `SceneController` at `/`.
- `app/(cinematic)/layout.tsx:20-32` owns the cinematic root shell and adds `LedgerEscapeHatch`.
- `app/(ledger)/layout.tsx:26-39` owns the ledger root shell with `FocusProvider` and `GlobalNav`.
- `app/(ledger)/ledger/page.tsx:1-27` composes the incumbent scroll-down website at `/ledger`.
- `app/(ledger)/refinery/page.tsx:1-5` redirects to `/ledger#refinery`.
- `components/LedgerEscapeHatch.tsx:3-12` implements `> ACCESS RAW LEDGER` to `/ledger`.
- `components/nav/GlobalNav.tsx:50-65` implements `RETURN TO VAULT` to `/` at desktop and narrow widths.
- `tsconfig.json:19-20` excludes `Scene3_GLM53_Lab/**/*` and `Scene3_Hybrid_Test/**/*` while preserving those trees.

The release did not reinterpret or modify these decisions.

## 3. Implementation & Integration Details

Mission 021 introduced no new application architecture or source implementation. It promoted the frozen Mission 020 production candidate consisting of:

- cinematic experience at `/`;
- incumbent website at `/ledger`;
- separate cinematic and ledger route-group layouts and CSS boundaries;
- incumbent top-level routes and legacy redirects;
- contact API route;
- restored `SavingsCalculator.tsx` and `EvidenceInfographics.tsx`;
- cinematic-to-ledger and ledger-to-cinematic controls;
- `/refinery` redirect to `/ledger#refinery`;
- public retirement of `/scene3-hybrid` while retaining `Scene3_Hybrid_Test/`;
- accepted exact dependencies including `framer-motion@12.43.0`, `lucide-react@0.563.0`, and `recharts@2.15.4`;
- accepted donor-origin duplicate React footer-key correction.

The release commit contains 94 paths with 17,268 insertions and 494 deletions relative to the prior committed incumbent baseline. Git recognized the incumbent App Router migration primarily as moves into `app/(ledger)/`. All 161 public assets remained outside the release diff.

Documentation staging was individually bounded. It included the sequential Mission 002–020 handoffs, the Mission 013 Scene 2 blueprint, the cinematic specification/reference documents, and Mission 017/018 Scene 3 R&D provenance. It excluded all files outside the canonical repository and all temporary/generated material.

## 4. Verbatim Verification Evidence

### Repository identity before release

```text
git rev-parse --show-toplevel
C:/Users/Derek Angell/Desktop/CONEXUS Website Integration Workspace/CONEXUS Website 2.0

git branch --show-current
main

git rev-parse HEAD
2d9dda8b6a16d74317cab882eb0a484b745d6624

git rev-parse origin/main
2d9dda8b6a16d74317cab882eb0a484b745d6624

git ls-remote origin refs/heads/main
2d9dda8b6a16d74317cab882eb0a484b745d6624 refs/heads/main

git remote get-url origin
https://github.com/CONEXUS-dev/conexus-website

git rev-list --left-right --count origin/main...HEAD
0 0
```

No files were staged and no local commits existed beyond `origin/main` before release.

### Handoff 001 preservation

```text
HEAD_BLOB=7d754eaa0c2994daf3539fbf796bf57aaca32d4f
WORKTREE_BLOB=7d754eaa0c2994daf3539fbf796bf57aaca32d4f
MATCH=True
LINES=72
```

The path produced no staged or unstaged diff.

### Final typecheck — executed exactly once

Command:

```powershell
npm run typecheck
```

Output and result:

```text
> conexus-2@2.0.0 typecheck
> tsc --noEmit

TYPECHECK_EXIT_CODE=0
```

### Final production build — executed exactly once

Command:

```powershell
npm run build
```

Key output and result:

```text
> conexus-2@2.0.0 build
> next build

▲ Next.js 15.5.23
✓ Compiled successfully in 6.7s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (33/33)
✓ Collecting build traces
✓ Finalizing page optimization
BUILD_EXIT_CODE=0
```

The route manifest contained:

```text
/
/_not-found
/api/contact
/atlas-80
/canvas
/conexus-sovereign
/contact
/directory
/discovery
/dream-mirror
/echoform
/ecp-experiment
/evidence
/evidence/calibration-validation-full
/experiences
/fe-algorithm
/fe-algorithm/plain-english
/follow-me
/investors
/ledger
/nairthex
/observer
/pitch
/refinery
/the-future
/verticals
/verticals/echopanion
/verticals/mira
/verticals/reflect
/verticals/soma
/vrp
```

`/scene3-hybrid` was absent.

### Staged boundary

```text
94 files changed, 17268 insertions(+), 494 deletions(-)
UNSTAGED=0
UNTRACKED=0
BAD_COUNT=0
```

No `.next/`, `node_modules/`, `.env*`, log, script, screenshot, probe, Industrial Turn video, sibling Website 1.0 path, public Hybrid route, or public-asset delta was staged. `git diff --cached --check` reported only trailing spaces already present inside historical handoff documents being added as immutable provenance; those records were not rewritten.

### Commit and push

```text
git commit -m "Mission 021: launch unified CONEXUS cinematic and ledger website"
[main 9e16ba0] Mission 021: launch unified CONEXUS cinematic and ledger website
94 files changed, 17268 insertions(+), 494 deletions(-)
COMMIT_EXIT_CODE=0

git push origin main
To https://github.com/CONEXUS-dev/conexus-website
   2d9dda8..9e16ba0  main -> main
PUSH_EXIT_CODE=0

HEAD=9e16ba0439e625fd1f7ecc21894c64e14d08035d
ORIGIN_MAIN=9e16ba0439e625fd1f7ecc21894c64e14d08035d
LIVE_MAIN=9e16ba0439e625fd1f7ecc21894c64e14d08035d
ALL_EQUAL=True
```

### Production deployment

```text
Git SHA: 9e16ba0439e625fd1f7ecc21894c64e14d08035d
GitHub deployment ID: 6056507240
GitHub environment: Production – conexus-website
Vercel deployment identity: 2KScbE7Yxy3Ug5KpvJiNBaCcFbEe
State: success
Description: Deployment has completed
Created/updated: 2026-08-24T04:21:12Z
Deployment URL: https://conexus-website-17t3ac3o5-dangell-5898s-projects.vercel.app
Vercel production alias: https://conexus-website.vercel.app
Custom production domain: https://www.conexusglobalarts.media
```

The deployment-specific URL is protected by Vercel SSO and returned `302` to `vercel.com/sso-api`. GitHub/Vercel deployment status supplied its successful identity and exact Git SHA. Public verification therefore used the production alias and custom domain.

### Live HTTP routes

The following results were identical on `https://conexus-website.vercel.app` and `https://www.conexusglobalarts.media`:

| Route | Result |
|---|---|
| `/` | `200`; cinematic root |
| `/ledger` | `200`; incumbent scroll-down site |
| `/evidence` | `200` |
| `/observer` | `200` |
| `/nairthex` | `200` |
| `/echoform` | `200` |
| `/fe-algorithm` | `200` |
| `/refinery` | `307` to same-origin `/ledger#refinery` |
| `/scene3-hybrid` | `404` |

`https://conexusglobalarts.media` returned `308` to the corresponding path on `https://www.conexusglobalarts.media`.

The alias and custom-domain root HTML were byte-identical at verification time:

```text
Length: 11144
SHA-256: 81F8594AB237F04736F33E0AE364E9FD16FF2298D21FDF80A415938F9C7D0199
Cinematic layout chunk: /_next/static/chunks/app/(cinematic)/layout-08fabb8c0f85b386.js
Cinematic page chunk: /_next/static/chunks/app/(cinematic)/page-b77756b727dd3f43.js
```

The custom domain DNS CNAME resolved through `34f0d1a7a1b64da.vercel-dns-017.com`, and both hosts returned `Server: Vercel`.

### Desktop Chrome verification

Google Chrome `151.0.7922.170` was launched at 1440×900 in an isolated temporary profile against production.

Observed:

- `/` title was `CONEXUS`.
- Root document dimensions were exactly 1440×900.
- `html` and `body` overflow were both hidden.
- Root had one visible 1440×900 canvas at opacity 1.
- Ledger GlobalNav was absent from the cinematic root.
- `> ACCESS RAW LEDGER` navigated to `/ledger`.
- `/ledger` document height was 19,914 px and successfully scrolled to `scrollY=1200`.
- Ledger GlobalNav and `RETURN TO VAULT` were present.
- `RETURN TO VAULT` navigated back to `/`.
- Cinematic font and ledger font stacks were isolated.
- `/refinery` reached `/ledger#refinery`.
- `/scene3-hybrid` displayed `404: This page could not be found.`
- Scene 3 was reached through `Go to scene 3`; its 1440×900 canvas remained visible at opacity 1.
- Scene 3 frames captured two seconds apart differed:
  - frame 1: `38e730c1ca28026b7e3aac6f05dbd119117b2fa486b0dc91f201f2e0d3de55dc`
  - frame 2: `16503876ecd77a848a7bfb90b79f523cb78a1fcd99cda87dc337f211bfbb9df0`
  - result: active particle animation confirmed.
- No Next error overlay appeared.
- No hydration failure appeared.
- No React duplicate-key warning appeared.
- No runtime exception appeared.

The isolated browser profile was deleted after verification.

## 5. Protected Baseline Provenance Table

| Protected file | Lines | Mission 020 SHA-256 | Mission 021 final SHA-256 | Result |
|---|---:|---|---|---|
| `components/CausalDataCloudCanvas.tsx` | 709 | `196FFD1820778ACD459A0F15215A8AF043EB2F56C06DF4EEC0A56B22703FDF06` | `196FFD1820778ACD459A0F15215A8AF043EB2F56C06DF4EEC0A56B22703FDF06` | unchanged |
| `components/scenes/Scene1.tsx` | 92 | `5F9FACED22B40C09ED7EA6C55B44841F178026BA365BA41CE3AD2F61E7E0A38A` | `5F9FACED22B40C09ED7EA6C55B44841F178026BA365BA41CE3AD2F61E7E0A38A` | unchanged |
| `components/scenes/Scene2.tsx` | 288 | `89137FE78328E7D4990099D97D0F50F011E51BA28312DC6E928A92CF7082BE61` | `89137FE78328E7D4990099D97D0F50F011E51BA28312DC6E928A92CF7082BE61` | unchanged |
| `components/scenes/Scene3.tsx` | 149 | `AF5A85EC921A52FB39DFD145E6E6135A7EC260C36A8F8CCD2334D1935DF0D6A1` | `AF5A85EC921A52FB39DFD145E6E6135A7EC260C36A8F8CCD2334D1935DF0D6A1` | unchanged; rollback state preserved |
| `store/useDataVaultStore.ts` | 15 | `8B6E1CB9E575CAB2D80913BB1229C32BD3F226DB7C91AE0F03BA15E623F70609` | `8B6E1CB9E575CAB2D80913BB1229C32BD3F226DB7C91AE0F03BA15E623F70609` | unchanged |
| `components/SceneController.tsx` | 123 | `78191B2AD733B575DBACB57EDC624DE0E76035E4A6D1F3D3E2FED8BB3B09C4A5` | `78191B2AD733B575DBACB57EDC624DE0E76035E4A6D1F3D3E2FED8BB3B09C4A5` | unchanged |

No Scene, SceneController, canvas, store, public asset, or accepted architecture drift occurred during Mission 021.

## 6. Deliverable Provenance Table

| Mission 021 deliverable | Lines | SHA-256 | Classification |
|---|---:|---|---|
| `HANDOFF_021_FINAL_PRODUCTION_LAUNCH.md` | `371` | `BDBDCA160E46AF64D14CA2C16B096AE2D8873D8132B61E6BCC20E0D82611EC83` | Mission 021 post-release handoff; normalized self-hash |

Self-hash method: UTF-8 SHA-256 is calculated after replacing the 64-character value in the table above with 64 ASCII zeroes. This normalization avoids the impossible recursive requirement for a file to contain its own changing physical hash. The final physical-file SHA-256 is measured after the final write and reported in the Mission 021 completion response.

No other Mission 021 project deliverable was created. The release commit is the sole Git-history deliverable.

## 7. Repository State & Worktree Status

Final release identity:

```text
Branch: main
Local HEAD: 9e16ba0439e625fd1f7ecc21894c64e14d08035d
Local origin/main: 9e16ba0439e625fd1f7ecc21894c64e14d08035d
Live origin/main: 9e16ba0439e625fd1f7ecc21894c64e14d08035d
Release commit subject: Mission 021: launch unified CONEXUS cinematic and ledger website
```

Immediately after commit and push, the tracked worktree and index were clean. After release verification, this handoff is the sole expected local-only untracked project file. It is intentionally not included in a second commit because Mission 021 authorized exactly one production commit and prohibited amendment.

`HANDOFF_001_VISUAL_POLISH_AND_DEPLOY.md` remains byte-identical to committed blob `7d754eaa0c2994daf3539fbf796bf57aaca32d4f` and is not part of the release delta.

## 8. Disclosed Limitations & Technical Debt

- Recharts `2.15.4` emits its known maintenance/deprecation notice; migration to Recharts 3 remains intentionally deferred.
- Three previously reported high-severity npm audit findings remain intentionally unremediated. No `npm audit fix` was run.
- Derek Angell's physical-phone review of the actual production Scene 3 follows deployment. No Scene 3 mobile redesign occurred during Mission 021.
- The deployment-specific Vercel URL is protected by Vercel SSO. Public production verification succeeded through the Vercel production alias and attached custom domain.
- Chrome reported a non-blocking missing `/favicon.ico` request, unused preload warnings for route-specific CSS/font resources, and a Three.js `THREE.Clock` deprecation warning. None produced a Next overlay, hydration failure, duplicate-key warning, runtime exception, failed route, or inactive Scene 3 animation.
- The separate `conexus-echoform-demo` Vercel project also reacts to repository pushes and failed for this SHA. It is not the Mission 021 production target. The target `conexus-website` project completed successfully.

## 9. Next-Session Startup Context

The next session must read exactly these files first:

1. `HANDOFF_021_FINAL_PRODUCTION_LAUNCH.md`
2. `HANDOFF_020_ARCHITECTURE_MERGE.md`
3. `package.json`

The next action is Derek Angell's physical-phone review of the actual production Scene 3. Any resulting mobile refinement is a separate, surgical follow-up mission.

## 10. Encountered Gotchas & Triage

1. **Pre-existing Handoff 001 deletion:** The worktree initially showed tracked deletion of `HANDOFF_001_VISUAL_POLISH_AND_DEPLOY.md`. Git history contained no accepted deletion provenance. It was restored byte-for-byte from `HEAD` and verified by matching blob identity before staging.
2. **Repository dev server:** A repository-owned `next dev` parent and Next server child were running. Their executable and command paths were verified, then only those two processes were stopped before the production build.
3. **Shell integration status:** The terminal wrapper occasionally reported closure/integration anomalies after commands had printed explicit exit codes. Typecheck and build each printed exit code 0 and were not rerun, honoring the single-test rule.
4. **Slow Git status/diff operations:** Several large read-only Git inspections exceeded the wrapper's foreground window and continued to log files. Their completed output was inspected without creating project artifacts.
5. **Historical whitespace:** `git diff --cached --check` reported trailing whitespace inside prior handoff documents. Those accepted historical records were preserved unchanged rather than rewritten during release.
6. **Initial push credential hang:** The first `git push origin main` blocked in `git-credential-manager get` and did not update the remote. Only that verified blocked process tree was terminated. The push then used the already-authenticated `CONEXUS-dev` GitHub CLI credential helper as a command-local override; no credential configuration or remote URL was changed.
7. **Vercel CLI unavailable:** The globally installed Vercel CLI is incomplete (`tr46/lib/mappingTable.json` missing). It was neither repaired nor used. Deployment observation used the established GitHub/Vercel integration and GitHub deployment APIs.
8. **Two Vercel projects react to pushes:** `conexus-echoform-demo` failed, while the intended `conexus-website` project succeeded. Verification was scoped to `Vercel – conexus-website` and `Production – conexus-website`.
9. **Unicode environment-name matching:** One PowerShell polling expression failed to match Vercel's en dash in the environment/context name. The deployment was re-queried by unambiguous target project URL and deployment ID; no deployment action was repeated.
10. **Protected deployment URL:** The deployment-specific URL redirects to Vercel SSO. Exact SHA/status evidence came from GitHub/Vercel deployment records, while public route and browser verification used the production alias and custom domain.
11. **Animation probe:** Initial root screenshots were identical because the protected causal particle field belongs to Scene 3. Chrome was navigated to Scene 3 through the real scene control; two later frames differed and confirmed active animation.
12. **Browser cleanup:** Chrome used an isolated temporary profile outside the repository. Only that browser process tree was stopped, and the profile was deleted after verification.

## Final Release Statement

Derek Angell approved production launch of the accepted Mission 020 unified website. Mission 020's final Scene 3 rollback state is preserved at canonical SHA-256 `AF5A85EC921A52FB39DFD145E6E6135A7EC260C36A8F8CCD2334D1935DF0D6A1`. Typecheck and production build passed. Commit `9e16ba0439e625fd1f7ecc21894c64e14d08035d` was pushed to `main`, deployed successfully by the established Vercel integration, and verified at both `https://conexus-website.vercel.app` and `https://www.conexusglobalarts.media`.

The unified production contract is live: `/` is cinematic, `/ledger` is the incumbent ledger, both bridge controls work, `/refinery` redirects to `/ledger#refinery`, and `/scene3-hybrid` remains unavailable. Derek Angell's physical-phone production review remains the next step.

## Side Mission Amendment — Scene 3 Mobile Horizontal Control Rail

**Completed:** 2026-08-24  
**Source commit:** `bbb66bb478f9b5c240c4763f2f61210e213eb3a9` (`Keep Scene 3 controls horizontal on mobile`)  
**GitHub deployment:** `6072528701` (`Production – conexus-website`)  
**Deployment URL:** `https://conexus-website-kww5i52ho-dangell-5898s-projects.vercel.app`

Derek Angell's physical-phone review identified that the four Scene 3 arm controls stacked vertically on narrow viewports. The cause was the responsive `grid-cols-1 md:grid-cols-4` selector rail in `components/scenes/Scene3.tsx`. The side mission replaced it with a persistent four-column grid, retained the existing bottom anchoring, and added compact mobile spacing plus `min-w-0` so all four controls remain horizontal without changing the desktop presentation or causal particle canvas.

Validation and release evidence:

- `npm run typecheck` passed before release.
- `npm run build` passed; compilation, lint/type validation, page-data collection, and generation of all 33 static pages completed successfully.
- `git diff --check` passed before commit.
- Local `HEAD` and `origin/main` matched source commit `bbb66bb478f9b5c240c4763f2f61210e213eb3a9` after push.
- The intended `Vercel – conexus-website` status completed successfully for the exact source SHA.
- `https://conexus-website.vercel.app` and `https://www.conexusglobalarts.media` both returned HTTP 200 and served client bundles containing the new persistent `grid-cols-4` layout while no longer containing the former `grid-cols-1 md:grid-cols-4` layout.
- The unrelated `conexus-echoform-demo` deployment failed again and remains outside the Mission 021 production target.

This amendment closes the physical-phone Scene 3 layout follow-up recorded in Sections 8 and 9. The production arm controls are now always positioned as a horizontal row at the bottom of Scene 3 rather than becoming a vertical mobile stack.