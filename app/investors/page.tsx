"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  FlaskConical,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";

const evidence = [
  {
    value: "200",
    label: "Independent four-arm runs",
    note: "Fifty runs in each controlled prompt condition",
  },
  {
    value: "d = 3.78",
    label: "Neutral-to-CONEXUS effect",
    note: "Run-level semantic-distance comparison in the tested configuration",
  },
  {
    value: "30,800",
    label: "Locked optimization trials",
    note: "Controlled Forgetting Engine sweep",
  },
  {
    value: "561%",
    label: "Largest reported relative gap",
    note: "One stated 3D protein-folding comparison, not a universal rate",
  },
];

const companyLayers = [
  {
    title: "Calibration",
    description:
      "The Nine-Gear ECP architecture structures how models hold competing constraints and explore alternatives.",
  },
  {
    title: "Optimization",
    description:
      "The Forgetting Engine tests whether strategic candidate elimination can improve search under defined budgets.",
  },
  {
    title: "Provenance",
    description:
      "Traceable records connect inputs, transformations, outputs, and authorship history where implemented.",
  },
];

const diligence = [
  "The four-arm result currently covers one model family, one task, and one configuration.",
  "Forgetting Engine percentages come from different benchmarks and cannot be combined into one performance score.",
  "Internal reports and code availability do not substitute for independent replication or peer review.",
  "Patent filings establish claimed priority positions, not guaranteed issuance, validity, scope, or freedom to operate.",
  "Product concepts and prototypes are at different stages of deployment, testing, and commercial readiness.",
];

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              <Layers3 className="h-4 w-4" />
              For Investors and Strategic Partners
            </div>
            <h1 className="mb-7 text-5xl font-bold md:text-7xl">
              A calibration, optimization, and provenance company.
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              CONEXUS is building a common technical foundation beneath
              experimental AI methods and human-facing products. The investment
              case begins with evidence, intellectual property, working
              prototypes, and the work still required to validate and scale them.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-800 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {evidence.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7"
              >
                <p className="text-4xl font-bold text-cyan-300">{item.value}</p>
                <h2 className="mt-3 text-lg font-semibold">{item.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {item.note}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              One foundation, three layers
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              The company thesis is that calibrated search, subtractive
              optimization, and traceable provenance can reinforce one another.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {companyLayers.map((layer, index) => (
              <motion.article
                key={layer.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8"
              >
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                  Layer {index + 1}
                </p>
                <h3 className="mb-4 text-2xl font-semibold">{layer.title}</h3>
                <p className="leading-relaxed text-slate-400">
                  {layer.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-950/45 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-blue-400/20 bg-blue-950/15 p-8">
              <FlaskConical className="mb-5 h-9 w-9 text-blue-300" />
              <h2 className="mb-4 text-2xl font-semibold">Research program</h2>
              <p className="leading-relaxed text-slate-300">
                Controlled calibration experiments and computational optimization
                benchmarks are being organized into reproducible evidence
                packages with explicit limitations.
              </p>
            </div>
            <div className="rounded-3xl border border-violet-400/20 bg-violet-950/15 p-8">
              <ShieldCheck className="mb-5 h-9 w-9 text-violet-300" />
              <h2 className="mb-4 text-2xl font-semibold">IP portfolio</h2>
              <p className="leading-relaxed text-slate-300">
                Patent filings cover areas including calibration, symbolic
                compression, strategic forgetting, provenance, and collaborative
                authorship. Filing status is not a guarantee of issued claims or
                commercial exclusivity.
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-950/15 p-8">
              <Layers3 className="mb-5 h-9 w-9 text-emerald-300" />
              <h2 className="mb-4 text-2xl font-semibold">Product translation</h2>
              <p className="leading-relaxed text-slate-300">
                NAiRTHEX and ECHOform test how the underlying architecture can
                support bounded reflection experiences while preserving human
                authority and clear product limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
                Diligence boundaries
              </p>
              <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                What a serious investor should verify
              </h2>
              <p className="text-lg leading-relaxed text-slate-400">
                CONEXUS does not present editorial interest, internal audits,
                patent applications, prototypes, or large effect estimates as
                substitutes for independent technical and commercial diligence.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-400/20 bg-amber-950/15 p-8">
              <div className="space-y-5">
                {diligence.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    <p className="leading-relaxed text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/25 to-slate-950 p-10 text-center md:p-14">
          <FileText className="mx-auto mb-5 h-10 w-10 text-cyan-300" />
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Review the evidence before the narrative.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            The public Evidence page separates measured findings, benchmark
            results, hypotheses, and limitations. Additional materials are
            available for qualified diligence.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/evidence"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Review the Evidence
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="mailto:DAngell@CONEXUSGlobalArts.Media"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/60 px-8 py-4 font-semibold text-white transition hover:border-cyan-400/60"
            >
              Contact the Founder
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
