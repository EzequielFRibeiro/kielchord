# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Company website for **App Deco Studio** — an iOS/indie app development studio. Currently being migrated from a static HTML/CSS site to Next.js. Will also host an iOS/indie dev blog.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export → out/)
npm run lint     # Run ESLint
npm start        # Serve production build
```

No test suite is configured yet.

## Architecture

**Static export:** `next.config.ts` sets `output: 'export'` and `images.unoptimized: true`, which means Next.js generates a fully static site into `out/`. There is no server-side rendering — avoid features that require a Node.js server (server actions, API routes, etc.).

**Routing:** Uses the Next.js App Router (`app/` directory):
- `/` → `app/page.tsx` — landing page with Hero, About, Apps, Blog, Contact sections
- `/blog` → `app/blog/page.tsx` — full post listing
- `/blog/[slug]` → `app/blog/[slug]/page.tsx` — individual post (uses `generateStaticParams`)

**Components:** Shared components live in `components/`:
- `Nav.tsx` — client component with hamburger menu for mobile
- `AppCard.tsx`, `BlogCard.tsx`, `Footer.tsx` — server components

**Blog:** Posts are Markdown files in `content/posts/` with YAML frontmatter (`title`, `date`, `description`, `author`, `tags`). `lib/posts.ts` provides `getAllPosts()` and `getPostBySlug()` using `gray-matter`. Note: `gray-matter` parses YAML dates as `Date` objects — `toDateString()` in `lib/posts.ts` normalises them to `YYYY-MM-DD` strings. Blog posts render via `react-markdown` + `remark-gfm` + `rehype-raw`. Prose styling is via the `.blog-content` class in `globals.css`.

**Styling:** Tailwind CSS v4 via PostCSS. Brand colors are defined in `@theme` in `app/globals.css`:
- `brand-dark` (`#15130e`) — background
- `brand-card` (`#1e1a10`) — card/section backgrounds
- `brand-cream` (`#f9eed3`) — body text
- `brand-gold` (`#987a2b`) — accents, CTAs
- `brand-gold-light` (`#b89540`) — hover states

**Font:** Poppins (400, 600) loaded via `next/font/google`, sets `--font-poppins` CSS variable. Referenced via `@theme inline` in `globals.css`.

**Deployment:** Firebase Hosting (`app-deco-studio` project). `firebase.json` points to `out/` with `cleanUrls: true`. Existing shortlink redirects (`/soka`, `/classifier`, `/ceramispace`, `/pokemon`) are preserved in `firebase.json`. GitHub Actions workflows in `.github/workflows/` handle PR previews and production deploys on merge to `main`.

**Path alias:** `@/*` maps to the repository root.
