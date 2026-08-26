"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { heroTags } from "../data/portfolio-content";

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="top" className="relative flex h-dvh min-h-[440px] flex-col overflow-hidden bg-primary text-primary-foreground">
      <div className="sticky top-0 z-30 grid shrink-0 grid-cols-[1fr_auto] items-center gap-4 bg-primary px-5 py-3.5 lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="font-mono text-[11px] font-bold tracking-[0.18em]">◆ NST</a>
        <nav className="hidden gap-6 font-mono text-[11px] font-normal tracking-[0.15em] uppercase lg:flex lg:justify-center">
          <a href="#more-projects" className="hover:opacity-70">projects</a>
          <a href="#writing" className="hover:opacity-70">writing</a>
          <a href="#about" className="hover:opacity-70">about</a>
          <a href="/resume" target="_blank" rel="noreferrer" className="hover:opacity-70">resume</a>
        </nav>
        <a href="#contact" className="hidden items-center gap-2 font-mono text-[11px] font-bold tracking-[0.15em] uppercase hover:opacity-70 lg:inline-flex">
          {"// hire me"}
          <span className="flex size-5 items-center justify-center rounded-full border border-current text-[10px]">↗</span>
        </a>
        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="flex size-11 flex-col items-center justify-center gap-1.5 justify-self-end lg:hidden"
        >
          <span className={cn("h-0.5 w-5 bg-current transition-transform", menuOpen && "translate-y-2 rotate-45")} />
          <span className={cn("h-0.5 w-5 bg-current transition-opacity", menuOpen && "opacity-0")} />
          <span className={cn("h-0.5 w-5 bg-current transition-transform", menuOpen && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {menuOpen && (
        <div className="relative z-30 flex flex-col gap-5 bg-primary px-5 pt-2 pb-6 font-mono text-xs font-bold tracking-[0.15em] uppercase lg:hidden">
          <a href="#more-projects" onClick={() => setMenuOpen(false)}>projects</a>
          <a href="#writing" onClick={() => setMenuOpen(false)}>writing</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>about</a>
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

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/avatar.png"
            alt="Nguyen Son Tung"
            className="pointer-events-none relative z-10 h-full w-auto max-w-full origin-bottom scale-[1.08] object-contain"
            style={{
              filter: "drop-shadow(0 0 70px rgba(255,130,50,0.42))",
              maskImage: "linear-gradient(#000 0%, #000 93%, rgba(0,0,0,0.65) 97%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(#000 0%, #000 93%, rgba(0,0,0,0.65) 97%, rgba(0,0,0,0) 100%)",
            }}
          />

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
