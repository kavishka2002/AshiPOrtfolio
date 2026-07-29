"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import SkillRing from "@/components/SkillRing";
import { technicalSkills, professionalSkills } from "@/lib/data";

export default function Skills() {
  const [tab, setTab] = useState<"tech" | "pro">("tech");

  return (
    <section id="skills" className="py-[120px]">
      <div className="container mx-auto max-w-[1240px] px-8">
        <div className="eyebrow">02 — Skills</div>
        <Reveal>
          <h2 className="mb-3.5 font-display text-[clamp(28px,4vw,44px)]">Tools I reach for</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-10 max-w-[560px] text-[15.5px] leading-[1.7] text-text1">
            A working technical toolkit paired with the professional habits that make it useful
            in a team.
          </p>
        </Reveal>

        <div className="mb-10 flex gap-2.5">
          {(["tech", "pro"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full border px-5 py-2.5 text-[13px] transition-colors ${
                tab === t
                  ? "border-pulse bg-pulse font-semibold text-bg0"
                  : "border-glassBrd text-text1"
              }`}
            >
              {t === "tech" ? "Technical" : "Professional"}
            </button>
          ))}
        </div>

        {tab === "tech" ? (
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {technicalSkills.map((s) => (
              <SkillRing key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((s) => (
              <div
                key={s}
                className="glass rounded-full px-5 py-3 text-[13.5px] text-text1 transition-all hover:-translate-y-1 hover:scale-105 hover:border-pulse hover:text-pulse"
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
