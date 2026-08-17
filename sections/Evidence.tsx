import Image from "next/image";
import { SectionShell, MonoKicker, SerifHeading, ConditionRow, StatCell } from "@/components/primitives";
import { EVIDENCE } from "@/content/vault";

function ListBlock({
  title,
  points,
  tone,
}: {
  title: string;
  points: readonly string[];
  tone: "supported" | "limits";
}) {
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="border-t border-white/20 pt-6">
        <h3
          className={`font-serif text-3xl tracking-tight ${
            tone === "supported" ? "text-refined" : "text-ember"
          }`}
        >
          {title}
        </h3>
        <ul className="mt-6 space-y-4">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-xs leading-relaxed text-data/70">
              <span
                className={`mt-1 inline-block h-1.5 w-1.5 shrink-0 ${
                  tone === "supported" ? "bg-refined" : "bg-ember"
                }`}
              />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Evidence() {
  return (
    <SectionShell id="evidence">
      <MonoKicker>{EVIDENCE.kicker}</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <SerifHeading>{EVIDENCE.headings[0]}</SerifHeading>
          <SerifHeading className="text-data/40">{EVIDENCE.headings[1]}</SerifHeading>
        </div>
        <div className="col-span-12 flex items-end md:col-span-5">
          <p className="text-xs leading-relaxed text-data/60">{EVIDENCE.scope}</p>
        </div>
      </div>

      {/* Primary causal study */}
      <div className="mt-12">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-ember">
          {EVIDENCE.study.kicker}
        </p>
        <h3 className="mt-4 max-w-4xl font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-tight tracking-tighter text-data">
          {EVIDENCE.study.heading}
        </h3>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-data/60">
          {EVIDENCE.study.config}
        </p>

        <div className="mt-10 grid grid-cols-12 gap-6 border-t border-white/20 pt-4">
          <div className="col-span-12 divide-y divide-white/20 md:col-span-7">
            {EVIDENCE.study.conditions.map((c) => (
              <ConditionRow
                key={c.name}
                name={c.name}
                value={c.value}
                descriptor={c.descriptor}
                highlight={c.name === "CONEXUS"}
              />
            ))}
          </div>
          <div className="col-span-12 grid divide-y divide-white/20 md:col-span-5 md:border-l md:border-white/20">
            {EVIDENCE.study.stats.map((s) => (
              <StatCell key={s.label} value={s.value} label={s.label} detail={s.detail} />
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <div className="relative aspect-video w-full overflow-hidden border border-white/20">
              <Image
                src={EVIDENCE.images.cracking}
                alt="High-level experiment overview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full object-center"
              />
            </div>
            <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-data/40">
              HIGH-LEVEL EXPERIMENT OVERVIEW
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="relative aspect-video w-full overflow-hidden border border-white/20">
              <Image
                src={EVIDENCE.images.searchRegime}
                alt="Technical interpretation of the measured search-regime shift"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover w-full h-full object-center"
              />
            </div>
            <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-data/40">
              SEARCH-REGIME SHIFT — TECHNICAL INTERPRETATION
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-10">
          <h4 className="font-serif text-2xl tracking-tight text-data">
            {EVIDENCE.study.divider}
          </h4>
          <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-data/50">
            {EVIDENCE.study.subheading}
          </p>
          <div className="mt-10 grid grid-cols-12 gap-x-8 gap-y-12">
            <ListBlock
              title={EVIDENCE.study.supported.title}
              points={EVIDENCE.study.supported.points}
              tone="supported"
            />
            <ListBlock
              title={EVIDENCE.study.limits.title}
              points={EVIDENCE.study.limits.points}
              tone="limits"
            />
          </div>
        </div>
      </div>

      {/* Forgetting Engine benchmarks */}
      <div className="mt-32">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-ember">
          {EVIDENCE.forgetting.kicker}
        </p>
        <h3 className="mt-4 max-w-4xl font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-tight tracking-tighter text-data">
          {EVIDENCE.forgetting.heading}
        </h3>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-data/60">
          {EVIDENCE.forgetting.body}
        </p>

        <div className="mt-10 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
          {EVIDENCE.forgetting.benchmarks.map((b) => (
            <div key={b.domain} className="col-span-12 bg-void p-6 md:col-span-6 lg:col-span-4">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ember">{b.trials}</p>
              <h4 className="mt-3 font-serif text-2xl tracking-tight text-data">{b.domain}</h4>
              <p className="mt-4 text-xs leading-relaxed text-data/70">{b.result}</p>
              <p className="mt-3 border-t border-white/20 pt-3 text-[0.65rem] uppercase leading-relaxed tracking-[0.15em] text-data/40">
                {b.scope}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-4xl border-l-2 border-ember pl-6 text-xs leading-relaxed text-data/60">
          {EVIDENCE.forgetting.caveat}
        </p>
      </div>

      {/* Complexity inversion hypothesis */}
      <div className="mt-32 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-ember">
            {EVIDENCE.inversion.kicker}
          </p>
          <h3 className="mt-4 font-serif text-[clamp(1.6rem,3.2vw,2.8rem)] leading-tight tracking-tighter text-data">
            {EVIDENCE.inversion.heading}
          </h3>
        </div>
        <div className="col-span-12 space-y-4 md:col-span-7 md:border-l md:border-white/20 md:pl-8">
          <p className="text-xs leading-relaxed text-data/70">{EVIDENCE.inversion.body}</p>
          <p className="text-xs leading-relaxed text-data/70">{EVIDENCE.inversion.body2}</p>
          <div className="mt-6 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
            <div className="col-span-12 bg-void p-6 md:col-span-6">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-refined">
                {EVIDENCE.inversion.observed.label}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-data/70">
                {EVIDENCE.inversion.observed.text}
              </p>
            </div>
            <div className="col-span-12 bg-void p-6 md:col-span-6">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
                {EVIDENCE.inversion.notEstablished.label}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-data/70">
                {EVIDENCE.inversion.notEstablished.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* KOI case study */}
      <div className="mt-32">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-ember">
          {EVIDENCE.koi.kicker}
        </p>
        <h3 className="mt-4 max-w-4xl font-serif text-[clamp(1.8rem,4vw,3.5rem)] leading-tight tracking-tighter text-data">
          {EVIDENCE.koi.heading}
        </h3>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-data/60">{EVIDENCE.koi.body}</p>

        <div className="mt-10 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
          {EVIDENCE.koi.candidates.map((c, i) => (
            <div key={c.name} className="col-span-12 bg-void p-6 md:col-span-4">
              <p className="font-serif text-2xl tracking-tight text-data">{c.name}</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-data/40">
                SIGNAL {String(i + 1).padStart(2, "0")} / RETAINED
              </p>
              <p className="mt-4 text-xs leading-relaxed text-data/60">{c.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <div className="border-t border-white/20 pt-6">
              <h4 className="font-serif text-xl tracking-tight text-refined">
                {EVIDENCE.koi.shows.title}
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-data/70">
                {EVIDENCE.koi.shows.text}
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="border-t border-white/20 pt-6">
              <h4 className="font-serif text-xl tracking-tight text-ember">
                {EVIDENCE.koi.notShows.title}
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-data/70">
                {EVIDENCE.koi.notShows.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
