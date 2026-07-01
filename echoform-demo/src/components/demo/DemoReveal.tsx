import { useState, useEffect } from "react";
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
  0: "text-purple-300/80 border-purple-400/30 bg-purple-400/8",
  1: "text-blue-300/80 border-blue-400/30 bg-blue-400/8",
  2: "text-teal-300/80 border-teal-400/30 bg-teal-400/8",
  3: "text-amber-300/80 border-amber-400/30 bg-amber-400/8",
  4: "text-rose-300/80 border-rose-400/30 bg-rose-400/8",
};

interface Props {
  dream: DemoDream;
  baseUrl: string;
  onChoose: (mirror: DemoMirror) => void;
}

export default function DemoReveal({ dream, baseUrl, onChoose }: Props) {
  const [hovered, setHovered]       = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // ── Cinematic mount fade-in ─────────────────────────────────
  // The reveal is the most important moment in the demo — all three
  // mirror candidates emerging from the processing darkness.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Lightbox Escape key
  useEffect(() => {
    if (!lightboxImg) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxImg(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxImg]);

  return (
    <div
      className="relative min-h-dvh flex flex-col overflow-hidden pb-16"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%, hsl(215 40% 7%) 0%, hsl(220 45% 4%) 45%, hsl(225 50% 2%) 100%)",
        opacity: mounted ? 1 : 0,
        transition: "opacity 420ms ease",
      }}
    >
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Mirror reflection"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="demo-btn absolute top-4 right-4 text-white/50 hover:text-white text-2xl"
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={() => setLightboxImg(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>
        </div>
      )}

      <div className="relative z-10 pt-12 px-6 pb-6 text-center">
        <p className="text-amber-400/60 tracking-[0.3em] text-xs uppercase mb-2" style={CINZEL}>
          Three Mirrors
        </p>
        <h2 className="text-white text-xl font-light mb-1" style={CINZEL}>
          {dream.title}
        </h2>
        <p className="text-white/35 text-sm">
          {dream.emotionalLabel}
        </p>
        <p className="text-white/25 text-xs mt-3 max-w-xs mx-auto">
          Each mirror reflects a different symbolic angle on the dream.
          Choose the one that feels most true.
        </p>
      </div>

      <div className="relative z-10 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto w-full">
        {dream.mirrors.map((m) => {
          const isHov = hovered === m.rank;
          return (
            <div
              key={m.rank}
              className="flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer"
              style={{
                borderColor: isHov ? "rgba(251,191,36,0.55)" : "rgba(255,255,255,0.1)",
                boxShadow:   isHov ? "0 0 28px rgba(251,191,36,0.08)" : "none",
                transform:   isHov ? "translateY(-2px)" : "none",
              }}
              onMouseEnter={() => setHovered(m.rank)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="relative aspect-[2/3] bg-black/40 cursor-zoom-in overflow-hidden"
                onClick={() => setLightboxImg(`${baseUrl}demo/${m.imageFile}`)}
              >
                <div className="absolute top-2 left-2 z-10 bg-black/60 text-white/60 font-mono text-[10px] px-1.5 py-0.5 rounded">
                  RANK {m.rank}
                </div>
                <img
                  src={`${baseUrl}demo/${m.imageFile}`}
                  alt={m.variantLabel}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-black/30 flex-1 flex flex-col gap-3">
                <div>
                  <p className="text-white text-sm font-medium" style={CINZEL}>
                    {m.tierName}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{m.variantLabel}</p>
                  <div
                    className={`inline-flex items-center gap-1 border rounded-full px-2 py-0.5 text-[10px] mt-1.5 ${LIKENESS_COLORS[m.likenessLevel]}`}
                  >
                    <span>L{m.likenessLevel}</span>
                    <span className="opacity-50">·</span>
                    <span>{m.likenessLabel}</span>
                  </div>
                  <p className="text-white/30 text-[10px] mt-1">
                    {humanRenderingMode(m.renderingMode)}
                  </p>
                </div>

                <p className="text-white/40 text-xs leading-relaxed italic flex-1">
                  "{m.reflectionNote}"
                </p>

                {/* Choose This Mirror — keep card-hover-driven styling; add demo-btn for keyboard focus */}
                <button
                  onClick={() => onChoose(m)}
                  className="demo-btn demo-btn-scale w-full py-2.5 rounded-xl border text-sm tracking-wide font-medium transition-all"
                  style={{
                    ...CINZEL,
                    background:   isHov ? "rgba(251,191,36,0.15)" : "rgba(255,255,255,0.04)",
                    borderColor:  isHov ? "rgba(251,191,36,0.5)"  : "rgba(255,255,255,0.12)",
                    color:        isHov ? "rgba(251,191,36,0.9)"  : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                  }}
                >
                  Choose This Mirror
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 pt-6 px-6 text-center">
        <p className="text-white/18 text-[10px]">
          Proof playback · three reflections returned
        </p>
      </div>
    </div>
  );
}
