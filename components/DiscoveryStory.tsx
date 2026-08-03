"use client";

import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import Link from "next/link";

const arms = [
  {
    label: "Control",
    value: "0.2466",
    note: "Single-turn baseline",
    className: "border-slate-600 bg-slate-800/60",
  },
  {
    label: "Neutral",
    value: "0.2219",
    note: "Analytical multi-turn",
    className: "border-orange-500/30 bg-orange-950/20",
  },
  {
    label: "Arm 4a",
    value: "0.2258",
    note: "Emoji tokens only",
    className: "border-slate-500/40 bg-slate-800/60",
  },
  {
    label: "CONEXUS",
    value: "0.2929",
    note: "Paradox architecture",
    className: "border-cyan-400/40 bg-cyan-950/25",
  },
];

export default function DiscoveryStory() {
  return (
    <section className="border-y border-slate-800 bg-gradient-to-b from-cyan-950/10 via-slate-950 to-slate-950 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            <FlaskConical className="h-4 w-4" />
            Four-Arm Causal Validation
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Architecture, not token priming,
            <span className="block text-cyan-300">drove the expansion.</span>
          </h2>

          <p className="text-xl leading-relaxed text-slate-300">
            Two hundred independent runs across four controlled conditions
            isolated the mechanism behind CONEXUS semantic expansion.
          </p>
        </motion.div>

        <div className="mb-10 grid gap-5 md:grid-cols-4">
          {arms.map((arm, index) => (
            <motion.article
              key={arm.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`rounded-2xl border p-6 text-center ${arm.className}`}
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                {arm.label}
              </p>
              <p className="mb-2 text-4xl font-bold text-white">{arm.value}</p>
              <p className="text-sm text-slate-400">{arm.note}</p>
            </motion.article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-cyan-400/25 bg-slate-900/65 p-7"
          >
            <p className="mb-2 text-4xl font-bold text-cyan-300">39.9%</p>
            <h3 className="mb-3 text-xl font-semibold text-white">
              Idea-level variance expansion
            </h3>
            <p className="leading-relaxed text-slate-400">
              The initial two-arm analysis showed a 39.9242% shift in latent
              exploratory variance without evidence of noise inflation.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-2xl border border-emerald-400/25 bg-slate-900/65 p-7"
          >
            <p className="mb-2 text-4xl font-bold text-emerald-300">d = 3.78</p>
            <h3 className="mb-3 text-xl font-semibold text-white">
              Neutral to CONEXUS
            </h3>
            <p className="leading-relaxed text-slate-400">
              The length-matched analytical condition compressed search while
              the full paradox-holding architecture expanded it.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="rounded-2xl border border-slate-500/40 bg-slate-900/65 p-7"
          >
            <p className="mb-2 text-4xl font-bold text-slate-200">p = 0.361</p>
            <h3 className="mb-3 text-xl font-semibold text-white">
              Tokens alone did not work
            </h3>
            <p className="leading-relaxed text-slate-400">
              Arm 4a was statistically indistinguishable from the neutral
              condition, isolating structure rather than emoji exposure.
            </p>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mx-auto mb-8 max-w-4xl text-lg leading-relaxed text-slate-300">
            The supported causal interpretation is precise: the active
            ingredient was the simultaneous unresolved contradiction held
            across the Nine-Gear sequence, not prompt length, multi-turn format,
            or unusual tokens alone.
          </p>
          <Link
            href="/evidence"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition-all hover:bg-cyan-400"
          >
            View the Full Validation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
