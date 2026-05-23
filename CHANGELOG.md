# Changelog

## [Unreleased]

### Added

- CHANGELOG.md file

### Fixed

- Markdown rendering: heading tags now properly closed (`<h2>` → `</h2>`)
- Event detail cards now link to their respective detail pages
- Invalid date crash guard in EventFilterClient
- `metadataBase` set to `https://cs.avv.ie` (fixes OG image resolution)
- LinkedIn URL in StructuredData and constants now consistent
- StructuredData contact email updated to `computersociety.avv@gmail.com`
- Scope-members page: replaced generic `User` icon with `GradientAvatar`
- Duplicate `Event` interface removed (imported from EventFilterClient)
- Emoji icons in About page now have `aria-hidden="true"`
- Loading skeleton for events page now includes CTA section
- Gitignore: removed duplicate patterns, fixed `#Misc` header, removed stray `*.` pattern

### Changed

- Navbar height reduced, logo/text sizing tightened, search bar styling cleaned
- Hero `min-h-[600px]` → `min-h-[500px]`, brightness `0.6` → `0.42`
- Hero text: `font-bold` → `font-extrabold`, subtitle bumped to `text-3xl md:text-4xl font-bold`
- Hero "WELCOME!" heading removed
- All page hero banners: `py-20` → `py-12`
- Gallery page: replaced committee photo grid with "Snapping Shots" placeholder
- Committee page: replaced inline `MemberCard` (always gradient) with `MemberCard` component (photo + gradient fallback)
- IEEE/CS Society card images: consistent `w-44 h-44` containers with `object-contain`

### Removed

- `src/types/index.ts` (dead code, 151 lines)
- `src/lib/design-utils.ts` (dead code, 391 lines)

## [Phase 2] — 2026-02-25

### Added

- Events system with markdown-based content (gray-matter)
- News articles with markdown content
- Event filtering (All / Upcoming / Completed) via EventFilterClient
- Event and news detail pages with SSG
- Full-text search across events
- RSS feed for events (`/feed.xml`)
- Dynamic sitemap (`/sitemap.xml`)
- JSON-LD structured data (OrganizationSchema + BreadcrumbSchema)
- Contact form with React Hook Form + EmailJS integration
- Newsletter signup component
- Scope-members page with search/filter
- Collabratec information page
- Custom 404 and error boundary pages
- Loading skeletons for events page
- Framer Motion page transitions
- CountUp animated stats on Home page
- GradientAvatar component (deterministic fallback)
- MemberCard component with photo + gradient fallback

### Changed

- All `ieee-*` Tailwind tokens replaced with inline hex values
- Committee page restructured with real member data from `members.json`
- Committee photos normalized (lowercase, dashed filenames)
- Navbar: glassmorphism, scroll progress bar, mobile menu with AnimatePresence
- Footer: 4-column grid layout
- Home page: parallax hero, stagger animations, vision/mission sections
- All pages: WCAG AA compliance (44px touch targets, contrast ratios, skip-to-main)

### Fixed

- All `<img>` tags replaced with Next.js `<Image>` component
- All `<a>` navigation replaced with Next.js `<Link>`
- Text visibility and color contrast issues
- SEO metadata for all pages
- ESLint warnings eliminated
- TypeScript strict mode errors eliminated

## [Phase 1] — 2026-01-14

### Added

- Initial Next.js 16 setup with App Router
- TailwindCSS v4 configuration
- IEEE CS brand design system (`cs-*` utility classes)
- Home, About, Committee, Events, Gallery, Contact, Join pages
- Gradient avatars for committee members
- Custom 404 page
- Consolidated design system (globals.css)
- Basic CI/CD with GitHub Actions

### Changed

- Legacy codebase consolidated
- Design tokens migrated to CSS custom properties
- Font system: Montserrat (headings) + Open Sans (body)

## [MVP] — 2025

### Added

- Initial Next.js project scaffold
- Basic page structure
- IEEE branding placeholder
- README and configuration files
