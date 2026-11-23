import { MonoKicker, SectionShell, SerifHeading } from "@/components/primitives";

type PrincipalItem = {
  name: string;
  category: string;
  status: string;
  description: string;
  action: string;
  href: string;
  external: boolean;
  media?: "canvas" | "follow-me" | "echoform";
};

const principal: PrincipalItem[] = [
  {
    name: "ECHOform / Dream Mirror",
    category: "Dream Journal & Symbolic Reflection",
    status: "Journal and Visual Walkthrough",
    description:
      "Record a dream, return to it, and explore symbolic perspectives and visual reflections. You decide what the dream means.",
    action: "Open Dream Mirror",
    href: "https://conexus-echoform-demo.vercel.app/",
    external: true,
    media: "echoform",
  },
  {
    name: "ECHOagent",
    category: "Business Relationship Intelligence",
    status: "Public Prototype",
    description:
      "Explore how an AI service agent handles business conversations where customers need clear answers, factual restraint, and reasons to trust the response.",
    action: "Try the Prototype",
    href: "https://echoagent-phase1.mangostone-fdb49bae.westus2.azurecontainerapps.io",
    external: true,
  },
  {
    name: "CONEXUS Canvas",
    category: "Collaborative Creativity",
    status: "Recorded Demonstration",
    description:
      "A creative workspace exploring sequential collaboration between people and AI, where an idea develops through contributions, choices, and transformations.",
    action: "Watch the Canvas Demo",
    href: "/canvas/conexus-canvas-demo.mp4",
    external: false,
    media: "canvas",
  },
  {
    name: "Serenity Porch",
    category: "Recovery & Presence",
    status: "Public Preview",
    description:
      "A conversational companion for recovery, offering space to express difficult experiences and reflect without being rushed toward an answer.",
    action: "Enter Serenity Porch",
    href: "https://serenity-porch-founder-012.azurewebsites.net/",
    external: true,
  },
  {
    name: "Follow Me",
    category: "Shared Human Expression",
    status: "Design Walkthrough",
    description:
      "A creative experience where someone offers a reflection, enters a shared chain, and carries another person's contribution forward.",
    action: "View the Follow Me Storyboard",
    href: "#follow-me-storyboard",
    external: false,
    media: "follow-me",
  },
  {
    name: "NAiRTHEX",
    category: "Faith & Reflection",
    status: "Implemented Prototype",
    description:
      "A quiet digital threshold for people arriving at church, with room for a question, hope, or doubt before human pastoral conversation.",
    action: "View the Threshold Guide",
    href: "/images/products/nairthex-digital-threshold.webp",
    external: false,
  },
  {
    name: "CONEXUS Cyndicate",
    category: "Governed Multi-Agent Systems",
    status: "In Development",
    description:
      "An evolving multi-agent system for defined project work. Its Aurelius Command Center turns selected notes into source-grounded briefs and decision points.",
    action: "Explore Cyndicate",
    href: "/#cyndicate",
    external: false,
  },
  {
    name: "ECHOpanion",
    category: "Conversational Companion",
    status: "Implemented Prototype",
    description:
      "A conversational companion designed for ordinary human moments, including times when conflicting feelings may coexist.",
    action: "View the Companion Profile",
    href: "/verticals/echopanion",
    external: false,
  },
] as const;

const studies = [
  {
    name: "MIRA",
    status: "Hospitality Design Study",
    description:
      "A hospitality concept exploring how a hotel might welcome a returning guest with continuity from one visit to the next.",
    href: "/verticals/mira",
    action: "Explore MIRA",
  },
  {
    name: "SOMA",
    status: "Pediatric Hospital Design Study",
    description:
      "A pediatric hospital companion concept exploring how children might express what they feel through a reflection tablet.",
    href: "/verticals/soma",
    action: "Explore SOMA",
  },
  {
    name: "REFLECT",
    status: "Documented Protocol",
    description:
      "An illustrated framework for listening and reflection in the context of trauma recovery.",
    href: "/verticals/reflect",
    action: "View REFLECT",
  },
] as const;

