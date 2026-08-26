/**
 * Reading-progress bar. Driven entirely by `animation-timeline: scroll(root)` —
 * no scroll listener, no re-renders, and it stays a server component.
 */
export function ScrollProgress() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[3px]">
      <div className="scroll-progress h-full origin-left scale-x-0 bg-primary" />
    </div>
  );
}
