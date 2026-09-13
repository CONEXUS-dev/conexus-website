import { SectionShell } from "@/components/primitives";
import { ECHOFORM_SECTION as product } from "@/content/vault";

export default function Echoform() {
  return (
    <SectionShell id="echoform" className="border-t-0 pt-0">
      <article className="grid grid-cols-12 gap-8 border border-white/20 p-6 md:p-10">
        <div className="col-span-12 md:col-span-5">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">Dream Journal and Mirror</p>
          <h3 className="mt-3 font-serif text-[clamp(2.4rem,5vw,5rem)] leading-none tracking-tighter text-data">
            ECHOform
          </h3>
          <p className="mt-4 font-serif text-xl italic leading-tight text-data/55">
            Your dream becomes a symbolic reflection. You decide what it means.
          </p>
        </div>
        <div className="col-span-12 flex flex-col justify-between md:col-span-7 md:border-l md:border-white/20 md:pl-8">
          <div>
            <p className="text-xs leading-relaxed text-data/65">{product.lead}</p>
            <p className="mt-4 text-xs leading-relaxed text-data/40">
              Shadow, Light, and Reality perspectives open visual and written paths for
              user-chosen interpretation.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={product.demo.href} className="inline-flex min-h-11 w-full items-center justify-center border border-ember px-5 py-3 text-center text-[0.75rem] uppercase tracking-[0.18em] text-ember transition-colors hover:bg-ember hover:text-void focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:w-auto">
              {product.demo.label} →
            </a>
            <a href={product.howItWorks.href} className="inline-flex min-h-11 w-full items-center justify-center border border-white/20 px-5 py-3 text-center text-[0.75rem] uppercase tracking-[0.18em] text-data/70 transition-colors hover:border-ember hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-void sm:w-auto">
              {product.howItWorks.label}
            </a>
            <a href="/cinematic?scene=6" className="self-center text-[0.6rem] uppercase tracking-[0.2em] text-data/50 underline-offset-4 transition-colors hover:text-ember hover:underline">
              View the Thematic Experience →
            </a>
          </div>
        </div>
      </article>
    </SectionShell>
  );
}