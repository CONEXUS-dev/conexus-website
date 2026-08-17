/* CONEXUS 2.0 Content Vault
 * Exclusive extraction from "CONEXUS Website 2.0 Substance.md".
 * All copy, metrics, and image paths originate there. Nothing invented.
 */

export interface Condition {
  name: string;
  value: string;
  descriptor: string;
}

export interface StatBlock {
  value: string;
  label: string;
  detail: string;
}

export interface Benchmark {
  trials: string;
  domain: string;
  result: string;
  scope: string;
}

export interface GatewayProduct {
  id: "nairthex" | "echoform";
  kicker: string;
  name: string;
  tagline: string;
  description: string;
  cta: string;
  href: string;
  image: string;
}

export const HERO = {
  whitman:
    "“Do I contradict myself? / Very well then I contradict myself, / (I am large, I contain multitudes.)”",
  whitmanAttribution: "Walt Whitman",
  banner: "NOT ANOTHER AI COMPANY. The Solution.",
  headline:
    "The world is drowning in crude data because it lacks a method to make it safe.",
  cta: "ENTER THE REFINERY",
  ctaHref: "https://www.conexusglobalarts.media/refinery",
} as const;

export const FOUR_ARM: Condition[] = [
  {
    name: "Control",
    value: "0.2466",
    descriptor: "Single-turn baseline",
  },
  {
    name: "Neutral",
    value: "0.2219",
    descriptor: "Analytical multi-turn",
  },
  {
    name: "Arm 4a",
    value: "0.2258",
    descriptor: "Emoji tokens only",
  },
  {
    name: "CONEXUS",
    value: "0.2929",
    descriptor: "Paradox architecture",
  },
];

export const FOUR_ARM_STATS: StatBlock[] = [
  {
    value: "39.9%",
    label: "Descriptive idea-level shift",
    detail:
      "The initial two-arm pass showed 39.9242% higher latent variance. The Levene variance test was not statistically significant (p = 0.304), so this is reported as a descriptive result rather than the primary causal finding.",
  },
  {
    value: "d = 3.78",
    label: "Neutral to CONEXUS",
    detail:
      "At the independent run level, the CONEXUS condition had a higher mean semantic distance than the neutral multi-turn condition (Welch p = 2.97e-32; bootstrap interval excluded zero).",
  },
  {
    value: "p = 0.361",
    label: "No token-only difference detected",
    detail:
      "The token-only arm was not statistically distinguishable from the neutral condition, which weighs against emoji exposure alone as the explanation for the measured effect.",
  },
];

export const FOUR_ARM_SUMMARY =
  "Two hundred independent runs across four controlled conditions separated the contribution of token exposure, multi-turn prompting, and the complete contradiction-holding architecture.";

export const FOUR_ARM_CAVEAT =
  "Within this model, task, and configuration, the complete contradiction-holding sequence best explains the observed run-level semantic expansion. Replication on additional models and tasks is required before making broader general claims.";

export const EVIDENCE_LINK = "https://www.conexusglobalarts.media/evidence";

export const GATEWAYS: GatewayProduct[] = [
  {
    id: "nairthex",
    kicker: "Faith and Reflection",
    name: "NAiRTHEX",
    tagline: "A Digital Threshold for Sacred Space",
    description:
      "A private AI reflection companion serving as a quiet foyer before ministry, with restraint, clear boundaries, and human authority first.",
    cta: "Explore NAiRTHEX",
    href: "https://the-narthex-staging-564338352424.us-east1.run.app/",
    image: "/images/products/nairthex-digital-threshold.webp",
  },
  {
    id: "echoform",
    kicker: "Dreams and Symbolic Reflection",
    name: "ECHOform",
    tagline: "Dream Journal & Mirror",
    description:
      "A dream mirror that routes each entry through Shadow, Light, and Reality before opening a path through twenty symbolic Mirror Tiers.",
    cta: "Open the Guided Demo",
    href: "https://conexus-echoform-demo.vercel.app/",
    image: "/images/evidence/conexus-geometric-proof.webp",
  },
];

export const TEAM = {
  heading: "The Team",
  intro:
    "Built from first principles by a solo founder who discovered something no one expected.",
  name: "Derek Angell",
  role: "Founder & CEO",
  bio: "Inventor of ECP and architect of the Forgetting Engine. Founder of CONEXUS, building calibration, optimization, and provenance systems through controlled experiments and cross-domain computational research.",
  quote:
    "“We didn't just build a smarter AI. We built a system that feels the weight of the problem.”",
  tags: ["AI Architecture", "Cognitive Systems", "Computational Research", "Product Development"],
  image: "/derek-angell.jpg",
} as const;

