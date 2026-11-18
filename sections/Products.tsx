import { SectionShell, MonoKicker, SerifHeading } from "@/components/primitives";

export default function Products() {
  return (
    <SectionShell id="products">
      <MonoKicker>Products</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <SerifHeading>
            Architecture translated into <span className="italic text-ember">bounded experiences</span>.
          </SerifHeading>
        </div>
        <div className="col-span-12 flex items-end md:col-span-4">
          <p className="text-sm leading-relaxed text-data/60">
            NAiRTHEX, ECHOform, and Serenity Porch bring the underlying methods into
            governed reflection, personal interpretation, and human conversation.
          </p>
        </div>
      </div>

      <article className="mt-10 border border-white/20 p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
              Recovery &amp; Presence · Open Preview
            </p>
            <h3 className="mt-3 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tighter text-data">
              Serenity Porch
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-data/65">
              An AI companion for recovery, built for conversation, presence, and
              holding contradiction without forcing an answer.
            </p>
          </div>
          <a
            href="https://serenity-porch-founder-012.azurewebsites.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full shrink-0 items-center justify-center border border-ember px-5 py-3 text-center text-[0.75rem] uppercase tracking-[0.18em] text-ember transition-colors hover:bg-ember hover:text-void focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-void md:w-auto"
          >
            Enter Serenity Porch →
          </a>
        </div>
      </article>
    </SectionShell>
  );
}
