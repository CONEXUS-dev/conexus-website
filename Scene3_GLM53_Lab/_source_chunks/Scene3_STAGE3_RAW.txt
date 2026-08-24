"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import CausalDataCloudCanvas, { unlockVaultAudio } from "../CausalDataCloudCanvas";
import { useDataVaultStore } from "../../store/useDataVaultStore";
import type { ArmIdentifier } from "../../store/useDataVaultStore";

/* The WebGL engine never needs direct pointer input (parallax listens on the
 * window), so memoizing it keeps store-driven overlay re-renders cheap. */
const MemoizedCausalDataCloudCanvas = memo(CausalDataCloudCanvas);

/* ============================================================================
 * CONDITION METADATA — canonical values from the 4-arm validation report
 * ==========================================================================*/

interface ArmColumn {
  arm: ArmIdentifier;
  label: string;
  mean: string;
  caption: string;
  statLine: string;
  conexus: boolean;
}

const ARM_COLUMNS: readonly ArmColumn[] = [
  {
    arm: "CONTROL",
    label: "CONTROL",
    mean: "0.2466",
    caption: "SINGLE-TURN BASELINE",
    statLine: "μ 0.246628 ± 0.012618",
    conexus: false,
  },
  {
    arm: "NEUTRAL",
    label: "NEUTRAL",
    mean: "0.2219",
    caption: "ANALYTICAL MULTI-TURN PROMPT",
    statLine: "μ 0.221939 ± 0.022091",
    conexus: false,
  },
  {
    arm: "TOKEN_ONLY",
    label: "TOKEN-ONLY",
    mean: "0.2258",
    caption: "EMOJI EXPOSURE WITHOUT THE ARCHITECTURE",
    statLine: "μ 0.225751 ± 0.019368",
    conexus: false,
  },
  {
    arm: "CONEXUS",
    label: "CONEXUS",
    mean: "0.2929",
    caption: "COMPLETE CONTRADICTION-HOLDING SEQUENCE",
    statLine: "μ 0.292905 ± 0.014698",
    conexus: true,
  },
];

/* ============================================================================
 * SCROLL TELEMETRY STAGES
 * Thresholds mirror the core engine's energy window (smoothstep 0.16 → 0.74
 * of local scene progress) so the language tracks the actual simulation.
 * ==========================================================================*/

const TELEMETRY_STAGES = [
  { at: 0, label: "200 RUNS IN ORBIT" },
  { at: 0.16, label: "IGNITION" },
  { at: 0.4, label: "BOUND CONDITIONS COLLAPSING" },
  { at: 0.74, label: "ESCAPE THRESHOLD CROSSED" },
  { at: 0.92, label: "ARCHITECTURE ISOLATED" },
] as const;

function clamp01(value: number): number {
  return value < 0 ? 0 : value > 1 ? 1 : value;
}

/* ============================================================================
 * SOUND CONTROL — explicit user-activation unlock
 *
 * unlockVaultAudio() is invoked DIRECTLY inside the click handler, so the
 * AudioContext is created within a legitimate activation task. "SOUND ON"
 * is rendered only from the store flag that the engine itself sets after the
 * context genuinely reaches a running state.
 * ==========================================================================*/

