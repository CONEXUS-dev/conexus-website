# HANDOFF 028B — AUTHORITATIVE LOCAL-TO-GITHUB WEBSITE REPLACEMENT AND PRODUCTION RELEASE

Date: 2026-09-11 / 2026-09-12 UTC
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`

## 1. Scope Completed

Mission 028B established the approved local CONEXUS Website 2.0 worktree as the canonical website source and published it to GitHub `CONEXUS-dev/conexus-website` on `main`.

- Confirmed the exact repository root, branch, local baseline, remote identity, and expected Mission 024 remote baseline.
- Preserved the old GitHub `main` at `archive/pre-028b-authoritative-replacement-20260911-2141` before changing `main`.
- Verified the canonical local source with TypeScript, a clean production build, 34/34 generated static pages, patch-integrity checks, local production routes, redirects, and both PDF routes.
- Staged the complete intentional worktree with `git add -A`.
- Created canonical release commit `a4ac00191cf9699fd124330fe167595d0f74c507` with subject `Release: establish current professional website as canonical`.
- Pushed the release normally as a fast-forward from Mission 024; no force or force-with-lease was used.
- Verified release commit and tree equality between local HEAD and `origin/main` before this handoff was authored.
- The `Vercel – conexus-website` production deployment completed successfully for the release SHA.
- The repository homepage `https://conexus-website.vercel.app/` returned HTTP 200.
- A separate Vercel integration named `conexus-echoform-demo` failed for the same SHA; this did not invalidate the successful `conexus-website` deployment and is disclosed in Sections 8 and 10.

The canonical release changed 41 paths relative to Mission 024: 13 added, 28 modified, and 0 deleted. It recorded 2,309 insertions and 826 deletions. No release-blocking source correction was required, so no application source or configuration file was changed specifically for Mission 028B.

New content consisted of five accepted Mission 025–028 handoffs, two intentional PDF assets, and six new homepage section components. Existing modified content comprised the accepted Mission 025–028 application transition. No remote-tracked path was intentionally absent from the local candidate, so the release contained no deletions.

This file is the one required Mission 028B handoff. It is committed after the canonical release in a documentation-only completion commit so that the handoff can truthfully record the already-created release commit and tree. No existing handoff was changed.

## 2. Architecture Decisions & Citations

The local worktree was authoritative because Missions 025 through 028 were intentionally developed and accepted locally while GitHub remained at Mission 024. `HANDOFF_028_ECHOAGENT_TRUST_INTELLIGENCE_INTEGRATION.md:20-24` and `:205-215` explicitly preserved that local worktree as authority and prohibited replacing it with GitHub HEAD.

The previous remote baseline was:

- Commit: `f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b`
- Tree: `df1a5d8e369e2e6d69c65e3dec2fdf6a4ec736d5`
- Subject: `Mission 024: invert company and cinematic routing`

The rollback strategy was to push that exact commit to a dedicated remote archive branch before changing `main`. The verified reference is:

`archive/pre-028b-authoritative-replacement-20260911-2141` → `f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b`

The whole-tree strategy was `git add -A` from the repository root. This preserved Git’s own representation of additions, modifications, renames, and deletions instead of reconstructing the approved site against GitHub one file at a time.

The release was a normal fast-forward because local HEAD and `origin/main` both began at the same Mission 024 commit. The release parent is the captured old remote SHA. Force-with-lease was not needed and no force command was run.

The canonical release tree was `4cc97405f7525bea340fcff6ad2ebaf6fb46e3ed`. Immediately after the release push:

- local release commit = `origin/main` = `a4ac00191cf9699fd124330fe167595d0f74c507`
- local release tree = `origin/main^{tree}` = `4cc97405f7525bea340fcff6ad2ebaf6fb46e3ed`
- `git diff --name-status HEAD origin/main` returned no output.

No release-blocking code correction was made; therefore there are no correction citations. The accepted source itself remained the release candidate. Relevant current references include `app/(ledger)/page.tsx:1-33` for homepage composition, `sections/Echoagent.tsx:268-275` for the ECHOagent deck, `sections/Cyndicate.tsx:42-49` for the Cyndicate deck, and `app/(ledger)/ledger/page.tsx:1-5` for `/ledger` redirect behavior.

