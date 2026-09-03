"use client";

import Image from "next/image";
import { type CSSProperties, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { heroTags } from "../data/portfolio-content";

const WORDMARK = "AI ENGINEER".split(" ");

/**
 * The site's mark: the browser-tab favicon's diamond, redrawn as a hollow
 * ring in a single colour instead of white-on-orange. The nav bar sits over
 * the starry hero image, so a second copy of the favicon's own orange square
 * would just disappear into it — this keeps the same geometry the tab already
 * taught the visitor to recognise, in a form that reads against that
 * background. `fillRule="evenodd"` is what punches the hole:
 * two nested diamond paths in one fill, the inner one carved out of the
 * outer regardless of winding order.
 */
function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="currentColor" fillRule="evenodd" aria-hidden className={className}>
      <path d="M32 8 L47 32 L32 56 L17 32 Z M32 19 L38.5 32 L32 45 L25.5 32 Z" />
    </svg>
  );
}

const navLinks = [
  { href: "#more-projects", label: "projects" },
  { href: "#harness", label: "harness" },
  { href: "#about", label: "about" },
];

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="top" className="relative flex h-dvh min-h-[440px] flex-col overflow-hidden bg-[#07152b] text-white">
      <Image
        src="/images/starry-night-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(3,12,29,0.28)_0%,rgba(3,12,29,0.08)_42%,rgba(3,12,29,0.7)_100%)]"
      />

      <div className="intro-drop sticky top-0 z-30 grid shrink-0 grid-cols-[1fr_auto] items-center gap-4 border-b border-[#f4c84a]/15 bg-[#07152b]/72 px-5 py-3.5 backdrop-blur-md lg:grid-cols-[auto_1fr_auto]">
        <a href="#top" className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.18em]">
          <BrandMark className="size-3.5" />
          NST
        </a>
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
        <div className="relative z-30 flex flex-col gap-5 border-b border-[#f4c84a]/15 bg-[#07152b]/92 px-5 pt-2 pb-6 font-mono text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-md lg:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a href="/resume" target="_blank" rel="noreferrer">resume ↗</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{"// hire me ↗"}</a>
        </div>
      )}

      <div className="relative flex min-h-0 flex-1 flex-col items-center overflow-hidden">
        {/* Letters resolve one after another out of a blur. `aria-label` on the
            heading already replaces its contents for a screen reader, so the
            split costs nothing in the accessibility tree. */}
        <h1 aria-label="AI Engineer" className="relative z-20 mt-3 w-full shrink-0 text-center font-[family-name:var(--font-display)] text-[18vw] leading-[0.82] tracking-[-0.025em] text-[#f7f0dc] select-none [text-shadow:0_3px_30px_rgba(2,8,20,0.42)]">
          {WORDMARK.map((word, wordIndex) => {
            const priorChars = wordIndex === 0 ? 0 : WORDMARK[0].length + 1;
            return (
              <span key={wordIndex} className="inline-block">
                {wordIndex > 0 ? <span className="inline-block w-[0.28em]" /> : null}
                {/* `whitespace-nowrap` per word, not on the heading as a
                    whole: a narrow viewport needs "AI" / "ENGINEER" to wrap
                    between the words, just never inside one. Without this
                    the letters are independent inline spans with no space
                    between them, so the line broke wherever it ran out of
                    room — mid-word, stranding a lone "R" on its own line. */}
                <span className="whitespace-nowrap">
                  {[...word].map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="intro-letter"
                      style={{ "--intro-delay": `${260 + (priorChars + charIndex) * 90}ms` } as CSSProperties}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>
            );
          })}
        </h1>

        <div className="relative z-10 -mt-[6vh] flex min-h-0 w-full flex-1 items-center justify-center">
          <div
            aria-hidden
            className="intro-rise pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center overflow-hidden"
            style={{ "--intro-delay": "850ms" } as CSSProperties}
          >
            <span className="block origin-center scale-y-[0.66] whitespace-nowrap font-[family-name:var(--font-watermark)] text-[28vw] leading-[0.85] tracking-[-0.045em] text-white/30 select-none [-webkit-text-stroke:0px_transparent] [animation:watermark-pulse_2s_steps(2,jump-none)_2s_infinite]">TUNG</span>
          </div>

          {/* Two elements on purpose: the outer one is the only thing that
              moves, the inner one holds the mask and the shadow and never
              changes. Animating the masked element itself made the entrance
              stutter. */}
          <div
            className="intro-portrait pointer-events-none relative z-10 h-full w-full"
            style={{ "--intro-delay": "1700ms" } as CSSProperties}
          >
            <div
              className="absolute inset-0 origin-bottom scale-[1.08]"
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
                style={{ filter: "drop-shadow(0 0 70px rgba(244,200,74,0.22))" }}
              />
            </div>
          </div>

          <div aria-hidden className="pointer-events-none absolute inset-0 z-[15]" style={{ background: "linear-gradient(rgba(3,12,29,0) 62%, rgba(3,12,29,0.34) 84%, rgba(3,12,29,0.82) 100%)" }} />

          <div className="absolute top-[26%] right-5 z-20 hidden text-right font-mono text-[13px] leading-[1.6] tracking-[0.08em] uppercase intro-rise [--intro-delay:2100ms] [animation-duration:0.55s] lg:block">
            <div>{"// grounded answers, not guesses"}</div>
            <div className="pr-4">not vibes</div>
          </div>
          <div className="absolute bottom-[30%] left-5 z-20 hidden font-mono text-[13px] leading-[1.6] tracking-[0.08em] uppercase intro-rise [--intro-delay:2250ms] [animation-duration:0.55s] lg:block">
            <div>{"// I'm Tung — an AI engineer building RAG"}</div>
            <div className="pl-6">pipelines &amp; agent harnesses,</div>
            <div>shipped to production. Open to projects.</div>
          </div>
        </div>
      </div>

      <div className="relative z-20 shrink-0 px-5 pt-2 font-mono text-[11px] font-normal tracking-wide uppercase intro-rise [--intro-delay:2100ms] [animation-duration:0.55s] lg:hidden">
        <div>{"// grounded answers, not guesses"}</div>
        <div className="pl-6">not vibes</div>
      </div>
      <div className="relative z-20 shrink-0 px-5 pt-2 pb-3 font-mono text-xs font-normal tracking-wide uppercase intro-rise [--intro-delay:2250ms] [animation-duration:0.55s] lg:hidden">
        <div>{"// I'm Tung — an AI engineer building RAG"}</div>
        <div className="pl-6">pipelines &amp; agent harnesses,</div>
        <div>shipped to production. Open to projects.</div>
      </div>

      <div
        className="intro-band relative z-30 shrink-0 overflow-hidden border-t border-[#f4c84a]/25 pt-[22px] pb-[26px] lg:-mt-[68px]"
        style={{ "--intro-delay": "2450ms", background: "linear-gradient(rgba(3,12,29,0.12), rgba(3,12,29,0.78))" } as CSSProperties}
      >
        <div className="flex animate-[marquee_8s_linear_infinite] items-center gap-14 whitespace-nowrap">
          {[...heroTags, ...heroTags].map((tag, index) => (
            <span key={`${tag}-${index}`} className="flex items-center gap-14 font-[family-name:var(--font-display)] text-[5.5vw] leading-none tracking-[-0.01em] text-[#f7f0dc] uppercase">
              <span aria-hidden className="text-[clamp(9px,1.25vw,18px)] leading-none text-[#f4c84a]">◆</span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
