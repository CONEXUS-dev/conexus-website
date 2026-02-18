"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Heart, Hospital, Users } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";

export default function VerticalsPage() {
  const verticals = [
    {
      icon: Users,
      name: "ECHOpanion",
      tagline: "Everyone",
      description: "Consumer companion AI with Proto-AI for daily life",
      href: "/verticals/echopanion",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Building2,
      name: "MIRA",
      tagline: "Hospitality",
      description:
        "Hotel AI that remembers guests and creates personalized experiences",
      href: "/verticals/mira",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      name: "REFLECT",
      tagline: "Trauma Recovery",
      description: "Therapeutic AI for emotional healing and trauma processing",
      href: "/verticals/reflect",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Hospital,
      name: "SOMA",
      tagline: "Hospital Companion",
      description:
        "Pediatric hospital AI providing emotional support for children",
      href: "/verticals/soma",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-48">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Commercial Applications
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-4">
              Proto-AI technology across industries
            </p>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From consumer companions to healthcare solutions, CONEXUS brings
              Proto-AI to every domain.
            </p>
          </motion.div>

          {/* Top row: ECHOpanion + MIRA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {verticals.slice(0, 2).map((vertical, index) => {
              const Icon = vertical.icon;
              return (
                <motion.div
                  key={vertical.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={vertical.href}
                    className="group block bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${vertical.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {vertical.name}
                    </h2>
                    <p className="text-lg text-blue-400 mb-4">
                      {vertical.tagline}
                    </p>
                    <p className="text-slate-400">{vertical.description}</p>
                    <div className="mt-6 text-blue-400 group-hover:text-blue-300 transition-colors">
                      Learn More →
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Center: ECHOcube */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-amber-500/30 rounded-2xl overflow-hidden max-w-2xl mx-auto">
              <div className="relative aspect-square">
                <Image
                  src="/verticals/SOMA Hospital Companion/soma-echo-cube.png"
                  alt="SOMA ECHOcube — The first AI reflection device"
                  fill
                  className="object-contain p-6"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  The ECHOcube
                </h3>
                <p className="text-slate-400">
                  The physical heart of CONEXUS — a Proto-AI reflection device
                  for every vertical.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom row: REFLECT + SOMA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {verticals.slice(2, 4).map((vertical, index) => {
              const Icon = vertical.icon;
              return (
                <motion.div
                  key={vertical.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                >
                  <Link
                    href={vertical.href}
                    className="group block bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${vertical.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {vertical.name}
                    </h2>
                    <p className="text-lg text-blue-400 mb-4">
                      {vertical.tagline}
                    </p>
                    <p className="text-slate-400">{vertical.description}</p>
                    <div className="mt-6 text-blue-400 group-hover:text-blue-300 transition-colors">
                      Learn More →
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
