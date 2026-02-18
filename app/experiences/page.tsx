"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import Link from "next/link";
import { Palette, Compass, Sparkles } from "lucide-react";

export default function ExperiencesPage() {
  const experiences = [
    {
      title: "Canvas",
      subtitle: "Creative Workspace",
      description:
        "A collaborative creative environment where ideas flow freely. Build, iterate, and refine your creative projects with AI-assisted tools designed for seamless collaboration.",
      icon: Palette,
      href: "/canvas",
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-900/20 to-pink-900/20",
    },
    {
      title: "Follow Me",
      subtitle: "Guided Journeys",
      description:
        "Embark on curated emotional journeys through calibrated states. Experience the Sacred Chain where your release becomes someone else's offering.",
      icon: Compass,
      href: "/follow-me",
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
    },
    {
      title: "Echoform",
      subtitle: "Deep Reflection",
      description:
        "Explore meaning and becoming through symbolic reflection. A space for profound introspection and understanding your emotional landscape.",
      icon: Sparkles,
      href: "/echoform",
      color: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-900/20 to-purple-900/20",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              The CONEXUS Experience
            </h1>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-bold mb-8">
              Three Integrated Experiences
            </p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Creative collaboration, guided journeys, and deep symbolic
              reflection through calibrated emotional states.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Link href={experience.href}>
                    <div
                      className={`group relative bg-gradient-to-br ${experience.bgGradient} backdrop-blur-sm border-2 border-slate-800 hover:border-slate-600 rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 cursor-pointer`}
                    >
                      {/* Icon */}
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${experience.color} mb-6`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h2
                        className={`text-3xl font-bold mb-2 bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}
                      >
                        {experience.title}
                      </h2>

                      {/* Subtitle */}
                      <p className="text-lg font-semibold text-slate-400 mb-4">
                        {experience.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed mb-6">
                        {experience.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                        <span>Explore</span>
                        <span className="text-2xl">→</span>
                      </div>

                      {/* Hover Glow Effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/50 border-2 border-slate-800 rounded-2xl p-10"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              20 Mirror Tiers
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Each experience is calibrated through our proprietary Emotional
              Calibration Protocol (ECP), creating a unique journey tailored to
              your emotional state and creative needs.
            </p>
            <Link
              href="/#technology"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full transition-all transform hover:scale-105"
            >
              Learn About the Technology
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
