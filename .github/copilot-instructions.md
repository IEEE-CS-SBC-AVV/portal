# AI Copilot Instructions for IEEE CS SBC Portal

## Project Overview

This is a **Next.js 16 static website** for the IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham. The site showcases committee members, events, and membership information with IEEE brand compliance. Phase 1 is nearly complete (static content); Phase 2 will add Supabase backend and admin dashboard.

## Architecture & Data Flow

### Core Structure

- **`src/app/`** — Next.js App Router pages (Home, About, Committee, Events, etc.)
- **`src/components/layout/`** — Navbar, Footer (used across all pages)
- **`src/config/ieee-design-system.ts`** — Centralized IEEE colors, typography, spacing (368 lines)
- **`src/lib/`** — Utilities (`cn()` for Tailwind merging), constants, `contents.ts` (file-based content loading)
- **`src/types/index.ts`** — Shared TypeScript types (TeamMember, Event, CommitteeData, etc.)
- **`src/hooks/useIEEEDesign.ts`** — React hook exposing design system tokens

### Data Sources (Phase 1)

- **`content/events/`** — Markdown files with frontmatter (title, date, type, location, speakers, etc.)
- **`src/app/committee/members.json`** — Static JSON for committee roster
- **`src/lib/contents.ts`** — File system reader using `gray-matter` to parse Markdown frontmatter

### Key Integration Points

1. **Colors**: All color names from `ieee-design-system.ts` are mapped to Tailwind via `tailwind.config.ts` (e.g., `ieee-blue`, `ieee-orange`)
2. **Typography**: Open Sans via Tailwind (min 15px per IEEE guidelines)
3. **Components**: `useIEEEDesign()` hook provides design tokens in client components
4. **Pages**: Each route imports `Navbar`/`Footer` from `src/components/layout/`

## Development Workflow

### Essential Commands

```bash
npm ci           # Install dependencies (locked versions)
npm run dev      # Start Next.js dev server (http://localhost:3000)
npm run build    # Compile for production (generates .next/)
npm run lint     # ESLint checks (.ts, .tsx)
npm run format   # Prettier format all files
npm run type-check # TypeScript strict mode check
```

**Note**: No tests or database yet. Phase 2 will add Supabase integration and admin authentication.

### Debug Tips

- Dev server hot-reloads on file changes
- Type errors show in terminal; run `npm run type-check` to validate before commits
- ESLint may flag unused imports; use `npm run lint` to see all issues

## Code Patterns & Conventions

### Styling Approach

- **Utility-first TailwindCSS v4** — Avoid custom CSS; use Tailwind classes
- **IEEE color tokens** — Use class names like `bg-ieee-blue`, `text-ieee-orange` (defined in `tailwind.config.ts`)
- **Responsive design** — Mobile-first; use `sm:`, `md:`, `lg:` prefixes
- **Merged classes** — Use `cn()` utility from `src/lib/utils.ts` when conditionally combining Tailwind classes:
  ```tsx
  import { cn } from "@/lib/utils";
  <button className={cn("px-4 py-2", isActive && "bg-ieee-blue")} />;
  ```

### Component Structure

- **Layout components** are "use client" (e.g., `Navbar.tsx` with useState for mobile menu)
- **Page components** are Server Components by default (fetch data at the page level)
- **Lucide icons** for all icons (e.g., `import { Menu, X, Search } from "lucide-react"`)
- **Props via TypeScript** — Always define prop interfaces

Example pattern from `src/app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[600px] bg-gradient-to-br from-[#00629B] via-[#00629B] to-[#004B76]">
        {/* Gradient + pattern overlay */}
      </section>
    </div>
  );
}
```

### TypeScript Conventions

- Store shared types in `src/types/index.ts` (EventType, TeamMember, CommitteeData, etc.)
- Use `const` for functions and arrow functions in components
- Enable strict mode in `tsconfig.json` — all types must be explicit
- No `any` types without justification

### Content Management (Phase 1)

