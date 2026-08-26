import type { ProjectItem } from "../types/portfolio";
import { ProjectArt } from "../illustrations/project-art";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const card = (
    <div className="flex h-full flex-col overflow-hidden rounded-[10px] border border-border bg-card transition-colors group-hover:border-primary">
      <div className="aspect-[5/3] w-full"><ProjectArt variant={project.art} /></div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] font-bold tracking-[0.1em] text-muted-foreground uppercase">{project.date}</p>
        <p className="mt-2 font-bold">{project.title}</p>
        <p className="mt-1 flex-1 text-sm text-muted-foreground">{project.desc}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{item}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return project.href ? <a href={project.href} target="_blank" rel="noreferrer" className="group">{card}</a> : <div className="group">{card}</div>;
}
