# Noosh Grill

Fresh halal food in Fairfax, VA — [eatnoosh.com](https://www.eatnoosh.com)

## Tech Stack

- **Framework:** Next.js 15 (App Router, TypeScript)
- **Styling:** Tailwind CSS 4
- **Animations:** GSAP 3.x + ScrollTrigger
- **Images:** `next/image` with automatic WebP/AVIF
- **Fonts:** Tanker (local) + Montserrat (Google)
- **Forms:** Formspree
- **Deployment:** Vercel

## Setup

```bash
git clone git@github.com:yaserhdev/noosh-grill.git
cd noosh-grill
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values:

```bash
cp env.local.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | Yes | Formspree form ID for the contact form |
| `GOOGLE_PLACES_API_KEY` | No | Google Places API key — falls back to curated reviews if missing |
| `GOOGLE_PLACE_ID` | No | Google Place ID for Noosh Grill — falls back to curated reviews if missing |

## Deployment

Deployed on Vercel, automatically from `main` branch. Add environment variables in the Vercel project settings before deploying.

## License

All rights reserved — Noosh Grill / CreaDev Design LLC.
