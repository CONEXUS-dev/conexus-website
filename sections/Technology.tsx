import { MonoKicker, SectionShell, SerifHeading } from "@/components/primitives";

const pillars = [
  {
    title: "Technology",
    body: "Calibration, governed response behavior, bounded execution, continuity, and provenance-oriented architecture.",
  },
  {
    title: "Research",
    body: "Controlled experiments and benchmark programs with defined conditions, measurements, and provenance.",
  },
  {
    title: "Intellectual Property",
    body: "Eight U.S. patent applications spanning calibrated AI, symbolic calibration, provenance, human-AI collaboration, authorship systems, and strategic optimization.",
  },
  {
    title: "Optimization",
    body: "The Forgetting Engine tests strategic candidate elimination under defined budgets as a separate research program.",
  },
] as const;

export default function Technology() {
  return (
    <SectionShell id="technology">
      <MonoKicker>Technology / Research / IP / Optimization</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <SerifHeading>
            A technical foundation beneath the <span className="italic text-ember">products</span>.
          </SerifHeading>
        </div>
        <div className="col-span-12 flex items-end md:col-span-4">
          <p className="text-xs leading-relaxed text-data/55">
            These programs connect calibration architecture, controlled research, patent filings,
            and strategic elimination across distinct stages of development.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="col-span-12 bg-void p-8 md:col-span-6 lg:col-span-3">
            <h3 className="font-serif text-2xl tracking-tight text-data">{pillar.title}</h3>
            <p className="mt-4 text-xs leading-relaxed text-data/60">{pillar.body}</p>
          </article>
        ))}
      </div>
      <a
        href="/cinematic?scene=4"
        className="mt-8 inline-block text-[0.65rem] uppercase tracking-[0.25em] text-data/60 underline-offset-4 transition-colors hover:text-ember hover:underline"
      >
        Explore the Benchmark Program →
      </a>
    </SectionShell>
  );
}