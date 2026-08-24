export default function Scene6() {
  return (
    <section className="min-h-full w-full flex flex-col items-start justify-start p-8 md:p-24 lg:p-32 max-w-[1400px] mx-auto">
      <div className="w-full mb-16">
        <h2 className="font-serif text-[clamp(2rem,6vw,5rem)] tracking-tighter leading-none mb-4">Your dream becomes a symbolic reflection.</h2>
        <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] text-white/70">You decide what it means.</p>
      </div>

      <div className="w-full aspect-[2.39/1] border-t border-b border-white/20 flex items-center justify-center p-8 mb-16">
        <p className="font-serif text-[clamp(1rem,2vw,1.5rem)] text-center max-w-3xl text-white/80 leading-relaxed">
          ECHOform turns a dream, memory, or written moment into multiple creative perspectives and visual mirror choices. It does not claim to decode the unconscious or reveal psychological truth. Multiple perspectives without a forced conclusion.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 pt-12 mb-16">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40">Step 1: Share a dream or moment</span>
          <p className="font-serif text-[1.1rem] text-white/80">Enter a dream, memory, image, or written reflection. The user chooses what to share and may stop at any time.</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40">Step 2: Receive three perspectives</span>
          <p className="font-serif text-[1.1rem] text-white/80">The system offers Shadow, Light, and Reality as simultaneous symbolic routes rather than a single authoritative interpretation.</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40">Step 3: Choose a mirror</span>
          <p className="font-serif text-[1.1rem] text-white/80">The selected route is translated into a visual and written reflection through one of the ECHOform mirror tiers.</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40">Step 4: Keep or discard the result</span>
          <p className="font-serif text-[1.1rem] text-white/80">The output is a creative journal artifact. The user decides whether it is useful, meaningful, or worth saving.</p>
        </div>
      </div>

      <div className="w-full border-t border-white/20 pt-12 mb-16">
        <h3 className="font-serif text-[2rem] mb-4">Inside the guided experience</h3>
        <p className="font-serif text-[1.1rem] text-white/80 max-w-3xl">These screens show the current visual journey. The guided demo uses prepared examples so visitors can examine the flow without treating the output as a personal assessment.</p>
      </div>

      <div className="w-full border-t border-white/20 pt-12">
        <p className="font-serif text-[1.5rem] mb-8">The mirror offers language. It does not own your meaning.</p>
        <p className="font-serif text-[1.1rem] text-white/80 mb-8 max-w-3xl">ECHOform output should be treated as creative reflection, not medical, psychological, legal, financial, or spiritual advice. Distressing or urgent concerns belong with qualified human support.</p>
        <button className="font-mono text-[0.8rem] uppercase tracking-widest border border-data px-8 py-4 hover:bg-data hover:text-void transition-colors">
          Open the Guided Demo →
        </button>
      </div>
    </section>
  );
}
