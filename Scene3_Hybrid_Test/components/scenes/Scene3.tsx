"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import CausalDataCloudCanvas, { unlockVaultAudio } from "../CausalDataCloudCanvas";
import { useDataVaultStore } from "../../store/useDataVaultStore";
import type { ArmIdentifier } from "../../store/useDataVaultStore";

const MemoizedCausalDataCloudCanvas = memo(CausalDataCloudCanvas);
type StudyArm = Exclude<ArmIdentifier, "NONE">;

const ARMS: ReadonlyArray<{
  id: StudyArm;
  index: string;
  label: string;
  mean: string;
  sigma: string;
  note: string;
  escapes: string;
}> = [
  { id: "CONTROL", index: "01", label: "CONTROL", mean: "0.2466", sigma: "0.0126", note: "SINGLE-TURN BASELINE", escapes: "0 / 50 ESCAPE" },
  { id: "NEUTRAL", index: "02", label: "NEUTRAL", mean: "0.2219", sigma: "0.0221", note: "ANALYTICAL MULTI-TURN", escapes: "0 / 50 ESCAPE" },
  { id: "TOKEN_ONLY", index: "03", label: "TOKEN-ONLY", mean: "0.2258", sigma: "0.0194", note: "TOKENS WITHOUT ARCHITECTURE", escapes: "0 / 50 ESCAPE" },
  { id: "CONEXUS", index: "04", label: "CONEXUS", mean: "0.2929", sigma: "0.0147", note: "CONTRADICTION-HOLDING SEQUENCE", escapes: "50 / 50 ESCAPE" },
];

