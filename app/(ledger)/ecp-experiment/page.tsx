"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle, Archive, ArrowRight, FlaskConical } from "lucide-react";

export default function EcpExperimentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-500/30 bg-slate-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              <Archive className="h-4 w-4" />
              Earlier Pilot Archive
            </div>
            <h1 className="mb-7 text-5xl font-bold md:text-7xl">
              Early ECP calibration experiments
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
              This route preserves the historical place of the earlier pilot
              studies. Those experiments helped shape later controls, but they
              are not the strongest current evidence for the ECP architecture.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-950/15 p-8">
              <FlaskConical className="mb-5 h-9 w-9 text-cyan-300" />
              <h2 className="mb-4 text-3xl font-semibold">
                What the pilot contributed
              </h2>
              <p className="leading-relaxed text-slate-300">
                The early studies suggested that a short calibration exchange
                could alter measured model behavior in routing tasks. They also
                exposed the need for stronger controls separating prompt length,
                multi-turn interaction, unusual tokens, and the complete
                contradiction-holding architecture.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-400/20 bg-amber-950/15 p-8">
              <AlertTriangle className="mb-5 h-9 w-9 text-amber-300" />
              <h2 className="mb-4 text-3xl font-semibold">
                Why it is not the lead claim
              </h2>
              <p className="leading-relaxed text-slate-300">
                Small samples, task-specific outcomes, and less complete causal
                isolation limit the conclusions that should be drawn from the
                pilot. It should be read as developmental evidence, not proof of
                universal calibration effects or a general complexity law.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/25 to-slate-950 p-10 text-center md:p-14">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            The current standard is the four-arm study.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            Two hundred independent runs compare baseline, neutral multi-turn,
            token-only, and full CONEXUS conditions with explicit statistical
            limits.
          </p>
          <Link
            href="/evidence#four-arm"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Review the Current Causal Evidence
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

