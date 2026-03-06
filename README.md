# Buqon DINE Website

Dark-themed one-page website for the Buqon DINE garden table with integrated grill.

## Tech Stack

- **Astro** (Static Site Generation)
- **Tailwind CSS v4** (dark theme)
- **GSAP** + ScrollTrigger (animations)
- **Sanity v3** (headless CMS)
- **Vercel** (deployment)

## Project Structure

```
├── astro/          # Astro website (main site)
├── studio/         # Sanity Studio (CMS)
└── package.json    # Root workspace
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Sanity

1. Create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy the project ID
3. Update `studio/sanity.config.ts` and `studio/sanity.cli.ts` with your project ID
4. Create `astro/.env` from `astro/.env.example` and add your project ID

### 3. Run development servers

Astro site:
```bash
cd astro && npm run dev
```

Sanity Studio:
```bash
cd studio && npm run dev
```

### 4. Build for production

```bash
cd astro && npm run build
```

## i18n

The site supports German (default) and English:
- `/de/` — German
- `/en/` — English
- `/` redirects to `/de/`

Content translations are managed in `astro/src/i18n/ui.ts` (static UI strings) and via Sanity CMS (dynamic content with localized fields).

## Sanity CMS

Content types:
- **Homepage** (singleton) — Hero, features, safety, CTA sections
- **Testimonials** — Customer reviews
- **Site Settings** (singleton) — Logo, social links, contact info

All text fields support German and English via `localizedString` / `localizedText` field types.
