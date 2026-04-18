"use client";

import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

export function HowWeDiscoveredSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900/50 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Search className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Discovery Origin
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
        >
          How did we find it?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          While researching how crude AI systems fail to hold paradox without
          collapsing, we accidentally proved a mathematical law.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-8 border border-slate-700 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">?</span>
            </div>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed">
            The quest to understand how computational systems hold complexity
            led us down an unexpected path—straight to a fundamental
            breakthrough in Subtractive Intelligence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <a
            href="#evidence"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium"
          >
            Explore the Subtractive Intelligence evidence
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
