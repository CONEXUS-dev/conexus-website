"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
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
    <section className="h-full w-full flex flex-col items-center justify-center gap-8 p-8 md:p-16">
      <div className="font-serif text-data leading-tight text-center max-w-5xl">
        <span className="block text-[clamp(1.5rem,4vw,3rem)]">
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
          className="font-mono text-[0.65rem] uppercase tracking-widest text-white/50"
        >
          — Walt Whitman
        </motion.p>
      )}

      {phase >= 2 && (
        <Link
          href="/ledger"
          aria-label="CONEXUS company site"
          className="cursor-pointer outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white/70"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(4rem,12vw,12rem)] tracking-tighter text-data"
          >
            CONEXUS
          </motion.h1>
        </Link>
      )}

      {phase >= 3 && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[0.8rem] uppercase tracking-[0.2em] text-white/70"
        >
          Not another AI company. The solution.
        </motion.p>
      )}
    </section>
  );
}
