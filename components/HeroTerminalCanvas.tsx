"use client";

import { useRef, useEffect, useCallback } from "react";

interface Particle { x: number; y: number; speed: number; jitter: number; seed: number; rejected: boolean; rejectAt: number; }

const PARTICLE_COUNT = 220;
const GATE_X = 0.58;

type HeroTerminalCanvasProps = { progress: number };

export default function HeroTerminalCanvas({ progress }: HeroTerminalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const dprRef = useRef(1);
  const lastTimeRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const isVisibleRef = useRef(true);
  const clampedProgress = Math.max(0, Math.min(1, progress));

  const resize = useCallback(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    dprRef.current = dpr;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width; const height = rect.height;
    widthRef.current = width; heightRef.current = height;
    canvas.width = width * dpr; canvas.height = height * dpr;
    canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d"); if (ctx) ctx.scale(dpr, dpr);
  }, []);

  const spawn = useCallback((randomX = false): Particle => {
    const width = widthRef.current;
    return { x: randomX ? Math.random() * width : -0.05 * width + Math.random() * 0.05 * width, y: Math.random(), speed: 0.0016 + Math.random() * 0.0032, jitter: (Math.random() - 0.5) * 0.0015, seed: Math.random(), rejected: false, rejectAt: 0 };
  }, []);

  const initializeParticles = useCallback(() => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(spawn(true));
    particlesRef.current = particles;
  }, [spawn]);

  const draw = useCallback((time: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisibleRef.current) { animationFrameRef.current = requestAnimationFrame(draw); return; }
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const width = widthRef.current; const height = heightRef.current; const progress = clampedProgress;
    if (width === 0 || height === 0) { animationFrameRef.current = requestAnimationFrame(draw); return; }
    const refineThreshold = 0.35 + progress * 0.45;
    const trailAlpha = 0.22 - progress * 0.08;
    const gateX = width * GATE_X;
    ctx.fillStyle = `rgba(0, 0, 0, ${trailAlpha})`; ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.06 + progress * 0.05})`;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 5]);
    [-0.08, 0, 0.08].forEach(o => {
      const x = gateX + o * width;
      if (x > 0 && x < width) {
        const colTop = height * 0.65;
        const colBot = height * 0.88;
        ctx.beginPath();
        ctx.moveTo(x, colTop);
        ctx.lineTo(x + 0.02 * width, colBot);
        ctx.stroke();
      }
    });
    ctx.setLineDash([]);
    const particles = particlesRef.current; const now = performance.now();
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.speed * width * (0.6 + progress * 0.9);
      p.y += p.jitter * (1 - progress * 0.7);
      if (!p.rejected && p.x >= gateX && p.seed > refineThreshold) { p.rejected = true; p.rejectAt = now; }
      let alpha = 1, colorR = 190, colorG = 118, colorB = 60;
      if (p.rejected) {
        const elapsed = now - p.rejectAt;
        if (elapsed > 900) { particles[i] = spawn(false); continue; }
        alpha = 1 - elapsed / 900; p.y += 0.003 * (elapsed / 900); colorR = 140; colorG = 140; colorB = 140;
      } else if (p.x < gateX) { colorR = 190; colorG = 118; colorB = 60; alpha = 0.4; }
      else { colorR = 190; colorG = 226; colorB = 230; alpha = 0.55 + progress * 0.35; }
      const px = p.x; const py = p.y * height; const radius = 1.5;
      if (px > -10 && px < width + 10 && py > -10 && py < height + 10) { ctx.beginPath(); ctx.arc(px, py, radius, 0, Math.PI * 2); ctx.fillStyle = `rgba(${colorR}, ${colorG}, ${colorB}, ${alpha})`; ctx.fill(); }
      if (px > width + 50 || py > height + 50) particles[i] = spawn(false);
    }
    const refinementPercent = Math.round((refineThreshold - 0.35) / 0.45 * 100);
    const scrollIndex = Math.round(progress * 100);
    const readout = `REFINERY_STREAM // SCROLL_INDEX ${scrollIndex} / SUBTRACTION ${refinementPercent}%`;
    ctx.font = "11px 'JetBrains Mono', monospace"; ctx.fillStyle = "rgba(255, 255, 255, 0.15)"; ctx.textBaseline = "bottom"; ctx.fillText(readout, 20, height - 20);
    animationFrameRef.current = requestAnimationFrame(draw);
  }, [clampedProgress, spawn]);

  useEffect(() => { const mq = window.matchMedia("(prefers-reduced-motion: reduce)"); reducedMotionRef.current = mq.matches; const h = (e: MediaQueryListEvent) => { reducedMotionRef.current = e.matches; }; mq.addEventListener("change", h); return () => mq.removeEventListener("change", h); }, []);
  useEffect(() => { const h = () => { isVisibleRef.current = !document.hidden; }; document.addEventListener("visibilitychange", h); return () => document.removeEventListener("visibilitychange", h); }, []);
  useEffect(() => { const canvas = canvasRef.current; if (!canvas) return; resize(); initializeParticles(); window.addEventListener("resize", resize); lastTimeRef.current = performance.now(); animationFrameRef.current = requestAnimationFrame(draw); return () => { if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current); window.removeEventListener("resize", resize); }; }, [resize, initializeParticles, draw]);

  return <canvas ref={canvasRef} aria-hidden="true" className="fixed inset-0 z-0 h-full w-full pointer-events-none" />;
}