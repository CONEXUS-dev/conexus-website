# HANDOFF 027 — Evidence Page Plain-English Clarity and Duplicate Visual Removal

Date: 2026-09-11  
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`

## 1. Scope Completed

Created exactly one documentation file: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_027_EVIDENCE_PAGE_PLAIN_ENGLISH_CLARITY_AND_DUPLICATE_VISUAL_REMOVAL.md`.

Modified exactly two Mission 027 application files under the final authorized scope:

- `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\app\(ledger)\evidence\page.tsx`
- `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\app\(ledger)\evidence\layout.tsx`

The evidence page now introduces the Four-Arm causal study in ordinary language before measurements, defines semantic distance before displaying the means, translates all three statistical cards, explains the broader research portfolio in concept-first order, and retains exact experimental and benchmark data. The route-level duplicate visual library was removed by deleting only its import and invocation from the evidence layout. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\components\EvidenceInfographics.tsx` remains intact and byte-identical.

The accepted local, uncommitted Mission 025 + Mission 026 worktree remained the authoritative baseline. It was not reset, cleaned, checked out, stashed, committed, pushed, pulled, or deployed. Deleting `.next` was an explicitly authorized removal of generated build output only.

## 2. Architecture Decisions & Citations

Mission 025 established Evidence in the approved homepage sequence and identified the Four-Arm evidence role (`C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_025_PROFESSIONAL_HOMEPAGE_REPOSITIONING_AND_THEMATIC_DEEP_LINK_INTEGRATION.md:19,25-27`). Mission 026 established the meaning-before-measurement communication model: question, 200-run result, significance, semantic-distance map analogy, conditions and means, then interpretations (`C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_026_FOUR_ARM_HOMEPAGE_PLAIN_ENGLISH_CLARITY_PASS.md:18-22,26-29`). Mission 027 applies that model locally to `/evidence` without changing the homepage source.

The final evidence route presents its unchanged hero at `app/(ledger)/evidence/page.tsx:120-142`; the plain-English question and answer at lines 151-154; the 200-run result at lines 155-160; controlled-comparison meaning at lines 161-166; and the semantic-distance map explanation at lines 167-175. The exact setup follows at lines 176-181, so all explanatory elements precede the first mean rendered from the condition grid at lines 184-205.

The statistical cards make ordinary-language meaning primary while retaining notation at `app/(ledger)/evidence/page.tsx:207-244`. The original clickable Four-Arm image pair remains with the primary study at lines 246-294. No duplicate visual library exists after the technical record or closing CTA.

The duplicate was not authored in the 575-line page. It was appended by `app/(ledger)/evidence/layout.tsx`, which imported and rendered `EvidenceInfographics` after `{children}`. Final `app/(ledger)/evidence/layout.tsx:1-9` retains the route wrapper and children exactly while removing only that import and invocation. The shared component itself was deliberately preserved.

## 3. Implementation & Integration Details

The final evidence-page narrative order is: unchanged hero; what CONEXUS tested; what happened across 200 runs; why the controls matter; semantic-distance explanation; exact setup and four means; plain-English statistical interpretations; original visual pair; concise findings recap; Forgetting Engine concept and six-domain benchmark portfolio; complexity-inversion phenomenon and name; exploratory astronomy; technical records; unchanged closing CTA; end.

Four-Arm values remain Control `0.2466`, Neutral `0.2219`, Token-only `0.2258`, and CONEXUS `0.2929`, with 200 total independent runs and 50 runs per condition. The statistical translations are: `d = 3.7824` means very large Neutral-to-CONEXUS separation in the tested configuration; Welch p-value `2.97e-32` means the comparison showed extremely strong statistical evidence; and `p = 0.3612` means token-only prompting did not reproduce the CONEXUS effect (`app/(ledger)/evidence/page.tsx:207-244`).

`What the study found` is a concise memory-oriented recap at `app/(ledger)/evidence/page.tsx:298-328`, not a repetition of the full setup. The Forgetting Engine is defined before its benchmark grid at lines 330-359; all six benchmark cards retain their distinct objectives, trial counts, and reported measurements at lines 361-383. Complexity inversion begins with the harder-problem phenomenon before naming it at lines 387-407 and retains positive research scope at lines 410-430.

The astronomy section explains strategic retention, exploratory status, and follow-up purpose at `app/(ledger)/evidence/page.tsx:436-485`, retaining `KOI-0002 candidate A`, `KOI-0009 candidate`, and `KOI-0002 candidate B`. The four technical-record destinations remain at lines 488-552. The closing `Evidence stays connected to the experiment.` CTA remains unchanged at lines 554-571.

The final clean runtime rendered exactly one `cracking-ai-creativity-code.webp` and one `search-regime-modulation.webp`. It rendered zero `VISUAL EVIDENCE LIBRARY` and zero `The mechanism, shown clearly.` occurrences. The duplicate shared component remains available in the repository but is no longer appended by the `/evidence` layout.

## 4. Verbatim Verification Evidence

Preflight verified `app/(ledger)/evidence/page.tsx` at 539 lines and SHA-256 `93078406d21d1a32bfd89523b110c3725455534eebc0add5125c68946595bc68`; `sections/Validation.tsx` at 70 lines and `b955f8703a5ceb33b8d6a40b1f04ef494217c5038d2c7a3e735ef965d59896e8`; and `content/vault.ts` at 475 lines and `bd2bca94aaab984f22fe85195ade41c0c3f3d019565d24fbcbcd9d976d645ca9`.

The required project checks were:

```text
npm run typecheck
TYPECHECK_EXIT=0

