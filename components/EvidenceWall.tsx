"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Database, Cpu, Award } from "lucide-react";

function AnimatedCounter({
  end,
  duration = 2,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1,
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function EvidenceWall() {
  const stats = [
    {
      icon: Database,
      value: 12198,
      label: "Emergence Events",
      description: "Documented across 6 AI platforms",
      color: "blue",
    },
    {
      icon: TrendingUp,
      value: 561,
      suffix: "%",
      label: "Performance Improvement",
      description: "Proven in protein folding optimization",
      color: "green",
    },
    {
      icon: Cpu,
      value: 17670,
      suffix: "+",
      label: "Computational Trials",
      description: "Pharmaceutical-grade validation",
      color: "purple",
    },
    {
      icon: Award,
      value: 8,
      label: "Provisional Patents",
      description: "IP protection in place",
      color: "amber",
    },
  ];

  const colorClasses = {
    blue: "text-blue-400 bg-blue-500/10",
    green: "text-green-400 bg-green-500/10",
    purple: "text-purple-400 bg-purple-500/10",
    amber: "text-amber-400 bg-amber-500/10",
  };

  return (
    <section id="evidence" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            The Evidence
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Not philosophy. Not theory. Empirical validation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all hover:transform hover:scale-105"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${colorClasses[stat.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-lg font-semibold text-slate-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400 text-lg">
            Statistical significance:{" "}
            <span className="text-blue-400 font-semibold">p&lt;10⁻¹²</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