function SoundControl() {
  const audioUnlocked = useDataVaultStore((state) => state.audioUnlocked);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const failureTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (failureTimer.current !== null) window.clearTimeout(failureTimer.current);
  }, []);

  const activate = useCallback(() => {
    if (pending || useDataVaultStore.getState().audioUnlocked) return;
    setPending(true);
    setFailed(false);
    unlockVaultAudio().then((success) => {
      setPending(false);
      if (success) return;
      setFailed(true);
      failureTimer.current = window.setTimeout(() => setFailed(false), 4000);
    }).catch(() => {
      setPending(false);
      setFailed(true);
      failureTimer.current = window.setTimeout(() => setFailed(false), 4000);
    });
  }, [pending]);

  const label = audioUnlocked ? "SOUND ON" : pending ? "ENABLING" : failed ? "UNAVAILABLE" : "ENABLE SOUND";

  return (
    <button
      type="button"
      onClick={activate}
      aria-pressed={audioUnlocked}
      className="flex items-center gap-2.5 border border-white/15 bg-black/30 px-3 py-2 font-mono text-[0.55rem] tracking-[0.22em] text-white/65 uppercase backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70 motion-reduce:transition-none"
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${audioUnlocked ? "bg-[#ff5500]" : pending ? "bg-white/60 motion-safe:animate-pulse" : "bg-white/25"}`} />
      {label}
    </button>
  );
}

export default function Scene3() {
  const activeArm = useDataVaultStore((state) => state.activeArm);
  const setActiveArm = useDataVaultStore((state) => state.setActiveArm);
  const resetActiveArm = useDataVaultStore((state) => state.resetActiveArm);
  const [pinnedArm, setPinnedArm] = useState<StudyArm | null>(null);

  useEffect(() => () => resetActiveArm(), [resetActiveArm]);

  const restorePinned = useCallback(() => {
    if (pinnedArm) setActiveArm(pinnedArm);
    else resetActiveArm();
  }, [pinnedArm, resetActiveArm, setActiveArm]);

  const togglePinned = useCallback((arm: StudyArm) => {
    setPinnedArm((current) => {
      const next = current === arm ? null : arm;
      if (next) setActiveArm(next);
      else resetActiveArm();
      return next;
    });
  }, [resetActiveArm, setActiveArm]);

  return (
    <main id="data-vault-scene" className="relative h-dvh min-h-dvh w-full overflow-x-hidden overflow-y-auto bg-[#020204] text-white [isolation:isolate]">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <MemoizedCausalDataCloudCanvas />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_54%_42%,transparent_0%,rgba(2,2,4,0.15)_48%,rgba(2,2,4,0.82)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[1600px] flex-col px-5 pb-6 pt-5 sm:px-8 md:px-12 md:pb-10 md:pt-8 xl:px-16">
        <header className="flex items-start justify-between gap-5">
          <div className="max-w-3xl">
            <p className="font-mono text-[0.55rem] tracking-[0.34em] text-white/35 uppercase">03 — Architecture Isolation</p>
            <h1 className="mt-3 font-display text-[clamp(2.35rem,5.7vw,5rem)] leading-[0.92] tracking-[-0.045em] text-white">Primary Causal Study</h1>
            <p className="mt-3 max-w-2xl font-mono text-[0.58rem] leading-relaxed tracking-[0.2em] text-white/45 uppercase sm:text-[0.62rem]">
              Four controlled conditions · 200 canonical runs · one equation-derived field
            </p>
          </div>
          <div className="shrink-0"><SoundControl /></div>
        </header>

        <div className="flex min-h-[34dvh] flex-1 items-end pb-4 pt-8 md:min-h-[28dvh]">
          <div className="max-w-md border-l border-white/15 pl-4 font-mono text-[0.53rem] leading-relaxed tracking-[0.18em] text-white/35 uppercase backdrop-blur-[2px]">
            <p className="text-white/55">Δv = μ · K &gt; √(2GM / r₀)</p>
            <p className="mt-1">GM 34 · K 10 · r₀ = measured distance × 35</p>
            <p className="mt-1 text-[#ff5500]/70">{activeArm === "NONE" ? "Select a condition to activate its field" : `${activeArm.replace("_", "-")} · condition isolated`}</p>
          </div>
        </div>

        <section aria-label="Experimental conditions" className="mt-auto">
          <p className="mb-3 font-mono text-[0.52rem] tracking-[0.24em] text-white/35 uppercase">
            Hover, focus, or tap to isolate · tap again to release
          </p>
          <div className="grid grid-cols-2 border-y border-white/12 md:grid-cols-4 md:divide-x md:divide-white/10">
            {ARMS.map((arm) => {
              const isActive = activeArm === arm.id;
              const isPinned = pinnedArm === arm.id;
              const isDimmed = activeArm !== "NONE" && !isActive;
              const isConexus = arm.id === "CONEXUS";
              return (
                <button
                  key={arm.id}
                  type="button"
                  aria-pressed={isPinned}
                  aria-label={`${arm.label}. Mean semantic distance ${arm.mean}. ${arm.escapes}.`}
                  onPointerEnter={(event) => { if (event.pointerType === "mouse") setActiveArm(arm.id); }}
                  onPointerLeave={(event) => { if (event.pointerType === "mouse") restorePinned(); }}
                  onFocus={() => setActiveArm(arm.id)}
                  onBlur={restorePinned}
                  onClick={() => togglePinned(arm.id)}
                  className={`group relative min-h-32 border-white/10 px-3 py-4 text-left transition-all duration-500 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70 motion-reduce:transition-none md:min-h-40 md:px-5 md:py-5 ${isDimmed ? "opacity-30" : "opacity-100"} ${isActive ? "bg-white/[0.035]" : "bg-transparent"} odd:border-r md:odd:border-r-0 max-md:[&:nth-child(-n+2)]:border-b`}
                >
                  <span className="font-mono text-[0.5rem] tracking-[0.28em] text-white/30">{arm.index}</span>
                  <p className={`mt-2 font-mono text-[0.62rem] tracking-[0.2em] ${isConexus ? "text-[#ff5500]" : "text-white/75"}`}>{arm.label}</p>
                  <p className={`mt-2 font-display text-[clamp(1.8rem,3vw,2.8rem)] leading-none tracking-tight ${isConexus ? "italic text-[#ff5500]" : "text-white"}`}>{arm.mean}</p>
                  <p className="mt-2 font-mono text-[0.48rem] leading-relaxed tracking-[0.12em] text-white/35 uppercase">{arm.note}</p>
                  <p className={`mt-1 font-mono text-[0.48rem] tracking-[0.12em] ${isConexus ? "text-[#ff5500]/65" : "text-white/25"}`}>σ {arm.sigma} · {arm.escapes}</p>
                  <span className={`absolute inset-x-0 bottom-0 h-px origin-left transition-transform duration-500 motion-reduce:transition-none ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} ${isConexus ? "bg-[#ff5500]" : "bg-white/45"}`} />
                </button>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 pt-4 font-mono text-[0.5rem] leading-relaxed tracking-[0.15em] text-white/30 uppercase sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-3xl">Token exposure alone is statistically indistinguishable from neutral (d +0.1835, p 0.361). The tested contradiction-holding architecture produced the expansion.</p>
            <p className="shrink-0 text-white/20">Visualization equation ≠ study estimator</p>
          </div>
        </section>
      </div>
    </main>
  );
}