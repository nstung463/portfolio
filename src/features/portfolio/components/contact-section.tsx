import { contact } from "../data/portfolio-content";
import { EmailCard, PhoneLink, ResumeLink, SocialLinks } from "./contact-actions";
import { SectionBleed } from "./section-primitives";

/**
 * Two columns on wide screens: what I am open to on the left, how to reach me
 * on the right. The single row of identical pills it replaced gave the email
 * address, the résumé and three social profiles the same weight, when only the
 * first is what a visitor came here for.
 */
export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand text-white">
      <SectionBleed text="Contact" tone="light" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-20">
          <div data-reveal>
            <p className="font-mono text-xs font-bold tracking-[0.15em] uppercase">08 · Contact</p>

            <h2 className="mt-5 text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
              {contact.heading}
            </h2>

            <p className="mt-5 max-w-md text-white/85">{contact.blurb}</p>

            <p className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white/10 py-2 pr-4 pl-3 text-sm font-medium ring-1 ring-white/25">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-white" />
              </span>
              {contact.availability}
            </p>
          </div>

          <div data-reveal data-reveal-delay className="flex flex-col gap-3">
            <p className="font-mono text-[0.6875rem] tracking-[0.14em] text-white/70 uppercase">
              {contact.emailHint}
            </p>
            <EmailCard />

            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <ResumeLink hint={contact.resumeHint} cta={contact.resumeCta} />
              <PhoneLink />
            </div>

            <SocialLinks className="mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
