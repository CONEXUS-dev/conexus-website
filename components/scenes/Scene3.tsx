"use client";

import { useEffect, useRef, useState } from "react";
import { useDataVaultStore, type ArmIdentifier } from "../../store/useDataVaultStore";
import CausalDataCloudCanvas from "../CausalDataCloudCanvas";

/* 
  Tailwind v4 Setup Note: Ensure globals.css has these theme variables registered.
  @theme { 
    --font-editorial: "Fraunces", "Playfair Display", Georgia, serif; 
    --font-mono: "JetBrains Mono", ui-monospace, monospace; 
  } 
*/

const ARMS: Array<{ id: Exclude<ArmIdentifier, "NONE">; index: string; name: string; value: string; sigma: string; note: string; conexus?: boolean }> = [
  { id: "CONTROL", index: "01", name: "CONTROL", value: "0.2466", sigma: "0.0126", note: "SINGLE-TURN BASELINE" },
  { id: "NEUTRAL", index: "02", name: "NEUTRAL", value: "0.2219", sigma: "0.0221", note: "ANALYTICAL MULTI-TURN PROMPT" },
  { id: "TOKEN_ONLY", index: "03", name: "TOKEN-ONLY", value: "0.2258", sigma: "0.0194", note: "EMOJI EXPOSURE WITHOUT THE ARCHITECTURE" },
  { id: "CONEXUS", index: "04", name: "CONEXUS", value: "0.2929", sigma: "0.0147", note: "COMPLETE CONTRADICTION-HOLDING SEQUENCE", conexus: true },
];

function ScrollTelemetry() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const read = () => {
      const el = document.getElementById("data-vault-scene");
      let p = 0;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      } else {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      }
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const stage =
    progress < 0.12
      ? "VAULT SEALED — 200 RUNS IN ORBIT"
      : progress < 0.45
        ? "IGNITION — Δv = μ · K VS ESCAPE VELOCITY √(2GM / r₀)"
        : progress < 0.8
          ? "SUB-ESCAPE ARMS COLLAPSING — CONEXUS BREAKING ORBIT"
          : "ARCHITECTURE CONFIRMED — d = +3.91 vs TOKEN-ONLY";

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex items-center justify-between px-6 font-mono text-[0.65rem] tracking-[0.25em] text-white/60 uppercase drop-shadow-sm md:px-12 xl:px-16">
      <span>{stage}</span>
      <span className={`transition-opacity duration-700 ${progress > 0.15 ? "opacity-0" : "opacity-100"}`}>
        Scroll — initiate the isolation sequence ↓
      </span>
    </div>
  );
}

export default function Scene3() {
  const setActiveArm = useDataVaultStore((s) => s.setActiveArm);
  const resetActiveArm = useDataVaultStore((s) => s.resetActiveArm);
  const activeArm = useDataVaultStore((s) => s.activeArm);
  
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "160px 0px" });
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section id="data-vault-scene" ref={sectionRef} data-vault-section className="relative h-[300vh] w-full bg-black text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <div className={`fixed inset-0 -z-10 pointer-events-none transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
          <CausalDataCloudCanvas />
        </div>

        <div className="relative z-10 pointer-events-none flex h-full flex-col px-6 md:px-12 xl:px-16">
          <header className="pt-16 md:pt-24">
            <p className="font-mono text-[0.6rem] tracking-[0.35em] text-white/30 uppercase">03 — Architecture Isolation</p>
            <h2 className="mt-3 font-editorial text-[clamp(2.5rem,6vw,5rem)] text-white tracking-tight leading-[0.95]">
              Primary Causal Study
            </h2>
            <p className="mt-4 max-w-3xl font-mono text-[0.75rem] tracking-widest text-white/70 uppercase">
              Strong results. Explicit limits. Four controlled conditions. Two hundred independent runs.
            </p>
          </header>

          <div className="mt-auto pb-8 md:pb-14">
            <p className="font-mono text-[0.7rem] tracking-[0.25em] text-white/60 uppercase mb-4">
              Hover an arm to isolate its runs — sound on
            </p>

            <div className="grid grid-cols-4 gap-0 divide-x divide-white/10 border-y border-white/10 py-5 pointer-events-auto md:gap-4 md:py-12">
              {ARMS.map((arm) => {
                const isActive = activeArm === arm.id;
                const isDimmed = activeArm !== "NONE" && !isActive;
                return (
                  <button
                    key={arm.id}
                    type="button"
                    onMouseEnter={() => setActiveArm(arm.id)}
                    onMouseLeave={resetActiveArm}
                    onFocus={() => setActiveArm(arm.id)}
                    onBlur={resetActiveArm}
                    aria-label={`${arm.name} — mean semantic distance ${arm.value}`}
                    className={`group relative min-w-0 cursor-crosshair px-2 py-4 text-left outline-none transition-all duration-500 first:pl-0 md:px-6 md:py-2 ${isDimmed ? "opacity-30" : "opacity-100"}`}
                  >
                    <span className="font-mono text-[0.65rem] tracking-[0.3em] text-white/55">{arm.index}</span>
                    <p className={`mt-2 font-mono text-[0.75rem] tracking-[0.25em] ${arm.conexus ? "italic text-[#ff5500]" : "text-white/90"}`}>{arm.name}</p>
                    <p className={`mt-3 font-editorial text-[clamp(1.9rem,3vw,2.9rem)] leading-none tracking-tight ${arm.conexus ? "italic text-[#ff5500]" : "text-white"}`}>{arm.value}</p>
                    <p className="mt-3 font-mono text-[0.65rem] leading-relaxed tracking-wider text-white/65 uppercase drop-shadow-sm">{arm.note}</p>
                    <p className="mt-2 font-mono text-[0.65rem] tracking-wider text-white/55">μ {arm.value} · σ {arm.sigma} · n 50</p>
                    <span className={`absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${arm.conexus ? "bg-[#ff5500]" : "bg-white/40"} ${isActive ? "scale-x-100" : ""}`} />
                  </button>
                );
              })}
            </div>

            <p className="mt-5 hidden font-mono text-[0.7rem] leading-relaxed tracking-wider text-white/65 uppercase drop-shadow-sm sm:block">
              Verdict — <span className="italic text-[#ff5500]/80">Architecture confirmed.</span> Token exposure alone is statistically indistinguishable from neutral (d +0.1835, p 0.361). Emojis do not drive the expansion — the paradox-holding architecture does.
            </p>
          </div>
        </div>

        <ScrollTelemetry />
      </div>
    </section>
  );
}
