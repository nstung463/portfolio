import { HarnessDiagram } from "./harness-diagram";
import { RevealWords } from "./reveal-words";

/**
 * Full-bleed dark band. Deliberately breaks the light card-grid rhythm of the
 * surrounding sections — this is the centrepiece, so it gets its own surface.
 */
export function HarnessSection() {
  return (
    <section id="harness" className="night-surface relative overflow-hidden text-[#f7f0dc]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,200,74,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(244,200,74,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(40,91,148,0.52), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-[90px]">
        <div data-reveal>
          <p className="font-mono text-xs font-bold tracking-[0.15em] text-[#f4c84a] uppercase">06 · Agent stack</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">
            <RevealWords text="How I think about this stack" />
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            An LLM is the reasoning engine. An agent adds a loop and tools. A harness gives it
            the runtime to work safely, statefully, and at scale — the mental model behind
            everything in Experience and Work above.
          </p>
        </div>

        <HarnessDiagram />
      </div>
    </section>
  );
}
