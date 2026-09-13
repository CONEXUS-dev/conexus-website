# HANDOFF 028E — CTA PROMINENCE AND LINK HIERARCHY

Date: 2026-09-13
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`

## 1. Scope Completed

Mission 028E strengthened the visual hierarchy and usability of important homepage destination links without adding content, changing destinations, redesigning sections, or changing dependencies.

- Modified: `sections/Echoagent.tsx`
- Modified: `sections/Cyndicate.tsx`
- Modified: `sections/Technology.tsx`
- Modified: `sections/Nairthex.tsx`
- Modified: `sections/Echoform.tsx`
- Modified: `sections/Partnerships.tsx`
- Shared CTA component created: NO
- Primary CTA instances strengthened: 7 — ECHOagent deck, Cyndicate deck, Enter NAiRTHEX, Open the Guided Demo, Start a Pilot Conversation, Discuss a Partnership, Investor Overview
- Secondary CTA instances strengthened: 3 — Explore the Benchmark Program, NAiRTHEX How It Works, ECHOform See How It Works
- Tertiary links changed: NO
- CTA labels changed: NO
- CTA destinations changed: NO
- PDF files changed: NO
- Dependencies changed: NO
- Mission 029 begun or modified: NO

The Refiner Thesis CTA, Validation links, thematic-experience links, and footer navigation/utility links were intentionally unchanged. The canonical application implementation was released separately before this documentation-only handoff.

## 2. Architecture Decisions & Citations

The two public PDF destinations were important section-level actions but were rendered as `0.65rem` text links. They now use bordered primary treatments at `sections/Echoagent.tsx:268-275` and `sections/Cyndicate.tsx:42-49`. Their identical hierarchy communicates that both documents are substantive materials rather than footnotes.

The Benchmark Program is meaningful deep content but subordinate to the Technology section itself. It therefore uses the neutral bordered secondary treatment at `sections/Technology.tsx:47-52`, rather than the ember-filled-hover primary treatment.

NAiRTHEX and ECHOform already had correct primary/secondary ordering. Their existing actions were refined, not redesigned: primary actions remain ember-bordered and secondary actions remain neutral-bordered at `sections/Nairthex.tsx:33-42` and `sections/Echoform.tsx:25-34`. Their thematic-experience links remain text-oriented tertiary links.

Each Partnership card has one destination and therefore one card-level primary action. The mapped anchor at `sections/Partnerships.tsx:15-24` renders three equally prominent actions while preserving each card’s distinct label and destination.

The existing Refiner CTA remained the visual precedent and was not modified. Validation remained protected because it contains Four-Arm evidence. Footer links remained utility/navigation links. This preserves hierarchy rather than making every anchor visually identical.

The implementation uses local Tailwind class patterns instead of a shared component. Only eight source anchor patterns across six small files required changes, contextual spacing differs, and no shared behavior or state exists. A new abstraction would have expanded architecture without reducing meaningful complexity.

The visual language remains restrained: square borders, void background, ember/data colors, mono uppercase labels, no gradients, no icons, no pills, and no animation beyond color transitions.

## 3. Implementation & Integration Details

Primary CTA treatment uses `inline-flex`, `min-h-11`, `border border-ember`, `px-5 py-3`, `text-[0.75rem]`, `tracking-[0.18em]`, centered text, restrained ember fill on hover, and a two-pixel ember focus ring with void offset.

Secondary CTA treatment uses the same target geometry and typography with `border-white/20` and `text-data/70`; hover changes the border and text to ember without adding a default fill.

On mobile, section/product actions use `w-full`; ECHOagent, Cyndicate, Technology, NAiRTHEX, and ECHOform return to intrinsic width with `sm:w-auto`. Partnership actions remain card-width because each is the sole destination in its card. All major actions enforce a minimum 44 CSS-pixel height.

On desktop, actions remain content-sized except for the three Partnership card actions. This keeps headings and editorial copy visually dominant while maintaining unmistakable affordance.

Every modified link retains semantic `<a>` markup. `focus-visible:outline-none`, `focus-visible:ring-2`, `focus-visible:ring-ember`, `focus-visible:ring-offset-2`, and `focus-visible:ring-offset-void` provide visible keyboard focus. Borders ensure recognition without hover or color alone.

The PDF links preserve `target="_blank"` and `rel="noopener noreferrer"`. They remain direct public PDF links; no viewer, download behavior, file move, or label badge was introduced.

Exact preserved labels:

- `VIEW TRUST INTELLIGENCE DECK →`
- `VIEW PROOF OF SWARM →`
- `Explore the Benchmark Program →`
- `Enter NAiRTHEX →`
- `How It Works`
- `Open the Guided Demo →`
- `See How It Works`
- `Start a Pilot Conversation →`
- `Discuss a Partnership →`
- `Investor Overview →`

Exact preserved hrefs:

- `/materials/ECHOagent_Trust_Intelligence.pdf`
- `/materials/CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf`
- `/cinematic?scene=4`
- `https://the-narthex-staging-564338352424.us-east1.run.app/`
- `https://www.conexusglobalarts.media/nairthex#doctrine`
- `https://conexus-echoform-demo.vercel.app/`
- `https://www.conexusglobalarts.media/echoform#how-it-works`
- `mailto:DAngell@CONEXUSGlobalArts.Media?subject=CONEXUS%20Pilot%20Inquiry`
- `mailto:DAngell@CONEXUSGlobalArts.Media?subject=CONEXUS%20Partnership%20Inquiry`
- `/investors`

