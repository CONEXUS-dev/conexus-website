import { SectionShell, MonoKicker, SerifHeading } from "@/components/primitives";
import { ECHOFORM_SECTION as E } from "@/content/vault";

export default function Echoform() {
  return (
    <SectionShell id="echoform">
      <MonoKicker>{E.kicker}</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <SerifHeading>{E.headings[0]}</SerifHeading>
          <SerifHeading className="text-data/40">{E.headings[1]}</SerifHeading>
        </div>
        <div className="col-span-12 flex flex-col justify-between md:col-span-4">
          <p className="text-xs leading-relaxed text-data/70">{E.lead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={E.demo.href}
              className="border border-ember px-5 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-ember transition-colors hover:bg-ember hover:text-void"
            >
              {E.demo.label} →
            </a>
            <a
              href={E.howItWorks.href}
              className="border border-white/20 px-5 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-data/70 transition-colors hover:border-data hover:text-data"
            >
              {E.howItWorks.label}
            </a>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-12">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-ember">
          {E.experience.kicker}
        </p>
        <h3 className="mt-4 max-w-4xl font-serif text-[clamp(1.8rem,4vw,3.2rem)] leading-tight tracking-tighter text-data">
          {E.experience.heading}
        </h3>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-data/60">
          {E.experience.body}
        </p>

        <div className="mt-12 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
          {E.experience.steps.map((s) => (
            <div key={s.step} className="col-span-12 bg-void p-8 md:col-span-6 lg:col-span-3">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">{s.step}</p>
              <h4 className="mt-4 font-serif text-xl leading-tight tracking-tight text-data">
                {s.title}
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-data/60">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clarity */}
      <div className="mt-12">
        <h3 className="font-serif text-3xl tracking-tighter text-data">{E.clarity.heading}</h3>
        <div className="mt-8 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
          <div className="col-span-12 bg-void p-8 md:col-span-6">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-refined">
              {E.clarity.is.title}
            </p>
            <ul className="mt-4 divide-y divide-white/20">
              {E.clarity.is.points.map((p) => (
                <li key={p} className="py-3 font-serif text-lg tracking-tight text-data">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 bg-void p-8 md:col-span-6">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
              {E.clarity.isNot.title}
            </p>
            <ul className="mt-4 divide-y divide-white/20">
              {E.clarity.isNot.points.map((p) => (
                <li
                  key={p}
                  className="py-3 font-serif text-lg tracking-tight text-data/50 line-through decoration-ember/60"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Screens note */}
      <div className="mt-12 border-t border-white/20 pt-10">
        <h3 className="font-serif text-2xl tracking-tight text-data">{E.screens.heading}</h3>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-data/60">{E.screens.body}</p>
      </div>

      {/* Disclaimer */}
      <div className="mt-12 border border-white/20 p-8 md:p-12">
        <h3 className="font-serif text-[clamp(1.4rem,3vw,2.2rem)] leading-tight tracking-tighter text-data">
          {E.disclaimer.heading}
        </h3>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-data/60">{E.disclaimer.body}</p>
        <a
          href={E.demo.href}
          className="mt-8 inline-block border border-ember px-8 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-ember transition-colors hover:bg-ember hover:text-void"
        >
          {E.demo.label} →
        </a>
      </div>
    </SectionShell>
  );
}
