import { contact } from "../data/portfolio-content";
import { EmailCard, PhoneLink, ResumeLink, SocialLinks } from "./contact-actions";
import { SectionBleed } from "./section-primitives";
import { RevealWords } from "./reveal-words";

/**
 * Two columns on wide screens: what I am open to on the left, how to reach me
 * on the right. The single row of identical pills it replaced gave the email
 * address, the résumé and three social profiles the same weight, when only the
 * first is what a visitor came here for.
 */
export function ContactSection() {
  return (
    <section id="contact" className="night-surface relative overflow-hidden text-[#f7f0dc]">
      <SectionBleed text="Contact" tone="light" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-20">
          <div data-reveal>
            <p className="font-mono text-xs font-bold tracking-[0.15em] text-[#f4c84a] uppercase">08 · Contact</p>

            <h2 className="mt-5 text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
              <RevealWords text={contact.heading} />
            </h2>

            <p className="mt-5 max-w-md text-white/85">{contact.blurb}</p>

            <p className="liquid-glass mt-8 inline-flex items-center gap-2.5 rounded-full py-2 pr-4 pl-3 text-sm font-medium">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f4c84a] opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-[#f4c84a]" />
              </span>
              {contact.availability}
            </p>
          </div>

          {/* One six-column grid for everything on this side, so the tiles
              line up in even runs — two halves, then three thirds — instead of
              each being sized by the length of its own label. */}
          <div data-reveal data-reveal-delay className="relative isolate grid grid-cols-6 gap-3">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 -z-10 opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 18% 30%, rgba(61,122,187,0.72), transparent 30%), radial-gradient(circle at 82% 72%, rgba(226,177,54,0.32), transparent 26%)",
              }}
            />
            <p className="col-span-6 font-mono text-[0.6875rem] tracking-[0.14em] text-white/70 uppercase">
              {contact.emailHint}
            </p>

            <div className="col-span-6">
              <EmailCard />
            </div>

            <ResumeLink
              hint={contact.resumeHint}
              cta={contact.resumeCta}
              className="col-span-6 sm:col-span-3"
            />
            <PhoneLink className="col-span-6 sm:col-span-3" />

            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
