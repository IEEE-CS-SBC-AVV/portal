# IEEE CS SBC — Website

This repository builds the official website for the IEEE Computer Society Student Branch Chapter at Amrita Vishwa Vidyapeetham, Coimbatore.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **UI Components:** React 19, Lucide Icons
- **Forms:** React Hook Form
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## Project Structure

```
portal/
├── src/
│   ├── app/              # Pages (Home, About, Committee, Events, etc.)
│   ├── components/       # Reusable components (Navbar, Footer, GradientAvatar)
│   ├── lib/              # Utilities, design helpers, and constants
│   └── types/            # TypeScript definitions
├── public/               # Static assets
├── content/              # Markdown content (events)
└── .github/workflows/    # CI/CD pipelines
```

## Development

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## Pages

- **Home** - Hero, vision, mission with IEEE membership CTAs
- **About Us** - Chapter history, values, benefits, achievements
- **Committee** - Faculty advisor and student team members
- **Events** - Workshops, seminars, hackathons with filtering
- **Gallery** - Event photos (coming soon)
- **Contact** - Contact form and location details
- **Join** - IEEE membership information and benefits
- **Collabratec** - IEEE Collabratec platform information
- **Membership** - Member directory (members-only, Phase 2)
- **Scope Members** - Active member listing

## Design System

Follows **IEEE Computer Society Brand Guidelines** with official colors, typography, and accessibility standards (WCAG AA compliant).

- **Primary Color:** CS Orange (#FFA300) & IEEE Blue (#00629B)
- **Typography:** Montserrat (headings), Open Sans (body), 16px minimum
- **Accessibility:** 44px touch targets, proper contrast, semantic HTML
- **CSS Classes:** `btn-cs-primary`, `cs-card`, `cs-input`, `cs-alert`, etc.

## Project Status

**Phase 1:** ✅ Complete (Jan 14, 2026)

- Static site with gradient avatars and consolidated design system

**Phase 2:** ✅ Complete (Feb 25, 2026)

- All navigation fixed and working (Link components)
- Events system integrated with markdown-based content
- 100% deprecated class cleanup (ieee-\* → hex values)
- Text visibility & WCAG AA compliance verified
- Image component optimization (replaced `<img>` with Next.js `<Image>`)
- Zero ESLint warnings, zero TypeScript errors

**Phase 3:** 📋 Planned - Supabase backend, admin dashboard, image uploads

## Build Status

- **Compile Time:** 2.3s (Turbopack)
- **ESLint Status:** ✅ Zero errors, zero warnings
- **TypeScript:** ✅ Strict mode passing
- **Pages Generated:** 13/13 static pages
- **LCP Optimization:** All images use Next.js Image component

## Current Features

- IEEE CS brand-compliant styling
- Contact form with validation (EmailJS ready)
- Event filtering and search with markdown integration
- Automated CI/CD with GitHub Actions
- Gradient avatars for committee members (fallback)
- Custom 404 page with branding
- Next.js Image component for optimized assets
- WCAG AA accessibility compliant

### Planned

- Admin dashboard
- User authentication
- Event registration system
- Image uploads
- Newsletter integration
- Blog/News section

## Security

- Never commit secrets or API keys
- Use `.env.local` for environment variables
- Store sensitive data in GitHub/Vercel environment variables

## License

MIT License - see [LICENSE](LICENSE) file for details.
