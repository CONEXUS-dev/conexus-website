const steps = [
  { label: "Dream Text", sub: "voice or written" },
  { label: "ECP Engine", sub: "9-gear symbolic calibration" },
  { label: "20-Tier Scoring", sub: "emotional register · archetype · identity depth" },
  { label: "Top 3 Routes", sub: "ranked mirror tiers" },
  { label: "Visual Grammar", sub: "tier-specific rendering rules" },
  { label: "Identity Profile", sub: "likeness level 0–4 applied" },
  { label: "Prompt Package", sub: "ECP-calibrated, anchored" },
  { label: "Mirror Image", sub: "foundation model renders" },
];

export default function SystemFlowDiagram() {
  return (
    <section className="py-16 px-6 border-t border-white/8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white/50 text-xs tracking-[0.3em] uppercase mb-2">How it works</h2>
        <p className="text-white text-xl font-light mb-2">
          From dream to mirror in eight steps
        </p>
        <p className="text-white/40 text-sm mb-12 max-w-2xl">
          The images are rendered by a foundation image model, but the routing,
          symbolism, identity handling, and prompt construction are ECP-calibrated.
        </p>

        <div className="relative">
          <div className="flex flex-wrap gap-0 items-stretch">
            {steps.map((step, i) => (
              <div key={i} className="flex items-stretch">
                <div className="flex flex-col items-center justify-center bg-white/4 border border-white/10 rounded-xl px-5 py-4 min-w-[120px] text-center hover:border-amber-400/30 hover:bg-white/6 transition-all group">
                  <div className="text-amber-400/60 text-xs font-mono mb-1 group-hover:text-amber-400/90 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="text-white text-sm font-medium leading-tight mb-1">
                    {step.label}
                  </div>
                  <div className="text-white/30 text-xs leading-tight">{step.sub}</div>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center px-1 text-amber-400/30 text-lg select-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-white/30 text-xs max-w-2xl">
          ECHOform does not train custom image models. The ECP engine handles symbolic
          routing, tier selection, identity-likeness gating, and prompt construction.
          The foundation model supplies the render only.
        </p>
      </div>
    </section>
  );
}