## 4. Verbatim Verification Evidence

### Baseline and repository state

```text
ROOT=C:/Users/Derek Angell/Desktop/CONEXUS Website Integration Workspace/CONEXUS Website 2.0
REMOTE=origin https://github.com/CONEXUS-dev/conexus-website
BRANCH=main
LOCAL_HEAD=7f6e4c1cf9fae92be0b1a0d82d1bbb4d053e420b
FETCHED_ORIGIN_MAIN=7f6e4c1cf9fae92be0b1a0d82d1bbb4d053e420b
EXPECTED_028D=7f6e4c1cf9fae92be0b1a0d82d1bbb4d053e420b
ALIGNMENT=ALIGNED
STAGED_INDEX=empty
WORKTREE=clean
REPOSITORY_RUNTIME=NONE
```

### Scope, href, label, PDF, and hierarchy assertions

```text
sections/Cyndicate.tsx
sections/Echoagent.tsx
sections/Echoform.tsx
sections/Nairthex.tsx
sections/Partnerships.tsx
sections/Technology.tsx
SCOPE_MATCH=True

EXACT HREF TOKEN EQUALITY:
sections/Echoagent.tsx : True
sections/Cyndicate.tsx : True
sections/Technology.tsx : True
sections/Nairthex.tsx : True
sections/Echoform.tsx : True
sections/Partnerships.tsx : True

EXACT NON-CLASS DIFF:
NONE

PDF ATTRIBUTES:
sections/Echoagent.tsx : True
sections/Cyndicate.tsx : True

primary source files: 5
secondary source files: 3
source anchor patterns with min-h-11: 8
Partnerships mapped instances: 3
rendered strengthened CTA instances: 10
```

The source diff contained exactly eight class-line replacements and no non-class changes. The mapped Partnership anchor accounts for three rendered primary CTA instances.

### Typecheck, build, static generation, and diff integrity

```text
npm run typecheck
> conexus-2@2.0.0 typecheck
> tsc --noEmit
TYPECHECK_EXIT=0

npm run build
▲ Next.js 15.5.23
✓ Compiled successfully in 24.8s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (34/34)
✓ Collecting build traces
✓ Finalizing page optimization
BUILD_EXIT=0

git diff --check
DIFF_CHECK_EXIT=0
```

### Local runtime, responsive dimensions, focus, and destinations

```text
RUNTIME_READY=True
HTTP_STATUS=200

VIEWPORT_390x844:
overflow=false
ECHOagent=343x44 focusVisible=true clipped=false
Cyndicate=343x44 focusVisible=true clipped=false
Technology=343x44 focusVisible=true clipped=false
NAiRTHEX primary=352x44 focusVisible=true clipped=false
NAiRTHEX secondary=352x44 focusVisible=true clipped=false
ECHOform primary=352x44 focusVisible=true clipped=false
ECHOform secondary=352x44 focusVisible=true clipped=false
Pilot=277x62 focusVisible=true clipped=false
Partnership=277x44 focusVisible=true clipped=false
Funding=277x44 focusVisible=true clipped=false

VIEWPORT_1440x900:
overflow=false
ECHOagent=331.75x44 focusVisible=true clipped=false
Cyndicate=247.52x44 focusVisible=true clipped=false
Technology=341.13x44 focusVisible=true clipped=false
NAiRTHEX primary=200.72x44 focusVisible=true clipped=false
NAiRTHEX secondary=154.33x44 focusVisible=true clipped=false
ECHOform primary=256.88x44 focusVisible=true clipped=false
ECHOform secondary=191.77x44 focusVisible=true clipped=false
Pilot=388.33x44 focusVisible=true clipped=false
Partnership=388.33x44 focusVisible=true clipped=false
Funding=388.34x44 focusVisible=true clipped=false

/materials/ECHOagent_Trust_Intelligence.pdf|200|application/pdf
/materials/CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf|200|application/pdf
/cinematic?scene=4|200|text/html; charset=utf-8
/cinematic?scene=2|200|text/html; charset=utf-8
/investors|200|text/html; charset=utf-8
https://the-narthex-staging-564338352424.us-east1.run.app/|200
https://www.conexusglobalarts.media/nairthex#doctrine|200
https://conexus-echoform-demo.vercel.app/|200
https://www.conexusglobalarts.media/echoform#how-it-works|200
POST_RUNTIME_COUNT=0
TEMP_EXISTS=False
```

