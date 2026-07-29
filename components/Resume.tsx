"use client";

import Reveal from "@/components/Reveal";

export default function Resume() {
  return (
    <section id="resume" className="py-[120px]">
      <div className="container mx-auto max-w-[1240px] px-8">
        <div className="eyebrow">07 — Resume</div>
        <Reveal>
          <div className="group glass flex flex-wrap items-center justify-between gap-10 overflow-hidden p-[60px]">
            <div className="h-[190px] w-[150px] flex-shrink-0 -rotate-6 rounded-[10px] border border-glassBrd bg-gradient-to-br from-navy to-bg2 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-0">
              <div className="relative h-full w-full">
                <div className="absolute left-[18px] right-[18px] top-[18px] h-2 rounded bg-glassBrd" />
                <div
                  className="absolute left-[18px] right-[34px] top-9 h-[60px]"
                  style={{
                    background:
                      "repeating-linear-gradient(var(--glass-brd) 0 2px, transparent 2px 10px)"
                  }}
                />
              </div>
            </div>
            <div>
              <h3 className="mb-2.5 text-2xl">Get the full picture</h3>
              <p className="mb-5 max-w-[380px] text-sm leading-[1.7] text-text1">
                Download a complete copy of my CV — education, experience, skills and
                certifications in one document.
              </p>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple to-pulseDim px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.6)] transition-transform hover:-translate-y-1"
              >
                Download CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
