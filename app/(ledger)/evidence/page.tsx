"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Database,
  Download,
  FlaskConical,
  Microscope,
  Scale,
  XCircle,
} from "lucide-react";

const fourArmConditions = [
  {
    label: "Control",
    value: "0.2466",
    note: "Single-turn baseline",
  },
  {
    label: "Neutral",
    value: "0.2219",
    note: "Analytical multi-turn prompt",
  },
  {
    label: "Token-only",
    value: "0.2258",
    note: "Emoji exposure without the architecture",
  },
  {
    label: "CONEXUS",
    value: "0.2929",
    note: "Complete contradiction-holding sequence",
  },
];

const supportedFindings = [
  "The full CONEXUS condition produced the highest run-level mean semantic distance in this experiment.",
  "The difference between the neutral and CONEXUS conditions was large in the tested configuration: Cohen's d = 3.7824.",
  "The neutral-to-CONEXUS Welch test returned p = 2.97e-32, and the bootstrap confidence interval for the mean difference excluded zero.",
  "The token-only condition was not statistically distinguishable from the neutral condition: p = 0.3612, with a small effect estimate.",
  "The longer neutral prompt compressed rather than expanded the measured search behavior, weighing against prompt length as the explanation.",
];

const studyLimits = [
  "One model family and one divergent-thinking task were used in the reported four-arm study.",
  "Semantic distance is a behavioral measurement, not a general measure of intelligence, truth, creativity, or consciousness.",
  "The 39.9242% idea-level variance difference is descriptive; its Levene variance test was not significant at p = 0.304333.",
  "The causal result supports the tested prompt architecture under these conditions. Broader generalization requires additional models, tasks, preregistration, and independent replication.",
];

const benchmarkAreas = [
  {
    name: "2D Protein Folding",
    trials: "2,000",
    result: "Approximately 80% relative improvement in the stated comparison",
    scope: "Internal benchmark against the documented Monte Carlo baseline",
  },
  {
    name: "3D Protein Folding",
    trials: "4,000",
    result: "25.8% success versus 3.9%, approximately 561% relative improvement",
    scope: "Largest reported relative gap in this research portfolio",
  },
  {
    name: "Traveling Salesman",
    trials: "Scale series",
    result: "Larger relative gaps were reported at larger tested instances",
    scope: "Benchmark-specific trend, not a universal scaling law",
  },
  {
    name: "Vehicle Routing",
    trials: "250",
    result: "Up to 89.3% improvement at the largest tested scale",
    scope: "Compared with the stated routing baseline and configuration",
  },
  {
    name: "Neural Architecture Search",
    trials: "300",
    result: "Reported accuracy gains ranged from 3.8% to 8.4%",
    scope: "Internal search benchmark; external replication remains needed",
  },
  {
    name: "Quantum Compilation",
    trials: "5,000",
    result: "27.8% gate reduction and 3.7% fidelity gain were reported",
    scope: "Simulator-based comparison under the documented compilation setup",
  },
];

const reports = [
  {
    title: "Four-Arm Causal Validation",
    description:
      "Methods, four conditions, run-level statistics, controls, and interpretation.",
    href: "/evidence/calibration-validation-full",
    external: false,
  },
  {
    title: "Forgetting Engine Executive Audit",
    description:
      "A concise overview of the optimization benchmark program and reported findings.",
    href: "/audit-reports/FE_AUDIT_EXECUTIVE.md",
    external: false,
  },
  {
    title: "Forgetting Engine Full Audit",
    description:
      "Detailed methods, benchmark summaries, statistical tables, and source mapping.",
    href: "/audit-reports/FE_AUDIT_FULL.md",
    external: false,
  },
  {
    title: "Research Validation Repository",
    description:
      "Code, data packages, and case-study materials available for technical review.",
    href: "https://github.com/CONEXUS-dev/research-validation",
    external: true,
  },
];

