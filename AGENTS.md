# AGENTS.md — IEEE CS SBC Portal

## Project

Next.js 16 (App Router) + TypeScript + TailwindCSS v4 static site for IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham, Coimbatore. Deployed on Vercel (auto-deploy from main). Phase 3 planned (Supabase backend, admin dashboard, image uploads).

Current status: Phase 2+ complete — 20 pages pre-rendered, zero ESLint warnings, zero TypeScript errors, 7 tests passing, WCAG AA compliant.

---

## Commands (order matters)

```bash
npm ci                          # install (use `npm ci`, NOT `npm install`)
npm run lint                    # ESLint — checks .ts,.tsx only
npm run type-check              # tsc --noEmit (strict mode)
npm run build                   # next build (Turbopack, ~2.7s)
npm run test                    # Vitest — runs all *.test.ts files
npm run test:watch              # Vitest watch mode
npm run format                  # Prettier — writes in-place
npx prettier --check "**/*.{ts,tsx,js,jsx,json,css,md}"   # CI format check
npm run dev                     # dev server on http://localhost:3000
```

CI pipeline order: lint -> type-check -> build -> test-build. PR workflow includes TODO/FIXME diff check. Both workflows on Node 20, npm ci.

---

## Full File Tree

```
portal/
├── content/
│   ├── events/
│   │   ├── inauguration.md          # Real event (Feb 26 2026, 3-4:30 PM, LH-220, Dr. Arun)
│   │   └── template.txt             # YAML frontmatter template
│   └── news/
│       ├── inauguration-success.md  # News article about inauguration
│       └── welcome.md               # Welcome announcement
├── public/
│   ├── assests/
│   │   ├── ieeecs.png              # IEEE CS logo
│   │   ├── ieee.png                # IEEE logo
│   │   ├── home.jpeg               # Homepage hero background
│   │   ├── amrita_white.png        # University logo
│   │   ├── Society.jpg             # CS Society image (also used as OG image + Navbar logo)
│   │   └── IEEE.jpg
│   └── images/committee/           # Normalized photo filenames (10 members, clean slugs)
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout: Navbar + Footer + Toaster + SpeedInsights + OrganizationSchema + BreadcrumbSchema
│   │   ├── template.tsx           # "use client" — framer-motion page transitions (spring: stiffness 260, damping 20)
│   │   ├── globals.css            # @import "tailwindcss" (Tailwind v4) + ALL cs-* design classes (no dark mode)
│   │   ├── page.tsx               # Home — server component, delegates to HomePageClient
│   │   ├── HomePageClient.tsx     # "use client" — hero, animated stats (CountUp), vision/mission, CTA
│   │   ├── not-found.tsx          # "use client" — custom 404 with go-home/go-back + quick links
│   │   ├── error.tsx              # "use client" — error boundary with retry + go-home
│   │   ├── loading.tsx            # Root loading spinner
│   │   ├── sitemap.ts             # Dynamic sitemap (all pages + events + news)
│   │   ├── about/page.tsx         # Who We Are, What is IEEE CS, Core Values, Benefits
│   │   ├── committee/
│   │   │   ├── page.tsx           # Faculty Advisor + Executive + Treasurer + ECC + Webmaster + Content + Design + Newsletter + WICE
│   │   │   └── members.json       # REAL committee data (14 members + advisor, normalized photo paths)
│   │   ├── contact/page.tsx       # "use client" — React Hook Form + EmailJS + Google Maps + office hours + social
│   │   ├── events/
│   │   │   ├── page.tsx           # Server: loads markdown events -> passes raw date strings to EventFilterClient
│   │   │   ├── loading.tsx        # Skeleton loading state for events
│   │   │   └── [slug]/page.tsx    # SSG — event detail page (markdown rendered)
│   │   ├── gallery/page.tsx       # Committee photos grid + chapter images + social CTAs
│   │   ├── join/page.tsx          # Why Join, Membership (IEEE $32 vs CS $48), FAQ, NewsletterSignup, CTA
│   │   ├── news/
│   │   │   ├── page.tsx           # News article listing
│   │   │   └── [slug]/page.tsx    # SSG — news detail page
│   │   ├── collabratec/page.tsx   # What is Collabratec, Key Features, Benefits, How to Get Started
│   │   ├── membership/page.tsx    # Placeholder — members-only directory, "Coming Soon"
│   │   ├── scope-members/page.tsx # "use client" — client-side search/filter over committee data
│   │   ├── feed.xml/route.ts      # RSS feed for events
│   │   └── search/
│   │       ├── page.tsx           # Server component + Suspense
│   │       └── SearchResultsClient.tsx  # "use client" — filters events by ?q=
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx         # "use client" — IEEE top bar + main nav + search + mobile menu + scroll progress
│   │   │   └── Footer.tsx         # Server — about, quick links, IEEE links, contact, legal footer
│   │   ├── EventFilterClient.tsx  # "use client" — All/Upcoming/Completed filter tabs + event cards (client-side date comparison)
│   │   ├── GradientAvatar.tsx     # Deterministic gradient avatar from name hash (7 gradients)
│   │   ├── MemberCard.tsx         # "use client" — photo (with GradientAvatar fallback on error) + contact links
│   │   ├── NewsletterSignup.tsx   # "use client" — email capture form with success state + sonner toast
│   │   └── StructuredData.tsx     # Server — OrganizationSchema + BreadcrumbSchema (JSON-LD, both used in layout)
│   ├── lib/
│   │   ├── constants.ts           # SITE_CONFIG, CONTACT_INFO, SOCIAL_LINKS, IEEE_LINKS, STATS, NAV_LINKS, etc.
│   │   ├── contents.ts            # Server-only: getEvents(), getEventBySlug(), getNews() from markdown
│   │   ├── utils.ts               # cn() (clsx + tailwind-merge), formatDate(), slugify()
│   │   ├── utils.test.ts          # Tests for cn(), formatDate(), slugify() (7 tests)
│   │   └── design-utils.ts        # Programmatic CSS class builders (getButtonClasses, etc.)
│   └── types/
│       └── index.ts               # NavLink, SocialLink, TeamMember, CommitteeData, Event, EventType, etc.
├── vitest.config.ts               # Vitest with jsdom, React plugin, @/ alias
├── src/test/setup.ts              # jest-dom matchers for Vitest
├── .env.example                   # 3 EmailJS vars (NEXT_PUBLIC_EMAILJS_*)
├── EMAILJS_SETUP.md               # 5-minute setup guide
├── next.config.ts                 # reactCompiler: true
├── tsconfig.json                  # strict: true, paths: @/* -> ./src/*
├── tailwind.config.ts             # ieee-* color tokens, shadows, font sizing
├── postcss.config.mjs             # @tailwindcss/postcss plugin
├── eslint.config.mjs              # Flat config (eslint-config-next core-web-vitals + typescript)
├── .prettierrc.json               # semi, trailingComma: es5, singleQuote: false, printWidth: 80
├── .prettierignore                # .next, node_modules, out, build, dist, *.lock
├── .gitignore                     # Ignores .env*.local, TODO.md, ROADMAP.md, EMAILJS_SETUP.md, IMAGE.md, copilot-instructions.md
└── .github/workflows/
    ├── ci.yml                     # Push + PR on main/dev/staging: lint, type-check, build, test-build, status-check
    └── pr-check.yml               # PR-only: lint, type-check, build, test-build, todo-check, preview-deployment, pr-summary
```

