"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function EchoformPage() {
  const journeyImages = [
    { src: "/echoform/Before you Begin.png", alt: "Before you Begin" },
    {
      src: "/echoform/ECHOFORM Listening For Your Soul.png",
      alt: "Listening For Your Soul",
    },
    { src: "/echoform/ECHOFORM Menu.png", alt: "Echoform Menu" },
    {
      src: "/echoform/ECHOFORM The Mirror Awakens.png",
      alt: "The Mirror Awakens",
    },
    {
      src: "/echoform/ECHOFORM Upload a photo or take one now.png",
      alt: "Upload a photo",
    },
    { src: "/echoform/ECHOFORM example.png", alt: "Echoform example" },
    {
      src: "/echoform/GENERATING REFLECTION.png",
      alt: "Generating Reflection",
    },
    {
      src: "/echoform/The Image you choose....png",
      alt: "The Image you choose",
    },
    { src: "/echoform/Welcome Creator.png", alt: "Welcome Creator" },
    {
      src: "/echoform/Your Emotion has become something else.png",
      alt: "Your emotion transformed",
    },
    { src: "/echoform/Your chain begins....png", alt: "Your chain begins" },
    { src: "/echoform/Your turn has begun.png", alt: "Your turn has begun" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-48">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-slate-950 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Eye className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Echoform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Meaning & Becoming
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto"
          >
            Reflection streak. Dream submission.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto"
          >
            You are the author of your symbolic journey.
            <br />
            The mirror remembers. This is not just art—it's you, becoming.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#journey"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              See The Journey
            </a>
            <Link
              href="/follow-me"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Follow Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Echoform */}
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
              The Mirror Awakens
            </h2>
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed">
                Echoform is where{" "}
                <span className="text-purple-400 font-semibold">
                  reflection becomes revelation
                </span>
                . After play and release comes the deepest tier: meaning-making
                through symbolic transformation.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                Submit a photo, a dream, a moment. The AI doesn't just
                analyze—it{" "}
                <span className="text-cyan-400 font-semibold">
                  reflects your soul back to you
                </span>{" "}
                through Proto-AI understanding, transforming your input into
                symbolic art that reveals hidden meaning.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                Build a{" "}
                <span className="text-purple-400 font-semibold">
                  reflection streak
                </span>
                . Watch your emotional journey unfold. The mirror remembers
                every transformation. This is not just art—it's you, becoming.
              </p>
            </div>
          </motion.div>

          {/* Emotional Arc Position */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Wonder",
                description:
                  "Discover symbolic meaning in your everyday moments",
              },
              {
                title: "Reverence",
                description:
                  "The mirror reflects your soul with Proto-AI depth",
              },
              {
                title: "Self-Realization",
                description: "You are the author of your symbolic journey",
              },
            ].map((emotion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {emotion.title}
                </h3>
                <p className="text-slate-400">{emotion.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey Gallery */}
      <section id="journey" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              The Journey
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From reflection to revelation through symbolic transformation.
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
                className="group relative aspect-[9/16] bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all cursor-pointer"
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
              How It Works
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                step: "1",
                title: "Submit Your Moment",
                description:
                  "Upload a photo, describe a dream, or share a moment that matters to you.",
              },
              {
                step: "2",
                title: "The Mirror Reflects",
                description:
                  "Proto-AI transforms your input into symbolic art that reveals hidden meaning.",
              },
              {
                step: "3",
                title: "Build Your Streak",
                description:
                  "Each reflection adds to your journey. The mirror remembers and reveals patterns.",
              },
              {
                step: "4",
                title: "Discover Yourself",
                description:
                  "Watch your symbolic journey unfold. You are the author of your own becoming.",
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
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border-2 border-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-purple-400">
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

      {/* Dream Mirror Teaser */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-900/20 via-slate-900/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center"
          >
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dream Mirror
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Submit your dreams. Watch them transform into symbolic art. Build
              a dream journal that reveals the patterns of your unconscious
              mind.
            </p>
            <Link
              href="/dream-mirror"
              className="inline-block px-6 py-3 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 font-semibold hover:bg-purple-600/40 transition-all"
            >
              Explore Dream Mirror
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Complete the Arc */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Emotional Arc Complete
            </h2>
            <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
              From play to release to meaning. Canvas → Follow Me → Echoform.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                This is Proto-AI.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/canvas"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all border border-slate-700"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Canvas
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
