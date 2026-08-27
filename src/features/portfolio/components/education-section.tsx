import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio-content";
import { SectionBleed, SectionLabel } from "./section-primitives";

export function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden bg-card">
      <SectionBleed text="Education" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-[90px]">
        <SectionLabel n="07" label="Education & Certs" />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Education</h2>

        <div data-reveal-stagger className="mt-12 space-y-4">
          {education.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="group flex flex-col gap-4 rounded-[10px] border border-border bg-background p-5 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-[0_16px_32px_-14px_rgba(0,0,0,0.3)] sm:flex-row sm:items-center sm:gap-5 sm:p-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <GraduationCap aria-hidden className="size-6" />
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-bold text-balance">{item.title}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <span>{item.org}</span>
                  {item.detail ? (
                    <>
                      <span aria-hidden className="text-border">
                        ·
                      </span>
                      <span className="font-semibold text-foreground">{item.detail}</span>
                    </>
                  ) : null}
                  {item.inProgress ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 py-0.5 pr-2.5 pl-2 text-xs font-semibold text-primary">
                      <span aria-hidden className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      In progress
                    </span>
                  ) : null}
                </div>
              </div>

              <p className="shrink-0 font-mono text-xs font-bold tracking-[0.1em] text-primary uppercase sm:text-right">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