---

## Architecture & Data Flow

### Pages (20 total)

| Route            | File                                          | Type             | Key Data Source                                  |
| ---------------- | --------------------------------------------- | ---------------- | ------------------------------------------------ |
| `/`              | `page.tsx` + `HomePageClient.tsx`             | Server + Client  | `STATS` from constants                           |
| `/about`         | `about/page.tsx`                              | Server           | `SITE_CONFIG`, `STATS`                           |
| `/committee`     | `committee/page.tsx`                          | Server           | `committee/members.json` (JSON import)           |
| `/events`        | `events/page.tsx`                             | Server -> Client | `getEvents()` from `content/events/*.md`         |
| `/events/[slug]` | `events/[slug]/page.tsx`                      | SSG              | `getEventBySlug()` from markdown                 |
| `/gallery`       | `gallery/page.tsx`                            | Client           | Committee photos from `public/images/committee/` |
| `/contact`       | `contact/page.tsx`                            | Client           | EmailJS env vars                                 |
| `/join`          | `join/page.tsx`                               | Server           | `MEMBERSHIP_PRICING`, includes NewsletterSignup  |
| `/news`          | `news/page.tsx`                               | Server           | `getNews()` from `content/news/*.md`             |
| `/news/[slug]`   | `news/[slug]/page.tsx`                        | SSG              | Markdown news articles                           |
| `/collabratec`   | `collabratec/page.tsx`                        | Server           | n/a                                              |
| `/membership`    | `membership/page.tsx`                         | Server           | Placeholder                                      |
| `/scope-members` | `scope-members/page.tsx`                      | Client           | `committee/members.json`                         |
| `/search`        | `search/page.tsx` + `SearchResultsClient.tsx` | Server + Client  | `getEvents()` from markdown                      |
| `/sitemap.xml`   | `sitemap.ts`                                  | Dynamic          | `getEvents()` + `getNews()`                      |
| `/feed.xml`      | `feed.xml/route.ts`                           | Dynamic          | `getEvents()`                                    |
| `404`            | `not-found.tsx`                               | Client           | n/a                                              |

