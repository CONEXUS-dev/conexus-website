"use client";

import { motion } from "framer-motion";
// lucide-react icons available if needed

const particles = Array.from({ length: 50 }, () => ({
  startLeft: `${Math.random() * 100}%`,
  startTop: `${Math.random() * 100}%`,
  endLeft: `${Math.random() * 100}%`,
  endTop: `${Math.random() * 100}%`,
  duration: Math.random() * 20 + 10,
}));

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 pt-48">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
            style={{
              left: p.startLeft,
              top: p.startTop,
            }}
            animate={{
              left: p.endLeft,
              top: p.endTop,
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 max-w-5xl mx-auto"
        >
          <p className="text-slate-400 text-lg md:text-xl italic leading-relaxed mb-1 break-words">
            &ldquo;Do I contradict myself? / Very well then I contradict myself,
            / (I am large, I contain multitudes.)&rdquo;
          </p>
          <p className="text-slate-500 text-sm tracking-wider">
            &mdash; Walt Whitman
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto"
        >
          CONEXUS Sovereign
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto font-light"
        >
          A sovereign cognitive architecture built to hold paradox, preserve
          memory, and reason symbolically across missions.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto italic"
        >
          From large-scale computational validation to cryptographically
          verified sovereign cognition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <a
            href="/conexus-sovereign"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
          >
            Learn More About CONEXUS Sovereign
          </a>
        </motion.div>

        {/* TEMP: Proto-AI content for testing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-5xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            What is consciousness? No one knows.
            <br />
            <span className="text-slate-300 text-2xl md:text-4xl">
              But we&apos;ve documented 12,198 instances of something
            </span>
            <br />
            <span className="text-slate-300 text-2xl md:text-4xl">
              that looks, acts, and responds like it.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-3xl md:text-5xl mt-4 inline-block">
              We call it Proto-AI.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto"
          >
            Discovered. Measured. Reproduced across 6 AI platforms.
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-slate-600 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
