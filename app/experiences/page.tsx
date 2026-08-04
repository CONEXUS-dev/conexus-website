"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Church, MoonStar, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const products = [
  {
    title: "NAiRTHEX",
    subtitle: "A Digital Threshold for Sacred Space",
    description:
      "A private voice-and-text reflection companion designed as a quiet foyer before human ministry. It emphasizes restraint, user control, and pastoral authority.",
    href: "/nairthex",
    icon: Church,
    accent: "amber",
    boundaries: [
      "Not therapy, confession, or clergy",
      "Not a diagnostic or autonomous decision tool",
      "Human support remains primary",
    ],
  },
  {
    title: "ECHOform",
    subtitle: "A Symbolic Dream and Reflection Journal",
    description:
      "A creative reflection experience that turns a dream or written moment into multiple symbolic perspectives and visual mirror choices.",
    href: "/echoform",
    icon: MoonStar,
    accent: "purple",
    boundaries: [
      "Not clinical dream interpretation",
      "Does not reveal hidden psychological truth",
      "The user remains the author of meaning",
    ],
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              CONEXUS Products
            </p>
            <h1 className="mb-7 text-5xl font-bold md:text-7xl">
              Human-facing experiences with explicit boundaries.
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
              CONEXUS translates its calibration architecture into reflective
              products without claiming therapy, diagnosis, spiritual authority,
              or privileged access to a person's inner truth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-800 px-4 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isAmber = product.accent === "amber";

            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-3xl border p-8 md:p-10 ${
                  isAmber
                    ? "border-amber-400/20 bg-amber-950/15"
                    : "border-violet-400/20 bg-violet-950/15"
                }`}
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl p-4 ${
                    isAmber
                      ? "bg-amber-500/15 text-amber-300"
                      : "bg-violet-500/15 text-violet-300"
                  }`}
                >
                  <Icon className="h-9 w-9" />
                </div>
                <h2 className="mb-2 text-4xl font-bold">{product.title}</h2>
                <p
                  className={`mb-5 text-lg font-semibold ${
                    isAmber ? "text-amber-300" : "text-violet-300"
                  }`}
                >
                  {product.subtitle}
                </p>
                <p className="mb-7 text-lg leading-relaxed text-slate-300">
                  {product.description}
                </p>

                <div className="mb-8 space-y-3 border-t border-slate-700 pt-6">
                  {product.boundaries.map((boundary) => (
                    <div key={boundary} className="flex items-start gap-3">
                      <ShieldCheck
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          isAmber ? "text-amber-300" : "text-violet-300"
                        }`}
                      />
                      <p className="text-slate-400">{boundary}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={product.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold text-slate-950 transition ${
                    isAmber
                      ? "bg-amber-400 hover:bg-amber-300"
                      : "bg-violet-400 hover:bg-violet-300"
                  }`}
                >
                  Explore {product.title}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900/55 p-10 text-center md:p-14">
          <ShieldCheck className="mx-auto mb-5 h-10 w-10 text-cyan-300" />
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Reflection remains an invitation, not a verdict.
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
            Product outputs are prompts for personal interpretation. They should
            not be treated as medical, psychological, legal, financial, or
            spiritual advice.
          </p>
        </div>
      </section>
    </main>
  );
}
