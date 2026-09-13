import { MonoKicker, SectionShell, SerifHeading } from "@/components/primitives";

const automationContrast = [
  {
    title: "Technical success",
    items: ["Fast retrieval", "Conversational fluency", "Factually grounded outputs"],
  },
  {
    title: "The relationship failure",
    items: [
      "Robotic repetition of policy",
      "Dismissive handling of frustration",
      "Interactions that increase rather than repair tension",
    ],
  },
] as const;

const principles = [
  [
    "01 / Warmth First",
    "Recognize the person and the human stake. Show accurate attention before delivering judgment.",
  ],
  [
    "02 / Competence Second",
    "Deliver grounded judgment, evidence discipline, and a useful next step.",
  ],
  ["03 / Truth Throughout", "Never fabricate reassurance. Never surrender the facts."],
] as const;

const capabilities = [
  ["Calibrated posture", "Governance and business context establish a ready posture before live response work."],
  ["Continuity", "Server-managed session history keeps follow-up turns connected while session history remains server-controlled."],
  ["Human handoff", "Authority boundaries can produce a validated handoff packet that preserves the person’s story."],
] as const;

export default function Echoagent() {
  return (
    <SectionShell id="echoagent">
      <MonoKicker>Lead Commercial System</MonoKicker>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <SerifHeading>ECHOagent</SerifHeading>
          <h3 className="mt-6 max-w-3xl font-serif text-[clamp(1.8rem,4vw,3.8rem)] leading-[1.02] tracking-tight text-data">
            When a Correct Answer Is Not Enough
          </h3>
        </div>
        <div className="col-span-12 flex items-end md:col-span-5 md:border-l md:border-white/20 md:pl-8">
          <p className="max-w-md font-serif text-[clamp(1.35rem,2.5vw,2rem)] italic leading-tight text-data/70">
            Business relationship intelligence for trust-critical moments.
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-white/20 pt-8 md:mt-24 md:pt-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
              The Automation Ceiling
            </p>
            <h3 className="mt-4 font-serif text-3xl tracking-tight text-data md:text-4xl">
              Capability can answer the question and still lose the moment.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="max-w-3xl text-sm leading-relaxed text-data/70 md:text-base">
              Business automation can be fast, fluent, and factually correct while still feeling
              robotic or dismissive when frustration and consequence enter the conversation.
              Technical competence matters. It does not complete the relationship experience.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-px border border-white/20 bg-white/20 md:grid-cols-2">
              {automationContrast.map(({ title, items }, index) => (
                <article key={title} className="bg-void p-6 md:p-8">
                  <p className={`text-[0.65rem] uppercase tracking-[0.25em] ${index === 0 ? "text-data/50" : "text-ember"}`}>
                    {title}
                  </p>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-data/70">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.65em] h-px w-4 shrink-0 bg-white/30" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-6 font-serif text-2xl italic leading-tight text-data md:text-3xl">
              Being processed is not the same as being understood.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-12 gap-8 border-t border-white/20 pt-8 md:mt-24 md:pt-12">
        <div className="col-span-12 md:col-span-5">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">A two-part trust model</p>
          <h3 className="mt-4 font-serif text-3xl tracking-tight text-data md:text-4xl">
            Trust needs presence and capability.
          </h3>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-data/65">
            ECHOagent is designed around two dimensions of a trust-critical interaction: perceived
            intent and demonstrated competence. Warmth without useful capability is unreliable.
            Capability without human recognition can feel cold.
          </p>
        </div>
        <div className="col-span-12 grid grid-cols-1 gap-px border border-white/20 bg-white/20 md:col-span-7 md:grid-cols-2">
          <article className="bg-void p-6 md:p-8">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-data/50">Warmth / Intent</p>
            <p className="mt-4 font-serif text-2xl italic text-data md:text-3xl">Are you for me?</p>
            <p className="mt-4 text-xs leading-relaxed text-data/60">
              Has the system recognized the person and what is genuinely at stake?
            </p>
          </article>
          <article className="bg-void p-6 md:p-8">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-data/50">
              Competence / Capability
            </p>
            <p className="mt-4 font-serif text-2xl italic text-data md:text-3xl">
              Can you actually help me?
            </p>
            <p className="mt-4 text-xs leading-relaxed text-data/60">
              Can it preserve the facts, exercise judgment, and provide a useful next step?
            </p>
          </article>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <div className="max-w-3xl">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
            The ECHOagent Principle
          </p>
          <h3 className="mt-4 font-serif text-3xl tracking-tight text-data md:text-4xl">
            Recognition before judgment. Truth throughout.
          </h3>
        </div>
        <div className="mt-8 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
          {principles.map(([title, body]) => (
            <article key={title} className="col-span-12 bg-void p-6 md:col-span-4 md:p-8">
              <h4 className="font-serif text-2xl tracking-tight text-data">{title}</h4>
              <p className="mt-4 text-xs leading-relaxed text-data/60">{body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-12 gap-8 border-t border-white/20 pt-8 md:mt-24 md:pt-12">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">Dual Loyalty</p>
          <h3 className="mt-4 font-serif text-3xl tracking-tight text-data md:text-4xl">
            Warmth does not weaken judgment.
          </h3>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="grid grid-cols-1 gap-px border border-white/20 bg-white/20 md:grid-cols-2">
            <article className="bg-void p-6 md:p-8">
              <h4 className="font-serif text-2xl tracking-tight text-data">The Human Stake</h4>
              <p className="mt-4 text-xs leading-relaxed text-data/60">
                Recognize the ambition, frustration, urgency, fear, or consequence driving the
                interaction—and treat its significance seriously.
              </p>
            </article>
            <article className="bg-void p-6 md:p-8">
              <h4 className="font-serif text-2xl tracking-tight text-data">Business Truth</h4>
              <p className="mt-4 text-xs leading-relaxed text-data/60">
                Preserve verified company facts, policy, capability boundaries, and evidence
                discipline without manufacturing certainty about responsibility.
              </p>
            </article>
          </div>
          <p className="mt-6 font-serif text-2xl italic leading-tight text-data md:text-3xl">
            Believe the significance immediately. Determine responsibility carefully.
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-white/20 pt-8 md:mt-24 md:pt-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
              The Experience Difference
            </p>
            <h3 className="mt-4 font-serif text-3xl tracking-tight text-data md:text-4xl">
              One situation. Two very different experiences.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-data/45">
              Illustrative scenario — not a customer case study
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-data/70">
              A customer believes a Meridian Cloud Readiness Assessment summary is missing the day
              before an important leadership meeting. The available information does not establish
              whether an agreed deadline was missed.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-px border border-white/20 bg-white/20 md:grid-cols-2">
              <article className="bg-void p-6 md:p-8">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-data/50">
                  Cold competence
                </p>
                <h4 className="mt-4 font-serif text-2xl tracking-tight text-data">
                  Boundary first. Ticket next.
                </h4>
                <p className="mt-4 text-xs leading-relaxed text-data/60">
                  A policy-first response establishes the technical boundary and redirects the
                  customer without adequately recognizing why the missing findings matter now.
                </p>
              </article>
              <article className="bg-void p-6 md:p-8">
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-ember">
                  ECHOagent presence
                </p>
                <h4 className="mt-4 font-serif text-2xl tracking-tight text-data">
                  Stakes recognized. Facts preserved.
                </h4>
                <p className="mt-4 text-xs leading-relaxed text-data/60">
                  Recognize that the findings matter before the leadership meeting, acknowledge the
                  urgency, preserve uncertainty about responsibility, and move toward the next
                  useful step.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/20 pt-8 md:mt-24 md:pt-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
              Technical credibility
            </p>
            <h3 className="mt-4 font-serif text-3xl tracking-tight text-data md:text-4xl">
              Product discipline beneath the experience.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-sm leading-relaxed text-data/70">
              ECHOagent is designed to recognize the trust event inside a request, maintain
              continuity across a session, and prepare structured human handoffs when legal,
              security, privacy, compensation, or approval boundaries require human authority.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
          {capabilities.map(([title, body]) => (
            <article key={title} className="col-span-12 bg-void p-6 md:col-span-4 md:p-8">
              <h4 className="font-serif text-2xl tracking-tight text-data">{title}</h4>
              <p className="mt-4 text-xs leading-relaxed text-data/60">{body}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-data/45">
          The implemented runtime is supported by container, Azure deployment, UI, staging, and
          test assets.
        </p>
      </div>

      <div className="mt-16 border-t border-white/20 pt-8 md:mt-24 md:pt-12">
        <p className="max-w-5xl font-serif text-[clamp(2rem,5vw,5rem)] leading-[0.98] tracking-tight text-data">
          The difference between being processed and being understood.
        </p>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-data/65">
          ECHOagent does not choose between human presence and business truth. It is built to hold
          both.
        </p>
        <a
          href="/materials/ECHOagent_Trust_Intelligence.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center border border-ember px-5 py-3 text-center text-[0.75rem] uppercase tracking-[0.18em] text-ember transition-colors hover:bg-ember hover:text-void focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:w-auto"
        >
          VIEW TRUST INTELLIGENCE DECK →
        </a>
      </div>
    </SectionShell>
  );
}