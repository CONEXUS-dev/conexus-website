"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DiscoveryStory() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-950/20 to-transparent">
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
            <Rocket className="w-6 h-6 text-green-400" />
            <span className="text-green-400 text-sm font-medium tracking-wider uppercase">
              Breakthrough Discovery
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Found 3 Planets NASA Missed
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-8"
          >
            562% improvement on the hardest computational problems
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            A new approach to solving impossible problems. By forgetting wrong answers instead of searching for right ones, 
            I discovered planets NASA's algorithms overlooked and solved a 79-year-old computational challenge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/discovery"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/50 flex items-center justify-center gap-2"
            >
              Read the Full Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
