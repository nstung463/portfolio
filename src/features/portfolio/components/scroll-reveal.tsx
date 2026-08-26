"use client";

import { useEffect } from "react";

/**
 * Reveals `[data-reveal]` elements as they scroll into view. Mark a single
 * element with `data-reveal`, or a container with `data-reveal-stagger` to
 * walk its children in one by one; `data-reveal-variant` picks the motion.
 *
 * This deliberately does not use `animation-timeline: view()` like the rest of
 * the page. A scroll-driven animation runs on the compositor and holds its
 * state there, which makes it effectively unverifiable from the outside — and
 * the range forms that pin one to a reading line do not resolve as documented
 * for subjects taller than the viewport. An observer is a plain boolean: the
 * element is either marked in or it is not, and that can be read back.
 *
 * Elements ship with no `data-reveal` value, so without JavaScript — or before
 * hydration — they simply render visible. The hidden state is only ever
 * applied to elements that are still below the fold.
 */
export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger] > *"),
    );
    if (elements.length === 0) return;

    // Children of a stagger container walk in one after another.
    for (const container of document.querySelectorAll("[data-reveal-stagger]")) {
      Array.from(container.children).forEach((child, index) => {
        (child as HTMLElement).style.setProperty("--reveal-index", String(index));
      });
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      for (const el of elements) el.dataset.reveal = "in";
      return;
    }

    const viewportHeight = window.innerHeight;

    for (const el of elements) {
      // Anything already on screen stays put — hiding it now would flash.
      el.dataset.reveal = el.getBoundingClientRect().top < viewportHeight * 0.9 ? "in" : "out";
    }

    const pending = new Set(elements.filter((el) => el.dataset.reveal === "out"));

    // Inside a `data-reveal-repeat` container an element plays its reveal
    // backwards on the way out, so scrolling up undoes what scrolling down
    // did. Everywhere else a reveal is final: re-hiding text the reader has
    // already read, only to replay it when they scroll back to re-read a
    // line, is the failure mode this pattern is known for.
    const repeats = new Set(elements.filter((el) => el.closest("[data-reveal-repeat]")));

    const show = (el: HTMLElement) => {
      el.dataset.reveal = "in";
      pending.delete(el);
      if (!repeats.has(el)) opening.unobserve(el);
    };

    // Arriving: an element opens once it has climbed a quarter of the way up
    // the screen, so it appears where the reader is looking rather than at the
    // very bottom edge.
    const opening = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) show(entry.target as HTMLElement);
        }

        // A jump — an in-page anchor, End, or a flung scroll — can carry
        // elements past the viewport without ever tripping the observer,
        // which would strand them hidden above the fold. Anything now behind
        // the reader is shown outright. Repeating elements are exempt: for
        // them, off screen is meant to be hidden.
        for (const el of Array.from(pending)) {
          if (!repeats.has(el) && el.getBoundingClientRect().bottom < 0) show(el);
        }
      },
      { rootMargin: "0px 0px -25% 0px", threshold: 0 },
    );

    // Leaving: closing is measured against the halfway line rather than the
    // quarter line it opened on. Sharing one line meant a card had to sink
    // almost to the bottom edge before it closed, which read as far too late
    // on the way back up.
    //
    // The gap between the two lines is deliberate, and it is what makes this
    // work without tracking which way the reader is scrolling: an observer
    // only reports a *change*, so a card that opened at the quarter line and
    // is still short of the halfway line is never told to close — the closing
    // observer last spoke when the card was below that line, and says nothing
    // more until the card crosses it. Coming back up, that crossing is exactly
    // the moment to close.
    const closing = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (!entry.isIntersecting && repeats.has(el)) el.dataset.reveal = "out";
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );

    // Repeating elements are watched for arrival even when they start open,
    // since they will close and have to be able to open again.
    for (const el of new Set([...pending, ...repeats])) opening.observe(el);
    for (const el of repeats) closing.observe(el);

    return () => {
      opening.disconnect();
      closing.disconnect();
    };
  }, []);

  return null;
}