### Adding a New Event

1. Create `content/events/[slug].md` with YAML frontmatter:
   ```yaml
   ---
   title: Event Title
   date: YYYY-MM-DD
   type: workshop|seminar|hackathon|webinar|competition|social|other
   location: Room/Building
   time: "HH:MM AM - HH:MM PM" # optional
   speakers:
     - name: Speaker Name
       title: Optional Title # optional
   excerpt: Short description
   featured: true # optional
   ---
   ```
2. Full markdown body follows `---`
3. Parsed by `gray-matter` in `src/lib/contents.ts:getEvents()`
4. Event status computed **client-side** via `isUpcoming()` in `EventFilterClient.tsx` (compares `new Date(date) > new Date()`) — not at build time
5. Auto-generates detail page at `/events/[slug]` via `generateStaticParams`

### Adding a New Article

1. Create `content/news/[slug].md`
2. YAML frontmatter: `title`, `date`, `excerpt`
3. Auto-generates listing at `/news` and detail at `/news/[slug]`

### Committee Photo Paths

- All photos: `/images/committee/` with normalized filenames (lowercase, dashes, no spaces)
- Members without photos have `"photo": ""` — `MemberCard` falls back to `GradientAvatar`

---

## Styling & Design System

### TailwindCSS v4

- Imported via `@import "tailwindcss"` in `globals.css` (NOT `@tailwind` directives)
- PostCSS plugin: `@tailwindcss/postcss`

### Color Reference Convention

- ALL colors use **inline hex with Tailwind arbitrary value syntax**: `text-[#00629B]`, `from-[#00629B]`, `hover:bg-[#e8f0f8]`
- NO `[ieee-blue]` or `[ieee-cyan]` Tailwind config references remain in source
- CSS custom properties in `globals.css:root`: `--cs-orange-primary: #ffa300`, `--cs-blue-ieee: #00629b`, etc.
- `cs-*` utility classes in globals.css reference these CSS vars

### CSS Component Classes (all in `globals.css`)

- **Buttons**: `btn-cs-primary` (orange bg, black text), `btn-cs-secondary` (blue bg, white text), `btn-cs-outline` (white bg, orange border)
  - All 44px min-height, Montserrat 600, hover effects
