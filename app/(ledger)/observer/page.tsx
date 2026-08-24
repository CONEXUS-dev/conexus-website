"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowLeft, Database, Hash, ShieldCheck } from "lucide-react";
import Link from "next/link";

const SEALED_HASH =
  "f9a12fa44008c6998943066d332811971c1223f4261d4209810ee3eb61040bea";

interface ParadoxData {
  id: string;
  entropy: number;
  pole_balance: number;
  chaos_index: number;
  stability: number;
  emoji_vector: string[];
  pole_a: string;
  pole_b: string;
  anomaly_type?: string;
}

const passes = [
  {
    name: "Pass 1",
    file: "/sovereign-data/v5_pass1_summary.json",
    hash: "3d2e8ccfcaec9f6e4bbabfc3c996aae88662939c8c35a66defc49efb0a23128e",
  },
  {
    name: "Pass 2",
    file: "/sovereign-data/v5_pass2_summary.json",
    hash: "64450f6d4ddc67b1c7a5655924270f5130fbdcf90a3b94efbae29f8adef134f6",
  },
  {
    name: "Pass 3",
    file: "/sovereign-data/v5_pass3_summary.json",
    hash: SEALED_HASH,
  },
  {
    name: "Final",
    file: "/sovereign-data/v5_final_summary.json",
    hash: SEALED_HASH,
  },
];