The initial full staged whitespace check reported trailing whitespace only in five newly tracked historical Markdown handoffs. The user approved a narrow verification waiver and required those files to remain byte-for-byte unchanged. The exact allowlist was:

1. `HANDOFF_025_PROFESSIONAL_HOMEPAGE_REPOSITIONING_AND_THEMATIC_DEEP_LINK_INTEGRATION.md` lines 3–4
2. `HANDOFF_026_FOUR_ARM_HOMEPAGE_PLAIN_ENGLISH_CLARITY_PASS.md` line 3
3. `HANDOFF_027_EVIDENCE_PAGE_PLAIN_ENGLISH_CLARITY_AND_DUPLICATE_VISUAL_REMOVAL.md` line 3
4. `HANDOFF_028A_PUBLISH_ECHOAGENT_AND_CYNDICATE_PDF_DECKS.md` line 3
5. `HANDOFF_028_ECHOAGENT_TRUST_INTELLIGENCE_INTEGRATION.md` line 3

No other path was excluded. The replacement check returned exit 0, proving no source, config, route, component, asset-reference, package file, or non-allowlisted staged document had a whitespace error.

## 3. Implementation & Integration Details

The completed flow was:

`local authority → bounded inventory → clean verification → recovery branch → whole-tree staging → exact waiver check → canonical release commit → normal remote push → tree equality → deployment observation → documentation-only completion record`

Pre-release inventory identified 28 tracked modifications, no tracked deletions, and 13 intentional additions. The intentional additions were five mission handoffs, two PDF assets, and these sections: `Builds.tsx`, `Cyndicate.tsx`, `Echoagent.tsx`, `Partnerships.tsx`, `RefinerBridge.tsx`, and `Technology.tsx`.

Generated/local-only material remained excluded through `.gitignore` and an explicit staged-index audit: `.next/`, `node_modules/`, `next-env.d.ts`, and `tsconfig.tsbuildinfo`. No `.env`, runtime log, PID, browser profile, verification screenshot, scratch script, or probe was committed.

The two canonical PDFs were retained without modification and are correctly connected:

- ECHOagent section → `/materials/ECHOagent_Trust_Intelligence.pdf`
- Cyndicate section → `/materials/CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf`

The exact archive branch is `archive/pre-028b-authoritative-replacement-20260911-2141`. It was created before staging was committed and verified against the captured Mission 024 SHA before `main` changed.

The release commit was pushed using:

`git push origin a4ac00191cf9699fd124330fe167595d0f74c507:refs/heads/main`

Git reported `f2f66bf..a4ac001` and exit 0. No fallback push was required.

This handoff is intentionally the sole content of a following documentation-only commit. Embedding the documentation commit’s own SHA or tree inside this file would be self-referential and would change that SHA/tree; consequently the handoff records the canonical release SHA/tree and the final post-documentation equality is verified externally after the documentation commit is pushed.

## 4. Verbatim Verification Evidence

Repository identity and pre-release provenance:

```text
git rev-parse --show-toplevel
C:/Users/Derek Angell/Desktop/CONEXUS Website Integration Workspace/CONEXUS Website 2.0

git branch --show-current
main

git rev-parse HEAD
f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b

git rev-parse HEAD^{tree}
df1a5d8e369e2e6d69c65e3dec2fdf6a4ec736d5

git remote get-url origin
https://github.com/CONEXUS-dev/conexus-website

git fetch origin --prune
FETCH_EXIT=0

git rev-parse origin/main
f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b

git rev-parse origin/main^{tree}
df1a5d8e369e2e6d69c65e3dec2fdf6a4ec736d5

git log -1 --format=%s origin/main
Mission 024: invert company and cinematic routing

STAGED_COUNT=0
```

Recovery branch creation and verification:

