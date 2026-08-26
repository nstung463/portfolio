import { education } from "../data/portfolio-content";
import { SectionBleed, SectionLabel } from "./section-primitives";

export function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden bg-card">
      <SectionBleed text="Education" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-[90px]">
        <SectionLabel n="08" label="Education & Certs" />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Education</h2>
        <div className="reveal-stagger mt-12 space-y-6">
          {education.map((item) => (
            <div key={item.title} className="flex flex-col gap-1 rounded-[10px] border border-border bg-background p-5 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="font-bold">{item.title}</p><p className="text-sm text-muted-foreground">{item.org}</p></div>
              <p className="font-mono text-xs font-bold tracking-[0.1em] text-primary uppercase">{item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
