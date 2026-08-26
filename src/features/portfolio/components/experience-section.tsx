import { experience } from "../data/portfolio-content";
import { SectionBleed, SectionLabel } from "./section-primitives";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl overflow-hidden px-5 py-[70px]">
      <SectionBleed text="Experience" />
      <div className="relative z-10">
        <SectionLabel n="03" label="Experience" />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Recent work</h2>
        <div className="mt-12 space-y-10 border-l-2 border-border pl-7">
          {experience.map((job) => (
            <div key={job.org} className="relative">
              <span className="absolute -left-[33px] top-1.5 size-3 rounded-full bg-primary" />
              <p className="font-mono text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase">{job.period}</p>
              <h3 className="mt-1 text-xl font-bold">{job.role} <span className="text-primary">· {job.org}</span></h3>
              <p className="mt-0.5 text-sm text-muted-foreground">{job.meta}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2"><span className="mt-0.5 text-primary">▪</span><span>{point}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
