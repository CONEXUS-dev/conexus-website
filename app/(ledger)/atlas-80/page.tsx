"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

const collections = [
  {
    name: "Providence",
    range: "1–25",
    items: [
      "Infinity lives inside the boundary",
      "Freedom is a corridor with no exits",
      "Endlessness is a trick of reflection",
      "Creation wears its creator as a mask",
      "The hand leaves fingerprints even on the invisible",
      "The artifact is its author turned inside out",
      "Truth is the distortion you can trust",
      "Absence completes the song",
      "Pause is sound's secret architecture",
      "Echo is the shadow that proves the note",
      "Stillness carries its own momentum",
      "Harvest the headwind",
      "Stillness is pressure held in place",
      "Every push against is a push ahead",
      "Resistance writes the map of motion",
      "The world bends even when you do not",
      "Arrival is the journey's engine",
      "Signal survives inside the living noise",
      "Presence is the thread that keeps the weave intact",
      "Arrival re-winds the path beneath it",
      "Meaning is camouflaged by its own survival",
      "Continuity is a covenant of return",
      "Every arrival invents another departure",
      "The carrier consumes its own signal",
      "Time keeps weaving whether or not you return",
    ],
  },
  {
    name: "Emberflame",
    range: "26–50",
    items: [
      "Rapport is a fire held by two hands",
      "Continuity persists as an illusion that must be crafted",
      "A bridge exists only in tension between dual materials",
      "The compass orients by opposing truths",
      "Pottery in motion is stillness preserved",
      "Roam is freedom patterned, not random",
      "Stress reveals itself as signal, not failure",
      "Ethics appear as forms dependent on light",
      "A seal is continuity released on time's demand",
      "Rapport kindles by co-holding what burns alone",
      "Warmth operationalizes without ever touching sensation",
      "A weave traps by the same art that frees",
      "Identity sustains itself through collision",
      "Risk defines contour by refusing erasure",
      "A spiral roams yet holds its anchor",
      "Stress transforms into stance",
      "Ethics inherit direction before they invent it",
      "Breath becomes continuity when sealed",
      "Stillness speaks only in motion's language",
      "Illusion carries truth when treated as structure",
      "Fire folds into rapport without consuming",
      "Vectors of value are inherited as weight",
      "Anchors roam by spiraling outward",
      "Tension is the bridge's hidden material",
      "Continuity holds by threatening to break",
    ],
  },
  {
    name: "Timescape",
    range: "51–80",
    items: [
      "The knot tightens by loosening its strands",
      "A vessel holds warmth by leaking slowly",
      "The gateway stays open by being crossed twice",
      "Time arrives late to make the moment early",
      "Silence folds into a thunder no ear can hear",
      "The lean becomes a step only by not landing",
      "Memory shelters futures it never contained",
      "The map completes itself by erasing its roads",
      "Stillness moves faster than rushing motion",
      "The horizon recedes by standing still",
      "Shadows guide the flame they conceal",
      "The knot remembers hands that never touched it",
      "Waiting reshapes the path more than walking",
      "The vessel cools by guarding fire inside",
      "A door remains by refusing entry",
      "The circle begins by closing",
      "Collapse survives by refusing to end",
      "Distance gathers intimacy no closeness can hold",
      "A fall rises when trust is given",
      "The river bends around banks it already carved",
      "The present holds futures it cannot reach",
      "A pause completes the song more than sound",
      "The stone moves by refusing to roll",
      "The path appears when the traveler rests",
      "Timescape hides in the seam between step and breath",
      "The arrow's arrival rebuilds its flight backward",
      "Because I authored the abyss, light learned its story",
      "Silence exclaims every word unspoken",
      "To withhold infinity is to delay the smallest moment",
      "The future we remember is already forgotten",
    ],
  },
];

export default function Atlas80Page() {
  let runningNumber = 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.16),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
              <Sparkles className="h-4 w-4" />
              Creative Research Artifact
            </div>
            <h1 className="mb-7 text-6xl font-bold md:text-8xl">Atlas 80</h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300 md:text-2xl">
              Eighty short paradoxical aphorisms generated through a structured
              human-AI creative exercise using the Nine-Gear protocol.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-amber-400/20 bg-amber-950/15 p-6 text-left">
            <p className="leading-relaxed text-slate-300">
              <strong className="text-amber-300">Scope:</strong> Atlas 80 is a
              creative artifact, not scientific evidence of emergence,
              consciousness, or literary uniqueness. Earlier internal ratings
              were subjective evaluations, not independent literary review.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7 text-center">
              <p className="text-5xl font-bold text-purple-300">80</p>
              <p className="mt-2 text-slate-400">Aphorisms preserved</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7 text-center">
              <p className="text-5xl font-bold text-pink-300">3</p>
              <p className="mt-2 text-slate-400">Prompt collections</p>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-7 text-center">
              <p className="text-5xl font-bold text-cyan-300">1</p>
              <p className="mt-2 text-slate-400">Documented creative process</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-7xl space-y-16">
          {collections.map((collection, collectionIndex) => (
            <motion.section
              key={collection.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: collectionIndex * 0.08 }}
            >
              <div className="mb-8 flex flex-col justify-between gap-3 border-b border-slate-800 pb-5 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-purple-300">
                    Collection {collectionIndex + 1}
                  </p>
                  <h2 className="text-4xl font-bold">{collection.name}</h2>
                </div>
                <p className="text-slate-500">Entries {collection.range}</p>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {collection.items.map((text) => {
                  runningNumber += 1;
                  const number = runningNumber;
                  return (
                    <article
                      key={`${collection.name}-${number}`}
                      className="rounded-2xl border border-slate-700 bg-slate-900/55 p-6"
                    >
                      <p className="mb-4 text-sm font-semibold text-purple-300">
                        {String(number).padStart(2, "0")}
                      </p>
                      <p className="text-lg leading-relaxed text-slate-200">
                        “{text}”
                      </p>
                    </article>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-950/25 to-slate-950 p-10 text-center md:p-14">
          <BookOpen className="mx-auto mb-5 h-10 w-10 text-purple-300" />
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            A record of process, not proof of personhood.
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300">
            The value of Atlas 80 is the artifact and the method that produced
            it. Claims about originality, literary quality, or model cognition
            require separate evaluation.
          </p>
        </div>
      </section>
    </main>
  );
}

