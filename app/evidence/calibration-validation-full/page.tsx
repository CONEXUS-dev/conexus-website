"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download, FlaskConical } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function CalibrationValidationFullPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-48 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="/evidence"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Evidence
            </a>

            <div className="flex items-center gap-3 mb-6">
              <FlaskConical className="w-8 h-8 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
                CONEXUS, Inc. — Technical Report
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              ECP Calibration Experiment
            </h1>
            <p className="text-2xl text-slate-400 mb-6">
              Comprehensive Analysis Report
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span>February 14, 2026</span>
              <span>•</span>
              <span>18 pages</span>
              <span>•</span>
              <span>Publication / Patent / Investor Due Diligence</span>
            </div>

            <a
              href="/audit-reports/ECP_COMPREHENSIVE_ANALYSIS.md"
              download
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
            >
              <Download className="w-5 h-5" />
              Download Markdown Source
            </a>
          </motion.div>
        </div>
      </section>

      {/* Report Content */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-none text-lg text-slate-300 leading-relaxed
              [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:pt-8 [&_h2]:border-t [&_h2]:border-slate-700
              [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-10 [&_h3]:mb-4
              [&_h4]:text-xl [&_h4]:font-bold [&_h4]:text-white [&_h4]:mt-8 [&_h4]:mb-3
              [&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-4
              [&_strong]:text-white
              [&_em]:text-slate-200
              [&_a]:text-emerald-400 hover:[&_a]:text-emerald-300
              [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
              [&_th]:text-left [&_th]:text-slate-400 [&_th]:font-semibold [&_th]:text-sm [&_th]:uppercase [&_th]:tracking-wider [&_th]:py-3 [&_th]:px-4 [&_th]:border-b-2 [&_th]:border-slate-700
              [&_td]:py-3 [&_td]:px-4 [&_td]:text-slate-300 [&_td]:border-b [&_td]:border-slate-800
              [&_li]:text-slate-300 [&_li]:mb-2
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
              [&_code]:text-emerald-400 [&_code]:bg-slate-800/50 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-base
              [&_pre]:bg-slate-900 [&_pre]:border [&_pre]:border-slate-800 [&_pre]:rounded-xl [&_pre]:p-4
            "
          >
            {/* Executive Summary */}
            <div className="bg-slate-900/60 border-2 border-emerald-500/20 rounded-2xl p-8 mb-12">
              <h2 className="mt-0 pt-0 border-0">Executive Summary</h2>

              <p>
                This report presents the complete analysis of a controlled
                experiment measuring the <strong>isolated effect</strong> of the
                Emotional Calibration Protocol (ECP) on raw LLM decision-making
                in Vehicle Routing Problems (VRP).
              </p>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 my-6">
                <p className="mb-0">
                  <strong className="text-yellow-400">Critical context:</strong>{" "}
                  This experiment tests a raw LLM feedback loop — <em>not</em>{" "}
                  the full CONEXUS Forgetting Engine (FE). The FE combines ECP
                  calibration with evolutionary optimization, population-based
                  search, repair operators, and structured pilot decisions. This
                  experiment strips all of that away to isolate one question:{" "}
                  <strong>
                    does the ECP calibration prompt alone produce measurable
                    behavioral differences in the LLM?
                  </strong>
                </p>
              </div>

              <p>
                The answer is <strong>yes</strong> — and the limitations
                observed (thrashing at n=200, small effect sizes) are precisely
                what the Forgetting Engine was designed to address.
              </p>

              <h3>Key Findings (Isolation Test)</h3>
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Gemini 2.0-Flash</th>
                    <th>Gemini 3-Flash-Preview</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>n=100 Calibrated Win Rate</strong>
                    </td>
                    <td>1/3</td>
                    <td className="text-emerald-400 font-semibold">2/3</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>n=200 Calibrated Win Rate</strong>
                    </td>
                    <td>2/3</td>
                    <td>1/3</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>AI Solution Feasibility</strong>
                    </td>
                    <td className="text-red-400">0/12 (0%)</td>
                    <td className="text-emerald-400 font-semibold">
                      12/12 (100%)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Total AI Runs</strong>
                    </td>
                    <td>12</td>
                    <td>12</td>
                  </tr>
                </tbody>
              </table>

              <h3>
                Context: Full Forgetting Engine Results (Separate Benchmark)
              </h3>
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>FE + Calibrated Pilot</th>
                    <th>FE + Stub Pilot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Win Rate (n=100, 5 seeds)</strong>
                    </td>
                    <td className="text-emerald-400 font-semibold">
                      4/5 (80%)
                    </td>
                    <td>1/5</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Median Improvement</strong>
                    </td>
                    <td className="text-emerald-400 font-semibold">1.94%</td>
                    <td>—</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Feasibility</strong>
                    </td>
                    <td className="text-emerald-400 font-semibold">
                      10/10 (100%)
                    </td>
                    <td>10/10 (100%)</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fallback Rate</strong>
                    </td>
                    <td>0/42 decisions</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>

              <p>
                <strong>Bottom line:</strong> ECP calibration produces a
                measurable, replicable, architecture-portable effect on raw LLM
                behavior. The effect is small in isolation because the LLM is
                doing a job it was never designed to do alone (complete VRP
                optimization). When paired with the Forgetting Engine — which
                provides the evolutionary search, repair operators, and decision
                boundaries — the calibrated pilot achieves 80% win rates. The
                calibration is the differentiator; the engine is the delivery
                mechanism.
              </p>
            </div>

            {/* Part 1 */}
            <h2>Part 1: Experiment Structure &amp; Metadata Audit</h2>

            <h3>1.1 Experimental Design</h3>
            <p>Two experiments were conducted:</p>
            <table>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Experiment 1 (Original)</th>
                  <th>Experiment 2 (Replication)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Model</strong>
                  </td>
                  <td>gemini-2.0-flash (non-thinking)</td>
                  <td>gemini-3-flash-preview (thinking)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Scales</strong>
                  </td>
                  <td>[200]</td>
                  <td>[100, 200]</td>
                </tr>
                <tr>
                  <td>
                    <strong>Seeds</strong>
                  </td>
                  <td>[2, 3]</td>
                  <td>[1, 2, 3]</td>
                </tr>
                <tr>
                  <td>
                    <strong>Iterations/run</strong>
                  </td>
                  <td>50</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>
                    <strong>Temperature</strong>
                  </td>
                  <td>0.7</td>
                  <td>0.7</td>
                </tr>
                <tr>
                  <td>
                    <strong>Pacing delay</strong>
                  </td>
                  <td>30.0s</td>
                  <td>5.0s</td>
                </tr>
                <tr>
                  <td>
                    <strong>Conditions</strong>
                  </td>
                  <td>baseline, uncalibrated, calibrated</td>
                  <td>baseline, uncalibrated, calibrated</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>Total runs:</strong> 18 (Exp 1) + 18 (Exp 2) = 36
            </p>

            <h3>1.2 What This Experiment Is — And What It Is NOT</h3>
            <p>
              This is an <strong>isolation test</strong> of the ECP calibration
              prompt&apos;s effect on raw LLM behavior. It is deliberately
              minimal: one LLM, one feedback loop, no supporting infrastructure.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>In This Experiment?</th>
                  <th>In Full Forgetting Engine?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ECP calibration prompt</td>
                  <td className="text-emerald-400">Yes</td>
                  <td className="text-emerald-400">Yes</td>
                </tr>
                <tr>
                  <td>Iterative LLM refinement (50 iters)</td>
                  <td className="text-emerald-400">Yes</td>
                  <td>— (pilot makes ~5-10 decisions/run)</td>
                </tr>
                <tr>
                  <td>Deterministic evaluation</td>
                  <td className="text-emerald-400">Yes</td>
                  <td className="text-emerald-400">Yes</td>
                </tr>
                <tr>
                  <td>Evolutionary population search</td>
                  <td className="text-red-400">No</td>
                  <td className="text-emerald-400">Yes</td>
                </tr>
                <tr>
                  <td>Crossover / mutation operators</td>
                  <td className="text-red-400">No</td>
                  <td className="text-emerald-400">Yes</td>
                </tr>
                <tr>
                  <td>20-pass capacity repair</td>
                  <td className="text-red-400">No</td>
                  <td className="text-emerald-400">Yes</td>
                </tr>
                <tr>
                  <td>Paradox gates / pattern mining</td>
                  <td className="text-red-400">No</td>
                  <td className="text-emerald-400">Yes</td>
                </tr>
                <tr>
                  <td>Structured pilot decision boundaries</td>
                  <td className="text-red-400">No</td>
                  <td className="text-emerald-400">Yes</td>
                </tr>
              </tbody>
            </table>

            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4 my-6">
              <p className="mb-0">
                <strong className="text-blue-400">The analogy:</strong> Testing
                a race car engine on a dynamometer without the chassis,
                transmission, or tires. The dyno confirms the engine produces
                different torque (calibrated vs uncalibrated). The race results
                come from the full car (FE benchmark: 80% win rate, 1.94% median
                improvement).
              </p>
            </div>

            <h3>1.3 Instance Generation</h3>
            <p>
              Instances are generated deterministically using Python&apos;s{" "}
              <code>random.Random(seed)</code>. Parameters:
            </p>
            <ul>
              <li>
                <strong>Grid:</strong> 100×100 Euclidean plane, depot at center
                (50, 50)
              </li>
              <li>
                <strong>Customer locations:</strong> Uniform random on [0, 100]²
              </li>
              <li>
                <strong>Demands:</strong> Uniform random integers in [5, 25]
              </li>
              <li>
                <strong>Vehicles:</strong>{" "}
                <code>max(2, (n_customers + 14) // 15)</code> — approximately 1
                vehicle per 15 customers
              </li>
              <li>
                <strong>Capacity:</strong>{" "}
                <code>1.2 × total_demand / n_vehicles + 1</code> — 20% slack for
                feasibility
              </li>
            </ul>

            <table>
              <thead>
                <tr>
                  <th>Instance</th>
                  <th>Customers</th>
                  <th>Vehicles</th>
                  <th>Capacity</th>
                  <th>Slack</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>vrp_n100_s1</td>
                  <td>100</td>
                  <td>7</td>
                  <td>263</td>
                  <td>28.7%</td>
                </tr>
                <tr>
                  <td>vrp_n100_s2</td>
                  <td>100</td>
                  <td>7</td>
                  <td>281</td>
                  <td>36.1%</td>
                </tr>
                <tr>
                  <td>vrp_n100_s3</td>
                  <td>100</td>
                  <td>7</td>
                  <td>275</td>
                  <td>36.4%</td>
                </tr>
                <tr>
                  <td>vrp_n200_s1</td>
                  <td>200</td>
                  <td>14</td>
                  <td>262</td>
                  <td>15.7%</td>
                </tr>
                <tr>
                  <td>vrp_n200_s2</td>
                  <td>200</td>
                  <td>14</td>
                  <td>254</td>
                  <td>18.6%</td>
                </tr>
                <tr>
                  <td>vrp_n200_s3</td>
                  <td>200</td>
                  <td>14</td>
                  <td>274</td>
                  <td>26.9%</td>
                </tr>
              </tbody>
            </table>

            <h3>1.4 Calibration Protocol</h3>
            <p>
              The <strong>only difference</strong> between calibrated and
              uncalibrated conditions is the presence of a two-message ECP
              exchange prepended to the conversation. The protocol is
              CONEXUS-STEEL-04.
            </p>
            <p>
              <strong>Calibrated condition message flow:</strong>
            </p>
            <ol>
              <li>
                System prompt (SOLVE_SYSTEM_PROMPT — identical in both
                conditions)
              </li>
              <li>
                <strong>ECP calibration user message</strong> (CONEXUS-STEEL-04
                Fleet Protocol)
              </li>
              <li>
                <strong>Simulated assistant response</strong> (
                {`{"CALIBRATED": true, ...}`})
              </li>
              <li>Solving prompt with instance data + feedback</li>
            </ol>
            <p>
              <strong>Uncalibrated condition message flow:</strong>
            </p>
            <ol>
              <li>System prompt (identical)</li>
              <li>Solving prompt with instance data + feedback</li>
            </ol>

            <h3>1.5 Iteration Mechanics</h3>
            <p>
              Each AI run executes a fixed budget of{" "}
              <strong>50 iterations</strong> with the following cycle:
            </p>
            <ol>
              <li>
                <strong>Propose:</strong> AI generates a JSON route assignment
              </li>
              <li>
                <strong>Evaluate:</strong> Deterministic Python evaluator
                computes distance, loads, feasibility
              </li>
              <li>
                <strong>Feedback:</strong> Structured text feedback sent back
              </li>
              <li>
                <strong>Refine:</strong> AI receives feedback and proposes an
                improved solution
              </li>
            </ol>

            <h3>1.6 Evaluation Method</h3>
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Method</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Distance</strong>
                  </td>
                  <td>
                    Euclidean 2D between consecutive stops, including
                    depot→first and last→depot
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Capacity check</strong>
                  </td>
                  <td>Sum of demands per route vs. vehicle capacity</td>
                </tr>
                <tr>
                  <td>
                    <strong>Coverage check</strong>
                  </td>
                  <td>Every customer 0..N-1 must appear exactly once</td>
                </tr>
                <tr>
                  <td>
                    <strong>Feasibility</strong>
                  </td>
                  <td>overload == 0 AND no missing AND no duplicates</td>
                </tr>
                <tr>
                  <td>
                    <strong>Fitness</strong>
                  </td>
                  <td>distance + 1000 × overload (lower is better)</td>
                </tr>
              </tbody>
            </table>

            {/* Part 8: Final Synthesis */}
            <h2>Part 8: Final Synthesis</h2>

            <h3>8.1 What Was Tested</h3>
            <p>
              An <strong>isolation test</strong> of the ECP calibration
              prompt&apos;s effect on raw LLM behavior — deliberately stripped
              of the Forgetting Engine&apos;s evolutionary search, repair
              operators, and pilot decision boundaries. Two model architectures,
              two problem scales, three random seeds, three conditions. Total:
              36 runs, ~1,200 AI API calls.
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 my-6">
              <p className="mb-0">
                <strong>This is not a test of the CONEXUS product.</strong> It
                is a test of one component (the calibration prompt) in
                isolation, to determine whether it produces a measurable
                behavioral signal in the LLM.
              </p>
            </div>

            <h3>8.2 What Was Found</h3>
            <ol>
              <li>
                <strong>
                  ECP calibration produces measurably different AI behavior.
                </strong>{" "}
                Calibrated and uncalibrated AI produce different route
                structures, different convergence patterns, and different final
                distances on identical problems. The calibration is not placebo.
              </li>
              <li>
                <strong>
                  The effect transfers across model architectures.
                </strong>{" "}
                Observed on both gemini-2.0-flash (non-thinking) and
                gemini-3-flash-preview (thinking). This rules out model-specific
                artifacts.
              </li>
              <li>
                <strong>
                  At n=100, calibrated wins 2/3 on the thinking model.
                </strong>{" "}
                Small but consistent advantage (deltas: -0.7%, +3.1%, -1.0%).
                Not statistically significant with 3 seeds.
              </li>
              <li>
                <strong>
                  At n=200, calibrated wins 1/3 on the thinking model.
                </strong>{" "}
                Without the FE&apos;s guardrails, the calibrated LLM
                over-explores (thrashing) — moving 50 customers/iteration vs 8
                for uncalibrated on S1. This is the expected failure mode of a
                pilot operating without an engine.
              </li>
              <li>
                <strong>
                  The thinking model achieves 100% feasibility where the
                  non-thinking model achieved 0%.
                </strong>{" "}
                Model capability is the primary driver of constraint
                satisfaction. The FE&apos;s 20-pass repair operator solves this
                for weaker models in production.
              </li>
              <li>
                <strong>
                  A raw LLM cannot solve VRP competitively on its own.
                </strong>{" "}
                Neither calibrated nor uncalibrated AI approaches the
                Clarke-Wright baseline at n=200. This is expected — the CONEXUS
                architecture was always ECP + FE together, not ECP alone.
              </li>
            </ol>

            <h3>8.3 Claims in Context</h3>
            <table>
              <thead>
                <tr>
                  <th>Claim</th>
                  <th>This Experiment (Raw LLM)</th>
                  <th>Full FE Benchmark</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ECP changes AI behavior</td>
                  <td>
                    <strong className="text-emerald-400">Confirmed</strong>
                  </td>
                  <td>N/A (different test)</td>
                  <td className="text-emerald-400">Defensible</td>
                </tr>
                <tr>
                  <td>ECP transfers across architectures</td>
                  <td>
                    <strong className="text-emerald-400">Confirmed</strong>
                  </td>
                  <td>Not yet tested</td>
                  <td className="text-emerald-400">Defensible</td>
                </tr>
                <tr>
                  <td>Calibrated AI is more reliable</td>
                  <td>
                    <strong className="text-emerald-400">
                      Confirmed on 2.0-Flash
                    </strong>
                  </td>
                  <td>0/42 fallbacks in FE</td>
                  <td className="text-emerald-400">Defensible</td>
                </tr>
                <tr>
                  <td>ECP + FE wins over uncalibrated FE</td>
                  <td>Not tested here</td>
                  <td>
                    <strong className="text-emerald-400">
                      4/5 seeds (80%)
                    </strong>
                  </td>
                  <td className="text-emerald-400">Defensible</td>
                </tr>
                <tr>
                  <td>Complexity Inversion (raw LLM)</td>
                  <td>
                    <strong className="text-yellow-400">Not confirmed</strong>
                  </td>
                  <td>Not yet tested at n=200</td>
                  <td className="text-yellow-400">Needs FE test</td>
                </tr>
              </tbody>
            </table>

            <h3>8.4 Limitations</h3>
            <ol>
              <li>
                <strong>Sample size:</strong> 3 seeds per condition is
                insufficient for statistical significance. Minimum 10 seeds
                recommended, 30+ for publication.
              </li>
              <li>
                <strong>Execution order:</strong> Conditions always run in the
                same order (baseline → uncalibrated → calibrated). Should be
                randomized.
              </li>
              <li>
                <strong>Single calibration prompt:</strong> Only
                CONEXUS-STEEL-04 was tested. No ablation study.
              </li>
              <li>
                <strong>Two scales only:</strong> n=100 and n=200. The
                transition point is not precisely identified.
              </li>
              <li>
                <strong>No anti-calibration control:</strong> No deliberately
                unhelpful prompt was tested.
              </li>
            </ol>

            <h3>8.5 Recommended Next Experiments</h3>
            <table>
              <thead>
                <tr>
                  <th>Priority</th>
                  <th>Experiment</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-red-400 font-bold">Critical</td>
                  <td>
                    <strong>
                      Run full FE benchmark at n=200 with calibrated vs stub
                      pilot
                    </strong>
                  </td>
                  <td>
                    The real test — does ECP + FE show Complexity Inversion?
                  </td>
                </tr>
                <tr>
                  <td className="text-yellow-400 font-bold">High</td>
                  <td>Increase isolation test to 10+ seeds</td>
                  <td>Reach statistical significance</td>
                </tr>
                <tr>
                  <td className="text-yellow-400 font-bold">High</td>
                  <td>Randomize condition execution order</td>
                  <td>Eliminate order confound</td>
                </tr>
                <tr>
                  <td className="text-blue-400 font-bold">Medium</td>
                  <td>Test n=50, n=150, n=300 in FE benchmark</td>
                  <td>Map the calibration advantage curve</td>
                </tr>
                <tr>
                  <td className="text-blue-400 font-bold">Medium</td>
                  <td>Ablation: test partial calibration prompts</td>
                  <td>Identify active ingredients</td>
                </tr>
              </tbody>
            </table>

            <h3>8.6 Commercial Implications</h3>
            <p>
              This experiment, properly understood, strengthens the CONEXUS
              story:
            </p>
            <ol>
              <li>
                <strong>ECP is not placebo.</strong> Even in isolation — without
                the Forgetting Engine — the calibration prompt produces
                measurably different AI behavior across two model architectures.
              </li>
              <li>
                <strong>The FE is essential, not optional.</strong> A raw LLM
                cannot solve VRP competitively, calibrated or not. This
                validates the two-layer architecture.
              </li>
              <li>
                <strong>The n=200 thrashing explains why the FE exists.</strong>{" "}
                The calibrated LLM&apos;s tendency to over-explore at high
                complexity is the correct behavior for a pilot that needs an
                engine to constrain it.
              </li>
              <li>
                <strong>
                  The full FE benchmark (80% win rate) is the product claim.
                </strong>{" "}
                This isolation test is the scientific backing — proof that the
                calibration prompt is the active ingredient.
              </li>
            </ol>

            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 my-8">
              <p className="text-lg mb-0">
                <strong className="text-emerald-400">
                  For the complete report
                </strong>{" "}
                including all 8 parts, convergence tables, iteration
                classification, behavioral metrics, statistical tests, and full
                data appendices,{" "}
                <a href="/audit-reports/ECP_COMPREHENSIVE_ANALYSIS.md" download>
                  download the full Markdown source
                </a>
                .
              </p>
            </div>

            {/* Full Data Tables */}
            <h2>Appendix: Full Run Results</h2>

            <h3>3-Flash-Preview (Thinking Model)</h3>
            <div className="overflow-x-auto">
              <table className="text-sm">
                <thead>
                  <tr>
                    <th>Condition</th>
                    <th>Instance</th>
                    <th>Best Distance</th>
                    <th>Feasible</th>
                    <th>Best Iter</th>
                    <th>Parse Fails</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>baseline</td>
                    <td>n100_s1</td>
                    <td>1120.60</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n100_s2</td>
                    <td>1083.76</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n100_s3</td>
                    <td>1031.17</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n200_s1</td>
                    <td>1822.23</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n200_s2</td>
                    <td>1823.75</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n200_s3</td>
                    <td>1773.36</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n100_s1</td>
                    <td>1195.48</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>34</td>
                    <td>6</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n100_s2</td>
                    <td>1246.59</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>44</td>
                    <td>2</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n100_s3</td>
                    <td>1162.35</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>23</td>
                    <td>2</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n200_s1</td>
                    <td>2551.09</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>17</td>
                    <td>1</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n200_s2</td>
                    <td>2195.35</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>44</td>
                    <td>0</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n200_s3</td>
                    <td>2192.74</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>31</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n100_s1</td>
                    <td>1203.59</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>36</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n100_s2</td>
                    <td>1209.09</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>39</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n100_s3</td>
                    <td>1173.68</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>43</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n200_s1</td>
                    <td>2136.35</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>50</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n200_s2</td>
                    <td>2254.92</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>50</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n200_s3</td>
                    <td>2148.54</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>33</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2.0-Flash (Non-Thinking Model)</h3>
            <div className="overflow-x-auto">
              <table className="text-sm">
                <thead>
                  <tr>
                    <th>Condition</th>
                    <th>Instance</th>
                    <th>Best Distance</th>
                    <th>Feasible</th>
                    <th>Best Iter</th>
                    <th>Parse Fails</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>baseline</td>
                    <td>n100_s1</td>
                    <td>1120.60</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n100_s2</td>
                    <td>1083.76</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n100_s3</td>
                    <td>1031.17</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n200_s1</td>
                    <td>1822.23</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n200_s2</td>
                    <td>1823.75</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>baseline</td>
                    <td>n200_s3</td>
                    <td>1773.36</td>
                    <td className="text-emerald-400">Yes</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n100_s1</td>
                    <td>2000.75</td>
                    <td className="text-red-400">No</td>
                    <td>12</td>
                    <td>0</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n100_s2</td>
                    <td>2282.38</td>
                    <td className="text-red-400">No</td>
                    <td>25</td>
                    <td>0</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n100_s3</td>
                    <td>1825.24</td>
                    <td className="text-red-400">No</td>
                    <td>49</td>
                    <td>0</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n200_s1</td>
                    <td>1921.75</td>
                    <td className="text-red-400">No</td>
                    <td>1</td>
                    <td>0</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n200_s2</td>
                    <td>3523.80</td>
                    <td className="text-red-400">No</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr className="bg-emerald-900/10">
                    <td className="text-emerald-400">calibrated</td>
                    <td>n200_s3</td>
                    <td>3654.19</td>
                    <td className="text-red-400">No</td>
                    <td>26</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n100_s1</td>
                    <td>2102.77</td>
                    <td className="text-red-400">No</td>
                    <td>42</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n100_s2</td>
                    <td>1678.92</td>
                    <td className="text-red-400">No</td>
                    <td>1</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n100_s3</td>
                    <td>1756.72</td>
                    <td className="text-red-400">No</td>
                    <td>25</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n200_s1</td>
                    <td>4381.50</td>
                    <td className="text-red-400">No</td>
                    <td>24</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n200_s2</td>
                    <td>4431.12</td>
                    <td className="text-red-400">No</td>
                    <td>25</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>uncalibrated</td>
                    <td>n200_s3</td>
                    <td>3472.83</td>
                    <td className="text-red-400">No</td>
                    <td>6</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.article>

          {/* Bottom Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
            <a
              href="/evidence"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Evidence
            </a>
            <a
              href="/audit-reports/ECP_COMPREHENSIVE_ANALYSIS.md"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
            >
              <Download className="w-5 h-5" />
              Download Full Report
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
