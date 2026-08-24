"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  MoonStar,
  Play,
  ShieldCheck,
  XCircle,
} from "lucide-react";

const DEMO_URL = "https://conexus-echoform-demo.vercel.app";

const journeyImages = [
  { src: "/echoform/Before you Begin.png", alt: "ECHOform opening screen" },
  { src: "/echoform/ECHOFORM Menu.png", alt: "ECHOform menu" },
  {
    src: "/echoform/ECHOFORM The Mirror Awakens.png",
    alt: "ECHOform mirror selection screen",
  },
  {
    src: "/echoform/ECHOFORM Upload a photo or take one now.png",
    alt: "Optional image upload screen",
  },
  { src: "/echoform/ECHOFORM example.png", alt: "Example symbolic reflection" },
  {
    src: "/echoform/GENERATING REFLECTION.png",
    alt: "Reflection generation screen",
  },
];

const steps = [
  {
    title: "Share a dream or moment",
    description:
      "Enter a dream, memory, image, or written reflection. The user chooses what to share and may stop at any time.",
  },
  {
    title: "Receive three perspectives",
    description:
      "The system offers Shadow, Light, and Reality as simultaneous symbolic routes rather than a single authoritative interpretation.",
  },
  {
    title: "Choose a mirror",
    description:
      "The selected route is translated into a visual and written reflection through one of the ECHOform mirror tiers.",
  },
  {
    title: "Keep or discard the result",
    description:
      "The output is a creative journal artifact. The user decides whether it is useful, meaningful, or worth saving.",
  },
];

const isList = [
  "A symbolic dream and reflection journal",
  "A creative prompt for personal meaning-making",
  "A user-directed visual experience",
];

const isNotList = [
  "Clinical dream interpretation or psychotherapy",
  "A diagnostic assessment of personality or mental health",
  "Proof of hidden meaning, prophecy, memory, or spiritual truth",
];

export default function EchoformPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
              <MoonStar className="h-4 w-4" />
              ECHOform Dream Journal & Mirror
            </div>
            <h1 className="mb-7 text-5xl font-bold md:text-7xl">
              Your dream becomes a symbolic reflection.
              <span className="block text-violet-300">You decide what it means.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-4xl text-xl leading-relaxed text-slate-300">
              ECHOform turns a dream, memory, or written moment into multiple
              creative perspectives and visual mirror choices. It does not claim
              to decode the unconscious or reveal psychological truth.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-violet-400"
              >
                <Play className="h-5 w-5" />
                Open the Guided Demo
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-600 bg-slate-900/60 px-8 py-4 font-semibold text-white transition hover:border-violet-400/60"
              >
                See How It Works
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
              The Experience
            </p>
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              Multiple perspectives without a forced conclusion.
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              The contradiction-holding structure is used to keep several
              symbolic interpretations available at once. The product offers
              possibilities rather than declaring an answer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-violet-300">
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
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <Eye className="mx-auto mb-5 h-10 w-10 text-violet-300" />
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              What ECHOform is, and what it is not
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-950/15 p-8">
              <h3 className="mb-6 text-2xl font-semibold text-emerald-300">
                ECHOform is
              </h3>
              <div className="space-y-4">
                {isList.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400" />
                    <p className="text-lg text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-rose-400/20 bg-rose-950/15 p-8">
              <h3 className="mb-6 text-2xl font-semibold text-rose-300">
                ECHOform is not
              </h3>
              <div className="space-y-4">
                {isNotList.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-6 w-6 shrink-0 text-rose-400" />
                    <p className="text-lg text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="border-y border-slate-800 bg-slate-950/45 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              Inside the guided experience
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              These screens show the current visual journey. The guided demo
              uses prepared examples so visitors can examine the flow without
              treating the output as a personal assessment.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {journeyImages.map((image, index) => (
              <motion.figure
                key={image.src}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/60"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-950/25 to-slate-950 p-10 text-center md:p-14">
          <ShieldCheck className="mx-auto mb-5 h-10 w-10 text-violet-300" />
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            The mirror offers language. It does not own your meaning.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            ECHOform output should be treated as creative reflection, not medical,
            psychological, legal, financial, or spiritual advice. Distressing or
            urgent concerns belong with qualified human support.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-violet-400"
            >
              Open the Guided Demo
              <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              href="/experiences"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/60 px-8 py-4 font-semibold text-white transition hover:border-violet-400/60"
            >
              View CONEXUS Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

