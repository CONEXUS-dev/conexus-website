"use client";

import { useEffect, useRef } from "react";
import type { MotionValue } from "motion/react";

interface Particle {
  x: number;
  y: number;
  speed: number;
  jitter: number;
  seed: number;
  rejected: boolean;
  rejectAt: number;
}

const PARTICLE_COUNT = 220;
const GATE_X = 0.58; // refinery column position (fraction of width)

export default function HeroTerminal({ progress }: { progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    progress.on("change", (v) => {
      progressRef.current = v;
    });
  }, [progress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const spawn = (randomX = false): Particle => ({
      x: randomX ? Math.random() : -0.05 * width + Math.random() * 0.05 * width,
      y: Math.random(),
      speed: 0.0016 + Math.random() * 0.0032,
      jitter: (Math.random() - 0.5) * 0.0015,
      seed: Math.random(),
      rejected: false,
      rejectAt: 0,
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (particles.length === 0) {
        particles = Array.from({ length: PARTICLE_COUNT }, () => spawn(true));
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const p = progressRef.current;
      // refinement intensity rises with scroll; more crude particles get subtracted
      const refineThreshold = 0.35 + p * 0.45;
      const trailAlpha = 0.22 - p * 0.08;

      // trail wash
      ctx.fillStyle = `rgba(0, 0, 0, ${trailAlpha})`;
      ctx.fillRect(0, 0, width, height);

      // refinery columns
      const gx = width * GATE_X;
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 + p * 0.05})`;
      ctx.lineWidth = 1;
      for (let i = 1; i <= 3; i++) {
        const x = gx + i * 26;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + 12, height);
        ctx.stroke();
      }

      for (const pt of particles) {
        pt.x += pt.speed * width * (0.6 + p * 0.9);
        pt.y += pt.jitter * (1 - p * 0.7); // turbulence settles as refinement rises

        const gateX = width * GATE_X;
        if (!pt.rejected && pt.x >= gateX && pt.x <= gateX + pt.speed * width + 2) {
        if (pt.seed > refineThreshold) {
          pt.rejected = true;
          pt.rejectAt = performance.now();
        }
        }

        const px = pt.x;
        const py = pt.y * height;
        const outOfBounds = px > width + 8 || pt.y < -0.02 || pt.y > 1.02;

        if (pt.rejected) {
          // subtracted particle: sinks and dissolves
          const age = (performance.now() - pt.rejectAt) / 900;
          if (age < 1) {
            ctx.fillStyle = `rgba(140, 140, 140, ${0.5 * (1 - age)})`;
            ctx.fillRect(px, py + age * age * 60, 1.5, 1.5);
          }
        } else {
          const passed = px > gateX;
          // crude = dim ember noise; refined = cool bright signal
          ctx.fillStyle = passed
            ? `rgba(190, 226, 230, ${0.55 + p * 0.35})`
            : `rgba(190, 118, 60, 0.4)`;
          ctx.fillRect(px, py, passed ? 2 : 1.5, passed ? 2 : 1.5);
        }

        if (outOfBounds || (pt.rejected && performance.now() - pt.rejectAt > 900)) {
          Object.assign(pt, spawn());
        }
      }

      // scan index readout tied to scroll
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.fillText(
        `REFINERY_STREAM // SCROLL_INDEX ${(p * 100).toFixed(1).padStart(5, "0")} / SUBTRACTION ${(
          refineThreshold * 100
        ).toFixed(1)}%`,
        14,
        height - 14
      );

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
