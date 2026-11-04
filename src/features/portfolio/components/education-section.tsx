import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio-content";
import { SectionLabel } from "./section-primitives";
import { RevealWords } from "./reveal-words";

export function EducationSection() {
  return (
    <section id="education" className="starfield-surface relative overflow-hidden border-t border-border">
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-[90px]">
        <SectionLabel n="07" label="Education & Certs" />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          <RevealWords text="Education" />
        </h2>

        <div data-reveal-stagger className="mt-12 space-y-4">
          {education.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="liquid-glass liquid-glass-regular liquid-glass-panel flex flex-col gap-4 rounded-[1.35rem] p-5 sm:flex-row sm:items-center sm:gap-5 sm:p-6"
            >
              <span className="liquid-glass-plate flex size-12 shrink-0 items-center justify-center rounded-xl text-(--glass-accent)">
                <GraduationCap aria-hidden className="size-6" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-bold text-balance">{item.title}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-foreground/85">
                  <span>{item.org}</span>
                  {item.detail ? (
                    <>
                      <span aria-hidden>
                        ·
                      </span>
                      <span className="font-semibold text-foreground">{item.detail}</span>
                    </>
                  ) : null}
                  {item.inProgress ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/12 bg-foreground/7 py-0.5 pr-2.5 pl-2 text-xs font-semibold text-foreground">
                      <span aria-hidden className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70 motion-reduce:animate-none" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      In progress
                    </span>
                  ) : null}
                </div>
              </div>

              <p className="shrink-0 font-mono text-xs font-bold tracking-[0.1em] text-foreground/85 uppercase sm:text-right">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
