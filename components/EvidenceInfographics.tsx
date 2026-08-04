import Image from "next/image";

const evidenceImages = [
  {
    src: "/images/evidence/search-regime-modulation.webp",
    alt: "CONEXUS programmatic search-regime modulation infographic",
    width: 2048,
    height: 1143,
    title: "Programmatic Search-Regime Modulation",
    description:
      "A technical comparison of control, token priming, neutral logical prompting, and the full CONEXUS paradox architecture.",
  },
  {
    src: "/images/evidence/cracking-ai-creativity-code.webp",
    alt: "CONEXUS AI creativity causal validation infographic",
    width: 1143,
    height: 2048,
    title: "Cracking the Code of AI Creativity",
    description:
      "A visual explanation of the controlled evidence separating paradox-holding architecture from prompt length or token exposure.",
  },
];

export function EvidenceInfographics() {
  return (
    <section className="border-t border-slate-800 bg-slate-950 px-4 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Visual Evidence Library
          </p>
          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            The mechanism, shown clearly.
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            These supporting visuals summarize the controlled comparisons behind
            CONEXUS calibration research. Select either image to open it at full size.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {evidenceImages.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/20"
            >
              <a
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${image.title} at full size`}
                className="block overflow-hidden rounded-2xl bg-slate-950"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-auto max-h-[760px] w-full object-contain transition-transform duration-300 hover:scale-[1.01]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>
              <figcaption className="px-2 pb-2 pt-5">
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  {image.title}
                </h3>
                <p className="leading-relaxed text-slate-400">
                  {image.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
