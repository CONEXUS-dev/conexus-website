"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useFocusMode } from "./FocusContext";

const SECTIONS = [
  { label: "REFINERY", href: "/ledger#refinery" },
  { label: "EVIDENCE", href: "/evidence" },
  { label: "PRODUCTS", href: "/nairthex" },
  { label: "TEAM", href: "/ledger#team" },
  { label: "MANIFESTO", href: "/echoform" },
] as const;

export default function GlobalNav() {
  const { activeGateway } = useFocusMode();
  const isolated = activeGateway !== null;

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className={`fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-void/70 backdrop-blur-md transition-opacity duration-700 ${
        isolated ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 items-center px-4 py-3 md:px-8">
        <a href="/ledger#top" className="col-span-6 flex items-center gap-3 md:col-span-3">
          <Image
            src="/logos/CONEXUS LOGO.png"
            alt="CONEXUS"
            width={140}
            height={32}
            className="h-7 w-auto object-contain"
            priority
          />
        </a>
        <nav className="col-span-6 hidden items-center justify-end gap-6 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-[0.65rem] uppercase tracking-[0.25em] text-data/70 transition-colors hover:text-ember"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href="/"
          className="col-span-3 hidden justify-self-end text-[0.6rem] uppercase tracking-[0.2em] text-data/60 transition-colors hover:text-ember md:block"
        >
          RETURN TO VAULT
        </a>
        <div className="col-span-6 flex items-center justify-end gap-4 md:hidden">
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-data/50">
            CONEXUS/2.0
          </span>
          <a
            href="/"
            className="text-[0.6rem] uppercase tracking-[0.18em] text-data/70 transition-colors hover:text-ember"
          >
            RETURN TO VAULT
          </a>
        </div>
      </div>
    </motion.header>
  );
}
