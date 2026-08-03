# CONEXUS Website Architecture Reset Plan

Branch: `site-architecture-reset`

## Objective

Reorganize the existing CONEXUS website without discarding working pages, research artifacts, media, or product assets. The goal is a controlled reset: preserve the archive, rebuild the front door, separate products from research, and restore a clear evidence hierarchy.

## Non-negotiable preservation rules

1. Do not delete the Sovereign Observer experiment or its dashboard.
2. Do not merge the Sovereign Observer into NAiRTHEX.
3. Preserve the 30,800-trial Forgetting Engine work and its dedicated evidence path.
4. Preserve the existing ECHOform assets, screenshots, mirror-tier material, and demo links until replaced by verified current links.
5. Do not push redesign work directly to `main`.
6. Keep every public claim tied to a canonical artifact, report, dataset, or patent record.

## Current structural problems

- The homepage presents historical discoveries, product marketing, research claims, company history, and investor messaging at equal priority.
- The opening discovery section still leads with the exoplanet and 79-year challenge narrative.
- The current evidence page is dominated by older Forgetting Engine totals and does not foreground the four-arm ECP causal validation.
- NAiRTHEX is presented as a product, technical architecture document, and bridge to the Sovereign Observer at the same time.
- The NAiRTHEX page links directly to the Sovereign Observer from the hero.
- The NAiRTHEX page contains stale deployment details and old Render links.
- ECHOform and Dream Mirror overlap in naming, positioning, and navigation.
- The global navigation exposes too many pages without category hierarchy.
- Multiple totals and effect-size values appear without clear comparison labels.

## Canonical four-arm evidence

The four-arm causal validation consists of 200 independent runs, n=50 per condition, using the Alternative Uses Test on `gemini-3.1-pro-preview` at temperature 0.7.

Conditions:

1. Single-turn control baseline
2. Neutral analytical multi-turn condition
3. Arm 4a: emoji token exposure with inert acknowledgment and no paradox-holding architecture
4. CONEXUS paradox multi-turn condition

Canonical run-level means:

- Control: 0.246628
- Neutral: 0.221939
- Arm 4a: 0.225751
- CONEXUS: 0.292905

Canonical interpretation:

- Arm 4a and Neutral were statistically indistinguishable: p=0.3612, Cohen's d=0.1835.
- Token exposure alone did not reproduce the expansion.
- Neutral analytical sequencing compressed semantic distance below baseline.
- CONEXUS expanded semantic distance above all other conditions.
- The active causal ingredient supported by the experiment is the simultaneous unresolved contradiction held across the Nine-Gear sequence.

Effect sizes must always identify the comparison:

- Control to CONEXUS: Cohen's d=3.3786
- Neutral to CONEXUS: Cohen's d=3.7824
- Arm 4a to CONEXUS: Cohen's d=3.9060

The idea-level variance result is 39.9242%, suitable for public display as 39.9% or approximately 40%, but not as a substitute for the run-level comparison.

## Proposed top-level information architecture

### Home

Purpose: explain the company in ten seconds, establish the three capabilities, present the strongest evidence, and route visitors to products or research.

Proposed sequence:

1. Hero: what CONEXUS is
2. Three capabilities: Calibrate, Refine, Verify
3. Four-arm causal validation
4. Forgetting Engine evidence and 30,800-trial validation
5. Products: NAiRTHEX and ECHOform
6. Research: Sovereign Observer and selected technical work
7. Company / founder
8. Contact

### Technology

- ECP / Nine-Gear Calibration Architecture
- Forgetting Engine
- Provenance and audit infrastructure

### Evidence

- Four-Arm Causal Validation
- 30,800-Trial Forgetting Engine Validation
- Domain replications and supporting artifacts
- Clear source links and comparison labels

### Products

- NAiRTHEX
- ECHOform

### Research

- Sovereign Observer
- Atlas 80
- selected experiments and technical reports

### Company

- About
- Founder
- Patents
- Investors / Partners
- Contact

## Route disposition map

### Keep and rebuild in place

- `/` — complete homepage front-door rewrite
- `/nairthex` — rebuild as a product page only
- `/echoform` — rebuild as the canonical ECHOform product page
- `/evidence` — rebuild around evidence hierarchy
- `/observer` — preserve dashboard and add proper experiment context
- `/fe-algorithm` — preserve and reconcile with current canonical FE evidence
- `/contact` — preserve, simplify, and update