- **Cards**: `cs-card`, `cs-card-header`, `cs-card-body`, `cs-card-footer`
  - Use `cs-card` alone — don't add `border-*` classes (they override hover border-color)
- **Forms**: `cs-input`, `cs-input-error`, `cs-label`, `cs-label-required`, `cs-select`, `cs-error-text`
  - All inputs 44px min-height, orange focus border + shadow
- **Alerts**: `cs-alert` + `cs-alert-info/success/warning/error`
- **Badges**: `cs-badge` + `cs-badge-orange/blue/cyan`
- **Utility**: `text-cs-orange`, `text-cs-blue`, `bg-cs-orange`, `bg-cs-blue`, `cs-divider`, `text-montserrat`, `text-opensans`
- **Accessibility**: `.skip-to-main` (visually hidden until focused), `*:focus-visible`, `.sr-only`

### Typography

- **Headings**: Montserrat (Google Fonts @import in globals.css), weight 600-700
- **Body**: Open Sans, 16px base, line-height 1.6

### Link Conventions

- Global `a`: NO underlines by default
- **Exception** — inline content links in `article`, `.content`, `.prose`, `main p` get underlines
- Buttons NEVER have underlines (`!important`)
- Focus-visible: orange outline

---

## Key Dependencies

| Package                                                                     | Purpose                                  |
| --------------------------------------------------------------------------- | ---------------------------------------- |
| `next` ^16.0.8                                                              | App Router, server components            |
| `react` ^19.2.1 + `react-dom` ^19.2.1                                       | UI                                       |
| `typescript` ^5                                                             | Strict mode type checking                |
| `tailwindcss` ^4 + `@tailwindcss/postcss`                                   | CSS framework                            |
| `framer-motion` ^12.38.0                                                    | Page transitions + card hover animations |
| `lucide-react` ^0.555.0                                                     | All icons                                |
| `react-hook-form` ^7.67.0                                                   | Contact form                             |
| `@emailjs/browser` ^4.4.1                                                   | Email sending (needs .env.local)         |
| `sonner` ^2.0.7                                                             | Toast notifications                      |
| `gray-matter` ^4.0.3                                                        | Markdown frontmatter parsing             |
| `date-fns` ^4.1.0                                                           | Event date formatting                    |
| `react-countup` ^6.5.3                                                      | Animated stats                           |
| `react-intersection-observer` ^10.0.3                                       | Scroll-triggered animations              |
| `tailwind-merge` + `clsx`                                                   | `cn()` utility in `utils.ts`             |
| `@vercel/speed-insights`                                                    | Vercel analytics                         |
| `vitest` + `@testing-library/react` + `@testing-library/jest-dom` + `jsdom` | Testing                                  |

---

## Contact Form (EmailJS)

- `src/app/contact/page.tsx` (client component)
- `react-hook-form` validation: name (min 2), email (pattern), subject (min 5), message (min 10)
- Sends via `@emailjs/browser` with env vars:
  ```
  NEXT_PUBLIC_EMAILJS_SERVICE_ID
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  ```
- Template params: `from_name`, `from_email`, `subject`, `message`, `to_email`
- Shows `sonner` toast on success/failure. Without `.env.local`: "EmailJS configuration missing" toast.
- Setup guide: `EMAILJS_SETUP.md`

---

## Animations

- **Page transitions**: `template.tsx` wraps every page in `motion.div` (spring: stiffness 260, damping 20)
- **Home page**: stagger container, fadeUp variants, parallax hero, CountUp on scroll reveal
- **Cards**: `whileHover` with spring on MemberCard
- **Gallery**: hover zoom effects on images
- **Navbar**: mobile menu AnimatePresence, scroll progress indicator

---

## Testing

