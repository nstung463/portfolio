"use client";

import Image from "next/image";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { heroTags } from "../data/portfolio-content";

const navLinks = [
  { href: "#more-projects", label: "projects" },
  { href: "#harness", label: "harness" },
  { href: "#about", label: "about" },
];

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="top" className="relative flex h-dvh min-h-[440px] flex-col overflow-hidden bg-brand text-white">
      <div className="sticky top-0 z-30 grid shrink-0 grid-cols-[1fr_auto] items-center gap-4 bg-brand px-5 py-3.5 lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="font-mono text-[11px] font-bold tracking-[0.18em]">◆ NST</a>
        <nav className="hidden gap-6 font-mono text-[11px] font-normal tracking-[0.15em] uppercase lg:flex lg:justify-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:opacity-70">{link.label}</a>
          ))}
          <a href="/resume" target="_blank" rel="noreferrer" className="hover:opacity-70">resume</a>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href="#contact" className="inline-flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.15em] uppercase hover:opacity-70">
            {"// hire me"}
            <span className="flex size-5 items-center justify-center rounded-full border border-current text-[10px]">↗</span>
          </a>
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 justify-self-end lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex size-11 flex-col items-center justify-center gap-1.5"
          >
            <span className={cn("h-0.5 w-5 bg-current transition-transform", menuOpen && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 w-5 bg-current transition-opacity", menuOpen && "opacity-0")} />
            <span className={cn("h-0.5 w-5 bg-current transition-transform", menuOpen && "-translate-y-2 -rotate-45")} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="relative z-30 flex flex-col gap-5 bg-brand px-5 pt-2 pb-6 font-mono text-xs font-bold tracking-[0.15em] uppercase lg:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a href="/resume" target="_blank" rel="noreferrer">resume ↗</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{"// hire me ↗"}</a>
        </div>
      )}

      <div className="relative flex min-h-0 flex-1 flex-col items-center overflow-hidden">
        <h1 aria-label="AI Engineer" className="relative z-20 mt-3 w-full shrink-0 text-center font-[family-name:var(--font-display)] text-[18vw] leading-[0.82] tracking-[-0.025em] select-none">
          AI ENGINEER
        </h1>

        <div className="relative z-10 -mt-[6vh] flex min-h-0 w-full flex-1 items-center justify-center">
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center overflow-hidden">
            <span className="block origin-center scale-y-[0.66] whitespace-nowrap font-[family-name:var(--font-watermark)] text-[28vw] leading-[0.85] tracking-[-0.045em] text-white/30 select-none [-webkit-text-stroke:0px_transparent] [animation:watermark-pulse_2s_steps(2,jump-none)_1.2s_infinite]">TUNG</span>
          </div>

          <div
            className="pointer-events-none relative z-10 h-full w-full origin-bottom scale-[1.08]"
            style={{
              maskImage: "linear-gradient(#000 0%, #000 93%, rgba(0,0,0,0.65) 97%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(#000 0%, #000 93%, rgba(0,0,0,0.65) 97%, rgba(0,0,0,0) 100%)",
            }}
          >
            <Image
              src="/images/avatar.webp"
              alt="Nguyen Son Tung"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain"
              style={{ filter: "drop-shadow(0 0 70px rgba(255,130,50,0.42))" }}
            />
          </div>

          <div aria-hidden className="pointer-events-none absolute inset-0 z-[15]" style={{ background: "linear-gradient(rgba(255,106,26,0) 65%, rgba(255,106,26,0.3) 88%, rgba(255,106,26,0.7) 100%)" }} />

          <div className="absolute top-[26%] right-5 z-20 hidden text-right font-mono text-[13px] leading-[1.6] tracking-[0.08em] uppercase [animation:fade-in_0.6s_ease_1s_both] lg:block">
            <div>{"// grounded answers, not guesses"}</div>
            <div className="pr-4">not vibes</div>
          </div>
          <div className="absolute bottom-[30%] left-5 z-20 hidden font-mono text-[13px] leading-[1.6] tracking-[0.08em] uppercase [animation:fade-in_0.6s_ease_1.2s_both] lg:block">
            <div>{"// I'm Tung — an AI engineer building RAG"}</div>
            <div className="pl-6">pipelines &amp; agent harnesses,</div>
            <div>shipped to production. Open to projects.</div>
          </div>
        </div>
      </div>

      <div className="shrink-0 px-5 pt-2 font-mono text-[11px] font-normal tracking-wide uppercase [animation:fade-in_0.6s_ease_1s_both] lg:hidden">
        <div>{"// grounded answers, not guesses"}</div>
        <div className="pl-6">not vibes</div>
      </div>
      <div className="shrink-0 px-5 pt-2 pb-3 font-mono text-xs font-normal tracking-wide uppercase [animation:fade-in_0.6s_ease_1.2s_both] lg:hidden">
        <div>{"// I'm Tung — an AI engineer building RAG"}</div>
        <div className="pl-6">pipelines &amp; agent harnesses,</div>
        <div>shipped to production. Open to projects.</div>
      </div>

      <div className="relative z-30 shrink-0 overflow-hidden border-t border-white/25 pt-[22px] pb-[26px] lg:-mt-[68px]" style={{ background: "linear-gradient(rgba(255,106,26,0), rgba(255,106,26,0.1))" }}>
        <div className="flex animate-[marquee_8s_linear_infinite] items-center gap-14 whitespace-nowrap">
          {[...heroTags, ...heroTags].map((tag, index) => (
            <span key={`${tag}-${index}`} className="flex items-center gap-14 font-[family-name:var(--font-display)] text-[5.5vw] leading-none tracking-[-0.01em] uppercase">
              <span aria-hidden className="text-[clamp(9px,1.25vw,18px)] leading-none">◆</span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
