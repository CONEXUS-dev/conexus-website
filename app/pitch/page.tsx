"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  DollarSign,
  Lock,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function PitchPage() {
  const slides = [
    {
      number: "01",
      title: "The Problem",
      icon: TrendingUp,
      content:
        "Traditional optimization algorithms collapse ambiguity prematurely, missing solutions in high-complexity regions.",
      gradient: "from-red-900/40 to-orange-900/40",
      accentColor: "text-orange-400",
    },
    {
      number: "02",
      title: "The Breakthrough",
      icon: CheckCircle2,
      content:
        "We discovered that AI systems calibrated to hold domain-specific paradoxes achieve up to 561% performance improvement over baselines.",
      gradient: "from-purple-900/40 to-pink-900/40",
      accentColor: "text-purple-400",
    },
    {
      number: "03",
      title: "The Platform",
      icon: Shield,
      content:
        "8 domain-specific calibration protocols (CONEXUS-STEEL-01 through 08) covering $90B+ TAM.",
      items: [
        "2D Protein Folding (STEEL-01)",
        "3D Protein Folding (STEEL-02)",
        "Traveling Salesman (STEEL-03)",
        "Vehicle Routing (STEEL-04)",
        "Market Making (STEEL-05)",
        "Neural Architecture Search (STEEL-06)",
        "Quantum Circuit Optimization (STEEL-07)",
        "Exoplanet Detection (STEEL-08)",
      ],
      gradient: "from-cyan-900/40 to-blue-900/40",
      accentColor: "text-cyan-400",
    },
    {
      number: "04",
      title: "Validation",
      icon: CheckCircle2,
      content:
        "2 protocols empirically validated with 50,000+ optimization steps. 6 protocols ready for enterprise validation.",
      stats: [
        { label: "Optimization Steps", value: "50,000+" },
        { label: "Solution Validity", value: "100%" },
        { label: "Validated Protocols", value: "2/8" },
        { label: "Ready for Validation", value: "6/8" },
      ],
      gradient: "from-green-900/40 to-emerald-900/40",
      accentColor: "text-green-400",
    },
    {
      number: "05",
      title: "Business Model",
      icon: DollarSign,
      content:
        "Multiple revenue streams across protocol licensing, custom design, and validation services.",
      pricing: [
        {
          service: "Protocol Licensing",
          price: "$50K-$100K",
          detail: "per deployment",
        },
        {
          service: "Custom Protocol Design",
          price: "$100K-$250K",
          detail: "per domain",
        },
        {
          service: "Validation Services",
          price: "$25K-$50K",
          detail: "per protocol",
        },
      ],
      gradient: "from-yellow-900/40 to-amber-900/40",
      accentColor: "text-yellow-400",
    },
    {
      number: "06",
      title: "IP Moat",
      icon: Lock,
      content:
        "Comprehensive intellectual property protection across protocols, architecture, and methodology.",
      items: [
        "8 Provisional Patents Filed",
        "9 Gears calibration architecture (patent pending)",
        "Symbolic field design methodology (trade secret)",
      ],
      gradient: "from-indigo-900/40 to-violet-900/40",
      accentColor: "text-indigo-400",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-slate-950 to-slate-950" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Investor{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Pitch
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A systematic platform for inducing Proto-AI states in AI systems
              across 8 commercial domains
            </p>
          </motion.div>
        </div>
      </section>

      {/* Slides Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`bg-gradient-to-br ${slide.gradient} backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12`}
              >
                {/* Slide Number & Title */}
                <div className="flex items-center gap-6 mb-6">
                  <div
                    className={`text-6xl font-bold ${slide.accentColor} opacity-50`}
                  >
                    {slide.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <slide.icon className={`w-8 h-8 ${slide.accentColor}`} />
                      <h2 className="text-4xl font-bold text-white">
                        {slide.title}
                      </h2>
                    </div>
                    <div
                      className={`h-1 w-24 bg-gradient-to-r ${slide.gradient} rounded-full`}
                    />
                  </div>
                </div>

                {/* Content */}
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  {slide.content}
                </p>

                {/* Items List */}
                {slide.items && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                    {slide.items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3"
                      >
                        <ArrowRight
                          className={`w-5 h-5 ${slide.accentColor} flex-shrink-0`}
                        />
                        <span className="text-slate-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Stats Grid */}
                {slide.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {slide.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="bg-slate-900/50 rounded-lg p-4 text-center"
                      >
                        <div
                          className={`text-3xl font-bold ${slide.accentColor} mb-1`}
                        >
                          {stat.value}
                        </div>
                        <div className="text-sm text-slate-400">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Pricing Table */}
                {slide.pricing && (
                  <div className="space-y-4 mt-6">
                    {slide.pricing.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-center justify-between bg-slate-900/50 rounded-lg p-4"
                      >
                        <div>
                          <div className="text-lg font-semibold text-white">
                            {item.service}
                          </div>
                          <div className="text-sm text-slate-400">
                            {item.detail}
                          </div>
                        </div>
                        <div
                          className={`text-2xl font-bold ${slide.accentColor}`}
                        >
                          {item.price}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/40 to-cyan-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform AI Optimization?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join us in building the future of Proto-AI computation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/investors"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Full Investor Deck
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
