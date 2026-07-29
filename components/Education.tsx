import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="py-[120px]">
      <div className="container mx-auto max-w-[1240px] px-8">
        <div className="eyebrow">03 — Education</div>
        <Reveal>
          <h2 className="mb-3.5 font-display text-[clamp(28px,4vw,44px)]">Academic background</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-14 max-w-[560px] text-[15.5px] leading-[1.7] text-text1">
            Currently reading for my honours degree, building a foundation across health
            information systems and applied technology.
          </p>
        </Reveal>

        <Reveal className="relative max-w-[640px] pl-8">
          <div className="absolute bottom-1.5 left-[5px] top-1.5 w-px bg-gradient-to-b from-pulse to-transparent" />
          <div className="relative">
            <div className="absolute -left-[30px] top-1 h-[11px] w-[11px] rounded-full border-2 border-pulse bg-bg0" />
            <div className="font-mono text-[11px] tracking-[0.08em] text-pulse">2022 — Present</div>
            <h4 className="my-1.5 text-[17px]">
              BHSc (Hons) Health Information and Communication Technology
            </h4>
            <p className="text-[13.5px] leading-[1.6] text-text1">
              Gampaha Wickramarachchi University of Indigenous Medicine
            </p>
            <p className="mt-1.5 text-[13.5px] leading-[1.6] text-text1">
              Coursework spanning health informatics, database systems, networking fundamentals,
              and software development, alongside applied projects connecting healthcare
              workflows to digital tools.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