```text
git push origin f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b:refs/heads/archive/pre-028b-authoritative-replacement-20260911-2141
To https://github.com/CONEXUS-dev/conexus-website
 * [new branch]      f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b -> archive/pre-028b-authoritative-replacement-20260911-2141

git ls-remote --heads origin refs/heads/archive/pre-028b-authoritative-replacement-20260911-2141
f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b refs/heads/archive/pre-028b-authoritative-replacement-20260911-2141
ARCHIVE_VERIFICATION=PASS
```

TypeScript and clean production build:

```text
CLEAN_NEXT_REMOVED=True

npm run typecheck
> conexus-2@2.0.0 typecheck
> tsc --noEmit
TYPECHECK_EXIT=0

npm run build
> conexus-2@2.0.0 build
> next build
✓ Compiled successfully in 14.5s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (34/34)
✓ Collecting build traces
✓ Finalizing page optimization
BUILD_EXIT=0

git diff --check
DIFF_CHECK_EXIT=0
```

The environment command wrapper reported terminal closure after printing the explicit zero exits. The project processes completed and emitted the complete successful build report above.

Local production route and cleanup evidence:

```text
> next start -p 3028
✓ Ready in 634ms
HOMEPAGE_HTTP=200
CINEMATIC_HTTP=200
EVIDENCE_HTTP=200
ECHOAGENT_PDF_HTTP=200
CYNDICATE_PDF_HTTP=200

HTTP/1.1 307 Temporary Redirect
location: /
ROUTE_VERIFICATION=PASS

PORT_3028_LISTENERS_AFTER_CLEANUP=0
TEMP_RUNTIME_LOGS_REMAIN=0
```

Whole-tree staging evidence:

```text
git add -A
git diff --cached --name-status
STAGED_TOTAL=41
ADDED=13
MODIFIED=28
DELETED=0
FORBIDDEN_STAGED_COUNT=0

git diff --cached --stat
41 files changed, 2309 insertions(+), 826 deletions(-)
```

Initial full check and approved waiver evidence:

```text
git diff --cached --check
HANDOFF_025_PROFESSIONAL_HOMEPAGE_REPOSITIONING_AND_THEMATIC_DEEP_LINK_INTEGRATION.md:3: trailing whitespace.
HANDOFF_025_PROFESSIONAL_HOMEPAGE_REPOSITIONING_AND_THEMATIC_DEEP_LINK_INTEGRATION.md:4: trailing whitespace.
HANDOFF_026_FOUR_ARM_HOMEPAGE_PLAIN_ENGLISH_CLARITY_PASS.md:3: trailing whitespace.
HANDOFF_027_EVIDENCE_PAGE_PLAIN_ENGLISH_CLARITY_AND_DUPLICATE_VISUAL_REMOVAL.md:3: trailing whitespace.
HANDOFF_028A_PUBLISH_ECHOAGENT_AND_CYNDICATE_PDF_DECKS.md:3: trailing whitespace.
HANDOFF_028_ECHOAGENT_TRUST_INTELLIGENCE_INTEGRATION.md:3: trailing whitespace.
```

The exact approved replacement command was:

```powershell
git diff --cached --check -- . `
  ':(exclude)HANDOFF_025_PROFESSIONAL_HOMEPAGE_REPOSITIONING_AND_THEMATIC_DEEP_LINK_INTEGRATION.md' `
  ':(exclude)HANDOFF_026_FOUR_ARM_HOMEPAGE_PLAIN_ENGLISH_CLARITY_PASS.md' `
  ':(exclude)HANDOFF_027_EVIDENCE_PAGE_PLAIN_ENGLISH_CLARITY_AND_DUPLICATE_VISUAL_REMOVAL.md' `
  ':(exclude)HANDOFF_028A_PUBLISH_ECHOAGENT_AND_CYNDICATE_PDF_DECKS.md' `
  ':(exclude)HANDOFF_028_ECHOAGENT_TRUST_INTELLIGENCE_INTEGRATION.md'
