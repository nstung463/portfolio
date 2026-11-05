"use client";

import { ArrowUpRight, Play, X } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "../types/portfolio";
import { ProjectArt } from "../illustrations/project-art";

export function ProjectCard({ project, featured = false }: { project: ProjectItem; featured?: boolean }) {
  const Heading = featured ? "h3" : "h4";
  const FeatureHeading = featured ? "h4" : "h5";

  return (
    <article
      className={cn(
        "liquid-glass liquid-glass-regular liquid-glass-panel rounded-[1.35rem]",
        featured
          ? "grid items-center gap-6 p-4 sm:p-6 lg:grid-cols-[1fr_1.6fr] lg:gap-9"
          : "flex flex-col",
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          featured ? "px-1 py-3 sm:px-3" : "grow px-5 pt-5 pb-6",
          project.features?.length ? "lg:col-span-2" : undefined,
        )}
      >
        <p className="flex min-h-4 flex-wrap items-center gap-2 font-mono text-[11px] font-semibold tracking-widest text-foreground/85 uppercase">
          {featured ? <span className="text-(--glass-accent)">Featured project <span aria-hidden="true">/</span></span> : null}
          {project.date !== "—" ? <span>{project.date}</span> : null}
          <span className="text-[10px] font-normal tracking-normal text-foreground/60">{project.context}</span>
        </p>
        <Heading className={cn("font-semibold tracking-tight text-balance", featured ? "mt-3 text-3xl sm:text-4xl" : "mt-1.5 text-xl")}>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {project.title}<ArrowUpRight aria-hidden="true" className="ml-1 inline size-4 text-(--glass-accent)" />
            </a>
          ) : project.title}
        </Heading>
        <p className={cn("mt-2 leading-relaxed text-foreground/85", featured ? "text-base" : "text-sm")}>{project.desc}</p>
        <ul aria-label="Project topics" className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.stack.map((item) => (
            <li key={item} className="rounded-md bg-foreground/7 px-2 py-1 font-mono text-[11px] text-foreground/85">{item}</li>
          ))}
        </ul>
      </div>

      {project.features?.length ? (
        <div className="grid min-w-0 gap-6 border-t border-foreground/12 pt-6 sm:grid-cols-2 lg:col-span-2">
          {project.features.map((feature) => (
            <section key={feature.title} aria-label={`${project.title} · ${feature.title}`} className="flex min-w-0 flex-col">
              <ProjectDemo video={feature.video} title={feature.title} featured />
              <div className="flex grow flex-col px-1 pt-4 pb-2">
                <FeatureHeading className="text-lg font-semibold tracking-tight sm:text-xl">{feature.title}</FeatureHeading>
                <p className="mt-1 text-sm leading-relaxed text-foreground/85">{feature.desc}</p>
                <ul aria-label={`${feature.title} topics`} className="mt-auto flex flex-wrap gap-1.5 pt-3">
                  {feature.stack.map((item) => (
                    <li key={item} className="rounded-md bg-foreground/7 px-2 py-1 font-mono text-[11px] text-foreground/85">{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      ) : project.video ? (
        <ProjectDemo
          video={project.video}
          title={project.title}
          featured={featured}
        />
      ) : (
        <div aria-hidden="true" className="order-first mx-3 mt-3 h-24 overflow-hidden rounded-xl bg-[#081529]">
          <ProjectArt variant={project.art} />
        </div>
      )}
    </article>
  );
}

function ProjectDemo({
  video,
  title,
  featured,
}: {
  video: NonNullable<ProjectItem["video"]>;
  title: string;
  featured: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function stopPreview() {
    previewRef.current?.load();
  }

  return (
    <>
      <button
        type="button"
        aria-label={`Watch demo of ${title}`}
        aria-haspopup="dialog"
        onPointerEnter={(event) => {
          if (event.pointerType === "mouse" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            previewRef.current?.play().catch(() => {});
          }
        }}
        onPointerLeave={stopPreview}
        onClick={() => {
          stopPreview();
          dialogRef.current?.showModal();
          setIsOpen(true);
        }}
        className={cn(
          "group/demo relative block aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#081529] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          featured ? "shadow-lg" : "order-first mx-3 mt-3",
        )}
      >
        <video
          ref={previewRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full object-cover"
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="none"
        />
        <span
          className={cn(
            "absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold shadow-md transition-colors",
            featured ? "bg-[#f0c24b] text-[#07152b] group-hover/demo:bg-[#ffda77]" : "bg-[#081529]/90 text-white group-hover/demo:bg-[#f0c24b] group-hover/demo:text-[#07152b]",
          )}
        >
          <Play aria-hidden="true" className="size-3 fill-current" /> Watch demo
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${title} demo`}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-5xl overflow-auto rounded-2xl border border-border bg-card text-card-foreground shadow-2xl backdrop:bg-black/80"
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <p className="font-semibold">{title} <span className="text-sm font-normal text-muted-foreground">· Demo</span></p>
          <form method="dialog">
            <button type="submit" aria-label="Close demo" className="grid size-10 cursor-pointer place-items-center rounded-full bg-foreground/5 hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-primary">
              <X aria-hidden="true" className="size-5" />
            </button>
          </form>
        </div>
        {isOpen ? (
          <video
            className="max-h-[72dvh] w-full bg-black"
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            loop
            playsInline
            aria-label={`${title} demo video`}
          />
        ) : null}
      </dialog>
    </>
  );
}
