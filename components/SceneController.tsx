"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";
import Scene3 from "./scenes/Scene3";
import Scene4 from "./scenes/Scene4";
import Scene5 from "./scenes/Scene5";
import Scene6 from "./scenes/Scene6";
import Scene7 from "./scenes/Scene7";
import Scene8 from "./scenes/Scene8";
import Scene9 from "./scenes/Scene9";
import HeroTerminalCanvas from "./HeroTerminalCanvas";
import KineticCursor from "./KineticCursor";

export default function SceneController() {
  const [scene, setScene] = useState(0);
  const [scene2Progress, setScene2Progress] = useState(0);
  const touchStartX = useRef(0);
  const lastTransitionTime = useRef(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const transitionScene = useCallback((direction: "next" | "prev" | "goto", target?: number) => {
    const now = Date.now();
    if (now - lastTransitionTime.current < 1200) return; // Debounce to prevent skipping
    lastTransitionTime.current = now;

    setScene((prev) => {
      if (direction === "next") return Math.min(prev + 1, 8);
      if (direction === "prev") return Math.max(prev - 1, 0);
      if (direction === "goto" && target !== undefined) return target;
      return prev;
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientX > window.innerWidth - 50) {
        transitionScene("next");
      } else if (e.clientX < 50) {
        transitionScene("prev");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [transitionScene]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX < -50) transitionScene("next");
    if (deltaX > 50) transitionScene("prev");
  };

  const handleScene2Progress = useCallback((progress: number) => {
    setScene2Progress(progress);
  }, []);

  const scenes = [
    <Scene1 key="scene1" />,
    <Scene2 key="scene2" onProgressChange={handleScene2Progress} scrollContainerRef={scrollContainerRef} onAdvance={() => transitionScene("next")} />,
    <Scene3 key="scene3" />,
    <Scene4 key="scene4" />,
    <Scene5 key="scene5" />,
    <Scene6 key="scene6" />,
    <Scene7 key="scene7" />,
    <Scene8 key="scene8" />,
    <Scene9 key="scene9" />,
  ];
const showHeroTerminal = scene === 0 || scene === 1;
  const heroProgress = scene === 0 ? 0.15 : scene === 1 ? scene2Progress : 0;

  return (
    <main 
      className="h-screen w-screen relative bg-void overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {showHeroTerminal && <HeroTerminalCanvas progress={heroProgress} />}

      {/* Edge Trigger Indicators */}
      <div className="absolute top-0 right-0 h-full w-[50px] z-50 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 h-full w-[50px] z-50 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          ref={scrollContainerRef}
          id="conexus-scroll-viewport"
          key={scene}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="absolute top-0 left-0 h-screen w-screen overflow-y-auto overflow-x-hidden relative z-10"
        >
          {scenes[scene]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {Array.from({ length: 9 }).map((_, i) => (
          <button
            key={i}
            onClick={() => transitionScene("goto", i)}
            data-magnetic
            className={`h-1 transition-all duration-300 ${
              scene === i ? "w-8 bg-data" : "w-2 bg-data/30"
            }`}
            aria-label={`Go to scene ${i + 1}`}
          />
        ))}
      </div>

      <KineticCursor />
    </main>
  );
}