```

Result:

```text
EXACT_EXCLUSION_CHECK_EXIT=0
```

This check covered every staged path except the five exact approved Markdown handoffs. Their SHA-256 values before and after the waiver check were identical:

```text
HANDOFF_025...md  571be59653c1d4a935d7b104d021587e0c15bfe0d675a7d3f9aafa4df91c97de
HANDOFF_026...md  7ee876888a0948b6a8d607d24cd54fc1d5016475d955d182eed1008b33618211
HANDOFF_027...md  149844a0c5108814f9822a209d5635afe50caf53790e2c299137c930fa34561b
HANDOFF_028A...md acdebf58550d8def42d57316df63e7acae7e58d30f793bea73c56cb8e7045b71
HANDOFF_028...md  5937a6b29ff201e509faacedd2dda2a985e9e059f45c7e1bc81584508258b386
```

Release commit and push:

```text
FINAL_STAGED_COUNTS=13/28/0
IMMEDIATE_PRECOMMIT_REMOTE_MAIN=f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b

git commit -m "Release: establish current professional website as canonical"
[main a4ac001] Release: establish current professional website as canonical
41 files changed, 2309 insertions(+), 826 deletions(-)

RELEASE_COMMIT=a4ac00191cf9699fd124330fe167595d0f74c507
RELEASE_TREE=4cc97405f7525bea340fcff6ad2ebaf6fb46e3ed
RELEASE_PARENT=f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b
POST_COMMIT_STAGED_COUNT=0

IMMEDIATE_PREPUSH_REMOTE_MAIN=f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b
git push origin a4ac00191cf9699fd124330fe167595d0f74c507:refs/heads/main
To https://github.com/CONEXUS-dev/conexus-website
   f2f66bf..a4ac001  a4ac00191cf9699fd124330fe167595d0f74c507 -> main
RELEASE_PUSH_EXIT=0
```

Post-release fetch and equality:

```text
git fetch origin main
HEAD=a4ac00191cf9699fd124330fe167595d0f74c507
HEAD_TREE=4cc97405f7525bea340fcff6ad2ebaf6fb46e3ed
ORIGIN_MAIN=a4ac00191cf9699fd124330fe167595d0f74c507
ORIGIN_TREE=4cc97405f7525bea340fcff6ad2ebaf6fb46e3ed

git diff --name-status HEAD origin/main
[no output]

ARCHIVE_REF=f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b refs/heads/archive/pre-028b-authoritative-replacement-20260911-2141
STATUS_SHORT=[empty]
STAGED_COUNT=0
PORT_3028_LISTENERS=0
REPOSITORY_NEXT_RUNTIMES=0
```

Deployment evidence:

```text
Vercel – conexus-website  success  Deployment has completed
Release SHA: a4ac00191cf9699fd124330fe167595d0f74c507
Deployment ID: 6404990031
Environment: Production – conexus-website
Production homepage: https://conexus-website.vercel.app/
HTTP/1.1 200 OK

