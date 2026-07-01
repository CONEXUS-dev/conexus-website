import { useState, useRef } from "react";
import type { DemoHistoryEntry } from "./demoState";
import DemoHistory from "./DemoHistory";

interface Props {
  history: DemoHistoryEntry[];
  baseUrl: string;
  onDreamEntry: () => void;
  onShowGallery: () => void;
}

// ── Mist wisp data ──────────────────────────────────────────────
// Each wisp is an elliptical radial-gradient div that drifts upward
// and fades using the `mistDrift` keyframe defined in demo.css.
// Positions are % within the arch bounding box (not the full image).

type Wisp = {
  left: string; width: string;
  top: string;  height: string;
  color: string;
  dur: string;
  delay: string;
};

// Dream Entry — warm amber/gold, 3 wisps at different heights
const DREAM_ENTRY_WISPS: Wisp[] = [
  {
    left: "12%", width: "76%", top: "63%", height: "22%",
    color: "radial-gradient(ellipse at center, rgba(251,191,36,0.48) 0%, rgba(220,155,40,0.18) 45%, transparent 72%)",
    dur: "1100ms", delay: "0ms",
  },
  {
    left: "5%",  width: "55%", top: "50%", height: "18%",
    color: "radial-gradient(ellipse at center, rgba(255,205,100,0.32) 0%, rgba(215,160,50,0.10) 52%, transparent 76%)",
    dur: "980ms",  delay: "130ms",
  },
  {
    left: "42%", width: "52%", top: "56%", height: "16%",
    color: "radial-gradient(ellipse at center, rgba(240,195,85,0.28) 0%, rgba(205,145,35,0.08) 55%, transparent 78%)",
    dur: "1040ms", delay: "220ms",
  },
];

// Glass ripple — expands from mirror face center outward
const DREAM_ENTRY_RIPPLES: Wisp[] = [
  {
    left: "20%", width: "60%", top: "28%", height: "35%",
    color: "radial-gradient(ellipse at center, rgba(255,220,130,0.22) 0%, rgba(230,180,80,0.06) 55%, transparent 78%)",
    dur: "900ms", delay: "60ms",
  },
  {
    left: "30%", width: "40%", top: "34%", height: "25%",
    color: "radial-gradient(ellipse at center, rgba(245,210,110,0.18) 0%, rgba(215,165,60,0.04) 55%, transparent 78%)",
    dur: "850ms", delay: "180ms",
  },
];

// Dream History — softer, cooler archival gold, 2 wisps
const HISTORY_WISPS: Wisp[] = [
  {
    left: "10%", width: "80%", top: "60%", height: "22%",
    color: "radial-gradient(ellipse at center, rgba(200,178,118,0.34) 0%, rgba(175,152,95,0.12) 48%, transparent 72%)",
    dur: "1000ms", delay: "0ms",
  },
  {
    left: "18%", width: "65%", top: "47%", height: "17%",
    color: "radial-gradient(ellipse at center, rgba(185,168,118,0.20) 0%, rgba(165,148,90,0.06) 52%, transparent 76%)",
    dur: "900ms",  delay: "190ms",
  },
];

/**
 * Demo Mirror Hall — raw background image + invisible tap zones + activation effects.
 *
 * LAYOUT CONTRACT (must not be broken):
 *   - <img> at width: 100%, height: auto, no objectFit
 *   - Wrapper: position relative, aspectRatio "941 / 1672"
 *   - All layers (glow, mist, hit-zones) use position: absolute inside wrapper
 *   - Glow/mist layers: pointer-events none
 *   - Hit-zone layer: transparent buttons, aria-labeled
 *
 * Activation visual layer order (bottom → top within each arch bounding box):
 *   1. Glass ripple — expands from mirror face center
 *   2. Glow bloom  — large elliptical amber/gold radial gradient
 *   3. Mist wisps  — 2–3 smaller wisps drift upward and fade
 */
