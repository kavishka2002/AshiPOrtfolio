import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { aboutCounters, academicTimeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-[120px]">
      <div className="container mx-auto max-w-[1240px] px-8">
        <div className="eyebrow">01 — About</div>
        <Reveal>
          <h2 className="mb-3.5 font-display text-[clamp(28px,4vw,44px)]">Where care meets code</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-14 max-w-[560px] text-[15.5px] leading-[1.7] text-text1">
            A quick look at how I got here, what I study, and what I&apos;ve picked up along the way.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          <Reveal className="glass p-9">
            <p className="mb-4 text-[15px] leading-[1.85] text-text1">
              I&apos;m an undergraduate reading for a BHSc (Hons) in Health Information and
              Communication Technology at the Gampaha Wickramarachchi University of Indigenous
              Medicine. My focus sits at the intersection of healthcare systems and modern
              frontend engineering — building interfaces that make clinical and administrative
              information easier to work with.
            </p>
            <p className="mb-4 text-[15px] leading-[1.85] text-text1">
              Outside coursework, I build with React and Next.js, and I&apos;ve spent time in
              real administrative and customer-facing roles that shaped how I think about
              usability, documentation, and working with people.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {aboutCounters.map((c) => (
                <div key={c.label} className="glass px-3.5 py-5 text-center">
                  <Counter target={c.value} className="font-display text-[30px] text-pulse" />
                  <div className="mt-1 text-[11px] uppercase tracking-[0.05em] text-text2">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass p-9" delay={0.1}>
            <h4 className="mb-5 text-base">Academic Journey</h4>
            <div className="relative pl-8">
              <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-gradient-to-b from-pulse to-transparent" />
              {academicTimeline.map((item) => (
                <div key={item.title} className="relative pb-7 last:pb-0">
                  <div className="absolute -left-[30px] top-1 h-[11px] w-[11px] rounded-full border-2 border-pulse bg-bg0" />
                  <div className="font-mono text-[11px] tracking-[0.08em] text-pulse">{item.year}</div>
                  <h4 className="my-1 text-[15px]">{item.title}</h4>
                  <p className="text-[13.5px] leading-[1.6] text-text1">{item.org}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
