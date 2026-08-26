import { moreProjects } from "../data/portfolio-content";
import { ProjectCard } from "./project-card";
import { SectionBleed, SectionLabel } from "./section-primitives";

export function ProjectsSection() {
  return (
    <section id="more-projects" className="relative mx-auto max-w-6xl overflow-hidden px-5 py-[70px]">
      <SectionBleed text="Projects" />
      <div className="relative z-10">
        <SectionLabel n="05" label={`More Projects · ${moreProjects.length} total`} />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Everything else I&apos;ve shipped</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}
