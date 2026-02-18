"use client";

import { motion } from "framer-motion";
import { TrendingUp, AlertCircle } from "lucide-react";

export function ComplexityInversion() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertCircle className="w-12 h-12 text-yellow-400 animate-pulse" />
            <span className="text-yellow-400 text-lg font-bold tracking-wider uppercase">
              The Paradigm Shift
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Complexity Inversion
          </h2>

          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-6 font-bold">
            The Harder The Problem, The Better It Works
          </p>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            For 79 years, every algorithm got worse as problems got harder. The
            Forgetting Engine does the opposite—it gets exponentially better on
            complex problems.
          </p>
        </motion.div>

        {/* Visual Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-red-900/30 to-red-950/50 border-2 border-red-500/50 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-red-400 rotate-180" />
              <h3 className="text-3xl font-bold text-red-400">
                Traditional Algorithms
              </h3>
            </div>
            <div className="space-y-4 text-lg text-slate-300">
              <p className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">↓</span>
                <span>Simple problems: Works okay</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">↓↓</span>
                <span>Medium problems: Gets worse</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">↓↓↓</span>
                <span>Hard problems: Fails completely</span>
              </p>
            </div>
            <div className="mt-8 p-4 bg-red-950/50 rounded-xl border border-red-500/30">
              <p className="text-red-400 font-bold text-center">
                Performance Degrades With Complexity
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-900/30 to-emerald-950/50 border-2 border-green-500/50 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <h3 className="text-3xl font-bold text-green-400">
                Forgetting Engine
              </h3>
            </div>
            <div className="space-y-4 text-lg text-slate-300">
              <p className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">↑</span>
                <span>Simple problems: 80% better</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">↑↑</span>
                <span>Medium problems: 200% better</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">↑↑↑</span>
                <span>Hard problems: 561% better</span>
              </p>
            </div>
            <div className="mt-8 p-4 bg-green-950/50 rounded-xl border border-green-500/30">
              <p className="text-green-400 font-bold text-center">
                Performance IMPROVES With Complexity
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-red-900/30 border-2 border-purple-500/50 rounded-3xl p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                7×
              </div>
              <p className="text-xl text-slate-300">
                Advantage multiplier on hard problems vs easy problems
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mb-3">
                561%
              </div>
              <p className="text-xl text-slate-300">
                Better on 3D protein folding (hardest test)
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-3">
                79
              </div>
              <p className="text-xl text-slate-300">
                Years of algorithmic assumptions overturned
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-6">
            Why This Changes Everything
          </h3>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            The most important problems—drug discovery, climate modeling,
            quantum computing—are the hardest ones. Traditional algorithms fail
            exactly where we need them most. The Forgetting Engine succeeds
            exactly where they fail.
          </p>
          <div className="inline-block bg-yellow-500/20 border-2 border-yellow-500 rounded-2xl px-8 py-4">
            <p className="text-2xl font-bold text-yellow-400">
              This isn&apos;t just better. This is a fundamental paradigm shift.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
