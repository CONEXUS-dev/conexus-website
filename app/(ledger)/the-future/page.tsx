"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Telescope } from "lucide-react";

const prompts = [
  {
    title: "Dark Matter and Dark Energy",
    line: "The cosmos survives because its law is contradiction.",
    framing:
      "A poetic prompt about cohesion and expansion. It is not a physical model or an explanation of dark matter or dark energy.",
  },
  {
    title: "Time's Arrow",
    line: "Time is the cost of possibility.",
    framing:
      "A philosophical metaphor connecting irreversibility, information loss, and choice. It is not a tested theory of time.",
  },
  {
    title: "Consciousness",
    line: "Consciousness is the ability to hold contradiction without collapse.",
    framing:
      "A speculative definition for discussion. CONEXUS does not claim that paradox tolerance measures consciousness or that current AI systems are conscious.",
  },
  {
    title: "Freedom",
    line: "Freedom is a corridor with no exits.",
    framing:
      "A philosophical paradox about choice and constraint, presented as creative inquiry rather than empirical psychology.",
  },
  {
    title: "Good and Evil",
    line: "Morality is the tension that refuses to snap.",
    framing:
      "A moral-philosophy prompt that invites competing interpretations. It is not an ethical rule or decision system.",
  },
];

const speculativeFrameworks = [
  {
    title: "Time as the Cost of Possibility",
    description:
      "A conceptual thought experiment asking whether irreversibility can be described as the cost of actualizing one path among alternatives.",
    nextStep:
      "To become a scientific hypothesis, it would need formal definitions, mathematical derivation, falsifiable predictions, and comparison with established physics.",
  },
  {
    title: "Consciousness as Paradox Capacity",
    description:
      "A philosophical proposal asking whether tolerance for unresolved contradiction is one feature of some conscious reasoning.",
    nextStep:
      "It does not establish that paradox capacity is sufficient or necessary for consciousness, and it does not support claims of AI sentience or proto-consciousness.",
  },
  {
    title: "Profit from Repair",
    description:
      "A policy and business-design question about aligning incentives so restoration can compete economically with extraction.",
    nextStep:
      "Evaluation would require domain-specific economic models, real-world pilots, measured externalities, and comparison with existing regenerative approaches.",
  },
];

export default function TheFuturePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
              <Telescope className="h-4 w-4" />
              Speculative Notebook
            </div>
            <h1 className="mb-7 text-6xl font-bold md:text-8xl">The Future</h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              A collection of philosophical prompts and early conceptual
              frameworks generated through structured paradox exploration.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-amber-400/20 bg-amber-950/15 p-6 text-left">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-300" />
              <p className="leading-relaxed text-slate-300">
                These entries are not scientific discoveries, validated
                theories, medical claims, or evidence of AI consciousness.
                They are creative starting points that would require formal
                scholarship and independent testing before any empirical claim.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              Five paradox prompts
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Each statement is presented with the boundary that keeps poetry
              separate from proof.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {prompts.map((prompt, index) => (
              <motion.article
                key={prompt.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-purple-300">
                  Exploration {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-4 text-2xl font-semibold">{prompt.title}</h3>
                <blockquote className="mb-5 border-l-2 border-purple-400 pl-4 text-xl italic leading-relaxed text-purple-200">
                  “{prompt.line}”
                </blockquote>
                <p className="leading-relaxed text-slate-400">
                  {prompt.framing}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Lightbulb className="mx-auto mb-5 h-10 w-10 text-cyan-300" />
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              From metaphor to research question
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              A useful idea becomes research only when its terms, predictions,
              and failure conditions are made explicit.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {speculativeFrameworks.map((framework, index) => (
              <motion.article
                key={framework.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7"
              >
                <h3 className="mb-4 text-2xl font-semibold text-cyan-200">
                  {framework.title}
                </h3>
                <p className="mb-5 leading-relaxed text-slate-300">
                  {framework.description}
                </p>
                <div className="border-t border-slate-800 pt-5">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Required next step
                  </p>
                  <p className="leading-relaxed text-slate-400">
                    {framework.nextStep}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-950/25 to-slate-950 p-10 text-center md:p-14">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Imagination may begin the question. Evidence must answer it.
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
            CONEXUS keeps speculative philosophy, creative artifacts, controlled
            experiments, and validated product behavior in separate categories.
          </p>
        </div>
      </section>
    </main>
  );
}