- **Framework**: Vitest with jsdom environment
- **Config**: `vitest.config.ts` — React plugin, `@/` alias, setup file
- **Setup**: `src/test/setup.ts` imports `@testing-library/jest-dom/vitest` matchers
- **Tests**: `src/lib/utils.test.ts` — 7 tests for `cn()`, `formatDate()`, `slugify()`
- **Run**: `npm run test` or `npm run test:watch`

---

## Navigation

- **IEEE Top Bar** (gray): IEEE.org, IEEE Xplore, IEEE Standards, IEEE Spectrum, More Sites — all external
- **Main Nav** (sticky, glassmorphism): Logo + Home/About/Committee/Events/News/Gallery/Contact + search + Join IEEE button
- **Footer**: 4-column grid — About + social icons, Quick Links, Visit IEEE (external), Contact info
- **Mobile**: hamburger menu with animated dropdown (search + full nav + Join IEEE)
- **Search**: navigates to `/search?q=...` — searches event titles, descriptions, and locations

---

## SEO & Structured Data

- Root metadata: title template `"%s | IEEE CS SBC AVV"`, canonical `https://cs.avv.ie`, OG image `/assests/Society.jpg`, Twitter card, robots
- Each page exports unique `metadata`
- `OrganizationSchema` + `BreadcrumbSchema` render JSON-LD in `<head>` from `layout.tsx`
- **Sitemap**: `/sitemap.xml` covers all static + event + news routes
- **RSS**: `/feed.xml` provides event feed

---

## CI/CD Pipeline

- **ci.yml** — push/PR to main/dev/staging: lint → type-check → build → test-build → status-check (parallel lint + type-check first)
- **pr-check.yml** — PR-only: same pattern + todo-check (TODO/FIXME in diff) + preview-deployment + pr-summary
- `NODE_ENV: production` during build; no EmailJS env vars in CI

---

## Common Gotchas & Conventions

### Commands

- Use `npm ci` not `npm install` — lockfile required
- `npm run type-check` is `tsc --noEmit` (separate from `next build`)

### Code Conventions

- **Client components**: MUST add `"use client"` directive (16 of 30+ files do)
- **Server components**: can directly import JSON (`./members.json`) or call `fs` in `contents.ts`. Client components CANNOT use `contents.ts` (uses fs) — must receive data as props
- **TypeScript**: strict, `noEmit: true`, `@/*` = `./src/*`
- **Prettier**: double quotes (`singleQuote: false`), semicolons, trailing commas (es5), 80 width
- **Module system**: `"module": "esnext"`, `"moduleResolution": "bundler"` — no import extensions
- ESLint: flat config (`eslint.config.mjs`). Old `.eslintrc.json` is present but ignored

### Styling Gotchas

- **Color values**: Always use `text-[#HEX]` with brackets (never `text-#HEX` without brackets — invalid Tailwind)
- **cs-card border**: Don't add `border-*` to cs-card — the class has its own border + hover effect
- Button white text may need explicit `style={{ color: "#ffffff" }}` on `<a>` elements

### Event System

- Status is computed **client-side** in `EventFilterClient.tsx` via `isUpcoming(dateStr)` — NOT at build time
- Single event: centered `max-w-md mx-auto`; multiple: responsive 1-2-3 grid
- Event detail pages (`events/[slug]`) render markdown content via `dangerouslySetInnerHTML`
- Event card type colors hardcoded in `EventFilterClient.tsx`

### Known Issues

- `metadataBase` not set in layout — OG images fall back to `localhost:3000` at build
- Membership directory is a placeholder ("Coming Soon")
- Contact form works without .env.local setup (shows error toast)

### React Compiler

- Enabled in `next.config.ts` via `reactCompiler: true`
- Requires `babel-plugin-react-compiler` devDependency

### Accessibility (WCAG AA)

- 44px minimum touch targets (all buttons, inputs)
- 4.5:1 contrast ratio (`text-gray-700` or darker, `text-white/90`)
- Skip-to-main link, focus-visible outlines, form labels, alt text, semantic HTML
