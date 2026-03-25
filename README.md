# idpishield.sh

Marketing and documentation site for [idpi-shield](https://github.com/pinchtab/idpishield), built with Astro (static output) and Tailwind CSS v4.

## Stack

- Astro 5 (SSG)
- Tailwind CSS v4
- React (only where needed)
- Bun (dependency/runtime in CI and deploy workflows)

## Requirements

- Bun `>=1.0`
- Node.js `>=18` (for local tooling compatibility)

## Local Development

```bash
bun install
bun run dev
```

Open `http://localhost:4321`.

## Scripts

- `bun run dev` — start local dev server
- `bun run build` — production build to `dist/`
- `bun run preview` — preview production build
- `bun run type-check` — Astro type checks (`astro check`)

## Docs

Documentation is pulled from the [main idpishield repo](https://github.com/pinchtab/idpishield) at build time via `docs/index.json`. The site fetches markdown files from the repo's `docs/` directory on the `main` branch.

For local development against a local copy of the docs:

1. Set `USE_LOCAL_DOCS = true` in `src/lib/docs/config.ts`
2. Point `LOCAL_DOCS_PATH` to your local `idpishield/docs` directory

## Project Layout

- `src/components/ui` — reusable UI primitives
- `src/components/features` — page sections
- `src/components/layout` — base layout + footer
- `src/components/docs` — documentation renderers
- `src/lib/docs/` — docs loader (fetches from GitHub at build time)
- `src/pages/index.astro` — homepage
- `src/pages/docs/` — documentation pages
- `public/` — static assets

## CI and Deploy

### CI

Runs on push/PR to `main`: install, type-check, build.

### Deploy

Deploys to GitHub Pages on push to `main`.
