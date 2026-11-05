import { RevealWords } from "./reveal-words";
import { SectionLabel } from "./section-primitives";

export function AboutSection() {
  return (
    <section id="about" className="starfield-surface relative overflow-hidden">
      <div
        data-reveal
        className="mx-auto grid max-w-6xl gap-10 px-5 py-[90px] lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16"
      >
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionLabel n="01" label="About" />
          <p className="mt-6 font-mono text-[11px] leading-6 tracking-[0.08em] text-muted-foreground uppercase">
            Ho Chi Minh City, VN
            <br />
            AI Engineer · FPT Software
            <br />
            Open to projects
          </p>
        </div>

        <div>
          <h2 className="section-heading max-w-2xl text-[2rem] leading-[1.06] font-bold tracking-[-0.03em] sm:text-[3.25rem] lg:text-[3.6rem]">
            <RevealWords text="I build AI agents that" />
            <br />
            <RevealWords
              text="do the boring things"
              startDelay={400}
              className="text-[1.06em]"
            />
            <br />
            <RevealWords text="so humans don’t have to." startDelay={800} />
          </h2>
          <p className="mt-7 max-w-2xl leading-7 text-muted-foreground">
            I&apos;m an AI Engineer at FPT Software with 3+ years building production LLM, RAG,
            and multi-agent systems for enterprise clients. My core specialty is{" "}
            <span className="font-medium text-foreground">agent harness engineering</span> —
            designing the tools, sandbox, permissions, and connector layer an agent session runs
            on — proven on a 20-person production platform where I&apos;ve been a top
            contributor. I&apos;m also a daily power user of Claude Code, Codex, and Cursor for
            agentic development workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
