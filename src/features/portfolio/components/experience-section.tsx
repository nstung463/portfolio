import { experience } from "../data/portfolio-content";
import { SectionBleed, SectionLabel } from "./section-primitives";

/**
 * Horizontal, snap-scrolling timeline. Reads as a track you move along rather
 * than yet another vertical list of cards.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-[70px]">
      <SectionBleed text="Experience" />
      <div className="relative z-10">
        <div className="reveal mx-auto max-w-6xl px-5">
          <SectionLabel n="03" label="Experience" />
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-bold sm:text-5xl">Recent work</h2>
            <p className="font-mono text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
              {"// scroll the track →"}
            </p>
          </div>
        </div>

        {/* the rail */}
        <div className="relative mt-12">
          <ol className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-6 [scrollbar-width:thin] xl:scroll-px-[max(1.25rem,calc((100vw-72rem)/2))] xl:px-[max(1.25rem,calc((100vw-72rem)/2))]">
            {experience.map((job, index) => (
              <li
                key={job.org}
                className="reveal w-[85vw] shrink-0 snap-start sm:w-[400px]"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="size-2.5 shrink-0 rounded-full bg-primary" />
                  <span aria-hidden className="h-px flex-1 bg-border" />
                </div>
                <div className="relative mt-[18px]">
                  <article className="flex h-full flex-col rounded-[10px] border border-border bg-card p-5 transition-colors hover:border-primary">
                    <p className="font-mono text-xs font-bold tracking-[0.1em] text-primary uppercase">
                      {job.period}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">{job.role}</h3>
                    <p className="text-sm font-semibold text-primary">{job.org}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{job.meta}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span aria-hidden className="mt-0.5 text-primary">
                            ▪
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
