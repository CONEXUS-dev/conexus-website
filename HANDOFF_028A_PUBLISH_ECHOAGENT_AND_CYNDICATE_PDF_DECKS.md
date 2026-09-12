# HANDOFF 028A — Publish ECHOagent and Cyndicate PDF Decks

Date: 2026-09-11  
Repository: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0`

## Scope Completed

Published two authoritative PDF files as direct binary copies and added one restrained homepage text CTA to each relevant section.

Created:

- `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\public\materials\ECHOagent_Trust_Intelligence.pdf`
- `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\public\materials\CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf`
- `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\HANDOFF_028A_PUBLISH_ECHOAGENT_AND_CYNDICATE_PDF_DECKS.md`

Modified:

- `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\sections\Echoagent.tsx`
- `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\sections\Cyndicate.tsx`

No other application/source file was modified. Neither authoritative PDF source was edited, re-exported, converted, compressed, cropped, OCR-processed, screenshot-extracted, or regenerated.

## PDF Publication Provenance

### ECHOagent Trust Intelligence

- Authoritative source: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\ECHOagent_Trust_Intelligence.pdf`
- Website destination: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\public\materials\ECHOagent_Trust_Intelligence.pdf`
- Public URL: `/materials/ECHOagent_Trust_Intelligence.pdf`
- Source bytes: `5199543`
- Website bytes: `5199543`
- Source SHA-256: `621fe5d740a7f8221287639d01e52744143939ee1928d107c37cbf408f241c6a`
- Website SHA-256: `621fe5d740a7f8221287639d01e52744143939ee1928d107c37cbf408f241c6a`
- Equality: **PASS — byte length and SHA-256 are identical**

### CONEXUS Cyndicate: The Proof of Swarm

- Authoritative source: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf`
- Website destination: `C:\Users\Derek Angell\Desktop\CONEXUS Website Integration Workspace\CONEXUS Website 2.0\public\materials\CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf`
- Public URL: `/materials/CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf`
- Source bytes: `6790855`
- Website bytes: `6790855`
- Source SHA-256: `15774466d6922b3a4623f675faffeaf1d6725fd0fc7018dc0ec1a1a80a287127`
- Website SHA-256: `15774466d6922b3a4623f675faffeaf1d6725fd0fc7018dc0ec1a1a80a287127`
- Equality: **PASS — byte length and SHA-256 are identical**

Both files were created with direct PowerShell `Copy-Item` operations from the exact authoritative paths.

## Homepage Integration

`sections/Echoagent.tsx` now includes exactly one restrained text CTA:

```text
Label: VIEW TRUST INTELLIGENCE DECK →
href: /materials/ECHOagent_Trust_Intelligence.pdf
target: _blank
rel: noopener noreferrer
```

The CTA uses the existing professional-site mono/ember text-link vocabulary. Removing only the added CTA block in memory reproduced the exact accepted Mission 028 ECHOagent hash:

```text
Pre-Mission-028A SHA-256: d016929a1e8929cb142a219509221510ad07d2a677fe8ce32882b6b01e99e4cd
SHA-256 after in-memory CTA removal: d016929a1e8929cb142a219509221510ad07d2a677fe8ce32882b6b01e99e4cd
OTHERWISE_UNCHANGED=True
```

`sections/Cyndicate.tsx` now includes exactly one restrained text CTA:

```text
Label: VIEW PROOF OF SWARM →
href: /materials/CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf
target: _blank
rel: noopener noreferrer
```

Removing only the added CTA block in memory reproduced the exact accepted Cyndicate hash:

```text
Pre-Mission-028A SHA-256: 4e7d693d2e5001aea52891acd1ef4e9a08b1e1d5e36b46b7b5de7bec8810804d
SHA-256 after in-memory CTA removal: 4e7d693d2e5001aea52891acd1ef4e9a08b1e1d5e36b46b7b5de7bec8810804d
OTHERWISE_UNCHANGED=True
```

No `download` attribute, embedded viewer, thumbnail, extracted slide image, modal, button card, or forced download was added. Mission 028 Trust Intelligence copy and the existing Cyndicate content remain otherwise unchanged.

Final section provenance:

| File | Lines | SHA-256 |
|---|---:|---|
| `sections/Echoagent.tsx` | 279 | `43bdc742fdb0e2bec039938d45b97136a684829443e8df7fdef44fd7721f6540` |
| `sections/Cyndicate.tsx` | 52 | `f912841d9dcb4df5d02593e2e874d34c495dc84a4f9b34824e3bab902cdfb686` |

## Verification Commands and Results

PDF copy and equality verification:

```text
Copy-Item -LiteralPath <authoritative source> -Destination <public destination>
Get-FileHash -Algorithm SHA256 <source and destination>

ECHOagent_SOURCE_BYTES=5199543
ECHOagent_WEBSITE_BYTES=5199543
ECHOagent_SOURCE_SHA256=621fe5d740a7f8221287639d01e52744143939ee1928d107c37cbf408f241c6a
ECHOagent_WEBSITE_SHA256=621fe5d740a7f8221287639d01e52744143939ee1928d107c37cbf408f241c6a
ECHOagent_BYTE_IDENTICAL=True

Cyndicate_SOURCE_BYTES=6790855
Cyndicate_WEBSITE_BYTES=6790855
Cyndicate_SOURCE_SHA256=15774466d6922b3a4623f675faffeaf1d6725fd0fc7018dc0ec1a1a80a287127
Cyndicate_WEBSITE_SHA256=15774466d6922b3a4623f675faffeaf1d6725fd0fc7018dc0ec1a1a80a287127
Cyndicate_BYTE_IDENTICAL=True
```

