import type { Metadata } from "next";
import { education, experience, skillGroups } from "@/features/portfolio/data/portfolio-content";

export const metadata: Metadata = {
  title: "Nguyen Son Tung — Resume",
  description: "Resume of Nguyen Son Tung, AI Engineer specializing in LLM, RAG, and agent systems.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-12 text-foreground sm:px-10 sm:py-16">
      <header className="border-b border-border pb-8">
        <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">AI Engineer · LLM / RAG / Agent Systems</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">Nguyen Son Tung</h1>
        <p className="mt-4 text-sm text-muted-foreground">nstung463@gmail.com · 0335 955 790 · Ho Chi Minh City, Vietnam</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-primary">
          <a href="https://linkedin.com/in/nstung463" target="_blank" rel="noreferrer">linkedin.com/in/nstung463 ↗</a>
          <a href="https://github.com/nstung463" target="_blank" rel="noreferrer">github.com/nstung463 ↗</a>
        </div>
      </header>

      <section className="border-b border-border py-8">
        <ResumeHeading>Profile</ResumeHeading>
        <p className="max-w-3xl leading-7 text-muted-foreground">
          AI Engineer at FPT Software with 3+ years building production LLM, RAG, and multi-agent systems for enterprise clients. Specializes in agent harness engineering: tools, sandbox, permissions, memory, skills, and connector layers that make agent sessions dependable.
        </p>
      </section>

      <section className="border-b border-border py-8">
        <ResumeHeading>Experience</ResumeHeading>
        <div className="space-y-8">
          {experience.map((item) => (
            <article key={item.org}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="text-lg font-bold">{item.role} · <span className="text-primary">{item.org}</span></h2>
                <p className="font-mono text-xs text-primary">{item.period}</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                {item.points.map((point) => <li key={point}>• {point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border py-8">
        <ResumeHeading>Core skills</ResumeHeading>
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h2 className="font-mono text-xs font-bold tracking-wider text-primary uppercase">{group.label}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <ResumeHeading>Education</ResumeHeading>
        <div className="space-y-4">
          {education.map((item) => (
            <div key={item.title} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div><h2 className="font-bold">{item.title}</h2><p className="text-sm text-muted-foreground">{item.org}</p></div>
              <p className="font-mono text-xs text-primary">{item.period}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ResumeHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 font-mono text-xs font-bold tracking-[0.18em] text-primary uppercase">{"// "}{children}</h2>;
}
