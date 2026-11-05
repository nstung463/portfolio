import { moreProjects } from "../data/portfolio-content";
import { ProjectCard } from "./project-card";
import { SectionLabel } from "./section-primitives";

export function ProjectsSection() {
  const [featured, ...projects] = moreProjects;
  const demos = projects.filter((project) => project.video || project.features?.length);
  const otherWork = projects.filter((project) => !project.video && !project.features?.length);

  return (
    <section id="more-projects" aria-labelledby="projects-heading" className="starfield-surface relative">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <header className="mb-8 border-t border-border pt-6 sm:mb-10">
          <SectionLabel n="04" label={`More Projects · ${moreProjects.length} total`} />
          <h2 id="projects-heading" className="section-heading mt-4 max-w-3xl text-4xl leading-tight font-bold tracking-tight text-balance sm:text-6xl">
            Everything else I’ve shipped
          </h2>
        </header>

        <ProjectCard project={featured} featured />

        <div className="mt-12 sm:mt-16">
          <h3 className="mb-5 flex items-center gap-4 text-xl font-semibold after:h-px after:flex-1 after:bg-border">
            More demos
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <h3 className="mb-5 flex items-center gap-4 text-xl font-semibold after:h-px after:flex-1 after:bg-border">
            More work
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherWork.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