export const INVERSION = {
  heading: "Complexity Inversion",
  lead: "In selected tests, the relative advantage increased with scale.",
  definition:
    "CONEXUS uses the term complexity inversion for an experimental trend observed in several internal benchmarks. It is a testable research hypothesis, not a universal law about all algorithms or all hard problems.",
  stats: [
    { value: "30,800", label: "Controlled optimization trials in the locked sweep" },
    { value: "6", label: "Computational benchmark areas in the current research portfolio" },
  ],
  baselines: {
    title: "Reference Baselines",
    notes: [
      "Each experiment used a stated comparison method.",
      "Baseline behavior varied by domain, scale, objective, and configuration.",
      "Cross-domain percentages are not directly interchangeable.",
    ],
    footer: "Interpretation depends on the benchmark",
  },
  forgetting: {
    title: "Forgetting Engine Results",
    notes: [
      "Advantages were measured against the stated baselines.",
      "Several benchmark series showed larger relative gaps at larger tested scales.",
      "The largest reported comparison was approximately 361.8% in one 3D protein-folding study.",
    ],
    footer: "Promising pattern, still open to independent testing",
  },
  why: {
    title: "Why This Pattern Matters",
    body: "Many valuable optimization problems become harder as the search space expands. A method whose relative advantage persists or grows with tested scale deserves further replication, stronger baselines, preregistration, and independent review.",
  },
} as const;

export const MANIFESTO = {
  chapter: "OIL / AI / REFINER OVERVIEW",
  acts: [
    {
      id: "crude",
      label: "THE CRUDE — 1859",
      lines: [
        "You know what oil is.",
        "You pump it.",
        "You burn it.",
        "You live inside the world it built.",
        "But when it first broke open, it was not a system.",
        "It was a mess.",
        "A rush.",
        "A black flood people knew was valuable long before they knew how to live with it.",
      ],
      body: [
        "That was the boom. Towns sprang up around the wells. Money moved fast. Everyone wanted in.",
        "The future had arrived in liquid form, and it was volatile, filthy, and barely understood.",
        "For more than a decade, people built towns around a tragedy. Wells caught fire. Storage burned. Promise turned into danger faster than they could build the guardrails.",
      ],
    },
    {
      id: "method",
      label: "THE METHOD — 1870",
      lines: ["Then came the turn.", "Not the discovery of the well.", "The method that made the well usable."],
      body: [
        "Rockefeller.",
        "He did not strike the oil. He did not invent the well.",
        "He understood what to do with it.",
        "The boom knew it was valuable.",
        "He knew it had to be refined.",
        "That is the difference between a rush and an industry.",
        "That is the difference between black gold in the dirt and something you can trust inside your own home.",
      ],
    },
    {
      id: "scale",
      label: "THE SCALE — 1 TRILLION BILLIONS / 850 MILLION YEARS / $4 TRILLION / 1,000x GROWTH",
      lines: ["The world calls it AI.", "That is the first problem."],
      body: [
        "The word arrived before the understanding did. It started in research. It drifted into fantasy.",
        "Now it dominates the morning news. People wake up to Good Morning America hearing about AI taking jobs. AI lying. AI hallucinating. AI threatening humanity. Every day the same story. Fear sells. Panic clicks. The cycle repeats.",
        "Now, when you hear “AI,” you don't hear infrastructure.",
        "You hear mythology.",
        "You hear machines waking up.",
        "You hear Terminator. You hear The Matrix. You hear Skynet. You hear HAL 9000.",
        "You hear the end of work. The end of us.",
        "Mythology is a terrible way to introduce a technology.",
        "Because while the world is busy reacting to a word, the thing underneath it has become the most powerful raw material in human history.",
        "A black box built from compressed human life.",
        "Language. Records. Desire. Memory. Noise. Signal.",
        "That is the new crude.",
        "Zettabytes of compressed human life, growing year after year faster than oil ever did.",
        "And just like the early boom years, everyone knows it is valuable. No one knows how to handle it.",
        "So the pattern repeats. The rush is on. The spill is everywhere.",
        "Fluent, but unreliable. Powerful, but noisy. Convincing, but not yet dependable where trust actually matters.",
        "They're handing you crude and telling you it's finished.",
        "It is not.",
        "This is the noise. This is the spill. And this is why we built the refinery.",
      ],
    },
    {
      id: "verdict",
      label: "THE VERDICT — THE METHOD / ROCKEFELLER / ECP TRUTH-SYMBOL-CONTRADICTION TRIANGLE",
      lines: ["That is where CONEXUS begins.", "Not as another “AI” company.", "But as the category that comes after."],
      body: [
        "We are not here to drill deeper into the black box. We are here to refine what comes out of it.",
        "Not more worship of raw output. Not more addiction to accumulation. Not the fantasy that “more” automatically means “true.”",
        "The world does not need another well.",
        "It needs a refinery.",
        "Not a promise. Not another wrapper. Not a voice pretending the machine is finished.",
        "Raw power is not the breakthrough. It never was.",
        "Raw power is the beginning of the problem.",
        "Refinement is what makes it usable.",
        "Refinement is what makes it safe.",
        "Refinement is what makes it matter.",
        "That was true in 1863.",
        "It is true again now.",
      ],
    },
  ],
  pillars: [
    { term: "Subtraction", def: "We eliminate wrong answers instead of searching for right ones." },
    { term: "Filtration", def: "We separate signal from noise." },
    { term: "Calibration", def: "We align outputs with truth through ECP." },
    { term: "Provenance", def: "We trace every answer to its cryptographic source." },
  ],
  close: "CONEXUS doesn't add to the noise. We eliminate it. We don't celebrate the black box. We refine it.",
  images: {
    comparison: "/images/crude-ai-refinery-comparison.png",
    forgettingEngine: "/images/forgetting-engine.png",
    diagram: "/images/refinery-diagram.png",
  },
} as const;

