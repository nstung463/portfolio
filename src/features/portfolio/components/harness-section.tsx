import { HarnessDiagram } from "./harness-diagram";

/**
 * Full-bleed dark band. Deliberately breaks the light card-grid rhythm of the
 * surrounding sections — this is the centrepiece, so it gets its own surface.
 */
export function HarnessSection() {
  return (
    <section id="harness" className="relative overflow-hidden bg-[#140c07] text-[#f7f2ee]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(120% 80% at 50% 0%, #000 30%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,122,47,0.28), transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-[90px]">
        <div data-reveal>
          <p className="font-mono text-xs font-bold tracking-[0.15em] text-[#ff7a2f] uppercase">05 · Deep dive</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold sm:text-5xl">
            Anatomy of an agent harness
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            An agent is only as trustworthy as the runtime underneath it. This is the layer I
            build: the loop, the tool contract, the sandbox it executes in, the approvals that
            gate anything irreversible, and the connectors that reach real systems.
          </p>
        </div>

        <HarnessDiagram />
      </div>
    </section>
  );
}
