"use client";

import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-[120px]">
      <div className="container mx-auto max-w-[1240px] px-8">
        <div className="eyebrow">05 — Projects</div>
        <Reveal>
          <h2 className="mb-3.5 font-display text-[clamp(28px,4vw,44px)]">Selected work</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-14 max-w-[560px] text-[15.5px] leading-[1.7] text-text1">
            A mix of health-tech concepts and applied frontend builds.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <TiltCard className="glass overflow-hidden">
                <div className="relative flex h-[190px] items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-bg2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple/35 to-pulse/15" />
                  <span className="z-[2] font-mono text-xs uppercase tracking-[0.1em] text-text2">
                    {p.name}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg">{p.name}</h4>
                  <p className="mb-4 text-[13.5px] leading-[1.7] text-text1">{p.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-glassBrd px-2.5 py-1 font-mono text-[10.5px] text-text2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-1.5 text-[12.5px] font-semibold text-text0 hover:text-pulse">
                      <Github size={14} /> GitHub
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-1.5 text-[12.5px] font-semibold text-text0 hover:text-pulse">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
