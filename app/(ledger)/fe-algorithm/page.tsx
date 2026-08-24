"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Filter,
  GitCompare,
  Search,
} from "lucide-react";

const process = [
  {
    title: "Generate",
    description: "Create or receive a population of candidate solutions.",
  },
  {
    title: "Evaluate",
    description: "Score candidates against the stated objective and constraints.",
  },
  {
    title: "Forget selectively",
    description:
      "Remove low-value candidates while retaining selected alternatives and contradictory signals.",
  },
  {
    title: "Repair and explore",
    description:
      "Use the surviving structure to propose new candidates and continue the search.",
  },
];

const results = [
  "30,800 controlled trials in the locked optimization sweep",
  "4,000-trial 3D protein-folding comparison: 25.8% success versus 3.9% for the stated Monte Carlo baseline",
  "Vehicle-routing comparisons reported up to 89.3% improvement at the largest tested scale",
  "Quantum-compilation experiments reported 27.8% gate reduction and 3.7% fidelity gain under the documented simulator setup",
];

const limits = [
  "Results are benchmark-specific and use different objectives and baselines.",
  "Internal validation does not equal independent replication or peer review.",
  "The observed scaling pattern is a research hypothesis, not a universal complexity law.",
  "Performance on a benchmark does not establish effectiveness in clinical, financial, or production deployment.",
];

export default function FEAlgorithmPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <Filter className="h-4 w-4" />
              Subtractive Optimization
            </div>
            <h1 className="mb-7 text-5xl font-bold md:text-7xl">
              The Forgetting Engine
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
              An experimental search method built around strategic elimination:
              remove low-value candidates, preserve selected alternatives, and
              continue exploring from a smaller but more informative search
              space.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              How the method is tested
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              The implementation varies by domain, but the research loop follows
              the same general pattern.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-emerald-300">
                  Step {index + 1}
                </p>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-950/15 p-8">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-emerald-300">
                <CheckCircle2 className="h-7 w-7" />
                Reported benchmark results
              </h2>
              <div className="space-y-5">
                {results.map((result) => (
                  <div key={result} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                    <p className="leading-relaxed text-slate-300">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-400/20 bg-amber-950/15 p-8">
              <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-amber-300">
                <AlertTriangle className="h-7 w-7" />
                Interpretation limits
              </h2>
              <div className="space-y-5">
                {limits.map((limit) => (
                  <div key={limit} className="flex items-start gap-3">
                    <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
                    <p className="leading-relaxed text-slate-300">{limit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950/45 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7">
              <Search className="mb-5 h-8 w-8 text-emerald-300" />
              <h3 className="mb-3 text-xl font-semibold">Search, not memory</h3>
              <p className="leading-relaxed text-slate-400">
                “Forgetting” refers to candidate elimination inside an
                optimization process. It is not a claim about human awareness or
                machine consciousness.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7">
              <GitCompare className="mb-5 h-8 w-8 text-cyan-300" />
              <h3 className="mb-3 text-xl font-semibold">Baseline matters</h3>
              <p className="leading-relaxed text-slate-400">
                Every reported percentage depends on the comparison algorithm,
                objective, scale, budget, and success definition.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7">
              <Filter className="mb-5 h-8 w-8 text-violet-300" />
              <h3 className="mb-3 text-xl font-semibold">Open hypothesis</h3>
              <p className="leading-relaxed text-slate-400">
                Larger relative gaps at larger tested scales are promising. They
                still require independent and stronger-baseline replication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-950/25 to-slate-950 p-10 text-center md:p-14">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Review the benchmark record, not a universal claim.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            The Evidence page separates the locked sweep, domain studies,
            reported comparisons, and remaining limitations.
          </p>
          <Link
            href="/evidence#forgetting-engine"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Review Forgetting Engine Evidence
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

