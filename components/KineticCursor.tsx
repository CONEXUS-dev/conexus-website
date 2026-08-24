"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

// Fraction of the pointer→target-center distance the reticle travels toward
// a hovered [data-magnetic] element. Overridable per element via
// data-magnetic-strength.
const DEFAULT_PULL = 0.35;

const RING_SPRING = { stiffness: 400, damping: 35, mass: 0.6 };
const DOT_SPRING = { stiffness: 1200, damping: 60, mass: 0.2 };

type MagneticTarget = { el: HTMLElement; strength: number };

export default function KineticCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Raw pointer coordinates — updated via MotionValues only, so mousemove
  // never triggers a React re-render.
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Pointer + magnetic pull; the reticle spring trails this smoothly.
  const attractX = useMotionValue(-100);
  const attractY = useMotionValue(-100);

  const ringX = useSpring(attractX, RING_SPRING);
  const ringY = useSpring(attractY, RING_SPRING);
  const dotX = useSpring(mouseX, DOT_SPRING);
  const dotY = useSpring(mouseY, DOT_SPRING);

  const magnetRef = useRef<MagneticTarget | null>(null);
  const hasMovedRef = useRef(false);

  useEffect(() => {
    // Touch devices keep the native cursor; the hiding class is only added
    // here, so native cursors also remain the fallback if this JS never runs.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("kinetic-cursor");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const magnet = magnetRef.current;
      if (magnet) {
        // Magnetic pull: A = P + (C − P) × k, where C is the hovered
        // element's center and P the pointer. |C − P| is bounded by half the
        // element's diagonal, so the reticle never overshoots it.
        const rect = magnet.el.getBoundingClientRect();
        attractX.set(e.clientX + (rect.left + rect.width / 2 - e.clientX) * magnet.strength);
        attractY.set(e.clientY + (rect.top + rect.height / 2 - e.clientY) * magnet.strength);
      } else {
        attractX.set(e.clientX);
        attractY.set(e.clientY);
      }

      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        setVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target instanceof Element ? e.target.closest("[data-magnetic]") : null;
      if (target instanceof HTMLElement) {
        magnetRef.current = {
          el: target,
          strength: Number(target.dataset.magneticStrength) || DEFAULT_PULL,
        };
        setHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const magnet = magnetRef.current;
      if (!magnet) return;
      // Ignore moves between descendants of the same magnetic element.
      if (e.relatedTarget instanceof Node && magnet.el.contains(e.relatedTarget)) return;
      magnetRef.current = null;
      setHovered(false);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => {
      if (hasMovedRef.current) setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      document.documentElement.classList.remove("kinetic-cursor");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [mouseX, mouseY, attractX, attractY]);

  if (!enabled) return null;

  return (
    <>
      {/* Reticle ring — spring-trailing, magnetically snapped */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovered ? 1.9 : 1, rotate: hovered ? 45 : 0, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <div className="relative -ml-[14px] -mt-[14px] h-7 w-7 border border-white/70">
          {/* Corner crosshair ticks */}
          <span className="absolute left-1/2 -top-[5px] h-[5px] w-px -translate-x-1/2 bg-white/70" />
          <span className="absolute left-1/2 -bottom-[5px] h-[5px] w-px -translate-x-1/2 bg-white/70" />
          <span className="absolute top-1/2 -left-[5px] w-[5px] h-px -translate-y-1/2 bg-white/70" />
          <span className="absolute top-1/2 -right-[5px] w-[5px] h-px -translate-y-1/2 bg-white/70" />
        </div>
      </motion.div>

      {/* Center dot — tracks the true pointer with near-zero latency */}
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: hovered ? 0.4 : 1, opacity: visible ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="-ml-[1.5px] -mt-[1.5px] h-[3px] w-[3px] rounded-full bg-white" />
      </motion.div>
    </>
  );
}
