# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack at localhost:3000
npm run build    # Production build (outputs static site to ./out)
npm run lint     # ESLint
```

No test suite exists.

## Architecture

Single-page Next.js 15 app deployed as a static site to GitHub Pages (via `.github/workflows/nextjs.yml` on push to `main`). All sections are on one scrollable page — there are no sub-routes.

**Page assembly** (`src/app/page.jsx`):
- `Header` (desktop-only, hide-on-scroll)
- `Content` — the main section container
- `Footer`

**Content sections** (`src/app/sections/Content.jsx`) render in order:
1. `Greeting` / `GreetingMobile` — hero, responsive swap at `lg` breakpoint
2. `AboutAFK`
3. `InfoBeforeFair` OR `InfoFair` — swap these manually depending on proximity to the event date (see comment in Content.jsx)
4. `Organizers`
5. `Participants` — **currently commented out**, pending company approval
6. `Contact` (includes `ContactForm`)

**Components** live in `src/app/components/`:
- `content/` — feature-specific (greeting, participants, event-info, contact)
- `ui/` — small reusable primitives (ButtonHeader, ButtonLink, ButtonSocials, Countdown, ImageText, Link)

**Data**: Participating companies are stored in `src/app/json/companies.json` and consumed by the `Participants` component. There's also `test-companies.json` for development.

**Contact form** (`ContactForm.jsx`) posts JSON to `https://contactapi.afk-fair.com/contact` and uses Cloudflare Turnstile for bot protection (sitekey in the component, script loaded dynamically).

## Styling

Tailwind CSS + custom `afk-*` utility classes defined in `src/app/globals.css`. Always prefer the existing `afk-*` classes (`afk-card`, `afk-title`, `afk-section-title`, `afk-pill`, `afk-link`, `afk-divider`, `afk-orb`, `afk-outline`) over ad-hoc inline styles for consistency.

Custom Tailwind theme values (see `tailwind.config.mjs`):
- Colors: `primary` (#92C7FF), `secondary` (#4d98e8), `participant` (blue overlay)
- Fonts: `font-sans` → Chakra Petch, `font-serif` → Josefin Sans
- Animation: `appear` (fade-in, 2s ease-in-out)

CSS variables for the color palette are in `:root` in `globals.css` (`--afk-blue`, `--afk-ink`, `--afk-paper`, `--afk-muted`, etc.).
