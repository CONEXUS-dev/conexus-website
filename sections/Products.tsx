import { SectionShell, MonoKicker, SerifHeading } from "@/components/primitives";
import ProductGateways from "@/components/products/ProductGateways";
import { GATEWAYS } from "@/content/vault";

export default function Products() {
  return (
    <SectionShell id="products">
      <MonoKicker>Product Gateways</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <SerifHeading>
            Two thresholds. <span className="italic text-ember">One doctrine</span> of
            restraint.
          </SerifHeading>
        </div>
        <div className="col-span-12 flex items-end md:col-span-4">
          <p className="text-xs leading-relaxed text-data/50">
            SELECT A GATEWAY TO ENTER SUBTRACTIVE ISOLATION — THE PERIPHERY
            FADES, THE MASK NARROWS TO 2.39:1.
          </p>
        </div>
      </div>
      <ProductGateways products={GATEWAYS} />
    </SectionShell>
  );
}
