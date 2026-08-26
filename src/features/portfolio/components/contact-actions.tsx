"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactActions() {
  return (
    <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
      <a href="mailto:nstung463@gmail.com" className={cn(buttonVariants(), "bg-white text-primary hover:bg-white/90")}>nstung463@gmail.com</a>
      <a href="https://linkedin.com/in/nstung463" target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline" }), "border-white/50 bg-transparent text-white hover:bg-white/10")}>linkedin ↗</a>
      <a href="https://github.com/nstung463" target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline" }), "border-white/50 bg-transparent text-white hover:bg-white/10")}>github ↗</a>
      <a href="/resume" target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline" }), "border-white/50 bg-transparent text-white hover:bg-white/10")}>resume ↗</a>
    </div>
  );
}
