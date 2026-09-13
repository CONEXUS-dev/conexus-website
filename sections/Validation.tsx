import { SectionShell, MonoKicker, SerifHeading } from "@/components/primitives";
import { MISSION_025 } from "@/content/vault";

export default function Validation() {
  const evidence = MISSION_025.evidence;

  return (
    <SectionShell id="evidence">
      <MonoKicker>Four-Arm Evidence</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-10">
          <SerifHeading>{evidence.question}</SerifHeading>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <p className="text-lg leading-relaxed text-data">{evidence.result}</p>
          <p className="mt-4 text-sm leading-relaxed text-data/65">{evidence.significance}</p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-8 border-t border-white/20 pt-8">
        <div className="col-span-12 md:col-span-6">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">What semantic distance means</p>
          <p className="mt-4 text-sm leading-relaxed text-data/75">{evidence.definition}</p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">Four controlled conditions</p>
          <p className="mt-4 text-xs leading-relaxed text-data/65">{evidence.method}</p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-6 border-t border-white/20 pt-4">
        <div className="col-span-12 divide-y divide-white/20 md:col-span-7">
          {evidence.conditions.map((c) => (
            <div key={c.name} className="grid grid-cols-12 items-baseline gap-2 py-4">
              <span className={`col-span-4 font-serif text-xl tracking-tight md:text-2xl ${c.name === "CONEXUS" ? "text-ember" : "text-data"}`}>
                {c.name}
              </span>
              <span className="col-span-5 col-start-8 text-right text-[0.65rem] uppercase tracking-[0.2em] text-data/50">
                {c.descriptor}
              </span>
              <span className={`col-span-3 col-start-5 row-start-1 text-right font-serif text-2xl md:text-4xl ${c.name === "CONEXUS" ? "text-ember" : "text-data"}`}>
                {c.value}
              </span>
            </div>
          ))}
        </div>
        <div className="col-span-12 grid divide-y divide-white/20 border-white/20 md:col-span-5 md:border-l">
          {evidence.comparisons.map((s) => (
            <div key={s.label} className="border-l border-white/20 p-6 md:p-8">
              <p className="font-serif text-2xl leading-none tracking-tight text-ember">{s.value}</p>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-data/50">{s.label}</p>
              <p className="mt-4 font-serif text-xl leading-snug text-data md:text-2xl">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-8 border-t border-white/20 pt-8">
        <div className="col-span-12 flex flex-col items-start gap-5 md:col-span-5 md:col-start-8 md:items-end">
          <a href="/evidence" className="inline-flex min-h-11 w-full items-center justify-center border border-ember px-5 py-3 text-center text-[0.75rem] uppercase tracking-[0.18em] text-ember transition-colors hover:bg-ember hover:text-void focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:w-auto">
            View the Full Validation →
          </a>
          <a href="/cinematic?scene=3" className="inline-flex min-h-11 w-full items-center justify-center border border-white/20 px-5 py-3 text-center text-[0.75rem] uppercase tracking-[0.18em] text-data/70 transition-colors hover:border-ember hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:w-auto">
            See the Study Visualized →
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
