"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  Compass,
  Eye,
  FileText,
  FlaskConical,
  Home,
  MoonStar,
  Route,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const sections = [
  {
    title: "Company",
    pages: [
      {
        icon: Home,
        title: "Home",
        path: "/ledger",
        description:
          "The CONEXUS refinery thesis, primary evidence, technology, products, founder, and research program.",
      },
      {
        icon: Building2,
        title: "Investors & Partners",
        path: "/investors",
        description:
          "An evidence-led company overview with explicit technical and commercial diligence boundaries.",
      },
      {
        icon: FileText,
        title: "Contact",
        path: "/contact",
        description:
          "Direct contact for research review, partnerships, product conversations, and investor diligence.",
      },
    ],
  },
  {
    title: "Technology and Evidence",
    pages: [
      {
        icon: ShieldCheck,
        title: "ECP & Nine Gears",
        path: "/conexus-sovereign",
        description:
          "The contradiction-holding calibration architecture, what is implemented, and what is not established.",
      },
      {
        icon: Zap,
        title: "The Forgetting Engine",
        path: "/fe-algorithm",
        description:
          "A subtractive optimization method with benchmark-specific results and replication limits.",
      },
      {
        icon: FlaskConical,
        title: "Evidence Overview",
        path: "/evidence",
        description:
          "The four-arm causal study, optimization benchmarks, reported findings, and explicit limitations.",
      },
      {
        icon: Route,
        title: "Vehicle Routing Case Study",
        path: "/vrp",
        description:
          "A scoped computational benchmark, not a claim of universal fleet-optimization superiority.",
      },
      {
        icon: BookOpen,
        title: "Earlier ECP Pilot Archive",
        path: "/ecp-experiment",
        description:
          "Developmental calibration experiments preserved as historical context for the stronger four-arm study.",
      },
    ],
  },
  {
    title: "Products",
    pages: [
      {
        icon: Compass,
        title: "Product Overview",
        path: "/experiences",
        description:
          "NAiRTHEX and ECHOform presented with clear human-authority and non-clinical boundaries.",
      },
      {
        icon: Sparkles,
        title: "NAiRTHEX",
        path: "/nairthex",
        description:
          "A private digital threshold before ministry, not therapy, confession, clergy, or autonomous guidance.",
      },
      {
        icon: MoonStar,
        title: "ECHOform",
        path: "/echoform",
        description:
          "A symbolic dream and reflection journal in which the user remains the author of meaning.",
      },
    ],
  },
  {
    title: "Research and Creative Artifacts",
    pages: [
      {
        icon: Eye,
        title: "Offline Observer Record",
        path: "/observer",
        description:
          "An interactive view of archived data from a completed offline paradox-holding experiment.",
      },
      {
        icon: Sparkles,
        title: "Atlas 80",
        path: "/atlas-80",
        description:
          "A documented human-AI creative artifact, not evidence of emergence or machine consciousness.",
      },
      {
        icon: BookOpen,
        title: "Speculative Notebook",
        path: "/the-future",
        description:
          "Philosophical prompts and research questions clearly separated from scientific findings.",
      },
    ],
  },
];

export default function DirectoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_48%)]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              <Compass className="h-4 w-4" />
              Site Directory
            </div>
            <h1 className="mb-7 text-5xl font-bold md:text-7xl">
              Explore the public CONEXUS record.
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-slate-300">
              The directory separates company information, measured evidence,
              product experiences, and exploratory research so each page can be
              read at the correct level of certainty.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-800 px-4 py-24">
        <div className="mx-auto max-w-7xl space-y-16">
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: sectionIndex * 0.06 }}
            >
              <h2 className="mb-7 border-b border-slate-800 pb-4 text-3xl font-bold">
                {section.title}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {section.pages.map((page) => {
                  const Icon = page.icon;
                  return (
                    <Link
                      key={page.path}
                      href={page.path}
                      className="group rounded-2xl border border-slate-700 bg-slate-900/55 p-7 transition hover:border-blue-400/50"
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 rounded-xl bg-blue-500/10 p-3 text-blue-300 transition group-hover:bg-blue-500/20">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="mb-3 text-2xl font-semibold transition group-hover:text-blue-300">
                            {page.title}
                          </h3>
                          <p className="leading-relaxed text-slate-400">
                            {page.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/25 to-slate-950 p-10 text-center md:p-14">
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">
            Claims belong beside their evidence and limits.
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-slate-300">
            Legacy concepts not included in this directory remain developmental
            or archival and should not be treated as current validated offerings.
          </p>
          <a
            href="mailto:DAngell@CONEXUSGlobalArts.Media"
            className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-blue-400"
          >
            Contact CONEXUS
          </a>
        </div>
      </section>
    </main>
  );
}

