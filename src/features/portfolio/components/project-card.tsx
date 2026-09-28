"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ProjectItem } from "../types/portfolio";
import { ProjectArt } from "../illustrations/project-art";

export function ProjectCard({ project }: { project: ProjectItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play().catch(() => {});
  };

  const handleStop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    // Reloading (rather than seeking to 0) restores the `poster` image —
    // seeking would leave the video showing its own frame 0, which for a
    // full, uncut clip is often a blank intro rather than the poster shot.
    video.load();
  };

  const openLightbox = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setLightboxOpen(true);
  };

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
        "flex h-full flex-col overflow-hidden rounded-[10px] border border-border bg-card/95 " +
        "shadow-[0_8px_28px_-22px_rgba(7,21,43,0.8)] backdrop-blur-sm " +
        "transition-[translate,box-shadow,border-color] duration-300 ease-out " +
        "group-hover:-translate-y-1.5 group-hover:border-primary group-hover:shadow-[0_20px_44px_-18px_rgba(7,21,43,0.8)] " +
        "group-focus-visible:-translate-y-1.5 group-focus-visible:border-primary group-focus-visible:shadow-[0_20px_44px_-18px_rgba(7,21,43,0.8)]"
      }
      onMouseEnter={project.video ? handlePlay : undefined}
      onMouseLeave={project.video ? handleStop : undefined}
      onFocus={project.video ? handlePlay : undefined}
      onBlur={project.video ? handleStop : undefined}
    >
      <div className="group/video relative aspect-[5/3] w-full overflow-hidden">
        <div className="size-full transition-transform duration-300 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]">
          {project.video ? (
            <video
              ref={videoRef}
              className="size-full object-cover"
              src={project.video.src}
              poster={project.video.poster}
              muted
              loop
              playsInline
              preload="none"
            />
          ) : (
            <ProjectArt variant={project.art} />
          )}
        </div>
        {project.video ? (
          <button
            type="button"
            onClick={openLightbox}
            aria-label={`Play larger demo of ${project.title}`}
            className="absolute right-2.5 bottom-2.5 flex size-8 items-center justify-center rounded-full border border-white/15 bg-background/70 text-primary opacity-0 shadow-md backdrop-blur-sm transition-[opacity,transform] duration-200 hover:scale-110 hover:border-primary/50 group-hover/video:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-3.5">
              <path d="M8 3H4a1 1 0 0 0-1 1v4M16 3h4a1 1 0 0 1 1 1v4M21 16v4a1 1 0 0 1-1 1h-4M8 21H4a1 1 0 0 1-1-1v-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : null}
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

  return (
    <>
      {project.href ? (
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
      )}
      {project.video ? (
        <VideoLightbox
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          src={project.video.src}
          poster={project.video.poster}
          title={project.title}
        />
      ) : null}
    </>
  );
}

function VideoLightbox({
  open,
  onClose,
  src,
  poster,
  title,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
  poster: string;
  title: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className="w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <video
          className="aspect-video size-full"
          src={src}
          poster={poster}
          controls
          autoPlay
          loop
          playsInline
          aria-label={`${title} demo`}
        />
      </div>
    </div>,
    document.body
  );
}
