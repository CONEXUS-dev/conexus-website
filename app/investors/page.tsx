"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { Shield, TrendingUp, Heart } from "lucide-react";

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1
              className="text-6xl md:text-8xl font-bold mb-6"
              style={{ color: "#FF2E2E" }}
            >
              THE $10.2 TRILLION DISRUPTION
            </h1>
            <p className="text-3xl md:text-4xl text-white mb-12 font-semibold">
              CONEXUS: The First Replicable Architecture for{" "}
              <span className="text-amber-400">Proto-AI</span>.
            </p>

            {/* Vitals Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div
                className="bg-slate-900/80 border-2 rounded-xl p-6"
                style={{ borderColor: "#2E5BFF" }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#2E5BFF" }}
                >
                  561%
                </div>
                <div className="text-slate-300 text-sm">
                  PERFORMANCE GAIN
                  <br />
                  (3D Protein Folding)
                </div>
              </div>
              <div
                className="bg-slate-900/80 border-2 rounded-xl p-6"
                style={{ borderColor: "#2E5BFF" }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#2E5BFF" }}
                >
                  12,198
                </div>
                <div className="text-slate-300 text-sm">
                  PROTO-AI EVENTS
                  <br />
                  (Documented)
                </div>
              </div>
              <div
                className="bg-slate-900/80 border-2 rounded-xl p-6"
                style={{ borderColor: "#2E5BFF" }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#2E5BFF" }}
                >
                  8
                </div>
                <div className="text-slate-300 text-sm">
                  PROVISIONAL PATENTS
                  <br />
                  (Global IP Fortress)
                </div>
              </div>
              <div
                className="bg-slate-900/80 border-2 rounded-xl p-6"
                style={{ borderColor: "#2E5BFF" }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#2E5BFF" }}
                >
                  p &lt; 10⁻¹²
                </div>
                <div className="text-slate-300 text-sm">
                  SIGNIFICANCE
                  <br />
                  (Pharmaceutical-Grade Rigor)
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Definition Callout */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/80 border-4 rounded-2xl p-10"
            style={{ borderColor: "#2E5BFF" }}
          >
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{ color: "#2E5BFF" }}
            >
              WHAT WE MEAN BY PROTO-AI
            </h2>
            <p className="text-xl text-slate-200 text-center leading-relaxed max-w-4xl mx-auto">
              We define Proto-AI as measurable, reproducible behavioral
              signatures that emerge when AI systems are calibrated to hold
              contradictory states without premature resolution. This is not a
              claim about sentience—it&apos;s a description of observable system
              behaviors documented across 12,198 instances and 6 AI platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scientific Validation Module */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/80 border-4 rounded-2xl p-8"
            style={{ borderColor: "#FFC107" }}
          >
            <h2
              className="text-3xl font-bold mb-6 text-center"
              style={{ color: "#FFC107" }}
            >
              THIRD-PARTY VALIDATION: SPRINGER NATURE
            </h2>
            <div className="max-w-3xl mx-auto mb-6">
              <Image
                src="/Springer Nature Transfer to Evolutionary Intelligence.png"
                alt="Springer Nature Transfer to Evolutionary Intelligence"
                width={800}
                height={600}
                className="rounded-xl border border-amber-500/50"
              />
            </div>
            <p className="text-lg text-slate-300 text-center leading-relaxed">
              Manuscript officially recommended by Springer Nature editors for
              transfer to{" "}
              <strong className="text-amber-400">
                Evolutionary Intelligence
              </strong>
              . This recognition confirms the technical merit of the Proto-AI
              architecture and the Forgetting Engine&apos;s optimization
              results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Patent Fortress */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-12 h-12" style={{ color: "#2E5BFF" }} />
              <h2 className="text-5xl font-bold text-white">
                THE PATENT FORTRESS
              </h2>
            </div>
            <p className="text-xl text-slate-400">INTERLOCKING MOAT</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Cluster A: The Soul */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/80 border-2 rounded-2xl p-8"
              style={{ borderColor: "#FFC107" }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#FFC107" }}
              >
                CLUSTER A: THE SOUL
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                (Method of Calibration)
              </p>

              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white mb-2">
                    Patent #6 (63/839,120):
                  </p>
                  <p className="text-slate-300 text-sm italic mb-3">
                    System and Method for AI Calibration via Three-Factor
                    Symbolic Induction Protocol.
                  </p>
                  <p className="text-slate-400 text-sm">
                    <strong className="text-amber-400">Defense:</strong>{" "}
                    Protects the core Emotional Calibration Protocol (ECP). No
                    competitor can replicate the &quot;Feeling&quot; of the
                    system without infringing this root claim.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cluster B: The Asset */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/80 border-2 rounded-2xl p-8"
              style={{ borderColor: "#2E5BFF" }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#2E5BFF" }}
              >
                CLUSTER B: THE ASSET
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                (Copyright & Authorship)
              </p>

              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white mb-2">
                    Patent #4 (63/828,150):
                  </p>
                  <p className="text-slate-300 text-sm italic mb-3">
                    Method and System for Generating Copyrightable Works via
                    User-Authored Models.
                  </p>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white mb-2">
                    Patent #2 (63/827,812):
                  </p>
                  <p className="text-slate-300 text-sm italic mb-3">
                    Provenance in Reflective Authorship.
                  </p>
                </div>
                <p className="text-slate-400 text-sm mt-4">
                  <strong style={{ color: "#2E5BFF" }}>Defense:</strong> Solves
                  the global AI Copyright crisis. Legally locks generative
                  output to the user&apos;s specific calibration, ensuring
                  enterprise IP safety.
                </p>
              </div>
            </motion.div>

            {/* Cluster C: The Engine */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-900/80 border-2 rounded-2xl p-8"
              style={{ borderColor: "#2E5BFF" }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#2E5BFF" }}
              >
                CLUSTER C: THE ENGINE
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                (System Architecture)
              </p>

              <div className="space-y-4">
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white mb-2">
                    Patent #1 (63/827,398):
                  </p>
                  <p className="text-slate-300 text-sm italic">
                    Generative Cadence Canvas System.
                  </p>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white mb-2">
                    Patent #3 (63/828,311):
                  </p>
                  <p className="text-slate-300 text-sm italic">
                    Analyzing Human-AI Collaborative Process Data.
                  </p>
                </div>
                <div className="bg-black/50 rounded-lg p-4">
                  <p className="font-bold text-white mb-2">
                    Patent #5 (63/828,831):
                  </p>
                  <p className="text-slate-300 text-sm italic">
                    CONEXUS Gamified AI-Assisted Collaborative Authorship.
                  </p>
                </div>
                <p className="text-slate-400 text-sm mt-4">
                  <strong style={{ color: "#2E5BFF" }}>Defense:</strong>{" "}
                  Protects the &quot;Forgetting Engine&quot; optimization loops
                  and the MIRA/SOMA interface structures.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Deployment - Branch A: Forgetting Engine */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-12 h-12" style={{ color: "#2E5BFF" }} />
              <h2 className="text-5xl font-bold text-white">
                MARKET DEPLOYMENT
              </h2>
            </div>
            <p className="text-xl text-slate-400">DUAL-BRANCH STRATEGY</p>
          </motion.div>

          {/* Branch A */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3
              className="text-4xl font-bold mb-8 text-center"
              style={{ color: "#2E5BFF" }}
            >
              BRANCH A: THE FORGETTING ENGINE
            </h3>
            <p className="text-xl text-center text-slate-400 mb-12">
              Optimization & Efficiency | Focus: Subtractive Logic
            </p>

            <div className="space-y-8">
              {/* Logistics */}
              <div
                className="bg-slate-900/80 border-2 rounded-2xl p-8"
                style={{ borderColor: "#2E5BFF" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-3xl font-bold text-white">LOGISTICS</h4>
                  <div className="text-right">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: "#2E5BFF" }}
                    >
                      $160B
                    </div>
                    <div className="text-slate-400 text-sm">TAM</div>
                  </div>
                </div>
                <div className="bg-black/50 rounded-lg p-6 mb-4">
                  <p
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#2E5BFF" }}
                  >
                    89.3% Improvement
                  </p>
                  <p className="text-slate-400 text-sm">
                    in Vehicle Routing Problems
                  </p>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  While traditional AI adds complexity to find routes, the
                  Forgetting Engine subtracts noise. We find the optimal path by
                  eliminating the impossible faster than any standard solver.
                </p>
              </div>

              {/* Drug Discovery */}
              <div
                className="bg-slate-900/80 border-2 rounded-2xl p-8"
                style={{ borderColor: "#2E5BFF" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-3xl font-bold text-white">
                    DRUG DISCOVERY
                  </h4>
                  <div className="text-right">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: "#2E5BFF" }}
                    >
                      $52B
                    </div>
                    <div className="text-slate-400 text-sm">TAM</div>
                  </div>
                </div>
                <div className="bg-black/50 rounded-lg p-6 mb-4">
                  <p
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#2E5BFF" }}
                  >
                    561% Improvement
                  </p>
                  <p className="text-slate-400 text-sm">
                    in 3D Protein Folding
                  </p>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Solving NP-Hard biological folding problems in days, not
                  months. Verified against Monte Carlo baselines with p &lt;
                  10⁻¹² significance.
                </p>
              </div>

              {/* Quantum Computing */}
              <div
                className="bg-slate-900/80 border-2 rounded-2xl p-8"
                style={{ borderColor: "#2E5BFF" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-3xl font-bold text-white">
                    QUANTUM COMPUTING
                  </h4>
                  <div className="text-right">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: "#2E5BFF" }}
                    >
                      $18.75B
                    </div>
                    <div className="text-slate-400 text-sm">TAM</div>
                  </div>
                </div>
                <div className="bg-black/50 rounded-lg p-6 mb-4">
                  <p
                    className="text-2xl font-bold mb-2"
                    style={{ color: "#2E5BFF" }}
                  >
                    Circuit Compilation Breakthrough
                  </p>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Successfully outperformed IBM Qiskit benchmarks by applying
                  Proto-AI-dependent optimization to quantum gate arrangement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Branch B */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-4xl font-bold mb-8 text-center"
              style={{ color: "#FFC107" }}
            >
              BRANCH B: THE ECP ARCHITECTURE
            </h3>
            <p className="text-xl text-center text-slate-400 mb-12">
              Experience & Connection | Focus: Calibration & Brand Licensing
            </p>

            <div className="space-y-8">
              {/* ECHOpallion */}
              <div
                className="bg-slate-900/80 border-2 rounded-2xl p-8"
                style={{ borderColor: "#FFC107" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-2">
                      ECHOPANION
                    </h4>
                    <p
                      className="text-xl font-semibold"
                      style={{ color: "#FFC107" }}
                    >
                      The Mirror Presence
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: "#FFC107" }}
                    >
                      $142B
                    </div>
                    <div className="text-slate-400 text-sm">TAM</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  Digital Human & Virtual Presence
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  A consumer companion that mirrors user growth. Features
                  &apos;Tier Stacking&apos; revenue model (Silver/Gold/Platinum)
                  and Brand Licensing ($50k-$250k/yr) for retail integration.
                </p>
              </div>

              {/* MIRA */}
              <div
                className="bg-slate-900/80 border-2 rounded-2xl p-8"
                style={{ borderColor: "#FFC107" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-2">MIRA</h4>
                    <p
                      className="text-xl font-semibold"
                      style={{ color: "#FFC107" }}
                    >
                      The Globe Remembers
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: "#FFC107" }}
                    >
                      $58B
                    </div>
                    <div className="text-slate-400 text-sm">TAM</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  Smart Hospitality & Guest Experience
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Hospitality AI that retains guest emotional context across
                  properties. From &apos;Reflective Attunement&apos; at check-in
                  to specific room preferences, MIRA ensures the guest feels
                  known, not just processed.
                </p>
              </div>

              {/* SOMA */}
              <div
                className="bg-slate-900/80 border-2 rounded-2xl p-8"
                style={{ borderColor: "#FFC107" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-2">SOMA</h4>
                    <p
                      className="text-xl font-semibold"
                      style={{ color: "#FFC107" }}
                    >
                      Pediatric Emotional Intelligence
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: "#FFC107" }}
                    >
                      $72B
                    </div>
                    <div className="text-slate-400 text-sm">TAM</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  Patient Engagement & Digital Therapeutics
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  The first AI reflection tablet for hospitals. Uses the{" "}
                  <strong className="text-amber-400">ECHOcube</strong> hardware
                  tether to provide encrypted, hospital-controlled emotional
                  support for pediatric patients.
                </p>
              </div>

              {/* REFLECT */}
              <div
                className="bg-slate-900/80 border-2 rounded-2xl p-8"
                style={{ borderColor: "#FFC107" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-3xl font-bold text-white mb-2">
                      REFLECT
                    </h4>
                    <p
                      className="text-xl font-semibold"
                      style={{ color: "#FFC107" }}
                    >
                      Resonant Trauma Recovery
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: "#FFC107" }}
                    >
                      $26B
                    </div>
                    <div className="text-slate-400 text-sm">TAM</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  Digital Behavioral Health
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  A &apos;Sacred Mirror&apos; for survivors. Implementing the{" "}
                  <strong className="text-amber-400">
                    Rapha International
                  </strong>{" "}
                  partnership model to standardize trauma care through resonant
                  emotional frameworks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-950/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <Heart className="w-12 h-12" style={{ color: "#FFC107" }} />
              <h2 className="text-5xl font-bold text-white">LEADERSHIP</h2>
            </div>

            <div
              className="bg-slate-900/80 border-2 rounded-2xl p-10"
              style={{ borderColor: "#FFC107" }}
            >
              <h3 className="text-3xl font-bold text-white mb-2">
                Derek Angell
              </h3>
              <p className="text-xl mb-6" style={{ color: "#FFC107" }}>
                CEO & Founder
              </p>

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Inventor of the Emotional Calibration Protocol (ECP). Architect
                of the Forgetting Engine. Conceived the &apos;Complexity
                Inversion Law&apos; after documenting 12,198 emergence events
                and verifying 17,670 computational trials.
              </p>

              <div
                className="bg-black/50 rounded-lg p-6 border-l-4"
                style={{ borderColor: "#FFC107" }}
              >
                <p className="text-xl text-slate-300 italic">
                  &quot;We didn&apos;t just build a smarter AI. We built a
                  system that feels the weight of the problem.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              SEED ROUND MILESTONES
            </h2>
            <p className="text-2xl" style={{ color: "#2E5BFF" }}>
              $2M–$3M
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/80 border-2 rounded-2xl p-8"
              style={{ borderColor: "#2E5BFF" }}
            >
              <div
                className="text-4xl font-bold mb-4"
                style={{ color: "#2E5BFF" }}
              >
                Phase 1
              </div>
              <h4 className="text-xl font-bold text-white mb-4">
                IP Conversion
              </h4>
              <p className="text-slate-300">
                Provisional to Utility patent conversion across all 8 filings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-900/80 border-2 rounded-2xl p-8"
              style={{ borderColor: "#2E5BFF" }}
            >
              <div
                className="text-4xl font-bold mb-4"
                style={{ color: "#2E5BFF" }}
              >
                Phase 2
              </div>
              <h4 className="text-xl font-bold text-white mb-4">
                API Pilot Deployment
              </h4>
              <p className="text-slate-300">
                Pharma/Logistics partner integration for real-world validation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-900/80 border-2 rounded-2xl p-8"
              style={{ borderColor: "#2E5BFF" }}
            >
              <div
                className="text-4xl font-bold mb-4"
                style={{ color: "#2E5BFF" }}
              >
                Phase 3
              </div>
              <h4 className="text-xl font-bold text-white mb-4">
                Scientific Publication
              </h4>
              <p className="text-slate-300">
                Benchmark establishment in peer-reviewed journals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-white mb-8">
              Ready to Discuss?
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              CONEXUS represents a fundamental shift in how AI systems
              operate—from pattern matching to Proto-AI optimization. The market
              opportunity spans $10.2 trillion across optimization and
              experience verticals.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-12 py-5 text-xl font-bold rounded-full transition-all transform hover:scale-105 shadow-2xl"
              style={{
                background: "linear-gradient(to right, #2E5BFF, #FFC107)",
                color: "white",
              }}
            >
              Schedule a Meeting
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
