import { moreProjects } from "../data/portfolio-content";
import { ProjectCard } from "./project-card";
import { SectionBleed, SectionLabel } from "./section-primitives";
import { RevealWords } from "./reveal-words";

export function ProjectsSection() {
  return (
    <section id="more-projects" className="starfield-surface relative overflow-hidden">
      <SectionBleed text="Projects" />
      <div data-reveal className="relative z-10 mx-auto max-w-6xl px-5 py-[90px]">
        <SectionLabel n="04" label={`More Projects · ${moreProjects.length} total`} />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          <RevealWords text="Everything else I’ve shipped" />
        </h2>
        <div data-reveal-stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project, index) => {
            const isLastOddCard = index === moreProjects.length - 1 && moreProjects.length % 2 === 1;

            return (
              <div
                key={project.title}
                className={
                  isLastOddCard
                    ? "h-full sm:col-span-2 sm:w-[calc((100%-1rem)/2)] sm:justify-self-center lg:col-span-1 lg:col-start-2 lg:w-auto"
                    : "h-full"
                }
              >
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
