import { useState, useEffect, useRef } from "react";
import { EclipseOrb } from "@/components/EclipseOrb";

const CINZEL: React.CSSProperties = { fontFamily: "'Cinzel', Georgia, serif" };

// Sentence lines use Georgia for true lowercase letterforms.
// Cinzel is a display/small-caps font: its lowercase glyphs are rendered as
// smaller capital letters, making sentence copy appear ALL CAPS regardless of
// text-transform CSS.  Georgia has genuine lowercase glyphs and reads as
// premium editorial copy at the letter-spacings used here.
const SENTENCE_FONT: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
};

// ── Star field ────────────────────────────────────────────────
// Deterministic golden-angle distribution so positions are stable across renders.
const STARS = Array.from({ length: 55 }, (_, i) => ({
  id:      i,
  top:     (((i * 137.508) % 97) + 1.5),
  left:    (((i * 83.21)   % 95) + 2.5),
  size:    i % 4 === 0 ? 2 : 1,
  opacity: 0.12 + ((i * 0.035) % 0.28),
  dur:     3.2 + ((i * 0.13) % 4),
  delay:   (i * 0.09) % 5,
}));

function StarField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {STARS.map((s) => (
        <div
          key={s.id}
          className="demo-star absolute rounded-full"
          style={{
            top:    `${s.top}%`,
            left:   `${s.left}%`,
            width:  s.size,
            height: s.size,
            background: "rgba(255,240,200,0.95)",
            animation: `introTwinkle ${s.dur}s ease-in-out ${s.delay}s infinite alternate`,
            ["--iop" as string]: s.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

// ── Intro copy ───────────────────────────────────────────────
// Lines 0–3: sentence-case.  Line 4: lowercase thesis — must stay lowercase exactly.
const INTRO_LINES: { text: string; italic?: boolean }[] = [
  { text: "Some dreams vanish by morning." },
  { text: "Some ask to be remembered." },
  { text: "ECHOform gives them a place to remain." },
  { text: "And once something carries your dreams..." },
  { text: "who would delete it?", italic: true },
];

// ── Timing constants (ms) ────────────────────────────────────
// REVEAL_DUR: duration of mirrorReveal animation per line.
// LINE_DELAYS[i]: when line i's reveal animation begins.
// Dwell after each line (gap between settle and next start):
//   Line 0→1: 3200 − (800+1600)  =  800ms
//   Line 1→2: 5600 − (3200+1600) =  800ms
//   Line 2→3: 8200 − (5600+1600) = 1000ms
//   Line 3→4: 11200 − (8200+1600)= 1400ms  (longest pause — most weight)
// Line 4 settles at 11200 + 1600 = 12800ms.
// TAP_AT: orb + "Tap to Begin" fade in 1200ms after final line settles.
// EMPHASIS_AT: gold breath on final line fires 1600ms AFTER tap is visible —
//   feels like an after-echo, not part of the reveal.
const REVEAL_DUR  = 1600;
const LINE_DELAYS = [800, 3200, 5600, 8200, 11200] as const;
const TAP_AT      = 12800 + 1200;  // 14000ms — orb + tap appear
const EMPHASIS_AT = TAP_AT + 1600; // 15600ms — gold halo after orb is visible

interface Props {
  // rect is null when prefers-reduced-motion: Demo.tsx uses instant switch.
  onBegin: (rect: DOMRect | null) => void;
}

export default function DemoIntro({ onBegin }: Props) {
  const [lineVisible, setLineVisible]       = useState(0);
  const [finalEmphasis, setFinalEmphasis]   = useState(false);
  const [showTap, setShowTap]               = useState(false);
  // handoffActive: set on tap — hides real orb and fades text so overlay can
  // take over the orb position without any duplicate-orb flash.
  const [handoffActive, setHandoffActive]   = useState(false);

  // Ref on the <button> that wraps the orb.
  // The button has padding:0 and its layout box matches the EclipseOrb exactly.
  // float is NOT used on the EclipseOrb here — a floating child's transform
  // shifts the visual position away from the layout rect, which would make the
  // FLIP measurement imprecise.  Static orb = exact measurement.
  const orbButtonRef = useRef<HTMLButtonElement>(null);

  // Guard against double-fire on rapid taps
  const fired = useRef(false);

  const rm = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    if (rm.current) {
      setLineVisible(INTRO_LINES.length);
      setFinalEmphasis(true);
      timers.push(setTimeout(() => setShowTap(true), 400));
      return () => timers.forEach(clearTimeout);
    }

    LINE_DELAYS.forEach((d, i) => {
      timers.push(setTimeout(() => setLineVisible(i + 1), d));
    });
    // TAP_AT before EMPHASIS_AT: orb must be visible before the gold emphasis fires.
    timers.push(setTimeout(() => setShowTap(true), TAP_AT));
    timers.push(setTimeout(() => setFinalEmphasis(true), EMPHASIS_AT));

    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleTap() {
    if (fired.current || !showTap) return;
    fired.current = true;

    if (rm.current) {
      // Reduced-motion: skip overlay; Demo.tsx does instant switch.
      onBegin(null);
      return;
    }

    // Measure the orb's exact screen rect BEFORE any state changes.
    // getBoundingClientRect() is synchronous — this captures the true layout
    // position of the static (non-floating) orb button.
    const rect = orbButtonRef.current?.getBoundingClientRect() ?? null;

    // Both state updates are in the same event handler → React 18 batches
    // them into a single render+paint.  Result: real orb hides AND overlay
    // appears at the same rect in the exact same frame.  Zero duplicate-orb flash.
    setHandoffActive(true);
    onBegin(rect);
  }

  const isRM = rm.current;

  return (
    <div
      className="relative min-h-dvh flex flex-col items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, hsl(215 40% 7%) 0%, hsl(220 45% 4%) 45%, hsl(225 50% 2%) 100%)",
      }}
    >
      {/*
       * mirrorReveal — left-to-right clip-path sweep + opacity fade-in.
       *   clip-path inset(0 100% 0 0) → fully clipped (right); inset(0 0% 0 0) → visible.
       * introTwinkle — star pulse.  Kept inline to avoid colliding with
       *   demoTwinkle in demo.css.  Reduced-motion: demo.css "animation: none
       *   !important" on .demo-star overrides inline animation.
       */}
      <style>{`
        @keyframes mirrorReveal {
          0%   { opacity: 0;    clip-path: inset(0 100% 0 0); }
          12%  { opacity: 0.75;                                }
          100% { opacity: 1;    clip-path: inset(0 0%   0 0); }
        }
        @keyframes introTwinkle {
          from { opacity: var(--iop, 0.15); transform: scale(1);   }
          to   { opacity: calc(var(--iop, 0.15) * 1.7); transform: scale(1.3); }
        }
      `}</style>

      <StarField />

      {/* ── Branding header ───────────────────────────────────── */}
      {/* Fades when handoffActive so text dissolves while overlay holds the orb. */}
      <div
        className="relative z-10 text-center"
        style={{
          paddingTop: "clamp(32px,10vw,56px)",
          opacity: handoffActive ? 0 : 1,
          transition: isRM ? "none" : "opacity 1100ms ease",
        }}
      >
        <p
          style={{
            ...CINZEL,
            fontSize: "0.58rem",
            letterSpacing: "0.35em",
            color: "rgba(215,165,60,0.60)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          CONEXUS
        </p>
        <h1
          style={{
            ...CINZEL,
            fontSize: "clamp(1.55rem, 8vw, 2.1rem)",
            letterSpacing: "0.12em",
            color: "rgba(235,195,90,0.90)",
            fontWeight: 400,
            margin: "4px 0 0",
          }}
        >
          ECHOform
        </h1>
      </div>

      {/* ── Cinematic intro lines (center) ────────────────────── */}
      {/* Fades when handoffActive (separate fade so it doesn't affect orb timing). */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          flex: 1,
          justifyContent: "center",
          padding: "20px 32px",
          maxWidth: "400px",
          margin: "0 auto",
          width: "100%",
          opacity: handoffActive ? 0 : 1,
          transition: isRM ? "none" : "opacity 1100ms ease",
        }}
        aria-live="polite"
        aria-atomic="false"
      >
        {INTRO_LINES.map(({ text, italic }, i) => {
          const isFinal    = i === INTRO_LINES.length - 1;
          const isRevealed = lineVisible > i;

          const fontSize = isFinal ? "clamp(1.20rem, 5vw, 1.38rem)" : "clamp(1.02rem, 4.2vw, 1.18rem)";
          const ls       = isFinal ? "0.04em"  : "0.12em";

          const color = isFinal && finalEmphasis
            ? "rgba(240,205,95,1.0)"
            : isFinal
            ? "rgba(235,195,90,0.85)"
            : i === 3
            ? "rgba(215,185,130,0.62)"
            : "rgba(215,185,130,0.74)";

          const textShadow = isFinal && finalEmphasis
            ? "0 0 24px rgba(212,175,55,0.40), 0 0 48px rgba(212,175,55,0.14)"
            : "none";

          if (isRM) {
            return (
              <p
                key={i}
                style={{
                  ...SENTENCE_FONT,
                  fontSize,
                  letterSpacing: ls,
                  fontStyle: italic ? "italic" : "normal",
                  color,
                  textShadow,
                  lineHeight: 1.70,
                  margin: i < INTRO_LINES.length - 1 ? "0 0 20px" : 0,
                  opacity: isRevealed ? 1 : 0,
                  transition: "opacity 300ms ease, color 300ms ease, text-shadow 300ms ease",
                }}
              >
                {text}
              </p>
            );
          }

          return (
            <p
              key={i}
              style={{
                ...SENTENCE_FONT,
                fontSize,
                letterSpacing: ls,
                fontStyle: italic ? "italic" : "normal",
                lineHeight: 1.70,
                margin: i < INTRO_LINES.length - 1 ? "0 0 20px" : 0,
                opacity: isRevealed ? undefined : 0,
                animation: isRevealed
                  ? `mirrorReveal ${REVEAL_DUR}ms cubic-bezier(0.16, 1, 0.30, 1) forwards`
                  : undefined,
                color,
                textShadow,
                transition: "color 700ms ease, text-shadow 700ms ease",
              } as React.CSSProperties}
            >
              {text}
            </p>
          );
        })}
      </div>

      {/* ── Orb + "Tap to Begin" ──────────────────────────────── */}
      {/*
       * This container fades to 0 when handoffActive.  The overlay EclipseOrb
       * appears in the same React render, positioned at the exact measured rect
       * of orbButtonRef, so the user sees only one orb at all times.
       *
       * IMPORTANT — no `float` prop on EclipseOrb:
       * The eclipseFloat animation does translateY(0 → −8px) on its wrapper div,
       * which is a CSS transform that shifts the visual position of the orb
       * without affecting the layout box.  getBoundingClientRect() on a parent
       * of a floating EclipseOrb returns the layout position, not the visually-
       * shifted position — up to 8px off at the animation's midpoint.
       * With float=false the inner div IS the direct child; layout rect = visual
       * position exactly.  Static orb guarantees a pixel-exact FLIP transition.
       */}
      <div
        className="relative z-10 flex flex-col items-center"
        style={{
          paddingBottom: "clamp(32px, 10vw, 56px)",
          opacity: !showTap ? 0 : handoffActive ? 0 : 1,
          transition: isRM ? "none"
            : !showTap      ? "opacity 800ms ease"
            : "opacity 400ms ease",
          pointerEvents: showTap && !handoffActive ? "auto" : "none",
        }}
      >
        <button
          ref={orbButtonRef}
          onClick={handleTap}
          className="demo-btn relative group"
          aria-label="Tap to begin the guided demo"
          tabIndex={showTap && !handoffActive ? 0 : -1}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          {/* No float — static orb for pixel-exact FLIP measurement */}
          <EclipseOrb size="lg" pulsing mist />
          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden
            style={{ zIndex: 10, pointerEvents: "none" }}
          >
            <span
              className="transition-colors duration-500 text-sm uppercase pointer-events-none select-none"
              style={{
                ...CINZEL,
                letterSpacing: "0.22em",
                color: "rgba(252,191,73,0.88)",
                textShadow:
                  "0 0 14px rgba(251,191,36,0.42), 0 0 30px rgba(251,191,36,0.20)",
              }}
            >
              Tap to Begin
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
