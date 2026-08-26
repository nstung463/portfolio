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
      if (!repeats.has(el)) observer.unobserve(el);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) show(el);
          else if (repeats.has(el)) el.dataset.reveal = "out";
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
      // Fires once the element has climbed a quarter of the way up the
      // screen, so it appears where the reader is looking rather than at
      // the very bottom edge.
      { rootMargin: "0px 0px -25% 0px", threshold: 0 },
    );

    for (const el of pending) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return null;
}
