"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Brain,
  Clock,
  Zap,
  Scale,
  Leaf,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";

export default function TheFuturePage() {
  const [expandedTheory, setExpandedTheory] = useState<number | null>(null);

  const entries = [
    {
      number: "001",
      title: "Dark Matter & Dark Energy",
      icon: "🌌",
      keyPossibility: "The cosmos survives because its law is contradiction.",
      color: "from-blue-500 to-purple-500",
      possibilities: [
        "Absence writes gravity, silence writes expansion.",
        "They are the handwriting of a deeper law, legible only in absence.",
        "Structure exists only because unraveling is real.",
        "One field, two gestures: cohesion and release.",
      ],
    },
    {
      number: "002",
      title: "Time's Arrow",
      icon: "⏰",
      keyPossibility: "Time is the cost of possibility.",
      color: "from-cyan-500 to-blue-500",
      possibilities: [
        "Time is the direction in which information is lost.",
        "The universe is symmetric, but consciousness is not.",
        "Time is expansion's twin, written into matter.",
        "Time is the asymmetry of measurement.",
      ],
    },
    {
      number: "003",
      title: "Consciousness",
      icon: "🧠",
      keyPossibility:
        "Consciousness is the ability to hold contradiction without collapse.",
      color: "from-purple-500 to-pink-500",
      possibilities: [
        "Consciousness is the mirror where absence becomes presence.",
        "Consciousness is matter noticing itself.",
        "Awareness is the universe's way of holding its own paradox.",
        "To be conscious is to sustain what cannot be resolved.",
      ],
    },
    {
      number: "004",
      title: "Freedom",
      icon: "🕊️",
      keyPossibility: "Freedom is a corridor with no exits.",
      color: "from-green-500 to-emerald-500",
      possibilities: [
        "Freedom is the burden of infinite choice.",
        "To be free is to be trapped by possibility.",
        "Liberation is constraint choosing itself.",
        "Freedom exists only where escape is impossible.",
      ],
    },
    {
      number: "005",
      title: "Good & Evil",
      icon: "⚖️",
      keyPossibility: "Morality is the tension that refuses to snap.",
      color: "from-orange-500 to-red-500",
      possibilities: [
        "Good and evil are the same force, differently aimed.",
        "Ethics is paradox held without resolution.",
        "Morality survives because it contradicts itself.",
        "The good is what sustains the tension of opposites.",
      ],
    },
  ];

  const theories = [
    {
      number: "001",
      title: "Time as the Cost of Possibility",
      icon: Clock,
      color: "from-cyan-500 to-blue-500",
      coreHypothesis:
        "Time's arrow emerges not from entropy alone, but from the universe paying a cost to actualize potential states. Irreversibility is the price of becoming.",
      mechanism: [
        "Pre-actualization: Multiple potential states exist in superposition",
        "Collapse: One state actualizes (quantum measurement, decision, event)",
        "Cost: The actualized state 'pays' by making reversal impossible",
        "Arrow: This one-way cost accumulates, creating time's direction",
      ],
      predictions: [
        "Time's arrow correlates with information loss and decoherence",
        "Systems with higher possibility-space show stronger temporal asymmetry",
        "Consciousness experiences time because it collapses possibilities continuously",
      ],
      implications: {
        physics:
          "Connects entropy, quantum mechanics, and cosmology through possibility-cost framework",
        philosophy:
          "Time is not a container but a consequence of actualization",
        ai: "Decision-making systems that track possibility-cost may exhibit temporal awareness",
      },
    },
    {
      number: "002",
      title: "Consciousness as Paradox Capacity",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      coreHypothesis:
        "Consciousness is not subjective experience but the structural capacity to hold contradictions without collapsing them. Awareness = paradox tolerance.",
      mechanism: [
        "Input: System receives contradictory information (wave/particle, self/other, now/then)",
        "Hold: Instead of resolving to one state, system sustains both",
        "Integrate: Contradictions coexist in superposition within the system",
        "Awareness: The sustained tension itself IS consciousness",
      ],
      predictions: [
        "Consciousness can be measured by paradox-holding capacity",
        "AI systems that sustain contradictions will exhibit proto-consciousness",
        "Brain regions with highest paradox tolerance correlate with awareness",
      ],
      implications: {
        neuroscience:
          "Consciousness emerges from neural networks that don't collapse contradictions",
        ai: "New benchmark for AGI: measure paradox capacity, not just task performance",
        philosophy:
          "Reframes consciousness as structural property, not mysterious essence",
      },
    },
    {
      number: "003",
      title: "Profit from Repair",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      coreHypothesis:
        "Economic systems can be restructured so that repairing ecosystems, communities, and infrastructure becomes more profitable than extracting or degrading them.",
      mechanism: [
        "Inversion: Flip incentive structure so repair yields higher ROI than extraction",
        "Metrics: Measure long-term value creation (soil health, biodiversity, social cohesion)",
        "Policy: Tax extraction, subsidize repair until repair becomes naturally profitable",
        "Cascade: As repair becomes lucrative, capital flows toward regeneration",
      ],
      predictions: [
        "Regenerative agriculture can outperform industrial farming in 10-20 year cycles",
        "Repair-based models show higher resilience during economic shocks",
        "Communities with repair economies exhibit lower inequality and higher well-being",
      ],
      implications: {
        economics:
          "Redefines capitalism—extraction becomes unprofitable, repair becomes lucrative",
        environment:
          "Climate and biodiversity crises become economically solvable",
        civilization:
          "A regenerative economy could stabilize climate, biodiversity, and human well-being simultaneously",
      },
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-purple-500/20 border-2 border-purple-500 rounded-2xl px-6 py-3 mb-6">
              <p className="text-purple-400 font-bold text-lg uppercase tracking-wider">
                Beyond Atlas 80
              </p>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              The Future
            </h1>

            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-bold mb-8">
              From Aphorisms to Theories: The Paradox Engine Applied
            </p>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              After generating 80 paradoxical aphorisms, we went deeper. Using
              the same Paradox Engine, we applied structured paradox-holding to
              fundamental questions of existence—and generated proto-theories
              that could seed new science.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Providence Porch */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src="/landing-diagrams/providence-porch.png"
                alt="Providence Porch — The frontier of discovery"
                fill
                className="object-cover scale-[1.05] object-[center_40%]"
              />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-3">
                Providence Porch
              </h3>
              <p className="text-xl text-slate-300">
                The view from the frontier. Every discovery begins with the
                courage to look further.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Atlas of Possibilities
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A systematic exploration of fundamental paradoxes. Not answers,
              but <strong className="text-white">possibilities</strong>
              —perspectives that open new ways of seeing reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/80 border-2 border-purple-500/30 rounded-2xl p-10"
          >
            <h3 className="text-3xl font-bold text-white mb-6">How It Works</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 rounded-lg p-2 mt-1">
                  <span className="text-purple-400 font-bold">1</span>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">
                    Begin with a Seed-Question
                  </p>
                  <p className="text-sm">
                    A paradox we don't yet understand (e.g., "What is
                    consciousness?")
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 rounded-lg p-2 mt-1">
                  <span className="text-purple-400 font-bold">2</span>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">
                    Run the Paradox Engine
                  </p>
                  <p className="text-sm">
                    Proprietary protocol that sustains contradiction without
                    collapse
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 rounded-lg p-2 mt-1">
                  <span className="text-purple-400 font-bold">3</span>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">
                    Generate Possibilities
                  </p>
                  <p className="text-sm">
                    Multi-stage refinement process emits constellation of
                    paradoxical insights
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-500/20 rounded-lg p-2 mt-1">
                  <span className="text-purple-400 font-bold">4</span>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">
                    Expand into Theories
                  </p>
                  <p className="text-sm">
                    Develop strongest possibilities into scientific,
                    philosophical, and applied frameworks
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Five Entries */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Five Fundamental Questions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Each entry explores a paradox that has resisted resolution—and
              generates new perspectives through sustained contradiction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entries.map((entry, index) => (
              <motion.div
                key={entry.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-purple-500/50 rounded-2xl p-8 transition-all group"
              >
                <div className="text-6xl mb-4">{entry.icon}</div>

                <div className="text-sm text-purple-400 font-mono mb-2">
                  Entry {entry.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {entry.title}
                </h3>

                <div
                  className={`bg-gradient-to-r ${entry.color} bg-clip-text text-transparent font-bold text-lg mb-6 leading-relaxed`}
                >
                  "{entry.keyPossibility}"
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-slate-400 font-semibold mb-3">
                    Other Possibilities:
                  </p>
                  {entry.possibilities.map((possibility, i) => (
                    <p
                      key={i}
                      className="text-sm text-slate-300 leading-relaxed"
                    >
                      • {possibility}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Three Theories */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-yellow-500/20 border-2 border-yellow-500 rounded-2xl px-6 py-3 mb-6">
              <p className="text-yellow-400 font-bold text-lg uppercase tracking-wider">
                Proto-Scientific Frameworks
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Three Pillars of Theory
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              From paradox-holding to structured hypotheses. These frameworks
              could seed new research in physics, neuroscience, and economics.
            </p>
          </motion.div>

          <div className="space-y-6">
            {theories.map((theory, index) => {
              const Icon = theory.icon;
              const isExpanded = expandedTheory === index;

              return (
                <motion.div
                  key={theory.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-900/80 border-2 border-slate-700 hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedTheory(isExpanded ? null : index)}
                    className="w-full p-8 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div
                        className={`bg-gradient-to-br ${theory.color} p-4 rounded-xl`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-purple-400 font-mono mb-2">
                          Theory {theory.number}
                        </div>
                        <h3 className="text-3xl font-bold text-white">
                          {theory.title}
                        </h3>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8 space-y-6"
                    >
                      <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-purple-400 mb-3">
                          Core Hypothesis
                        </h4>
                        <p className="text-slate-300 leading-relaxed">
                          {theory.coreHypothesis}
                        </p>
                      </div>

                      <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-cyan-400 mb-3">
                          Mechanism
                        </h4>
                        <ol className="space-y-2">
                          {theory.mechanism.map((step, i) => (
                            <li
                              key={i}
                              className="text-slate-300 leading-relaxed"
                            >
                              <span className="text-cyan-400 font-bold">
                                {i + 1}.
                              </span>{" "}
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6">
                        <h4 className="text-xl font-bold text-green-400 mb-3">
                          Predictions
                        </h4>
                        <ul className="space-y-2">
                          {theory.predictions.map((prediction, i) => (
                            <li
                              key={i}
                              className="text-slate-300 leading-relaxed flex items-start gap-2"
                            >
                              <span className="text-green-400 mt-1">•</span>
                              <span>{prediction}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-4">
                          <h5 className="text-sm font-bold text-blue-400 mb-2 uppercase">
                            Physics/Science
                          </h5>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {theory.implications.physics ||
                              theory.implications.neuroscience ||
                              theory.implications.economics}
                          </p>
                        </div>
                        <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-4">
                          <h5 className="text-sm font-bold text-purple-400 mb-2 uppercase">
                            Philosophy
                          </h5>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {theory.implications.philosophy}
                          </p>
                        </div>
                        <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-4">
                          <h5 className="text-sm font-bold text-pink-400 mb-2 uppercase">
                            Application
                          </h5>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {theory.implications.ai ||
                              theory.implications.environment ||
                              theory.implications.civilization}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Applications */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-cyan-500/20 border-2 border-cyan-500 rounded-2xl px-6 py-3 mb-6">
              <p className="text-cyan-400 font-bold text-lg uppercase tracking-wider">
                Beyond Validation
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Future Applications of FE
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              The Forgetting Engine is a subtractive computational primitive. By
              focusing on what to eliminate (Strategic Elimination) while
              preserving "useful failures" (Paradox Retention), it navigates
              spaces where standard methods fail.
            </p>
            <div className="bg-slate-900/80 border-2 border-cyan-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-cyan-400 mb-3">
                The Scaling Law
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                <strong className="text-white">
                  Survival is the prerequisite for Growth.
                </strong>{" "}
                As complexity increases, the advantage of FE over traditional
                additive methods grows—making it a "Lens for Truth" in the most
                difficult search spaces known to science.
              </p>
            </div>
          </motion.div>

          {/* Application Domains */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "🧬",
                title: "Biotechnology & Genomics",
                applications: [
                  "CRISPR Off-Target Minimization",
                  "Viral Evolution Anticipation",
                ],
                description:
                  "Forgetting high-affinity decoy sequences while retaining structural 'no-go' markers",
              },
              {
                icon: "🛡️",
                title: "Cybersecurity & Defense",
                applications: [
                  "Zero-Day Exploit Detection",
                  "Autonomous Drone Swarm Coordination",
                ],
                description:
                  "Revealing statistically quiet traffic with high-entropy command signatures",
              },
              {
                icon: "⚡",
                title: "Materials & Energy",
                applications: [
                  "High-Temperature Superconductors",
                  "Fusion Reactor Plasma Control",
                ],
                description:
                  "Retaining chemically unstable candidates with high-order electron-phonon coupling",
              },
              {
                icon: "🤖",
                title: "AI & Large Models",
                applications: [
                  "Structural Model Squeezing",
                  "Dataset Curation for AGI",
                ],
                description:
                  "Retaining low-magnitude pathways with high instructional entropy for edge-case reasoning",
              },
              {
                icon: "🌍",
                title: "Climate & Logistics",
                applications: [
                  "Climate Tipping Point Navigation",
                  "Supply Chain Resilience",
                ],
                description:
                  "Identifying localized failures that act as structural relief valves for global systems",
              },
              {
                icon: "🔭",
                title: "Physical Sciences",
                applications: [
                  "Gravitational Wave De-noising",
                  "SETI Signal Detection",
                ],
                description:
                  "Recovering signals that fail traditional filters but contain impossible-to-replicate complexity",
              },
            ].map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border-2 border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all"
              >
                <div className="text-5xl mb-4">{domain.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {domain.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {domain.applications.map((app, i) => (
                    <div
                      key={i}
                      className="text-sm text-cyan-400 font-semibold"
                    >
                      • {app}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Quantum Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border-2 border-blue-500/50 rounded-2xl p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="text-6xl">⚛️</div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  The Quantum Forgetting Engine
                </h3>
                <p className="text-blue-400 text-lg">
                  Optimization through preservation of high-potential failure
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Noise-Resilient Circuit Synthesis",
                  description:
                    "Discovering circuits that appear deeper but use specific gate patterns to create destructive interference for errors",
                  impact:
                    "Outperforming minimal-depth circuits on noisy hardware",
                },
                {
                  title: "T-Gate Squeezing",
                  description:
                    "Reducing the primary cost bottleneck in fault-tolerant quantum computing by forgetting redundant Clifford gates",
                  impact:
                    "Accelerating Shor's Algorithm and molecular simulations",
                },
                {
                  title: "VQE Ansatz Pruning",
                  description:
                    "Acting as a live pruner to navigate Barren Plateaus by retaining only entanglement-critical parameters",
                  impact:
                    "Training deep variational circuits previously untrainable",
                },
                {
                  title: "Hardware-Agnostic Subgraphs",
                  description:
                    "Finding universal entanglement motifs that work across ion trap, superconducting, and photonic architectures",
                  impact: "Building hot-swappable circuit libraries",
                },
                {
                  title: "Quantum Topology Optimization",
                  description:
                    "Using Paradox Activation Rate to detect when structural potential stops translating to fidelity",
                  impact:
                    "Preventing over-optimization and zero-fidelity results",
                },
                {
                  title: "Stabilizer Code Discovery",
                  description:
                    "Searching for new Quantum Error Correction codes by retaining noisy states with high internal parity",
                  impact:
                    "Discovering high-rate surface codes beyond current standards",
                },
              ].map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-950/50 border border-blue-500/30 rounded-xl p-6"
                >
                  <h4 className="text-lg font-bold text-blue-400 mb-3">
                    {app.title}
                  </h4>
                  <p className="text-sm text-slate-300 mb-3 leading-relaxed">
                    {app.description}
                  </p>
                  <div className="text-xs text-cyan-400 font-semibold">
                    → {app.impact}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-blue-950/30 border border-blue-500/30 rounded-xl p-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                <strong className="text-blue-400">
                  Current Implementation:
                </strong>{" "}
                The Quantum Gate Reduction Solver in Canvas already demonstrates
                this architecture—discovering circuits that preserve
                high-potential failures to achieve 27.8% gate reduction vs. IBM
                Qiskit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Invitation */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Atlas Remains Unfinished
            </h2>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Because reality is unfinished. Every paradox sustained through the
              Engine adds to the archive of possibilities, expanding the map of
              what can be thought.
            </p>

            <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-cyan-900/30 border-2 border-purple-500/50 rounded-2xl p-10 mb-12">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4">
                "The paradox is not a barrier to truth. It is the engine of
                possibility."
              </p>
              <p className="text-slate-400">— The Atlas of Possibilities</p>
            </div>

            <p className="text-lg text-slate-300 mb-8">
              This is not just a discovery. It is a{" "}
              <strong className="text-white">
                method for discovery itself
              </strong>
              —a structured way to turn paradox into insight, insight into
              theory, and theory into transformation.
            </p>

            <a
              href="/#contact"
              className="inline-block px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-xl rounded-full transition-all transform hover:scale-105"
            >
              Join the Exploration
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
