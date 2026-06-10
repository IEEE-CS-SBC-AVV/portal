# IEEE CS SBC — Website

Official website for the IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** TailwindCSS v4
- **UI:** React 19, Lucide Icons, Framer Motion
- **Forms:** React Hook Form + Formspree
- **Content:** Markdown (gray-matter) for events & news
- **Deployment:** Vercel (auto-deploy from main)
- **CI/CD:** GitHub Actions

## Project Structure

```
portal/
├── src/
│   ├── app/              # Pages (20 routes: Home, About, Committee, Events, etc.)
│   ├── components/       # Reusable components (Navbar, Footer, MemberCard, etc.)
│   └── lib/              # Utilities, constants, content loader
├── public/               # Static assets and committee photos
├── content/              # Markdown content (events, news)
└── .github/workflows/    # CI/CD pipelines
```

## Development

```bash
npm ci                  # Install (use ci, not install)
npm run dev             # Dev server on http://localhost:3000
npm run build           # Production build (~2.7s Turbopack)
npm run lint            # ESLint check
npm run type-check      # tsc --noEmit (strict)
npm run test            # Vitest
npm run format          # Prettier
```

## Pages

- **Home** — Hero, animated stats, vision/mission, membership CTAs
- **About Us** — Chapter history, values, benefits, quick facts
- **Committee** — Faculty advisor + 14 members with photos & gradient fallback
- **Events** — Workshops, seminars, hackathons with filtering + detail pages
- **News** — Article listing + detail pages
- **Gallery** — Photo gallery (under progress)
- **Contact** — Contact form (Formspree), map, office hours, social links
- **Join** — IEEE/CS membership pricing, FAQ, newsletter signup
- **Collabratec** — IEEE Collabratec platform overview
- **Membership** — Member directory with photos and contact info
- **Scope Members** — Searchable member directory with gradient avatars
- **Search** — Full-text event search

## Design System

Follows **IEEE Computer Society Brand Guidelines** with WCAG AA compliance.

- **Primary:** CS Orange (#FFA300) & IEEE Blue (#00629B)
- **Typography:** Montserrat (headings), Open Sans (body)
- **Accessibility:** 44px touch targets, 4.5:1 contrast, skip-to-main link
- **CSS Classes:** `btn-cs-primary`, `cs-card`, `cs-input`, `cs-alert`, etc.

## Project Status

**Phase 1 & 2:** ✅ Complete

- 20 static pages, zero ESLint warnings, zero TypeScript errors
- Events & news powered by markdown (gray-matter)
- Committee members with photos (GradientAvatar fallback)
- WCAG AA compliant, responsive design
- CI/CD with lint → type-check → build → test pipeline

**Phase 3:** 📋 Planned — Supabase backend, admin dashboard, image uploads

## Current Features

- IEEE CS brand-compliant design
- Contact form with Formspree integration
- Event filtering (All/Upcoming/Completed) + detail pages
- News article listing + detail pages
- Member cards with photos and gradient avatar fallbacks
- Search events by title, description, and location
- RSS feed for events
- Full sitemap for SEO
- JSON-LD structured data (Organization + Breadcrumb)
- Custom 404 and error pages
- Deterministic gradient avatars
- Newsletter signup form

## Security

- Never commit secrets or API keys
- Use `.env.local` for environment variables
- Store sensitive data in GitHub/Vercel environment variables

## License

MIT License — see [LICENSE](LICENSE) for details.
