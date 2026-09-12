# HANDOFF 028C — PRIMARY CAUSAL STUDY INTERACTION LANGUAGE CLARITY

Date: 2026-09-12
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`

## 1. Scope Completed

Mission 028C made one visitor-facing language correction in the cinematic Primary Causal Study scene.

- Created: `HANDOFF_028C_PRIMARY_CAUSAL_STUDY_INTERACTION_LANGUAGE_CLARITY.md`
- Modified: `components/scenes/Scene3.tsx`
- Old source text: `Hover an arm to isolate its runs — sound on`
- New source text: `Tap / Hover a condition to isolate its runs — sound on`
- Old rendered text: `HOVER AN ARM TO ISOLATE ITS RUNS — SOUND ON`
- New rendered text: `TAP / HOVER A CONDITION TO ISOLATE ITS RUNS — SOUND ON`
- No other application source changed.

The rendered casing remains supplied by the existing `uppercase` class. No experiment implementation, data, visualization, statistical claim, styling, navigation, sound system, scene behavior, accessibility behavior, or internal identifier changed.

## 2. Architecture Decisions & Citations

The instruction is in `components/scenes/Scene3.tsx:109-111`; the text itself is on line 110. Public-facing `condition` replaces research-facing `arm` because the scene already introduces the groups as “Four controlled conditions” at `components/scenes/Scene3.tsx:103-105`. This makes the instruction consistent with established visitor vocabulary. `Tap / Hover` communicates both touch and pointer intent.

Internal terminology intentionally remains unchanged. `components/scenes/Scene3.tsx:15-20` defines `ARMS`; lines 73-76 consume `setActiveArm`, `resetActiveArm`, and `activeArm`; lines 114-136 map callback variable `arm` into the existing controls. Those names are implementation contracts rather than visitor copy.

The protected store contract at `store/useDataVaultStore.ts:3-14` defines `ArmIdentifier`, `activeArm`, `setActiveArm`, and `resetActiveArm`. The requested correction requires no domain-model refactor, so that file remains byte-for-byte unchanged.

## 3. Implementation & Integration Details

The implementation is a one-line JSX text-node replacement inside the existing paragraph. The paragraph element, class list, placement, CSS uppercase transformation, spacing, and responsive behavior are unchanged.

The following surrounding behavior and structure remain intact:

- four-condition `ARMS` data and four-column card structure;
- `onMouseEnter`, `onMouseLeave`, `onFocus`, and `onBlur` handlers;
- `activeArm`, `setActiveArm`, and `resetActiveArm` store connection;
- `CausalDataCloudCanvas` connection and rendering;
- button semantics and ARIA labels;
- condition labels, means, sigma values, sample sizes, notes, and verdict;
- `ScrollTelemetry`, scene height, sticky positioning, canvas layering, layout classes, animation, and navigation integration;
- sound behavior.

The preserved statistical means are CONTROL `0.2466`, NEUTRAL `0.2219`, TOKEN-ONLY `0.2258`, and CONEXUS `0.2929`.

## 4. Verbatim Verification Evidence

### Repository identity, branch, and baseline

```text
git -C "C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0" fetch origin main
From https://github.com/CONEXUS-dev/conexus-website
 * branch            main       -> FETCH_HEAD
FETCH_EXIT=0

git rev-parse --show-toplevel
C:/Users/Derek Angell/Desktop/CONEXUS Website Integration Workspace/CONEXUS Website 2.0

git branch --show-current
main

git rev-parse HEAD
ee5aa54cf5ed1201cd26ffedf02c87e7c5db9d4f

git rev-parse origin/main
ee5aa54cf5ed1201cd26ffedf02c87e7c5db9d4f

