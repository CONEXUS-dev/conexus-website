"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  CheckCircle2,
  Church,
  ExternalLink,
  HeartHandshake,
  MessageSquare,
  Mic,
  Shield,
  XCircle,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";

const APP_URL = "https://the-narthex.onrender.com";

const doctrine = [
  {
    icon: HeartHandshake,
    title: "Presence Before Intervention",
    description:
      "Receive the person accurately without immediately trying to convert, diagnose, correct, or resolve them.",
  },
  {
    icon: MessageSquare,
    title: "Contradiction Without Collapse",
    description:
      "Allow doubt, anger, grief, joy, and uncertainty to coexist without forcing a quick answer.",
  },
  {
    icon: Church,
    title: "Human Authority First",
    description:
      "NAiRTHEX never replaces pastors, clinicians, sponsors, or community. It protects the moment before ministry.",
  },
];

const capabilities = [
  {
    icon: Mic,
    title: "Voice and Text",
    description:
      "Speak freely or type. Both paths enter the same quiet, session-aware conversation.",
  },
  {
    icon: Shield,
    title: "Governed Reflection",
    description:
      "The experience is designed around restraint, boundaries, and respect for the person's stated worldview.",
  },
  {
    icon: Church,
    title: "Built for the Threshold",
    description:
      "A private foyer before ministry, not a replacement for ministry itself.",
  },
];

const isList = [
  "A spiritual reflection aide",
  "One quiet conversation",
  "Under human and pastoral authority",
];

const isNotList = [
  "Therapy, confession, or clergy",
  "A diagnostic or advisory tool",
  "An autonomous AI decision-maker",
];

export default function NairthexPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#17130f] via-[#211b15] to-[#14110e] text-white">
      <Navigation />

      <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,110,0.18),transparent_45%)]" />
        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-200/10 px-4 py-2 text-sm font-medium tracking-wide text-amber-200">
              <Church className="h-4 w-4" />
              CONEXUS Product for Faith and Reflection
            </div>

            <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              NAiRTHEX
              <span className="mt-3 block text-3xl font-medium text-amber-200 md:text-5xl">
                A Digital Threshold for Sacred Space
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-stone-300 md:text-2xl">
              A private AI reflection companion serving as a quiet foyer before
              ministry, built on a doctrine of restraint and respect for human
              authority.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-stone-950 transition-all hover:bg-amber-400"
              >
                <ExternalLink className="h-5 w-5" />
                Enter NAiRTHEX
              </a>
              <a
                href="#doctrine"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-600 bg-stone-900/40 px-8 py-4 text-lg font-semibold text-stone-200 transition-all hover:border-amber-300/50 hover:text-white"
              >
                How It Works
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="doctrine" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              Product Doctrine
            </p>
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              The moment before ministry matters.
            </h2>
            <p className="text-lg leading-relaxed text-stone-400">
              NAiRTHEX does not rush a person toward an answer. It creates a
              quiet threshold where they can speak honestly, remain whole, and
              decide what human support comes next.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {doctrine.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="rounded-2xl border border-amber-200/15 bg-stone-900/50 p-7"
                >
                  <Icon className="mb-5 h-8 w-8 text-amber-300" />
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-stone-400">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-stone-800 bg-stone-950/45 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              Operational Boundaries
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Clear by design.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/20 p-8">
              <h3 className="mb-6 text-2xl font-semibold text-emerald-300">
                NAiRTHEX is
              </h3>
              <div className="space-y-4">
                {isList.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400" />
                    <p className="text-lg text-stone-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-rose-400/20 bg-rose-950/20 p-8">
              <h3 className="mb-6 text-2xl font-semibold text-rose-300">
                NAiRTHEX is not
              </h3>
              <div className="space-y-4">
                {isNotList.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-6 w-6 shrink-0 text-rose-400" />
                    <p className="text-lg text-stone-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
              The Experience
            </p>
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              One quiet conversation.
            </h2>
            <p className="text-lg leading-relaxed text-stone-400">
              The interface stays calm, the person stays in control, and the
              path back to human community remains visible.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="rounded-2xl border border-stone-700 bg-stone-900/45 p-7"
                >
                  <Icon className="mb-5 h-8 w-8 text-amber-300" />
                  <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                  <p className="leading-relaxed text-stone-400">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-950/30 to-stone-950 p-10 text-center md:p-14">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Step into the threshold.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-stone-400">
            No account is required. Speak or type, pause when you need to, and
            leave the conversation whenever you choose.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-lg font-semibold text-stone-950 transition-all hover:bg-amber-400"
          >
            <ExternalLink className="h-5 w-5" />
            Enter NAiRTHEX
          </a>
        </div>
      </section>
    </main>
  );
}
