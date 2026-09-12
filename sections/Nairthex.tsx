import Image from "next/image";
import { SectionShell } from "@/components/primitives";
import { NAiRTHEX_SECTION as product } from "@/content/vault";

export default function Nairthex() {
  return (
    <SectionShell id="nairthex" className="border-t-0">
      <article className="grid grid-cols-12 gap-8 border border-white/20 p-6 md:p-10">
        <div className="col-span-12 md:col-span-5">
          <div className="relative aspect-[2.39/1] w-full overflow-hidden border border-white/20">
            <Image
              src={product.image}
              alt={`${product.name}, ${product.tagline}`}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="col-span-12 flex flex-col justify-between md:col-span-7">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">Faith and Reflection</p>
            <h3 className="mt-3 font-serif text-[clamp(2.4rem,5vw,5rem)] leading-none tracking-tighter text-data">
              {product.name}
            </h3>
            <p className="mt-3 font-serif text-xl italic text-data/55">{product.tagline}</p>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-data/65">{product.lead}</p>
            <p className="mt-4 max-w-2xl text-xs leading-relaxed text-data/40">
              A private voice-and-text threshold shaped by restraint, governed reflection, and
              human pastoral context.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={product.enter.href} className="border border-ember px-5 py-3 text-[0.65rem] uppercase tracking-[0.25em] text-ember transition-colors hover:bg-ember hover:text-void">
              {product.enter.label} →
            </a>
            <a href={product.howItWorks.href} className="border border-white/20 px-5 py-3 text-[0.65rem] uppercase tracking-[0.25em] text-data/70 transition-colors hover:border-data">
              {product.howItWorks.label}
            </a>
            <a href="/cinematic?scene=5" className="self-center text-[0.6rem] uppercase tracking-[0.2em] text-data/50 underline-offset-4 transition-colors hover:text-ember hover:underline">
              View the Thematic Experience →
            </a>
          </div>
        </div>
      </article>
    </SectionShell>
  );
}