### Keep but recategorize

- `/conexus-sovereign` — Technology or Research
- `/atlas-80` — Research
- `/ecp-experiment` — archive as an earlier experiment or rewrite to avoid confusion with the four-arm study
- `/the-future` — Research / Vision
- `/verticals` — Applications or archive concepts not currently active products
- `/investors` — Company / Partners
- `/pitch` — private or secondary investor route
- `/vrp` — Research / Domain validation

### Audit for overlap or retirement

- `/dream-mirror` — determine whether it redirects to `/echoform` or becomes a feature page
- `/experiences` — determine whether content is current or absorbed into Products
- `/canvas` — verify whether active product, historical concept, or archive
- `/follow-me` — verify whether active product, historical concept, or archive
- `/discovery` — preserve as historical narrative, remove from primary navigation
- `/directory` — replace with categorized sitemap after restructuring

## NAiRTHEX page requirements

The NAiRTHEX page must communicate:

- A digital threshold for sacred space
- A private reflection companion serving as a quiet foyer before ministry
- Presence before intervention
- Contradiction without collapse
- Human and pastoral authority first
- Voice and text support
- Clear operational boundaries
- What NAiRTHEX is and is not

Remove from the primary product journey:

- Sovereign Observer hero button
- entropy, hash, pass, and lineage dashboard language
- stale Render deployment claims
- backend stack lists as primary marketing content
- unsupported or outdated architecture claims

The Sovereign Observer may be referenced only as separate supporting research, not as a product feature or primary CTA.

## ECHOform page requirements

The ECHOform page must become the canonical product page for the Dream Mirror experience and explain:

- dream submission by text or voice
- Shadow, Light, and Reality triad
- user route selection
- twenty Mirror Tiers
- symbolic pattern recognition and reflection history
- visual identity and representative product screens
- current demo or product status
- clear privacy and non-diagnostic boundaries

The relationship between `/echoform` and `/dream-mirror` must be resolved so visitors do not encounter duplicate product identities.

## Homepage media rules

- Use one primary four-arm infographic on the homepage.
- Use the selected dark “Architecture of Paradox” visual after numerical labels are corrected and comparison context is explicit.
- Do not place all three four-arm infographics at full size on the homepage.
- Place the technical search-regime infographic on the dedicated evidence page.
- Place the simpler creativity explainer in media, outreach, or lower on the evidence page.
- Use one optional short video with user-initiated playback and a clear purpose.
- Do not autoplay video.
- Remove external generation branding from official assets when a clean export is available.

## Navigation target

Primary desktop navigation should be reduced to:

- Technology
- Evidence
- Products
- Research
- Company

Primary CTA:

- Explore Products or Contact / Partner, depending on final homepage direction

Mobile navigation should mirror the same categories rather than listing every route flatly.

## Implementation phases

### Phase 1: Inventory and safety

- Create redesign branch
- Record route map
- identify current deployment source and preview workflow
- preserve main branch and production
- collect canonical media and report assets

### Phase 2: Global architecture

- replace flat navigation with category navigation
- create consistent page shells, metadata, and footer hierarchy
- add a categorized directory

### Phase 3: Homepage front door

- rewrite hero
- replace exoplanet discovery section
- add three-capability section
- add four-arm evidence section
- add clean product and research pathways

### Phase 4: Product pages

- rebuild `/nairthex`
- rebuild `/echoform`
- resolve `/dream-mirror`

### Phase 5: Evidence and research

- rebuild `/evidence`
- preserve and contextualize `/observer`
- separate current evidence from historical experiments
- reconcile totals and claim labels

### Phase 6: Validation and launch

- mobile QA
- broken-link audit
- metadata and accessibility audit
- preview deployment
- user approval
- merge to `main`
- production verification

## Immediate next implementation unit

1. Replace global navigation architecture on the redesign branch.
2. Remove the Sovereign Observer CTA from the NAiRTHEX hero on the redesign branch.
3. Build the new homepage skeleton without deleting lower-page content yet.
4. Add the four-arm evidence module using canonical comparison labels.
5. Add clean product routes for NAiRTHEX and ECHOform.
