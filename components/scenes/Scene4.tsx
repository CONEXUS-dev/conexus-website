export default function Scene4() {
  const benchmarks = [
    { trials: "2,000 trials", title: "2D Protein Folding", data: "Approximately 80% relative improvement in the stated comparison", note: "Internal benchmark against the documented Monte Carlo baseline" },
    { trials: "4,000 trials", title: "3D Protein Folding", data: "25.8% success versus 3.9%, approximately 361.8% relative improvement", note: "Largest reported relative gap in this research portfolio" },
    { trials: "Scale series trials", title: "Traveling Salesman", data: "Larger relative gaps were reported at larger tested instances", note: "Benchmark-specific trend, not a universal scaling law" },
    { trials: "250 trials", title: "Vehicle Routing", data: "Up to 89.3% improvement at the largest tested scale", note: "Compared with the stated routing baseline and configuration" },
    { trials: "300 trials", title: "Neural Architecture Search", data: "Reported accuracy gains ranged from 3.8% to 8.4%", note: "Internal search benchmark; external replication remains needed" },
    { trials: "5,000 trials", title: "Quantum Compilation", data: "27.8% gate reduction and 3.7% fidelity gain were reported", note: "Simulator-based comparison under the documented compilation setup" },
  ];

  return (
    <section className="min-h-full w-full flex flex-col items-start justify-start p-8 md:p-24 lg:p-32 max-w-[1600px] mx-auto">
      <div className="w-full mb-16">
        <h2 className="font-serif text-[clamp(2rem,6vw,6rem)] tracking-tighter mb-4">The Forgetting Engine benchmark program</h2>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20 mb-16">
        {benchmarks.map((b) => (
          <div key={b.title} className="bg-void p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40 block mb-4">{b.trials}</span>
              <h3 className="font-serif text-[clamp(1.5rem,2.5vw,2.5rem)] tracking-tight mb-4">{b.title}</h3>
            </div>
            <div className="mt-auto">
              <p className="font-serif text-[1.1rem] leading-relaxed text-data mb-2">{b.data}</p>
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-white/50">{b.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full border-t border-white/20 pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="font-serif text-[1.5rem] mb-4">Important</h4>
          <p className="font-serif text-[1rem] leading-relaxed text-white/80">A 361.8% relative success-rate difference in protein folding is not the same quantity as an 89.3% routing improvement or a 27.8% gate reduction. These numbers should be read within their own experiments, not combined into one universal score.</p>
        </div>
        <div>
          <h4 className="font-serif text-[1.5rem] mb-4">Complexity inversion is an observed pattern, not a declared law.</h4>
          <p className="font-serif text-[1rem] leading-relaxed text-white/80">In several CONEXUS benchmark series, the relative advantage over the chosen baseline increased at larger tested scales. That is the phenomenon CONEXUS calls complexity inversion. Establishing a general scaling law would require preregistered experiments, stronger competing methods, multiple independent implementations, and replication outside the CONEXUS team.</p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-8 border-t border-white/20 pt-8">
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40 block mb-2">Observed</span>
            <p className="font-serif text-[1.1rem]">Larger relative gaps in selected benchmark series as tested scale increased.</p>
          </div>
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40 block mb-2">Not yet established</span>
            <p className="font-serif text-[1.1rem]">A universal rule that the Forgetting Engine improves with every form of complexity or defeats all conventional algorithms.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
