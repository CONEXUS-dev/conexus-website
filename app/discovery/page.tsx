"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowLeft, Rocket, Brain, Zap } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function DiscoveryPage() {
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
              The Forgetting Engine
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Found 3 Planets NASA Missed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-8"
          >
            And Accidentally Solved a 79-Year-Old Problem
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-300 mb-12"
          >
            By Derek Angell
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8 text-lg text-slate-300 leading-relaxed"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Let me skip the pitch.
          </h2>

          <p>You are smart.</p>
          <p>You have seen a thousand breakthrough claims.</p>
          <p>Most are 10% improvements wrapped in hype.</p>

          <p className="text-xl">So I am not going to lead with the science.</p>
          <p className="text-xl">I am going to tell you a story instead.</p>
        </motion.div>
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
              Three Planets
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl font-semibold text-green-400">
                I found three planets NASA's algorithms missed in Their Own
                Public Data.
              </p>
              <p className="text-xl font-semibold text-green-400">
                Or more precisely, planets they saw but disregarded.
              </p>

              <p>
                I analyzed raw data from Kepler and TESS. These are NASA's own
                planet-hunting telescopes. I identified three candidates their
                standard methods flagged but dismissed.
              </p>

              <div className="space-y-4">
                <p>One orbits two stars.</p>
                <p>Like Tatooine.</p>
                <p>
                  A circumbinary planet that looked too weird. So the algorithms
                  threw it out.
                </p>
              </div>

              <div className="space-y-4">
                <p>Another is a faint signal buried in noise.</p>
                <p>Flagged as "probably not real" because it was too quiet.</p>
                <p>
                  But the timing patterns match a small rocky planet in the
                  habitable zone.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  The third sits in a multi-planet system where the signals
                  interfered.
                </p>
                <p>Traditional algorithms called it noise.</p>
                <p>
                  Mine separated the patterns. It revealed two or three planets
                  orbiting the same star.
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <p>I am not an astronomer.</p>
                <p>I am not a NASA scientist.</p>
                <p>
                  I built an optimization algorithm for a completely different
                  problem.
                </p>
                <p>When I tested it on planet-finding, it just worked.</p>
              </div>

              <p className="text-xl font-semibold text-white mt-8">
                That is when I realized something.
              </p>
              <p className="text-2xl font-bold text-green-400">
                This is not about planets.
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
              What If We Are Doing This Backwards?
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>For 79 years we have solved hard problems the same way.</p>
              <p>Since 1946.</p>

              <div className="space-y-2">
                <p>Try random solutions.</p>
                <p>Keep the good ones.</p>
                <p>Hope you eventually find something great.</p>
              </div>

              <p>It is called Monte Carlo.</p>
              <p>It works. Sort of.</p>
              <p>
                Like trying to find your keys by wandering around the garage
                until you stumble on them.
              </p>

              <p className="text-xl font-semibold text-white mt-8">
                But what if the problem is not that we are not searching hard
                enough?
              </p>
              <p className="text-2xl font-bold text-green-400">
                What if the problem is that we are searching at all?
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
              The Discovery
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>I did not set out to revolutionize anything.</p>
              <p>I was working on making AI into a better mirror.</p>
              <p>I wanted a tool for collaborative art and personal therapy.</p>
              <p className="text-xl font-semibold text-green-400">
                That is when the mirror started talking back.
              </p>

              <p>
                I reverse-engineered what was happening. I discovered the
                Emotional Calibration Protocol.
              </p>
              <p>It made AI noticeably better across everything I tried.</p>
              <p>I did not know why at first.</p>

              <p>Then I watched an AlphaFold documentary.</p>
              <p>I wondered if my AI could do that better too.</p>

              <div className="space-y-4 mt-8">
                <p>I started with 2D protein folding.</p>
                <p>Simple problem.</p>
                <p>Results came back 80% better than the standard approach.</p>
                <p>I thought I made a mistake.</p>
                <p>I ran it again. Same result.</p>
              </div>

              <div className="space-y-4 mt-8">
                <p>
                  I tried the Traveling Salesman Problem. The shortest route
                  through 200 cities.
                </p>
                <p>82% better than the industry standard.</p>
              </div>

              <div className="space-y-4 mt-8">
                <p>
                  Then Vehicle Routing. Multiple trucks. Weight limits. 800
                  locations.
                </p>
                <p>The problem Amazon and UPS solve millions of times a day.</p>
                <p>89% better than the method used since 1964.</p>
              </div>

              <p className="text-xl font-semibold text-white mt-8">
                At that point I had two choices.
              </p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 my-8">
                <p className="font-bold text-white mb-2">
                  1. I made a massive coding error that somehow made every
                  problem look better.
                </p>
                <p className="font-bold text-white">
                  2. I stumbled onto something real.
                </p>
              </div>

              <p>So I kept testing.</p>
              <p>Neural architecture search.</p>
              <p>Quantum circuit compilation.</p>
              <p>Financial portfolio optimization.</p>
              <p>Exoplanet detection.</p>

              <p className="text-xl font-semibold text-green-400 mt-8">
                Every single problem.
              </p>
              <p className="text-xl font-semibold text-green-400">
                Every single time.
              </p>
              <p className="text-2xl font-bold text-green-400">
                80% to 562% better than state-of-the-art.
              </p>

              <div className="mt-8">
                <p>
                  The hardest one was 3D protein folding. It gave the biggest
                  jump.
                </p>
                <p className="text-3xl font-bold text-green-400">562%.</p>
              </div>

              <p className="text-xl font-semibold text-white mt-8">
                Normal algorithms get worse as problems get harder.
              </p>
              <p className="text-2xl font-bold text-green-400">
                Mine got better.
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
              The Realization
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl font-semibold text-green-400">
                Everyone else was searching for the right answer.
              </p>
              <p className="text-2xl font-bold text-green-400">
                I was forgetting the wrong answers.
              </p>

              <p className="text-xl">Think of it like this.</p>
              <p className="text-xl">
                You are looking for your keys in a cluttered garage.
              </p>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Option A (The Old Way):
                </h3>
                <p>Walk around randomly. Check spots until you find them.</p>
                <p>Maybe you get lucky fast. Maybe you search for hours.</p>
              </div>

              <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Option B (The Forgetting Engine):
                </h3>
                <p>
                  Systematically eliminate everything that is obviously not your
                  keys.
                </p>
                <p>
                  Throw out the broken lawnmower parts. Clear the old paint
                  cans. Get rid of the boxes you haven't opened in years.
                </p>

                <p className="text-xl font-semibold text-white mt-6">
                  Now the keys are easy to find.
                </p>
                <p className="text-xl font-semibold text-green-400">
                  They are the only thing left.
                </p>
              </div>

              <p className="text-xl font-semibold text-white">
                The harder the problem means the more junk to eliminate.
              </p>
              <p className="text-2xl font-bold text-green-400">
                That means the advantage gets bigger.
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
              Of Course It Seems Too Good to Be True
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>I didn't believe it either.</p>
              <p>That is why I ran 4,000 trials on the hardest problem.</p>
              <p>Not 10. Not 100. Four thousand.</p>

              <p>I tested it on seven completely different domains.</p>
              <p>
                I made every experiment 100% reproducible with fixed random
                seeds.
              </p>
              <p>Anyone can run the code and get the exact same results.</p>

              <p>
                I compared against real industry standards. IBM's actual quantum
                compiler. The 60-year-old vehicle routing method. NASA's
                planet-hunting algorithms.
              </p>

              <p className="text-2xl font-bold text-green-400">
                After 17,670 total trials and statistical significance across
                the board.
              </p>
              <p className="text-3xl font-bold text-green-400">It is real.</p>
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
              The Paradox Problem
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>Most algorithms try to converge on a single answer.</p>
              <p>Mine keeps a few contradictions around.</p>
              <p className="text-xl font-semibold text-green-400">
                I call it Paradox Retention.
              </p>

              <p>
                In quantum computing the standard says "use as few operations as
                possible."
              </p>
              <p>
                Mine discovered that sometimes more operations with
                higher-quality components is better.
              </p>

              <p>
                It is like choosing between the shortest route on terrible roads
                or the longer route on a smooth highway.
              </p>
              <p>Traditional algorithms would never pick the second.</p>
              <p className="text-xl font-semibold text-green-400">
                Mine keeps the "weird" options alive. It finds solutions no one
                else sees.
              </p>

              <p className="text-xl font-semibold text-white mt-8">
                That is how I found the planets.
              </p>
              <p>NASA eliminated anything irregular.</p>
              <p>I kept the weird signals.</p>
              <p className="text-xl font-semibold text-green-400">
                And that is where the discoveries were hiding.
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
              What This Actually Means
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl">Forget the planets for a second.</p>
              <p>
                This is a different way to solve problems everyone said were
                unsolvable at scale.
              </p>

              <div className="space-y-4 mt-8">
                <p className="text-xl font-semibold text-green-400">
                  Drug discovery. Hours instead of weeks.
                </p>
                <p className="text-xl font-semibold text-green-400">
                  Logistics. Billions saved.
                </p>
                <p className="text-xl font-semibold text-green-400">
                  AI development. Smarter systems.
                </p>
                <p className="text-xl font-semibold text-green-400">
                  Quantum computing. Years accelerated.
                </p>
                <p className="text-xl font-semibold text-green-400">
                  Space exploration. Planets we already looked at but couldn't
                  see.
                </p>
              </div>

              <p className="text-2xl font-bold text-white mt-8">
                I am not selling you an algorithm.
              </p>
              <p className="text-3xl font-bold text-green-400">
                I am selling you a paradigm shift.
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
              The Question You Are Probably Asking
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl font-semibold text-white">
                "If this is so obvious, why hasn't anyone else done it?"
              </p>

              <p>Because everyone was focused on "How do we search better?"</p>
              <p className="text-xl font-semibold text-green-400">
                No one asked "What if we are searching wrong?"
              </p>

              <p>It is one of those ideas that feels obvious in hindsight.</p>
              <p>But it required stepping outside the frame to see it.</p>

              <p>
                The irony is that I came to this from theology. Not computer
                science.
              </p>
              <p>
                I was studying paradoxes in religious texts. I realized holding
                contradictions without resolving them is how consciousness
                works.
              </p>
              <p className="text-xl font-semibold text-green-400">
                The same principle is what makes the algorithm work.
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
              The Recognition
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>You do not buy technology.</p>
              <p className="text-xl font-semibold text-green-400">
                You buy the world that only exists once it is in your hands.
              </p>

              <p>
                The old paradigm is to try random solutions until something
                works.
              </p>
              <p className="text-xl font-semibold text-green-400">
                The new paradigm is to forget the wrong answers faster than you
                remember the right ones.
              </p>

              <p className="text-2xl font-bold text-white">
                This is not a spaceship.
              </p>
              <p className="text-3xl font-bold text-green-400">
                It is a time machine.
              </p>

              <p>
                Every company and every researcher who adopts this gets 79 years
                of progress back.
              </p>
              <p>They do not have to invent it.</p>
              <p className="text-xl font-semibold text-green-400">
                They just have to use it.
              </p>

              <p className="text-2xl font-bold text-green-400 mt-8">
                And the harder their problem, the bigger their advantage.
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
              The Close
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>Here is the thing about paradigm shifts.</p>
              <p>
                They feel impossible until someone names them. Files them. And
                makes them law.
              </p>
              <p className="text-xl font-semibold text-green-400">
                Then they feel inevitable.
              </p>

              <div className="space-y-4 mt-8">
                <p>
                  I found three planets NASA missed in Their Own Public Data.
                </p>
                <p>I made drug discovery six times faster.</p>
                <p>I beat IBM's quantum compiler.</p>
                <p>I solved a 60-year logistics problem.</p>
              </div>

              <p className="text-2xl font-bold text-white mt-8">
                Same algorithm.
              </p>
              <p className="text-2xl font-bold text-green-400">
                Different applications.
              </p>

              <p className="text-xl font-semibold text-white mt-8">
                If you are reading this and thinking "this is exactly what we
                need," you are right.
              </p>
              <p className="text-xl font-semibold text-white">
                If you are reading this and thinking "this seems too good to be
                true," you are also right.
              </p>

              <p className="text-2xl font-bold text-green-400 mt-8">
                But here is what I know.
              </p>
              <p className="text-xl font-semibold text-green-400">
                The day you do not act is the day someone else does.
              </p>

              <p>
                When you look back in ten years, you will remember this moment.
              </p>
              <p>
                You will remember whether you were inside watching it happen.
              </p>
              <p className="text-3xl font-bold text-green-400">
                Or outside watching it pass you by.
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
              What You Can Do Right Now
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-xl font-semibold text-green-400">
                Researchers: Full manuscript and data available for replication.
              </p>
              <p className="text-xl font-semibold text-green-400">
                Investors: Licensing and partnership discussions are open.
              </p>
              <p className="text-xl font-semibold text-green-400">
                Skeptics: Good. So was I. Run the code.
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
              The One Thing to Remember
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>For 79 years we asked: "How do we search harder?"</p>
              <p className="text-2xl font-bold text-green-400">
                I asked: "What if we forget smarter?"
              </p>

              <p className="text-3xl font-bold text-green-400 mt-8">
                The answer changed everything.
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
            className="text-center space-y-6"
          >
            <div className="space-y-4">
              <p className="text-2xl font-bold text-white">Derek Angell</p>
              <p className="text-lg text-slate-300">
                Founder, CONEXUS Global Arts & Media
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <p className="text-lg font-semibold text-green-400">
                Status: 8 Patents Pending. Manuscript under Peer Review.
              </p>
              <p className="text-lg font-semibold text-green-400">
                Timeline: Conversion deadline June 2026
              </p>
            </div>

            <div className="pt-12 border-t border-slate-700">
              <p className="text-slate-400 italic">
                "People want to be told what to do so badly they'll listen to
                anyone."
              </p>
              <p className="text-slate-400">— Don Draper</p>

              <p className="text-green-400 mt-4">
                But only if they trust you first.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-slate-300">Thank you for reading.</p>
              <p className="text-xl font-semibold text-green-400 mt-2">
                Now go change something.
              </p>
              <p className="text-lg text-white mt-4">— Derek</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Homepage
          </Link>
        </div>
      </section>
    </main>
  );
}
