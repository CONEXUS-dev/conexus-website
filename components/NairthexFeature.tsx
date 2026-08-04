"use client";

import { motion } from "framer-motion";
import { ArrowRight, Church, Eye } from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: Church,
    eyebrow: "Faith and Reflection",
    title: "NAiRTHEX",
    description:
      "A private AI reflection companion serving as a quiet foyer before ministry, with restraint, clear boundaries, and human authority first.",
    href: "/nairthex",
    accent: "amber",
  },
  {
    icon: Eye,
    eyebrow: "Dreams and Symbolic Reflection",
    title: "ECHOform",
    description:
      "A dream mirror that routes each entry through Shadow, Light, and Reality before opening a path through twenty symbolic Mirror Tiers.",
    href: "/echoform",
    accent: "purple",
  },
];

export function NairthexFeature() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            CONEXUS Products
          </p>
          <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
            See the architecture become an experience.
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            Each product has its own purpose, boundaries, and visual language.
            The research stays underneath. The human experience stays in front.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isAmber = product.accent === "amber";
            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`rounded-3xl border p-8 md:p-10 ${
                  isAmber
                    ? "border-amber-500/25 bg-gradient-to-br from-amber-950/30 to-slate-900/70"
                    : "border-purple-500/25 bg-gradient-to-br from-purple-950/30 to-slate-900/70"
                }`}
              >
                <Icon
                  className={`mb-6 h-9 w-9 ${
                    isAmber ? "text-amber-300" : "text-purple-300"
                  }`}
                />
                <p
                  className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
                    isAmber ? "text-amber-300" : "text-purple-300"
                  }`}
                >
                  {product.eyebrow}
                </p>
                <h3 className="mb-4 text-4xl font-bold text-white">
                  {product.title}
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-slate-300">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all ${
                    isAmber
                      ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
                      : "bg-purple-500 text-white hover:bg-purple-400"
                  }`}
                >
                  Explore {product.title}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
