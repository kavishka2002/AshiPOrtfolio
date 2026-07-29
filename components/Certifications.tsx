"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const [selected, setSelected] = useState<(typeof certifications)[number] | null>(null);

  return (
    <section id="certifications" className="py-[120px]">
      <div className="container mx-auto max-w-[1240px] px-8">
        <div className="eyebrow">06 — Certifications</div>
        <Reveal>
          <h2 className="mb-3.5 font-display text-[clamp(28px,4vw,44px)]">Certifications</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-14 max-w-[560px] text-[15.5px] leading-[1.7] text-text1">
            Click a certificate to preview details.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <button
                onClick={() => setSelected(c)}
                className="cert-card glass w-full p-6 text-center transition-transform duration-300 hover:-translate-y-1.5 hover:border-pulse"
              >
                <div className="mx-auto mb-3.5 flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-gradient-to-br from-purple to-pulseDim font-display font-bold text-white">
                  {c.short}
                </div>
                <h4 className="mb-1.5 text-sm">{c.name}</h4>
                <p className="text-xs text-text2">{c.issuer}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[9997] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-[480px] p-10 text-center"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-[18px] top-4 text-xl text-text2"
              >
                ✕
              </button>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple to-pulseDim font-display text-xl font-bold text-white">
                {selected.short}
              </div>
              <h3 className="mb-2 text-xl">{selected.name}</h3>
              <p className="text-[13.5px] text-text1">{selected.issuer}</p>
              <p className="font-mono text-xs text-pulse">Issued {selected.date}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
