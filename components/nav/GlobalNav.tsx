"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useFocusMode } from "./FocusContext";

const HOME_SECTIONS = [
  { label: "ECHOagent", href: "/#echoagent" },
  { label: "Evidence", href: "/#evidence" },
  { label: "Cyndicate", href: "/#cyndicate" },
  { label: "Technology", href: "/#technology" },
  { label: "Products", href: "/#products" },
  { label: "Company", href: "/#company" },
] as const;

export default function GlobalNav() {
  const pathname = usePathname();
  const { activeGateway } = useFocusMode();
  const isolated = activeGateway !== null;
  const isHome = pathname === "/";

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      className={`fixed inset-x-0 top-0 z-40 overflow-hidden border-b border-white/20 bg-void/80 backdrop-blur-md transition-opacity duration-700 ${
        isolated ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {isHome ? (
        <nav
          aria-label="Homepage sections"
          className="mx-auto flex max-w-[1600px] items-center gap-6 overflow-x-auto whitespace-nowrap px-4 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 md:px-8"
        >
          <span aria-hidden="true" className="hidden md:block" />
          <div className="contents md:flex md:items-center md:justify-center md:gap-8">
            {HOME_SECTIONS.map((section) => (
              <a
                key={section.label}
                href={section.href}
                className="shrink-0 text-[0.6rem] uppercase tracking-[0.2em] text-data/70 transition-colors hover:text-ember focus-visible:text-ember focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ember md:text-[0.65rem] md:tracking-[0.25em]"
              >
                {section.label}
              </a>
            ))}
          </div>
          <a
            href="/cinematic"
            className="shrink-0 text-[0.55rem] uppercase tracking-[0.18em] text-data/35 transition-colors hover:text-data/70 focus-visible:text-data/70 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-data/70 md:justify-self-end md:text-[0.6rem] md:tracking-[0.2em]"
          >
            Thematic Experience
          </a>
        </nav>
      ) : (
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-4 py-3 md:px-8">
          <a href="/" className="shrink-0">
            <Image
              src="/branding/CONEXUS_Logo_White_Transparent.png"
              alt="CONEXUS home"
              width={140}
              height={47}
              className="h-7 w-auto object-contain"
              priority
            />
          </a>
          <a
            href="/"
            className="text-right text-[0.6rem] uppercase tracking-[0.2em] text-data/70 transition-colors hover:text-ember focus-visible:text-ember"
          >
            View Company Site
          </a>
        </div>
      )}
    </motion.header>
  );
}
