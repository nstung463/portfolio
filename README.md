# nstung.dev — personal portfolio

Portfolio site for **Nguyen Son Tung**, AI Engineer working on LLM, RAG, and agent-harness systems.

Built with Next.js 16 (App Router, React 19), TypeScript strict, Tailwind CSS v4, and native
CSS scroll-driven animations — no animation library.

## Development

```bash
npm install
npm run dev
```

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run check` | lint + typecheck + build |

## Structure

```
src/
  app/                     # routes, metadata, sitemap, robots, OG image
  components/ui/           # shadcn primitives
  features/portfolio/
    components/            # page sections
    data/                  # all site content lives here
    illustrations/         # hand-authored SVG art
    types/
```

All copy and project data is centralised in `src/features/portfolio/data/portfolio-content.ts`.

## License

MIT — see [LICENSE](LICENSE).
