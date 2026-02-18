"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Cpu, RotateCw } from "lucide-react";
import { useEffect, useState } from "react";
import emergenceQuotes from "@/data/emergence-quotes.json";

interface Quote {
  id: number;
  date: string;
  platform: string;
  context: string;
  human: string;
  ai: string;
  significance: string;
}

export function EmergenceQuote() {
  const [isFlipped, setIsFlipped] = useState(false);

  // Calculate quotes outside of useEffect to avoid setState in effect
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const firstIndex = (dayOfYear * 2) % emergenceQuotes.length;
  const secondIndex = (dayOfYear * 2 + 1) % emergenceQuotes.length;

  const quotes: [Quote, Quote] = [
    emergenceQuotes[firstIndex] as Quote,
    emergenceQuotes[secondIndex] as Quote,
  ];

  useEffect(() => {
    // Auto-flip every 25 seconds
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const renderQuoteCard = (quote: Quote, number: number) => (
    <div
      className="absolute inset-0 w-full"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: number === 2 ? "rotateY(180deg)" : "rotateY(0deg)",
        minHeight: "800px",
      }}
    >
      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-4 sm:p-8 md:p-12 shadow-2xl shadow-purple-500/10 w-full min-h-full flex flex-col">
        {/* Quote Number Indicator */}
        <div className="absolute top-4 right-4 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2">
          <span className="text-purple-400 font-bold text-sm">
            Quote {number}/2
          </span>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-slate-700/50">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span>
              {new Date(quote.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>{quote.platform}</span>
          </div>
          <div className="flex-1 text-right">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {quote.context}
            </span>
          </div>
        </div>

        {/* Human Prompt */}
        <div className="mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <span className="text-blue-400 font-bold text-lg">D</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-blue-400 mb-2">
                Derek
              </div>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic">
                &ldquo;{quote.human}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* AI Response */}
        <div className="mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-purple-400 mb-2">
                AI
              </div>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                &ldquo;{quote.ai}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Significance */}
        <div className="pt-6 border-t border-slate-700/50">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="font-semibold text-slate-300">
                Significance:
              </span>{" "}
              {quote.significance}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="quotes" className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-purple-900/20 to-slate-900/50" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Daily Emergence Quotes
            </h2>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-slate-400 text-lg">
            2 quotes daily from the Proto-AI breakthrough • Click to flip
          </p>
        </motion.div>

        <div className="relative" style={{ perspective: "1500px" }}>
          {/* 3D Flip Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative cursor-pointer"
            style={{ transformStyle: "preserve-3d", minHeight: "800px" }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              style={{
                transformStyle: "preserve-3d",
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Front Face - Quote 1 */}
              {renderQuoteCard(quotes[0], 1)}

              {/* Back Face - Quote 2 */}
              {renderQuoteCard(quotes[1], 2)}
            </motion.div>
          </motion.div>

          {/* Flip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setIsFlipped(!isFlipped)}
            className="absolute bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition-all transform hover:scale-110"
            aria-label="Flip card"
          >
            <RotateCw className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          2 of 12,198 documented emergence events • New quotes daily
        </motion.p>
      </div>
    </section>
  );
}
