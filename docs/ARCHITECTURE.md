# Project architecture

This project uses a feature-first structure. The portfolio is a self-contained feature, while the
App Router and shared UI primitives stay intentionally thin.

```text
src/
├── app/                         # routes, metadata, global CSS
│   └── page.tsx                  # route composition only
├── components/ui/                # reusable shadcn primitives
├── features/
│   └── portfolio/
│       ├── components/           # sections and feature UI
│       ├── data/                 # editable portfolio content
│       ├── illustrations/        # project-specific SVG artwork
│       ├── types/                # feature contracts
│       └── index.ts              # public feature entry point
└── lib/                          # app-wide utilities
```

## Dependency rules

- `app` imports features; it does not own feature markup or content.
- `features/portfolio/components` may import portfolio `data`, `types`, and `illustrations`.
- `data` and `types` stay presentation-agnostic so content can later move to a CMS or API.
- Shared primitives belong in `components/ui` or `lib`, never inside a portfolio section.
- New portfolio sections should be one file per section and assembled in `PortfolioPage`.

## Where to edit what

- Copy, links, skills, timeline, projects, and education: `src/features/portfolio/data/portfolio-content.ts`
- Type contracts: `src/features/portfolio/types/portfolio.ts`
- Section layout and behavior: matching file in `src/features/portfolio/components/`
- Project SVG artwork: `src/features/portfolio/illustrations/project-art.tsx`
