# IEEE CS SBC Portal — Agent Guide

Next.js 16 (App Router) + TypeScript strict + TailwindCSS v4. SSG/static on Vercel. No DB until Phase 3 (Supabase).

## Commands (order matters, use `npm ci` not `npm install`)

```bash
npm ci          # install (lockfile required)
npm run lint    # ESLint — .ts,.tsx only
npm run type-check  # tsc --noEmit (separate from build)
npm run test    # Vitest (in __tests__/ dirs)
npm run build   # next build (Turbopack)
npm run format  # Prettier — writes in-place
```

CI runs `npx prettier --check "**/*.{ts,tsx,js,jsx,json,css,md}"` — run `npm run format` after editing to avoid CI failure.

## Architecture

**Server components** load `content/` markdown via `src/lib/contents.ts` (fs-based gray-matter). **Client components** receive data as props — never import `contents.ts`.

**Content → client type bridge:** markdown `Event` (from `contents.ts`) is mapped to client `Event` (from `types.ts`) via `toClientEvent()` in `src/lib/events.ts`. This conversion happens in server components (`events/page.tsx`, `search/page.tsx`). Converts `speakers` → `speaker` string, validates `type` against `VALID_EVENT_TYPES`.

**Member data:** `content/committee/members.json` is the single source (1 advisor + 14 members). `src/lib/members.ts` exports `getAllMembers()` flattens it → `FlatMember[]`. Used by `/membership` and `/scope-members`. Committee photos in `/images/committee/` (lowercase, dashes, no spaces). Missing photos → `GradientAvatar` fallback.

**`src/lib/constants.ts`** centralizes `SITE_CONFIG`, `STATS`, `CONTACT_INFO`, `MEMBERSHIP_PRICES`, `VALID_EVENT_TYPES`, `NAV_LINKS`, `EVENT_TYPE_COLORS`, `IEEE_LINKS`.

**`src/lib/types.ts`** centralizes `Event`, `CommitteeMember`, `SlugParams`.

**Tests** live only in `src/lib/__tests__/` — Vitest discovers them.

## Adding content

**Events** — `content/events/[slug].md` with YAML: `title`, `date` (YYYY-MM-DD), `type` (workshop|seminar|hackathon|webinar|competition|social|other), `location`, `time`, `speakers[{name, title?}]`, `excerpt`, `featured?`, `poster?`, `registrationUrl?`, `resources[]`. Status computed client-side in `EventFilterClient` via `isUpcoming()`. Auto-generates SSG detail page.

**News** — `content/news/[slug].md` with YAML: `title`, `date`, `excerpt`. Auto-generates listing + SSG detail page.

## Styling conventions

- **Colors**: inline hex via Tailwind arbitrary values — `text-[#00629B]`, `from-[#00629B]`. No named color tokens.
- **Fonts**: `next/font/google` — Montserrat (`--font-montserrat`), Open_Sans (`--font-open-sans`), Nunito (`--font-nunito`).
- **CSS classes in `globals.css`**: `btn-cs-primary` (orange bg, black text, min-h-44px), `btn-cs-secondary` (blue bg, white text), `btn-cs-white` (white bg, blue text, shadow, inline-flex), `cs-card` (no `border-*` — breaks hover), `cs-input`/`cs-label`/`cs-error-text`, `bg-warm` (#fff8f0), `cs-dot-grid`/`cs-dot-grid-subtle`, `animate-blob-float`/`animate-blob-float-delayed`
- **Links**: no underline globally; exceptions in `article`, `.content`, `.prose`, `main p`. Buttons never underlined.
- **Accessibility**: 44px touch targets, skip-to-main link, focus-visible orange outline, `prefers-reduced-motion` support.

## Config gotchas

- `next.config.ts` sets CSP + security headers globally (Formspree allowed in `connect-src`/`form-action`, google.com in `frame-src` for the contact map). Adding any new external resource (fonts, images, APIs) requires updating CSP and/or `images.remotePatterns` (currently only `images.unsplash.com`).
- No `opencode.json` / `.opencode/` config in the repo.

## Data flow quirks

- OG/Twitter metadata overrides on `events/[slug]` and `news/[slug]` pages.
- Event JSON-LD (`@type: "Event"`) inlined in `events/[slug]/page.tsx`.
- `feed.xml` and `sitemap.ts` each have try/catch around content loading.
- `formatDate()` in `src/lib/utils.ts` is the canonical date formatter (used everywhere — not `toLocaleDateString`).
- Contact form + newsletter POST to `NEXT_PUBLIC_FORMSPREE_ENDPOINT`. Both have honeypot fields + `Loader2` spinner on submit. Without `.env.local`: error toast.
- Mobile menu: focus trap + `aria-modal="true"` + `aria-hidden` on `#main-content` when open.
