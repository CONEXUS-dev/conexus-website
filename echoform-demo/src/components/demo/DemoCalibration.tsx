import { useState, useEffect, useRef } from "react";

const CINZEL: React.CSSProperties = { fontFamily: "'Cinzel', Georgia, serif" };

// Timing: delay = ms BEFORE this line appears (cumulative).
// Reading time for each line = next line's delay (or HOLD_AFTER for last line).
// Total with these values: ~5.3 s — gives each line ~1.3–1.5 s of reading time.
const LINES: { text: string; delay: number }[] = [
  { text: "Reflection Identity received.",                       delay: 1000 },
  { text: "Your likeness has been anchored with care.",           delay: 1500 },
  { text: "The Mirror Hall is opening.",                         delay: 1300 },
];
const HOLD_AFTER = 1500; // dwell after final line before auto-advance

interface Props {
  onComplete: () => void;
}

/**
 * Short ritual bridge between identity confirmation and the Mirror Hall.
 * Auto-advances after ~4 seconds. No user interaction required.
 * Respects prefers-reduced-motion: skips delays and fires onComplete quickly.
 */
export default function DemoCalibration({ onComplete }: Props) {
  const [visible, setVisible] = useState(0); // number of lines revealed so far
  const fired = useRef(false);
  const rm = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (fired.current) return;
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (rm.current) {
      // Skip animation, show all lines instantly, complete quickly
      setVisible(LINES.length);
      const t = setTimeout(() => {
        if (!fired.current) { fired.current = true; onComplete(); }
      }, 600);
      timers.push(t);
      return () => timers.forEach(clearTimeout);
    }

    let elapsed = 0;
    LINES.forEach((line, i) => {
      elapsed += line.delay;
      const t = setTimeout(() => setVisible(i + 1), elapsed);
      timers.push(t);
    });

    elapsed += HOLD_AFTER;
    const done = setTimeout(() => {
      if (!fired.current) { fired.current = true; onComplete(); }
    }, elapsed);
    timers.push(done);

    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 55%, hsl(215 40% 7%) 0%, hsl(220 45% 4%) 50%, hsl(225 55% 2%) 100%)",
      }}
    >
      {/* Ambient gold radiance */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 28% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 72%)",
        }}
      />

      {/* Lines */}
      <div className="relative z-10 flex flex-col items-center gap-0 px-8 text-center max-w-xs mx-auto">
        {LINES.map((line, i) => (
          <p
            key={i}
            aria-live={i === 0 ? "polite" : undefined}
            style={{
              ...CINZEL,
              fontSize: i === 1 ? "0.68rem" : "0.76rem",
              letterSpacing: i === 1 ? "0.14em" : "0.24em",
              color:
                i === 0
                  ? "rgba(235,195,90,0.82)"
                  : i === 1
                  ? "rgba(215,180,115,0.58)"
                  : "rgba(235,195,90,0.72)",
              lineHeight: 1.85,
              marginBottom: i < LINES.length - 1 ? "18px" : 0,
              opacity: visible > i ? 1 : 0,
              transform: visible > i ? "translateY(0)" : "translateY(7px)",
              transition: rm.current
                ? "none"
                : "opacity 750ms ease, transform 750ms ease",
              textTransform: "uppercase",
            }}
          >
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
}