### Canonical implementation commit, push, and equality

```text
git commit -m "Improve: CTA prominence and link hierarchy"
[main 2792876] Improve: CTA prominence and link hierarchy
6 files changed, 8 insertions(+), 8 deletions(-)

IMPLEMENTATION_COMMIT=2792876850562b11a3f4a87bd941a76d51bf25e7
IMPLEMENTATION_TREE=4b8a62c190024ca644d6927a7a84a179d425c125
IMPLEMENTATION_PARENT=7f6e4c1cf9fae92be0b1a0d82d1bbb4d053e420b
PRE_PUSH_ORIGIN_MAIN=7f6e4c1cf9fae92be0b1a0d82d1bbb4d053e420b
git push origin main
7f6e4c1..2792876  main -> main
LOCAL=2792876850562b11a3f4a87bd941a76d51bf25e7
REMOTE=2792876850562b11a3f4a87bd941a76d51bf25e7
LOCAL_TREE=4b8a62c190024ca644d6927a7a84a179d425c125
REMOTE_TREE=4b8a62c190024ca644d6927a7a84a179d425c125
REMOTE_DIFF_COUNT=0
```

### Canonical deployment and production verification

```text
STATUS|Vercel – conexus-website|success
TARGET=https://vercel.com/dangell-5898s-projects/conexus-website/ERzth8JG9LtmreEvLK893a4VUaqv
DESCRIPTION=Deployment has completed
CANONICAL_DEPLOYMENT_SUCCESS=True

https://conexus-website.vercel.app/|200|text/html; charset=utf-8
https://conexus-website.vercel.app/materials/ECHOagent_Trust_Intelligence.pdf|200|application/pdf|5199543
https://conexus-website.vercel.app/materials/CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf|200|application/pdf|6790855
https://conexus-website.vercel.app/cinematic?scene=4|200|text/html; charset=utf-8
https://conexus-website.vercel.app/cinematic?scene=2|200|text/html; charset=utf-8

PRODUCTION_390x844=status complete; overflow=false; 10/10 CTAs present; all minHeight=44px; all focusVisible=true; all clipped=false
PRODUCTION_1440x900=status complete; overflow=false; 10/10 CTAs present; all minHeight=44px; all focusVisible=true; all clipped=false
```

The separately attached `Vercel – conexus-echoform-demo` status failed for the same repository SHA. It is not the canonical website deployment and was not modified, repaired, or redeployed.

## 5. Protected Baseline Provenance Table

| Protected file | Lines | SHA-256 | Result |
|---|---:|---|---|
| `sections/PatentPortfolio.tsx` | 166 | `af3840ecc64cd2e1e61784c3b7780de2c00d265384b4b4222ccf54315410d55b` | Unchanged |
| `sections/Validation.tsx` | 70 | `b955f8703a5ceb33b8d6a40b1f04ef494217c5038d2c7a3e735ef965d59896e8` | Unchanged |
| `components/scenes/Scene3.tsx` | 149 | `99e137b1d8a93c5e850b40a55fd3581492cec4899003aefbf36ee240e4e209c9` | Unchanged |
| `package.json` | 33 | `4b1790ab4743b29994724f85a0022cc5aa9293b20b586bfcdd6f5db313f37cf9` | Unchanged |
| `package-lock.json` | 2848 | `584e9f5aaf4ecd6a69874abed1175580db446ae228c1b977dc843635705f80a1` | Unchanged |

## 6. Deliverable Provenance Table

