import type { ReactNode } from "react";

export function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative border-t border-white/20 bg-void ${className}`}>
      <div className="mx-auto max-w-[1600px] px-4 py-12 md:px-8 md:py-24">{children}</div>
    </section>
  );
}

export function MonoKicker({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.35em] text-data/50">
      <span className="inline-block h-1 w-1 bg-ember" />
      {children}
    </p>
  );
}

export function SerifHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-[clamp(2.4rem,6vw,6rem)] leading-[0.95] tracking-tighter text-data ${className}`}
    >
      {children}
    </h2>
  );
}

export function StatCell({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="border-l border-white/20 p-6 md:p-8">
      <p className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tighter text-ember">
        {value}
      </p>
      <p className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-data">{label}</p>
      <p className="mt-4 text-xs leading-relaxed text-data/60">{detail}</p>
    </div>
  );
}

export function ConditionRow({
  name,
  value,
  descriptor,
  highlight = false,
}: {
  name: string;
  value: string;
  descriptor: string;
  highlight?: boolean;
}) {
  return (
    <div className="grid grid-cols-12 items-baseline gap-2 py-4">
      <span className={`col-span-4 font-serif text-xl tracking-tight md:text-2xl ${highlight ? "text-ember" : "text-data"}`}>
        {name}
      </span>
      <span className={`col-span-3 text-right font-serif text-2xl md:text-4xl ${highlight ? "text-ember" : "text-data"}`}>
        {value}
      </span>
      <span className="col-span-5 text-right text-[0.65rem] uppercase tracking-[0.2em] text-data/50">
        {descriptor}
      </span>
    </div>
  );
}
