"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export function NairthexFeature() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-amber-900/20 via-slate-800/50 to-slate-900/50 border border-amber-700/30 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-900/30 border border-amber-700/50 rounded-full text-amber-400 text-sm font-medium mb-4">
                <BookOpen className="w-4 h-4" />
                CONEXUS Vertical — Sovereign Contemplative Node
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                NAiRTHEX
                <span className="text-amber-400 text-lg ml-3 font-normal">
                  by CONEXUS
                </span>
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                A Sovereign Contemplative Node governed by deterministic
                operators and cryptographic provenance. A contemplative
                infrastructure for faith communities that holds space through
                verified truth.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://the-narthex.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-amber-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  Try It Live
                </a>
                <Link
                  href="/nairthex"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all border border-slate-600"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-amber-400 font-semibold mb-1">
                  Contemplative Conversation
                </p>
                <p className="text-slate-400 text-sm">
                  Guided reflection grounded in Scripture and tradition. Holds
                  tension instead of resolving it.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-green-400 font-semibold mb-1">
                  Sovereign Governed
                </p>
                <p className="text-slate-400 text-sm">
                  Every response governed by deterministic operators. Zero
                  sycophancy. Full audit trail.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                <p className="text-cyan-400 font-semibold mb-1">
                  Voice & Text Input
                </p>
                <p className="text-slate-400 text-sm">
                  Speak or type. Whisper transcription. Session-aware with
                  Redis-backed state.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
