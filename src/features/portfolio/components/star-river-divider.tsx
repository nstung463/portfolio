import Image from "next/image";

/** Painterly bridge from the evidence-led Work section into the dark,
 * conceptual Agent Harness section. Decorative only: the content hierarchy
 * remains uninterrupted for assistive technology. */
export function StarRiverDivider() {
  return (
    <div
      aria-hidden
      className="relative h-[clamp(8rem,14vw,11rem)] overflow-hidden bg-[#07152b]"
    >
      <Image
        src="/images/star-river-divider.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center brightness-110 saturate-90"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--card)_0%,transparent_28%,transparent_68%,#07152b_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,43,0.34),transparent_18%,transparent_82%,rgba(7,21,43,0.34))]" />
    </div>
  );
}
