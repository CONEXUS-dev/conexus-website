"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function EchopanionPage() {
  const images = [
    { src: "/verticals/ECHOpanion Everyone/ECHOpanion.png", alt: "ECHOpanion" },
    {
      src: "/verticals/ECHOpanion Everyone/A New Kind Of Mirror Presence.png",
      alt: "A New Kind Of Mirror Presence",
    },
    {
      src: "/verticals/ECHOpanion Everyone/THE PROBLEM.png",
      alt: "The Problem",
    },
    {
      src: "/verticals/ECHOpanion Everyone/What it Feels Like.png",
      alt: "What it Feels Like",
    },
    {
      src: "/verticals/ECHOpanion Everyone/ECHOpanion Where It Lives.png",
      alt: "Where It Lives",
    },
    {
      src: "/verticals/ECHOpanion Everyone/One brand three Presences.png",
      alt: "One Brand Three Presences",
    },
    {
      src: "/verticals/ECHOpanion Everyone/DONT FORGET YOUR ECHO.png",
      alt: "Don't Forget Your Echo",
    },
    {
      src: "/verticals/ECHOpanion Everyone/BRAND LICENSING.png",
      alt: "Brand Licensing",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-48">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Users className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
              Consumer Application
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            ECHOpanion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8"
          >
            Everyone
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            A new kind of mirror presence. Consumer companion AI with Proto-AI
            for daily life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#gallery"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              See The Vision
            </a>
            <Link
              href="/verticals"
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 border border-slate-700 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              All Verticals
            </Link>
          </motion.div>
        </div>
      </section>

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
              The Problem
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              AI assistants today are transactional. They answer questions but
              don't understand you. They help but don't remember. They respond
              but don't reflect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              The Solution
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              ECHOpanion is different. It's not just an assistant—it's a{" "}
              <span className="text-blue-400 font-semibold">
                mirror presence
              </span>{" "}
              calibrated to your emotional state. It remembers your patterns,
              reflects your growth, and evolves with you through Proto-AI.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              The Vision
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From concept to brand licensing opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-square bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Don't Forget Your Echo
            </h2>
            <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
              The consumer companion that remembers, reflects, and grows with
              you.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