const storyboard = [
  {
    title: "Choose a mirror",
    src: "/follow-me/Choose%20the%20Mirror%201.png",
  },
  {
    title: "Offer a reflection",
    src: "/follow-me/Step%202%20Emotional%20Offering.png",
  },
  {
    title: "Enter the chain",
    src: "/follow-me/Your%20Truth%20is%20Moving%20Through%20Others.png",
  },
  {
    title: "Carry another contribution forward",
    src: "/follow-me/Carrying%20a%20Soul%20Forward%20Choice.png",
  },
] as const;

const primaryCta =
  "inline-flex min-h-11 w-full items-center justify-center border border-ember px-5 py-3 text-center text-[0.75rem] uppercase tracking-[0.18em] text-ember transition-colors hover:bg-ember hover:text-void focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:w-auto";

export default function Portfolio() {
  return (
    <SectionShell id="portfolio">
      <MonoKicker>Applications and Systems</MonoKicker>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-7">
          <SerifHeading>What we&apos;ve built</SerifHeading>
        </div>
        <div className="col-span-12 md:col-span-5 md:pt-2">
          <p className="max-w-xl text-sm leading-relaxed text-data/65">
            Explore the applications, creative experiences, and systems built at CONEXUS.
          </p>
          <p className="mt-4 text-[0.65rem] uppercase tracking-[0.3em] text-data/45">
            ECP · Truth. Symbol. Contradiction.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-12 border-l border-t border-white/20">
        {principal.map((item) => (
          <article
            key={item.name}
            className="col-span-12 flex min-h-[18rem] flex-col justify-between border-b border-r border-white/20 p-6 md:col-span-6 md:p-8"
          >
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.28em] text-data/45">
                {item.category}
              </p>
              <h3 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3.6rem)] leading-none tracking-tighter text-data">
                {item.name}
              </h3>
              <p className="mt-3 text-[0.65rem] uppercase tracking-[0.23em] text-ember">
                {item.status}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-data/65">
                {item.description}
              </p>

              {item.media === "canvas" ? (
                <div className="mt-6 overflow-hidden border border-white/20 bg-black">
                  <video
                    controls
                    preload="metadata"
                    className="aspect-video w-full"
                    poster="/canvas/placeholder%20for%20video%20Canvas7.png"
                  >
                    <source src="/canvas/conexus-canvas-demo.mp4" type="video/mp4" />
                  </video>
                </div>
              ) : null}

              {item.media === "echoform" ? (
                <div className="mt-6 overflow-hidden border border-white/20 bg-black">
                  <img
                    src="/dream-mirror/Childhood%20Dog%20Dream.png"
                    alt="ECHOform Dream Mirror example"
                    className="aspect-video w-full object-cover object-center"
                  />
                </div>
              ) : null}
            </div>

            {item.media === "follow-me" ? (
              <details id="follow-me-storyboard" className="mt-7 border-t border-white/20 pt-5">
                <summary className="inline-flex min-h-11 cursor-pointer list-none items-center border border-ember px-5 py-3 text-[0.75rem] uppercase tracking-[0.18em] text-ember transition-colors hover:bg-ember hover:text-void focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-void">
                  {item.action} →
                </summary>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {storyboard.map((step, index) => (
                    <figure key={step.title} className="border border-white/20 p-3">
                      <img
                        src={step.src}
                        alt={step.title}
                        className="aspect-[4/5] w-full bg-black object-contain"
                      />
                      <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.18em] text-data/55">
                        {String(index + 1).padStart(2, "0")} · {step.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </details>
            ) : (
              <div className="mt-7">
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={primaryCta}
                >
                  {item.action} →
                </a>
              </div>
            )}
          </article>
        ))}
      </div>

      <div className="mt-16 border-t border-white/20 pt-8">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-data/45">
          Design Studies
        </p>
        <div className="mt-6 grid grid-cols-12 border-l border-t border-white/20">
          {studies.map((study) => (
            <article
              key={study.name}
              className="col-span-12 flex flex-col justify-between border-b border-r border-white/20 p-6 md:col-span-4 md:min-h-[18rem] md:p-7"
            >
              <div>
                <p className="text-[0.6rem] uppercase tracking-[0.24em] text-ember">
                  {study.status}
                </p>
                <h3 className="mt-4 font-serif text-4xl leading-none tracking-tighter text-data">
                  {study.name}
                </h3>
                <p className="mt-5 text-sm leading-relaxed text-data/60">
                  {study.description}
                </p>
              </div>
              <a href={study.href} className={`${primaryCta} mt-7`}>
                {study.action} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
