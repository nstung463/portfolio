import { skillGroups } from "../data/portfolio-content";
import { SectionBleed, SectionLabel } from "./section-primitives";
import { SkillIcon } from "./skill-icon";
import { RevealWords } from "./reveal-words";

export function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-card">
      <SectionBleed text="Stack" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-[90px]">
        <SectionLabel n="02" label="Skills" />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          <RevealWords text="What I build with" />
        </h2>
        <div data-reveal-stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="rounded-[10px] border border-border bg-background p-5">
              <p className="font-mono text-xs font-bold tracking-[0.1em] text-primary uppercase">{group.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <SkillIcon
                      name={item}
                      className="size-3.5 shrink-0"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
