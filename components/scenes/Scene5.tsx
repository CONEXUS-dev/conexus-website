export default function Scene5() {
  return (
    <section className="min-h-full w-full flex flex-col items-start justify-start p-8 md:p-24 lg:p-32 max-w-[1400px] mx-auto">
      <div className="w-full mb-16">
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40 block mb-4">SCENE 05</span>
        <h2 className="font-serif text-[clamp(2rem,8vw,8rem)] tracking-tighter leading-none">NAiRTHEX</h2>
        <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] mt-4 text-white/70">A Digital Threshold for Sacred Space</p>
      </div>

      <div className="w-full aspect-[2.39/1] border-t border-b border-white/20 flex items-center justify-center p-8 mb-16">
        <p className="font-serif text-[clamp(1rem,2vw,1.5rem)] text-center max-w-3xl text-white/80 leading-relaxed">
          A private AI reflection companion serving as a quiet foyer before ministry, built on a doctrine of restraint and respect for human authority. NAiRTHEX is designed as a reflective threshold under human and pastoral authority, not as therapy, clergy, diagnosis, or autonomous decision-making.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/20 pt-12 mb-16">
        <div>
          <h3 className="font-serif text-[2rem] mb-4">Product Doctrine</h3>
          <p className="font-serif text-[1.1rem] leading-relaxed text-white/80">The moment before ministry matters. NAiRTHEX does not rush a person toward an answer. It creates a quiet threshold where they can speak honestly, remain whole, and decide what human support comes next.</p>
        </div>
        <div>
          <h3 className="font-serif text-[2rem] mb-4">Presence Before Intervention</h3>
          <p className="font-serif text-[1.1rem] leading-relaxed text-white/80">Receive the person accurately without immediately trying to convert, diagnose, correct, or resolve them.</p>
        </div>
        <div>
          <h3 className="font-serif text-[2rem] mb-4">Contradiction Without Collapse</h3>
          <p className="font-serif text-[1.1rem] leading-relaxed text-white/80">Allow doubt, anger, grief, joy, and uncertainty to coexist without forcing a quick answer.</p>
        </div>
        <div>
          <h3 className="font-serif text-[2rem] mb-4">Human Authority First</h3>
          <p className="font-serif text-[1.1rem] leading-relaxed text-white/80">NAiRTHEX never replaces pastors, clinicians, sponsors, or community. It protects the moment before ministry.</p>
        </div>
      </div>

      <div className="w-full border-t border-white/20 pt-12 mb-16">
        <p className="font-serif text-[clamp(1.5rem,3vw,2rem)] leading-tight mb-8">One quiet conversation.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40 block mb-2">Voice and Text</span>
            <p className="font-serif text-[1rem] text-white/80">Speak freely or type. Both paths enter the same quiet, session-aware conversation.</p>
          </div>
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40 block mb-2">Governed Reflection</span>
            <p className="font-serif text-[1rem] text-white/80">The experience is designed around restraint, boundaries, and respect for the person's stated worldview.</p>
          </div>
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40 block mb-2">Built for the Threshold</span>
            <p className="font-serif text-[1rem] text-white/80">A private foyer before ministry, not a replacement for ministry itself.</p>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/20 pt-12">
        <p className="font-serif text-[1.5rem] mb-8">Step into the threshold.</p>
        <p className="font-serif text-[1.1rem] text-white/80 mb-8 max-w-3xl">No account is required. Speak or type, pause when you need to, and leave the conversation whenever you choose.</p>
        <button className="font-mono text-[0.8rem] uppercase tracking-widest border border-data px-8 py-4 hover:bg-data hover:text-void transition-colors">
          Enter NAiRTHEX →
        </button>
      </div>
    </section>
  );
}
