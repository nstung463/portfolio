/**
 * Applies an explicitly chosen theme before first paint, so a visitor who has
 * overridden their OS preference never sees the wrong palette flash.
 *
 * Visitors who have made no choice are handled entirely by the
 * `prefers-color-scheme` block in `globals.css` — this script is a no-op for
 * them, and the site is still correct with JavaScript disabled.
 */
const script = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light")return;var e=document.documentElement;e.classList.add(t);e.style.colorScheme=t;}catch(e){}})();`;

/**
 * Stops the browser restoring the previous scroll offset on reload, which was
 * dropping visitors part-way into the hero with the bar already scrolled off.
 * Only when the URL carries no hash — an in-page link still has to land on its
 * section — and it runs before first paint, so there is no visible jump.
 */
const scrollScript = `(function(){try{if(!location.hash&&"scrollRestoration" in history){history.scrollRestoration="manual";}}catch(e){}})();`;

export function ThemeScript() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} suppressHydrationWarning />
      <script dangerouslySetInnerHTML={{ __html: scrollScript }} suppressHydrationWarning />
    </>
  );
}
