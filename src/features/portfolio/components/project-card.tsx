import type { ProjectItem } from "../types/portfolio";
import { ProjectArt } from "../illustrations/project-art";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const card = (
    <div
      className={
        // Lift + shadow on the card, a faster border fade so the outline
        // catches up before the card has finished moving, and a slight zoom
        // on the art — three signals landing together read as one card
        // rising, rather than a border simply changing colour under the
        // pointer.
        //
        // The transitioned property is named `translate`, not `transform`:
        // Tailwind v4 puts `-translate-y-*` on the standalone CSS `translate`
        // property, so listing `transform` here left it out of the animation
        // and the lift jumped straight to its end position instead of easing
        // there — only the border and shadow, which were in the list, moved
        // smoothly.
        "flex h-full flex-col overflow-hidden rounded-[10px] border border-border bg-card " +
        "shadow-[0_1px_2px_rgba(0,0,0,0.04)] " +
        "transition-[translate,box-shadow,border-color] duration-300 ease-out " +
        "group-hover:-translate-y-1.5 group-hover:border-primary group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)] " +
        "group-focus-visible:-translate-y-1.5 group-focus-visible:border-primary group-focus-visible:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.35)]"
      }
    >
      <div className="aspect-[5/3] w-full overflow-hidden">
        <div className="size-full transition-transform duration-300 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]">
          <ProjectArt variant={project.art} />
        </div>
      </div>
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

  return project.href ? (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {card}
    </a>
  ) : (
    <div className="group">{card}</div>
  );
}