Vercel – conexus-echoform-demo  failure  Deployment has failed
Release SHA: a4ac00191cf9699fd124330fe167595d0f74c507
Deployment ID: 6404982906
Environment: Production – conexus-echoform-demo
```

The successful `conexus-website` status is the website production deployment. The failed `conexus-echoform-demo` status belongs to a separate Vercel project attached to the same repository.

## 5. Protected Baseline Provenance Table

| Canonical file | Lines | SHA-256 |
|---|---:|---|
| `app/(ledger)/page.tsx` | 33 | `7ef8361b3ae4d29feee9c4f32750d5f0c0c6e1a5e5ecb4ca6ac1e836af022901` |
| `app/(ledger)/globals.css` | 58 | `4c767b31e0b073d4c8a8f4fa2772fd92db2a9f868a7a54c584124a1871295762` |
| `sections/Echoagent.tsx` | 279 | `43bdc742fdb0e2bec039938d45b97136a684829443e8df7fdef44fd7721f6540` |
| `sections/Cyndicate.tsx` | 52 | `f912841d9dcb4df5d02593e2e874d34c495dc84a4f9b34824e3bab902cdfb686` |
| `sections/Validation.tsx` | 70 | `b955f8703a5ceb33b8d6a40b1f04ef494217c5038d2c7a3e735ef965d59896e8` |
| `content/vault.ts` | 475 | `bd2bca94aaab984f22fe85195ade41c0c3f3d019565d24fbcbcd9d976d645ca9` |
| `app/(ledger)/evidence/page.tsx` | 575 | `a35b4e61f695e09e0a03eea7152d4c62b7f96a81c8ae741c7b70638964927eb6` |
| `app/(ledger)/evidence/layout.tsx` | 9 | `f322f6b90aa8d4451e7288de34f878a824359a225a47d82944beba47ccf39a0d` |
| `components/nav/GlobalNav.tsx` | 78 | `4ec76880fc3a22e01d2671fba6c569d726bd26f5adfefa38f54d295e9b1c7787` |
| `package.json` | 33 | `4b1790ab4743b29994724f85a0022cc5aa9293b20b586bfcdd6f5db313f37cf9` |
| `package-lock.json` | 2,848 | `584e9f5aaf4ecd6a69874abed1175580db446ae228c1b977dc843635705f80a1` |

| Canonical binary | Bytes | SHA-256 |
|---|---:|---|
| `public/materials/ECHOagent_Trust_Intelligence.pdf` | 5,199,543 | `621fe5d740a7f8221287639d01e52744143939ee1928d107c37cbf408f241c6a` |
| `public/materials/CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf` | 6,790,855 | `15774466d6922b3a4623f675faffeaf1d6725fd0fc7018dc0ec1a1a80a287127` |

## 6. Deliverable Provenance Table

| Deliverable | Provenance |
|---|---|
| Old remote commit | `f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b` |
| Old remote tree | `df1a5d8e369e2e6d69c65e3dec2fdf6a4ec736d5` |
| Recovery branch | `archive/pre-028b-authoritative-replacement-20260911-2141` |
| Recovery SHA | `f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b` |
| Canonical release commit | `a4ac00191cf9699fd124330fe167595d0f74c507` |
| Canonical release tree | `4cc97405f7525bea340fcff6ad2ebaf6fb46e3ed` |
| Canonical release parent | `f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b` |
| Release transition | 13 added, 28 modified, 0 deleted; 2,309 insertions, 826 deletions |
| Release-blocking source corrections | None |
| Handoff | `HANDOFF_028B_AUTHORITATIVE_LOCAL_TO_GITHUB_WEBSITE_REPLACEMENT_AND_PRODUCTION_RELEASE.md` |
| Handoff line count | 398 |
| Handoff SHA-256 | Intentionally omitted; embedding a self-hash would invalidate it |
| ECHOagent PDF | 5,199,543 bytes; `621fe5d740a7f8221287639d01e52744143939ee1928d107c37cbf408f241c6a` |
| Cyndicate PDF | 6,790,855 bytes; `15774466d6922b3a4623f675faffeaf1d6725fd0fc7018dc0ec1a1a80a287127` |
| GitHub `main` at canonical release verification | Commit `a4ac00191cf9699fd124330fe167595d0f74c507`; tree `4cc97405f7525bea340fcff6ad2ebaf6fb46e3ed` |

The documentation-only completion commit containing this handoff necessarily follows the canonical release. Its SHA/tree cannot be embedded in its own content without invalidating itself; final local/GitHub equality is checked after that commit is pushed.

## 7. Repository State & Worktree Status

At canonical release verification:

- Branch: `main`
- HEAD: `a4ac00191cf9699fd124330fe167595d0f74c507`
- HEAD tree: `4cc97405f7525bea340fcff6ad2ebaf6fb46e3ed`
- `origin/main`: `a4ac00191cf9699fd124330fe167595d0f74c507`
- `origin/main` tree: `4cc97405f7525bea340fcff6ad2ebaf6fb46e3ed`
- `git diff --name-status HEAD origin/main`: empty
- `git status --short`: empty
- staged-index count: 0
- repository-owned Next runtimes: 0
- port 3028 listeners: 0

Ignored local build/dependency state remains `.next/`, `node_modules/`, `next-env.d.ts`, and `tsconfig.tsbuildinfo`. These are expected local-only paths and were not published. No `.env`, log, PID, browser profile, verification screenshot, scratch file, or probe artifact entered the index.

After this handoff is committed, the final branch HEAD will be the documentation-only child of the canonical release. The required post-push check confirms that final local HEAD and tree equal final `origin/main`, the index is empty, and the only tree delta from the canonical release is this handoff.

GitHub `main` and the local canonical tree were identical after the release push. The same equality is required and checked again after publishing this handoff.

## 8. Disclosed Limitations & Technical Debt

The approved whitespace waiver applies only to the five historical handoff files enumerated in Section 2. They retain their original trailing spaces byte-for-byte. Every other staged file passed the exact-exclusion whitespace check.

The repository has two Vercel projects connected to the release SHA. `Vercel – conexus-website` completed successfully and is the website production deployment. The separate `Vercel – conexus-echoform-demo` deployment failed. No attempt was made to redesign or repair that separate deployment because this mission concerns the canonical website and forbids extending deployment infrastructure scope.

The production homepage returned HTTP 200. Inline PDF behavior can still vary by browser download/viewer policy, although both production-candidate PDF paths returned HTTP 200 locally and the binaries are present in the canonical Git tree.

Existing dependency technical debt was not changed. No package manifest changed, no dependency modernization occurred, and `npm audit fix` was not run.

No other release limitation was discovered. TypeScript, production build, static generation, required local routes, PDF routing, generated-artifact audit, GitHub tree publication, and the website deployment all passed.

## 9. Next-Session Startup Context

The next session must read exactly:

1. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_028B_AUTHORITATIVE_LOCAL_TO_GITHUB_WEBSITE_REPLACEMENT_AND_PRODUCTION_RELEASE.md`

2. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\sections\Cyndicate.tsx`

3. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf`

This prepares Mission 029: **CONEXUS CYNDICATE PROOF OF SWARM INTEGRATION**. Mission 028B performed no substantive Cyndicate rewrite. The canonical GitHub website and local tree should now be treated as the starting authority for Mission 029.

## 10. Encountered Gotchas & Triage

- The repository began with an intentionally dirty worktree containing accepted Missions 025–028. It was not reset, cleaned, stashed, or reconstructed from GitHub.
- The initial inventory found 28 tracked modifications, 13 intentional untracked additions, no tracked deletions, and four ignored generated/dependency paths.
- `git add -A` correctly captured the complete 41-path transition. No remote-only tracked path disappeared from the approved local tree.
- `.next/`, `node_modules/`, `next-env.d.ts`, and `tsconfig.tsbuildinfo` looked present locally but were correctly classified as ignored/generated and excluded from the index.
- The two untracked PDFs and six untracked section components looked like additions because they had never existed on Mission 024 `main`; source references and successful build/runtime checks proved they were required canonical website content.
- The full staged whitespace check initially stopped the release because five historical handoffs contained trailing whitespace. The user explicitly approved a narrow waiver, prohibited editing those files, and required an exact-file exclusion check. That replacement check exited 0 and excluded no other path.
- SHA-256 checks before and after the waiver confirmed all five allowlisted handoffs remained byte-for-byte unchanged.
- The command wrapper reported terminal closure after typecheck/build despite explicit project exits of 0. The complete Next output confirmed successful compilation and 34/34 static page generation.
- The production runtime was launched exactly once on port 3028. Required pages and PDFs returned 200, `/ledger` returned 307 with `location: /`, and cleanup left zero listeners and zero temporary runtime logs.
- The recovery branch push succeeded and resolved to the exact old `main`. It remained intact after publication.
- Local and remote history shared the same Mission 024 parent, so normal fast-forward push succeeded. Force-with-lease was not used.
- GitHub had no Actions workflow runs for the release. Vercel supplied commit deployment statuses instead.
- The `conexus-website` Vercel deployment succeeded. A second attached project, `conexus-echoform-demo`, failed independently and remains outside Mission 028B scope.
- The handoff is committed separately after the canonical release because a handoff cannot embed the SHA/tree of the commit that contains itself. Final equality is therefore verified after the documentation-only completion push rather than self-recorded as a circular hash.
- Mission 029 remained untouched.