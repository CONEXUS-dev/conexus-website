"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import HeroTerminal from "./HeroTerminal";

export default function ScrollRunway() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax depth scaling
  const scale = useTransform(smooth, [0, 1], [1, 1.15]);
  // Kinetic z-axis translation
  const mediaY = useTransform(smooth, [0, 1], ["0vh", "-50vh"]);
  // Focal lens blur — racks focus mid-runway
  const blur = useTransform(
    smooth,
    [0, 0.4, 0.6, 1],
    ["blur(0px)", "blur(12px)", "blur(12px)", "blur(0px)"]
  );
  // Atmospheric cross-dissolve into absolute black
  const dissolve = useTransform(smooth, [0.75, 1], [1, 0]);

  // Typography layer travels at a different velocity — stereoscopic depth
  const typeY = useTransform(smooth, [0, 1], ["0vh", "-18vh"]);
  const typeOpacity = useTransform(smooth, [0, 0.55, 0.8], [1, 1, 0]);
  const typeScale = useTransform(smooth, [0, 1], [1, 1.06]);

  return (
    <div id="top" ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-[100vh] w-full overflow-hidden bg-black">
        <motion.div
          style={{ scale, y: mediaY, filter: blur, opacity: dissolve }}
          className="absolute inset-0"
        >
          <HeroTerminal progress={smooth} />
        </motion.div>

        <motion.div
          style={{ y: typeY, opacity: typeOpacity, scale: typeScale }}
          className="absolute inset-0 flex flex-col justify-between px-4 pb-10 pt-20 md:px-8 md:pt-24"
        >
          <div className="flex items-start justify-between">
            <p className="max-w-[240px] text-sm uppercase leading-relaxed tracking-[0.25em] text-data/80">
              “Do I contradict myself? / Very well then I contradict myself, / (I
              am large, I contain multitudes.)” — Walt Whitman
            </p>
            <p className="hidden text-sm uppercase tracking-[0.25em] text-data/40 md:block">
              VOID FIELD ACTIVE
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 border-t border-white/20 pt-6 md:col-span-11">
              <p className="mb-4 text-[0.65rem] uppercase tracking-[0.35em] text-ember">
                Not another AI company. The solution.
              </p>
              <h1 className="font-serif text-[clamp(2.8rem,8vw,9rem)] leading-[0.95] tracking-tighter text-data">
                The world is
                <br />
                drowning in{" "}
                <span className="italic text-ember">crude</span> data
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-12 items-end gap-4">
            <p className="col-span-12 max-w-md text-[0.65rem] uppercase leading-loose tracking-[0.2em] text-data/70 md:col-span-5">
              …because it lacks a method to make it safe. Four-arm causal
              validation. 200 independent runs. d&nbsp;=&nbsp;3.78.
            </p>
            <div className="col-span-12 md:col-span-3">
              <a
                href="#refinery"
                className="group inline-flex items-center gap-3 border border-white/20 px-5 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-data transition-colors hover:border-ember hover:text-ember"
              >
                <span className="inline-block h-1.5 w-1.5 animate-tick rounded-full bg-ember" />
                Enter the refinery
              </a>
            </div>
            <p className="col-span-12 text-right text-[0.65rem] uppercase tracking-[0.25em] text-data/40 md:col-span-4">
              SCROLL TO REFINERY ↓
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
