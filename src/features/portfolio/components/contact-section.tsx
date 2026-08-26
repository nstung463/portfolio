import { ContactActions } from "./contact-actions";
import { SectionBleed } from "./section-primitives";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand text-white">
      <SectionBleed text="Contact" tone="light" />
      <div data-reveal className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="font-mono text-xs font-bold tracking-[0.15em] uppercase">08 · Contact</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-6xl">Let&apos;s build something grounded.</h2>
        <p className="mx-auto mt-4 max-w-md text-white/85">Open to AI Engineer / LLM Application roles. I usually reply within a day.</p>
        <ContactActions />
        <p className="mt-10 font-mono text-xs text-white/70">Ho Chi Minh City, Vietnam · 0335 955 790</p>
      </div>
    </section>
  );
}
