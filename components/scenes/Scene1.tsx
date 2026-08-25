"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const fullText = "Do I contradict myself? / Very well then I contradict myself, / (I am large, I contain multitudes.)";
const slowWord = "multitudes";

export default function Scene1() {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(0); // 0: typing, 1: whitman, 2: logo, 3: tagline
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Pre-calculate the slow word position for precise slowdown timing
  const multIndex = fullText.indexOf(slowWord);
  const multEndIndex = multIndex + slowWord.length;

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        const nextChar = fullText[index];
        setTyped((prev) => prev + nextChar);
        index++;

        // Slow down ONLY while typing the letters M-U-L-T-I-T-U-D-E-S
        const isTypingSlowWord = index >= multIndex && index < multEndIndex;
        
        timerRef.current = setTimeout(type, isTypingSlowWord ? 300 : 50);
      } else {
        timerRef.current = setTimeout(() => setPhase(1), 1000);
      }
    };

    timerRef.current = setTimeout(type, 800);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  useEffect(() => {
    if (phase === 1) timerRef.current = setTimeout(() => setPhase(2), 1200);
    if (phase === 2) timerRef.current = setTimeout(() => setPhase(3), 1500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [phase]);

  return (
    <section className="flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden px-4 py-14 [@media(max-height:650px)]:gap-2.5 [@media(max-height:650px)]:px-3 [@media(max-height:650px)]:py-12 md:gap-8 md:p-16">
      <div className="w-[calc(100%-5rem)] min-w-0 max-w-5xl -translate-x-6 text-center font-serif leading-[1.15] text-data [@media(max-height:650px)]:leading-[1.08] md:w-full md:translate-x-0 md:leading-tight">
        <span className="block text-[1.75rem] [@media(max-height:650px)]:text-[1.55rem] md:text-[clamp(1.5rem,4vw,3rem)]">
          {typed.split("/").map((line, i, arr) => (
            <span key={i} className="block">
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </span>
      </div>

      {phase >= 1 && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="font-mono text-[0.75rem] uppercase tracking-[0.15em] text-white/50 [@media(max-height:650px)]:text-[0.65rem] [@media(max-height:650px)]:tracking-widest md:text-[0.65rem] md:tracking-widest"
        >
          — Walt Whitman
        </motion.p>
      )}

      {phase >= 2 && (
        <Link
          href="/ledger"
          aria-label="CONEXUS company site"
          className="block w-[calc(100vw-6rem)] max-w-[46rem] -translate-x-7 cursor-pointer outline-none md:w-[min(78vw,64rem)] md:translate-x-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white/70"
        >
          <motion.span
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            <Image
              src="/branding/CONEXUS_Logo_White_Transparent.png"
              alt="CONEXUS"
              width={2172}
              height={724}
              priority
              sizes="(max-width: 767px) calc(100vw - 96px), min(78vw, 1024px)"
              className="h-auto w-full"
            />
          </motion.span>
        </Link>
      )}

      {phase >= 3 && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[90vw] text-center font-mono text-[0.9rem] uppercase leading-relaxed tracking-[0.16em] text-white/70 [@media(max-height:650px)]:text-[0.8rem] [@media(max-height:650px)]:leading-snug [@media(max-height:650px)]:tracking-[0.12em] md:text-[0.8rem] md:leading-normal md:tracking-[0.2em]"
        >
          Not another AI company. The solution.
        </motion.p>
      )}
    </section>
  );
}
