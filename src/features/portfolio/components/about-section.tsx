import { stats } from "../data/portfolio-content";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <p className="font-mono text-xs tracking-widest text-primary uppercase">{"// about"}</p>
      <h2 className="mt-3 max-w-2xl font-mono text-3xl leading-tight font-semibold sm:text-4xl">
        I turn messy documents into reliable, grounded LLM answers.
      </h2>
      <p className="mt-6 max-w-2xl text-muted-foreground">
        I&apos;m an AI Engineer at FPT Software with 3+ years building production LLM, RAG,
        and multi-agent systems for enterprise clients. My core specialty is{" "}
        <span className="text-foreground">agent harness engineering</span> — designing the
        tools, sandbox, permissions, and connector layer an agent session runs on — proven on
        a 20-person production platform where I&apos;ve been a top contributor. I&apos;m also
        a daily power user of Claude Code, Codex, and Cursor for agentic development workflows.
      </p>
      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-border/60 bg-card p-4">
            <p className="font-mono text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
