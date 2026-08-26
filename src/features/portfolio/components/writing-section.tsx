import { SectionBleed, SectionLabel } from "./section-primitives";

export function WritingSection() {
  return (
    <section id="writing" className="relative mx-auto max-w-6xl overflow-hidden px-5 py-[70px]">
      <SectionBleed text="Writing" />
      <div className="relative z-10">
        <SectionLabel n="06" label="Writing" />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">No posts yet</h2>
        <p className="mt-4 max-w-md text-muted-foreground">I haven&apos;t published any write-ups here yet. When I do, they&apos;ll show up in this section — for now, reach me directly through the links below.</p>
      </div>
    </section>
  );
}