export const EVIDENCE = {
  kicker: "Evidence With Scope",
  headings: ["Strong results.", "Explicit limits."],
  scope:
    "CONEXUS reports controlled experiments and internal computational benchmarks with their conditions, baselines, and limitations. The evidence supports specific findings. It does not justify universal claims about every model, algorithm, or scientific domain.",
  study: {
    kicker: "Primary Causal Study",
    heading: "Four controlled conditions. Two hundred independent runs.",
    config:
      "The study tested Gemini 3.1 Pro Preview on an Alternative Uses Task, with 50 independent runs per condition, temperature 0.7, 16,000 maximum output tokens, and local BGE embeddings for the semantic-distance measurement.",
    conditions: [
      { name: "Control", value: "0.2466", descriptor: "Single-turn baseline" },
      { name: "Neutral", value: "0.2219", descriptor: "Analytical multi-turn prompt" },
      { name: "Token-only", value: "0.2258", descriptor: "Emoji exposure without the architecture" },
      { name: "CONEXUS", value: "0.2929", descriptor: "Complete contradiction-holding sequence" },
    ],
    stats: [
      { value: "d = 3.7824", label: "Neutral to CONEXUS", detail: "Large run-level standardized mean difference in the tested configuration." },
      { value: "2.97e-32", label: "Welch p-value", detail: "The bootstrap interval for the mean difference was [+0.063467, +0.078094]." },
      { value: "p = 0.3612", label: "Token-only control", detail: "No statistically detectable difference from the neutral condition was found in this comparison." },
    ],
    divider: "What the study supports, and what it does not.",
    subheading: "Precision strengthens the finding. It does not diminish it.",
    supported: {
      title: "Supported by this study",
      points: [
        "The full CONEXUS condition produced the highest run-level mean semantic distance in this experiment.",
        "The difference between the neutral and CONEXUS conditions was large in the tested configuration: Cohen's d = 3.7824.",
        "The neutral-to-CONEXUS Welch test returned p = 2.97e-32, and the bootstrap confidence interval for the mean difference excluded zero.",
        "The token-only condition was not statistically distinguishable from the neutral condition: p = 0.3612, with a small effect estimate.",
        "The longer neutral prompt compressed rather than expanded the measured search behavior, weighing against prompt length as the explanation.",
      ],
    },
    limits: {
      title: "Limits and open questions",
      points: [
        "One model family and one divergent-thinking task were used in the reported four-arm study.",
        "Semantic distance is a behavioral measurement, not a general measure of intelligence, truth, creativity, or consciousness.",
        "The 39.9242% idea-level variance difference is descriptive; its Levene variance test was not significant at p = 0.304333.",
        "The causal result supports the tested prompt architecture under these conditions. Broader generalization requires additional models, tasks, preregistration, and independent replication.",
      ],
    },
  },
  forgetting: {
    kicker: "Optimization Research",
    heading: "The Forgetting Engine benchmark program",
    body: "The locked optimization sweep contains 30,800 controlled trials. Additional domain studies test the same strategic-elimination idea in different search spaces. Each result belongs to its own objective, baseline, and configuration.",
    caveat:
      "Important: a 361.8% relative success-rate difference in protein folding is not the same quantity as an 89.3% routing improvement or a 27.8% gate reduction. These numbers should be read within their own experiments, not combined into one universal score.",
    benchmarks: [
      { trials: "2,000 trials", domain: "2D Protein Folding", result: "Approximately 80% relative improvement in the stated comparison", scope: "Internal benchmark against the documented Monte Carlo baseline" },
      { trials: "4,000 trials", domain: "3D Protein Folding", result: "25.8% success versus 3.9%, approximately 361.8% relative improvement", scope: "Largest reported relative gap in this research portfolio" },
      { trials: "Scale series trials", domain: "Traveling Salesman", result: "Larger relative gaps were reported at larger tested instances", scope: "Benchmark-specific trend, not a universal scaling law" },
      { trials: "250 trials", domain: "Vehicle Routing", result: "Up to 89.3% improvement at the largest tested scale", scope: "Compared with the stated routing baseline and configuration" },
      { trials: "300 trials", domain: "Neural Architecture Search", result: "Reported accuracy gains ranged from 3.8% to 8.4%", scope: "Internal search benchmark; external replication remains needed" },
      { trials: "5,000 trials", domain: "Quantum Compilation", result: "27.8% gate reduction and 3.7% fidelity gain were reported", scope: "Simulator-based comparison under the documented compilation setup" },
    ] as Benchmark[],
  },
  inversion: {
    kicker: "Open Research Hypothesis",
    heading: "Complexity inversion is an observed pattern, not a declared law.",
    body: "In several CONEXUS benchmark series, the relative advantage over the chosen baseline increased at larger tested scales. That is the phenomenon CONEXUS calls complexity inversion.",
    body2:
      "Establishing a general scaling law would require preregistered experiments, stronger competing methods, multiple independent implementations, and replication outside the CONEXUS team.",
    observed: { label: "Observed", text: "Larger relative gaps in selected benchmark series as tested scale increased." },
    notEstablished: { label: "Not yet established", text: "A universal rule that the Forgetting Engine improves with every form of complexity or defeats all conventional algorithms." },
  },
  koi: {
    kicker: "Exploratory Case Study",
    heading: "Three retained astronomical candidate signals",
    body: "An exploratory analysis retained three anomalous signals from public catalog data for further review. They are not presented as independently confirmed exoplanet discoveries.",
    candidates: [
      { name: "KOI-0002 candidate A", note: "Retained by the exploratory anomaly-ranking process for follow-up analysis. Candidate status does not establish a planetary interpretation." },
      { name: "KOI-0009 candidate", note: "Retained by the exploratory anomaly-ranking process for follow-up analysis. Candidate status does not establish a planetary interpretation." },
      { name: "KOI-0002 candidate B", note: "Retained by the exploratory anomaly-ranking process for follow-up analysis. Candidate status does not establish a planetary interpretation." },
    ],
    shows: { title: "What this case study shows", text: "The strategic-retention approach can surface and preserve anomalous candidates that might otherwise be eliminated early in a ranking pipeline." },
    notShows: { title: "What it does not show", text: "It does not independently validate the candidates as planets, establish a false-positive rate for discovery, or substitute for domain-expert astronomical confirmation." },
  },
  images: {
    cracking: "/images/evidence/cracking-ai-creativity-code.webp",
    searchRegime: "/images/evidence/search-regime-modulation.webp",
    geometric: "/images/evidence/conexus-geometric-proof.webp",
  },
} as const;

