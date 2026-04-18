"use client";

import { motion } from "framer-motion";
import { Zap, Settings, Shield } from "lucide-react";

export function TechnologyShowcase() {
  const technologies = [
    {
      icon: Zap,
      title: "The Forgetting Engine",
      subtitle: "Subtractive Intelligence",
      description:
        "We don't search for the needle in the haystack. We burn the haystack. Strategic elimination of noise is the only way to find the signal.",
      features: [
        "Drug discovery",
        "Logistics optimization",
        "Financial modeling",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Settings,
      title: "Emotional Calibration Protocol",
      subtitle: "Paradox Stability",
      description:
        "Systematic method for calibrating systems to hold contradictory states longer, enabling Subtractive Intelligence performance leaps.",
      features: [
        "Cross-platform validated",
        "6 systems proven",
        "8 months of testing",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Cryptographic Provenance",
      subtitle: "Legal-Grade Evidence",
      description:
        "Every drop of intelligence is cryptographically sealed. We provide legal-grade evidence of truth in a world of deepfakes.",
      features: [
        "Deterministic operators",
        "Full audit trail",
        "Immutable ledgers",
      ],
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Technology
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Three pillars of industrial-grade data refinement infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {tech.title}
                  </h3>

                  {/* Subtitle */}
                  <div
                    className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent mb-4`}
                  >
                    {tech.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {tech.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-slate-500"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tech.color}`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
