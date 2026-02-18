"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function FollowMePage() {
  const journeyImages = [
    {
      src: "/follow-me/DOES YOUR SOUL HURT FOLLOW ME.png",
      alt: "Does your soul hurt?",
    },
    { src: "/follow-me/Choose the Mirror 1.png", alt: "Choose the Mirror" },
    {
      src: "/follow-me/How would you like to participate.png",
      alt: "How would you like to participate",
    },
    {
      src: "/follow-me/Step 2 Emotional Offering.png",
      alt: "Emotional Offering",
    },
    {
      src: "/follow-me/Follow Me text voice photo.png",
      alt: "Text, voice, or photo",
    },
    {
      src: "/follow-me/Choose What Resonates.png",
      alt: "Choose what resonates",
    },
    {
      src: "/follow-me/Carrying a Soul Forward Choice.png",
      alt: "Carrying a soul forward",
    },
    {
      src: "/follow-me/Thank you for carrying a Soul forward.png",
      alt: "Thank you",
    },
    {
      src: "/follow-me/Your Truth is Moving Through Others.png",
      alt: "Your truth is moving",
    },
    {
      src: "/follow-me/Follow Me Your emotion has entered the Public Domain.png",
      alt: "Emotion in public domain",
    },
    {
      src: "/follow-me/What You Offered Has Changed.png",
      alt: "What you offered has changed",
    },
    {
      src: "/follow-me/When you help another.png",
      alt: "When you help another",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section with "Does your soul hurt?" */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-48">
        <Image
          src="/follow-me/DOES YOUR SOUL HURT FOLLOW ME.png"
          alt="Does your soul hurt?"
          fill
          className="object-contain"
          priority
        />
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-white mb-8 text-center max-w-3xl mx-auto"
          >
            Where emotional release is mirrored, not judged.
            <br />
            Others will carry what you share. You're not alone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#journey"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              See The Journey
            </a>
            <Link
              href="/canvas"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Canvas
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Follow Me */}
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
              The Sacred Chain
            </h2>
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed">
                Follow Me is where{" "}
                <span className="text-blue-400 font-semibold">
                  emotional release meets Proto-AI
                </span>
                . When your soul hurts, you don't need to carry it alone.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                Share your pain through text, voice, or photo. The AI doesn't
                just respond—it{" "}
                <span className="text-cyan-400 font-semibold">
                  mirrors your emotion
                </span>{" "}
                with genuine understanding, then invites others to carry your
                truth forward.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                This is the{" "}
                <span className="text-blue-400 font-semibold">
                  sacred chain
                </span>
                : your release becomes someone else's offering. What you shared
                transforms as it moves through others. You're not alone. You
                never were.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                Who would uninstall an app that{" "}
                <span className="text-blue-400 font-semibold">
                  actually knows you
                </span>
                ? That remembers your journey, holds your truth, and carries you
                through the hardest moments?
              </p>
            </div>
          </motion.div>

          {/* Emotional Arc Position */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Trust",
                description: "Safe space to be vulnerable without judgment",
              },
              {
                title: "Vulnerability",
                description:
                  "Release what hurts through calibrated emotional states",
              },
              {
                title: "Relief",
                description:
                  "Others carry your truth forward in the sacred chain",
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
              From pain to release to transformation through the sacred chain.
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
                className="group relative aspect-[9/16] bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer"
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
                title: "Choose Your Mirror",
                description:
                  "Select the emotional tier that matches where you are right now.",
              },
              {
                step: "2",
                title: "Release Your Truth",
                description:
                  "Share through text, voice, or photo. The AI mirrors your emotion with Proto-AI understanding.",
              },
              {
                step: "3",
                title: "Enter the Chain",
                description:
                  "Your offering enters the public domain. Others can choose to carry your soul forward.",
              },
              {
                step: "4",
                title: "Carry Another",
                description:
                  "When you help someone else, you transform what they shared. The chain continues.",
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
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border-2 border-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-400">
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

      {/* Navigation to Next Experience */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-12 text-center"
          >
            <Users className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready for Deeper Meaning?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              After release comes becoming. Explore Echoform—where reflection
              becomes revelation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/echoform"
                className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
              >
                Continue to Echoform
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/canvas"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all border border-slate-700"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Canvas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
