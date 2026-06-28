# PassiveAggressiveEmails.com

The definitive destination on the internet for passive-aggressive workplace communication.

## Overview

PassiveAggressiveEmails.com is a media property and traffic business built around an AI-powered passive-aggressive email generator. The site features 1000+ pre-crafted email scenarios, a 6-point aggression tone scale, shareable results, and a curated hall of fame.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 + Shadcn/UI
- **Animation**: Framer Motion
- **AI**: AI-powered custom generation
- **Deployment**: Vercel
- **Analytics**: Google Analytics

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```
OPENROUTER_API_KEY=your-openrouter-api-key
OPENROUTER_MODEL=openai/gpt-4o-mini
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_SITE_URL=https://www.passiveaggressiveemails.com

# Rate limiting (required in production — use Upstash Redis or Vercel KV)
UPSTASH_REDIS_REST_URL=your-upstash-redis-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-token
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment

This project is optimized for Vercel deployment.

1. Push to a Git repository
2. Import the project in Vercel
3. Set environment variables in Vercel dashboard
4. Connect [Upstash Redis](https://vercel.com/integrations/upstash) or Vercel KV for IP rate limiting (5 generations/hour)
5. Deploy

### Key Vercel Settings

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (generate, og)
│   ├── blog/              # Blog system
│   ├── categories/        # Category pages
│   ├── e/                 # Shared email pages
│   ├── examples/          # Examples listing
│   ├── hall-of-fame/      # Hall of fame
│   └── [trust pages]     # About, methodology, privacy, etc.
├── components/
│   ├── generator/         # Email generator UI
│   ├── layout/            # Header, footer, breadcrumbs
│   ├── sharing/           # Social share buttons
│   ├── seo/               # JSON-LD, schema markup
│   ├── analytics/         # Google Analytics
│   ├── ads/               # Ad placements (inactive)
│   └── affiliates/        # Affiliate cards (inactive)
├── data/                  # Scenarios, categories, tones
├── lib/                   # Utilities (ai, analytics, seo)
└── styles/                # Global CSS
```

## SEO & GEO

- Dynamic sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Schema markup (Organization, WebApplication, Article, FAQ, BreadcrumbList)
- Open Graph + Twitter Card meta tags
- `llms.txt` and `llms-full.txt` for AI discoverability
- Canonical URLs on every page

## Content Strategy

- 90% pre-generated local content
- 10% AI generation (custom scenarios only)
- 8 categories, 6 tone levels, 6 recipient types
- Hall of fame with curated best entries
- Blog with SEO-optimized articles

## Performance Targets

- 95+ Lighthouse score
- Static generation where possible
- Minimal client-side JavaScript
- Optimized images and fonts
- Efficient caching headers

## License

All rights reserved.
