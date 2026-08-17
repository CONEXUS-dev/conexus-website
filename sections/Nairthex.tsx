import Image from "next/image";
import { SectionShell, MonoKicker, SerifHeading } from "@/components/primitives";
import { NAiRTHEX_SECTION as N } from "@/content/vault";

export default function Nairthex() {
  return (
    <SectionShell id="nairthex">
      <p className="mb-4 text-[0.65rem] uppercase tracking-[0.35em] text-data/40">
        {N.product}
      </p>
      <MonoKicker>Product — 01</MonoKicker>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <SerifHeading>{N.name}</SerifHeading>
          <p className="mt-4 font-serif text-[clamp(1.4rem,3vw,2.4rem)] italic leading-tight tracking-tight text-data/60">
            {N.tagline}
          </p>
        </div>
        <div className="col-span-12 flex flex-col justify-between md:col-span-5 md:border-l md:border-white/20 md:pl-8">
          <p className="text-xs leading-relaxed text-data/70">{N.lead}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={N.enter.href}
              className="border border-ember px-5 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-ember transition-colors hover:bg-ember hover:text-void"
            >
              {N.enter.label} →
            </a>
            <a
              href={N.howItWorks.href}
              className="border border-white/20 px-5 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-data/70 transition-colors hover:border-data hover:text-data"
            >
              {N.howItWorks.label}
            </a>
          </div>
        </div>
      </div>

      <div className="relative mt-12 aspect-[2.39/1] w-full overflow-hidden border border-white/20">
        <Image
          src={N.image}
          alt={`${N.name} — ${N.tagline}`}
          fill
          sizes="100vw"
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute bottom-0 left-0 bg-void/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.25em] text-data/60">
          ANAMORPHIC 2.39:1 — THE THRESHOLD
        </div>
      </div>

      <p className="mt-10 max-w-3xl border-l-2 border-ember pl-6 text-xs leading-relaxed text-data/60">
        {N.doctrineNote}
      </p>

      {/* Doctrine */}
      <div className="mt-12">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-ember">{N.doctrine.kicker}</p>
        <div className="mt-4 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <h3 className="font-serif text-[clamp(1.8rem,4vw,3.2rem)] leading-tight tracking-tighter text-data">
              {N.doctrine.heading}
            </h3>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-xs leading-relaxed text-data/70">{N.doctrine.body}</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
          {N.doctrine.tenets.map((t) => (
            <div key={t.title} className="col-span-12 bg-void p-8 md:col-span-4">
              <h4 className="font-serif text-xl tracking-tight text-data">{t.title}</h4>
              <p className="mt-3 text-xs leading-relaxed text-data/60">{t.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Clarity */}
      <div className="mt-12">
        <h3 className="font-serif text-3xl tracking-tighter text-data">{N.clarity.heading}</h3>
        <div className="mt-8 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
          <div className="col-span-12 bg-void p-8 md:col-span-6">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-refined">
              {N.clarity.is.title}
            </p>
            <ul className="mt-4 divide-y divide-white/20">
              {N.clarity.is.points.map((p) => (
                <li key={p} className="py-3 font-serif text-lg tracking-tight text-data">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 bg-void p-8 md:col-span-6">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
              {N.clarity.isNot.title}
            </p>
            <ul className="mt-4 divide-y divide-white/20">
              {N.clarity.isNot.points.map((p) => (
                <li key={p} className="py-3 font-serif text-lg tracking-tight text-data/50 line-through decoration-ember/60">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* One quiet conversation */}
      <div className="mt-12 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <h3 className="font-serif text-[clamp(1.8rem,4vw,3rem)] leading-tight tracking-tighter text-data">
            {N.oneConversation.heading}
          </h3>
          <p className="mt-4 text-xs leading-relaxed text-data/70">{N.oneConversation.body}</p>
        </div>
        <div className="col-span-12 md:col-span-7 md:border-l md:border-white/20 md:pl-8">
          <div className="divide-y divide-white/20 border-t border-white/20">
            {N.oneConversation.features.map((f) => (
              <div key={f.title} className="grid grid-cols-12 gap-4 py-5">
                <span className="col-span-12 font-serif text-xl tracking-tight text-data md:col-span-4">
                  {f.title}
                </span>
                <span className="col-span-12 text-xs leading-relaxed text-data/60 md:col-span-8">
                  {f.body}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 border-t border-white/20 pt-12 text-center">
        <h3 className="mx-auto max-w-3xl font-serif text-[clamp(2rem,5vw,4.5rem)] leading-tight tracking-tighter text-data">
          {N.cta.heading}
        </h3>
        <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-data/60">{N.cta.body}</p>
        <a
          href={N.enter.href}
          className="mt-10 inline-block border border-ember px-10 py-4 text-[0.65rem] uppercase tracking-[0.35em] text-ember transition-colors hover:bg-ember hover:text-void"
        >
          {N.enter.label} →
        </a>
      </div>
    </SectionShell>
  );
}
