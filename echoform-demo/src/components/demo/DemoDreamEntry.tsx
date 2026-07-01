import { useState, useEffect } from "react";
import { EclipseOrb } from "@/components/EclipseOrb";
import { RitualButton } from "./RitualButton";

const CINZEL: React.CSSProperties = { fontFamily: "'Cinzel', Georgia, serif" };

function MicIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="2" width="6" height="11" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  );
}

const LINES = [
  "In the live product, this is where the dream begins.",
  "A user speaks or types — ECHOform listens.",
  "For this demo, choose from five prepared dreams.",
];

interface Props {
  onAdvance: () => void;
}

export default function DemoDreamEntry({ onAdvance }: Props) {
  const [lineIdx, setLineIdx] = useState(0);
  const [ready, setReady]     = useState(false);

  useEffect(() => {
    if (lineIdx < LINES.length - 1) {
      const t = setTimeout(() => setLineIdx((i) => i + 1), 1800);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setReady(true), 1000);
      return () => clearTimeout(t);
    }
  }, [lineIdx]);

  return (
    <div
      className="relative min-h-dvh flex flex-col items-center justify-between overflow-hidden pb-12"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, hsl(215 40% 7%) 0%, hsl(220 45% 4%) 45%, hsl(225 50% 2%) 100%)",
      }}
    >
      {/* demMicPulse is defined in demo.css (imported in Demo.tsx) */}
      <div className="pt-12 text-center relative z-10">
        <p className="text-amber-400/50 tracking-[0.3em] text-xs uppercase" style={CINZEL}>
          Dream Entry
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-0">
        <div className="relative">
          <EclipseOrb size="lg" float mist />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(60,20,20,0.96) 0%, rgba(30,8,8,0.98) 100%)",
                border: "1.5px solid rgba(210,60,60,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(220,90,90,0.7)",
                animation: "demMicPulse 2.8s ease-in-out infinite",
              }}
            >
              <MicIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pb-4 text-center max-w-sm mx-auto">
        <div className="min-h-[3em] flex items-center justify-center relative w-full">
          {LINES.map((line, i) => (
            <p
              key={i}
              className="text-white/60 text-sm leading-relaxed absolute w-full transition-all duration-700"
              style={{
                opacity: i === lineIdx ? 1 : 0,
                transform: i === lineIdx ? "translateY(0)" : "translateY(6px)",
                fontFamily: "'Cinzel', Georgia, serif",
              }}
            >
              {line}
            </p>
          ))}
        </div>

        <div
          style={{
            marginTop: "2rem",
            opacity: ready ? 1 : 0,
            pointerEvents: ready ? "auto" : "none",
            transition: "opacity 0.8s ease",
          }}
        >
          <RitualButton variant="primary" onClick={onAdvance}>
            Choose a Prepared Dream →
          </RitualButton>
        </div>
      </div>
    </div>
  );
}
