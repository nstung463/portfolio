import { featuredWork, stats } from "../data/portfolio-content";
import { SectionLabel, Stamp } from "./section-primitives";

/**
 * Full-bleed split. Left column is a sticky editorial header, right column is
 * the evidence — no card grid, no section bleed watermark.
 */
export function FeaturedWorkSection() {
  return (
    <section id="work" className="relative overflow-hidden border-y border-border bg-card">
      <Stamp className="top-10 right-[6%]">{"// patent"}</Stamp>

      <div className="mx-auto max-w-[1400px] px-5 py-[90px] lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <SectionLabel n="06" label="Work" />
            <h2 className="mt-4 text-3xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              Proof, not
              <br />
              adjectives.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Work that exists outside a CV bullet and can be checked: a filed US patent
              application.
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-7">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-mono text-2xl font-bold text-primary">{stat.value}</dd>
                  <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <ol className="reveal-stagger flex flex-col lg:h-full">
            {featuredWork.map((work, index) => (
              <li key={work.title} className="lg:flex lg:flex-1">
                <a
                  href={work.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col border-t border-border py-8 transition-colors last:border-b hover:border-primary lg:flex-1 lg:justify-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] font-bold tracking-[0.14em] text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.1em] text-primary uppercase">
                      {work.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 flex items-baseline gap-3 text-2xl font-bold transition-colors group-hover:text-primary sm:text-4xl">
                    {work.title}
                    <span
                      aria-hidden
                      className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      ↗
                    </span>
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">{work.desc}</p>
                  <span
                    aria-hidden
                    className="mt-5 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full"
                  />
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
