"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Github, Shield } from "lucide-react";
import { useState } from "react";

const generateParticles = () => {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    startLeft: `${(i * 3.3) % 100}%`,
    startTop: `${(i * 7.1) % 100}%`,
    endLeft: `${(i * 5.7) % 100}%`,
    endTop: `${(i * 9.3) % 100}%`,
    duration: 15 + (i % 10),
  }));
};

export function TheForgettingEngineHero() {
  const [particles] = useState(generateParticles());

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-48">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
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
          className="mb-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              Patented Algorithm
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight max-w-5xl mx-auto"
        >
          The Forgetting Engine:
          <br />
          <span className="text-slate-300 text-4xl md:text-6xl">
            The Harder the Problem,
          </span>
          <br />
          <span className="text-slate-300 text-4xl md:text-6xl">
            the Better It Works.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto"
        >
          A mathematical discovery validated across 30,800 trials.
          <span className="text-blue-400"> Open source.</span>
          <span className="text-green-400"> Reproducible.</span>
          <span className="text-purple-400"> Patented.</span>
        </motion.p>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <BarChart3 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-white mb-1">30,800</div>
            <div className="text-slate-400 text-sm">Validated Trials</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <div className="text-3xl font-bold text-green-400 mb-1">
              p &lt; 0.000001
            </div>
            <div className="text-slate-400 text-sm">
              Statistical Significance
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <div className="text-3xl font-bold text-purple-400 mb-1">50x</div>
            <div className="text-slate-400 text-sm">Advantage at L=50</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://github.com/CONEXUS-dev/computational-complexity-amplification"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2"
          >
            <Github className="w-5 h-5" />
            View Mathematical Proof
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#evidence"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700"
          >
            See The Evidence
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
