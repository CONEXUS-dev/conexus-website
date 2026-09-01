import Link from "next/link";

export default function LedgerEscapeHatch() {
  return (
    <Link
      href="/"
      className="fixed right-14 top-4 z-[60] border border-white/20 bg-black/50 px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm transition-colors hover:border-white/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-16 sm:px-4 sm:text-[0.65rem]"
    >
      VIEW COMPANY SITE
    </Link>
  );
}