/**
 * Applies an explicitly chosen theme before first paint, so a visitor who has
 * overridden their OS preference never sees the wrong palette flash.
 *
 * Visitors who have made no choice are handled entirely by the
 * `prefers-color-scheme` block in `globals.css` — this script is a no-op for
 * them, and the site is still correct with JavaScript disabled.
 */
const script = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light")return;var e=document.documentElement;e.classList.add(t);e.style.colorScheme=t;}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} suppressHydrationWarning />;
}
