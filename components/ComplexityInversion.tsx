"use client";

import { motion } from "framer-motion";
import { TrendingUp, AlertCircle } from "lucide-react";

export function ComplexityInversion() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
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
            <AlertCircle className="w-12 h-12 text-yellow-400" />
            <span className="text-yellow-400 text-lg font-bold tracking-wider uppercase">
              Observed Benchmark Pattern
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            Complexity Inversion
          </h2>

          <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-6 font-bold">
            In selected tests, the relative advantage increased with scale.
          </p>

          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            CONEXUS uses the term complexity inversion for an experimental trend
            observed in several internal benchmarks. It is a testable research
            hypothesis, not a universal law about all algorithms or all hard
            problems.
          </p>
        </motion.div>

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
                Reference Baselines
              </h3>
            </div>
            <div className="space-y-4 text-lg text-slate-300">
              <p className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">1</span>
                <span>Each experiment used a stated comparison method.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">2</span>
                <span>
                  Baseline behavior varied by domain, scale, objective, and
                  configuration.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-400 text-2xl">3</span>
                <span>
                  Cross-domain percentages are not directly interchangeable.
                </span>
              </p>
            </div>
            <div className="mt-8 p-4 bg-red-950/50 rounded-xl border border-red-500/30">
              <p className="text-red-300 font-bold text-center">
                Interpretation depends on the benchmark
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
                Forgetting Engine Results
              </h3>
            </div>
            <div className="space-y-4 text-lg text-slate-300">
              <p className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">1</span>
                <span>Advantages were measured against the stated baselines.</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">2</span>
                <span>
                  Several benchmark series showed larger relative gaps at larger
                  tested scales.
                </span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">3</span>
                <span>
                  The largest reported comparison was approximately 561% in one
                  3D protein-folding study.
                </span>
              </p>
            </div>
            <div className="mt-8 p-4 bg-green-950/50 rounded-xl border border-green-500/30">
              <p className="text-green-300 font-bold text-center">
                Promising pattern, still open to independent testing
              </p>
            </div>
          </motion.div>
        </div>

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
                30,800
              </div>
              <p className="text-xl text-slate-300">
                Controlled optimization trials in the locked sweep
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mb-3">
                561%
              </div>
              <p className="text-xl text-slate-300">
                Largest reported relative improvement in a selected comparison
              </p>
            </div>
            <div>
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-3">
                6
              </div>
              <p className="text-xl text-slate-300">
                Computational benchmark areas in the current research portfolio
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-6">
            Why This Pattern Matters
          </h3>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Many valuable optimization problems become harder as the search
            space expands. A method whose relative advantage persists or grows
            with tested scale deserves further replication, stronger baselines,
            preregistration, and independent review.
          </p>
          <div className="inline-block bg-yellow-500/20 border-2 border-yellow-500 rounded-2xl px-8 py-4">
            <p className="text-xl font-bold text-yellow-300">
              Observed in CONEXUS benchmark runs. Generalization remains to be
              established.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
