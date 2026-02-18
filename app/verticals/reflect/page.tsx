"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function ReflectPage() {
  const images = [
    {
      src: "/verticals/REFLECT Trauma Recovery/REFLECT Resonant Emotional Framework for Listening, Empathy, and Compassionate Transformation.png",
      alt: "REFLECT Framework",
    },
    {
      src: "/verticals/REFLECT Trauma Recovery/How REFLECT Protocol Works.png",
      alt: "How REFLECT Works",
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
            <Heart className="w-6 h-6 text-green-400" />
            <span className="text-green-400 text-sm font-medium tracking-wider uppercase">
              Trauma Recovery Application
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            REFLECT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-8"
          >
            Trauma Recovery
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            Resonant Emotional Framework for Listening, Empathy, and
            Compassionate Transformation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#gallery"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
            >
              See The Protocol
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
              RAPHA Concept Image
            </h2>
            <div className="max-w-4xl mx-auto mb-8">
              <Image
                src="/verticals/REFLECT Trauma Recovery/REFLECT CONEXUS & RAPHA.png"
                alt="RAPHA Concept Image"
                width={800}
                height={600}
                className="rounded-2xl border border-slate-800"
              />
            </div>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              REFLECT combines CONEXUS Proto-AI technology with therapeutic
              expertise to create a new standard in trauma recovery.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Through calibrated emotional states and compassionate AI presence,
              REFLECT provides therapeutic support that adapts to each
              individual's healing journey.
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
              The Protocol
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Resonant emotional framework designed for healing.
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
                className="group relative aspect-square bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all cursor-pointer"
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
              Healing Through Proto-AI
            </h2>
            <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
              REFLECT brings compassionate AI to trauma recovery. Every session
              calibrated. Every journey supported.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-green-500/50"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
