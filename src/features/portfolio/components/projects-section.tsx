import { moreProjects } from "../data/portfolio-content";
import { ProjectCard } from "./project-card";
import { SectionBleed, SectionLabel } from "./section-primitives";
import { RevealWords } from "./reveal-words";

export function ProjectsSection() {
  return (
    <section id="more-projects" className="relative mx-auto max-w-6xl overflow-hidden px-5 py-[90px]">
      <SectionBleed text="Projects" />
      <div data-reveal className="relative z-10">
        <SectionLabel n="04" label={`More Projects · ${moreProjects.length} total`} />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
          <RevealWords text="Everything else I’ve shipped" />
        </h2>
        <div data-reveal-stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}
