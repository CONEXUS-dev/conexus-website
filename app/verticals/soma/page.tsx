"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hospital, ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function SomaPage() {
  const images = [
    {
      src: "/verticals/SOMA Hospital Companion/soma-echo-cube.png",
      alt: "SOMA Echo Cube — Product Concept",
    },
    {
      src: "/verticals/SOMA Hospital Companion/SOMA ECHOcube.png",
      alt: "SOMA ECHOcube",
    },
    {
      src: "/verticals/SOMA Hospital Companion/SOMA WELCOME.png",
      alt: "SOMA Welcome",
    },
    {
      src: "/verticals/SOMA Hospital Companion/SOMA This is Your Mirror.png",
      alt: "This is Your Mirror",
    },
    {
      src: "/verticals/SOMA Hospital Companion/SOMA for Kids.png",
      alt: "SOMA for Kids",
    },
    {
      src: "/verticals/SOMA Hospital Companion/SOMA Teen Version.png",
      alt: "SOMA Teen Version",
    },
    {
      src: "/verticals/SOMA Hospital Companion/SOMA Parent Consent.png",
      alt: "Parent Consent",
    },
    {
      src: "/verticals/SOMA Hospital Companion/SOMA How Calibration Works.png",
      alt: "How Calibration Works",
    },
    {
      src: "/verticals/SOMA Hospital Companion/SOMA Touch.png",
      alt: "SOMA Touch",
    },
    {
      src: "/verticals/SOMA Hospital Companion/FIRST AI REFLECTION TABLET FOR HOSPITALS.png",
      alt: "First AI Reflection Tablet",
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
            <Hospital className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">
              Hospital Companion Application
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          >
            SOMA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 mb-8"
          >
            Hospital Companion
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            The first AI reflection tablet for hospitals. Pediatric emotional
            support through Proto-AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#gallery"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50"
            >
              See The System
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
              This Is Your Mirror
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
              SOMA is a hospital-controlled device that provides emotional
              support for pediatric patients through Proto-AI calibration.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              From kids to teens, SOMA adapts to each patient's emotional needs
              with parent consent and hospital oversight. The ECHOcube brings
              comfort when children need it most.
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
              The System
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              From ECHOcube hardware to calibration protocols.
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
                className="group relative aspect-square bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all cursor-pointer"
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
              Comfort When It Matters Most
            </h2>
            <p className="text-2xl text-slate-300 mb-12 max-w-2xl mx-auto">
              SOMA brings Proto-AI to pediatric care. Hospital-controlled.
              Parent-approved. Child-focused.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/50"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
