"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Download,
  FlaskConical,
  Microscope,
  Scale,
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
  "The full CONEXUS architecture moved responses farthest from the model's ordinary response pattern.",
  "Neutral and CONEXUS showed a very large separation in the tested configuration: d = 3.7824.",
  "Token-only prompting did not reproduce the CONEXUS effect: p = 0.3612.",
  "The longer neutral prompt did not expand the measured search behavior, so prompt length alone does not explain the result.",
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
    scope: "Benchmark-specific trend across the tested scale series",
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
    scope: "Internal search benchmark under the documented setup",
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
              Evidence and Methods
            </div>
            <h1 className="mb-7 text-5xl font-bold md:text-8xl">
              Measured results.
              <span className="block text-cyan-300">Visible methods.</span>
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              CONEXUS reports controlled experiments and internal computational
              benchmarks with their conditions, baselines, methods, and source
              paths. Each finding is presented in its tested context.
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
              We tested whether CONEXUS changes the way an AI searches for ideas.
              It did.
            </h2>
            <p className="mb-5 text-xl leading-relaxed text-slate-200">
              Across 200 independent runs, the full CONEXUS architecture pushed
              the model farther from its ordinary response pattern than any of
              the three control conditions. More tokens alone did not reproduce
              the effect.
            </p>
            <p className="mb-5 text-lg leading-relaxed text-slate-300">
              Four controlled conditions separated the complete architecture
              from an ordinary baseline, a longer neutral prompt, and token-only
              exposure. That comparison shows whether the measured change came
              from the CONEXUS sequence rather than prompt length or symbols alone.
            </p>
            <div className="mb-5 rounded-2xl border border-cyan-400/20 bg-cyan-950/15 p-6 text-left">
              <p className="text-lg leading-relaxed text-slate-200">
                <strong className="text-cyan-300">What semantic distance means:</strong>{" "}
                Think of the model&apos;s answers as points on a map. Semantic
                distance measures how far those answers move away from the usual
                neighborhood. A higher score means the search reached farther
                into the measured idea space.
              </p>
            </div>
            <p className="text-base leading-relaxed text-slate-400">
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
              <h3 className="mb-3 text-xl font-semibold text-emerald-200">
                Very large separation between Neutral and CONEXUS in the tested
                configuration.
              </h3>
              <p className="text-base font-semibold text-emerald-300">d = 3.7824</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                This standardized effect-size measure describes how far apart the
                two conditions were.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-400/25 bg-cyan-950/15 p-7">
              <h3 className="mb-3 text-xl font-semibold text-cyan-200">
                The Neutral-to-CONEXUS difference showed extremely strong
                statistical evidence in this comparison.
              </h3>
              <p className="text-base font-semibold text-cyan-300">
                Welch p-value: 2.97e-32
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                The bootstrap interval for the mean difference was [+0.063467,
                +0.078094].
              </p>
            </div>
            <div className="rounded-2xl border border-slate-500/35 bg-slate-900/65 p-7">
              <h3 className="mb-3 text-xl font-semibold text-slate-100">
                Token-only prompting did not reproduce the CONEXUS effect.
              </h3>
              <p className="text-base font-semibold text-slate-300">p = 0.3612</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Token-only and Neutral remained closely aligned in this comparison.
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
              What the study found.
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Remember the central result: the complete architecture changed the
              measured search pattern, while extra tokens alone did not.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-emerald-400/20 bg-emerald-950/15 p-8">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-semibold text-emerald-300">
                <CheckCircle2 className="h-7 w-7" />
                The findings to remember
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
            <p className="mb-5 text-xl leading-relaxed text-slate-200">
              The Forgetting Engine tests whether better search can come from
              strategically removing low-value paths while preserving promising ones.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              The idea was tested across different optimization problems. The
              locked optimization sweep contains 30,800 controlled trials, with
              additional domain studies in different search spaces. Each benchmark
              keeps its own objective, baseline, configuration, and measurement.
            </p>
          </div>

          <div className="mb-12 rounded-2xl border border-violet-400/20 bg-violet-950/15 p-7 text-center">
            <p className="text-lg leading-relaxed text-slate-300">
              <strong className="text-violet-300">Benchmark context:</strong>{" "}
              protein folding reports a 561% relative success-rate difference,
              routing reports an 89.3% improvement, and quantum compilation
              reports a 27.8% gate reduction within their respective experiments.
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
                Something unusual happened as the problems got harder.
              </h2>
              <p className="mb-5 text-lg leading-relaxed text-slate-300">
                In several CONEXUS benchmark series, the relative advantage over
                the chosen baseline increased at larger tested scales. CONEXUS
                calls that observed pattern complexity inversion.
              </p>
              <p className="text-lg leading-relaxed text-slate-400">
                The research record tracks that pattern across the documented
                benchmark families, baselines, objectives, trial counts, and
                tested scales.
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
                    Research scope
                  </p>
                  <p className="text-xl leading-relaxed text-white">
                    Current evidence covers the documented benchmark families,
                    baselines, objectives, trial counts, and tested scales.
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
              <Microscope className="h-4 w-4" />
              Exploratory Case Study
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Three retained astronomical candidate signals
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              This exploratory case study shows how strategic retention surfaced
              three anomalous signals in public catalog data and preserved them
              for follow-up astronomical review instead of eliminating them early.
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
                    follow-up astronomical analysis.
                  </p>
                </div>
              ),
            )}
          </div>

          <div className="mt-10">
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
              Inspect the Four-Arm validation materials, the Forgetting Engine
              executive and full audits, and the research-validation repository
              directly.
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
            Evidence stays connected to the experiment.
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

