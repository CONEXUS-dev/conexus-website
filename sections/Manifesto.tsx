import Image from "next/image";
import { SectionShell, MonoKicker, SerifHeading } from "@/components/primitives";
import { MANIFESTO } from "@/content/vault";

function Act({ index, act }: { index: number; act: (typeof MANIFESTO)["acts"][number] }) {
  return (
    <article className="grid grid-cols-12 gap-8 border-t border-white/20 py-12 md:py-16">
      <div className="col-span-12 md:col-span-3">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
          ACT {String(index + 1).padStart(2, "0")}
        </p>
        <p className="mt-3 max-w-[220px] text-[0.65rem] uppercase leading-loose tracking-[0.2em] text-data/50">
          {act.label}
        </p>
      </div>
      <div className="col-span-12 md:col-span-9">
        {act.lines.map((line) => (
          <p
            key={line}
            className="font-serif text-[clamp(1.8rem,4.5vw,4.2rem)] leading-[1.05] tracking-tighter text-data"
          >
            {line}
          </p>
        ))}
        <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-2">
          {act.body.map((para, i) => (
            <p
              key={para}
              className={`text-sm leading-loose text-data/70 ${
                para === "Rockefeller." || para.startsWith("He knew") || para.startsWith("It needs a refinery") || para.startsWith("Refinement is")
                  ? "font-serif text-2xl italic tracking-tight text-data md:col-span-2"
                  : ""
              } ${i === 0 ? "md:col-span-2" : ""}`}
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Manifesto() {
  return (
    <SectionShell id="refinery">
      <MonoKicker>{MANIFESTO.chapter}</MonoKicker>
      <div className="grid grid-cols-12 gap-8 pb-8">
        <div className="col-span-12 md:col-span-7">
          <SerifHeading>
            This is the noise. This is the spill. And this is why we built the{" "}
            <span className="italic text-ember">refinery</span>.
          </SerifHeading>
        </div>
        <div className="col-span-12 md:col-span-5 md:border-l md:border-white/20">
          <p className="font-serif text-xl italic leading-snug tracking-tight text-data">
            {MANIFESTO.close}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 border-y border-white/20 py-8">
        {MANIFESTO.pillars.map((p, i) => (
          <div key={p.term} className="col-span-12 md:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
              0{i + 1} / {p.term}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-data/70">{p.def}</p>
          </div>
        ))}
      </div>

      {MANIFESTO.acts.map((act, i) => (
        <Act key={act.id} index={i} act={act} />
      ))}

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6">
          <div className="relative aspect-video w-full overflow-hidden border border-white/20">
            <Image
              src={MANIFESTO.images.comparison}
              alt="Crude AI refinery comparison"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover w-full h-full object-center"
            />
          </div>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-data/40">
            FIG — CRUDE / AI / REFINERY COMPARISON
          </p>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="relative aspect-video w-full overflow-hidden border border-white/20">
            <Image
              src={MANIFESTO.images.diagram}
              alt="Refinery diagram"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover w-full h-full object-center"
            />
          </div>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-data/40">
            FIG — REFINERY DIAGRAM
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