Remove-Item -LiteralPath ".next" -Recurse -Force
NEXT_REMOVED=True

npm run build
BUILD_EXIT=0
✓ Compiled successfully in 14.1s
✓ Generating static pages (34/34)
NEXT_TIMESTAMP=2026-09-11T20:26:36.5844869-04:00

git diff --check
DIFF_CHECK_EXIT=0
```

The terminal wrapper reported a close code after the build command had printed all explicit zero exits. As in Mission 026, the authoritative command results are the explicit project exit values and successful build output above.

One clean `next start -p 3027` runtime returned `EVIDENCE_HTTP=200`. Node fetched and structurally parsed Chrome `/json/list`, flattened the target array, found one page target, selected one scalar WebSocket, connected to that page target, and navigated through CDP:

```text
RAW_TARGET_COUNT=5
PAGE_TARGET_COUNT=1
SELECTED_WS_COUNT=1
FINAL_PAGE_PATH=/evidence
```

At `390×844`, the hydrated result was: meaning-first order `true`; exact evidence `true`; all translations `true`; images `{cracking:1, search:1, broken:0, inside:true}`; duplicate labels `{library:0, mechanism:0}`; CTA `true`; all benchmarks `true`; complexity order `true`; astronomy `{ids:true, exploratory:true, retention:true}`; all record links `true`; layout `{scrollWidth:390, clientWidth:390, overflow:false, clipped:0, offscreen:0, overlaps:0}`.

At `1440×900`, the hydrated result was: meaning-first order `true`; exact evidence `true`; all translations `true`; images `{cracking:1, search:1, broken:0, inside:true}`; duplicate labels `{library:0, mechanism:0}`; CTA `true`; all benchmarks `true`; complexity order `true`; astronomy `{ids:true, exploratory:true, retention:true}`; all record links `true`; layout `{scrollWidth:1425, clientWidth:1425, overflow:false, clipped:0, offscreen:0, overlaps:0}`.

Final browser output was `HYDRATED_DOM_ASSERTIONS=PASS` and `RESPONSIVE_ASSERTIONS=PASS`. The three local technical-record destinations returned HTTP `200`; the fourth repository destination remained present in the rendered DOM. No screenshots were generated.

Verification history is retained transparently. The initial PowerShell DevTools attempt returned empty values. Recovery 1 concatenated four WebSocket URLs. Recovery 2 required an exact route URL before the sole page completed navigation. Recovery 3 again exposed PowerShell nested-collection property concatenation. The first successful Node/CDP inspection reached the route and proved the duplicate was genuinely rendered. An authorized clean `.next` rebuild reproduced it and traced it to `components/EvidenceInfographics.tsx` through the route layout. After the explicitly authorized layout-only correction, the final clean build and Node/CDP suite passed. No application source changed during the verification-recovery attempts before that authorized correction.

## 5. Protected Baseline Provenance Table

| Absolute file | Lines | Final SHA-256 |
|---|---:|---|
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\sections\Validation.tsx` | 70 | `b955f8703a5ceb33b8d6a40b1f04ef494217c5038d2c7a3e735ef965d59896e8` |
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\content\vault.ts` | 475 | `bd2bca94aaab984f22fe85195ade41c0c3f3d019565d24fbcbcd9d976d645ca9` |
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\app\(ledger)\page.tsx` | 33 | `7ef8361b3ae4d29feee9c4f32750d5f0c0c6e1a5e5ecb4ca6ac1e836af022901` |
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\app\(ledger)\globals.css` | 58 | `4c767b31e0b073d4c8a8f4fa2772fd92db2a9f868a7a54c584124a1871295762` |
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\components\nav\GlobalNav.tsx` | 78 | `4ec76880fc3a22e01d2671fba6c569d726bd26f5adfefa38f54d295e9b1c7787` |
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\package.json` | 33 | `4b1790ab4743b29994724f85a0022cc5aa9293b20b586bfcdd6f5db313f37cf9` |
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\package-lock.json` | 2848 | `584e9f5aaf4ecd6a69874abed1175580db446ae228c1b977dc843635705f80a1` |
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\components\EvidenceInfographics.tsx` | 77 | `d52e86d977207f6089c84f26fee8ed9809ff50e42b4cd6e7084a7db1844e996d` |

## 6. Deliverable Provenance Table

| Deliverable | Pre-edit lines / SHA-256 | Final lines / SHA-256 |
|---|---|---|
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\app\(ledger)\evidence\page.tsx` | 539 / `93078406d21d1a32bfd89523b110c3725455534eebc0add5125c68946595bc68` | 575 / `a35b4e61f695e09e0a03eea7152d4c62b7f96a81c8ae741c7b70638964927eb6` |
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\app\(ledger)\evidence\layout.tsx` | 11 / `91c456e3f6b6db6d91f903b409de80e3a925fe97d1bbade96f7eddae94401942` | 9 / `f322f6b90aa8d4451e7288de34f878a824359a225a47d82944beba47ccf39a0d` |
| `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_027_EVIDENCE_PAGE_PLAIN_ENGLISH_CLARITY_AND_DUPLICATE_VISUAL_REMOVAL.md` | New | 139 lines; self-hash intentionally omitted |

The handoff omits its own SHA-256 because embedding that value would invalidate it immediately.

## 7. Repository State & Worktree Status

Final `git status --short` retains the accepted pre-existing Mission 025 + Mission 026 dirty worktree. Mission 027 adds modifications only to `app/(ledger)/evidence/page.tsx` and `app/(ledger)/evidence/layout.tsx`, plus this untracked handoff. The other modified and untracked paths shown by Git belong to the accepted prior baseline documented in Handoffs 025 and 026.

The final staged-index check returned `STAGED_COUNT=0`. No Git reset, clean, destructive checkout, stash, commit, push, pull request, GitHub mutation, Vercel action, or deployment occurred. Mission-specific temporary browser profiles, PID files, logs, and screenshots are absent; `TEMP_MISSION027_ARTIFACTS=0`. Runtime cleanup returned `REMAINING_MISSION027_RUNTIME_PROCESSES=0`.

The final application scope is exactly the two explicitly authorized evidence-route files. `components/EvidenceInfographics.tsx` remains unchanged at its recorded hash. The `.next` directory was removed and regenerated only as authorized build output and is not an application-source deliverable.

## 8. Disclosed Limitations & Technical Debt

No Mission 027 implementation limitation remains. The route layout still uses a fragment around a single child; preserving that wrapper honored the instruction to remove only the duplicate component import and invocation. `components/EvidenceInfographics.tsx` is now unreferenced by live application code but was intentionally retained unchanged rather than deleted or repurposed.

Responsive verification used installed headless Chrome and direct Node/CDP communication because the repository has no Playwright or Puppeteer dependency. Geometry assertions checked horizontal document overflow, clipped text, offscreen text, direct grid-child overlaps, evidence-image containment, broken images, record-card bounds, and closing-CTA flow. No dependency or temporary repository script was added.

## 9. Next-Session Startup Context

The next session must read exactly, in this order:

1. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_027_EVIDENCE_PAGE_PLAIN_ENGLISH_CLARITY_AND_DUPLICATE_VISUAL_REMOVAL.md`
2. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\app\(ledger)\evidence\page.tsx`
3. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_026_FOUR_ARM_HOMEPAGE_PLAIN_ENGLISH_CLARITY_PASS.md`

