import Reveal from "@/components/Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-[120px]">
      <div className="container mx-auto max-w-[1240px] px-8">
        <div className="eyebrow">04 — Experience</div>
        <Reveal>
          <h2 className="mb-3.5 font-display text-[clamp(28px,4vw,44px)]">Where I&apos;ve worked</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-14 max-w-[560px] text-[15.5px] leading-[1.7] text-text1">
            Roles that sharpened how I handle records, people, and process.
          </p>
        </Reveal>

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 0.08}>
              <div className="glass grid grid-cols-1 gap-6 p-8 transition-all duration-400 hover:-translate-y-1.5 hover:border-pulse hover:shadow-[0_20px_50px_-20px_rgba(51,242,194,0.25)] sm:grid-cols-[180px_1fr]">
                <div>
                  <div className="font-mono text-xs text-pulse">{exp.duration}</div>
                  <h4 className="mt-1.5 text-[15px]">{exp.role}</h4>
                  <div className="text-[13.5px] text-text1">{exp.company}</div>
                </div>
                <div>
                  <h4 className="text-[19px]">{exp.heading}</h4>
                  <div className="mb-2.5 mt-0.5 text-[13.5px] text-text1">{exp.tagline}</div>
                  <ul className="flex flex-col gap-1.5">
                    {exp.points.map((point) => (
                      <li key={point} className="relative pl-4 text-[13.5px] text-text1">
                        <span className="absolute left-0 top-[9px] h-px w-1.5 bg-pulse" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
