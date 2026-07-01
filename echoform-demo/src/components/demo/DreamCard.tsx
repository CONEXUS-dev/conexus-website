import { useState } from "react";

export interface MirrorEntry {
  rank: 1 | 2 | 3;
  tierName: string;
  variantLabel: string;
  likenessLevel: 0 | 1 | 2 | 3 | 4;
  renderingMode: string;
  chosen: boolean;
  imageFile: string;
}

export interface DreamData {
  id: number;
  title: string;
  subtitle: string;
  dreamText: string;
  confidence: number;
  proofNote: string;
  mirrors: MirrorEntry[];
}

const likenessLabels: Record<number, string> = {
  0: "Archetypal Only",
  1: "Abstract Presence",
  2: "Symbolic Figure",
  3: "Guided Figure",
  4: "Full Likeness",
};

const likenessColors: Record<number, string> = {
  0: "text-purple-300/80 border-purple-400/30 bg-purple-400/8",
  1: "text-blue-300/80 border-blue-400/30 bg-blue-400/8",
  2: "text-teal-300/80 border-teal-400/30 bg-teal-400/8",
  3: "text-amber-300/80 border-amber-400/30 bg-amber-400/8",
  4: "text-rose-300/80 border-rose-400/30 bg-rose-400/8",
};

interface Props {
  dream: DreamData;
  baseUrl: string;
}

export default function DreamCard({ dream, baseUrl }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const truncated =
    dream.dreamText.length > 180 && !expanded
      ? dream.dreamText.slice(0, 180).trimEnd() + "…"
      : dream.dreamText;

  return (
    <article className="bg-white/3 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Mirror reflection"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-4 right-4 text-white/50 hover:text-white text-2xl"
            onClick={() => setLightboxImg(null)}
          >
            ×
          </button>
        </div>
      )}

      <div className="p-6 border-b border-white/8">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="text-amber-400/60 text-xs tracking-widest uppercase mb-1">
              Dream {dream.id}
            </div>
            <h3 className="text-white text-lg font-light leading-tight">{dream.title}</h3>
            <p className="text-white/40 text-xs mt-1">{dream.subtitle}</p>
          </div>
          <div className="shrink-0 text-right">
            <div className="text-white/25 text-xs mb-1">AI confidence</div>
            <div className="text-amber-400 text-base font-light">
              {(dream.confidence * 100).toFixed(0)}%
            </div>
          </div>
        </div>

        <blockquote className="text-white/50 text-sm leading-relaxed italic">
          "{truncated}"
          {dream.dreamText.length > 180 && (
            <button
              className="ml-2 text-amber-400/60 hover:text-amber-400 text-xs not-italic underline underline-offset-2 transition-colors"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "less" : "more"}
            </button>
          )}
        </blockquote>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          {dream.mirrors.map((m) => (
            <div
              key={m.rank}
              className={`relative rounded-xl overflow-hidden border transition-all ${
                m.chosen
                  ? "border-amber-400/50 shadow-[0_0_20px_rgba(251,191,36,0.08)]"
                  : "border-white/10"
              }`}
            >
              {m.chosen && (
                <div className="absolute top-2 left-2 z-10 bg-amber-400/90 text-black text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded-full">
                  CHOSEN
                </div>
              )}
              <div className="absolute top-2 right-2 z-10 bg-black/60 text-white/70 text-[10px] font-mono px-1.5 py-0.5 rounded">
                R{m.rank}
              </div>

              <div
                className="aspect-[2/3] bg-black/40 cursor-zoom-in overflow-hidden"
                onClick={() =>
                  setLightboxImg(`${baseUrl}demo/${m.imageFile}`)
                }
              >
                <img
                  src={`${baseUrl}demo/${m.imageFile}`}
                  alt={m.variantLabel}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-3 bg-black/30">
                <p className="text-white text-xs font-medium leading-tight mb-0.5">
                  {m.tierName}
                </p>
                <p className="text-white/40 text-[11px] leading-tight mb-2">
                  {m.variantLabel}
                </p>
                <div
                  className={`inline-flex items-center gap-1 border rounded-full px-2 py-0.5 text-[10px] leading-none ${
                    likenessColors[m.likenessLevel]
                  }`}
                >
                  <span>L{m.likenessLevel}</span>
                  <span className="opacity-60">·</span>
                  <span>{likenessLabels[m.likenessLevel]}</span>
                </div>
                <p className="text-white/25 text-[10px] mt-1.5 font-mono">
                  {m.renderingMode}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-400/6 border border-amber-400/20 rounded-xl px-4 py-3">
          <div className="text-amber-400/60 text-[10px] tracking-widest uppercase mb-1">
            What this proved
          </div>
          <p className="text-white/60 text-xs leading-relaxed">{dream.proofNote}</p>
        </div>
      </div>
    </article>
  );
}
