import { MonoKicker, SectionShell, SerifHeading } from "@/components/primitives";

const opportunities = [
  ["Pilots", "Discuss a scoped product or research evaluation.", "mailto:DAngell@CONEXUSGlobalArts.Media?subject=CONEXUS%20Pilot%20Inquiry", "Start a Pilot Conversation"],
  ["Partnerships", "Explore strategic, research, or technical collaboration.", "mailto:DAngell@CONEXUSGlobalArts.Media?subject=CONEXUS%20Partnership%20Inquiry", "Discuss a Partnership"],
  ["Funding", "Review the evidence, company thesis, and investor overview.", "/investors", "Investor Overview"],
] as const;

export default function Partnerships() {
  return (
    <SectionShell id="partnerships">
      <MonoKicker>Pilots / Partnerships / Funding</MonoKicker>
      <SerifHeading>Build the next stage with CONEXUS.</SerifHeading>
      <div className="mt-12 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
        {opportunities.map(([title, body, href, label]) => (
          <article key={title} className="col-span-12 flex flex-col bg-void p-8 md:col-span-4">
            <h3 className="font-serif text-3xl tracking-tight text-data">{title}</h3>
            <p className="mt-4 flex-1 text-xs leading-relaxed text-data/60">{body}</p>
            <a
              href={href}
              className="mt-8 text-[0.65rem] uppercase tracking-[0.22em] text-ember underline-offset-4 hover:underline"
            >
              {label} →
            </a>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}