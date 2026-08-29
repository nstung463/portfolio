import { Fragment } from "react";

/**
 * Splits a heading into words that rise in one after another as it scrolls
 * into view. Each word is its own `[data-reveal]` subject, so the existing
 * observer in `scroll-reveal.tsx` drives it — no second mechanism, and the
 * words render plainly visible without JavaScript.
 *
 * The stagger is an inline `transition-delay` rather than the
 * `--reveal-index` the stagger containers use: those count every child,
 * including the `<br>`s that split a headline into lines, which would leave a
 * gap in the middle of a sentence.
 */
export function RevealWords({
  text,
  className,
  startDelay = 0,
  step = 85,
}: {
  text: string;
  className?: string;
  /** Offset for a line that continues a headline started above it. */
  startDelay?: number;
  step?: number;
}) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          {index > 0 && " "}
          <span
            data-reveal
            data-reveal-variant="word"
            className={className}
            style={{ transitionDelay: `${startDelay + index * step}ms` }}
          >
            {word}
          </span>
        </Fragment>
      ))}
    </>
  );
}