function SoundControl() {
  const audioUnlocked = useDataVaultStore((state) => state.audioUnlocked);
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState(false);
  const failureTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (failureTimerRef.current !== null) {
        window.clearTimeout(failureTimerRef.current);
        failureTimerRef.current = null;
      }
    };
  }, []);

  const handleActivate = useCallback(() => {
    if (pending || useDataVaultStore.getState().audioUnlocked) {
      return;
    }
    setPending(true);
    setFailed(false);

    const showFailure = () => {
      setPending(false);
      setFailed(true);
      if (failureTimerRef.current !== null) {
        window.clearTimeout(failureTimerRef.current);
      }
      failureTimerRef.current = window.setTimeout(() => {
        setFailed(false);
        failureTimerRef.current = null;
      }, 4000);
    };

    // Called directly inside the user-activation event.
    unlockVaultAudio()
      .then((succeeded) => {
        if (succeeded) {
          setPending(false);
        } else {
          showFailure();
        }
      })
      .catch(() => {
        showFailure();
      });
  }, [pending]);

  const label = audioUnlocked
    ? "SOUND ON"
    : pending
      ? "ENABLING"
      : failed
        ? "SOUND UNAVAILABLE"
        : "ENABLE SOUND";

  const indicatorClass = audioUnlocked
    ? "bg-[#ff5500] motion-safe:animate-pulse"
    : pending
      ? "bg-white/60 motion-safe:animate-pulse"
      : failed
        ? "bg-white/40"
        : "bg-white/25";

  return (
    <div className="absolute right-4 top-4 md:right-10 md:top-8">
      <button
        type="button"
        onClick={handleActivate}
        aria-pressed={audioUnlocked}
        aria-label={`Data vault sonification. ${audioUnlocked ? "Sound is on." : "Enable sound."}`}
        className="pointer-events-auto flex items-center gap-2.5 border border-white/15 bg-black/20 px-3.5 py-2 font-mono text-[0.6rem] tracking-[0.25em] text-white/70 uppercase transition-colors duration-300 hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/70 motion-reduce:transition-none"
      >
        <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${indicatorClass}`} />
        {label}
      </button>
    </div>
  );
}

/* ============================================================================
 * TELEMETRY STRIP — local Scene 3 progression
 *
 * Measures the #data-vault-scene runway with the same raw formula the core
 * engine uses. DOM reads are throttled: passive listeners only mark dirty and
 * one rAF loop performs at most one measurement per frame. The fill width is
 * written directly to the DOM (no per-frame React state); React state updates
 * only when the stage label actually changes.
 * ==========================================================================*/

function TelemetryStrip({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  const fillRef = useRef<HTMLDivElement | null>(null);
  const readoutRef = useRef<HTMLSpanElement | null>(null);
  const [stageIndex, setStageIndex] = useState(0);

  useEffect(() => {
    let disposed = false;
    let rafId = 0;
    let dirty = true;
    let lastMeasure = performance.now();
    let currentStage = 0;

    const measure = () => {
      const element = sectionRef.current;
      if (!element) {
        return;
      }
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const span = rect.height + viewportHeight;
      const raw = clamp01((viewportHeight - rect.top) / (span > 0 ? span : 1));

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${raw})`;
      }
      if (readoutRef.current) {
        readoutRef.current.textContent = raw.toFixed(2);
      }

      let nextStage = 0;
      for (let i = 0; i < TELEMETRY_STAGES.length; i++) {
        if (raw >= TELEMETRY_STAGES[i].at) {
          nextStage = i;
        }
      }
      if (nextStage !== currentStage) {
        currentStage = nextStage;
        setStageIndex(nextStage);
      }
    };

    const markDirty = () => {
      dirty = true;
    };

    const tick = (now: number) => {
      if (disposed) {
        return;
      }
      if (dirty || now - lastMeasure >= 500) {
        measure();
        dirty = false;
        lastMeasure = now;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", markDirty, { passive: true });
    window.addEventListener("resize", markDirty, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", markDirty);
      window.removeEventListener("resize", markDirty);
    };
  }, [sectionRef]);

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none px-6 pb-4 md:px-12 md:pb-5">
      <div className="flex items-baseline justify-between font-mono text-[0.55rem] tracking-[0.25em] text-white/40 uppercase">
        <span className="text-white/60">{TELEMETRY_STAGES[stageIndex].label}</span>
        <span ref={readoutRef} className="text-white/30">
          0.00
        </span>
      </div>
      <div className="mt-2 h-px w-full bg-white/10">
        <div
          ref={fillRef}
          className="h-full w-full origin-left bg-white/50"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}

/* ============================================================================
 * CONDITION GRID — four interactive columns
 *
 * Hover, keyboard focus, and tap all drive the store's activeArm, which the
 * WebGL field reads imperatively for focus treatment. Buttons are semantic
 * and keyboard accessible; focus states are visible.
 * ==========================================================================*/

