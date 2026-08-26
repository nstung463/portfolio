"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { sections } from "../data/portfolio-content";

/**
 * Sticky vertical section index. Highlights whichever section currently owns
 * the middle of the viewport.
 */
export function SectionIndex() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="pointer-events-none fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col gap-1">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id} className="pointer-events-auto">
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center justify-end gap-2.5 py-1"
              >
                {/* Label stays hidden until hover so it never sits on top of
                    full-bleed section content. */}
                <span
                  className={cn(
                    "rounded-sm bg-background/80 px-1.5 py-0.5 font-mono text-[10px] tracking-[0.14em] uppercase opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100",
                    isActive ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {section.n} {section.label}
                </span>
                <span
                  className={cn(
                    "h-px transition-all duration-300",
                    isActive
                      ? "w-7 bg-primary"
                      : "w-3.5 bg-muted-foreground/50 group-hover:w-5 group-hover:bg-primary",
                  )}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
