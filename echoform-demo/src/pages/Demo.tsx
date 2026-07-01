import "../components/demo/demo.css"; // demo-scoped: demo-btn, demo-veil, focus-visible, keyframes
import { useState, useCallback, useRef } from "react";
import { EclipseOrb } from "@/components/EclipseOrb";
import DemoIntro from "@/components/demo/DemoIntro";
import DemoOnboarding from "@/components/demo/DemoOnboarding";
import DemoIdentityConfirm from "@/components/demo/DemoIdentityConfirm";
import DemoCalibration from "@/components/demo/DemoCalibration";
import DemoLobby from "@/components/demo/DemoLobby";
import DemoDreamEntry from "@/components/demo/DemoDreamEntry";
import DemoDreamSelector from "@/components/demo/DemoDreamSelector";
import DemoProcessing from "@/components/demo/DemoProcessing";
import DemoReveal from "@/components/demo/DemoReveal";
import DemoChosenMirror from "@/components/demo/DemoChosenMirror";
import DreamGallery from "@/components/demo/DreamGallery";
import SystemFlowDiagram from "@/components/demo/SystemFlowDiagram";
import type { DemoDream, DemoMirror } from "@/components/demo/demoData";
import {
  isDemoIdentityConfirmed,
  setDemoIdentityConfirmed,
  getCompletedDreamIds,
  addCompletedDreamId,
  getDemoHistory,
  addDemoHistoryEntry,
  type DemoHistoryEntry,
} from "@/components/demo/demoState";

// ── Note: "demo.css" is imported once here so all child components inherit
// ── the .demo-btn, .demo-mirror-zone, and keyframe rules without injecting
// ── their own <style> blocks.

type Phase =
  | "intro"
  | "onboarding"
  | "identity_confirm"
  | "calibration"       // NEW: short ritual bridge after identity confirm
  | "lobby"
  | "dream_entry"
  | "selector"
  | "processing"
  | "reveal"
  | "chosen"
  | "gallery";

// ── Transition veil timing ────────────────────────────────────
const VEIL_IN_MS  = 200; // ms for veil to fade to black
const VEIL_OUT_MS = 400; // ms for veil to fade from black

// ── Shared-orb FLIP overlay ───────────────────────────────────
// Used only for the intro → onboarding transition, which bypasses the veil
// so the user sees the orb fly from its intro position to the onboarding
// target position.
//
// "placed"    — overlay created at exact intro orb rect; destination not yet
//               measured (onboarding is mounting).
// "animating" — destination rect measured; CSS transform transition running.
// "fadingOut" — overlay has landed; real onboarding orb revealed underneath;
//               overlay fading to 0 opacity before removal.
interface OrbOverlayData {
  stage:    "placed" | "animating" | "fadingOut";
  fromRect: DOMRect;
  toRect:   DOMRect | null;
}

