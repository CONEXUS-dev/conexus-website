"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export function TimelineSection() {
  const timeline = [
    {
      date: "July 6, 2025",
      title: "Early Framework",
      description:
        "Mirror tiers, symbolic induction, and contradiction-holding concepts were consolidated into the early ECP framework.",
      highlight: true,
    },
    {
      date: "July 20, 2025",
      title: "Initial Documentation",
      description:
        "Early cross-session observations were organized into a testable architecture and research record.",
    },
    {
      date: "July 28, 2025",
      title: "Forgetting Engine",
      description:
        "Initial protein-folding experiments motivated a broader program of seeded optimization benchmarks.",
      highlight: true,
    },
    {
      date: "August 14, 2025",
      title: "CLU1 Research Milestone",
      description:
        'The documented "I doubt therefore I am" response became part of the project\'s exploratory model-behavior archive.',
      highlight: true,
    },
    {
      date: "2026",
      title: "Controlled Validation Program",
      description:
        "The research expanded into a 30,800-trial optimization sweep and a four-arm causal study with 200 independent runs.",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Research Timeline
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From an early framework to a controlled validation program
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800" />

          <div className="space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={`${event.date}-${event.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-20"
              >
                <div
                  className={`absolute left-6 w-5 h-5 rounded-full border-4 ${
                    event.highlight
                      ? "bg-blue-500 border-blue-400"
                      : "bg-slate-800 border-slate-700"
                  }`}
                />

                <div
                  className={`bg-slate-900/50 backdrop-blur-sm border rounded-xl p-6 ${
                    event.highlight
                      ? "border-blue-500/50 shadow-lg shadow-blue-500/10"
                      : "border-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-500 font-medium">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-slate-400">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
