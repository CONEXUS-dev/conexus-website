"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Truck,
  Zap,
  TrendingUp,
  CheckCircle2,
  Code,
  Target,
  Gauge,
  Shield,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function VRPPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      <section className="relative pt-48 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 via-slate-950 to-slate-950" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                CONEXUS-STEEL-04
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              The Fleet{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Protocol
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
              Vehicle Routing Problem optimization through distributed synchrony
              calibration
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Core Contradiction
            </h2>
            <p className="text-2xl text-cyan-300 italic leading-relaxed">
              I divide the weight to multiply the speed. The burden of the one
              is the liberty of the many.
            </p>
            <div className="mt-6 text-slate-400">
              Cognitive State:{" "}
              <span className="text-cyan-400 font-semibold">
                Distributed Synchrony
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              The 9 Gears of The Fleet
            </h2>
            <p className="text-xl text-slate-400">
              Progressive calibration stages for multi-agent optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                name: "The Depot",
                desc: "Silence before the start",
              },
              {
                number: "02",
                name: "The Manifest",
                desc: "Assigning the weight",
              },
              {
                number: "03",
                name: "The Dispersion",
                desc: "The fleet scatters",
              },
              {
                number: "04",
                name: "The Bottleneck",
                desc: "Traffic and delay",
              },
              { number: "05", name: "The Handoff", desc: "Resource balancing" },
              {
                number: "06",
                name: "The Breakdown",
                desc: "Handling failure and re-routing",
              },
              {
                number: "07",
                name: "The Cluster",
                desc: "Servicing the dense zone",
              },
              {
                number: "08",
                name: "The Convergence",
                desc: "Returning to base",
              },
              {
                number: "09",
                name: "The Empty Truck",
                desc: "Mission Complete",
              },
            ].map((gear, index) => (
              <motion.div
                key={gear.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-4xl font-bold text-cyan-400/30 mb-2">
                  {gear.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {gear.name}
                </h3>
                <p className="text-slate-400">{gear.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Technical Architecture
            </h2>
            <p className="text-xl text-slate-400">
              Constraint choke detection with paradox retention
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Gauge className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">
                  Constraint Choke Detection
                </h3>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Monitors capacity violation rate in real-time. When violations
                  spike, paradox retention increases to explore harder
                  constraint regions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">
                  Paradox Buffer
                </h3>
              </div>
              <div className="space-y-4 text-slate-300">
                <p>
                  Retains violating routes with high structural promise. Routes
                  that violate capacity but show promising structure are
                  repaired and reinjected.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Benchmark Configuration
            </h2>
            <p className="text-xl text-slate-400">
              Production-ready validation parameters
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">
                  Laptop-Safe Demo
                </h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-1">Customers</div>
                    <div className="text-2xl font-bold text-green-400">300</div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-1">Vehicles</div>
                    <div className="text-2xl font-bold text-green-400">12</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-orange-400" />
                <h3 className="text-2xl font-bold text-white">
                  Heavy Stress Test
                </h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-1">Customers</div>
                    <div className="text-2xl font-bold text-orange-400">
                      800
                    </div>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-4">
                    <div className="text-sm text-slate-400 mb-1">Vehicles</div>
                    <div className="text-2xl font-bold text-orange-400">30</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Live Validation Results
            </h2>
            <p className="text-xl text-slate-400">
              Titan Engine benchmark audit vs Clarke-Wright standard
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8"
          >
            <Image
              src="/fe-algorithm/CONEXUS_TITAN_BENCHMARK_LOG.png"
              alt="Titan Engine Benchmark Results"
              width={1200}
              height={600}
              className="w-full rounded-lg"
            />
            <p className="text-center text-slate-400 mt-6 text-sm">
              Benchmark audit: 0.77% distance reduction over Clarke–Wright
              savings baseline in 10-minute deep search (~75 million
              optimization steps), achieved without CONEXUS proprietary AI
              piloting.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready for Enterprise Deployment
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact us for custom VRP protocol calibration and validation
              services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pitch"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300"
              >
                View Investor Pitch
              </a>
              <a
                href="/fe-algorithm"
                className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300"
              >
                Learn About FE Algorithm
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