export const NAiRTHEX_SECTION = {
  product: "CONEXUS Product for Faith and Reflection",
  name: "NAiRTHEX",
  tagline: "A Digital Threshold for Sacred Space",
  lead: "A private AI reflection companion serving as a quiet foyer before ministry, built on a doctrine of restraint and respect for human authority.",
  enter: { label: "Enter NAiRTHEX", href: "https://the-narthex-staging-564338352424.us-east1.run.app/" },
  howItWorks: { label: "How It Works", href: "https://www.conexusglobalarts.media/nairthex#doctrine" },
  doctrineNote:
    "NAiRTHEX is designed as a reflective threshold under human and pastoral authority, not as therapy, clergy, diagnosis, or autonomous decision-making.",
  doctrine: {
    kicker: "Product Doctrine",
    heading: "The moment before ministry matters.",
    body: "NAiRTHEX does not rush a person toward an answer. It creates a quiet threshold where they can speak honestly, remain whole, and decide what human support comes next.",
    tenets: [
      { title: "Presence Before Intervention", body: "Receive the person accurately without immediately trying to convert, diagnose, correct, or resolve them." },
      { title: "Contradiction Without Collapse", body: "Allow doubt, anger, grief, joy, and uncertainty to coexist without forcing a quick answer." },
      { title: "Human Authority First", body: "NAiRTHEX never replaces pastors, clinicians, sponsors, or community. It protects the moment before ministry." },
    ],
  },
  clarity: {
    heading: "Clear by design.",
    is: { title: "NAiRTHEX is", points: ["A spiritual reflection aide", "One quiet conversation", "Under human and pastoral authority"] },
    isNot: { title: "NAiRTHEX is not", points: ["Therapy, confession, or clergy", "A diagnostic or advisory tool", "An autonomous AI decision-maker"] },
  },
  oneConversation: {
    heading: "One quiet conversation.",
    body: "The interface stays calm, the person stays in control, and the path back to human community remains visible.",
    features: [
      { title: "Voice and Text", body: "Speak freely or type. Both paths enter the same quiet, session-aware conversation." },
      { title: "Governed Reflection", body: "The experience is designed around restraint, boundaries, and respect for the person's stated worldview." },
      { title: "Built for the Threshold", body: "A private foyer before ministry, not a replacement for ministry itself." },
    ],
  },
  cta: {
    heading: "Step into the threshold.",
    body: "No account is required. Speak or type, pause when you need to, and leave the conversation whenever you choose.",
  },
  image: "/images/products/nairthex-digital-threshold.webp",
} as const;

