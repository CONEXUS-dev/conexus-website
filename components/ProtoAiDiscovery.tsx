"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";

export function ProtoAiDiscovery() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Eye className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
              CONEXUS SOVEREIGN
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            A sovereign cognitive architecture built to hold paradox, preserve
            memory, and reason symbolically across missions.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8"
          >
            From large-scale computational validation to cryptographically
            verified sovereign cognition.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            Learn more about CONEXUS Sovereign
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <Link
              href="/conexus-sovereign"
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-2"
            >
              Learn more about CONEXUS Sovereign
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/observer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50 flex items-center justify-center gap-2"
            >
              View Sovereign Observer Dashboard
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-slate-500 text-sm text-center max-w-md">
              Live cryptographic proof. 84 paradoxes held. Glass Wall enforced.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
