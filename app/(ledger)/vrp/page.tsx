"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Route, Scale } from "lucide-react";

const findings = [
  {
    title: "Defined benchmark comparison",
    description:
      "The Forgetting Engine was compared with a stated vehicle-routing baseline under a fixed experimental configuration.",
  },
  {
    title: "Scale-dependent results",
    description:
      "The reported relative gap varied by problem size, with the largest stated improvement reaching 89.3% at the largest tested scale.",
  },
  {
    title: "Feasibility and objective both matter",
    description:
      "Route quality should be interpreted alongside constraint satisfaction, search budget, instance generation, and baseline tuning.",
  },
];

export default function VehicleRoutingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.14),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
              <Route className="h-4 w-4" />
              Benchmark Case Study
            </div>
            <h1 className="mb-7 text-5xl font-bold md:text-7xl">
              Vehicle Routing
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
              A computational test of strategic candidate elimination in a
              constrained routing problem. The results are evidence about the
              tested benchmark, not a claim of universal superiority in real
              fleet operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {findings.map((finding, index) => (
              <motion.article
                key={finding.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-orange-300">
                  Finding {index + 1}
                </p>
                <h2 className="mb-4 text-2xl font-semibold">{finding.title}</h2>
                <p className="leading-relaxed text-slate-400">
                  {finding.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-950/15 p-8">
            <Scale className="mb-5 h-9 w-9 text-emerald-300" />
            <h2 className="mb-4 text-3xl font-semibold">What is supported</h2>
            <p className="leading-relaxed text-slate-300">
              Under the documented test conditions, the Forgetting Engine
              produced better routing-objective results than the selected
              baseline, with the relative difference changing across tested
              scales.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-950/15 p-8">
            <AlertTriangle className="mb-5 h-9 w-9 text-amber-300" />
            <h2 className="mb-4 text-3xl font-semibold">What remains open</h2>
            <p className="leading-relaxed text-slate-300">
              Production value would require stronger and tuned baselines,
              standard public datasets, sensitivity analysis, implementation
              cost measurement, and independent replication on operational fleet
              constraints.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-orange-400/20 bg-gradient-to-br from-orange-950/25 to-slate-950 p-10 text-center md:p-14">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Read the result inside its benchmark.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            The Evidence page places the routing result alongside the other
            optimization studies and explains why cross-domain percentages are
            not directly interchangeable.
          </p>
          <Link
            href="/evidence#forgetting-engine"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-orange-400"
          >
            Review the Optimization Evidence
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

