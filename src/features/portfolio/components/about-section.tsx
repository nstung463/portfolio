import { aboutContent, stats } from "../data/portfolio-content";
import { SectionBleed, SectionLabel, Stamp } from "./section-primitives";

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl overflow-hidden px-5 py-[70px]">
      <SectionBleed text="About" />
      <Stamp className="top-10 right-[6%]">{"// grounded, not guessed"}</Stamp>
      <div className="relative z-10">
        <SectionLabel n="01" label="About" />
        <h2 className="mt-4 max-w-3xl text-3xl leading-[1.1] font-bold sm:text-5xl">{aboutContent.headline}</h2>
        <p className="mt-6 max-w-xl text-muted-foreground">{aboutContent.summary}</p>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-[10px] border border-border bg-card p-5">
              <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