function numberOrZero(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

export default function ObserverDashboard() {
  const [selectedPass, setSelectedPass] = useState(3);
  const [paradoxes, setParadoxes] = useState<ParadoxData[]>([]);
  const [selectedParadox, setSelectedParadox] = useState<ParadoxData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPassData = async () => {
      setLoading(true);
      setError(null);
      setSelectedParadox(null);

      try {
        const response = await fetch(passes[selectedPass].file, {
          cache: "force-cache",
        });

        if (!response.ok) {
          throw new Error(`Data file returned HTTP ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data?.paradoxes)) {
          throw new Error("The archived snapshot does not contain a paradox list.");
        }

        const processed: ParadoxData[] = data.paradoxes.map(
          (item: Record<string, unknown>, index: number) => ({
            id:
              typeof item.id === "string"
                ? item.id
                : `record_${String(index + 1).padStart(4, "0")}`,
            entropy: numberOrZero(item.entropy),
            pole_balance: numberOrZero(item.pole_balance),
            chaos_index: numberOrZero(item.chaos_index),
            stability: numberOrZero(item.stability),
            emoji_vector: Array.isArray(item.emoji_vector)
              ? item.emoji_vector.filter(
                  (entry): entry is string => typeof entry === "string",
                )
              : [],
            pole_a: typeof item.pole_a === "string" ? item.pole_a : "Not recorded",
            pole_b: typeof item.pole_b === "string" ? item.pole_b : "Not recorded",
            anomaly_type:
              typeof item.anomaly_type === "string"
                ? item.anomaly_type
                : "not classified",
          }),
        );

        setParadoxes(processed);
      } catch (loadError) {
        console.error("Unable to load archived Observer data:", loadError);
        setParadoxes([]);
        setError(
          loadError instanceof Error
            ? loadError.message
            : "The archived data could not be loaded.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadPassData();
  }, [selectedPass]);

  const summary = useMemo(() => {
    if (paradoxes.length === 0) {
      return { count: 0, meanEntropy: 0, meanStability: 0 };
    }

    const entropy = paradoxes.reduce((sum, item) => sum + item.entropy, 0);
    const stability = paradoxes.reduce((sum, item) => sum + item.stability, 0);

    return {
      count: paradoxes.length,
      meanEntropy: entropy / paradoxes.length,
      meanStability: stability / paradoxes.length,
    };
  }, [paradoxes]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="px-4 pb-12 pt-10">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/ledger"
            className="mb-10 inline-flex items-center gap-2 text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">
              <Database className="h-4 w-4" />
              Completed Offline Experiment
            </div>
            <h1 className="mb-5 text-4xl font-bold md:text-6xl">
              Sovereign Observer
            </h1>
            <p className="max-w-4xl text-xl leading-relaxed text-slate-300">
              An interactive record of archived snapshots from a completed
              paradox-holding experiment. This page does not monitor a live AI
              system and does not generate new events. It visualizes the values
              stored in the sealed experiment files.
            </p>
          </motion.div>

          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-emerald-400" />
              <div>
                <p className="font-semibold text-white">Integrity, not truth certification</p>
                <p className="mt-1 leading-relaxed text-slate-400">
                  The recorded hashes can help verify that a referenced snapshot
                  has not changed. They do not prove that every metric,
                  interpretation, or model output is factually correct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="mb-5 flex items-center gap-3 text-2xl font-bold">
              <Hash className="h-6 w-6 text-blue-400" />
              Archived pass selector
            </h2>
            <div className="mb-5 flex flex-wrap gap-3">
              {passes.map((pass, index) => (
                <button
                  key={pass.name}
                  type="button"
                  onClick={() => setSelectedPass(index)}
                  className={`rounded-full px-6 py-3 font-semibold transition ${
                    selectedPass === index
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  {pass.name}
                </button>
              ))}
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-4">
              <p className="mb-2 text-sm text-slate-400">Snapshot hash</p>
              <code className="break-all font-mono text-xs text-blue-300">
                {passes[selectedPass].hash}
              </code>
            </div>
          </div>

          {loading ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 py-20 text-center text-xl text-slate-300">
              Loading archived snapshot...
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-rose-400/25 bg-rose-950/20 p-8">
              <h2 className="mb-3 text-2xl font-semibold text-rose-300">
                Archived data unavailable
              </h2>
              <p className="leading-relaxed text-slate-300">{error}</p>
              <p className="mt-3 text-sm text-slate-500">
                No synthetic or randomly generated replacement data is shown.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
                  <p className="text-sm uppercase tracking-[0.14em] text-slate-500">
                    Archived records
                  </p>
                  <p className="mt-2 text-4xl font-bold">{summary.count}</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
                  <p className="text-sm uppercase tracking-[0.14em] text-slate-500">
                    Mean recorded entropy
                  </p>
                  <p className="mt-2 text-4xl font-bold">
                    {summary.meanEntropy.toFixed(3)}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
                  <p className="text-sm uppercase tracking-[0.14em] text-slate-500">
                    Mean recorded stability
                  </p>
                  <p className="mt-2 text-4xl font-bold">
                    {summary.meanStability.toFixed(3)}
                  </p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                <div className="rounded-3xl border border-slate-700 bg-slate-900/55 p-5 md:p-7">
                  <h2 className="mb-2 text-2xl font-semibold">
                    Recorded entropy and pole balance
                  </h2>
                  <p className="mb-6 leading-relaxed text-slate-400">
                    Each point is one archived record. Select a point to inspect
                    the stored poles and metadata. The chart is descriptive and
                    does not establish consciousness, understanding, or a
                    universal ability to hold paradox.
                  </p>
                  <div className="h-[480px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis
                          type="number"
                          dataKey="pole_balance"
                          name="Pole balance"
                          domain={[0, 1]}
                          stroke="#94a3b8"
                        />
                        <YAxis
                          type="number"
                          dataKey="entropy"
                          name="Entropy"
                          domain={[0, 1]}
                          stroke="#94a3b8"
                        />
                        <Tooltip
                          cursor={{ strokeDasharray: "3 3" }}
                          contentStyle={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #475569",
                            borderRadius: "12px",
                          }}
                        />
                        <Scatter
                          data={paradoxes}
                          fill="#38bdf8"
                          onClick={(point) => setSelectedParadox(point as ParadoxData)}
                        />
                      </ScatterChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <aside className="rounded-3xl border border-slate-700 bg-slate-900/55 p-7">
                  <h2 className="mb-5 text-2xl font-semibold">Record detail</h2>
                  {selectedParadox ? (
                    <div className="space-y-5">
                      <div>
                        <p className="text-sm uppercase tracking-[0.14em] text-slate-500">
                          ID
                        </p>
                        <p className="mt-1 break-all font-mono text-blue-300">
                          {selectedParadox.id}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.14em] text-slate-500">
                          Recorded poles
                        </p>
                        <p className="mt-2 text-slate-200">{selectedParadox.pole_a}</p>
                        <p className="mt-2 text-slate-200">{selectedParadox.pole_b}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="rounded-xl bg-slate-950/70 p-4">
                          <p className="text-slate-500">Entropy</p>
                          <p className="mt-1 text-xl font-semibold">
                            {selectedParadox.entropy.toFixed(3)}
                          </p>
                        </div>
                        <div className="rounded-xl bg-slate-950/70 p-4">
                          <p className="text-slate-500">Balance</p>
                          <p className="mt-1 text-xl font-semibold">
                            {selectedParadox.pole_balance.toFixed(3)}
                          </p>
                        </div>
                        <div className="rounded-xl bg-slate-950/70 p-4">
                          <p className="text-slate-500">Stability</p>
                          <p className="mt-1 text-xl font-semibold">
                            {selectedParadox.stability.toFixed(3)}
                          </p>
                        </div>
                        <div className="rounded-xl bg-slate-950/70 p-4">
                          <p className="text-slate-500">Chaos index</p>
                          <p className="mt-1 text-xl font-semibold">
                            {selectedParadox.chaos_index.toFixed(3)}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-500">
                        These field names and values come from the archived
                        experiment schema. Their scientific validity depends on
                        the original operational definitions and study design.
                      </p>
                    </div>
                  ) : (
                    <p className="leading-relaxed text-slate-400">
                      Select a chart point to inspect its archived values.
                    </p>
                  )}
                </aside>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