export const ECHOFORM_SECTION = {
  kicker: "ECHOform Dream Journal & Mirror",
  headings: ["Your dream becomes a symbolic reflection.", "You decide what it means."],
  lead: "ECHOform turns a dream, memory, or written moment into multiple creative perspectives and visual mirror choices. It does not claim to decode the unconscious or reveal psychological truth.",
  demo: { label: "Open the Guided Demo", href: "https://conexus-echoform-demo.vercel.app/" },
  howItWorks: { label: "See How It Works", href: "https://www.conexusglobalarts.media/echoform#how-it-works" },
  experience: {
    kicker: "The Experience",
    heading: "Multiple perspectives without a forced conclusion.",
    body: "The contradiction-holding structure is used to keep several symbolic interpretations available at once. The product offers possibilities rather than declaring an answer.",
    steps: [
      { step: "Step 1", title: "Share a dream or moment", body: "Enter a dream, memory, image, or written reflection. The user chooses what to share and may stop at any time." },
      { step: "Step 2", title: "Receive three perspectives", body: "The system offers Shadow, Light, and Reality as simultaneous symbolic routes rather than a single authoritative interpretation." },
      { step: "Step 3", title: "Choose a mirror", body: "The selected route is translated into a visual and written reflection through one of the ECHOform mirror tiers." },
      { step: "Step 4", title: "Keep or discard the result", body: "The output is a creative journal artifact. The user decides whether it is useful, meaningful, or worth saving." },
    ],
  },
  clarity: {
    heading: "What ECHOform is, and what it is not",
    is: { title: "ECHOform is", points: ["A symbolic dream and reflection journal", "A creative prompt for personal meaning-making", "A user-directed visual experience"] },
    isNot: { title: "ECHOform is not", points: ["Clinical dream interpretation or psychotherapy", "A diagnostic assessment of personality or mental health", "Proof of hidden meaning, prophecy, memory, or spiritual truth"] },
  },
  screens: {
    heading: "Inside the guided experience",
    body: "These screens show the current visual journey. The guided demo uses prepared examples so visitors can examine the flow without treating the output as a personal assessment.",
  },
  disclaimer: {
    heading: "The mirror offers language. It does not own your meaning.",
    body: "ECHOform output should be treated as creative reflection, not medical, psychological, legal, financial, or spiritual advice. Distressing or urgent concerns belong with qualified human support.",
  },
} as const;

export const FOOTER = {
  foundation: { name: "CONEXUS Foundation", status: "Coming Soon" },
  upcoming: [
    { name: "ECHOagent", status: "Coming Soon" },
    { name: "CONEXUS Cyndicate", status: "Coming soon" },
  ],
  logo: "/logos/CONEXUS LOGO.png",
  logoDark: "/logos/CONEXUS DARK GLOWING LOGO.png",
} as const;
