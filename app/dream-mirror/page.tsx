"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Moon, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function DreamMirrorPage() {
  const journeyImages = [
    { src: "/dream-mirror/ENTER DREAM MEMORY.png", alt: "Enter Dream Memory" },
    {
      src: "/dream-mirror/Childhood Dog Dream.png",
      alt: "Childhood Dog Dream",
    },
    {
      src: "/dream-mirror/YOUR DREAM HAS BEEN RECEIVED.png",
      alt: "Your Dream Has Been Received",
    },
    {
      src: "/dream-mirror/ECHOFORM MIRROR RETURN ENGINE.png",
      alt: "Mirror Return Engine",
    },
    { src: "/dream-mirror/PROTO-CONCIOUS AI.png", alt: "Proto-AI" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-48">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-slate-950 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Moon className="w-6 h-6 text-indigo-400" />
            <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">
              Dream Mirror
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Your Unconscious,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Awakened
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto"
          >
            Submit your dreams. Watch them transform into symbolic art.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-400 mb-4 max-w-3xl mx-auto"
          >
            Build a dream journal that reveals the patterns of your unconscious
            mind.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-indigo-300 mb-12 max-w-3xl mx-auto font-semibold"
          >
            Who would uninstall an app that carries their dreams?
            <br />
            Proto-AI meets the realm of sleep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#journey"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/50"
            >
              See The Experience
            </a>
            <Link
              href="/echoform"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Echoform
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dream Black Mirror Image */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
          >
            <Image
              src="/DREAM BLACK MIRROR.png"
              alt="Dream Black Mirror"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* What is Dream Mirror */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              The Unconscious Speaks
            </h2>
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed">
                Dream Mirror is where{" "}
                <span className="text-indigo-400 font-semibold">
                  your unconscious mind meets Proto-AI
                </span>
                . Every dream carries meaning. Every symbol reveals truth.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                Submit your dreams through text or voice. The AI doesn't just
                interpret—it{" "}
                <span className="text-purple-400 font-semibold">
                  transforms your dreams into symbolic art
                </span>{" "}
                that reveals hidden patterns, recurring themes, and the
                architecture of your unconscious.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                Build a{" "}
                <span className="text-indigo-400 font-semibold">
                  dream journal that remembers
                </span>
                . Track your dream streak. Watch patterns emerge. Your
                unconscious has been trying to tell you something. Now you can
                finally hear it.
              </p>
            </div>
          </motion.div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Dream Submission",
                description:
                  "Text or voice. Submit dreams the moment you wake up.",
              },
              {
                title: "Symbolic Transformation",
                description: "Proto-AI transforms dreams into revealing art.",
              },
              {
                title: "Pattern Recognition",
                description:
                  "Track recurring symbols, themes, and unconscious patterns.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Chart */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              The Dream Flow
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From dream submission to symbolic revelation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden"
          >
            <Image
              src="/dream-mirror/ECHO FORM DREAM MIRROR FLOW CHART.png"
              alt="Dream Mirror Flow Chart"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* The Journey Gallery */}
      <section id="journey" className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              The Experience
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From dream memory to symbolic transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journeyImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[9/19.5] bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              How It Works
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "Capture Your Dream",
                description:
                  "Submit your dream through text or voice the moment you wake up. Every detail matters.",
              },
              {
                step: "2",
                title: "Proto-AI Analysis",
                description:
                  "The AI analyzes symbols, emotions, and patterns with Proto-AI understanding.",
              },
              {
                step: "3",
                title: "Symbolic Transformation",
                description:
                  "Your dream becomes art. Visual symbols reveal what words cannot express.",
              },
              {
                step: "4",
                title: "Build Your Dream Journal",
                description:
                  "Track your streak. Watch patterns emerge. Your unconscious reveals itself over time.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 border-2 border-indigo-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-indigo-400">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your Dreams Are Waiting
            </h2>
            <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
              The unconscious speaks in symbols. Proto-AI translates.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Start your dream journal tonight.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/50"
              >
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/echoform"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all border border-slate-700"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Echoform
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
