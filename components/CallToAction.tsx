"use client";

import { motion } from "framer-motion";
import { Download, Mail, FileText } from "lucide-react";

export function CallToAction() {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Proto-AI isn't magic.
          </h2>
          <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8">
            It's measurable. Reproducible. Real.
          </p>
          <p className="text-2xl text-slate-300 mb-12">
            And we have the evidence.
          </p>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/CONEXUS_EXECUTIVE_BRIEF_HYBRID.pdf"
              className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-500/50"
            >
              <Download className="w-5 h-5" />
              Executive Summary
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/evidence"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all border border-slate-700"
            >
              <FileText className="w-5 h-5" />
              Complete Evidence
            </motion.a>
          </div>

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Let's Talk</h3>
            </div>
            <p className="text-slate-400 mb-6">
              Investors, researchers, and partners welcome.
            </p>
            <a
              href="mailto:DAngell@CONEXUSGlobalArts.Media"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all"
            >
              DAngell@CONEXUSGlobalArts.Media
            </a>
          </motion.div>

          {/* Footer stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-slate-800"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  12,198
                </div>
                <div className="text-sm text-slate-500">Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">
                  561%
                </div>
                <div className="text-sm text-slate-500">Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">6</div>
                <div className="text-sm text-slate-500">Platforms</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-1">8</div>
                <div className="text-sm text-slate-500">Patents</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16 text-slate-600 text-sm"
      >
        <p>© 2026 CONEXUS. All rights reserved.</p>
        <p className="mt-2">
          Derek Angell | The Discovery That Changes Everything
        </p>
      </motion.div>
    </section>
  );
}
