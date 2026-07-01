/**
 * Shared eclipse orb component.
 * Source: /eclipse-orb.png — 1254×1254px square, downscaled by the browser.
 *
 * Props
 *   size     — "lg" (ritual, ~340px) | "sm" (activation, ~200px) | any CSS string
 *   float    — gentle vertical breathe on the outer wrapper (8px, 9s)
 *   pulsing  — opacity breathe on the image itself (3s)
 *   mist     — subtle CSS ember haze behind the orb (default true for lg)
 */

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

const SIZE: Record<"lg" | "sm", string> = {
  lg: "clamp(300px, 76vw, 340px)",
  sm: "clamp(180px, 46vw, 220px)",
};

const MASK =
  "radial-gradient(circle closest-side, black 36%, rgba(0,0,0,0.82) 52%, rgba(0,0,0,0.38) 70%, rgba(0,0,0,0.08) 86%, transparent 95%)";

const KEYFRAMES = `
  @keyframes eclipseFloat {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-8px); }
  }
  @keyframes eclipseImgPulse {
    0%, 100% { opacity: 0.9; }
    50%       { opacity: 1;   }
  }
  @keyframes eclipseMistDrift1 {
    0%   { transform: translate(-50%,-50%) scale(1);    opacity: 0.22; }
    35%  { transform: translate(-47%,-53%) scale(1.14); opacity: 0.38; }
    70%  { transform: translate(-53%,-48%) scale(0.94); opacity: 0.28; }
    100% { transform: translate(-50%,-50%) scale(1);    opacity: 0.22; }
  }
  @keyframes eclipseMistDrift2 {
    0%   { transform: translate(-50%,-50%) scale(1);    opacity: 0.14; }
    60%  { transform: translate(-48%,-51%) scale(1.10); opacity: 0.22; }
    100% { transform: translate(-50%,-50%) scale(1);    opacity: 0.14; }
  }
  @media (prefers-reduced-motion: reduce) {
    .eclipse-float { animation: none !important; }
    .eclipse-mist  { animation: none !important; }
  }
`;

function MistLayer({ containerPx }: { containerPx: number }) {
  const w1 = containerPx + 160;
  const w2 = containerPx + 260;
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ zIndex: 0 }}>
      <div
        className="eclipse-mist absolute"
        style={{
          top: "50%", left: "50%",
          width: w1, height: w1,
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, transparent 40%, rgba(160,70,8,0.10) 58%, rgba(110,42,4,0.05) 74%, transparent 86%)",
          filter: "blur(22px)",
          animation: "eclipseMistDrift1 18s ease-in-out infinite",
        }}
      />
      <div
        className="eclipse-mist absolute"
        style={{
          top: "50%", left: "50%",
          width: w2, height: w2,
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, transparent 44%, rgba(130,55,6,0.07) 60%, rgba(90,34,3,0.03) 76%, transparent 88%)",
          filter: "blur(36px)",
          animation: "eclipseMistDrift2 26s ease-in-out infinite",
          animationDelay: "9s",
        }}
      />
    </div>
  );
}

export function EclipseOrb({
  size = "lg",
  float: shouldFloat = false,
  pulsing = false,
  mist,
}: {
  size?: "lg" | "sm" | string;
  float?: boolean;
  pulsing?: boolean;
  mist?: boolean;
}) {
  const cssSize = size in SIZE ? SIZE[size as "lg" | "sm"] : size;
  const showMist = mist ?? size === "lg";
  const estimatedPx = size === "lg" ? 340 : size === "sm" ? 220 : 300;

  const inner = (
    <div
      className="relative flex items-center justify-center pointer-events-none"
      style={{ width: cssSize, height: cssSize }}
    >
      {showMist && <MistLayer containerPx={estimatedPx} />}
      <img
        src={`${BASE_PATH}/eclipse-orb.png`}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          WebkitMaskImage: MASK,
          maskImage: MASK,
          zIndex: 1,
          animation: pulsing ? "eclipseImgPulse 3s ease-in-out infinite" : undefined,
        }}
      />
    </div>
  );

  return (
    <>
      <style>{KEYFRAMES}</style>
      {shouldFloat ? (
        <div
          className="eclipse-float"
          style={{ animation: "eclipseFloat 9s ease-in-out infinite" }}
        >
          {inner}
        </div>
      ) : (
        inner
      )}
    </>
  );
}
