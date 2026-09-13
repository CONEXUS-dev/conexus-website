import { MonoKicker, SectionShell, SerifHeading } from "@/components/primitives";

type PortfolioEntry = {
  number: string;
  title: string;
  descriptor: string;
  application: string;
  shortName?: string;
  emphasis?: boolean;
};

type PortfolioGroup = {
  title: string;
  description: string;
  entries: readonly PortfolioEntry[];
};

const portfolioGroups: readonly PortfolioGroup[] = [
  {
    title: "Human-AI Collaboration & Provenance",
    description:
      "Sequential collaboration, process data, creative authorship, and technical provenance across human-AI systems.",
    entries: [
      {
        number: "01",
        title: "Turn-Based Generative Collaboration",
        descriptor:
          "Timed, multimodal human-AI collaboration with sequential orchestration and limited visibility.",
        application: "63/820,976 → 19/700,312",
      },
      {
        number: "02",
        title: "Sequenced Human-AI Collaboration and Associated Data Generation",
        descriptor:
          "Structured sequential human-AI collaboration with associated behavioral and process-data generation.",
        application: "63/822,426 → 19/705,219",
      },
      {
        number: "03",
        title: "Human-AI Collaborative Process Data + Paradox-Tolerant Runtime Governance",
        descriptor:
          "Process lineage, structured collaborative telemetry, provenance, and paradox-tolerant runtime governance.",
        application: "63/825,704 → 19/711,232",
      },
      {
        number: "04",
        title: "Copyrightable Works via User-Authored Fine-Tuned Generative AI Models",
        descriptor:
          "Personalized model adaptation, human creative control, and technical provenance for AI-assisted works.",
        application: "63/828,150 → 19/714,528",
      },
      {
        number: "05",
        title: "Gamified Acknowledgment of AI Model Authorship for Copyrightable Works",
        descriptor:
          "Action-level creative provenance and structured measurement of human contribution in AI-assisted creation.",
        application: "63/828,831 → 19/715,483",
      },
    ],
  },
  {
    title: "Calibration & Optimization",
    description:
      "Symbolic calibration architectures and strategic optimization methods extending the CONEXUS research program.",
    entries: [
      {
        number: "06",
        shortName: "ECP / Triadic Symbolic Induction",
        title:
          "Machine Learning Model Calibration via Triadic Symbolic Induction Protocol and Two-Way Cognitive Valve",
        descriptor:
          "Triadic symbolic calibration, Nine-Gear sequencing, and Become / Collapse control of exploratory versus convergent model behavior.",
        application: "63/839,120 → 19/731,083",
        emphasis: true,
      },
      {
        number: "07",
        shortName: "Symbolic Vector Calibration",
        title: "Token-Efficient Calibration of Machine Learning Models Using Emoji-Based Symbolic Vectors",
        descriptor: "Emoji-based symbolic vectors used as compact carriers of calibration structure.",
        application: "63/891,100",
      },
      {
        number: "08",
        shortName: "The Forgetting Engine",
        title: "Optimization Through Strategic Elimination with Paradox Retention",
        descriptor:
          "Population-based optimization through strategic elimination while retaining structurally promising paradox candidates.",
        application: "63/898,911",
      },
    ],
  },
];

export default function PatentPortfolio() {
  return (
    <SectionShell id="patent-portfolio">
      <MonoKicker>Intellectual Property / Patent Portfolio</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <SerifHeading>
            Eight U.S. patent applications. One connected <span className="italic text-ember">architecture</span>.
          </SerifHeading>
        </div>
        <div className="col-span-12 flex items-end md:col-span-4">
          <p className="text-sm leading-relaxed text-data/60">
            A portfolio spanning calibrated AI, symbolic calibration, provenance, human-AI collaboration,
            authorship systems, and strategic optimization.
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
        {portfolioGroups.map((group) => (
          <section key={group.title} aria-labelledby={`portfolio-${group.title.toLowerCase().replaceAll(" ", "-")}`}>
            <div className="grid grid-cols-12 gap-6 border-b border-white/20 pb-6">
              <h3
                id={`portfolio-${group.title.toLowerCase().replaceAll(" ", "-")}`}
                className="col-span-12 font-serif text-3xl tracking-tight text-data md:col-span-7 md:text-4xl"
              >
                {group.title}
              </h3>
              <p className="col-span-12 text-xs leading-relaxed text-data/50 md:col-span-5">
                {group.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px bg-white/20 md:grid-cols-2">
              {group.entries.map((entry) => (
                <article
                  key={entry.number}
                  className={`min-w-0 bg-void p-6 md:p-8 ${entry.emphasis ? "border-l-2 border-ember" : ""}`}
                >
                  <p
                    className={`text-[0.6rem] uppercase tracking-[0.24em] ${entry.emphasis ? "text-ember" : "text-data/45"}`}
                  >
                    U.S. Patent Application {entry.number}
                  </p>
                  {entry.shortName ? (
                    <p className={`mt-6 font-serif text-2xl tracking-tight ${entry.emphasis ? "text-ember" : "text-data"}`}>
                      {entry.shortName}
                    </p>
                  ) : null}
                  <h4
                    className={`${entry.shortName ? "mt-3 text-lg text-data/75" : "mt-6 text-2xl text-data"} break-words font-serif leading-tight tracking-tight`}
                  >
                    {entry.title}
                  </h4>
                  <p className="mt-5 text-xs leading-relaxed text-data/55">{entry.descriptor}</p>
                  <div className="mt-8 border-t border-white/15 pt-4">
                    <p className="text-[0.55rem] uppercase tracking-[0.22em] text-data/35">
                      {entry.application.includes("→") ? "Application lineage" : "Application number"}
                    </p>
                    <p className="mt-2 break-words font-mono text-xs tracking-[0.08em] text-data/70">
                      {entry.application}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionShell>
  );
}