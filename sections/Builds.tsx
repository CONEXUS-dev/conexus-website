import { MonoKicker, SectionShell, SerifHeading } from "@/components/primitives";

const disciplines = [
  {
    title: "Calibrate",
    body: "Structure how a system holds competing constraints before it acts or answers.",
  },
  {
    title: "Evaluate",
    body: "Separate measured findings from hypotheses, prototypes, and future applications.",
  },
  {
    title: "Translate",
    body: "Turn research architecture into bounded products for real human contexts.",
  },
] as const;

export default function Builds() {
  return (
    <SectionShell id="builds">
      <MonoKicker>What CONEXUS Builds</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <SerifHeading>
            AI systems built around <span className="italic text-ember">judgment</span>, not
            output volume.
          </SerifHeading>
        </div>
        <div className="col-span-12 flex items-end md:col-span-4">
          <p className="text-sm leading-relaxed text-data/65">
            CONEXUS develops calibration and optimization architecture, tests it under
            controlled conditions, and translates selected methods into products.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
        {disciplines.map((discipline) => (
          <article key={discipline.title} className="col-span-12 bg-void p-8 md:col-span-4">
            <h3 className="font-serif text-2xl tracking-tight text-data">{discipline.title}</h3>
            <p className="mt-4 text-xs leading-relaxed text-data/60">{discipline.body}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}