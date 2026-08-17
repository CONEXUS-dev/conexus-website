import Image from "next/image";
import { SectionShell, MonoKicker, SerifHeading } from "@/components/primitives";
import { TEAM } from "@/content/vault";

export default function Team() {
  return (
    <SectionShell id="team">
      <MonoKicker>{TEAM.heading}</MonoKicker>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <SerifHeading>
            Built from first principles by a solo founder who discovered something
            no one expected.
          </SerifHeading>
        </div>
        <div className="col-span-12 md:col-span-7 md:border-l md:border-white/20">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="relative aspect-square w-full overflow-hidden border border-white/20">
                <Image
                  src={TEAM.image}
                  alt={TEAM.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover w-full h-full object-center grayscale"
                />
              </div>
            </div>
            <div className="col-span-12 flex flex-col justify-between md:col-span-8">
              <div>
                <h3 className="font-serif text-4xl tracking-tighter text-data">{TEAM.name}</h3>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.3em] text-ember">
                  {TEAM.role}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-data/70">{TEAM.bio}</p>
                <blockquote className="mt-6 border-l-2 border-ember pl-6 font-serif text-xl italic leading-snug text-data">
                  {TEAM.quote}
                </blockquote>
              </div>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/20 pt-6">
                {TEAM.tags.map((t) => (
                  <li key={t} className="text-[0.65rem] uppercase tracking-[0.25em] text-data/50">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
