"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy, FileText, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * The email address is the one thing on the page a recruiter actually needs,
 * so it is the panel rather than a link in a row of links: readable at a
 * glance, copyable without leaving the page, and openable in a mail client for
 * anyone who works that way.
 */
export function EmailCard() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be refused; the mailto link still works, and the
      // address is selectable text either way.
    }
  };

  return (
    <div className="rounded-2xl bg-white/10 p-1.5 ring-1 ring-white/25 backdrop-blur-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1 px-4 py-3 text-left">
          <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-white/70 uppercase">
            Email
          </p>
          <p className="mt-1 truncate font-mono text-base text-white sm:text-lg">
            {siteConfig.email}
          </p>
        </div>

        <div className="flex shrink-0 gap-2 px-1.5 pb-1.5 sm:px-0 sm:pb-0 sm:pr-1.5">
          <button
            type="button"
            onClick={copy}
            aria-label={copied ? "Email address copied" : "Copy email address"}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-white ring-1 ring-white/30 transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none sm:flex-none"
          >
            {copied ? (
              <Check aria-hidden className="size-4" />
            ) : (
              <Copy aria-hidden className="size-4" />
            )}
            <span className="tabular-nums">{copied ? "Copied" : "Copy"}</span>
          </button>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-brand transition-colors hover:bg-white/90 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand focus-visible:outline-none sm:flex-none"
          >
            <Mail aria-hidden className="size-4" />
            Write
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Every tile under the email panel is built from these, so the row of two and
 * the row of three share a radius, a height, an icon plate and a hover. They
 * were three different shapes before — rounded cards beside rounded-full
 * pills, each sized by its own text — which is what made the block look
 * unsettled.
 */
const tileClass =
  "group flex h-full min-h-[4.25rem] items-center gap-3.5 rounded-2xl px-4 py-3.5 ring-1 ring-white/25 transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none";

const plateClass =
  "flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20";

/**
 * The résumé is a page on this site, so it is a link that reads as one: a
 * straight arrow, no `target="_blank"`. It used to sit in the row of social
 * pills wearing the outbound mark, which promised a different site.
 */
export function ResumeLink({
  hint,
  cta,
  className,
}: {
  hint: string;
  cta: string;
  className?: string;
}) {
  return (
    <a href="/resume" className={cn(tileClass, className)}>
      <span className={plateClass}>
        <FileText aria-hidden className="size-[1.125rem]" />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-sm font-semibold text-white">{cta}</span>
        <span className="block text-xs text-white/70">{hint}</span>
      </span>
      <ArrowRight
        aria-hidden
        className="size-5 shrink-0 text-white/60 transition-transform group-hover:translate-x-1"
      />
    </a>
  );
}

export function PhoneLink({ className }: { className?: string }) {
  return (
    <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className={cn(tileClass, className)}>
      <span className={plateClass}>
        <Phone aria-hidden className="size-[1.125rem]" />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-mono text-sm font-semibold text-white">{siteConfig.phone}</span>
        <span className="block text-xs text-white/70">{siteConfig.location}</span>
      </span>
    </a>
  );
}

function GithubIcon() {
  return (
    <svg aria-hidden="true" className="size-[1.125rem] fill-current" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.73.084-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.21 0 1.595-.015 2.88-.015 3.27 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" className="size-[1.125rem] fill-current" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.998h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V8.998h3.564v11.454zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="size-[1.125rem] fill-current" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.25a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25z" />
    </svg>
  );
}

const socials = [
  { href: siteConfig.links.github, label: "GitHub", Icon: GithubIcon },
  { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: siteConfig.links.instagram, label: "Instagram", Icon: InstagramIcon },
];

/** These genuinely are references elsewhere, so these keep the outbound mark. */
export function SocialLinks() {
  return (
    <>
      {socials.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          // A third of the column is not wide enough for the plate, the full
          // name and the arrow at the spacing the wider tiles use.
          className={cn(tileClass, "col-span-6 gap-2.5 px-3 sm:col-span-2")}
        >
          <span className={cn(plateClass, "size-9")}>
            <Icon />
          </span>
          <span className="min-w-0 flex-1 truncate text-[0.8125rem] font-semibold text-white">
            {label}
          </span>
          <ArrowUpRight
            aria-hidden
            className="size-3.5 shrink-0 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      ))}
    </>
  );
}