| Application file | Pre lines | Pre SHA-256 | Post lines | Post SHA-256 |
|---|---:|---|---:|---|
| `sections/Echoagent.tsx` | 279 | `43bdc742fdb0e2bec039938d45b97136a684829443e8df7fdef44fd7721f6540` | 279 | `0c288f4a5f7a5abd902398602aff8fb775021da668ea9223f37b9349c58a3089` |
| `sections/Cyndicate.tsx` | 52 | `f912841d9dcb4df5d02593e2e874d34c495dc84a4f9b34824e3bab902cdfb686` | 52 | `e0c1e228bb9d06f70ee3e8a2fabcdc2062535abd5485e9d0e21b38e38dd0a1cb` |
| `sections/Technology.tsx` | 55 | `4204eae92ad34110b87a1fd711471659f177f8525fc24217973b9f08c7614a79` | 55 | `976d5b544d31d398ff9380233502b2cce6d1a115b489ff5219135ee88f0859e4` |
| `sections/Nairthex.tsx` | 48 | `9882a0ef72bcfb40d573510f99fe3f9ddeddac451f20f409d7fe1fe11e70797f` | 48 | `dfabe93d32eb88f738920593748c3dc43fa5a6e8ef908e0f20072a5502f384df` |
| `sections/Echoform.tsx` | 40 | `096b9f321a425e363bbb186994d35da0abbfacc44df14b3eb1cd5b829ea0f592` | 40 | `9dc975785aad6b2512fdd6dac37cc24d2fbe76632c69ebdf6fe8da75421c0f28` |
| `sections/Partnerships.tsx` | 30 | `87f96ab4e0b5440759e4a8abb880fd67e219ef1ea0e2aafefe3e68805b1f5d39` | 30 | `0f815925faa0027ccc415c05c60c53a0a4a0d7c600926c90ac7e8673866c42f5` |

- Canonical implementation SHA: `2792876850562b11a3f4a87bd941a76d51bf25e7`
- Canonical implementation tree: `4b8a62c190024ca644d6927a7a84a179d425c125`
- Canonical implementation parent: `7f6e4c1cf9fae92be0b1a0d82d1bbb4d053e420b`
- Handoff line count: `315`

This handoff does not record its own future documentation commit identity and is not self-hashed.

## 7. Repository State & Worktree Status

After the canonical implementation release and before documentation-only completion:

```text
HEAD=2792876850562b11a3f4a87bd941a76d51bf25e7
origin/main=2792876850562b11a3f4a87bd941a76d51bf25e7
LOCAL_TREE=4b8a62c190024ca644d6927a7a84a179d425c125
REMOTE_TREE=4b8a62c190024ca644d6927a7a84a179d425c125
LOCAL_REMOTE_DIFF_COUNT=0
STAGED_INDEX=empty
APPLICATION_WORKTREE=clean
REPOSITORY_RUNTIME_COUNT=0
SOLE_PENDING_DOCUMENTATION_FILE=HANDOFF_028E_CTA_PROMINENCE_AND_LINK_HIERARCHY.md
```

Final post-documentation equality, clean status, empty index, runtime state, and artifact state are verified after the documentation-only commit and reported in the completion response.

## 8. Disclosed Limitations & Technical Debt

- Headless Edge’s DevTools forced-hover command did not activate Tailwind’s pointer/hover media-query branch. Hover behavior is verified structurally by the compiled source classes; rendered keyboard-focus behavior was verified directly at both viewports.
- The first local runtime wrapper did not launch because PowerShell disallows redirecting stdout and stderr to one file. A corrected launch used separate streams.
- The first two browser-verification scripts failed before producing valid measurements due to DevTools domain ordering and target selection. Each attempt cleaned all processes and temporary artifacts; the corrected deterministic pass produced the recorded measurements.
- Mobile headless Edge reserved a 15px scrollbar gutter, yielding a 375px document client width inside the requested 390px viewport. The viewport itself was exactly 390×844, and no document overflow or CTA clipping occurred.
- The unrelated `conexus-echoform-demo` repository status failed. It was explicitly outside Mission 028E deployment authority and remained untouched.
- No application technical debt or dependency change was introduced.

## 9. Next-Session Startup Context

Read exactly these three files for the next approved website mission:

1. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_028E_CTA_PROMINENCE_AND_LINK_HIERARCHY.md`
2. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\sections\Echoagent.tsx`
3. `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\sections\Cyndicate.tsx`

Do not begin Mission 029 automatically. Mission 028E did not inspect or modify Mission 029 work.

## 10. Encountered Gotchas & Triage

- Compact JSX placed dynamic hrefs and class names on the same line in NAiRTHEX and ECHOform. A line-based comparison initially produced a false mismatch; token-level href extraction and the class-only diff proved exact destination equality.
- The mapped Partnership anchor is one source pattern but three rendered CTA instances. Source assertions therefore count eight modified anchor patterns while rendered checks count ten CTA instances.
- The two thematic links share compact source lines near modified product anchors. The authoritative diff and non-class-change assertion verified that tertiary labels, hrefs, and classes remained unchanged.
- Production links and PDFs were requested directly after deployment; both PDFs retained `application/pdf`, and cinematic scenes 2 and 4 returned HTTP 200.
- Deployment authority is `Vercel – conexus-website`. The unrelated demo status was observed but intentionally not acted upon.
- Runtime and browser cleanup completed with zero repository-owned processes and no retained temporary verification directory.