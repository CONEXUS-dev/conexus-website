import { useState, useRef } from "react";
import { RitualButton } from "./RitualButton";
import type { DemoDream, DemoMirror } from "./demoData";

const CINZEL: React.CSSProperties = { fontFamily: "'Cinzel', Georgia, serif" };

function humanRenderingMode(mode: string): string {
  switch (mode) {
    case "FULL_LIKENESS":     return "Your likeness preserved";
    case "GUIDED_FIGURE":     return "Guided figure";
    case "SYMBOLIC_FIGURE":   return "Symbolic figure";
    case "ABSTRACT_PRESENCE": return "Abstract presence";
    case "ARCHETYPAL_ONLY":   return "Pure symbol · no likeness";
    default:                  return mode;
  }
}

const LIKENESS_COLORS: Record<number, string> = {
  0: "text-purple-300/80 border-purple-400/30",
  1: "text-blue-300/80 border-blue-400/30",
  2: "text-teal-300/80 border-teal-400/30",
  3: "text-amber-300/80 border-amber-400/30",
  4: "text-rose-300/80 border-rose-400/30",
};

interface Props {
  dream: DemoDream;
  mirror: DemoMirror;
  baseUrl: string;
  onReturn: () => void;
}

// Extra second so "Reflection sealed into Dream History." has time to land.
const SEALING_DELAY_MS = 2400;

export default function DemoChosenMirror({ dream, mirror, baseUrl, onReturn }: Props) {
  const [sealing, setSealing] = useState(false);
  const fired = useRef(false);

  const rm = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  function handleReturn() {
    if (fired.current) return;
    fired.current = true;
    setSealing(true);
    const delay = rm.current ? 0 : SEALING_DELAY_MS;
    setTimeout(() => onReturn(), delay);
  }

  return (
    <div
      className="relative min-h-dvh flex flex-col overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%, hsl(215 40% 7%) 0%, hsl(220 45% 4%) 45%, hsl(225 50% 2%) 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(251,191,36,0.04) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 pt-10 sm:pt-14 pb-16 px-6 flex flex-col items-center gap-8 max-w-2xl mx-auto w-full">
        <div className="text-center">
          <p className="text-amber-400/60 tracking-[0.35em] text-xs uppercase mb-2" style={CINZEL}>
            Mirror Chosen
          </p>
          <h2 className="text-white text-xl font-light" style={CINZEL}>
            {mirror.tierName}
          </h2>
          <p className="text-white/40 text-sm mt-1">{mirror.variantLabel}</p>
        </div>

        {/* ── Chosen mirror image with sealing glow overlay ──── */}
        <div
          className="relative w-full max-w-xs rounded-2xl overflow-hidden border border-amber-400/30"
          style={{
            boxShadow: sealing
              ? "0 0 60px rgba(251,191,36,0.22), 0 0 40px rgba(251,191,36,0.08)"
              : "0 0 40px rgba(251,191,36,0.08)",
            transition: "box-shadow 400ms ease",
          }}
        >
          <div className="absolute top-3 left-3 z-10 bg-amber-400/90 text-black text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full">
            CHOSEN
          </div>

          <img
            src={`${baseUrl}demo/${mirror.imageFile}`}
            alt={mirror.variantLabel}
            className="w-full object-cover"
          />

          {/* Sealing glow — soft bloom over the mirror image */}
          {sealing && (
            <div
              key="sealing-glow"
              className="demo-sealing-glow absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 40%, rgba(251,191,36,0.50) 0%, rgba(200,140,20,0.18) 45%, transparent 75%)",
              }}
            />
          )}
        </div>

        {/* Sealing text — fades in when sealing state activates */}
        <p
          aria-live="polite"
          style={{
            ...CINZEL,
            fontSize: "0.64rem",
            letterSpacing: "0.24em",
            color: "rgba(212,175,55,0.65)",
            textTransform: "uppercase",
            textAlign: "center",
            opacity: sealing ? 1 : 0,
            transform: sealing ? "translateY(0)" : "translateY(5px)",
            transition: rm.current ? "none" : "opacity 500ms ease, transform 500ms ease",
            minHeight: "1.4em", // prevent layout shift
          }}
        >
          {sealing ? "Reflection sealed into Dream History." : ""}
        </p>

        <div className="flex gap-3 flex-wrap justify-center">
          <div
            className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 text-xs ${LIKENESS_COLORS[mirror.likenessLevel]}`}
          >
            <span>L{mirror.likenessLevel}</span>
            <span className="opacity-40">·</span>
            <span>{mirror.likenessLabel}</span>
          </div>
          <div className="inline-flex items-center border border-white/12 rounded-full px-3 py-1 text-xs text-white/30">
            {humanRenderingMode(mirror.renderingMode)}
          </div>
          <div className="inline-flex items-center border border-white/12 rounded-full px-3 py-1 text-xs text-white/30">
            Mirror type {mirror.tierNumber}
          </div>
        </div>

        <div className="w-full bg-white/4 border border-white/10 rounded-2xl px-5 py-5">
          <p className="text-white/30 text-[10px] tracking-widest uppercase mb-3">Dream</p>
          <blockquote className="text-white/55 text-sm leading-relaxed italic">
            "{dream.fullText}"
          </blockquote>
        </div>

        <div className="w-full bg-amber-400/5 border border-amber-400/18 rounded-2xl px-5 py-4">
          <p className="text-amber-400/50 text-[10px] tracking-widest uppercase mb-2">
            Mirror note
          </p>
          <p className="text-white/55 text-sm leading-relaxed">{mirror.reflectionNote}</p>
        </div>

        <div className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3">
          <p className="text-white/25 text-xs text-center leading-relaxed">
            {dream.testProof}
          </p>
        </div>

        <RitualButton
          variant="primary"
          onClick={handleReturn}
          disabled={sealing}
          aria-busy={sealing}
          style={{ width: "100%", maxWidth: "280px", padding: "16px 24px" }}
        >
          {sealing ? "Sealing…" : "Return to Mirror Hall"}
        </RitualButton>
      </div>
    </div>
  );
}
