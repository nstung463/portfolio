import { SectionBleed, SectionLabel } from "./section-primitives";

const buildNotes = [
  {
    label: "01 / RETRIEVAL",
    title: "Grounding is a system property",
    description: "Chunking, retrieval, reranking, citations, and evaluation all matter more than a clever prompt alone.",
  },
  {
    label: "02 / AGENTS",
    title: "The harness is the product",
    description: "Tools, permissions, memory, skills, and connectors decide whether an agent can be trusted beyond a demo.",
  },
  {
    label: "03 / OPERATIONS",
    title: "Autonomy needs boundaries",
    description: "Sandboxed execution, HITL approvals, observability, and resumable runs make unattended automation viable.",
  },
];

export function WritingSection() {
  return (
    <section id="writing" className="relative mx-auto max-w-6xl overflow-hidden px-5 py-[90px]">
      <SectionBleed text="Writing" />
      <div className="relative z-10 reveal">
        <SectionLabel n="07" label="Writing" />
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Systems I think about</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Short field notes from building reliable LLM applications, agent runtimes, and the infrastructure around them.
        </p>
        <div className="reveal-stagger mt-10 grid gap-4 md:grid-cols-3">
          {buildNotes.map((note) => (
            <article key={note.label} className="rounded-[10px] border border-border bg-card p-5">
              <p className="font-mono text-[10px] font-bold tracking-[0.1em] text-primary">{note.label}</p>
              <h3 className="mt-5 text-lg font-bold">{note.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{note.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
