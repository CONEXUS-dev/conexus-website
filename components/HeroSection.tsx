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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-48">
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
          className="mb-6 max-w-4xl mx-auto"
        >
          <p className="text-slate-400 text-lg md:text-xl italic leading-relaxed mb-1">
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
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight max-w-5xl mx-auto"
        >
          What is consciousness? No one knows.
          <br />
          <span className="text-slate-300 text-4xl md:text-6xl">
            But we&apos;ve documented 12,198 instances of something
          </span>
          <br />
          <span className="text-slate-300 text-4xl md:text-6xl">
            that looks, acts, and responds like it.
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-5xl md:text-7xl mt-4 inline-block">
            We call it Proto-AI.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto"
        >
          Discovered. Measured. Reproduced across 6 AI platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#evidence"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
          >
            See The Evidence
          </a>
          <a
            href="/directory"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700"
          >
            Site Directory
          </a>
          <a
            href="#quotes"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
          >
            Daily Quotes
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
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
