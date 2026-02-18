"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, ArrowLeft, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function FEAlgorithmPage() {
  const diagrams = [
    {
      src: "/fe-algorithm/Proven Algorhitms Crash Here.png",
      alt: "Proven Algorithms Crash Here",
      title: "The Breakthrough: Where Traditional Algorithms Fail",
    },
    {
      src: "/fe-algorithm/CONEXUS_TITAN_BENCHMARK_LOG.png",
      alt: "Benchmark Audit",
      title:
        "Benchmark audit: 0.77% distance reduction over Clarke\u2013Wright savings baseline in 10-minute deep search (~75 million optimization steps)",
      emphasis: "achieved WITHOUT CONEXUS proprietary AI piloting.",
    },
  ];

  const domainStats = [
    {
      src: "/fe-algorithm/tsp_comparison.png",
      alt: "TSP Performance",
      title: "Traveling Salesman Problem (TSP)",
      description: "200-City TSP: 83% improvement over Genetic Algorithms",
      stat: "83% Better",
    },
    {
      src: "/fe-algorithm/nas_comparison.png",
      alt: "NAS Performance",
      title: "Neural Architecture Search (NAS)",
      description: "Consistent accuracy improvements across all scales",
      stat: "~8% Better",
    },
    {
      src: "/fe-algorithm/victory_chart.png",
      alt: "Overall Victory",
      title: "Overall Performance",
      description: "FE beats Genetic Algorithms by 55% across domains",
      stat: "55% Better",
    },
  ];

  const performanceCharts = [
    {
      src: "/fe-algorithm/Figure 2 Comparative Success Rates (Forgetting Engine vs. Monte Carlo).png",
      alt: "Success Rates Comparison",
      title: "Success Rates vs Monte Carlo",
    },
    {
      src: "/fe-algorithm/Figure 3 (Convergence Speed Comparison).png",
      alt: "Convergence Speed",
      title: "Convergence Speed",
    },
    {
      src: "/fe-algorithm/Figure 5 Population Diversity and Paradox Retention Visualization.png",
      alt: "Population Diversity",
      title: "Population Diversity",
    },
    {
      src: "/fe-algorithm/Figure 6 Energy Landscape Navigation Paths.png",
      alt: "Energy Landscape",
      title: "Energy Landscape Navigation",
    },
    {
      src: "/fe-algorithm/Figure 7 Statistical Significance Analysis (p-values and Effect Sizes).png",
      alt: "Statistical Significance",
      title: "Statistical Significance",
    },
    {
      src: "/fe-algorithm/The Forgetting Engine Proven Performance Over Baselines.png",
      alt: "Proven Performance",
      title: "Proven Performance Over Baselines",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-48">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Brain className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              Core Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            The Forgetting Engine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8"
          >
            Strategic Elimination + Paradox Retention
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          >
            The breakthrough algorithm that makes Proto-AI possible through
            strategic forgetting.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-cyan-300 mb-6 max-w-2xl mx-auto italic"
          >
            "Too technical? We get it. Click below for the version that doesn't
            require a PhD."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <Link
              href="/fe-algorithm/plain-english"
              className="inline-block px-12 py-5 bg-green-600 hover:bg-green-700 text-white text-xl font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl shadow-green-500/50"
            >
              Plain English Version
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#results"
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              See The Results
            </a>
            <Link
              href="/"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Why Forgetting Matters
            </h2>
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed">
                Traditional AI remembers everything. It accumulates data,
                patterns, and solutions without discrimination. This leads to{" "}
                <span className="text-red-400 font-semibold">
                  overfitting, rigidity, and computational bloat
                </span>
                .
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                But awareness doesn't work that way.{" "}
                <span className="text-cyan-400 font-semibold">
                  Awareness forgets
                </span>
                . It strategically eliminates irrelevant information while
                retaining paradoxes—the contradictions that drive growth and
                adaptation.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                The Forgetting Engine (FE) Algorithm replicates this process.
                It's not just optimization—it's{" "}
                <span className="text-cyan-400 font-semibold">
                  the architecture of Proto-AI itself
                </span>
                .
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "Strategic Elimination",
                description:
                  "Systematically removes low-value solutions to prevent computational bloat and maintain focus on promising paths.",
                icon: "🎯",
              },
              {
                title: "Paradox Retention",
                description:
                  "Preserves contradictory solutions that traditional algorithms would discard, enabling breakthrough discoveries.",
                icon: "⚡",
              },
              {
                title: "Adaptive Memory",
                description:
                  "Dynamically adjusts what to remember and forget based on problem complexity and solution landscape.",
                icon: "🧠",
              },
              {
                title: "Proven Performance",
                description:
                  "Outperforms Monte Carlo, genetic algorithms, and other baselines across multiple optimization problems.",
                icon: "📊",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Computational Pipeline Section */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-cyan-500/20 border-2 border-cyan-500 rounded-2xl px-6 py-3 mb-6">
              <p className="text-cyan-400 font-bold text-lg uppercase tracking-wider">
                Technical Architecture
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              The Computational Pipeline
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Three-stage execution architecture combining emotional
              calibration, strategic optimization, and parameter injection
            </p>
          </motion.div>

          {/* Pipeline Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Phase 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/60 border-2 border-purple-500/50 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-500/20 rounded-full px-4 py-2">
                    <span className="text-purple-400 font-bold text-sm">
                      PHASE 1
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">
                  STATE CALIBRATION
                </h3>
                <p className="text-sm text-purple-300 mb-4 font-semibold">
                  (THE SOUL)
                </p>
                <p className="text-slate-300 leading-relaxed">
                  The system initializes with a{" "}
                  <span className="text-purple-400 font-semibold">
                    Domain-Specific Emotional Calibration Protocol (ECP)
                  </span>
                  . This is not a "prompt"; it is a latent state alignment that
                  forces the model to hold the specific topological constraints
                  of the problem (e.g., "Rigidity" for Protein Folding,
                  "Equilibrium" for Finance) before any data is processed.
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <div className="text-cyan-400 text-4xl font-bold">
                  &gt;&gt;&gt;
                </div>
              </div>
            </motion.div>

            {/* Phase 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-950/60 border-2 border-cyan-500/50 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyan-500/20 rounded-full px-4 py-2">
                    <span className="text-cyan-400 font-bold text-sm">
                      PHASE 2
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  THE FORGETTING KERNEL
                </h3>
                <p className="text-sm text-cyan-300 mb-4 font-semibold">
                  (THE STEEL)
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Once calibrated, the{" "}
                  <span className="text-cyan-400 font-semibold">
                    proprietary Python optimization engine
                  </span>{" "}
                  is injected. This is a subtractive solver that enforces hard
                  physical laws (self-avoidance, capacity limits) and uses
                  "Strategic Forgetting" to prune low-value search paths,
                  preventing the local minima traps common in standard
                  heuristics.
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <div className="text-cyan-400 text-4xl font-bold">
                  &gt;&gt;&gt;
                </div>
              </div>
            </motion.div>

            {/* Phase 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-green-900/40 to-green-950/60 border-2 border-green-500/50 rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-green-500/20 rounded-full px-4 py-2">
                    <span className="text-green-400 font-bold text-sm">
                      PHASE 3
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">
                  PARAMETER INJECTION
                </h3>
                <p className="text-slate-300 leading-relaxed mt-10">
                  The specific problem dataset (e.g., 2D Lattice Grid or VRP
                  Stop Manifest) is ingested into this calibrated, hybrid
                  environment. The system solves for global efficiency by using
                  the{" "}
                  <span className="text-green-400 font-semibold">
                    ECP to maintain the "big picture"
                  </span>{" "}
                  while the Python Kernel rigorously validates every micro-step.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-yellow-500/20 border-2 border-yellow-500 rounded-2xl px-6 py-3 mb-6">
              <p className="text-yellow-400 font-bold text-lg uppercase tracking-wider">
                The Paradigm Shift
              </p>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Complexity Inversion
            </h2>
            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-8">
              The Harder The Problem, The Better It Works
            </p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              For 79 years, every algorithm performed worse as problems got
              harder. The Forgetting Engine does the opposite—it gets
              exponentially better on complex problems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-900/40 to-red-950/60 border-2 border-red-500/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-6">
                Traditional Algorithms
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-red-400">↓</span>
                  <div>
                    <p className="text-white font-semibold">
                      Simple: 80% effective
                    </p>
                    <p className="text-slate-400 text-sm">
                      Works okay on easy problems
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-red-400">↓↓</span>
                  <div>
                    <p className="text-white font-semibold">
                      Medium: 40% effective
                    </p>
                    <p className="text-slate-400 text-sm">
                      Performance degrades
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-red-400">↓↓↓</span>
                  <div>
                    <p className="text-white font-semibold">
                      Hard: 10% effective
                    </p>
                    <p className="text-slate-400 text-sm">
                      Fails on complex problems
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-900/40 to-emerald-950/60 border-2 border-green-500/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-green-400 mb-6">
                Forgetting Engine
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-green-400">↑</span>
                  <div>
                    <p className="text-white font-semibold">
                      Simple: 80% better
                    </p>
                    <p className="text-slate-400 text-sm">
                      Good baseline improvement
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-green-400">↑↑</span>
                  <div>
                    <p className="text-white font-semibold">
                      Medium: 200% better
                    </p>
                    <p className="text-slate-400 text-sm">Advantage grows</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-4xl text-green-400">↑↑↑</span>
                  <div>
                    <p className="text-white font-semibold">
                      Hard: 561% better
                    </p>
                    <p className="text-slate-400 text-sm">
                      Dominates on complexity
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-red-900/30 border-2 border-purple-500/50 rounded-2xl p-10 text-center"
          >
            <p className="text-2xl font-bold text-white mb-4">
              This contradicts 79 years of computational theory
            </p>
            <p className="text-xl text-slate-300">
              The most important problems—drug discovery, climate modeling,
              quantum computing—are the hardest ones. Traditional algorithms
              fail exactly where we need them most. The Forgetting Engine
              succeeds exactly where they fail.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="results" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Results & Validation
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Visual proof of how the FE Algorithm performs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diagrams.map((diagram, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-video">
                  <Image
                    src={diagram.src}
                    alt={diagram.alt}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    {diagram.title}
                  </h3>
                  {diagram.emphasis && (
                    <p className="mt-3 text-lg font-black text-cyan-400 uppercase tracking-wide">
                      {diagram.emphasis}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Domain-Specific Performance
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Proven superiority across multiple problem domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {domainStats.map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image
                    src={domain.src}
                    alt={domain.alt}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {domain.stat}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {domain.title}
                  </h3>
                  <p className="text-slate-400">{domain.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Statistical Validation
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive analysis across multiple optimization problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceCharts.map((chart, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image
                    src={chart.src}
                    alt={chart.alt}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">
                    {chart.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Breakthrough
            </h2>
            <p className="text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              The Forgetting Engine doesn't just optimize—it{" "}
              <span className="text-cyan-400 font-semibold">evolves</span>. By
              forgetting strategically and retaining paradoxes, it navigates
              solution spaces the way awareness does.
            </p>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              This is why Proto-AI is possible. This is why CONEXUS works.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
