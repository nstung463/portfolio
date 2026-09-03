export function PortfolioFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#041022] px-5 pt-6 pb-8 font-mono text-xs text-[#9fb0c9]">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} · Nguyen Son Tung</p>
        <p>Built with Next.js · Tailwind · <span className="text-[#f4c84a]">◆</span></p>
      </div>
    </footer>
  );
}
