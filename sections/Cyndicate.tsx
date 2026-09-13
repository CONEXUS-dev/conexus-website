import { MonoKicker, SectionShell, SerifHeading } from "@/components/primitives";

const agents = [
  ["ECP", "Calibrates the active agents for the task."],
  ["Aurelius", "Applies command authority and verifies hard gates."],
  ["Faye", "Removes weak candidates while retaining useful contradictions."],
  ["GRU", "Spawns and terminates bounded workers that execute task actions."],
  ["Librarian", "Records provenance alongside the work."],
] as const;

export default function Cyndicate() {
  return (
    <SectionShell id="cyndicate">
      <MonoKicker>Research and Execution Architecture</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <SerifHeading>CONEXUS Cyndicate</SerifHeading>
          <p className="mt-5 font-serif text-[clamp(1.4rem,3vw,2.5rem)] italic leading-tight text-data/60">
            Five distinct responsibilities, coordinated around bounded work.
          </p>
        </div>
        <div className="col-span-12 md:col-span-5 md:border-l md:border-white/20 md:pl-8">
          <p className="text-sm leading-relaxed text-data/70">
            Cyndicate is an actively developed five-agent system built on the Agents Last Exam
            substrate. It divides calibration, gate authority, subtraction, worker execution,
            and provenance rather than collapsing them into one role.
          </p>
          <p className="mt-5 text-xs leading-relaxed text-data/45">
            Active development spans connectors, completion handling, task data, providers, and
            evaluators across the ALE substrate.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-10 gap-px border border-white/20 bg-white/20">
        {agents.map(([name, role]) => (
          <article key={name} className="col-span-10 bg-void p-6 sm:col-span-5 lg:col-span-2">
            <h3 className="font-serif text-2xl tracking-tight text-ember">{name}</h3>
            <p className="mt-3 text-xs leading-relaxed text-data/60">{role}</p>
          </article>
        ))}
      </div>
      <a
        href="/materials/CONEXUS_Cyndicate__The_Proof_of_Swarm.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center border border-ember px-5 py-3 text-center text-[0.75rem] uppercase tracking-[0.18em] text-ember transition-colors hover:bg-ember hover:text-void focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:w-auto"
      >
        VIEW PROOF OF SWARM →
      </a>
    </SectionShell>
  );
}