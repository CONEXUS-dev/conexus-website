import Image from "next/image";
import { MISSION_025 } from "@/content/vault";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/20 bg-void">
      <div className="mx-auto max-w-[1600px] px-4 py-20 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <Image
              src={MISSION_025.footer.logo}
              alt="CONEXUS"
              width={220}
              height={50}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-6 max-w-xs text-[0.65rem] uppercase leading-loose tracking-[0.25em] text-data/40">
              {MISSION_025.footer.statement}
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
              CONEXUS
            </p>
            <p className="mt-2 font-serif text-2xl italic tracking-tight text-data/50">
              Systems. Research. Products.
            </p>
            <div className="mt-8 space-y-4 border-t border-white/20 pt-6">
              <a href="mailto:DAngell@CONEXUSGlobalArts.Media" className="block font-serif text-xl tracking-tight text-data transition-colors hover:text-ember">
                Contact the Founder
              </a>
              <a href="/investors" className="block font-serif text-xl tracking-tight text-data transition-colors hover:text-ember">
                Investor Overview
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-data/40">INDEX</p>
            <ul className="mt-4 space-y-2">
              {[
                ["ECHOagent", "/#echoagent"],
                ["EVIDENCE", "/#evidence"],
                ["CYNDICATE", "/#cyndicate"],
                ["TECHNOLOGY", "/#technology"],
                ["PRODUCTS", "/#products"],
                ["COMPANY", "/#company"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[0.65rem] uppercase tracking-[0.25em] text-data/60 transition-colors hover:text-ember"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/20 pt-6 text-[0.65rem] uppercase tracking-[0.25em] text-data/30 md:flex-row md:items-center md:justify-between">
          <span>CONEXUS GLOBAL ARTS</span>
          <span>EVIDENCE BEFORE NARRATIVE</span>
        </div>
      </div>
    </footer>
  );
}
