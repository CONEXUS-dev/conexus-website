import { useState, useEffect } from "react";
import { EclipseOrb } from "@/components/EclipseOrb";

const CINZEL: React.CSSProperties = { fontFamily: "'Cinzel', Georgia, serif" };

const STAGES = [
  { text: "Dream received.",                          duration: 1600 },
  { text: "ECHOform reads the emotional register.",   duration: 2000 },
  { text: "Twenty symbolic mirror types considered.", duration: 2400 },
  { text: "Three mirrors selected for this dream.",   duration: 2200 },
  { text: "Reflection Identity rules applied.",       duration: 2400 },
  { text: "Retrieving the matched mirror images.",    duration: 2600 },
  { text: "The mirror opens.",                        duration: 1800 },
];

interface Props {
  dreamTitle: string;
  onComplete: () => void;
}

export default function DemoProcessing({ dreamTitle, onComplete }: Props) {
  const [stageIdx, setStageIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let idx = 0;
    let cancelled = false;

    function advance() {
      if (cancelled) return;
      if (idx < STAGES.length - 1) {
        idx += 1;
        setStageIdx(idx);
        setTimeout(advance, STAGES[idx].duration);
      } else {
        setTimeout(() => {
          if (!cancelled) {
            setDone(true);
            setTimeout(() => { if (!cancelled) onComplete(); }, 900);
          }
        }, STAGES[idx].duration);
      }
    }

    setTimeout(advance, STAGES[0].duration);
    return () => { cancelled = true; };
  }, [onComplete]);

  return (
    <div
      className="relative min-h-dvh flex flex-col items-center justify-between overflow-hidden pb-16"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, hsl(215 40% 7%) 0%, hsl(220 45% 4%) 45%, hsl(225 50% 2%) 100%)",
      }}
    >
      <style>{`@keyframes orbSpin { to { transform: rotate(360deg); } }`}</style>

      <div className="pt-12 text-center relative z-10 px-6">
        <p className="text-amber-400/50 tracking-[0.3em] text-xs uppercase" style={CINZEL}>
          Mirror System
        </p>
        <p className="text-white/30 text-sm mt-1">{dreamTitle}</p>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative">
          <EclipseOrb size="lg" float mist pulsing />
          {!done && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  border: "2px solid rgba(212,175,55,0.18)",
                  borderTopColor: "hsl(43 85% 62%)",
                  animation: "orbSpin 0.9s linear infinite",
                }}
              />
            </div>
          )}
        </div>

        <div className="min-h-[5rem] flex flex-col items-center justify-center gap-3 px-6">
          {STAGES.map((s, i) => (
            <p
              key={i}
              className="text-xs tracking-[0.2em] uppercase transition-all duration-700"
              style={{
                ...CINZEL,
                opacity: i === stageIdx ? 0.88 : i < stageIdx ? 0.22 : 0,
                color:
                  i === stageIdx
                    ? "rgba(215,165,60,0.9)"
                    : "rgba(215,165,60,0.3)",
                transform: i === stageIdx ? "translateY(0)" : "translateY(4px)",
              }}
            >
              {s.text}
            </p>
          ))}
        </div>
      </div>

      <div className="text-center px-6 relative z-10">
        <p className="text-white/15 text-[10px] tracking-wide">
          Proof playback — no new images are generated
        </p>
      </div>
    </div>
  );
}