TypeScript:

```text
npm run typecheck
> conexus-2@2.0.0 typecheck
> tsc --noEmit
TYPECHECK_EXIT=0
```

Clean production build:

```text
PRE_BUILD_NEXT_RUNTIMES=0
CLEAN_NEXT_REMOVED=True
npm run build
> conexus-2@2.0.0 build
> next build
✓ Compiled successfully in 16.0s
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (34/34)
✓ Collecting build traces
✓ Finalizing page optimization
BUILD_EXIT=0
```

The environment command wrapper closed after typecheck/build printed their explicit successful project exits. The authoritative project results are `TYPECHECK_EXIT=0`, `BUILD_EXIT=0`, successful compilation, and `34/34` static-page generation.

Patch integrity:

```text
git diff --check
DIFF_CHECK_EXIT=0
```

Production runtime and public assets:

```text
HOMEPAGE_HTTP=200

ECHOagent_PDF_HTTP=200
ECHOagent_PDF_CONTENT_TYPE=application/pdf
ECHOagent_SERVED_BYTES=5199543
ECHOagent_SERVED_SHA256=621fe5d740a7f8221287639d01e52744143939ee1928d107c37cbf408f241c6a
ECHOagent_SERVED_IDENTICAL=True

Cyndicate_PDF_HTTP=200
Cyndicate_PDF_CONTENT_TYPE=application/pdf
Cyndicate_SERVED_BYTES=6790855
Cyndicate_SERVED_SHA256=15774466d6922b3a4623f675faffeaf1d6725fd0fc7018dc0ec1a1a80a287127
Cyndicate_SERVED_IDENTICAL=True
```

Homepage CTA checks:

```text
SSR_ECHO_LINK_ATTRS=True
SSR_ECHO_LABEL=True
SSR_CYNDICATE_LINK_ATTRS=True
SSR_CYNDICATE_LABEL=True

HYDRATED_DOM_EXIT=0
HYDRATED_ECHO_LABEL=True
HYDRATED_ECHO_HREF=True
HYDRATED_CYNDICATE_LABEL=True
HYDRATED_CYNDICATE_HREF=True
HYDRATED_TARGET_COUNT=2
HYDRATED_REL_COUNT=2
```

The two expected homepage links are the only `_blank` links and the only `noopener noreferrer` occurrences in the hydrated homepage.

## Repository State

Repository HEAD remained:

```text
f2f66bfe3170f042a8cf8c6d0cdde8bc685aba9b
```

Final `git status --short` after handoff creation:

```text
 M app/(cinematic)/cinematic/page.tsx
 M app/(ledger)/conexus-sovereign/page.tsx
 M app/(ledger)/directory/page.tsx
 M app/(ledger)/echoform/page.tsx
 M app/(ledger)/ecp-experiment/page.tsx
 M app/(ledger)/evidence/calibration-validation-full/page.tsx
 M app/(ledger)/evidence/layout.tsx
 M app/(ledger)/evidence/page.tsx
 M app/(ledger)/experiences/page.tsx
 M app/(ledger)/fe-algorithm/page.tsx
 M app/(ledger)/investors/page.tsx
 M app/(ledger)/layout.tsx
 M app/(ledger)/nairthex/page.tsx
 M app/(ledger)/observer/page.tsx
 M app/(ledger)/page.tsx
 M app/(ledger)/the-future/page.tsx
 M app/(ledger)/vrp/page.tsx
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
?? HANDOFF_026_FOUR_ARM_HOMEPAGE_PLAIN_ENGLISH_CLARITY_PASS.md
?? HANDOFF_027_EVIDENCE_PAGE_PLAIN_ENGLISH_CLARITY_AND_DUPLICATE_VISUAL_REMOVAL.md
?? HANDOFF_028A_PUBLISH_ECHOAGENT_AND_CYNDICATE_PDF_DECKS.md
?? HANDOFF_028_ECHOAGENT_TRUST_INTELLIGENCE_INTEGRATION.md
?? public/materials/
?? sections/Builds.tsx
?? sections/Cyndicate.tsx
?? sections/Echoagent.tsx
?? sections/Partnerships.tsx
?? sections/RefinerBridge.tsx
?? sections/Technology.tsx
```

The accepted Mission 025 + Mission 026 + Mission 027 + Mission 028 worktree remains present. Mission 028A adds only the two authorized PDF assets, the two authorized CTA additions, and this handoff.

The staged index remained empty. No commit, push, pull, PR, GitHub mutation, Vercel action, or deployment occurred.

## Runtime Cleanup

The production verification runtime was stopped by exact port ownership and parent process. All Mission 028A browser profiles, hydrated DOM files, logs, and PID artifacts were removed.

```text
STOPPED_PROCESS_IDS=3
PORT_3029_LISTENERS=0
MISSION028A_TEMP_ARTIFACTS=0
REPOSITORY_NEXT_PROCESSES=0
```

## Gotchas

- The first runtime command used `$pid` as a path variable. PowerShell variable names are case-insensitive and `$PID` is read-only, so the assignment failed even though `next start` launched successfully. The server was recovered through the exact port-3029 listener.
- The first homepage response variable used `$home`, which collides case-insensitively with PowerShell’s read-only `$HOME`. PDF HTTP/hash checks still completed successfully; homepage assertions were rerun with `$pageResponse` and passed.
- The runtime emitted the environment-specific `CALL` warning documented in prior missions, but Next.js reached Ready and all live HTTP checks passed.