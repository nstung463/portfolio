import { cn } from "@/lib/utils";
import { experience } from "../data/portfolio-content";
import { SectionBleed, SectionLabel } from "./section-primitives";
import { TimelineSpine } from "./timeline-spine";
import { RevealWords } from "./reveal-words";

/**
 * Vertical timeline. Entries alternate sides of a centre spine on large
 * screens and stack against a left rail below that. The spine fills with the
 * scroll position (`timeline-spine.tsx`); the cards, dates and dots are revealed
 * by the observer in `scroll-reveal.tsx` as each entry scrolls up into view,
 * and closed again on the way back up — `data-reveal-repeat` opts the list
 * into that, so the section reads the same scrolled either way.
 */
export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-[90px]">
      <SectionBleed text="Experience" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div data-reveal>
          <SectionLabel n="03" label="Experience" />
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            <RevealWords text="Recent work" />
          </h2>
        </div>

        <ol data-reveal-repeat className="relative mt-16 lg:mt-20">
          <TimelineSpine />

          {experience.map((job, index) => {
            const isLeft = index % 2 === 0;
            const number = String(index + 1).padStart(2, "0");
            const isCurrent = job.period.includes("Present");
            // `meta` is already a `·`-separated line of facts. Split it and it
            // becomes a datasheet row instead of a sentence nobody finishes.
            const facts = job.meta.split("·").map((fact) => fact.trim()).filter(Boolean);

            return (
              <li
                key={job.org}
                className="relative grid gap-3 pb-14 pl-10 last:pb-0 lg:grid-cols-[1fr_6rem_1fr] lg:gap-0 lg:pb-20 lg:pl-0"
              >
                {/* Unlit dot underneath, lit dot popping in over it. */}
                <span
                  aria-hidden
                  className="absolute top-2 left-2 size-3.5 -translate-x-1/2 rounded-full bg-border ring-4 ring-background lg:left-1/2"
                />
                <span
                  aria-hidden
                  data-reveal
                  data-reveal-variant="pop"
                  className="absolute top-2 left-2 size-3.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_16px_2px_var(--primary)] lg:left-1/2"
                />

                <article
                  data-reveal
                  data-reveal-variant={isLeft ? "left" : "right"}
                  className={cn(
                    // No outline. A 1px border around every block is what made
                    // this section read as a wireframe; the card separates from
                    // the page by tone and a shadow instead, which is one less
                    // line on screen and reads as an object rather than a box.
                    //
                    // `overflow-hidden` is what clips the accent edge to the
                    // radius. The lift is named `translate` in the reveal
                    // shorthand in globals.css, not here — a `transition-*`
                    // utility on this element would be discarded by it.
                    "group relative overflow-hidden rounded-xl bg-card p-5 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_18px_38px_-16px_rgba(0,0,0,0.28)] lg:row-start-1 lg:p-6",
                    isLeft ? "lg:col-start-1" : "lg:col-start-3",
                  )}
                >
                  {/* The accent edge. It grows from the top rather than fading
                      in, so the hover reads as the card being marked rather
                      than as a colour appearing. `transition-[scale]`, not
                      `transition-transform`: Tailwind v4 puts `scale-y-*` on
                      the standalone `scale` property. */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-primary transition-[scale] duration-300 ease-out group-hover:scale-y-100"
                  />

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className="font-mono text-xs font-bold tracking-[0.1em] text-primary uppercase">
                      {job.org}
                    </p>
                    {isCurrent ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 py-0.5 pr-2.5 pl-2 font-mono text-[10px] font-semibold tracking-[0.1em] text-primary uppercase">
                        <span aria-hidden className="relative flex size-1.5">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-70" />
                          <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        Now
                      </span>
                    ) : null}
                  </div>

                  {/* Display face at a size the sans could not carry. Three
                      typographic levels — mono label, display title, sans
                      body — where before every line was one bold sans
                      against another. */}
                  <h3 className="mt-2.5 font-[family-name:var(--font-display)] text-2xl leading-[1.05] tracking-[-0.025em] lg:text-3xl">
                    {job.role}
                  </h3>

                  {/* The facts as chips rather than as a run-on line. Same
                      words, but they can be scanned instead of read. */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {facts.map((fact) => (
                      <span
                        key={fact}
                        className="rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {fact}
                      </span>
                    ))}
                  </div>

                  {/* One rule inside the card, where the border used to be
                      around it: it separates the header from the evidence,
                      which is the split a reader actually needs. */}
                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        {/* A rule, not a bullet glyph. `▪` sat on the text
                            baseline and read as punctuation; a hairline set
                            against the first line reads as a list marker and
                            keeps the left edge of the copy straight. */}
                        <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-primary/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {job.tech ? (
                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-5">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </article>

                {/* Outer column: index numeral + dates, pulled toward the spine. */}
                <div
                  data-reveal
                  data-reveal-delay
                  className={cn(
                    "order-first flex items-baseline gap-3 lg:order-none lg:row-start-1 lg:block lg:pt-1",
                    isLeft ? "lg:col-start-3 lg:pl-2" : "lg:col-start-1 lg:pr-2 lg:text-right",
                  )}
                >
                  {/* Outlined and enormous on wide screens. A solid 5xl
                      numeral at 30% opacity was small enough to read as a
                      caption and faint enough to ignore; at 7rem in outline it
                      becomes the thing that gives the column a spine of its
                      own, and it costs no ink. */}
                  <span
                    aria-hidden
                    className="numeral-outline font-[family-name:var(--font-display)] text-2xl leading-none font-bold text-muted-foreground/30 lg:block lg:text-[7rem] lg:leading-[0.78] lg:text-foreground/25"
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
