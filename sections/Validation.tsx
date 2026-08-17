import { SectionShell, MonoKicker, SerifHeading, ConditionRow, StatCell } from "@/components/primitives";
import {
  FOUR_ARM,
  FOUR_ARM_STATS,
  FOUR_ARM_SUMMARY,
  FOUR_ARM_CAVEAT,
  EVIDENCE_LINK,
} from "@/content/vault";

export default function Validation() {
  return (
    <SectionShell id="validation">
      <MonoKicker>Four-Arm Causal Validation</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <SerifHeading>
            The full architecture produced the largest measured shift.
          </SerifHeading>
        </div>
        <div className="col-span-12 flex items-end md:col-span-4">
          <p className="text-xs leading-relaxed text-data/60">{FOUR_ARM_SUMMARY}</p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-6 border-t border-white/20 pt-4">
        <div className="col-span-12 divide-y divide-white/20 md:col-span-7">
          {FOUR_ARM.map((c) => (
            <ConditionRow
              key={c.name}
              name={c.name}
              value={c.value}
              descriptor={c.descriptor}
              highlight={c.name === "CONEXUS"}
            />
          ))}
        </div>
        <div className="col-span-12 grid divide-y divide-white/20 border-white/20 md:col-span-5 md:border-l">
          {FOUR_ARM_STATS.map((s) => (
            <StatCell key={s.label} value={s.value} label={s.label} detail={s.detail} />
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-6 border-t border-white/20 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-xs leading-relaxed text-data/50">{FOUR_ARM_CAVEAT}</p>
        <a
          href={EVIDENCE_LINK}
          className="shrink-0 text-[0.65rem] uppercase tracking-[0.3em] text-ember underline-offset-4 hover:underline"
        >
          View the Full Validation →
        </a>
      </div>
    </SectionShell>
  );
}
