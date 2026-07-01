import { useState, type ButtonHTMLAttributes } from "react";

export type RitualVariant = "primary" | "secondary" | "ghost";

export interface RitualButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: RitualVariant;
  /** Adds a sweeping shimmer overlay — use on the single most important CTA per screen */
  shimmer?: boolean;
}

const CINZEL: React.CSSProperties = { fontFamily: "'Cinzel', Georgia, serif" };

const BASE: React.CSSProperties = {
  ...CINZEL,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  cursor: "pointer",
  border: "none",
  background: "none",
  position: "relative",
  overflow: "hidden",
  WebkitTapHighlightColor: "transparent",
  transition:
    "background 240ms ease, border-color 240ms ease, color 200ms ease, box-shadow 200ms ease, opacity 200ms ease",
  lineHeight: 1,
};

/* ── Per-variant rest-state styles ─────────────────────────── */
type StyleMap = { rest: React.CSSProperties; hover: React.CSSProperties };

const VARIANTS: Record<RitualVariant, StyleMap> = {
  primary: {
    rest: {
      fontSize: "0.72rem",
      letterSpacing: "0.22em",
      fontWeight: 500,
      textTransform: "uppercase",
      color: "rgba(235,195,90,0.85)",
      background: "rgba(212,175,55,0.08)",
      border: "1px solid rgba(212,175,55,0.30)",
      borderRadius: "12px",
      boxShadow: "0 0 20px rgba(180,120,10,0.08)",
      padding: "14px 24px",
    },
    hover: {
      color: "rgba(243,210,105,1)",
      background: "rgba(212,175,55,0.16)",
      borderColor: "rgba(212,175,55,0.58)",
      boxShadow: "0 0 28px rgba(200,140,20,0.18)",
    } as React.CSSProperties,
  },
  ghost: {
    rest: {
      fontSize: "0.72rem",
      letterSpacing: "0.22em",
      fontWeight: 500,
      textTransform: "uppercase",
      color: "rgba(212,175,55,0.60)",
      background: "transparent",
      border: "1px solid rgba(212,175,55,0.22)",
      borderRadius: "12px",
      padding: "14px 24px",
    },
    hover: {
      color: "rgba(230,190,85,0.90)",
      background: "rgba(212,175,55,0.06)",
      borderColor: "rgba(212,175,55,0.40)",
      boxShadow: "0 0 18px rgba(190,130,10,0.10)",
    } as React.CSSProperties,
  },
  secondary: {
    rest: {
      fontSize: "0.58rem",
      letterSpacing: "0.18em",
      fontWeight: 400,
      textTransform: "uppercase",
      color: "rgba(212,175,55,0.42)",
      background: "transparent",
      border: "none",
      padding: "4px 0",
      textDecoration: "underline",
      textDecorationColor: "rgba(212,175,55,0.16)",
      textUnderlineOffset: "3px",
      borderRadius: 0,
    },
    hover: {
      color: "rgba(212,175,55,0.75)",
      textDecorationColor: "rgba(212,175,55,0.35)",
    } as React.CSSProperties,
  },
};

export function RitualButton({
  variant = "primary",
  shimmer = false,
  children,
  className,
  style,
  disabled,
  ...rest
}: RitualButtonProps) {
  const [hovered, setHovered] = useState(false);
  const v = VARIANTS[variant];

  const computedStyle: React.CSSProperties = {
    ...BASE,
    ...v.rest,
    ...(hovered && !disabled ? v.hover : {}),
    ...(disabled ? { opacity: 0.35, pointerEvents: "none", cursor: "default" } : {}),
    ...style,
  };

  const scaleClass =
    variant !== "secondary" ? "demo-btn demo-btn-scale" : "demo-btn";

  return (
    <button
      type="button"
      className={`${scaleClass}${className ? " " + className : ""}`}
      disabled={disabled}
      style={computedStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      {...rest}
    >
      {children}
      {shimmer && !disabled && <span className="demo-shimmer-layer" aria-hidden />}
    </button>
  );
}
