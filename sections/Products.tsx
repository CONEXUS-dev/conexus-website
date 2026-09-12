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
            NAiRTHEX and ECHOform bring the underlying methods into governed reflection,
            user-directed interpretation, and human context.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
