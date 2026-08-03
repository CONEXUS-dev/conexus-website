"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Filter, Fingerprint } from "lucide-react";

const capabilities = [
  {
    icon: Compass,
    title: "Calibrate",
    description:
      "ECP and the Nine-Gear architecture change how an AI holds tension before it answers.",
  },
  {
    icon: Filter,
    title: "Refine",
    description:
      "The Forgetting Engine removes what is not useful while preserving what still matters.",
  },
  {
    icon: Fingerprint,
    title: "Verify",
    description:
      "Provenance and audit infrastructure preserve the path behind every important result.",
  },
];

const particles = Array.from({ length: 36 }, () => ({
  startLeft: `${Math.random() * 100}%`,
  startTop: `${Math.random() * 100}%`,
  endLeft: `${Math.random() * 100}%`,
  endTop: `${Math.random() * 100}%`,
  duration: Math.random() * 20 + 14,
}));

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.16),transparent_48%)]" />
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute h-1 w-1 rounded-full bg-blue-400/25"
            style={{ left: particle.startLeft, top: particle.startTop }}
            animate={{ left: particle.endLeft, top: particle.endTop }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            The CONEXUS Foundation • The Refinery
          </div>

          <h1 className="mb-7 text-5xl font-bold leading-tight text-white md:text-7xl">
            The world is drowning in crude data.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300">
              We built the refinery.
            </span>
          </h1>

          <p className="mx-auto mb-5 max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
            CONEXUS builds the calibration, optimization, and provenance
            infrastructure that turns raw information into usable intelligence.
          </p>

          <p className="mx-auto mb-10 max-w-3xl text-lg font-semibold tracking-wide text-emerald-300 md:text-xl">
            We do not accumulate. We eliminate. We do not celebrate. We validate.
          </p>

          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/refinery"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white transition-all hover:bg-emerald-700"
            >
              Enter the Refinery
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/evidence"
              className="rounded-full border border-slate-600 bg-slate-900/60 px-8 py-4 font-semibold text-white transition-all hover:border-blue-400/60 hover:bg-slate-800"
            >
              View the Evidence
            </a>
            <a
              href="/nairthex"
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-8 py-4 font-semibold text-blue-200 transition-all hover:bg-blue-500/20"
            >
              Explore Products
            </a>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.12 }}
                className="rounded-2xl border border-slate-700/80 bg-slate-900/55 p-7 backdrop-blur-sm"
              >
                <Icon className="mb-5 h-8 w-8 text-cyan-300" />
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  {capability.title}
                </h2>
                <p className="leading-relaxed text-slate-400">
                  {capability.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