function ConditionGrid() {
  const activeArm = useDataVaultStore((state) => state.activeArm);
  const setActiveArm = useDataVaultStore((state) => state.setActiveArm);
  const resetActiveArm = useDataVaultStore((state) => state.resetActiveArm);

  return (
    <div
      role="group"
      aria-label="Experimental conditions — mean semantic distance from centroid"
      className="pointer-events-auto mt-8 grid grid-cols-1 divide-y divide-white/10 border-y border-white/10 md:grid-cols-4 md:divide-y-0 md:divide-x"
    >
      {ARM_COLUMNS.map((column, index) => {
        const isActive = activeArm === column.arm;
        const isDimmed = activeArm !== "NONE" && !isActive;

        return (
          <button
            key={column.arm}
            type="button"
            onMouseEnter={() => setActiveArm(column.arm)}
            onMouseLeave={resetActiveArm}
            onFocus={() => setActiveArm(column.arm)}
            onBlur={resetActiveArm}
            onClick={() => setActiveArm(column.arm)}
            aria-label={`${column.label}: mean semantic distance ${column.mean}. ${column.caption}. Isolate this condition's fifty runs in the field.`}
            className={`group flex w-full flex-col items-start gap-3 px-1 py-7 text-left transition-opacity duration-300 hover:bg-white/[0.03] focus-visible:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/60 focus-visible:ring-inset motion-reduce:transition-none md:px-6 md:py-10 ${
              isDimmed ? "opacity-45" : "opacity-100"
            }`}
          >
            <span className="font-mono text-[0.55rem] tracking-[0.3em] text-white/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={`font-editorial text-2xl tracking-tight md:text-[1.65rem] ${
                column.conexus ? "italic text-[#ff5500]" : "text-white"
              }`}
            >
              {column.label}
            </span>
            <span
              className={`font-editorial text-4xl leading-none tracking-tight transition-colors duration-300 md:text-5xl motion-reduce:transition-none ${
                column.conexus
                  ? "text-[#ff5500]"
                  : isActive
                    ? "text-white"
                    : "text-white/85"
              }`}
            >
              {column.mean}
            </span>
            <span className="font-mono text-[0.55rem] leading-relaxed tracking-[0.2em] text-white/40 uppercase">
              {column.caption}
            </span>
            <span className="font-mono text-[0.55rem] tracking-[0.15em] text-white/25">
              {column.statLine}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================================
 * FINDINGS — exact pairwise statistics with explicit comparison labels
 * ==========================================================================*/

const FINDINGS = [
  {
    tag: "PRIMARY ISOLATION TEST — TOKEN-ONLY vs NEUTRAL",
    big: "+0.1835",
    line: "COHEN'S d = +0.18349920433799635 · WELCH p = 0.36117368966555935 · NOT SIGNIFICANT · BOOTSTRAP 95% CI [−0.004360, +0.011882] INCLUDES ZERO",
    body: "Emoji exposure without the paradox architecture is statistically indistinguishable from the length-matched neutral multi-turn condition. Token priming alone is not the mechanism.",
  },
  {
    tag: "THE GAP — TOKEN-ONLY vs CONEXUS",
    big: "+3.9060",
    line: "COHEN'S d = +3.9060439021660143 · WELCH p = 2.2425454325107396e-34 · BOOTSTRAP 95% CI [+0.060453, +0.073615] EXCLUDES ZERO",
    body: "Token exposure alone against the complete contradiction-holding sequence — the largest effect in the study.",
  },
  {
    tag: "AGAINST BASELINE — NEUTRAL vs CONEXUS",
    big: "+3.7824",
    line: "COHEN'S d = +3.782416152124283 · WELCH p = 2.969995542281042e-32",
    body: "The paradox architecture against the neutral multi-turn baseline — expansion that survives every pre-registered test.",
  },
] as const;

/* ============================================================================
 * SCENE 3 — PRIMARY CAUSAL STUDY
 *
 * Layering:
 *   z-0   sticky WebGL field (pointer-events-none: touch scroll can never be
 *         swallowed by the canvas)
 *   z-20  sticky instrument HUD (sound control + telemetry)
 *   z-10  scrolling editorial overlay (pointer-events-none except interactive
 *         elements), pulled up over the sticky field with negative margins
 * ==========================================================================*/

export default function Scene3() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section id="data-vault-scene" ref={sectionRef} className="relative bg-[#020204]">
      {/* --- Sticky WebGL visual layer --- */}
      <div className="pointer-events-none sticky top-0 z-0 h-screen w-full overflow-hidden">
        <MemoizedCausalDataCloudCanvas />
      </div>

      {/* --- Sticky instrument HUD, above the scrolling content --- */}
      <div className="pointer-events-none sticky top-0 z-20 -mt-[100vh] h-screen w-full">
        <SoundControl />
        <TelemetryStrip sectionRef={sectionRef} />
      </div>

      {/* --- Scrolling editorial overlay --- */}
      <div className="pointer-events-none relative z-10 -mt-[100vh]">
        {/* Entry screen */}
        <div className="flex h-screen flex-col justify-between px-6 pb-28 pt-16 md:px-12 md:pt-10">
          <header className="max-w-3xl">
            <p className="font-mono text-[0.55rem] tracking-[0.3em] text-white/25">
              SC.03 — CAUSAL VALIDATION
            </p>
            <h1 className="mt-5 font-editorial text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-white">
              Primary Causal Study
            </h1>
            <p className="mt-6 max-w-xl font-mono text-[0.65rem] leading-relaxed tracking-widest text-white/50 uppercase">
              STRONG RESULTS. EXPLICIT LIMITS. FOUR CONTROLLED CONDITIONS. TWO
              HUNDRED INDEPENDENT RUNS.
            </p>
          </header>
          <p className="font-mono text-[0.55rem] tracking-[0.25em] text-white/35 uppercase">
            Scroll — the centroid becomes a gravity well
          </p>
        </div>

        {/* Escape runway: room for the separation to develop */}
        <div className="flex h-[110vh] items-center justify-center">
          <p className="max-w-md px-6 text-center font-mono text-[0.6rem] leading-loose tracking-[0.25em] text-white/40 uppercase">
            No condition is hard-coded to break free.
            <br />
            Each run's escape is computed from its own
            <br />
            measured distance against a derived threshold.
          </p>
        </div>

        {/* Interactive data grid */}
        <div className="flex min-h-screen items-center px-6 py-24 md:px-12">
          <div className="w-full">
            <p className="font-mono text-[0.6rem] tracking-[0.25em] text-white/40 uppercase">
              Four conditions — mean semantic distance from centroid · n = 50 each
            </p>
            <ConditionGrid />
            <p className="mt-6 font-mono text-[0.55rem] tracking-[0.25em] text-white/30 uppercase">
              Hover, focus, or tap a condition to isolate its fifty runs in the field
            </p>
          </div>
        </div>

        {/* Findings */}
        <div className="flex min-h-screen items-center px-6 py-24 md:px-12">
          <div className="w-full max-w-4xl">
            <p className="font-mono text-[0.6rem] tracking-[0.25em] text-white/40 uppercase">
              RESULTS — PAIRWISE EFFECT SIZES
            </p>
            <h2 className="mt-4 font-editorial text-3xl tracking-tight text-white md:text-4xl">
              Strong results.
            </h2>

            <div className="mt-10">
              {FINDINGS.map((finding) => (
                <div
                  key={finding.tag}
                  className="grid gap-4 border-t border-white/10 py-8 md:grid-cols-[260px_1fr] md:gap-8"
                >
                  <p className="font-mono text-[0.55rem] leading-relaxed tracking-[0.25em] text-white/40 uppercase">
                    {finding.tag}
                  </p>
                  <div>
                    <p className="font-editorial text-3xl tracking-tight text-white md:text-4xl">
                      d = {finding.big}
                    </p>
                    <p className="mt-2 font-mono text-[0.55rem] leading-relaxed tracking-[0.15em] text-white/45">
                      {finding.line}
                    </p>
                    <p className="mt-4 max-w-xl font-editorial text-base leading-relaxed text-white/75 md:text-lg">
                      {finding.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-white/10 pt-6 font-mono text-[0.55rem] leading-relaxed tracking-[0.2em] text-white/30 uppercase">
              OMNIBUS — 4-ARM ANOVA F = 171.5605, p = 1.44e-54 · KRUSKAL-WALLIS
              H = 134.5162, p = 5.75e-29
            </p>

            <div className="mt-10 border border-white/10 px-5 py-5 md:px-7">
              <p className="font-mono text-[0.55rem] tracking-[0.25em] text-white/35 uppercase">
                Dose-response ladder — mean semantic distance
              </p>
              <p className="mt-3 font-mono text-[0.7rem] leading-relaxed tracking-wide text-white/80 md:text-[0.8rem]">
                CONTROL <span className="text-white/40">(0.2466)</span> &gt;
                TOKEN-ONLY <span className="text-white/40">(0.2258)</span> ≈
                NEUTRAL <span className="text-white/40">(0.2219)</span>{" "}
                <span className="text-[#ff5500]">&lt;&lt;</span>{" "}
                <span className="text-[#ff5500]">CONEXUS (0.2929)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Limits and verdict */}
        <div className="flex min-h-screen flex-col justify-center px-6 pb-32 pt-24 md:px-12">
          <div className="w-full max-w-4xl">
            <p className="font-mono text-[0.6rem] tracking-[0.25em] text-white/40 uppercase">
              LIMITS — WHAT THIS STUDY DOES AND DOES NOT SHOW
            </p>
            <h2 className="mt-4 font-editorial text-3xl tracking-tight text-white md:text-4xl">
              Explicit limits.
            </h2>
            <p className="mt-5 font-mono text-[0.55rem] leading-relaxed tracking-[0.2em] text-white/30 uppercase">
              ENGINE GEMINI-3.1-PRO-PREVIEW · TEMPERATURE 0.7 · EMBEDDINGS
              BAAI/BGE-SMALL-EN-V1.5 · PARADIGM: ALTERNATIVE USES TEST ·
              PRE-REGISTERED
            </p>

            <div className="mt-10 max-w-3xl space-y-8">
              <div className="border-l border-white/15 pl-5 md:pl-6">
                <p className="font-mono text-[0.55rem] tracking-[0.25em] text-white/40 uppercase">
                  One configuration, honestly bounded
                </p>
                <p className="mt-2 font-editorial text-base leading-relaxed text-white/70 md:text-lg">
                  These results support architecture isolation in this tested
                  configuration — one frontier engine, one embedding space, one
                  divergent-thinking paradigm. They are not a universal law
                  about all AI systems.
                </p>
              </div>
              <div className="border-l border-white/15 pl-5 md:pl-6">
                <p className="font-mono text-[0.55rem] tracking-[0.25em] text-white/40 uppercase">
                  The escape is a visualization, not the estimator
                </p>
                <p className="mt-2 font-editorial text-base leading-relaxed text-white/70 md:text-lg">
                  Every orb's breakout is computed from that run's measured
                  semantic distance against a derived escape threshold — a
                  faithful data-driven rendering of the empirical numbers. The
                  escape equation itself was not part of the original
                  statistical test.
                </p>
              </div>
              <div className="border-l border-white/15 pl-5 md:pl-6">
                <p className="font-mono text-[0.55rem] tracking-[0.25em] text-white/40 uppercase">
                  Length is documented, not ignored
                </p>
                <p className="mt-2 font-editorial text-base leading-relaxed text-white/70 md:text-lg">
                  Arm 4a's opening prompt runs 6.0% shorter than the CONEXUS
                  reference (513 vs 546 characters), inside the pre-registered
                  10% gate. The neutral prompt is 18.3% longer and still
                  produced compression — length alone cannot explain expansion.
                </p>
              </div>
              <div className="border-l border-white/15 pl-5 md:pl-6">
                <p className="font-mono text-[0.55rem] tracking-[0.25em] text-white/40 uppercase">
                  Judged quality is still sealed
                </p>
                <p className="mt-2 font-editorial text-base leading-relaxed text-white/70 md:text-lg">
                  Phase 2 blind judging of the 2,000-idea corpus remains sealed
                  and unexecuted. This study measures semantic dispersion, not
                  evaluated usefulness.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 max-w-3xl">
            <p className="font-mono text-[0.6rem] tracking-[0.3em] text-[#ff5500]/80 uppercase">
              Architecture isolated
            </p>
            <p className="mt-8 font-editorial text-2xl leading-snug tracking-tight text-white md:text-4xl">
              The active ingredient is not the tokens, not the turn count, not
              the topics. It is the{" "}
              <em className="italic text-[#ff5500]">unresolved contradiction</em>
              , held simultaneously, across the whole sequence.
            </p>
            <p className="mt-10 font-mono text-[0.55rem] tracking-[0.25em] text-white/30 uppercase">
              VERDICT — ARCHITECTURE CONFIRMED · TOKEN EXPOSURE ALONE DOES NOT
              DRIVE THE EXPANSION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}