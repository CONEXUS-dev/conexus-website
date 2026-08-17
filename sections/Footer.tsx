import Image from "next/image";
import { FOOTER } from "@/content/vault";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/20 bg-void">
      <div className="mx-auto max-w-[1600px] px-4 py-20 md:px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-5">
            <Image
              src={FOOTER.logo}
              alt="CONEXUS"
              width={220}
              height={50}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-6 max-w-xs text-[0.65rem] uppercase leading-loose tracking-[0.25em] text-data/40">
              NOT ANOTHER AI COMPANY. THE SOLUTION. THE WORLD DOES NOT NEED
              ANOTHER WELL. IT NEEDS A REFINERY.
            </p>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
              {FOOTER.foundation.name}
            </p>
            <p className="mt-2 font-serif text-2xl italic tracking-tight text-data/50">
              {FOOTER.foundation.status}
            </p>
            <div className="mt-8 space-y-4 border-t border-white/20 pt-6">
              {FOOTER.upcoming.map((u) => (
                <div key={u.name} className="flex items-baseline justify-between gap-6">
                  <span className="font-serif text-xl tracking-tight text-data">{u.name}</span>
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-data/40">
                    {u.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-data/40">INDEX</p>
            <ul className="mt-4 space-y-2">
              {[
                ["REFINERY", "#refinery"],
                ["EVIDENCE", "/evidence"],
                ["PRODUCTS", "/nairthex"],
                ["NAiRTHEX", "/nairthex"],
                ["ECHOform", "/echoform"],
                ["TEAM", "#team"],
              ].map(([label, href]) => (
                <li key={href}>
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
          <span>CONEXUS GLOBAL ARTS — 2.0</span>
          <span>OKLCH VOID FIELD / SUBTRACTIVE ARCHITECTURE</span>
        </div>
      </div>
    </footer>
  );
}
