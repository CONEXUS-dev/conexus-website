"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/evidence", label: "Evidence" },
    { href: "/#technology", label: "Technology" },
    { href: "/fe-algorithm", label: "FE Algorithm" },
    { href: "/atlas-80", label: "Atlas 80" },
    { href: "/the-future", label: "The Future" },
    { href: "/experiences", label: "Experiences" },
    { href: "/dream-mirror", label: "Dream Mirror" },
    { href: "/verticals", label: "Verticals" },
    { href: "/investors", label: "Investors" },
    { href: "/directory", label: "Directory" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="w-full px-6 py-3 flex flex-col items-center">
        {/* Logo */}
        <a href="/" className="mb-2">
          <Image
            src="/logos/CONEXUS DARK GLOWING LOGO.png"
            alt="CONEXUS Logo"
            width={300}
            height={80}
            className="object-contain h-16 w-auto"
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-5 flex-wrap justify-center">
          <a
            href="/directory"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all text-base"
          >
            Site Directory
          </a>
          <a
            href="/evidence"
            className="text-slate-300 hover:text-white transition-colors text-base font-medium"
          >
            Evidence
          </a>
          <a
            href="/#technology"
            className="text-slate-300 hover:text-white transition-colors text-base font-medium"
          >
            Technology
          </a>
          <a
            href="/fe-algorithm"
            className="text-slate-300 hover:text-white transition-colors text-base font-medium"
          >
            FE Algorithm
          </a>
          <a
            href="/atlas-80"
            className="text-slate-300 hover:text-white transition-colors text-base font-medium"
          >
            Atlas 80
          </a>
          <a
            href="/the-future"
            className="text-slate-300 hover:text-white transition-colors text-base font-medium"
          >
            The Future
          </a>
          <a
            href="/experiences"
            className="text-slate-300 hover:text-white transition-colors text-base font-medium"
          >
            Experiences
          </a>
          <a
            href="/dream-mirror"
            className="text-slate-300 hover:text-white transition-colors text-base font-medium"
          >
            Dream Mirror
          </a>
          <a
            href="/verticals"
            className="text-slate-300 hover:text-white transition-colors text-base font-medium"
          >
            Verticals
          </a>
          <a
            href="/investors"
            className="text-slate-300 hover:text-white transition-colors text-base font-medium"
          >
            Investors
          </a>
          <a
            href="/#contact"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all text-base"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all"
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
