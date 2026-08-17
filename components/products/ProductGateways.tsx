"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useFocusMode, type GatewayId } from "@/components/nav/FocusContext";
import type { GatewayProduct } from "@/content/vault";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProductGateways({
  products,
}: {
  products: readonly GatewayProduct[];
}) {
  const { activeGateway, activate, deactivate } = useFocusMode();

  useEffect(() => {
    if (activeGateway === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") deactivate();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeGateway, deactivate]);

  const active = products.find((p) => p.id === activeGateway) ?? null;

  return (
    <>
      <div className="mt-16 grid grid-cols-12 gap-px border border-white/20 bg-white/20">
        {products.map((p) => {
          const silenced = activeGateway !== null && activeGateway !== p.id;
          return (
            <motion.button
              key={p.id}
              type="button"
              layoutId={`gateway-${p.id}`}
              onClick={() => activate(p.id)}
              transition={{ duration: 0.7, ease: EASE }}
              className={`group relative col-span-12 overflow-hidden bg-void p-0 text-left md:col-span-6 ${
                silenced ? "opacity-25" : "opacity-100"
              }`}
              aria-label={`Open ${p.name} in isolation mode`}
            >
              <div className="relative aspect-[2.39/1] w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover w-full h-full object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
              </div>
              <div className="grid grid-cols-12 items-end gap-4 p-6 md:p-8">
                <div className="col-span-12 md:col-span-9">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
                    {p.kicker}
                  </p>
                  <h3 className="mt-2 font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tighter text-data">
                    {p.name}
                  </h3>
                  <p className="mt-3 max-w-md text-xs leading-relaxed text-data/60">
                    {p.description}
                  </p>
                </div>
                <p className="col-span-12 text-right text-[0.65rem] uppercase tracking-[0.3em] text-data/40 transition-colors group-hover:text-ember md:col-span-3">
                  ISOLATE ▸
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key="isolation-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={deactivate}
            className="fixed inset-0 z-50 flex items-center justify-center bg-void/95 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} isolation mode`}
          >
            <motion.div
              layoutId={`gateway-${active.id as GatewayId}`}
              transition={{ duration: 0.7, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[min(92vw,1400px)] overflow-hidden border border-white/20 bg-void"
              style={{ aspectRatio: "2.39 / 1" }}
            >
              <Image
                src={active.image}
                alt={active.name}
                fill
                sizes="92vw"
                className="object-cover w-full h-full object-center opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
                <div className="flex items-start justify-between">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-ember">
                    {active.kicker} — SUBTRACTIVE ISOLATION
                  </p>
                  <button
                    type="button"
                    onClick={deactivate}
                    className="border border-white/20 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-data/70 transition-colors hover:border-ember hover:text-ember"
                  >
                    Close ✕
                  </button>
                </div>

                <div className="grid grid-cols-12 items-end gap-4">
                  <div className="col-span-12 md:col-span-8">
                    <h3 className="font-serif text-[clamp(2.2rem,5vw,5rem)] leading-none tracking-tighter text-data">
                      {active.name}
                    </h3>
                    <p className="mt-2 font-serif text-lg italic tracking-tight text-data/60">
                      {active.tagline}
                    </p>
                    <p className="mt-4 max-w-xl text-xs leading-relaxed text-data/60">
                      {active.description}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-4 md:text-right">
                    <a
                      href={active.href}
                      className="inline-block border border-ember px-6 py-3 text-[0.65rem] uppercase tracking-[0.3em] text-ember transition-colors hover:bg-ember hover:text-void"
                    >
                      {active.cta} →
                    </a>
                  </div>
                </div>
              </div>

              <p className="absolute bottom-2 right-4 text-[0.65rem] uppercase tracking-[0.25em] text-data/30">
                2.39:1 ANAMORPHIC MASK
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