EXPECTED_028B_BASELINE=ee5aa54cf5ed1201cd26ffedf02c87e7c5db9d4f
STATUS_COUNT=0
STAGED_COUNT=0
PRE_EDIT_BASELINE=PASS
```

### Exact source diff and content assertions

```diff
diff --git a/components/scenes/Scene3.tsx b/components/scenes/Scene3.tsx
index e54bbce..65476f3 100644
--- a/components/scenes/Scene3.tsx
+++ b/components/scenes/Scene3.tsx
@@ -107,7 +107,7 @@ export default function Scene3() {
           <div className="mt-auto pb-8 md:pb-14">
             <p className="font-mono text-[0.7rem] tracking-[0.25em] text-white/60 uppercase mb-4">
-              Hover an arm to isolate its runs — sound on
+              Tap / Hover a condition to isolate its runs — sound on
             </p>
```

```text
git diff --numstat -- components/scenes/Scene3.tsx
1       1       components/scenes/Scene3.tsx

NEW_TEXT_COUNT=1
OLD_TEXT_COUNT=0
SUBSTANTIVE_DIFF_LINES=2
PRE_TEST_SOURCE_SCOPE=PASS

Select-String components/scenes/Scene3.tsx "Tap / Hover a condition to isolate its runs — sound on"
components/scenes/Scene3.tsx:110:Tap / Hover a condition to isolate its runs — sound on
```

### Typecheck, production build, and static generation

```text
CLEAN_NEXT_REMOVED=True

npm run typecheck
> conexus-2@2.0.0 typecheck
> tsc --noEmit
TYPECHECK_EXIT=0

npm run build
> conexus-2@2.0.0 build
> next build
▲ Next.js 15.5.23
Creating an optimized production build ...
read ECONNRESET
Retrying 1/3...
✓ Compiled successfully in 51s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (34/34)
✓ Collecting build traces
✓ Finalizing page optimization
BUILD_EXIT=0

git diff --check
DIFF_CHECK_EXIT=0
BOUNDED_RELEASE_VERIFICATION=PASS
```

The transient `ECONNRESET` was handled by Next.js's built-in retry during the single build invocation. The same invocation completed successfully; no second test cycle was run.

### Protected files, source scope, staging, publication, and final state

```text
HANDOFF_028B_AUTHORITATIVE_LOCAL_TO_GITHUB_WEBSITE_REPLACEMENT_AND_PRODUCTION_RELEASE.md|lines=398|sha256=7fbceb8b3f8763b8a248fa2dfd8076cb8ce6e1cda7bb0809ef2089e54a033ea3
store/useDataVaultStore.ts|lines=15|sha256=8b6e1cb9e575cab2d80913bb1229c32bd3f226db7c91ae0f03ba15e623f70609
components/CausalDataCloudCanvas.tsx|lines=709|sha256=196ffd1820778acd459a0f15215a8af043eb2f56c06df4eec0a56b22703fdf06
components/SceneController.tsx|lines=149|sha256=2fcefe4932107131aeec8b58ac202b4977c30a831a9290459876369370797d29
package.json|lines=33|sha256=4b1790ab4743b29994724f85a0022cc5aa9293b20b586bfcdd6f5db313f37cf9
package-lock.json|lines=2848|sha256=584e9f5aaf4ecd6a69874abed1175580db446ae228c1b977dc843635705f80a1

git diff --name-status
M       components/scenes/Scene3.tsx

git diff --cached --name-status
[no output before handoff staging]

REPOSITORY_NEXT_RUNTIME_COUNT=0
```

The final staged-file list, commit identifiers, push output, local/remote equality, deployment status, and final clean status are necessarily established after this same-commit handoff is finalized. Embedding the final commit SHA or post-push results into a file contained by that commit would mutate the commit and invalidate the embedded identifiers. They are verified after finalization and reported in the Mission 028C completion response.

## 5. Protected Baseline Provenance Table

| Protected file | Lines | SHA-256 | Result |
|---|---:|---|---|
| `HANDOFF_028B_AUTHORITATIVE_LOCAL_TO_GITHUB_WEBSITE_REPLACEMENT_AND_PRODUCTION_RELEASE.md` | 398 | `7fbceb8b3f8763b8a248fa2dfd8076cb8ce6e1cda7bb0809ef2089e54a033ea3` | Unchanged startup baseline |
| `store/useDataVaultStore.ts` | 15 | `8b6e1cb9e575cab2d80913bb1229c32bd3f226db7c91ae0f03ba15e623f70609` | Unchanged |
| `components/CausalDataCloudCanvas.tsx` | 709 | `196ffd1820778acd459a0f15215a8af043eb2f56c06df4eec0a56b22703fdf06` | Unchanged |
| `components/SceneController.tsx` | 149 | `2fcefe4932107131aeec8b58ac202b4977c30a831a9290459876369370797d29` | Unchanged |
| `package.json` | 33 | `4b1790ab4743b29994724f85a0022cc5aa9293b20b586bfcdd6f5db313f37cf9` | Unchanged |
| `package-lock.json` | 2,848 | `584e9f5aaf4ecd6a69874abed1175580db446ae228c1b977dc843635705f80a1` | Unchanged |

## 6. Deliverable Provenance Table

| Deliverable | Pre-edit | Post-edit/final |
|---|---|---|
| `components/scenes/Scene3.tsx` line count | 149 | 149 |
| `components/scenes/Scene3.tsx` SHA-256 | `bf4eb4dda7e639acd17d0cf33281b43a9b282d103da2d7be5337576e8cea444b` | `99e137b1d8a93c5e850b40a55fd3581492cec4899003aefbf36ee240e4e209c9` |
| Mission 028C handoff | Did not exist | `HANDOFF_028C_PRIMARY_CAUSAL_STUDY_INTERACTION_LANGUAGE_CLARITY.md`; final line count recorded after finalization |
| Mission 028C commit | N/A | Created after handoff finalization; reported externally to avoid self-reference |
| Mission 028C tree | N/A | Recorded after commit; reported externally to avoid self-reference |
| Mission 028C parent | `ee5aa54cf5ed1201cd26ffedf02c87e7c5db9d4f` | Verified after commit |

The handoff is intentionally not self-hashed. Embedding its own hash would invalidate that hash.

## 7. Repository State & Worktree Status

Pre-commit verified state:

- Branch: `main`
- Approved local baseline: `ee5aa54cf5ed1201cd26ffedf02c87e7c5db9d4f`
- Approved `origin/main`: `ee5aa54cf5ed1201cd26ffedf02c87e7c5db9d4f`
- Sole application-source modification: `components/scenes/Scene3.tsx`
- Staged index before handoff finalization: empty
- Repository-owned Next runtimes: 0
- Temporary probe/launcher artifacts: none created

The required final state—final branch/HEAD, final `origin/main`, tree equality, empty `git status --short`, empty staged index, zero runtime, and no temporary artifacts—is checked after commit, push, and deployment observation and reported in the completion response.

## 8. Disclosed Limitations & Technical Debt

- No physical touch device or browser automation was used. The source inspection verified native `<button>` controls and their existing focus handlers; browser/device-specific touch semantics were not independently exercised.
- The single production build encountered one transient `ECONNRESET`; Next.js retried internally and the same build invocation passed compilation and 34/34 static generation.
- Commit, push, deployment, and final-equality evidence cannot truthfully be embedded in the same file contained by the commit before those events occur. Those facts are verified after this handoff is finalized and reported externally.
- No technical debt was introduced, and existing dependency state was not changed.

## 9. Next-Session Startup Context

Read exactly these three files in the next session:

1. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_028C_PRIMARY_CAUSAL_STUDY_INTERACTION_LANGUAGE_CLARITY.md`

2. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_028B_AUTHORITATIVE_LOCAL_TO_GITHUB_WEBSITE_REPLACEMENT_AND_PRODUCTION_RELEASE.md`

3. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\sections\Cyndicate.tsx`

This preserves Mission 029 as the next substantive website mission. Mission 028C did not begin Mission 029 or modify substantive Cyndicate content.

## 10. Encountered Gotchas & Triage

- The repository root, branch, local HEAD, and fetched `origin/main` exactly matched the approved Mission 028B baseline before editing.
- The source literal uses sentence casing, while the visitor sees uppercase because the unchanged paragraph class includes `uppercase`.
- The active instruction was found at `components/scenes/Scene3.tsx:110`. The old literal also exists in tracked reference document `Jem's Scene 3 Files 1 - 3.md`; that is not active application source and remained untouched.
- The shell integration sometimes reported terminal closure/completion-observation warnings after commands had emitted their explicit successful terminal markers. Verification relies on the captured explicit exits and complete outputs.
- Next.js handled one transient network reset through its built-in retry and completed the sole build invocation successfully.
- `Vercel – conexus-website` is the canonical website deployment authority. The separately attached `conexus-echoform-demo` project is not Mission 028C deployment authority and was not modified or repaired.
- No scratch script, probe file, runtime log, PID, browser profile, or screenshot was created.