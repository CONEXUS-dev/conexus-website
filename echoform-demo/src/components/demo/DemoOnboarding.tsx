import { useEffect, useRef } from "react";
import { EclipseOrb } from "@/components/EclipseOrb";
import { RitualButton } from "./RitualButton";

// Deterministic star positions — avoids recomputing on every render
const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top:     (((i * 137.508) % 97) + 1.5),
  left:    (((i * 97.31)   % 95) + 2.5),
  size:    i % 5 === 0 ? 2 : 1,
  opacity: 0.15 + ((i * 0.04) % 0.35),
  dur:     3 + ((i * 0.11) % 4),
  delay:   (i * 0.11) % 4,
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
            background: "rgba(255,240,200,0.9)",
            opacity: s.opacity,
            // demoTwinkle keyframe + reduced-motion suppression live in demo.css
            animation: `demoTwinkle ${s.dur}s ease-in-out ${s.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

interface Props {
  onAdvance: () => void;
  // Shared-orb FLIP transition callbacks/flags.
  // onOrbMounted: called after first paint so Demo.tsx can measure the target rect.
  // orbVisible: false = orb is in layout (measurable) but visually hidden while
  //   the shared overlay is in flight.  Becomes true when overlay lands.
  // contentVisible: false = title/copy/buttons hidden until orb arrives.
  onOrbMounted?: (el: HTMLElement) => void;
  orbVisible?: boolean;
  contentVisible?: boolean;
}

export default function DemoOnboarding({
  onAdvance,
  onOrbMounted,
  orbVisible,
  contentVisible,
}: Props) {
  // Ref on the tight wrapper around EclipseOrb — used by Demo.tsx to measure
  // the exact destination rect for the shared-orb FLIP transition.
  const orbTargetRef = useRef<HTMLDivElement>(null);

  // Fire after the first browser paint so getBoundingClientRect() is valid.
  // Demo.tsx then waits an additional 3 RAFs for layout to fully stabilise
  // on mobile before measuring and starting the orb animation.
  useEffect(() => {
    if (orbTargetRef.current && onOrbMounted) {
      onOrbMounted(orbTargetRef.current);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Resolve with defaults so the component renders normally when no transition
  // is in progress (e.g. if the user returns to onboarding directly).
  const orbShown     = orbVisible     ?? true;
  const contentShown = contentVisible ?? true;

  return (
    <div
      className="relative min-h-dvh flex flex-col items-center justify-between overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 55%, hsl(215 40% 8%) 0%, hsl(220 45% 4%) 50%, hsl(225 55% 2%) 100%)",
      }}
    >
      <StarField />

      {/* ── Title block — identical to real Onboarding ──────── */}
      <div
        className="relative z-10 w-full text-center pt-10 pb-1 px-6"
        style={{
          opacity: contentShown ? 1 : 0,
          transition: contentShown ? "opacity 1600ms ease" : "none",
        }}
      >
        <p
          className="uppercase mb-1"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: "clamp(0.72rem, 3.2vw, 0.88rem)",
            letterSpacing: "0.48em",
            color: "rgba(215,165,60,0.72)",
          }}
        >
          CONEXUS
        </p>
        <h1
          className="mb-2"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontWeight: 400,
            fontSize: "min(10vw, 3.8rem)",
            letterSpacing: "0.10em",
            color: "rgba(235,195,95,0.97)",
            textShadow:
              "0 0 60px rgba(200,140,30,0.45), 0 0 20px rgba(200,120,20,0.25), 0 2px 10px rgba(0,0,0,0.7)",
            lineHeight: 1.0,
          }}
        >
          ECHOFORM
        </h1>
        <p
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(0.58rem, 2.4vw, 0.76rem)",
            letterSpacing: "0.42em",
            color: "rgba(215,165,60,0.62)",
            textTransform: "uppercase",
          }}
        >
          THE MIRROR AWAKENS
        </p>
      </div>

      {/* ── Copy + eclipse orb ──────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center px-6 py-2 flex-1 justify-center w-full max-w-sm mx-auto">
        <div
          className="text-center mb-4"
          style={{
            opacity: contentShown ? 1 : 0,
            transition: contentShown ? "opacity 1600ms ease" : "none",
          }}
        >
          <p
            className="leading-relaxed mb-1"
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: "clamp(0.88rem, 3.0vw, 1.0rem)",
              color: "rgba(230,205,150,0.82)",
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            To begin, offer yourself to the mirror.
          </p>
          <p
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: "clamp(0.78rem, 2.6vw, 0.9rem)",
              color: "rgba(215,185,120,0.6)",
              lineHeight: 1.7,
            }}
          >
            You may capture a photo or upload one now.
          </p>
        </div>
        {/*
         * orbTargetRef — measured by Demo.tsx to determine the FLIP destination.
         * display:inline-block shrinks the wrapper to the orb's own dimensions
         * so getBoundingClientRect() returns the exact orb rect, not the flex
         * container's full width.
         *
         * No `float` prop — eclipseFloat uses translateY which shifts the visual
         * position away from the layout box.  Static orb = pixel-exact rect.
         * After the handoff completes (orbShown becomes true), the orb
         * is already fully visible in place — no additional float needed here.
         *
         * opacity: 0 while overlay is flying; instant snap to 1 when overlay
         * lands (no transition) so the swap is imperceptible.
         */}
        <div
          ref={orbTargetRef}
          className="mt-2"
          style={{
            display: "inline-block",
            opacity: orbShown ? 1 : 0,
          }}
        >
          <EclipseOrb size="lg" />
        </div>
      </div>

      {/* ── Buttons + demo note ──────────────────────────────── */}
      <div
        className="relative z-10 w-full max-w-sm mx-auto px-6 pb-8"
        style={{
          opacity: contentShown ? 1 : 0,
          transition: contentShown ? "opacity 1600ms ease" : "none",
        }}
      >
        {/* CAPTURE PHOTO + UPLOAD IMAGE — side by side */}
        <div className="flex gap-3 mb-4">
          <RitualButton
            variant="primary"
            onClick={onAdvance}
            style={{ flex: 1, padding: "16px 8px" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
            CAPTURE PHOTO
          </RitualButton>

          <RitualButton
            variant="primary"
            onClick={onAdvance}
            style={{ flex: 1, padding: "16px 8px" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            UPLOAD IMAGE
          </RitualButton>
        </div>

        {/* Continue without photo — ghost/secondary feel */}
        <RitualButton
          variant="ghost"
          onClick={onAdvance}
          style={{ width: "100%", padding: "15px 24px", marginBottom: "16px" }}
        >
          Continue without photo
        </RitualButton>

        {/* Demo explanation note */}
        <p
          className="text-center leading-relaxed"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: "0.60rem",
            color: "rgba(215,175,100,0.36)",
            lineHeight: 1.75,
            letterSpacing: "0.05em",
          }}
        >
          In the live product, a photo helps the mirror preserve your likeness
          when it reflects your dream back to you. For this guided demo,
          we use a prepared sample profile.
        </p>
      </div>
    </div>
  );
}
