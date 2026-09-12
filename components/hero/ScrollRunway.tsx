import Image from "next/image";
import HeroTerminal from "./HeroTerminal";

export default function ScrollRunway() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 py-28"
    >
      <div className="absolute inset-0 opacity-70" data-hero-animation="ambient">
        <HeroTerminal ambient />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.72)_100%)]" />
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-center text-center">
        <Image
          src="/branding/CONEXUS_Logo_White_Transparent.png"
          alt="CONEXUS"
          width={1536}
          height={512}
          priority
          className="h-auto w-full max-w-[min(82vw,960px)] object-contain"
        />
      </div>
    </section>
  );
}
