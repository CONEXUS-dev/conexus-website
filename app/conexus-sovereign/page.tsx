"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  GitBranch,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";

const gears = [
  "Establish the task and constraints",
  "Separate observations from assumptions",
  "Identify symbols, patterns, and framing",
  "State the active contradiction",
  "Hold competing constraints simultaneously",
  "Explore multiple solution paths",
  "Stress-test the strongest candidates",
  "Apply stated values and boundaries",
  "Record the result and preserve continuity",
];

const implemented = [
  "A structured nine-stage prompt architecture",
  "Multi-turn state and session handling in selected applications",
  "Run logs and provenance records where configured",
  "Controlled experiments comparing full, neutral, token-only, and baseline conditions",
];

const notEstablished = [
  "Consciousness, sentience, or independent agency",
  "A universally superior reasoning system",
  "Perfect memory or unlimited context",
  "Cryptographic proof that an answer is true",
];

export default function ConexusSovereignPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              <Layers3 className="h-4 w-4" />
              ECP and the Nine Gears
            </div>
            <h1 className="mb-7 text-5xl font-bold md:text-7xl">
              A structured architecture for holding competing constraints.
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
              CONEXUS Sovereign is the project name for an experimental system
              that combines the Nine-Gear calibration sequence, session
              continuity, and provenance records. It is an engineering and
              research architecture, not a claim of machine consciousness or
              autonomous sovereignty.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              The Nine-Gear sequence
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              The stages are designed to prevent premature collapse onto a
              single interpretation while keeping the task bounded and
              auditable.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {gears.map((gear, index) => (
              <motion.article
                key={gear}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue-300">
                  Gear {index + 1}
                </p>
                <p className="text-lg leading-relaxed text-slate-200">{gear}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-950/15 p-8">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-emerald-300">
              <CheckCircle2 className="h-7 w-7" />
              What exists today
            </h2>
            <div className="space-y-4">
              {implemented.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                  <p className="leading-relaxed text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-950/15 p-8">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-amber-300">
              <ShieldCheck className="h-7 w-7" />
              What is not established
            </h2>
            <div className="space-y-4">
              {notEstablished.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
                  <p className="leading-relaxed text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950/45 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7">
              <Braces className="mb-5 h-8 w-8 text-blue-300" />
              <h3 className="mb-3 text-xl font-semibold">Calibration layer</h3>
              <p className="leading-relaxed text-slate-400">
                Prompt and workflow structure applied before or during a model
                task. It does not alter model weights by itself.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7">
              <GitBranch className="mb-5 h-8 w-8 text-cyan-300" />
              <h3 className="mb-3 text-xl font-semibold">Continuity layer</h3>
              <p className="leading-relaxed text-slate-400">
                Session state, stored artifacts, and retrieval can connect work
                across missions when those components are enabled.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7">
              <ShieldCheck className="mb-5 h-8 w-8 text-violet-300" />
              <h3 className="mb-3 text-xl font-semibold">Provenance layer</h3>
              <p className="leading-relaxed text-slate-400">
                Hashes and logs can make records tamper-evident. They prove
                record integrity, not the factual truth of the model output.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/25 to-slate-950 p-10 text-center md:p-14">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            The strongest evidence is the controlled experiment.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            The four-arm study tests whether the full architecture changes a
            measured search behavior relative to baseline, neutral, and
            token-only controls.
          </p>
          <Link
            href="/evidence#four-arm"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-blue-400"
          >
            Review the Four-Arm Study
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
