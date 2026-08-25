"use client";

import { useState, useRef, useCallback } from "react";
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

type SceneDirection = "next" | "prev";
type MotionDirection = 1 | -1;

const sceneVariants = {
  enter: (direction: MotionDirection) => ({ x: direction === 1 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit: (direction: MotionDirection) => ({ x: direction === 1 ? "-100%" : "100%" }),
};

function SceneChevron({ direction, onClick }: { direction: SceneDirection; onClick: () => void }) {
  const isPrevious = direction === "prev";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrevious ? "Previous scene" : "Next scene"}
      className={`group fixed top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center text-white/50 outline-none transition-colors hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white/80 active:text-white ${
        isPrevious
          ? "left-2 sm:left-4 md:left-7 active:[&>svg]:-translate-x-1"
          : "right-2 sm:right-4 md:right-7 active:[&>svg]:translate-x-1"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 40"
        className="h-10 w-6 transition-transform duration-100 md:h-12 md:w-7"
        fill="none"
      >
        <polyline
          points="4 2 20 20 4 38"
          transform={isPrevious ? "translate(24 0) scale(-1 1)" : undefined}
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="square"
          strokeLinejoin="miter"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </button>
  );
}

export default function SceneController() {
  const [scene, setScene] = useState(0);
  const [direction, setDirection] = useState<MotionDirection>(1);
  const [scene2Progress, setScene2Progress] = useState(0);
  const transitionLock = useRef(false);
  const transitionTarget = useRef<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const transitionScene = useCallback((nextDirection: SceneDirection) => {
    if (transitionLock.current) return;

    const nextScene = nextDirection === "next" ? Math.min(scene + 1, 8) : Math.max(scene - 1, 0);
    if (nextScene === scene) return;

    transitionLock.current = true;
    transitionTarget.current = nextScene;
    setDirection(nextDirection === "next" ? 1 : -1);
    setScene(nextScene);
  }, [scene]);

  const handleTransitionComplete = useCallback(() => {
    if (transitionTarget.current !== scene) return;
    transitionLock.current = false;
    transitionTarget.current = null;
  }, [scene]);

  const handleScene2Progress = useCallback((progress: number) => {
    setScene2Progress(progress);
  }, []);

  const scenes = [
    <Scene1 key="scene1" />,
    <Scene2 key="scene2" onProgressChange={handleScene2Progress} scrollContainerRef={scrollContainerRef} />,
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
    <main className="h-screen w-screen relative bg-void overflow-hidden">
      {showHeroTerminal && <HeroTerminalCanvas progress={heroProgress} />}

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          ref={scrollContainerRef}
          id="conexus-scroll-viewport"
          key={scene}
          custom={direction}
          variants={sceneVariants}
          initial="enter"
          animate="center"
          exit="exit"
          onAnimationComplete={handleTransitionComplete}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="absolute top-0 left-0 h-screen w-screen overflow-y-auto overflow-x-hidden relative z-10"
        >
          {scenes[scene]}
        </motion.div>
      </AnimatePresence>

      {scene > 0 && <SceneChevron direction="prev" onClick={() => transitionScene("prev")} />}
      {scene < 8 && <SceneChevron direction="next" onClick={() => transitionScene("next")} />}

      {/* Scene Position Indicators */}
      <div
        role="status"
        aria-label={`Scene ${scene + 1} of 9`}
        className="pointer-events-none fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 gap-2"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={`h-1 transition-all duration-300 ${
              scene === i ? "w-8 bg-data" : "w-2 bg-data/30"
            }`}
          />
        ))}
      </div>

      <KineticCursor />
    </main>
  );
}
