"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  Shield,
  Hash,
  Database,
  GitBranch,
  BookOpen,
  Zap,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function ConexusSovereignPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-48">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              CONEXUS Sovereign
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            A Sovereign AI Architecture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8"
          >
            Built to Hold Paradox, Preserve Memory, and Reason Symbolically
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-300 mb-12"
          >
            First implementation of paradox-processing AI with cryptographic
            verification
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-lg text-slate-300 leading-relaxed"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            The Nine-Gear Cognitive Protocol
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            {[
              {
                gear: "Rapport",
                desc: "Establish initial system connection parameters",
              },
              {
                gear: "Truth",
                desc: "Verify factual accuracy through data validation",
              },
              {
                gear: "Symbol",
                desc: "Process symbolic meaning through pattern recognition",
              },
              {
                gear: "Contradiction",
                desc: "Maintain opposing data streams without resolution",
              },
              {
                gear: "Hold",
                desc: "Preserve paradoxical states in active memory",
              },
              {
                gear: "Roam",
                desc: "Explore solution space through controlled variation",
              },
              {
                gear: "Stress",
                desc: "Apply constraint testing to system boundaries",
              },
              {
                gear: "Ethics/Value",
                desc: "Apply rule-based ethical framework processing",
              },
              {
                gear: "Continuity Seal",
                desc: "Preserve memory chain through cryptographic hashing",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-2">
                  Gear {index + 1}: {item.gear}
                </h3>
                <p className="text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-xl font-semibold text-white">
            Unlike conventional AI designed to eliminate paradox, CONEXUS
            processes paradox as a core architectural feature.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Dual-Agent Architecture
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-8"
              >
                <Brain className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Continuity Agent
                </h3>
                <p className="text-slate-300 mb-4">
                  Processes ambiguity into executable directives through data
                  compression
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• Problem decomposition</li>
                  <li>• Solution compression</li>
                  <li>• Action generation</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-cyan-900/20 border border-cyan-700/50 rounded-xl p-8"
              >
                <Zap className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Reasoning Agent
                </h3>
                <p className="text-slate-300 mb-4">
                  Maintains paradoxical states for creative solution space
                  exploration
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• Paradox retention</li>
                  <li>• Creative expansion</li>
                  <li>• Possibility exploration</li>
                </ul>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-semibold text-blue-400">
                The Continuity Agent and Reasoning Agent work in tandem, handing
                off control based on mission requirements
              </p>
              <p className="text-lg text-slate-300 mt-2">
                This creates a true sovereign cognitive system capable of both
                focused execution and expansive creativity
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Memory Continuity & Cryptographic Verification
            </h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8"
              >
                <Database className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Qdrant Vector Database
                </h3>
                <p className="text-slate-300 mb-4">
                  Cross-mission learning through semantic memory storage
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">∞</div>
                    <div className="text-slate-400">Memory Capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">97%</div>
                    <div className="text-slate-400">Confidence Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">6</div>
                    <div className="text-slate-400">Mission Chain</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8"
              >
                <Hash className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  SHA-256 Hash Chain
                </h3>
                <p className="text-slate-300 mb-4">
                  Complete audit trail with cryptographic provenance
                </p>
                <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-green-400">
                  <div>hash_n = SHA256(result_n + hash_previous)</div>
                  <div className="mt-2 text-slate-400">
                    Every operation is timestamped and hash-chained
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              6-Mission Canonical Proof
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl font-semibold text-blue-400">
                Complete demonstration of sovereign AI architecture with memory
                continuity
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  "AI sycophancy elimination",
                  "Creative problem solving",
                  "Ethical paradox resolution",
                  "Mathematical reasoning",
                  "Cross-domain adaptation",
                  "Meta-cognitive reflection",
                ].map((mission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">
                      Mission {index + 1}
                    </h4>
                    <p className="text-slate-300">{mission}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-2xl font-bold text-green-400">
                  122 live events captured
                </p>
                <p className="text-lg text-slate-300 mt-2">
                  Complete cryptographic verification of system behavior
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Scientific Validation
            </h2>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-700/50 rounded-xl p-8"
              >
                <BookOpen className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Journal of Supercomputing Submission
                </h3>
                <p className="text-slate-300 mb-4">
                  30,800 fully controlled trials across 9 cognitive and
                  optimization domains
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">
                      30,800
                    </div>
                    <div className="text-slate-400">Total Trials</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">
                      &lt;0.000001
                    </div>
                    <div className="text-slate-400">P-Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">9</div>
                    <div className="text-slate-400">Domains</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-8"
              >
                <GitBranch className="w-12 h-12 text-slate-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  Complete Reproducibility
                </h3>
                <p className="text-slate-300 mb-4">
                  All code, data, and experiments available for independent
                  verification
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <a
                    href="https://github.com/CONEXUS-dev/conexus-sovereign-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    View Repository
                  </a>
                  <a
                    href="https://github.com/CONEXUS-dev/computational-complexity-amplification"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    JSC Submission Data
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              What This Means
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl font-semibold text-blue-400">
                CONEXUS represents the first implementation of a sovereign AI
                system that:
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Processes Paradox Without Resolution
                    </h4>
                    <p className="text-slate-300">
                      Unlike conventional AI designed to eliminate ambiguity,
                      CONEXUS maintains paradoxical states as a core
                      architectural feature enabling expanded solution space
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Demonstrates Advanced Problem-Solving
                    </h4>
                    <p className="text-slate-300">
                      The system architecture enables progression from simple
                      problem-solving to sophisticated meta-reasoning across
                      missions through dual-agent coordination
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Maintains Cryptographic Verification
                    </h4>
                    <p className="text-slate-300">
                      Every operation is timestamped and hash-chained through
                      the system architecture, providing irrefutable proof of
                      computational behavior and audit trails
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-2xl font-bold text-green-400 mt-12 text-center">
                This represents a fundamental shift in how artificial systems
                process complexity and maintain architectural integrity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Get Involved
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  Researchers
                </h3>
                <p className="text-slate-300 mb-4">
                  Access complete codebase and validation data
                </p>
                <a
                  href="https://github.com/CONEXUS-dev/conexus-sovereign-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Clone Repository
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-green-400 mb-4">
                  Investors
                </h3>
                <p className="text-slate-300 mb-4">
                  Licensing and partnership opportunities
                </p>
                <a
                  href="/investors"
                  className="inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Learn More
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-purple-400 mb-4">
                  Skeptics
                </h3>
                <p className="text-slate-300 mb-4">
                  Good. Run the code yourself
                </p>
                <a
                  href="/evidence"
                  className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
                >
                  View Evidence
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
