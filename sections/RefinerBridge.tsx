import { MonoKicker, SectionShell, SerifHeading } from "@/components/primitives";

const ideas = ["Refinement", "Subtraction", "Contradiction", "Judgment"] as const;

export default function RefinerBridge() {
  return (
    <SectionShell id="refiner">
      <MonoKicker>The Refiner</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <SerifHeading>Raw capability is not the same as useful intelligence.</SerifHeading>
        </div>
        <div className="col-span-12 md:col-span-4">
          <p className="text-sm leading-relaxed text-data/65">
            The deeper CONEXUS thesis explores refinement, subtraction, contradiction, and
            judgment as architectural ideas. The metaphor gives the thesis its visual and
            conceptual lens.
          </p>
          <a
            href="/cinematic?scene=2"
            className="mt-8 inline-block border border-ember px-6 py-4 text-[0.65rem] uppercase tracking-[0.25em] text-ember transition-colors hover:bg-ember hover:text-void"
          >
            Experience the Refiner Thesis →
          </a>
        </div>
      </div>
      <ul className="mt-12 grid grid-cols-2 gap-px border border-white/20 bg-white/20 md:grid-cols-4">
        {ideas.map((idea) => (
          <li key={idea} className="bg-void p-6 text-center font-serif text-xl text-data/70">
            {idea}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}