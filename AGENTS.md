<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio — nstung.dev

Personal portfolio for Nguyen Son Tung, AI Engineer (LLM / RAG / agent harness).

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Base UI primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React + hand-authored SVG illustrations
- **Motion:** CSS only, no animation library. Continuous scroll-linked effects (progress bar, timeline fill) use `animation-timeline: view()`; one-shot reveals use an IntersectionObserver that flips `data-reveal` (`scroll-reveal.tsx`) — scroll-driven ranges proved unreliable for those
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles (except dynamic gradients/masks)
- 2-space indentation
- Mobile-first responsive

## Conventions
- **All content lives in `src/features/portfolio/data/portfolio-content.ts`** — never hardcode copy in a section component unless it is purely presentational chrome.
- Sections are server components by default. Add `"use client"` only where interaction genuinely requires it.
- Every animation must be wrapped so it degrades gracefully under `prefers-reduced-motion: reduce`.
- Both light and dark palettes share one identity (orange `--primary`); keep them in sync in `src/app/globals.css`.

## Project Structure
```
src/
  app/              # routes, metadata, sitemap, robots, opengraph-image
  components/
    ui/             # shadcn/ui primitives
  features/portfolio/
    components/     # page sections
    data/           # site content (single source of truth)
    illustrations/  # SVG art components
    types/
  lib/utils.ts      # cn()
public/
  images/           # avatar and other assets
```