export default function DemoLobby({ history, baseUrl, onDreamEntry, onShowGallery }: Props) {
  const [showHistory, setShowHistory] = useState(false);
  const [activating, setActivating] = useState<null | "dreamEntry" | "history">(null);

  const BASE = baseUrl.replace(/\/$/, "");
  const BG   = `${BASE}/echoform-mirror-hall-lobby.png`;

  const rm = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  function activateMirror(which: "dreamEntry" | "history") {
    if (activating) return;
    setActivating(which);
    const delay = rm.current ? 0 : 520;
    setTimeout(() => {
      setActivating(null);
      if (which === "dreamEntry") {
        onDreamEntry();
      } else {
        setShowHistory(true);
      }
    }, delay);
  }

  return (
    <>
      {showHistory && (
        <DemoHistory
          history={history}
          baseUrl={baseUrl}
          onClose={() => setShowHistory(false)}
          onShowGallery={onShowGallery}
        />
      )}

      {/* Outer shell — black, full viewport, scrollable on very short screens */}
      <div
        className="fixed inset-0 flex flex-col items-center overflow-y-auto"
        style={{ background: "#000" }}
      >
        {/*
         * Image wrapper — aspect-ratio locks the 941×1672 artwork proportionally.
         * All child layers (decorative and interactive) use position: absolute and
         * inherit the same bounding box, keeping tap zones aligned at every size.
         */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "941 / 1672",
            flexShrink: 0,
          }}
        >
          {/* ── Layer 1: Artwork ──────────────────────────── */}
          <img
            src={BG}
            alt="ECHOform Mirror Hall"
            draggable={false}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />

          {/* ── Layer 2: Activation effects (decorative) ─────
               All elements: pointer-events none.
               Each arch region is a positioned container;
               effects are absolutely positioned within it.
               ─────────────────────────────────────────────── */}
          <div className="absolute inset-0 pointer-events-none">

            {/* ── Dream History arch: left 14–33%, top 4–68% ── */}
            <div
              style={{
                position: "absolute",
                left: "14%", width: "19%",
                top: "4%",   height: "64%",
              }}
            >
              {activating === "history" && (
                <>
                  {/* Glow bloom */}
                  <div
                    key="hist-glow"
                    className="demo-mirror-glow"
                    style={{
                      position: "absolute",
                      left: "5%", right: "5%",
                      top: "12%", bottom: "22%",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(ellipse at center, rgba(200,178,120,0.36) 0%, rgba(178,152,80,0.12) 42%, transparent 70%)",
                    }}
                  />
                  {/* Memory mist wisps */}
                  {HISTORY_WISPS.map((w, i) => (
                    <div
                      key={`hist-mist-${i}`}
                      className="demo-mist-wisp"
                      style={{
                        left: w.left, width: w.width,
                        top:  w.top,  height: w.height,
                        background: w.color,
                        ["--mist-dur"   as string]: w.dur,
                        ["--mist-delay" as string]: w.delay,
                      } as React.CSSProperties}
                    />
                  ))}
                </>
              )}
            </div>

            {/* ── Dream Entry arch: left 33–67%, top 4–74% ─── */}
            <div
              style={{
                position: "absolute",
                left: "33%", width: "34%",
                top: "4%",   height: "70%",
              }}
            >
              {activating === "dreamEntry" && (
                <>
                  {/* Glass ripples — expand from mirror face */}
                  {DREAM_ENTRY_RIPPLES.map((r, i) => (
                    <div
                      key={`entry-ripple-${i}`}
                      className="demo-glass-ripple"
                      style={{
                        left: r.left, width: r.width,
                        top:  r.top,  height: r.height,
                        background: r.color,
                        ["--ripple-dur"   as string]: r.dur,
                        ["--ripple-delay" as string]: r.delay,
                      } as React.CSSProperties}
                    />
                  ))}
                  {/* Glow bloom */}
                  <div
                    key="entry-glow"
                    className="demo-mirror-glow"
                    style={{
                      position: "absolute",
                      left: "5%", right: "5%",
                      top: "10%", bottom: "18%",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(ellipse at center, rgba(251,191,36,0.44) 0%, rgba(210,140,20,0.16) 40%, transparent 68%)",
                    }}
                  />
                  {/* Amber mist wisps — drift upward from mirror glass */}
                  {DREAM_ENTRY_WISPS.map((w, i) => (
                    <div
                      key={`entry-mist-${i}`}
                      className="demo-mist-wisp"
                      style={{
                        left: w.left, width: w.width,
                        top:  w.top,  height: w.height,
                        background: w.color,
                        ["--mist-dur"   as string]: w.dur,
                        ["--mist-delay" as string]: w.delay,
                      } as React.CSSProperties}
                    />
                  ))}
                </>
              )}
            </div>
          </div>

          {/* ── Layer 3: Invisible hit zones (interactive) ───
               Completely transparent — no background, no border.
               keyboard :focus-visible → gold elliptical ring via demo.css.
               ─────────────────────────────────────────────── */}
          <div className="absolute inset-0">
            {/* Inner-left: Dream History */}
            <button
              type="button"
              className="demo-mirror-zone"
              aria-label="Dream History — view your past demo dream reflections"
              onClick={() => activateMirror("history")}
              disabled={!!activating}
              style={{
                position: "absolute",
                left: "14%", width: "19%",
                top: "4%",   height: "64%",
                background: "transparent",
                border: "none",
                cursor: activating ? "default" : "pointer",
              }}
            />

            {/* Center: Dream Entry */}
            <button
              type="button"
              className="demo-mirror-zone"
              aria-label="Dream Entry — begin a guided demo dream"
              onClick={() => activateMirror("dreamEntry")}
              disabled={!!activating}
              style={{
                position: "absolute",
                left: "33%", width: "34%",
                top: "4%",   height: "70%",
                background: "transparent",
                border: "none",
                cursor: activating ? "default" : "pointer",
              }}
            />

            {/* Far-left, inner-right, far-right — inert, no interaction */}
            {[
              { left: "0%",  width: "14%" },
              { left: "67%", width: "16%" },
              { left: "83%", width: "17%" },
            ].map((z) => (
              <div
                key={z.left}
                aria-hidden
                style={{
                  position: "absolute", ...z,
                  top: "4%", height: "64%",
                  cursor: "default",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