- **Events**: Store as Markdown in `content/events/*.md` with YAML frontmatter
  ```markdown
  ---
  title: AI Workshop
  date: 2025-01-20
  type: workshop
  location: Block A, Room 101
  speakers:
    - name: Dr. Smith
      title: ML Expert
  excerpt: Learn AI fundamentals
  ---

  [Content in markdown]
  ```
- **Committee**: JSON in `src/app/committee/members.json` or hardcoded in page
- **Load with `src/lib/contents.ts`**: Functions like `getEvents()`, `getEventBySlug()`

### Forms & Validation

- **React Hook Form** for contact form (see `src/app/contact/page.tsx` pattern)
- No server actions yet (Phase 2); currently client-side validation only
- Use semantic HTML form fields

### Accessibility & IEEE Brand

- **WCAG AA compliant** — Semantic HTML (`<button>`, `<nav>`, `<main>`), proper contrast, 44px touch targets
- **IEEE brand colors** — Always use official palettes from design system; avoid custom hex unless approved
- **Metadata** — All pages have title templates and descriptions in `layout.tsx`
- **Open Graph / Twitter cards** configured in root layout

## Project-Specific Gotchas

### Path Aliases

- **`@/*`** maps to `src/*` (configured in `tsconfig.json`)
- Always use: `import { Navbar } from "@/components/layout/Navbar"`

### Tailwind Config

- Design system colors are extended in `tailwind.config.ts`, not in globals
- IEEE colors auto-available as utility classes (no manual Tailwind config needed per component)

### No Environment Variables Yet

- `.env.local` exists but unused in Phase 1
- Phase 2 will add Supabase keys

### No Testing Infrastructure

- No Jest/Vitest setup — tests are planned
- Manual QA or deploy preview testing for now

## Adding Features (Common Workflows)

### New Page

1. Create `src/app/[route]/page.tsx`
2. Import `Navbar`/`Footer` (already in root layout, but ensure metadata is added)
3. Use Tailwind + `ieee-*` color classes
4. Add metadata for SEO in page file (optional override of root template)

### New Component

1. Create in `src/components/`
2. Mark as "use client" if it uses hooks (useState, etc.)
3. Ensure TypeScript props are typed from `src/types/index.ts`
4. Export as named export

### Add Event

1. Create `.md` file in `content/events/` with YAML frontmatter
2. Call `getEvents()` from `src/lib/contents.ts` in page component
3. Filter/sort by date or type as needed

### Update Design System

1. Edit `src/config/ieee-design-system.ts` for tokens
2. Update `tailwind.config.ts` for new Tailwind utilities
3. Update `src/hooks/useIEEEDesign.ts` if exposing new tokens to components
4. Test in components with `useIEEEDesign()` hook

## Phase 2 Readiness Notes

- Prepare for Supabase backend integration (database schema)
- Admin dashboard will require authentication (clerk.com or nextauth.js likely)
- Event registration system will need form validation and DB writes
- Image uploads: plan CDN (Vercel Blob, Supabase Storage)
- Newsletter: add email service integration (e.g., Resend, SendGrid)

## Performance & Deployment

- **Deployment**: Vercel (auto-deploys on git push)
- **Build output**: `.next/` folder (gitignore'd)
- **React Compiler**: Enabled in `next.config.ts` (optimizes re-renders automatically)
- **CSS**: PostCSS + TailwindCSS v4 (no extra CSS files needed)

## Quick Reference

| Task                      | File(s)                                                  | Key Function                                    |
| ------------------------- | -------------------------------------------------------- | ----------------------------------------------- |
| Change IEEE colors        | `src/config/ieee-design-system.ts`, `tailwind.config.ts` | Define new color token                          |
| Add page                  | `src/app/[route]/page.tsx`                               | Server component by default                     |
| Add interactive component | `src/components/...tsx`                                  | Use "use client" + hooks                        |
| Load events               | `src/lib/contents.ts`                                    | `getEvents()`, `getEventBySlug()`               |
| Reusable types            | `src/types/index.ts`                                     | TeamMember, Event, CommitteeData                |
| Design system access      | `src/hooks/useIEEEDesign.ts`                             | `const { colors, getButton } = useIEEEDesign()` |

---

**Last Updated**: January 2025 | Phase 1 (Static Site) | Phase 2 (Backend) in planning
