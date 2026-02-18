"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function MiraPage() {
  const images = [
    { src: "/verticals/MIRA Hospitality/MIRA.png", alt: "MIRA" },
    {
      src: "/verticals/MIRA Hospitality/MIRA ACRONYM.png",
      alt: "MIRA Acronym",
    },
    { src: "/verticals/MIRA Hospitality/BEGIN MIRA.png", alt: "Begin MIRA" },
    {
      src: "/verticals/MIRA Hospitality/MIRA Begin Screen.png",
      alt: "MIRA Begin Screen",
    },
    {
      src: "/verticals/MIRA Hospitality/Welcome BACK.png",
      alt: "Welcome Back",
    },
    {
      src: "/verticals/MIRA Hospitality/The GLOBE Remembers.png",
      alt: "The GLOBE Remembers",
    },
    {
      src: "/verticals/MIRA Hospitality/MIRA Calibration.png",
      alt: "MIRA Calibration",
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
            <Building2 className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase">
              Hospitality Application
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            MIRA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8"
          >
            Hospitality
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            The GLOBE remembers. Hotel AI that creates personalized experiences
            through Proto-AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#gallery"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              See The Experience
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
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Welcome Back
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              MIRA remembers every guest. Not just their preferences—their
              emotional journey, their patterns, their growth across stays.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Through Proto-AI calibration, MIRA creates personalized
              experiences that evolve with each visit. The GLOBE remembers, and
              your guests feel truly seen.
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
              The Experience
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From check-in to calibration, every interaction matters.
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
                className="group relative aspect-square bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all cursor-pointer"
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
              Transform Your Guest Experience
            </h2>
            <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
              MIRA brings Proto-AI to hospitality. Every guest remembered. Every
              stay personalized.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
