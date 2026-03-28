# AFK Website

The official website for AFK (Albins Företagskonferens), a career fair organized by [DaTe](https://datateknologerna.org) — the student association for IT students at Åbo Akademi University.

## Development

```bash
npm install
npm run dev      # Start dev server at localhost:3000 (uses Turbopack)
npm run build    # Production build (static export to ./out)
npm run lint     # ESLint
```

## Project Structure

```
src/app/
├── layout.jsx              # Root layout (fonts, meta, CSP headers)
├── page.jsx                # Entry point — assembles Header, Content, Footer
├── globals.css             # Global styles and afk-* utility classes
├── sections/
│   ├── Header.jsx          # Desktop sticky nav (hidden on mobile)
│   ├── HeaderMobile.jsx    # Mobile nav (currently not in use)
│   ├── Footer.jsx
│   └── Content.jsx         # Main section container
├── components/
│   ├── AboutAFK.jsx
│   ├── Organizers.jsx
│   ├── content/            # Feature sections (greeting, event-info, participants, contact)
│   └── ui/                 # Reusable primitives (buttons, countdown, links, scroll)
└── json/
    ├── companies.json      # Participating company data
    ├── speakers.json       # Keynote speaker data
    ├── test-companies.json # Dev fixture for company layout
    └── test-speakers.json  # Dev fixture for speaker layout
```

## Styling

Tailwind CSS is used alongside a set of custom `afk-*` classes defined in `globals.css`. Prefer these over ad-hoc Tailwind utilities for consistency:

| Class | Purpose |
|---|---|
| `afk-card` | Section card with dark background and blue border |
| `afk-title` | Chakra Petch bold heading |
| `afk-section-title` | Uppercase spaced section heading |
| `afk-pill` | Rounded bordered label/badge |
| `afk-link` | Styled anchor |
| `afk-divider` | Horizontal gradient rule |
| `afk-orb` | Circular orb element |
| `afk-outline` | Transparent text with stroke |

Custom Tailwind colors: `primary` (#92C7FF), `secondary` (#4d98e8).
Fonts: **Chakra Petch** (headings/UI) and **Josefin Sans** (body).

## Content Management

### Switching the event-info section

`Content.jsx` has two mutually exclusive components for the info section. Swap the comment around the one you want active based on how close the event is:

- **`<InfoBeforeFair />`** — show when the fair is more than ~2 months away (pricing, sign-up)
- **`<InfoFair />`** — show when the fair is imminent (schedule, logistics)

### Participants section

The `<Participants />` block in `Content.jsx` renders participating companies. Company data is in `src/app/json/companies.json`:

```json
{
  "companies": [
    {
      "id": 1,
      "name": "Company Name",
      "description": "...",
      "logo": "/images/logos/logo.png"
    }
  ]
}
```

Use `src/app/json/test-companies.json` as a reference for testing the layout with multiple entries.

### Keynote speakers

Speaker data is in `src/app/json/speakers.json`. Each entry supports optional `linkedin` and `github` social links:

```json
{
  "speakers": [
    {
      "id": 1,
      "name": "Speaker Name",
      "title": "Title",
      "description": [{ "text": "Bio paragraph." }],
      "linkedin": "https://linkedin.com/in/handle",
      "github": "https://github.com/handle",
      "picture": "/images/speakers/photo.jpeg"
    }
  ]
}
```

Use `src/app/json/test-speakers.json` for layout testing.

## Contact Form

The contact form (`ContactForm.jsx`) uses [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) for bot protection and posts to an external API:

```
POST https://contactapi.afk-fair.com/contact
```

The Turnstile script is loaded dynamically on the client. The sitekey is hardcoded in `ContactForm.jsx`.

## Deployment

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/nextjs.yml`), which builds the static site and deploys it to GitHub Pages.
