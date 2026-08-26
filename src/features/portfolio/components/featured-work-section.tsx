import { featuredWork } from "../data/portfolio-content";
import { SectionBleed, SectionLabel, Stamp } from "./section-primitives";

export function FeaturedWorkSection() {
  return (
    <section id="work" className="relative overflow-hidden bg-card">
      <SectionBleed text="Work" />
      <Stamp className="top-10 right-[6%]">{"// patent + open source"}</Stamp>
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-[70px]">
        <SectionLabel n="04" label="Work" />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Patent &amp; open source</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {featuredWork.map((work) => (
            <a key={work.title} href={work.href} target="_blank" rel="noreferrer" className="group flex flex-col rounded-[10px] border border-border bg-background p-5 transition-colors hover:border-primary">
              <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.1em] text-primary uppercase">{work.tag}</span>
              <p className="mt-3 text-lg font-bold group-hover:text-primary">{work.title} ↗</p>
              <p className="mt-2 text-sm text-muted-foreground">{work.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