export default function EvidencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              <Scale className="h-4 w-4" />
              Evidence With Scope
            </div>
            <h1 className="mb-7 text-5xl font-bold md:text-8xl">
              Strong results.
              <span className="block text-cyan-300">Explicit limits.</span>
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              CONEXUS reports controlled experiments and internal computational
              benchmarks with their conditions, baselines, and limitations. The
              evidence supports specific findings. It does not justify universal
              claims about every model, algorithm, or scientific domain.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="four-arm" className="border-y border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
              <FlaskConical className="h-4 w-4" />
              Primary Causal Study
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              Four controlled conditions. Two hundred independent runs.
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              The study tested Gemini 3.1 Pro Preview on an Alternative Uses
              Task, with 50 independent runs per condition, temperature 0.7,
              16,000 maximum output tokens, and local BGE embeddings for the
              semantic-distance measurement.
            </p>
          </div>

          <div className="mb-12 grid gap-5 md:grid-cols-4">
            {fourArmConditions.map((condition, index) => (
              <motion.article
                key={condition.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/65 p-6 text-center"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {condition.label}
                </p>
                <p className="mb-2 text-4xl font-bold text-white">
                  {condition.value}
                </p>
                <p className="text-sm leading-relaxed text-slate-400">
                  {condition.note}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mb-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/25 bg-emerald-950/15 p-7">
              <p className="mb-2 text-4xl font-bold text-emerald-300">d = 3.7824</p>
              <h3 className="mb-3 text-xl font-semibold">Neutral to CONEXUS</h3>
              <p className="leading-relaxed text-slate-400">
                Large run-level standardized mean difference in the tested
                configuration.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/25 bg-cyan-950/15 p-7">
              <p className="mb-2 text-4xl font-bold text-cyan-300">2.97e-32</p>
              <h3 className="mb-3 text-xl font-semibold">Welch p-value</h3>
              <p className="leading-relaxed text-slate-400">
                The bootstrap interval for the mean difference was
                [+0.063467, +0.078094].
              </p>
            </div>
            <div className="rounded-2xl border border-slate-500/35 bg-slate-900/65 p-7">
              <p className="mb-2 text-4xl font-bold text-slate-200">p = 0.3612</p>
              <h3 className="mb-3 text-xl font-semibold">Token-only control</h3>
              <p className="leading-relaxed text-slate-400">
                No statistically detectable difference from the neutral
                condition was found in this comparison.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70 p-4"
            >
              <a
                href="/images/evidence/cracking-ai-creativity-code.webp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/evidence/cracking-ai-creativity-code.webp"
                  alt="CONEXUS four-arm experiment overview infographic"
                  width={1143}
                  height={2048}
                  className="h-auto max-h-[820px] w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>
              <figcaption className="px-3 pb-2 pt-4 text-center text-sm text-slate-400">
                High-level experiment overview. Select to open the full image.
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70 p-4"
            >
              <a
                href="/images/evidence/search-regime-modulation.webp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/evidence/search-regime-modulation.webp"
                  alt="Technical infographic comparing the four prompt conditions and measured search behavior"
                  width={1143}
                  height={2048}
                  className="h-auto max-h-[820px] w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>
              <figcaption className="px-3 pb-2 pt-4 text-center text-sm text-slate-400">
                Technical interpretation of the measured search-regime shift.
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              What the study supports, and what it does not.
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Precision strengthens the finding. It does not diminish it.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-950/15 p-8">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-emerald-300">
                <CheckCircle2 className="h-7 w-7" />
                Supported by this study
              </h3>
              <div className="space-y-5">
                {supportedFindings.map((finding) => (
                  <div key={finding} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                    <p className="leading-relaxed text-slate-300">{finding}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-400/20 bg-amber-950/15 p-8">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-amber-300">
                <AlertTriangle className="h-7 w-7" />
                Limits and open questions
              </h3>
              <div className="space-y-5">
                {studyLimits.map((limit) => (
                  <div key={limit} className="flex items-start gap-3">
                    <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-amber-400" />
                    <p className="leading-relaxed text-slate-300">{limit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="forgetting-engine" className="border-y border-slate-800 bg-slate-950/45 px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-violet-300">
              <Database className="h-4 w-4" />
              Optimization Research
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              The Forgetting Engine benchmark program
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              The locked optimization sweep contains 30,800 controlled trials.
              Additional domain studies test the same strategic-elimination idea
              in different search spaces. Each result belongs to its own
              objective, baseline, and configuration.
            </p>
          </div>

          <div className="mb-12 rounded-2xl border border-violet-400/20 bg-violet-950/15 p-7 text-center">
            <p className="text-lg leading-relaxed text-slate-300">
              <strong className="text-violet-300">Important:</strong> a 561%
              relative success-rate difference in protein folding is not the
              same quantity as an 89.3% routing improvement or a 27.8% gate
              reduction. These numbers should be read within their own
              experiments, not combined into one universal score.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {benchmarkAreas.map((area, index) => (
              <motion.article
                key={area.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-slate-700 bg-slate-900/65 p-7"
              >
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-violet-300">
                  {area.trials} trials
                </p>
                <h3 className="mb-4 text-2xl font-semibold">{area.name}</h3>
                <p className="mb-4 leading-relaxed text-slate-300">
                  {area.result}
                </p>
                <p className="border-t border-slate-800 pt-4 text-sm leading-relaxed text-slate-500">
                  {area.scope}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-fuchsia-300">
                <Microscope className="h-4 w-4" />
                Open Research Hypothesis
              </div>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Complexity inversion is an observed pattern, not a declared law.
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-300">
                In several CONEXUS benchmark series, the relative advantage over
                the chosen baseline increased at larger tested scales. That is
                the phenomenon CONEXUS calls complexity inversion.
              </p>
              <p className="text-lg leading-relaxed text-slate-400">
                Establishing a general scaling law would require preregistered
                experiments, stronger competing methods, multiple independent
                implementations, and replication outside the CONEXUS team.
              </p>
            </div>

            <div className="rounded-3xl border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-950/25 to-slate-950 p-8">
              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-fuchsia-300">
                    Observed
                  </p>
                  <p className="text-xl leading-relaxed text-white">
                    Larger relative gaps in selected benchmark series as tested
                    scale increased.
                  </p>
                </div>
                <div className="border-t border-slate-700 pt-6">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-amber-300">
                    Not yet established
                  </p>
                  <p className="text-xl leading-relaxed text-white">
                    A universal rule that the Forgetting Engine improves with
                    every form of complexity or defeats all conventional
                    algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="exploratory-astronomy" className="border-y border-slate-800 bg-slate-950/45 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
              <AlertTriangle className="h-4 w-4" />
              Exploratory Case Study
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Three retained astronomical candidate signals
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              An exploratory analysis retained three anomalous signals from
              public catalog data for further review. They are not presented as
              independently confirmed exoplanet discoveries.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {["KOI-0002 candidate A", "KOI-0009 candidate", "KOI-0002 candidate B"].map(
              (candidate) => (
                <div
                  key={candidate}
                  className="rounded-2xl border border-slate-700 bg-slate-900/65 p-7"
                >
                  <h3 className="mb-3 text-xl font-semibold text-amber-300">
                    {candidate}
                  </h3>
                  <p className="leading-relaxed text-slate-400">
                    Retained by the exploratory anomaly-ranking process for
                    follow-up analysis. Candidate status does not establish a
                    planetary interpretation.
                  </p>
                </div>
              ),
            )}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/15 p-7">
              <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold text-emerald-300">
                <CheckCircle2 className="h-6 w-6" />
                What this case study shows
              </h3>
              <p className="leading-relaxed text-slate-300">
                The strategic-retention approach can surface and preserve
                anomalous candidates that might otherwise be eliminated early
                in a ranking pipeline.
              </p>
            </div>
            <div className="rounded-2xl border border-rose-400/20 bg-rose-950/15 p-7">
              <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold text-rose-300">
                <XCircle className="h-6 w-6" />
                What it does not show
              </h3>
              <p className="leading-relaxed text-slate-300">
                It does not independently validate the candidates as planets,
                establish a false-positive rate for discovery, or substitute for
                domain-expert astronomical confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold md:text-5xl">
              Review the record
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              The public materials provide methods, reported results, and source
              paths for technical inspection. Availability of a report is not a
              substitute for independent replication or peer review.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {reports.map((report, index) => {
              const content = (
                <>
                  <div className="mb-5 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-300">
                    {report.external ? (
                      <ArrowRight className="h-6 w-6" />
                    ) : (
                      <Download className="h-6 w-6" />
                    )}
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">{report.title}</h3>
                  <p className="leading-relaxed text-slate-400">
                    {report.description}
                  </p>
                </>
              );

              return report.external ? (
                <motion.a
                  key={report.title}
                  href={report.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-slate-700 bg-slate-900/65 p-7 transition hover:border-cyan-400/50"
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={report.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <Link
                    href={report.href}
                    className="block h-full rounded-2xl border border-slate-700 bg-slate-900/65 p-7 transition hover:border-cyan-400/50"
                  >
                    {content}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/25 to-slate-950 p-10 text-center md:p-14">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            The claim should never be larger than the experiment.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            CONEXUS will continue separating demonstrated results from research
            hypotheses, product concepts, and future applications.
          </p>
          <a
            href="mailto:DAngell@CONEXUSGlobalArts.Media"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Request Technical Materials
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}

