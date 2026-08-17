import { SectionShell, MonoKicker, SerifHeading } from "@/components/primitives";
import { INVERSION } from "@/content/vault";

export default function Inversion() {
  return (
    <SectionShell id="inversion">
      <MonoKicker>{INVERSION.heading}</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <SerifHeading>
            <span className="italic text-ember">In selected tests,</span> the relative
            advantage increased with scale.
          </SerifHeading>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs leading-relaxed text-data/60">{INVERSION.definition}</p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
        {INVERSION.stats.map((s) => (
          <div key={s.label} className="col-span-12 bg-void p-8 md:col-span-6">
            <p className="font-serif text-[clamp(3rem,7vw,6rem)] leading-none tracking-tighter text-data">
              {s.value}
            </p>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.25em] text-data/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-12 gap-8">
        {[INVERSION.baselines, INVERSION.forgetting].map((block) => (
          <div key={block.title} className="col-span-12 md:col-span-6">
            <div className="border-t border-white/20 pt-6">
              <h3 className="font-serif text-2xl tracking-tight text-data">{block.title}</h3>
              <ol className="mt-4 space-y-3">
                {block.notes.map((n, i) => (
                  <li key={n} className="flex gap-4 text-xs leading-relaxed text-data/60">
                    <span className="shrink-0 font-serif text-base text-ember">{i + 1}</span>
                    {n}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[0.65rem] uppercase tracking-[0.25em] text-data/40">
                {block.footer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-white/20 pt-8">
        <h3 className="font-serif text-2xl tracking-tight text-data">{INVERSION.why.title}</h3>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-data/70">{INVERSION.why.body}</p>
      </div>
    </SectionShell>
  );
}
