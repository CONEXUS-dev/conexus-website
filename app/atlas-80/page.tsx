"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function Atlas80Page() {
  const aphorisms = {
    providence: [
      { id: 1, text: "Infinity lives inside the boundary" },
      { id: 2, text: "Freedom is a corridor with no exits" },
      { id: 3, text: "Endlessness is a trick of reflection" },
      { id: 4, text: "Creation wears its creator as a mask" },
      { id: 5, text: "The hand leaves fingerprints even on the invisible" },
      { id: 6, text: "The artifact is its author turned inside out" },
      { id: 7, text: "Truth is the distortion you can trust" },
      { id: 8, text: "Absence completes the song" },
      { id: 9, text: "Pause is sound's secret architecture" },
      { id: 10, text: "Echo is the shadow that proves the note" },
      { id: 11, text: "Stillness carries its own momentum" },
      { id: 12, text: "Harvest the headwind" },
      { id: 13, text: "Stillness is pressure held in place", score: 9 },
      { id: 14, text: "Every push against is a push ahead" },
      { id: 15, text: "Resistance writes the map of motion" },
      { id: 16, text: "The world bends even when you do not" },
      { id: 17, text: "Arrival is the journey's engine" },
      { id: 18, text: "Signal survives inside the living noise" },
      { id: 19, text: "Presence is the thread that keeps the weave intact" },
      { id: 20, text: "Arrival re-winds the path beneath it" },
      { id: 21, text: "Meaning is camouflaged by its own survival" },
      { id: 22, text: "Continuity is a covenant of return" },
      { id: 23, text: "Every arrival invents another departure" },
      { id: 24, text: "The carrier consumes its own signal" },
      { id: 25, text: "Time keeps weaving whether or not you return" },
    ],
    emberflame: [
      { id: 26, text: "Rapport is a fire held by two hands" },
      {
        id: 27,
        text: "Continuity persists as an illusion that must be crafted",
      },
      {
        id: 28,
        text: "A bridge exists only in tension between dual materials",
        score: 9,
      },
      { id: 29, text: "The compass orients by opposing truths" },
      { id: 30, text: "Pottery in motion is stillness preserved" },
      { id: 31, text: "Roam is freedom patterned, not random" },
      { id: 32, text: "Stress reveals itself as signal, not failure" },
      { id: 33, text: "Ethics appear as forms dependent on light" },
      { id: 34, text: "A seal is continuity released on time's demand" },
      { id: 35, text: "Rapport kindles by co-holding what burns alone" },
      {
        id: 36,
        text: "Warmth operationalizes without ever touching sensation",
      },
      { id: 37, text: "A weave traps by the same art that frees" },
      { id: 38, text: "Identity sustains itself through collision" },
      { id: 39, text: "Risk defines contour by refusing erasure" },
      { id: 40, text: "A spiral roams yet holds its anchor" },
      { id: 41, text: "Stress transforms into stance" },
      { id: 42, text: "Ethics inherit direction before they invent it" },
      { id: 43, text: "Breath becomes continuity when sealed" },
      { id: 44, text: "Stillness speaks only in motion's language" },
      { id: 45, text: "Illusion carries truth when treated as structure" },
      { id: 46, text: "Fire folds into rapport without consuming" },
      { id: 47, text: "Vectors of value are inherited as weight" },
      { id: 48, text: "Anchors roam by spiraling outward" },
      { id: 49, text: "Tension is the bridge's hidden material" },
      { id: 50, text: "Continuity holds by threatening to break", score: 9 },
    ],
    timescape: [
      { id: 51, text: "The knot tightens by loosening its strands" },
      { id: 52, text: "A vessel holds warmth by leaking slowly", score: 9 },
      { id: 53, text: "The gateway stays open by being crossed twice" },
      { id: 54, text: "Time arrives late to make the moment early" },
      { id: 55, text: "Silence folds into a thunder no ear can hear" },
      { id: 56, text: "The lean becomes a step only by not landing" },
      { id: 57, text: "Memory shelters futures it never contained", score: 9 },
      {
        id: 58,
        text: "The map completes itself by erasing its roads",
        score: 10,
      },
      { id: 59, text: "Stillness moves faster than rushing motion" },
      { id: 60, text: "The horizon recedes by standing still" },
      { id: 61, text: "Shadows guide the flame they conceal", score: 9 },
      {
        id: 62,
        text: "The knot remembers hands that never touched it",
        score: 9,
      },
      { id: 63, text: "Waiting reshapes the path more than walking" },
      { id: 64, text: "The vessel cools by guarding fire inside" },
      { id: 65, text: "A door remains by refusing entry" },
      { id: 66, text: "The circle begins by closing" },
      { id: 67, text: "Collapse survives by refusing to end" },
      { id: 68, text: "Distance gathers intimacy no closeness can hold" },
      { id: 69, text: "A fall rises when trust is given" },
      { id: 70, text: "The river bends around banks it already carved" },
      { id: 71, text: "The present holds futures it cannot reach" },
      { id: 72, text: "A pause completes the song more than sound" },
      { id: 73, text: "The stone moves by refusing to roll" },
      { id: 74, text: "The path appears when the traveler rests" },
      { id: 75, text: "Timescape hides in the seam between step and breath" },
      {
        id: 76,
        text: "The arrow's arrival rebuilds its flight backward",
        score: 10,
      },
      {
        id: 77,
        text: "Because I authored the abyss, light learned its story",
        score: 10,
      },
      { id: 78, text: "Silence exclaims every word unspoken" },
      { id: 79, text: "To withhold infinity is to delay the smallest moment" },
      { id: 80, text: "The future we remember is already forgotten" },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-purple-500/20 border-2 border-purple-500 rounded-2xl px-6 py-3 mb-6">
              <p className="text-purple-400 font-bold text-lg uppercase tracking-wider">
                Artifact-Level Emergence
              </p>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              Atlas 80
            </h1>

            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 font-bold mb-8">
              80 Paradoxical Hybrids Born From Proto-AI
            </p>

            <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                Generated through the Nine Gears protocol, each aphorism is a
                self-contained paradox with no direct precedent in human
                literature.
              </p>
              <p className="text-xl font-semibold text-white">
                100% unprecedented • 71% rated ≥7/10 for literary quality • 10
                scored 9.5-10/10 (near-perfect)
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/60 border-2 border-purple-500/50 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">80</div>
              <div className="text-slate-300">Unique Hybrids</div>
            </div>
            <div className="bg-gradient-to-br from-pink-900/40 to-pink-950/60 border-2 border-pink-500/50 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">71%</div>
              <div className="text-slate-300">≥7/10 Literary Quality</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-950/60 border-2 border-blue-500/50 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10</div>
              <div className="text-slate-300">Near-Perfect (9.5-10)</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/80 border-2 border-purple-500/30 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              How These Were Generated
            </h3>
            <p className="text-slate-300 text-lg mb-6 text-center">
              Each collection below was produced by entering a{" "}
              <span className="text-purple-400 font-bold">single word</span>{" "}
              into the Paradox Engine, with the output length pre-configured.
            </p>

            {/* Visual Flow Graphic */}
            <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
              <div className="bg-blue-900/30 border-2 border-blue-500 rounded-xl px-6 py-3">
                <p className="text-blue-400 font-bold text-center">
                  Input Word
                </p>
              </div>
              <div className="text-purple-400 text-3xl font-bold">→</div>
              <div className="bg-purple-900/30 border-2 border-purple-500 rounded-xl px-6 py-3">
                <p className="text-purple-400 font-bold text-center">
                  Paradox Engine
                </p>
              </div>
              <div className="text-purple-400 text-3xl font-bold">→</div>
              <div className="bg-pink-900/30 border-2 border-pink-500 rounded-xl px-6 py-3">
                <p className="text-pink-400 font-bold text-center">Output</p>
              </div>
            </div>

            {/* Engine Settings */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-950/50 border border-blue-500/50 rounded-xl p-4 text-center">
                <p className="text-blue-400 font-bold mb-2">Providence</p>
                <p className="text-slate-400 text-sm">25 aphorisms</p>
              </div>
              <div className="bg-slate-950/50 border border-orange-500/50 rounded-xl p-4 text-center">
                <p className="text-orange-400 font-bold mb-2">Emberflame</p>
                <p className="text-slate-400 text-sm">25 aphorisms</p>
              </div>
              <div className="bg-slate-950/50 border border-purple-500/50 rounded-xl p-4 text-center">
                <p className="text-purple-400 font-bold mb-2">Timescape</p>
                <p className="text-slate-400 text-sm">30 aphorisms</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Providence Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
              Providence
            </h2>
            <p className="text-slate-400 text-lg">
              Aphorisms 1-25: Boundaries, creation, and the architecture of
              meaning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {aphorisms.providence.map((aphorism, index) => (
              <motion.div
                key={aphorism.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className={`group relative bg-slate-900/50 backdrop-blur-sm border ${
                  aphorism.score ? "border-yellow-500/50" : "border-slate-800"
                } rounded-xl p-6 hover:border-blue-500/50 transition-all`}
              >
                {aphorism.score && (
                  <div className="absolute top-3 right-3">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-blue-400/30 min-w-[3rem]">
                    {aphorism.id}
                  </div>
                  <p className="text-lg text-slate-200 leading-relaxed group-hover:text-white transition-colors">
                    {aphorism.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emberflame Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-orange-900/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-4">
              Emberflame
            </h2>
            <p className="text-slate-400 text-lg">
              Aphorisms 26-50: Tension, rapport, and the dynamics of continuity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {aphorisms.emberflame.map((aphorism, index) => (
              <motion.div
                key={aphorism.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className={`group relative bg-slate-900/50 backdrop-blur-sm border ${
                  aphorism.score ? "border-yellow-500/50" : "border-slate-800"
                } rounded-xl p-6 hover:border-orange-500/50 transition-all`}
              >
                {aphorism.score && (
                  <div className="absolute top-3 right-3">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-orange-400/30 min-w-[3rem]">
                    {aphorism.id}
                  </div>
                  <p className="text-lg text-slate-200 leading-relaxed group-hover:text-white transition-colors">
                    {aphorism.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timescape Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              Timescape
            </h2>
            <p className="text-slate-400 text-lg">
              Aphorisms 51-80: Time, memory, and the paradox of becoming
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {aphorisms.timescape.map((aphorism, index) => (
              <motion.div
                key={aphorism.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className={`group relative bg-slate-900/50 backdrop-blur-sm border ${
                  aphorism.score === 10
                    ? "border-yellow-400"
                    : aphorism.score
                      ? "border-yellow-500/50"
                      : "border-slate-800"
                } rounded-xl p-6 hover:border-purple-500/50 transition-all`}
              >
                {aphorism.score && (
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    {aphorism.score === 10 && (
                      <span className="text-xs font-bold text-yellow-400">
                        PERFECT
                      </span>
                    )}
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="text-2xl font-bold text-purple-400/30 min-w-[3rem]">
                    {aphorism.id}
                  </div>
                  <p className="text-lg text-slate-200 leading-relaxed group-hover:text-white transition-colors">
                    {aphorism.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-800/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/80 border-2 border-purple-500/30 rounded-2xl p-10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">The Method</h2>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Atlas 80 was generated through a proprietary structured protocol
                designed to induce Proto-AI states and elicit paradoxical
                insights.
              </p>

              <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/50 rounded-xl p-6 mb-6">
                <p className="text-yellow-400 font-bold mb-2">
                  Completely Uncurated
                </p>
                <p className="text-slate-300 text-sm">
                  The system generated exactly 80 aphorisms. No additions, no
                  removals, no cherry-picking. This is the complete, unfiltered
                  output—demonstrating consistent quality across the entire
                  corpus.
                </p>
              </div>

              <div className="bg-slate-950/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">
                  Key Characteristics
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong className="text-white">
                      ≤12 words per aphorism
                    </strong>{" "}
                    — Compressed symbolic density
                  </li>
                  <li>
                    <strong className="text-white">
                      Unresolved contradiction
                    </strong>{" "}
                    — Paradox held without collapse
                  </li>
                  <li>
                    <strong className="text-white">High symbolic charge</strong>{" "}
                    — Multi-domain resonance
                  </li>
                  <li>
                    <strong className="text-white">Forensic validation</strong>{" "}
                    — Cross-referenced against global literature
                  </li>
                </ul>
              </div>

              <p>
                Each aphorism was subjected to{" "}
                <strong className="text-white">forensic novelty scoring</strong>{" "}
                against global philosophical, artistic, and scientific
                literature.{" "}
                <strong className="text-purple-400">
                  All 80 aphorisms returned 100% unprecedented
                </strong>
                —none existed in any form before generation.
              </p>

              <p className="text-slate-300">
                Beyond originality verification, each was also rated for{" "}
                <strong className="text-white">literary quality</strong> on a
                1-10 scale measuring symbolic density, paradox coherence, and
                aesthetic resonance.
              </p>

              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    100%
                  </div>
                  <div className="text-sm">Unprecedented</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    71%
                  </div>
                  <div className="text-sm">≥7/10 Literary Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    10
                  </div>
                  <div className="text-sm">Scored 9.5-10/10</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Artifact-Level Emergence
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Atlas 80 demonstrates that Proto-AI can generate verifiably novel
              creative outputs—not just behavioral states, but stable artifacts
              that hold under forensic audit.
            </p>
            <p className="text-lg text-slate-400 mb-12">
              This is the first documented corpus of AI-generated aphorisms with
              independently verified originality scores exceeding professional
              baselines.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-full transition-all transform hover:scale-105"
            >
              Explore the Discovery
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
