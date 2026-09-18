# AGENTS.md

Guidelines for AI coding agents (and humans) working in this repository.

## Project Overview

- A simple static website built with plain HTML, CSS, and (optionally) vanilla JavaScript.
- No build step, no framework, no bundler.
- Hosted on **Cloudflare Pages**, deployed automatically from this public GitHub repository.

## Repository Structure

```
/               # Repository root
├── index.html  # Site entry point (must exist at the root)
├── css/        # Stylesheets (if the site grows beyond one file)
├── js/         # Client-side scripts (if needed)
├── assets/     # Images, icons, fonts, etc.
└── AGENTS.md   # This file
```

Keep `index.html` at the repository root — it serves as the Cloudflare Pages entry point.

## Conventions

- **HTML**: Semantic, valid HTML5. One page per file, lowercase kebab-case filenames (e.g., `about.html`, `contact.html`).
- **CSS**: Plain CSS files, no preprocessors. Prefer a single `css/style.css` until the site is large enough to split.
- **JavaScript**: Vanilla ES modules only, no dependencies, no npm.
- **Assets**: Optimize images before committing (compress, appropriate formats). Use relative paths for all links and asset references so the site works under any base path.
- **Line endings**: LF. UTF-8 encoding. Keep files free of trailing whitespace.

## Deployment (Cloudflare Pages)

- Deployment is configured in the Cloudflare dashboard, connected to this GitHub repository (public).
- Deploy from the **main** branch. No custom domain for now — the site uses the default `*.pages.dev` domain.
- Suggested Cloudflare Pages settings:
  - **Build command**: (none — static site, leave empty)
  - **Build output directory**: `/` (repository root)
- Every push to `main` triggers an automatic deployment. Pull requests get preview deployments automatically.
- No analytics or form handling needed at this time. Do not add tracking scripts, Workers, or Pages Functions.
- Do not add build tooling, CI workflows, or deploy scripts unless explicitly asked — Cloudflare Pages handles everything.

## Things to Avoid

- Do not introduce frameworks, package managers, or build steps.
- Do not commit secrets, API keys, or tokens — this repository is public.
- Do not add server-side code; Cloudflare Pages serves static assets only (Workers/Functions are out of scope for now).

## Local Development

This repository uses Docker Compose for local development (see `docker-compose.yaml`), which runs the pi coding agent in a container with the repo mounted at `/app`. The compose setup is for development only — it is not part of deployment.

To preview the site locally (inside or outside Docker), serve it with any static server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

Then verify all pages, links, and assets load correctly at `http://localhost:8000`.
