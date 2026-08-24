export default function Scene9() {
  return (
    <section className="min-h-full w-full flex flex-col items-start justify-start p-8 md:p-24 lg:p-32 max-w-[1400px] mx-auto">
      <div className="w-full mb-16 border-t border-white/20 pt-12">
        <p className="font-serif text-[clamp(1.5rem,4vw,3rem)] leading-tight max-w-4xl">Built from first principles by a solo founder who discovered something no one expected.</p>
      </div>

      <div className="w-full aspect-[2.39/1] border-t border-b border-white/20 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 mb-16">
        <div className="text-left">
          <h2 className="font-serif text-[clamp(2rem,5vw,5rem)] tracking-tighter leading-none">Derek Angell</h2>
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/50">Founder & CEO</span>
        </div>
        <div className="max-w-xl mt-8 md:mt-0">
          <p className="font-serif text-[1.1rem] leading-relaxed text-white/80">
            Inventor of ECP and architect of the Forgetting Engine. Founder of CONEXUS, building calibration, optimization, and provenance systems through controlled experiments and cross-domain computational research.
          </p>
        </div>
      </div>

      <div className="w-full mb-16 max-w-4xl mx-auto text-center">
        <blockquote className="font-serif text-[clamp(1.5rem,3.5vw,3rem)] italic leading-tight tracking-tight">
          “We didn't just build a smarter AI. We built a system that feels the weight of the problem.”
        </blockquote>
      </div>

      <div className="w-full border-t border-white/20 pt-12 flex flex-wrap gap-8 justify-center">
        {["AI Architecture", "Cognitive Systems", "Computational Research", "Product Development"].map((tag) => (
          <span key={tag} className="font-mono text-[0.65rem] uppercase tracking-widest text-white/50 border border-white/20 px-4 py-2">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
