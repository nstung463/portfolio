"use client";

import { useEffect, useRef } from "react";

/**
 * The timeline's centre spine: a grey track with an orange fill scrubbed by
 * the scroll position.
 *
 * The fill's leading edge is pinned to a reading line at 60% of the viewport,
 * so the boundary between filled and unfilled is on screen the whole way
 * through the section and the dots light as they cross it.
 *
 * This is measured here rather than with `animation-timeline: view()`, which
 * is what it used to be. No range form of that put the edge on a fixed line:
 * offsets and scrollport insets both resolve against the range length, and for
 * a spine several times taller than the viewport the edge ended up below the
 * fold on the way in and above it on the way out — visible for almost none of
 * the section, which read as a bar that never moved.
 */
export function TimelineSpine() {
  const fill = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = fill.current;
    if (!el) return;

    // Left at its CSS default — a full bar — for anyone who asked for less
    // motion. It is a position indicator, not an entrance.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      // `offsetHeight` is the unscaled height, and `top` is unaffected by the
      // scale because the element's transform-origin is its top edge.
      const height = el.offsetHeight;
      if (height === 0) return;
      const line = window.innerHeight * 0.6;
      const progress = (line - el.getBoundingClientRect().top) / height;
      el.style.scale = `1 ${Math.min(Math.max(progress, 0), 1)}`;
    };

    const schedule = () => {
      frame ||= requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <span
        aria-hidden
        className="absolute top-2 bottom-2 left-2 w-px bg-border lg:left-1/2 lg:-translate-x-1/2"
      />
      <span
        ref={fill}
        aria-hidden
        className="timeline-progress absolute top-2 bottom-2 left-2 w-px bg-primary shadow-[0_0_12px_1px_var(--primary)] lg:left-1/2 lg:-translate-x-1/2"
      />
    </>
  );
}