Treat the current local, uncommitted Mission 025 + Mission 026 + Mission 027 worktree as authoritative. Do not substitute GitHub HEAD or reset, clean, stash, destructively check out, commit, push, or deploy it.

## 10. Encountered Gotchas & Triage

- The configured workspace was the parent of the Git repository; the authoritative root is `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`.
- The initial 539-line page contained one visual pair, while browser review showed two. The second pair came from the route layout, not the page source.
- The initial DevTools evaluation emitted empty results because its expression depended on an invalid selector/ambiguous response handling. Stop-on-Red was honored.
- The first recovery concatenated four page WebSocket URLs. The second selected zero targets because it required `/evidence` before navigation completed. The third revealed PowerShell had retained `/json/list` as a nested collection and concatenated properties. Each failure stopped without application edits.
- The Node-based harness flattened parsed JSON structurally, selected one page target, connected to one scalar WebSocket, navigated to `/evidence`, and produced meaningful assertions.
- A clean `.next` rebuild still rendered the duplicate, disproving the stale-cache hypothesis. Search identified `app/(ledger)/evidence/layout.tsx` importing and appending `components/EvidenceInfographics.tsx`. Explicit scope authorization then permitted only removal of that import and invocation.
- The final browser test evaluated astronomy requirements separately. Candidate identifiers, explicit exploratory framing, and retained/preserved-for-follow-up language all passed at both viewports.
- PowerShell emitted an environment-specific `CALL` warning during `next start`, and the command wrapper sometimes reported terminal closure after explicit zero project exits. Next.js nevertheless reached Ready, returned HTTP 200, generated 34/34 pages, and completed all live checks.