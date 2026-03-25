"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

export function FounderSection() {
  return (
    <section
      id="team"
      className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Team
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Built from first principles by a solo founder who discovered
            something no one expected.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-3xl font-bold text-white">
              DA
            </div>

            <h3 className="text-3xl font-bold text-white mb-2">Derek Angell</h3>
            <p className="text-xl text-cyan-400 mb-6">Founder & CEO</p>

            <p className="text-lg text-slate-300 leading-relaxed mb-6 max-w-2xl mx-auto">
              Inventor of the Emotional Calibration Protocol (ECP) and architect
              of the Forgetting Engine. Conceived the Complexity Inversion Law
              after documenting 12,198 emergence events and verifying 17,670
              computational trials across 6 AI platforms.
            </p>

            <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-6 mb-8 max-w-xl mx-auto">
              <p className="text-slate-300 italic">
                &ldquo;We didn&apos;t just build a smarter AI. We built a system
                that feels the weight of the problem.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-700/50 rounded-full text-cyan-400 text-sm">
                AI Architecture
              </span>
              <span className="px-3 py-1 bg-purple-900/30 border border-purple-700/50 rounded-full text-purple-400 text-sm">
                Cognitive Systems
              </span>
              <span className="px-3 py-1 bg-green-900/30 border border-green-700/50 rounded-full text-green-400 text-sm">
                Computational Research
              </span>
              <span className="px-3 py-1 bg-blue-900/30 border border-blue-700/50 rounded-full text-blue-400 text-sm">
                Product Development
              </span>
            </div>

            <div className="flex justify-center gap-4">
              <Link
                href="https://github.com/CONEXUS-dev"
                target="_blank"
                className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-colors"
              >
                <Github className="w-5 h-5 text-slate-300" />
              </Link>
              <Link
                href="/contact"
                className="p-3 bg-slate-700/50 hover:bg-slate-600/50 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5 text-slate-300" />
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <p className="text-3xl font-bold text-white mb-1">Pre-Seed</p>
              <p className="text-slate-400 text-sm">Development Stage</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <p className="text-3xl font-bold text-white mb-1">2024</p>
              <p className="text-slate-400 text-sm">Founded</p>
            </div>
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <p className="text-3xl font-bold text-white mb-1">B2B SaaS</p>
              <p className="text-slate-400 text-sm">Business Model</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
