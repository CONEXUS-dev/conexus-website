"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navigationGroups = [
  {
    label: "Technology",
    href: "/#technology",
    links: [
      { href: "/conexus-sovereign", label: "ECP & Nine Gears" },
      { href: "/fe-algorithm", label: "Forgetting Engine" },
    ],
  },
  {
    label: "Evidence",
    href: "/evidence",
    links: [
      { href: "/evidence", label: "Evidence Overview" },
      { href: "/evidence#four-arm", label: "Four-Arm Validation" },
      { href: "/evidence#forgetting-engine", label: "Optimization Benchmarks" },
    ],
  },
  {
    label: "Products",
    href: "/experiences",
    links: [
      { href: "/nairthex", label: "NAiRTHEX" },
      { href: "/echoform", label: "ECHOform" },
    ],
  },
  {
    label: "Research",
    href: "/observer",
    links: [
      { href: "/observer", label: "Offline Observer Record" },
      { href: "/atlas-80", label: "Atlas 80 Creative Artifact" },
      { href: "/the-future", label: "Speculative Notebook" },
    ],
  },
  {
    label: "Company",
    href: "/#team",
    links: [
      { href: "/#team", label: "Founder & Company" },
      { href: "/investors", label: "Investors & Partners" },
      { href: "/directory", label: "Site Directory" },
    ],
  },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3">
        <a href="/" aria-label="CONEXUS home" className="shrink-0">
          <Image
            src="/logos/CONEXUS DARK GLOWING LOGO.png"
            alt="CONEXUS Logo"
            width={250}
            height={68}
            className="h-12 w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navigationGroups.map((group) => (
            <div key={group.label} className="group relative">
              <a
                href={group.href}
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                {group.label}
                <ChevronDown className="h-4 w-4 opacity-60" />
              </a>

              <div className="pointer-events-none absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="rounded-2xl border border-slate-700 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-xl">
                  {group.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <a
            href="/contact"
            className="ml-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-800 bg-slate-950/98 lg:hidden"
          >
            <div className="max-h-[calc(100dvh-73px)] space-y-6 overflow-y-auto px-5 py-6">
              {navigationGroups.map((group) => (
                <div key={group.label}>
                  <a
                    href={group.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="mb-2 block text-sm font-semibold uppercase tracking-[0.16em] text-white"
                  >
                    {group.label}
                  </a>
                  <div className="space-y-1 border-l border-slate-800 pl-4">
                    {group.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-slate-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
