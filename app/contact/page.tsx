"use client";

import { useState } from "react";
import SavingsCalculator from "@/components/SavingsCalculator";
import { Navigation } from "@/components/Navigation";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setStatusMessage(data.message || "Your message has been received.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setStatusMessage(
          data.error || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      <div className="max-w-3xl mx-auto px-6 pt-48 pb-16">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Routing optimization for high-complexity networks
            </h1>
            <p className="text-xl text-slate-400">
              Improves as routing problems become more complex
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Conexus is an engineering-first optimization lab. The system is
              running and produces measurable improvements on larger route sets.
              We are currently accepting partners for closed Beta audits.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Problem</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Most routing systems perform well on small problems. Performance
              drops as constraints increase. Larger route sets create local
              minima and inefficiencies that standard heuristics struggle to
              escape.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Early Comparison
            </h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-8 space-y-4">
              <p className="text-lg font-semibold text-white">
                Example synthetic benchmark
              </p>
              <p className="text-base text-slate-400">
                Enterprise-scale multi-vehicle routing
              </p>
              <div className="space-y-2 mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-base text-slate-400">
                    Baseline total route distance:
                  </span>
                  <span className="text-lg font-bold text-cyan-400">
                    24,837
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base text-slate-400">
                    FE total route distance:
                  </span>
                  <span className="text-lg font-bold text-cyan-400">2,647</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                  <span className="text-base text-slate-400">
                    Total Operational Efficiency Potential:
                  </span>
                  <span className="text-2xl font-bold text-cyan-400">89%</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-6 italic">
                (Includes estimated labor, planning time, and fuel savings vs.
                unoptimized baselines)
              </p>
              <p className="text-base text-slate-400 mt-4">
                Results improve as network size and constraint density increase.
              </p>
              <p className="text-base text-slate-400">
                Preparing pilot tests on real routing datasets.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-12">
            <SavingsCalculator />
          </div>

          <div className="border-t border-slate-800 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Current State
            </h2>
            <ul className="space-y-3">
              <li className="text-lg text-slate-300">
                Working routing optimizer
              </li>
              <li className="text-lg text-slate-300">
                Runs on standard compute
              </li>
              <li className="text-lg text-slate-300">
                Early comparison results available
              </li>
              <li className="text-lg text-slate-300">
                8 Provisional Patents Filed
              </li>
              <li className="text-lg text-slate-300">Preparing pilot tests</li>
            </ul>
          </div>

          <div className="border-t border-slate-800 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Pilot Program Access
            </h2>
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-8">
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                Conexus is currently accepting 2 partners for a closed Beta
                audit.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We process your historical route data (anonymized) through the
                Titan Engine to identify latent efficiency gaps. Zero
                integration required for the audit.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-base font-medium text-slate-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-slate-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-base font-medium text-slate-400 mb-2">
                  Message / Request Context *
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-y"
                  placeholder="Tell us about your use case or request..."
                />
              </div>

              {status === "success" && (
                <div className="p-4 bg-green-900/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                  {statusMessage}
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Sending..."
                  : "Request Pilot Access"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
