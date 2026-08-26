import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <p className="font-mono text-xs font-bold tracking-[0.15em] text-primary uppercase">
      {n} · {label}
    </p>
  );
}

export function SectionBleed({ text, tone = "dark" }: { text: string; tone?: "dark" | "light" }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden select-none">
      <div
        className={cn(
          "drift whitespace-nowrap font-[family-name:var(--font-display)] text-[10rem] leading-none uppercase",
          tone === "dark" ? "text-foreground/5" : "text-white/10",
        )}
      >
        {text} · {text} · {text}
      </div>
    </div>
  );
}

export function Stamp({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-0 rotate-[7deg] font-mono text-xs font-bold tracking-[0.12em] text-primary/40 uppercase select-none",
        className,
      )}
    >
      {children}
    </span>
  );
}
