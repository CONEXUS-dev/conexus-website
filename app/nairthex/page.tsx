"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  BookOpen,
  Mic,
  MessageSquare,
  Lock,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";

export default function NairthexPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Contemplative Conversation",
      description:
        "Guided reflection grounded in Scripture and tradition. The Narthex doesn't preach — it listens, mirrors, and holds space for meaning to emerge.",
    },
    {
      icon: Mic,
      title: "Voice & Text",
      description:
        "Speak or type. Voice input is transcribed via Whisper and processed with the same contemplative care as text. Both modes open the same reflective space.",
    },
    {
      icon: Shield,
      title: "Sovereign Governance",
      description:
        "Powered by the CONEXUS Sovereign engine. Every response is governed by deterministic operators that prevent sycophancy, hold paradox, and preserve theological integrity.",
    },
    {
      icon: Lock,
      title: "Session-Aware & Private",
      description:
        "Each session is isolated with JWT authentication and Redis-backed state. No cross-session data leakage. 4-hour TTL. Full audit trail per session.",
    },
    {
      icon: BookOpen,
      title: "Biblical Mirror Tiers",
      description:
        "A tiered reflection system that deepens over time — from surface acknowledgment to scriptural resonance to paradox-holding contemplation.",
    },
    {
      icon: Eye,
      title: "Guardrailed & Observable",
      description:
        "Built-in guardrails prevent harmful outputs. Every interaction is auditable. The system is transparent about what it is and what it isn't.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/30 border border-amber-700/50 rounded-full text-amber-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            CONEXUS Vertical — Safe Church AI
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            NAiRTHEX
          </h1>
          <p className="text-2xl text-slate-300 mb-2">
            Safe Church AI by CONEXUS
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8 italic">
            A Safe Church AI vertical — a contemplative companion built for
            faith communities. It listens, mirrors, and holds space for deeper
            reflection, powered by Sovereign governance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://the-narthex.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all text-lg shadow-lg shadow-amber-500/20"
            >
              <ExternalLink className="w-5 h-5" />
              Enter The Narthex
            </a>
            <Link
              href="/observer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full transition-all text-lg border border-slate-600"
            >
              <Eye className="w-5 h-5" />
              View Sovereign Observer
            </Link>
          </div>
        </motion.div>

        {/* What is The Narthex */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              What is The Narthex?
            </h2>
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                In church architecture, the <em>narthex</em> is the threshold
                space — the entryway between the outside world and the sacred
                interior. You stand there before you commit to entering. It is a
                place of pause, of preparation, of quiet decision.
              </p>
              <p>
                <strong className="text-white">NAiRTHEX by CONEXUS</strong> is a
                Safe Church AI vertical — a digital narthex designed for faith
                communities who need a contemplative companion that prioritizes
                reflection over answers. It doesn&apos;t tell you what to think.
                It holds space for you to think more deeply.
              </p>
              <p>
                Unlike conventional chatbots that optimize for user satisfaction
                and quick resolution, The Narthex is built on CONEXUS Sovereign
                governance — the same architecture that holds 84 paradoxes
                without collapsing them. It mirrors this capacity in
                conversation: sitting with tension, honoring complexity, and
                refusing to simplify what should remain whole.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Design Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="bg-amber-900/10 border border-amber-800/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-amber-400 mb-6">
              Design Philosophy
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div className="space-y-3">
                <p>Every element must feel calm, spacious, and invitational.</p>
                <p>Nothing behaves like a call-to-action.</p>
                <p>Motion feels like ambient light, not UI feedback.</p>
              </div>
              <div className="space-y-3">
                <p>The button is a threshold, not a prompt.</p>
                <p>Silence and stillness are part of the interface.</p>
                <p>Text is readable for all ages without becoming loud.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Capabilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
                >
                  <Icon className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Technical Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Technical Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                Frontend
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>React + Vite + Tailwind CSS</li>
                <li>Framer Motion animations</li>
                <li>Crimson Text + Inter typography</li>
                <li>Voice input via MediaRecorder API</li>
                <li>JWT session management</li>
              </ul>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                Backend
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>FastAPI (Python 3.11)</li>
                <li>Redis-backed session state (4hr TTL)</li>
                <li>OpenAI Whisper transcription</li>
                <li>CONEXUS Sovereign governance engine</li>
                <li>Per-session audit logging</li>
              </ul>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                Governance
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Biblical Mirror Tiers (depth-aware reflection)</li>
                <li>Guardrails against harmful content</li>
                <li>Anti-sycophancy operators</li>
                <li>Deterministic veto system</li>
                <li>Full audit trail per session</li>
              </ul>
            </div>
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">
                Deployment
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>Hosted on Render (auto-deploy from main)</li>
                <li>Static frontend served by FastAPI</li>
                <li>Redis Cloud for session persistence</li>
                <li>Zero-downtime deployments</li>
                <li>Continuous integration via GitHub</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-900/20 to-amber-800/10 border border-amber-700/30 rounded-2xl p-12 max-w-3xl mx-auto">
            <p className="text-2xl text-white font-semibold mb-4">
              Step into the threshold.
            </p>
            <p className="text-slate-400 mb-8">
              The Narthex is live and waiting. No account required.
            </p>
            <a
              href="https://the-narthex.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all text-lg shadow-lg shadow-amber-500/20"
            >
              <ExternalLink className="w-5 h-5" />
              Enter The Narthex
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
