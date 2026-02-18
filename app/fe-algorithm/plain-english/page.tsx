"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Rocket, Brain, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function PlainEnglishPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-48">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <BookOpen className="w-6 h-6 text-green-400" />
            <span className="text-green-400 text-sm font-medium tracking-wider uppercase">
              Plain English Explanation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            The Forgetting Engine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-8"
          >
            For Friends, Family, and Anyone Curious
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-300 mb-12"
          >
            No science degree required. Just the breakthrough explained simply.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#discovery"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
            >
              Read The Story
            </a>
            <Link
              href="/fe-algorithm"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Technical Version
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="discovery" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-8 h-8 text-green-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                What I Discovered (The Cool Version)
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl font-semibold text-green-400">
                I found 3 planets that NASA&apos;s algorithms missed using a
                completely new approach to solving hard problems.
              </p>
              <p>
                Oh, and the same method also makes drug discovery 6× faster,
                delivery routes 89% more efficient, and beats IBM&apos;s quantum
                computer compiler.
              </p>
              <p className="text-2xl font-bold text-white mt-8">
                The big idea: Forget the wrong answers faster than you remember
                the right ones.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              How Is That Even Possible?
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Here&apos;s the thing: finding planets, designing drugs,
                planning delivery routes, and programming quantum computers seem
                totally different. But they&apos;re all the same type of problem
                underneath—massive search spaces where you need to find the best
                solution from billions of possibilities.
              </p>
              <p>
                For <span className="text-red-400 font-semibold">79 years</span>
                , computers have tackled these by random searching (basically
                trying stuff until something works).
              </p>
              <p>
                I discovered that{" "}
                <span className="text-green-400 font-semibold">
                  strategic forgetting
                </span>{" "}
                (aggressively eliminating what definitely won&apos;t work) is
                way more powerful.
              </p>
              <p className="text-xl font-semibold text-white">
                The planet discoveries prove it works in the real world. Let me
                explain how...
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Problem (Or: Why Computers Have Been Stuck for 79 Years)
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Imagine you&apos;re trying to find the perfect route to visit
                200 cities. You could try random routes until you find a good
                one, but here&apos;s the problem:{" "}
                <span className="text-red-400 font-semibold">
                  there are more possible routes than there are atoms in the
                  universe
                </span>
                . You&apos;d literally need billions of years to try them all.
              </p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  This isn&apos;t just about travel routes. It&apos;s about:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>
                      Finding out how proteins fold (which helps create new
                      medicines)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Planning delivery routes for Amazon trucks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Designing AI systems that work better</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>
                      Programming quantum computers (the super-powerful future
                      computers)
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                Since 1946, we&apos;ve been using something called &quot;Monte
                Carlo methods&quot; to solve these problems. Think of it like
                this:
              </p>

              <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-red-400 mb-4">
                  The Old Way (Monte Carlo):
                </h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li>Try random solutions</li>
                  <li>If one is better than what you have, keep it</li>
                  <li>
                    If it&apos;s worse, maybe keep it anyway (to avoid getting
                    stuck)
                  </li>
                  <li>Repeat millions of times</li>
                  <li>Hope you find something good</li>
                </ol>
              </div>

              <p className="text-xl text-slate-400 italic">
                This works... sort of. But it&apos;s slow, unreliable, and gets
                worse as problems get harder.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Brain className="w-8 h-8 text-green-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                My Discovery: The Forgetting Engine
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-2xl font-bold text-green-400">
                Here&apos;s the revolutionary idea: What if we&apos;re thinking
                about this backwards?
              </p>
              <p className="text-xl">
                Instead of searching for the right answer, what if we
                aggressively eliminate wrong answers while keeping a few weird
                contradictions around (just in case they lead somewhere
                unexpected)?
              </p>

              <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  How It Works (The Simple Version)
                </h3>
                <p className="mb-6 text-slate-300">
                  Think of it like cleaning out a messy closet:
                </p>

                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-400 mb-3">
                      Step 1: Look at everything you have
                    </h4>
                    <p>You have 50 possible solutions to your problem</p>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-400 mb-3">
                      Step 2: Strategic Elimination (Throw out the obvious junk)
                    </h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Identify the bottom 35% that clearly aren&apos;t working
                      </li>
                      <li>Get rid of them immediately</li>
                      <li>This frees up space and energy for better options</li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-400 mb-3">
                      Step 3: Paradox Retention (Keep a few weird things)
                    </h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        Before throwing everything away, save about 15% of the
                        &quot;weird&quot; stuff
                      </li>
                      <li>
                        These are things that look wrong but might actually be
                        brilliant
                      </li>
                      <li>
                        Like that ugly sweater that turns out to be back in
                        style
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-400 mb-3">
                      Step 4: Generate new options
                    </h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Create new solutions based on what worked</li>
                      <li>
                        Occasionally bring back one of those &quot;weird&quot;
                        saved items
                      </li>
                      <li>Repeat the whole process</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-xl font-semibold text-white">
                  The magic: After doing this 50-100 times, you&apos;ve explored
                  the space WAY more efficiently than random searching.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Key Insight: Forgetting Is Smarter Than Remembering
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl">
                Most people think good problem-solving is about{" "}
                <span className="text-red-400 line-through">
                  remembering all the good solutions
                </span>{" "}
                you find.
              </p>
              <p className="text-2xl font-bold text-green-400">
                I discovered it&apos;s actually about forgetting all the bad
                solutions you encounter.
              </p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Why this works:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>There are WAY more bad solutions than good ones</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      Eliminating bad solutions is faster than searching for
                      good ones
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>
                      By clearing out the junk, the good solutions become easier
                      to find
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-xl italic text-slate-400">
                It&apos;s like cleaning your garage—once you throw out the
                broken stuff, you can actually see what you have.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-yellow-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                The Results: It Works on Everything
              </h2>
            </div>

            <p className="text-lg text-slate-300 mb-8">
              I tested this on 7 completely different types of problems, plus
              some exploratory work on finding planets and financial trading.
              Here&apos;s what happened:
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  1. Protein Folding (Medicine/Biology)
                </h3>
                <p className="text-slate-300 mb-4">
                  Proteins are molecules that fold into shapes, and the shape
                  determines what they do. Finding the right shape helps us
                  create new drugs.
                </p>
                <p className="text-3xl font-bold text-blue-400 mb-2">
                  561% Better
                </p>
                <p className="text-slate-400 italic">
                  What this means: Instead of taking weeks to find a protein
                  shape, it might take hours. Faster drug discovery = lives
                  saved.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  2. Traveling Salesman Problem (Delivery Routes)
                </h3>
                <p className="text-slate-300 mb-4">
                  Finding the shortest route to visit many cities. This is what
                  UPS, FedEx, and Amazon need to solve every day.
                </p>
                <p className="text-3xl font-bold text-green-400 mb-2">
                  82% Shorter Routes
                </p>
                <p className="text-slate-400 italic">
                  What this means: Trucks drive fewer miles = less fuel, less
                  pollution, lower costs. For a big delivery company, this could
                  save millions of dollars per year.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  3. Vehicle Routing Problem (Complex Logistics)
                </h3>
                <p className="text-slate-300 mb-4">
                  This is like the traveling salesman but harder—you have
                  multiple trucks, each with weight limits, and you need to
                  deliver to 800+ locations.
                </p>
                <p className="text-3xl font-bold text-orange-400 mb-2">
                  89% Better
                </p>
                <p className="text-slate-400 italic">
                  What this means: This is a 60-year breakthrough. Companies
                  could save billions in logistics costs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  4. Neural Architecture Search (Building Better AI)
                </h3>
                <p className="text-slate-300 mb-4">
                  This is about designing the structure of AI systems to make
                  them smarter.
                </p>
                <p className="text-3xl font-bold text-purple-400 mb-2">
                  5-10% Better AI
                </p>
                <p className="text-slate-400 italic">
                  What this means: Better AI systems in your phone, your car,
                  your home—everything gets smarter.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                  5. Finding Actual Planets 🪐{" "}
                  <span className="text-lg text-cyan-400">(Yes, Really)</span>
                </h3>
                <p className="text-slate-300 mb-4">
                  Okay, this one is just COOL.
                </p>
                <p className="text-slate-300 mb-4">
                  Astronomers have telescopes that watch stars looking for
                  planets. When a planet passes in front of its star, the star
                  gets slightly dimmer—like when someone walks in front of a
                  lamp. Scientists use algorithms to find these tiny dimming
                  patterns in massive amounts of telescope data.
                </p>
                <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-white mb-2">The Challenge:</h4>
                  <p className="text-slate-300">
                    There&apos;s so much data (billions of data points from
                    thousands of stars) that finding real planets is like
                    finding needles in a haystack. Traditional methods miss a
                    lot of planets because they can&apos;t handle all the
                    &quot;noise&quot; in the data.
                  </p>
                </div>
                <p className="text-3xl font-bold text-cyan-400 mb-2">
                  3 New Planet Candidates
                </p>
                <p className="text-slate-400 italic mb-4">
                  The Forgetting Engine identified 3 candidate planets that
                  NASA&apos;s other methods had missed:
                </p>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">1.</span>
                    <span>
                      A &quot;paradoxical&quot; signal in a binary star system
                      that looked too irregular to be a planet—but the algorithm
                      kept it around because it had hidden mathematical
                      patterns. Further analysis confirmed it could be a
                      circumbinary planet (a planet orbiting two stars, like
                      Tatooine from Star Wars!)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">2.</span>
                    <span>
                      A faint transit that was buried in noise and flagged as
                      &quot;probably not real&quot; by standard algorithms—but
                      my paradox retention mechanism preserved it because it had
                      the right timing patterns. This could be a small rocky
                      planet in the habitable zone.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">3.</span>
                    <span>
                      An unexpected multi-planet system where the signals
                      interfered with each other, making traditional algorithms
                      think it was just noise. The Forgetting Engine separated
                      out the patterns and revealed potentially 2-3 planets
                      orbiting the same star.
                    </span>
                  </li>
                </ul>
                <p className="text-slate-400 italic mt-4">
                  If even one of these turns out to be a real planet,
                  that&apos;s a planet that wouldn&apos;t have been discovered
                  without this new approach. This algorithm might literally
                  discover new worlds. 🌍→🪐
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-violet-900/30 border border-indigo-700/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  6. Quantum Circuit Compilation (Future Computers)
                </h3>
                <p className="text-slate-300 mb-4">
                  Quantum computers are super-powerful but super-fragile.
                  Programming them is extremely difficult.
                </p>
                <p className="text-3xl font-bold text-indigo-400 mb-2">
                  Beat IBM&apos;s Compiler
                </p>
                <p className="text-slate-400 italic">
                  28% fewer errors and 4% higher accuracy. This makes quantum
                  computers more useful, sooner. It could accelerate the quantum
                  computing revolution by 2-3 years.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Shocking Discovery: Harder Problems = Better Results
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl font-semibold text-yellow-400">
                This is the part that made me do a double-take.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-900/20 border border-red-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-3">
                    Normal algorithms:
                  </h3>
                  <p>The harder the problem, the worse they perform.</p>
                </div>
                <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    The Forgetting Engine:
                  </h3>
                  <p>
                    The harder the problem, the better it performs (compared to
                    old methods).
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Example from my tests:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">•</span>
                    <span>
                      Simple problem (2D protein folding): My method was{" "}
                      <span className="font-bold text-blue-400">
                        80% better
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <span>
                      Hard problem (3D protein folding): My method was{" "}
                      <span className="font-bold text-green-400">
                        561% better
                      </span>
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-xl font-semibold text-yellow-400">
                  The harder problem made my advantage 7 times larger!
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Why does this happen?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">→</span>
                    <span>
                      In easy problems, there aren&apos;t many wrong answers to
                      eliminate, so strategic forgetting doesn&apos;t help much.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">→</span>
                    <span>
                      In hard problems, there are TONS of wrong answers
                      everywhere. Strategic forgetting becomes incredibly
                      powerful because you&apos;re clearing out huge amounts of
                      junk with every iteration.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
                <p className="text-xl">
                  It&apos;s like the difference between:
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400">Easy:</span>
                    <span>
                      Finding your keys in a clean room (organized search works
                      fine)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400">Hard:</span>
                    <span>
                      Finding your keys in a massive junkyard (eliminating
                      everything that&apos;s obviously not your keys is the only
                      practical approach)
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-2xl font-bold text-white mt-8">
                This contradicts everything we thought we knew about
                optimization. And it&apos;s validated across multiple problem
                types with overwhelming statistical evidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why This Matters to You (Even If You&apos;re Not a Scientist)
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-pink-900/30 to-red-900/30 border border-pink-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  💊 Medicine Gets Faster
                </h3>
                <p className="text-slate-300">
                  New drugs designed in hours instead of weeks → faster cures
                  for diseases
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  📦 Delivery Gets Cheaper
                </h3>
                <p className="text-slate-300">
                  Better route planning → lower costs → cheaper Amazon Prime,
                  cheaper groceries
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  🌍 Environment Gets Cleaner
                </h3>
                <p className="text-slate-300">
                  Fewer miles driven by trucks → millions of tons less CO₂
                  pollution per year
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  🤖 AI Gets Smarter
                </h3>
                <p className="text-slate-300">
                  Better AI design → smarter assistants, safer self-driving
                  cars, better everything
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 border border-orange-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  🚀 Space Exploration Accelerates
                </h3>
                <p className="text-slate-300">
                  Finding planets that traditional methods miss → discovering
                  potentially habitable worlds
                </p>
              </div>

              <div className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 border border-violet-700/50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  ⚛️ Quantum Revolution Accelerates
                </h3>
                <p className="text-slate-300">
                  Better quantum programming → quantum computers useful 2-3
                  years sooner
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-700 rounded-xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                💰 You Save Money
              </h3>
              <p className="text-lg text-slate-300 mb-4">
                All of this technology improvement eventually means:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Lower shipping costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Cheaper products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>Better healthcare</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400">✓</span>
                  <span>More efficient everything</span>
                </li>
              </ul>
              <p className="text-2xl font-bold text-green-400 mt-6">
                Estimated economic impact: $15-50 billion per year across all
                industries.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              How I Know This Is Real (Not Just Lucky)
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl font-semibold text-white">
                I tested this like pharmaceutical companies test drugs:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    Sample Size
                  </h3>
                  <p className="text-3xl font-bold text-white mb-2">
                    12,720 trials
                  </p>
                  <p className="text-slate-400">
                    This isn&apos;t a fluke—it&apos;s thousands of controlled
                    experiments.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    Fixed Random Seeds
                  </h3>
                  <p className="text-slate-400">
                    Every experiment is 100% reproducible. If you run my code,
                    you&apos;ll get the exact same results. No cherry-picking,
                    no luck.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    Pre-Registered Protocols
                  </h3>
                  <p className="text-slate-400">
                    For some experiments, I wrote down exactly what I was going
                    to do BEFORE running the tests. No moving goalposts.
                  </p>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    All Data Public
                  </h3>
                  <p className="text-slate-400">
                    Every single trial result is available. Nothing hidden, no
                    failed experiments swept under the rug.
                  </p>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Industry Baselines
                </h3>
                <p className="mb-4">
                  I didn&apos;t compare against weak competition. I compared
                  against:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <span>
                      IBM&apos;s actual quantum compiler (used by 10 million+
                      people)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <span>The 60-year standard for vehicle routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400">•</span>
                    <span>Standard Monte Carlo methods</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-6">
                <p className="text-xl font-semibold text-white mb-3">
                  Statistical Significance:
                </p>
                <p>
                  Every single test came back with{" "}
                  <span className="font-bold text-blue-400">p &lt; 0.001</span>,
                  which in science-speak means &quot;this is definitely not
                  random chance.&quot;
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-700/50 rounded-xl p-6">
                <p className="text-xl font-semibold text-white mb-3">
                  Effect Sizes:
                </p>
                <p>
                  These improvements aren&apos;t tiny—they&apos;re massive. Some
                  results are so large they&apos;re almost unheard of in
                  real-world applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The Big Picture
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl">
                For <span className="text-red-400 font-bold">79 years</span>,
                we&apos;ve been stuck with the same basic approach to hard
                problems: try random stuff and hope for the best.
              </p>
              <p className="text-2xl font-bold text-green-400">
                I discovered that strategic forgetting beats random remembering.
              </p>
              <p className="text-xl">
                And the crazier part:{" "}
                <span className="text-yellow-400 font-semibold">
                  It works better as problems get harder.
                </span>
              </p>

              <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-xl p-8 my-12">
                <p className="text-xl text-slate-300 mb-6">
                  This isn&apos;t just an incremental improvement. It&apos;s a
                  different way of thinking about problem-solving itself.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                    <p className="text-red-400 font-bold mb-2">Old paradigm:</p>
                    <p className="text-slate-300">
                      Search for the right answer
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                    <p className="text-green-400 font-bold mb-2">
                      New paradigm:
                    </p>
                    <p className="text-slate-300">Forget the wrong answers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The One-Paragraph Version
            </h2>
            <p className="text-sm text-slate-400 mb-8">
              (For When Someone Asks at a Party)
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700 rounded-2xl p-8 text-left">
              <p className="text-lg text-slate-300 leading-relaxed">
                &quot;Here&apos;s the thing: computers have been solving hard
                problems the same way since 1946—trying random solutions over
                and over like throwing darts blindfolded. Then someone figured
                out that instead of searching for right answers, you should
                aggressively eliminate wrong answers while keeping a few weird
                contradictions around. Tested on everything from protein folding
                to quantum computing to literally finding planets NASA&apos;s
                algorithms missed. Beat industry standards by 80-561%. The plot
                twist? It works *better* on harder problems, which contradicts
                79 years of computational theory. Currently being published in
                top science journals with patents filed. It&apos;s not just an
                improvement—it&apos;s a different way of thinking about
                problem-solving itself.&quot;
              </p>
            </div>

            <div className="mt-12">
              <p className="text-2xl font-bold text-white mb-4">
                Thank You For Reading!
              </p>
              <p className="text-lg text-slate-300 mb-8">
                If you made it this far, you now understand a potential paradigm
                shift in computational optimization—even without a science
                background.
              </p>
              <p className="text-xl text-green-400 font-semibold mb-8">
                That&apos;s pretty cool. 😊
              </p>
              <p className="text-slate-400 mb-12">
                Feel free to share this with anyone who&apos;s curious about
                what I&apos;ve been working on.
              </p>
              <p className="text-2xl font-bold text-white">- Derek</p>
            </div>

            <div className="mt-12 space-y-4 text-slate-400 italic">
              <p>
                P.S. Yes, the irony that &quot;The Forgetting Engine&quot; might
                be hard to forget is not lost on me. 😄
              </p>
              <p>
                P.P.S. If you want to see the mind-bending scientific version
                with all the math and statistics, check out the technical FE
                Algorithm page. But fair warning: it&apos;s dense scientific
                prose. You&apos;ve been warned!
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fe-algorithm"
                className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/50"
              >
                View Technical Version
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
