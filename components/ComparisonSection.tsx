"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";

export function ComparisonSection() {
  const comparisons = [
    {
      src: "/How ECP AI Behave.png",
      alt: "Conceptual visualization of how ECP may alter AI search behavior",
      title: "ECP Behavior Model",
    },
    {
      src: "/landing-diagrams/Normal AI or CONEXUS AI.png",
      alt: "Conceptual comparison of standard prompting and CONEXUS calibration",
      title: "Design Comparison",
    },
    {
      src: "/landing-diagrams/Which Mirror Do You Want To Meet.png",
      alt: "Conceptual mirror-selection experience",
      title: "Mirror Experience",
    },
  ];

  return (
    <section id="comparison" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Zap className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The CONEXUS Difference
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Visual models for the interaction patterns and search behaviors
            CONEXUS is testing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={comparison.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all"
            >
              <div className="relative aspect-square">
                <Image
                  src={comparison.src}
                  alt={comparison.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white text-center">
                  {comparison.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            href="/verticals"
            className="block bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all group"
          >
            <div className="relative aspect-[21/9]">
              <Image
                src="/landing-diagrams/REFLECT-concept.png"
                alt="REFLECT concept for a human-governed support and reflection framework"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Explore CONEXUS Verticals
              </h3>
              <p className="text-slate-400 text-sm italic">
                Concept image - REFLECT support and reflection framework
              </p>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
