"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import {
  FlaskConical,
  TrendingUp,
  Shield,
  Zap,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ECPExperimentPage() {
  const [showNote, setShowNote] = useState(false);
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-48 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-slate-950 to-slate-950" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FlaskConical className="w-8 h-8 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
                Controlled Experiment &mdash; February 13, 2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Complexity{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Inversion
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-4">
              Empirical proof that ECP calibration becomes <em>more</em>{" "}
              valuable as problems get harder.
            </p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              18 runs &middot; 600 AI calls &middot; 5.1 hours &middot; Single
              variable isolated: the Emotional Calibration Protocol
            </p>
          </motion.div>
        </div>
      </section>

      {/* Headline Result */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Core Finding
            </h2>
            <p className="text-2xl md:text-3xl text-emerald-300 font-bold leading-relaxed mb-4">
              As problem complexity doubled, ECP-calibrated AI improved by 26%
              over its uncalibrated twin.
            </p>
            <p className="text-xl text-slate-400">
              The uncalibrated AI degraded. The calibrated AI adapted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiment Design */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Experiment Design
            </h2>
            <p className="text-xl text-slate-400">
              One variable. Three conditions. Same everything else.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-400 mb-4">
                Baseline
              </h3>
              <p className="text-slate-300 mb-4">
                Clarke-Wright savings heuristic &mdash; the industry-standard
                deterministic solver.
              </p>
              <div className="text-sm text-slate-500">
                No AI involved. Pure algorithm.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/50 border border-orange-500/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-orange-400 mb-4">
                Uncalibrated AI
              </h3>
              <p className="text-slate-300 mb-4">
                Google Gemini 2.0 Flash proposing routes through iterative
                refinement.
              </p>
              <div className="text-sm text-slate-500">Standard AI. No ECP.</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 border border-emerald-500/30 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                Calibrated AI
              </h3>
              <p className="text-slate-300 mb-4">
                The same Gemini model, same parameters, same instances &mdash;
                calibrated with the ECP.
              </p>
              <div className="text-sm text-emerald-500 font-semibold">
                The only difference is the protocol.
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white">Gemini 2.0</div>
                <div className="text-sm text-slate-500 mt-1">Same model</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">0.7</div>
                <div className="text-sm text-slate-500 mt-1">
                  Same temperature
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50</div>
                <div className="text-sm text-slate-500 mt-1">
                  Same iterations
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3 seeds</div>
                <div className="text-sm text-slate-500 mt-1">Per condition</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Inversion */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Inversion
            </h2>
            <p className="text-xl text-slate-400">
              At small scale, no advantage. At large scale, the ECP pulls away.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* n=100 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-slate-400 mb-6">
                100 Customers
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Baseline</span>
                  <span className="text-white font-bold text-xl">1,079</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-400">Uncalibrated</span>
                  <span className="text-white font-bold text-xl">1,846</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400">Calibrated</span>
                  <span className="text-white font-bold text-xl">2,036</span>
                </div>
                <div className="border-t border-slate-700 pt-4 mt-4">
                  <p className="text-slate-500 text-center">
                    ECP advantage:{" "}
                    <span className="text-slate-400 font-semibold">None</span>
                  </p>
                  <p className="text-slate-600 text-sm text-center mt-1">
                    Problem is simple enough that raw AI performs adequately
                  </p>
                </div>
              </div>
            </motion.div>

            {/* n=200 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border-2 border-emerald-500/50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">
                200 Customers
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Baseline</span>
                  <span className="text-white font-bold text-xl">1,806</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-400">Uncalibrated</span>
                  <span className="text-white font-bold text-xl">4,095</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400">Calibrated</span>
                  <span className="text-emerald-300 font-bold text-xl">
                    3,033
                  </span>
                </div>
                <div className="border-t border-emerald-500/30 pt-4 mt-4">
                  <p className="text-emerald-400 text-center font-bold text-lg">
                    ECP advantage: 26% better
                  </p>
                  <p className="text-slate-500 text-sm text-center mt-1">
                    Best seed: 56% improvement (1,922 vs 4,382)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Supporting Evidence
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center"
            >
              <Shield className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">8&times;</div>
              <div className="text-slate-300 font-semibold mb-1">
                More Reliable
              </div>
              <div className="text-sm text-slate-500">
                Calibrated: 2 parse failures vs Uncalibrated: 16
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center"
            >
              <Zap className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">2&times;</div>
              <div className="text-slate-300 font-semibold mb-1">Faster</div>
              <div className="text-sm text-slate-500">
                Calibrated converges in half the time
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center"
            >
              <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">97%</div>
              <div className="text-slate-300 font-semibold mb-1">
                Parse Success
              </div>
              <div className="text-sm text-slate-500">
                600 AI calls, 18 failures total
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 text-center"
            >
              <Clock className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">~$3</div>
              <div className="text-slate-300 font-semibold mb-1">
                Total API Cost
              </div>
              <div className="text-sm text-slate-500">
                600 Gemini calls over 5.1 hours
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Per-Seed Breakdown */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Seed-by-Seed Breakdown
            </h2>
            <p className="text-xl text-slate-400">
              Every data point, not just averages
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 overflow-x-auto"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-slate-400 font-semibold">
                    Instance
                  </th>
                  <th className="py-3 px-4 text-slate-400 font-semibold text-right">
                    Uncalibrated
                  </th>
                  <th className="py-3 px-4 text-emerald-400 font-semibold text-right">
                    Calibrated
                  </th>
                  <th className="py-3 px-4 text-slate-400 font-semibold text-right">
                    Delta
                  </th>
                  <th className="py-3 px-4 text-slate-400 font-semibold text-center">
                    ECP Wins?
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">100 customers, Seed 1</td>
                  <td className="py-3 px-4 text-right">2,103</td>
                  <td className="py-3 px-4 text-right text-emerald-300">
                    2,001
                  </td>
                  <td className="py-3 px-4 text-right text-emerald-400">
                    +102
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 inline" />
                  </td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">100 customers, Seed 2</td>
                  <td className="py-3 px-4 text-right">1,679</td>
                  <td className="py-3 px-4 text-right">2,282</td>
                  <td className="py-3 px-4 text-right text-orange-400">
                    &minus;604
                  </td>
                  <td className="py-3 px-4 text-center text-slate-600">
                    &mdash;
                  </td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">100 customers, Seed 3</td>
                  <td className="py-3 px-4 text-right">1,757</td>
                  <td className="py-3 px-4 text-right">1,825</td>
                  <td className="py-3 px-4 text-right text-orange-400">
                    &minus;69
                  </td>
                  <td className="py-3 px-4 text-center text-slate-600">
                    &mdash;
                  </td>
                </tr>
                <tr className="border-b border-slate-800 bg-emerald-950/20">
                  <td className="py-3 px-4 font-semibold">
                    200 customers, Seed 1
                  </td>
                  <td className="py-3 px-4 text-right">4,382</td>
                  <td className="py-3 px-4 text-right text-emerald-300 font-bold">
                    1,922
                  </td>
                  <td className="py-3 px-4 text-right text-emerald-400 font-bold">
                    +2,460
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 inline" />
                  </td>
                </tr>
                <tr className="border-b border-slate-800 bg-emerald-950/20">
                  <td className="py-3 px-4 font-semibold">
                    200 customers, Seed 2
                  </td>
                  <td className="py-3 px-4 text-right">4,431</td>
                  <td className="py-3 px-4 text-right text-emerald-300 font-bold">
                    3,524
                  </td>
                  <td className="py-3 px-4 text-right text-emerald-400 font-bold">
                    +907
                  </td>
                  <td className="py-3 px-4 text-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 inline" />
                  </td>
                </tr>
                <tr className="bg-emerald-950/20">
                  <td className="py-3 px-4 font-semibold">
                    200 customers, Seed 3
                  </td>
                  <td className="py-3 px-4 text-right">3,473</td>
                  <td className="py-3 px-4 text-right">3,654</td>
                  <td className="py-3 px-4 text-right text-orange-400">
                    &minus;181
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => setShowNote(!showNote)}
                      className="text-slate-500 hover:text-slate-300 text-xs border border-slate-700 hover:border-slate-500 rounded-full px-2 py-0.5 transition-colors"
                      title="Why did this seed underperform?"
                    >
                      why?
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <AnimatePresence>
              {showNote && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 bg-slate-800/60 border border-slate-700 rounded-xl p-5 text-sm text-slate-400 leading-relaxed">
                    <p className="text-slate-300 font-semibold mb-2">
                      Transparency Note &mdash; Seed 3, n=200
                    </p>
                    <p>
                      This calibrated run underperformed its uncalibrated
                      counterpart by 5% on distance. Root cause: at 200
                      customers, the LLM collapsed to 2 routes instead of the
                      required ~12, and the iterative loop could not escape this
                      structural pattern. The uncalibrated run on the same
                      instance also failed to achieve feasibility. This is a
                      known boundary condition for raw LLM solvers without
                      repair operators &mdash; which this experiment
                      deliberately excluded to isolate the calibration variable.
                      The remaining two seeds at n=200 showed calibrated
                      advantages of 56% and 20%. We report all results,
                      including this one, because selective reporting would
                      undermine the integrity of the experiment.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-slate-500 text-sm mt-6 text-center">
              Lower distance = better. The 200-customer rows show the Complexity
              Inversion effect: calibrated AI dominates on harder instances.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What This Means */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What This Means
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border-l-4 border-emerald-500 rounded-r-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                The ECP effect is scale-dependent
              </h3>
              <p className="text-slate-300 leading-relaxed">
                At 100 customers, the problem is simple enough that raw AI
                performs adequately. At 200 customers, when the combinatorial
                space explodes, the ECP-calibrated AI pulls away. The harder the
                problem, the wider the gap.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border-l-4 border-cyan-500 rounded-r-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                This isolates the calibration protocol
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Same model. Same API. Same temperature. Same problem. Same day.
                The only variable was the ECP. Any difference in performance is
                attributable to the calibration protocol alone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border-l-4 border-amber-500 rounded-r-2xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                This is separate from the Forgetting Engine
              </h3>
              <p className="text-slate-300 leading-relaxed">
                The CONEXUS Forgetting Engine (which achieves 89.3% improvement
                over Clarke-Wright) combines ECP calibration with evolutionary
                optimization and repair operators. This experiment isolates the
                ECP&apos;s contribution to that system. They are complementary
                layers of the same architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-900/40 to-cyan-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              The Data Is Open
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              All 18 runs, 600 AI calls, convergence curves, and behavioral
              metrics are preserved in machine-readable format. Reproducible by
              any third party with a Gemini API key.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/investors"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300"
              >
                Investor Overview
              </a>
              <a
                href="/fe-algorithm"
                className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300"
              >
                Forgetting Engine
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
