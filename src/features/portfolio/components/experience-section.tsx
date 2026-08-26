import { cn } from "@/lib/utils";
import { experience } from "../data/portfolio-content";
import { SectionBleed, SectionLabel } from "./section-primitives";

/**
 * Vertical timeline. Entries alternate sides of a centre spine on large
 * screens and stack against a left rail below that. The spine fills and the
 * dots light up as you scroll — driven by `view()` timelines in `globals.css`,
 * so there is no JavaScript here at all.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-[90px]">
      <SectionBleed text="Experience" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="reveal">
          <SectionLabel n="03" label="Experience" />
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Recent work</h2>
        </div>

        <ol className="relative mt-16 lg:mt-20">
          {/* spine */}
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-2 w-px bg-border lg:left-1/2 lg:-translate-x-1/2"
          />
          <span
            aria-hidden
            className="timeline-progress absolute top-2 bottom-2 left-2 w-px bg-primary lg:left-1/2 lg:-translate-x-1/2"
          />

          {experience.map((job, index) => {
            const isLeft = index % 2 === 0;
            const number = String(index + 1).padStart(2, "0");

            return (
              <li
                key={job.org}
                className="relative grid gap-3 pb-14 pl-10 last:pb-0 lg:grid-cols-[1fr_6rem_1fr] lg:gap-0 lg:pb-20 lg:pl-0"
              >
                <span
                  aria-hidden
                  className="timeline-dot absolute top-2 left-2 size-3.5 -translate-x-1/2 rounded-full ring-4 ring-background lg:left-1/2"
                />

                <article
                  className={cn(
                    "reveal rounded-[10px] border border-border bg-card p-5 transition-colors hover:border-primary lg:row-start-1 lg:p-6",
                    isLeft ? "lg:col-start-1" : "lg:col-start-3",
                  )}
                >
                  <p className="font-mono text-xs font-bold tracking-[0.1em] text-primary uppercase">
                    {job.org}
                  </p>
                  <h3 className="mt-2 text-xl font-bold lg:text-2xl">{job.role}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{job.meta}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden className="mt-0.5 shrink-0 text-primary">
                          ▪
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                {/* Outer column: index numeral + dates, pulled toward the spine. */}
                <div
                  className={cn(
                    "reveal order-first flex items-baseline gap-3 lg:order-none lg:row-start-1 lg:block lg:pt-1",
                    isLeft ? "lg:col-start-3 lg:pl-2" : "lg:col-start-1 lg:pr-2 lg:text-right",
                  )}
                >
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-display)] text-2xl leading-none font-bold text-muted-foreground/30 lg:block lg:text-5xl"
                  >
                    {number}
                  </span>
                  <span className="font-mono text-xs font-bold tracking-[0.1em] text-muted-foreground uppercase lg:mt-3 lg:block">
                    {job.period}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