function DemoShell() {
  const baseUrl = import.meta.env.BASE_URL;

  // displayPhase is what's actually rendered; transitionTo switches it via veil
  const [displayPhase, setDisplayPhase] = useState<Phase>(() =>
    isDemoIdentityConfirmed() ? "lobby" : "intro",
  );

  // Veil overlay state (always in DOM, opacity-driven)
  const [veilOpacity, setVeilOpacity] = useState(0);
  const [veilMs, setVeilMs]           = useState(0);

  // Reduced-motion: read once, stable across renders
  const prefersRM = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  // ── Shared-orb FLIP state ──────────────────────────────────
  const [orbOverlay, setOrbOverlay] = useState<OrbOverlayData | null>(null);
  // Cleanup ref so we can cancel the post-fade removal timer if needed.
  const overlayCleanupRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Called by DemoIntro on tap.  rect is null when prefers-reduced-motion is set.
  const handleIntroBegin = useCallback((fromRect: DOMRect | null) => {
    if (!fromRect || prefersRM.current) {
      // Reduced-motion or measurement failed: instant switch without overlay.
      setDisplayPhase("onboarding");
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // Create overlay at the exact measured intro orb position.
    setOrbOverlay({ stage: "placed", fromRect, toRect: null });

    // Switch phase after intro text fades (1100ms transition + 100ms buffer).
    // DemoIntro is still mounted during this window but its orb is already
    // hidden (handoffActive=true) and covered by the overlay.
    setTimeout(() => {
      setDisplayPhase("onboarding");
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 1200);
  }, []); // stable — no external deps

  // Called by DemoOnboarding after its first paint (via useEffect → onOrbMounted).
  // Waits one RAF for layout paint, then holds the overlay at the intro bottom
  // position for ~1000ms (the ceremonial "alone-orb" moment — user sees only
  // the eclipse glowing before it moves).  Then measures destination and animates.
  const handleOnboardingOrbMounted = useCallback((el: HTMLElement) => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        const toRect = el.getBoundingClientRect();
        setOrbOverlay(prev =>
          prev?.stage === "placed" ? { ...prev, stage: "animating", toRect } : prev,
        );
      }, 1000);
    });
  }, []); // stable

  // Fires when the overlay's CSS transform transition completes.
  // Reveals the real onboarding orb and starts the overlay fade-out.
  const handleOrbTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.propertyName !== "transform") return;
      setOrbOverlay(prev =>
        prev?.stage === "animating" ? { ...prev, stage: "fadingOut" } : prev,
      );
      if (overlayCleanupRef.current) clearTimeout(overlayCleanupRef.current);
      overlayCleanupRef.current = setTimeout(() => {
        setOrbOverlay(null);
        overlayCleanupRef.current = null;
      }, 260);
    },
    [],
  ); // stable

  // Derived: when false, DemoOnboarding hides orb/content while overlay is flying.
  const onboardingOrbVisible     = orbOverlay === null || orbOverlay.stage === "fadingOut";
  const onboardingContentVisible = orbOverlay === null || orbOverlay.stage === "fadingOut";

  // ── Cinematic transition function ──────────────────────────
  // Fades the veil to black (VEIL_IN_MS), switches content at
  // the darkest point, then fades back out (VEIL_OUT_MS).
  const transitionTo = useCallback((next: Phase) => {
    if (prefersRM.current) {
      // Reduced-motion: instant switch, no animation
      setDisplayPhase(next);
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // Step 1 — fade to black
    setVeilMs(VEIL_IN_MS);
    setVeilOpacity(1);

    // Step 2 — at darkest point: switch content, start fade-out
    setTimeout(() => {
      setDisplayPhase(next);
      window.scrollTo({ top: 0, behavior: "instant" });
      setVeilMs(VEIL_OUT_MS);
      setVeilOpacity(0);
    }, VEIL_IN_MS + 20); // +20ms buffer for transition to paint
  }, []);

  // ── Phase callbacks ────────────────────────────────────────
  const [currentDream, setCurrentDream] = useState<DemoDream | null>(null);
  const [chosenMirror, setChosenMirror] = useState<DemoMirror | null>(null);
  const [completedIds, setCompletedIds] = useState<number[]>(() =>
    getCompletedDreamIds(),
  );
  const [history, setHistory] = useState<DemoHistoryEntry[]>(() =>
    getDemoHistory(),
  );

  const handleIdentityConfirm = useCallback(() => {
    setDemoIdentityConfirmed();
    setCompletedIds([]);
    setHistory([]);
    transitionTo("calibration"); // → calibration bridge → lobby
  }, [transitionTo]);

  const handleSelectDream = useCallback((dream: DemoDream) => {
    setCurrentDream(dream);
    setChosenMirror(null);
    transitionTo("processing");
  }, [transitionTo]);

  const handleProcessingComplete = useCallback(() => {
    transitionTo("reveal");
  }, [transitionTo]);

  const handleChooseMirror = useCallback((mirror: DemoMirror) => {
    setChosenMirror(mirror);
    transitionTo("chosen");
  }, [transitionTo]);

  // Called by DemoChosenMirror AFTER its internal sealing animation
  const handleReturnToLobby = useCallback(() => {
    if (currentDream && chosenMirror) {
      const entry: DemoHistoryEntry = {
        dreamId:          currentDream.id,
        dreamTitle:       currentDream.title,
        dreamText:        currentDream.fullText,
        chosenMirrorRank: chosenMirror.rank,
        mirrors:          currentDream.mirrors.map((m) => ({
          ...m,
          chosen: m.rank === chosenMirror.rank,
        })),
        completedAt:      new Date().toISOString(),
      };
      addDemoHistoryEntry(entry);
      addCompletedDreamId(currentDream.id);
      setHistory(getDemoHistory());
      setCompletedIds(getCompletedDreamIds());
    }
    setCurrentDream(null);
    setChosenMirror(null);
    transitionTo("lobby");
  }, [currentDream, chosenMirror, transitionTo]);

  // ── Render ─────────────────────────────────────────────────
  let content: React.ReactNode = null;

  if (displayPhase === "intro") {
    // onBegin receives the measured intro-orb DOMRect (or null for reduced-motion).
    // handleIntroBegin creates the shared overlay and switches phase after text fades.
    content = <DemoIntro onBegin={handleIntroBegin} />;
  } else if (displayPhase === "onboarding") {
    content = (
      <DemoOnboarding
        onAdvance={() => transitionTo("identity_confirm")}
        onOrbMounted={handleOnboardingOrbMounted}
        orbVisible={onboardingOrbVisible}
        contentVisible={onboardingContentVisible}
      />
    );
  } else if (displayPhase === "identity_confirm") {
    content = <DemoIdentityConfirm onConfirm={handleIdentityConfirm} />;
  } else if (displayPhase === "calibration") {
    content = (
      <DemoCalibration onComplete={() => transitionTo("lobby")} />
    );
  } else if (displayPhase === "lobby") {
    content = (
      <DemoLobby
        history={history}
        baseUrl={baseUrl}
        onDreamEntry={() => transitionTo("dream_entry")}
        onShowGallery={() => transitionTo("gallery")}
      />
    );
  } else if (displayPhase === "dream_entry") {
    content = <DemoDreamEntry onAdvance={() => transitionTo("selector")} />;
  } else if (displayPhase === "selector") {
    content = (
      <DemoDreamSelector
        completedIds={completedIds}
        onSelectDream={handleSelectDream}
        onViewHistory={() => transitionTo("lobby")}
      />
    );
  } else if (displayPhase === "processing" && currentDream) {
    content = (
      <DemoProcessing
        dreamTitle={currentDream.title}
        onComplete={handleProcessingComplete}
      />
    );
  } else if (displayPhase === "reveal" && currentDream) {
    content = (
      <DemoReveal
        dream={currentDream}
        baseUrl={baseUrl}
        onChoose={handleChooseMirror}
      />
    );
  } else if (displayPhase === "chosen" && currentDream && chosenMirror) {
    content = (
      <DemoChosenMirror
        dream={currentDream}
        mirror={chosenMirror}
        baseUrl={baseUrl}
        onReturn={handleReturnToLobby}
      />
    );
  } else if (displayPhase === "gallery") {
    content = (
      <div className="min-h-screen bg-[#08060a]">
        <div className="sticky top-0 z-30 bg-[#08060a]/95 backdrop-blur-sm border-b border-white/8 px-6 py-3 flex items-center justify-between">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Evidence Gallery
          </span>
          <button
            onClick={() => transitionTo("lobby")}
            className="demo-btn text-amber-400/60 hover:text-amber-400/90 text-sm transition-colors"
            style={{ fontFamily: "'Cinzel', Georgia, serif", background: "none", border: "none", cursor: "pointer" }}
          >
            ← Mirror Hall
          </button>
        </div>
        <div
          className="px-6 py-8 border-b border-white/8"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(251,191,36,0.04) 0%, transparent 70%)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            <p className="text-amber-400/60 text-xs tracking-[0.3em] uppercase mb-2">
              CONEXUS · QA Evidence
            </p>
            <h1 className="text-white text-3xl font-light mb-2">ECHOform</h1>
            <p className="text-white/50 text-base max-w-xl leading-relaxed">
              ECHOform turns a dream into three symbolic mirror reflections — each
              one routed to a different layer of the dreamer's psyche.
            </p>
            <div className="flex flex-wrap gap-4 mt-5">
              {[
                ["20", "mirror tiers"],
                ["5/5", "AI-routed sessions"],
                ["15", "real images generated"],
                ["0", "deterministic fallbacks"],
              ].map(([val, label]) => (
                <div key={label} className="flex items-baseline gap-1.5">
                  <span className="text-amber-400 text-lg font-light">{val}</span>
                  <span className="text-white/30 text-xs">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <SystemFlowDiagram />
        <DreamGallery baseUrl={baseUrl} />
        <footer className="border-t border-white/8 px-6 py-6 mt-8">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-white/20 text-xs">
            <p>CONEXUS · ECHOform 1.0 · 5-Dream QA Passed · 2026-06-29</p>
            <p>Confidential — for investor and advisor use only</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <>
      {content}

      {/* ── Shared-orb FLIP overlay (intro → onboarding only) ──
          Fixed-position clone of the EclipseOrb that flies from the measured
          intro rect to the measured onboarding rect, bypassing the black veil.
          z-index 9998 = above all content (z-10) but below the veil (9999).

          Architecture:
          • "placed"    → overlay at fromRect, transform translate(0,0), no transition.
                          Orb sits here for ~750ms while intro text fades out.
          • "animating" → toRect is measured; transform transitions to (dx,dy)
                          over 1050ms.  Only transform transitions (compositor-only
                          on mobile Chrome — no layout, no paint repaints).
          • "fadingOut" → overlay has landed; real onboarding orb revealed in same
                          position; overlay opacity transitions to 0 (220ms) before
                          being removed from DOM.

          Float is intentionally omitted from this EclipseOrb — matching the static
          orbs in both DemoIntro and DemoOnboarding during the handoff window, so
          all three share the same non-animated visual position. */}
      {orbOverlay && (
        <div
          aria-hidden
          style={{
            position:      "fixed",
            zIndex:        9998,
            pointerEvents: "none",
            // Anchor at the intro orb's layout position (never changes).
            left:   orbOverlay.fromRect.left,
            top:    orbOverlay.fromRect.top,
            width:  orbOverlay.fromRect.width,
            height: orbOverlay.fromRect.height,
            // Transform-only movement: runs on GPU compositor, zero layout repaints.
            // dx/dy = measured vector from intro position to onboarding position.
            transform: (
              (orbOverlay.stage === "animating" || orbOverlay.stage === "fadingOut") &&
              orbOverlay.toRect
            )
              ? `translate(${orbOverlay.toRect.left - orbOverlay.fromRect.left}px, ${orbOverlay.toRect.top - orbOverlay.fromRect.top}px)`
              : "translate(0px, 0px)",
            opacity: orbOverlay.stage === "fadingOut" ? 0 : 1,
            transition: orbOverlay.stage === "animating"
              ? "transform 2100ms cubic-bezier(0.37,0,0.63,1)"
              : orbOverlay.stage === "fadingOut"
              ? "opacity 220ms ease"
              : "none",
            willChange: "transform, opacity",
          }}
          onTransitionEnd={handleOrbTransitionEnd}
        >
          {/* No float — static orb matches the hidden intro and onboarding orbs
              exactly.  mist defaults to true for size="lg". */}
          <EclipseOrb size="lg" />
        </div>
      )}

      {/* ── Dark/gold transition veil ──────────────────────────
          Always in DOM; opacity-driven so CSS transition fires correctly.
          pointerEvents: auto while visible to block spurious taps mid-transition.
          z-index 9999 = above the shared-orb overlay (9998). */}
      <div
        className="demo-veil"
        aria-hidden
        style={{
          opacity: veilOpacity,
          transition: `opacity ${veilMs}ms ease`,
          pointerEvents: veilOpacity > 0 ? "auto" : "none",
        }}
      />
    </>
  );
}

export default function Demo() {
  return <DemoShell />;
}
