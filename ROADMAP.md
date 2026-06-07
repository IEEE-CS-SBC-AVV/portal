# ROADMAP — IEEE CS SBC Website (Based on IEEE.org Structure)

> **Strategy:** Build a professional IEEE-styled website matching the official IEEE Student Branch template. Static-first approach with Next.js, then add Supabase for admin features.

---

## 🎯 Reference Website Analysis

**Template Site:** https://edu.ieee.org/in-sairamitcs/

### Key Features to Replicate:

1. **IEEE Branding** - Official IEEE logo, color scheme, typography
2. **Top Navigation Bar** - Links to IEEE.org, Xplore, Standards, Spectrum
3. **Main Navigation** - Home, About Us, Committee, Scope Members, Gallery, Events, Contact
4. **Hero Section** - Large image with "WELCOME!" heading
5. **Vision & Mission Sections** - Two-column layout with graphics
6. **CTA Boxes** - "Join IEEE Today" and "Join Computer Society" cards
7. **Footer** - IEEE standard footer with legal links

### Design Elements:

- **Colors:** IEEE Blue (#00629B), White, Dark Gray
- **Typography:** Clean, professional sans-serif (likely Helvetica/Arial)
- **Layout:** Full-width hero, contained content sections
- **Graphics:** Illustrated characters/icons for CTAs
- **IEEE Branding:** Always present IEEE logo, maintain brand guidelines

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Page Structure (Exact Match)](#page-structure-exact-match)
- [Content Requirements](#content-requirements)
- [Design System (IEEE Style)](#design-system-ieee-style)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Implementation Phases](#implementation-phases)
- [Component Breakdown](#component-breakdown)
- [Content Model](#content-model)
- [Repository Setup](#repository-setup)
- [Development Workflow](#development-workflow)
- [Deployment Strategy](#deployment-strategy)
- [Post-MVP Features](#post-mvp-features)

---

## 🎓 Project Overview

**Goal:** Create an IEEE Computer Society Student Branch Chapter website for your university that follows the official IEEE student branch template design and functionality.

**Target URL Pattern:** `edu.ieee.org/in-your-institution-cs/` (or custom domain)

**Key Requirements:**

- Match IEEE branding guidelines exactly
- Responsive design (mobile, tablet, desktop)
- Static content initially, admin panel later
- Easy for non-developers to update content
- Fast loading times (<3s)
- Accessible (WCAG 2.1 AA)

---

## 📄 Page Structure (Exact Match)

Based on the reference site, here are the exact pages you need:

### 1. **Home** (`/`)

**Sections:**

- IEEE Top Bar (links to IEEE.org, Xplore, Standards, Spectrum)
- Main Navigation
- Hero Section with institutional branding
- "WELCOME!" heading
- Vision Section (with illustration + CTA "Join IEEE Today")
- Mission Section (with illustration + CTA "Join Computer Society")
- Footer (IEEE standard)

### 2. **About Us** (`/about-us`)

**Content:**

- Chapter history and establishment date
- What is IEEE Computer Society?
- Why join our chapter?
- Chapter achievements and highlights
- Benefits of membership

### 3. **Committee** (`/committee`)

**Content:**

- Executive Committee members (photos, names, roles)
  - Chairperson
  - Vice Chairperson
  - Secretary
  - Treasurer
  - Webmaster
  - Event Coordinators
  - Technical Leads
- Faculty Advisor
- Past Committee members (optional)

### 4. **Scope Members** (`/scope-members`)

**Content:**

- List of all active IEEE CS members
- Member photos and contact info (optional)
- Member count statistics
- Membership tiers/categories

### 5. **Gallery** (`/gallery`)

**Content:**

- Event photo galleries organized by event
- Image lightbox/modal view
- Categories: Workshops, Seminars, Social Events, Competitions

### 6. **Events/Achievements** (`/events` or `/achievements`)

**Content:**

- Upcoming events list
- Past events archive
- Event cards with:
  - Title, Date, Location
  - Poster/Banner image
  - Description
  - Registration link (if applicable)
  - Event resources (slides, recordings)

### 7. **Collabratec** (`/collabratec`)

**Content:**

- Information about IEEE Collabratec platform
- How to join and participate
- Benefits of the platform
- Link to IEEE Collabratec

### 8. **Membership Directory** (`/membership-directory`)

**Content:**

- Searchable/filterable member list
- Member profiles (public info only)
- Privacy controls

### 9. **Contact Us** (`/contact`)

**Content:**

- Contact form
- Email addresses (chapter email, committee emails)
- Social media links
- Physical address (institution location)
- Map embed

---

## 📝 Content Requirements

### Essential Content to Gather:

#### From Your Committee:

- [ ] Chapter name and logo
- [ ] Institution name and logo
- [ ] Vision statement (2-3 paragraphs)
- [ ] Mission statement (2-3 paragraphs)
- [ ] Executive committee details (names, roles, photos, bios)
- [ ] Faculty advisor details
- [ ] Chapter establishment date
- [ ] Official chapter email
- [ ] Social media handles (LinkedIn, Instagram, Twitter, Facebook)

#### Historical Content:

- [ ] Past event details (dates, titles, descriptions)
- [ ] Event photos (high resolution)
- [ ] Event posters/banners
- [ ] Event resources (presentations, recordings, code repos)
- [ ] Chapter achievements and milestones

#### Ongoing Content:

- [ ] Upcoming events schedule
- [ ] Active member list
- [ ] Current projects

---

## 🎨 Design System (IEEE Style)

### Color Palette

```css
/* Primary Colors */
--ieee-blue: #00629b; /* Official IEEE blue */
--ieee-blue-dark: #004b76; /* Darker shade for hover states */
--ieee-blue-light: #e6f2f8; /* Light background */

/* Neutral Colors */
--gray-900: #1a1a1a; /* Headings */
--gray-700: #4a4a4a; /* Body text */
--gray-500: #9ca3af; /* Secondary text */
--gray-300: #d1d5db; /* Borders */
--gray-100: #f3f4f6; /* Backgrounds */
--white: #ffffff;

/* Accent Colors */
--success: #10b981; /* Success states */
--warning: #f59e0b; /* Warnings */
--error: #ef4444; /* Errors */
```

### Typography

```css
/* Font Stack */
--font-primary: "Helvetica Neue", Helvetica, Arial, sans-serif;

/* Font Sizes */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing System

```css
/* Based on 8px grid */
--spacing-1: 0.25rem; /* 4px */
--spacing-2: 0.5rem; /* 8px */
--spacing-3: 0.75rem; /* 12px */
--spacing-4: 1rem; /* 16px */
--spacing-6: 1.5rem; /* 24px */
--spacing-8: 2rem; /* 32px */
--spacing-12: 3rem; /* 48px */
--spacing-16: 4rem; /* 64px */
--spacing-24: 6rem; /* 96px */
```

### Component Styles

**Buttons:**

- Primary: IEEE blue background, white text
- Secondary: White background, IEEE blue border and text
- Hover: Darker shade with smooth transition

**Cards:**

- White background
- Subtle shadow
- Rounded corners (8px)
- Hover state with slight elevation

**Navigation:**

- Sticky header on scroll
- Hamburger menu on mobile
- IEEE blue active state

---

## 🛠️ Tech Stack

| Category           | Technology                 | Version | Purpose                         |
| ------------------ | -------------------------- | ------- | ------------------------------- |
| **Framework**      | Next.js                    | 15.x    | Server-side rendering, routing  |
| **Language**       | TypeScript                 | 5.x     | Type safety                     |
| **Styling**        | TailwindCSS                | 4.x     | Utility-first CSS               |
| **UI Components**  | shadcn/ui                  | Latest  | Pre-built accessible components |
| **Content**        | MDX + gray-matter          | Latest  | Markdown with React components  |
| **Forms**          | React Hook Form            | 7.x     | Form validation                 |
| **Validation**     | Zod                        | 3.x     | Schema validation               |
| **Icons**          | Lucide React               | Latest  | Icon library                    |
| **Image Gallery**  | yet-another-react-lightbox | Latest  | Photo gallery                   |
| **Animations**     | Framer Motion              | 11.x    | Smooth animations (optional)    |
| **Deployment**     | Vercel                     | N/A     | Hosting platform                |
| **Future Backend** | Supabase                   | N/A     | Auth + Database + Storage       |

---

## 📁 File Structure

```text
ieee-cs-website/
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  │  ├─ bug_report.yml
│  │  ├─ feature_request.yml
│  │  └─ content_update.yml
│  ├─ PULL_REQUEST_TEMPLATE.md
│  └─ workflows/
│     ├─ ci.yml
│     └─ deploy.yml
│
├─ public/
│  ├─ images/
│  │  ├─ logos/
│  │  │  ├─ ieee-logo.svg
│  │  │  ├─ cs-logo.png
│  │  │  └─ institution-logo.png
│  │  ├─ committee/
│  │  │  ├─ chair.jpg
│  │  │  ├─ vice-chair.jpg
│  │  │  └─ ...
│  │  ├─ events/
│  │  │  ├─ event-1-poster.jpg
│  │  │  └─ ...
│  │  ├─ gallery/
│  │  │  ├─ workshop-2024/
│  │  │  └─ ...
│  │  ├─ hero/
│  │  │  └─ hero-bg.jpg
│  │  └─ illustrations/
│  │     ├─ join-ieee.png
│  │     └─ join-cs.png
│  ├─ favicon.ico
│  ├─ robots.txt
│  └─ sitemap.xml
│
├─ content/
│  ├─ pages/
│  │  ├─ about-us.mdx
│  │  ├─ collabratec.mdx
│  │  └─ contact.mdx
│  ├─ committee/
│  │  └─ members.json
│  ├─ scope-members/
│  │  └─ members.json
│  ├─ events/
│  │  ├─ 2024-12-15-ml-workshop.mdx
│  │  └─ _template.mdx
│  └─ gallery/
│     └─ albums.json
│
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx              # Root layout with IEEE top bar
│  │  ├─ page.tsx                # Home page
│  │  ├─ globals.css
│  │  ├─ about-us/
│  │  │  └─ page.tsx
│  │  ├─ committee/
│  │  │  └─ page.tsx
│  │  ├─ scope-members/
│  │  │  └─ page.tsx
│  │  ├─ gallery/
│  │  │  └─ page.tsx
│  │  ├─ events/
│  │  │  ├─ page.tsx            # Events listing
│  │  │  └─ [slug]/
│  │  │     └─ page.tsx         # Event detail
│  │  ├─ collabratec/
│  │  │  └─ page.tsx
│  │  ├─ membership-directory/
│  │  │  └─ page.tsx
│  │  ├─ contact/
│  │  │  └─ page.tsx
│  │  └─ api/
│  │     └─ contact/
│  │        └─ route.ts
│  │
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ ieee-top-bar.tsx   # IEEE.org links bar
│  │  │  ├─ navbar.tsx          # Main navigation
│  │  │  ├─ footer.tsx          # IEEE standard footer
│  │  │  └─ mobile-menu.tsx
│  │  ├─ home/
│  │  │  ├─ hero.tsx
│  │  │  ├─ vision-section.tsx
│  │  │  ├─ mission-section.tsx
│  │  │  └─ cta-card.tsx
│  │  ├─ committee/
│  │  │  ├─ member-card.tsx
│  │  │  └─ member-grid.tsx
│  │  ├─ events/
│  │  │  ├─ event-card.tsx
│  │  │  ├─ event-list.tsx
│  │  │  └─ event-filters.tsx
│  │  ├─ gallery/
│  │  │  ├─ photo-grid.tsx
│  │  │  └─ lightbox.tsx
│  │  ├─ forms/
│  │  │  └─ contact-form.tsx
│  │  └─ ui/                    # shadcn components
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     └─ ...
│  │
│  ├─ lib/
│  │  ├─ content.ts             # Load MDX/JSON content
│  │  ├─ mdx.ts                 # MDX compilation
│  │  ├─ utils.ts               # Utility functions
│  │  ├─ constants.ts           # Site config
│  │  └─ validations.ts         # Zod schemas
│  │
│  ├─ types/
│  │  ├─ content.ts
│  │  ├─ committee.ts
│  │  └─ events.ts
│  │
│  └─ styles/
│     └─ ieee-theme.css         # IEEE design tokens
│
├─ docs/
│  ├─ ARCHITECTURE.md
│  ├─ CONTENT_GUIDE.md
│  └─ DESIGN_SYSTEM.md
│
├─ .env.example
├─ .env.local
├─ .eslintrc.json
├─ .prettierrc
├─ .gitignore
├─ package.json
├─ next.config.js
├─ tailwind.config.ts
├─ tsconfig.json
├─ README.md
├─ CONTRIBUTING.md
├─ ONBOARDING.md
└─ LICENSE
```

---

## 📅 Implementation Phases

### **Phase 1: Setup & Foundation (Day 1)**

**Goal:** Repository ready, development environment working

**Tasks:**

1. Create GitHub organization/repository
2. Initialize Next.js 15 with TypeScript
3. Install dependencies (Tailwind, shadcn/ui, MDX)
4. Set up IEEE color palette as CSS variables
5. Configure ESLint, Prettier, and Husky
6. Create basic folder structure
7. Add IEEE logos and branding assets
8. Set up branch protection rules

**Deliverables:**

- ✅ `npm run dev` works
- ✅ IEEE colors defined in CSS
- ✅ Logos added to `/public/images/logos/`
- ✅ Git hooks configured

**First Issues to Create:**

- #1: Add IEEE color palette to `globals.css`
- #2: Download and add IEEE official logos
- #3: Set up Tailwind config with IEEE theme
- #4: Create folder structure for content

---

### **Phase 2: Layout Components (Day 2)**

**Goal:** IEEE-style header and footer working

**Tasks:**

1. Build IEEE Top Bar component
   - Links to IEEE.org, Xplore, Standards, Spectrum
   - "More Sites" dropdown
2. Build Main Navbar component
   - Logo + navigation links
   - Search bar (UI only for now)
   - Mobile hamburger menu
3. Build Footer component
   - "Visit Us" links
   - Copyright notice
   - IEEE legal links
4. Create responsive mobile menu
5. Test navigation on all screen sizes

**Deliverables:**

- ✅ Header with IEEE branding
- ✅ Footer matching IEEE style
- ✅ Mobile menu functional
- ✅ All links working (even if pages are empty)

**Component Structure:**

```tsx
<IEEETopBar />
<Navbar />
<main>{children}</main>
<Footer />
```

---

### **Phase 3: Home Page (Day 3)**

**Goal:** Complete home page matching reference design

**Tasks:**

1. Build Hero Section
   - Full-width background image
   - Chapter name overlay
   - Institutional branding
2. Create "WELCOME!" section
3. Build Vision Section
   - Left: Text content
   - Right: Illustration + "Join IEEE Today" CTA card
4. Build Mission Section
   - Left: Illustration + "Join Computer Society" CTA card
   - Right: Text content
5. Style CTA cards with hover effects
6. Add smooth scroll animations (optional)
7. Optimize hero image (WebP format, next/image)

**Content Needed:**

- Vision statement from your committee
- Mission statement from your committee
- Hero background image
- CTA illustrations

**Deliverables:**

- ✅ Home page looks professional
- ✅ Responsive on mobile/tablet/desktop
- ✅ Fast loading (<3s)

---

### **Phase 4: Committee & Scope Members (Day 4)**

**Goal:** Team pages with member profiles

**Tasks:**

1. Create committee member data structure (JSON)
2. Build MemberCard component
   - Photo
   - Name
   - Role/Position
   - Email (optional)
   - LinkedIn link
3. Build MemberGrid layout
4. Create Committee page
   - Section for Executive Committee
   - Section for Faculty Advisor
   - Optional: Past committee members
5. Create Scope Members page
   - All active members list
   - Member count stats
6. Add filters/search (optional)

**Committee Data Structure:**

```json
{
  "executive": [
    {
      "name": "Your Name",
      "role": "Chairperson",
      "department": "Computer Engineering",
      "year": "Final Year",
      "email": "chair@example.com",
      "linkedin": "https://linkedin.com/in/...",
      "photo": "/images/committee/chair.jpg",
      "bio": "Short bio..."
    }
  ],
  "technical": [...],
  "facultyAdvisor": {...}
}
```

**Deliverables:**

- ✅ Committee page with all members
- ✅ Scope Members page
- ✅ Professional member cards

---

### **Phase 5: Events & Gallery (Day 5)**

**Goal:** Events listing and photo galleries

**Tasks:**

1. Create event content model (MDX)
2. Build EventCard component
3. Build Events listing page
   - Filter by upcoming/past
   - Sort by date
4. Build Event detail page
   - Title, date, location
   - Full description
   - Poster/banner image
   - Resources (slides, recordings)
   - Photo gallery (if past event)
5. Create Gallery page
   - Photo grid with albums
   - Lightbox for full-size viewing
   - Filter by event/category
6. Integrate `yet-another-react-lightbox`

**Event Data Structure:**

```yaml
---
title: "Machine Learning Workshop"
date: "2024-12-15"
time: "10:00 AM - 4:00 PM"
location: "Seminar Hall A"
type: "workshop"
status: "completed"
poster: "/images/events/ml-workshop-poster.jpg"
speakers:
  - name: "Dr. John Doe"
    affiliation: "IIT Bombay"
resources:
  - title: "Workshop Slides"
    url: "https://drive.google.com/..."
  - title: "Code Repository"
    url: "https://github.com/..."
gallery:
  - "/images/gallery/ml-workshop/photo1.jpg"
  - "/images/gallery/ml-workshop/photo2.jpg"
---
Full event description in Markdown...
```

**Deliverables:**

- ✅ Events listing page
- ✅ Event detail pages
- ✅ Gallery page with lightbox
- ✅ Sample events added

---

### **Phase 6: Additional Pages (Day 6)**

**Goal:** About, Collabratec, Contact pages complete

**Tasks:**

1. Build About Us page
   - Chapter history
   - What is IEEE CS?
   - Benefits of joining
   - Achievements
2. Build Collabratec page
   - What is Collabratec?
   - How to join
   - Benefits
   - Link to IEEE Collabratec
3. Build Contact page
   - Contact form (with validation)
   - Chapter email
   - Social media links
   - Institution address
   - Google Maps embed
4. Build Membership Directory page (optional for MVP)
5. Set up form submission (Formspree or API route)
6. Add email notifications for form submissions

**Contact Form Fields:**

- Name (required)
- Email (required)
- Subject
- Message (required)
- reCAPTCHA (spam protection)

**Deliverables:**

- ✅ All content pages complete
- ✅ Contact form functional
- ✅ Form validation working

---

### **Phase 7: Polish & Deploy (Day 7)**

**Goal:** Production-ready website

**Tasks:**

1. Run Lighthouse audit
   - Fix performance issues
   - Fix accessibility issues
   - Fix SEO issues
2. Add meta tags to all pages
   - Title tags
   - Meta descriptions
   - OpenGraph tags
   - Twitter cards
3. Generate sitemap.xml
4. Add robots.txt
5. Optimize all images (WebP, proper sizing)
6. Test on real devices (iOS, Android)
7. Cross-browser testing (Chrome, Firefox, Safari, Edge)
8. Fix any responsive issues
9. Add loading states
10. Add error handling
11. Deploy to Vercel
12. Connect custom domain (if available)

**SEO Checklist:**

- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] All images have alt text
- [ ] Heading hierarchy is correct (H1 → H2 → H3)
- [ ] Internal links work
- [ ] External links open in new tab
- [ ] Sitemap submitted to Google Search Console

**Performance Targets:**

- Page load: <3 seconds
- Lighthouse Performance: >90
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: >90
- Lighthouse SEO: 100

**Deliverables:**

- ✅ Website live on production URL
- ✅ All Lighthouse scores >90
- ✅ No console errors
- ✅ Mobile-friendly

---

## 🧩 Component Breakdown

### Layout Components

#### 1. **IEEETopBar** (`ieee-top-bar.tsx`)

```tsx
// Links to IEEE.org ecosystem
<div className="bg-gray-100 border-b">
  <div className="container">
    <nav>
      <a href="https://www.ieee.org/">IEEE.org</a>
      <a href="http://ieeexplore.ieee.org/">IEEE Xplore</a>
      <a href="http://standards.ieee.org/">IEEE Standards</a>
      <a href="http://spectrum.ieee.org/">IEEE Spectrum</a>
      <a href="https://www.ieee.org/sitemap.html">More Sites</a>
    </nav>
  </div>
</div>
```

#### 2. **Navbar** (`navbar.tsx`)

- Desktop: Logo + horizontal menu + search
- Mobile: Logo + hamburger icon
- Sticky on scroll
- Active link highlighting

#### 3. **Footer** (`footer.tsx`)

- "Visit Us" links section
- Copyright notice
- IEEE legal links (Terms, Privacy, Ethics, etc.)

### Home Page Components

#### 4. **Hero** (`hero.tsx`)

- Full-width background image
- Overlay with institution name/logo
- Responsive text sizing

#### 5. **VisionSection** (`vision-section.tsx`)

- Two-column layout (content + illustration)
- Includes embedded CTACard

#### 6. **MissionSection** (`mission-section.tsx`)

- Two-column layout (illustration + content)
- Includes embedded CTACard

#### 7. **CTACard** (`cta-card.tsx`)

```tsx
interface CTACardProps {
  title: string;
  bullets: string[];
  buttonText: string;
  buttonLink: string;
  illustration: string;
}
```

### Committee Components

#### 8. **MemberCard** (`member-card.tsx`)

```tsx
interface MemberCardProps {
  name: string;
  role: string;
  department?: string;
  year?: string;
  email?: string;
  linkedin?: string;
  photo: string;
  bio?: string;
}
```

#### 9. **MemberGrid** (`member-grid.tsx`)

- Responsive grid (1 col mobile, 2-3 cols tablet, 3-4 cols desktop)
- Section headers for different teams

### Events Components

#### 10. **EventCard** (`event-card.tsx`)

```tsx
interface EventCardProps {
  title: string;
  date: string;
  location: string;
  type: string;
  poster: string;
  slug: string;
  excerpt?: string;
}
```

#### 11. **EventFilters** (`event-filters.tsx`)

- Filter by: Upcoming/Past, Type (workshop/seminar/etc.)
- Sort by: Date (newest/oldest)

### Gallery Components

#### 12. **PhotoGrid** (`photo-grid.tsx`)

- Masonry or uniform grid layout
- Lazy loading images
- Click to open lightbox

#### 13. **Lightbox** (`lightbox.tsx`)

- Full-screen image viewer
- Navigation arrows
- Close button
- Zoom functionality

### Form Components

#### 14. **ContactForm** (`contact-form.tsx`)

- React Hook Form integration
- Zod validation
- Error messages
- Success/loading states

---

## 📊 Content Model

### Committee Members

**File:** `content/committee/members.json`

```json
{
  "executive": [
    {
      "id": "unique-id",
      "name": "Full Name",
      "role": "Chairperson",
      "department": "Computer Engineering",
      "year": "Final Year",
      "email": "chair@example.com",
      "linkedin": "https://linkedin.com/in/username",
      "photo": "/images/committee/photo.jpg",
      "bio": "Brief bio about the member...",
      "order": 1
    }
  ],
  "technical": [...],
  "events": [...],
  "publicity": [...],
  "facultyAdvisor": {
    "name": "Dr. Faculty Name",
    "designation": "Professor & HOD",
    "department": "Computer Engineering",
    "email": "faculty@institution.edu",
    "photo": "/images/committee/advisor.jpg"
  }
}
```

### Events

**File:** `content/events/YYYY-MM-DD-event-slug.mdx`

```yaml
---
title: "Machine Learning Workshop"
slug: "ml-workshop-2024"
date: "2024-12-15"
time: "10:00 AM - 4:00 PM"
location: "Seminar Hall A, Main Building"
type: "workshop"                    # workshop | seminar | webinar | hackathon | social
status: "completed"                 # upcoming | ongoing | completed | cancelled
poster: "/images/events/ml-workshop/poster.jpg"
speakers:
  - name: "Dr. John Doe"
    affiliation: "IIT Bombay"
    photo: "/images/events/ml-workshop/speaker1.jpg"
  - name: "Ms. Jane Smith"
    affiliation: "Google India"
    photo: "/images/events/ml-workshop/speaker2.jpg"
attendees: 75
resources:
  - title: "Workshop Slides"
    url: "https://drive.google.com/file/d/.../view"
    type: "slides"
  - title: "Code Repository"
    url: "https://github.com/ieee-cs/ml-workshop"
    type: "github"
  - title: "Recording"
    url: "https://youtube.com/watch?v=..."
    type: "video"
gallery:
  - "/images/gallery/ml-workshop/photo1.jpg"
  - "/images/gallery/ml-workshop/photo2.jpg"
  - "/images/gallery/ml-workshop/photo3.jpg"
featured: true
published: true
seo:
  description: "Join our hands-on ML workshop..."
  ogImage: "/images/events/ml-workshop/og-image.jpg"
---

# Workshop Description

Detailed description in Markdown format...

## What You'll Learn
- Topic 1
- Topic 2
- Topic 3

## Prerequisites
- Requirement 1
- Requirement 2

## Schedule
...
```

### Gallery Albums

**File:** `content/gallery/albums.json`

```json
[
  {
    "id": "ml-workshop-2024",
    "title": "Machine Learning Workshop 2024",
    "date": "2024-12-15",
    "eventSlug": "ml-workshop-2024",
    "coverPhoto": "/images/gallery/ml-workshop/cover.jpg",
    "photos": [
      {
        "src": "/images/gallery/ml-workshop/photo1.jpg",
        "alt": "Speaker presenting ML concepts",
        "caption": "Dr. John Doe explaining neural networks"
      },
      {
        "src": "/images/gallery/ml-workshop/photo2.jpg",
        "alt": "Participants working on laptops",
        "caption": "Hands-on coding session"
      }
    ],
    "photoCount": 25
  }
]
```

### Scope Members

**File:** `content/scope-members/members.json`

```json
[
  {
    "id": "member-1",
    "name": "Student Name",
    "ieeeId": "12345678",
    "department": "Computer Engineering",
    "year": "Third Year",
    "email": "student@example.com",
    "photo": "/images/members/student.jpg",
    "joinDate": "2024-08-01",
    "active": true
  }
]
```

---

## 🔧 Repository Setup

### GitHub Organization Structure

1. **Create Organization:** `ieee-cs-[your-institution]`
2. **Create Repository:** `website` (public)
3. **Setup Teams:**
   - `@admins` - Full access
   - `@maintainers` - Review PRs, manage issues
   - `@contributors` - Create branches and PRs
   - `@content-team` - Update content only

### Branch Strategy

```
main (production)
  ← staging (pre-production testing)
    ← dev (integration)
      ← feat/navbar-component
      ← feat/home-page
      ← fix/mobile-menu
```

### Branch Protection Rules

**main:**

- Require PR with 2 approvals
- Require status checks to pass
- No force pushes
- Require linear history

**staging:**

- Require PR with 1 approval
- Require status checks to pass

### Initial Issues to Create

Create these labeled issues in your GitHub repo:

**Setup Phase:**

- [ ] #1: Initialize Next.js project with TypeScript `type: setup` `good first issue`
- [ ] #2: Configure Tailwind with IEEE colors `type: setup` `good first issue`
- [ ] #3: Add IEEE logos and branding assets `type: setup` `help wanted`
- [ ] #4: Set up ESLint and Prettier `type: setup`
- [ ] #5: Configure Husky git hooks `type: setup`

**Layout Phase:**

- [ ] #6: Build IEEE Top Bar component `type: feature` `area: layout`
- [ ] #7: Build Main Navbar component `type: feature` `area: layout`
- [ ] #8: Build Footer component `type: feature` `area: layout` `good first issue`
- [ ] #9: Build Mobile Menu `type: feature` `area: layout`

**Content Phase:**

- [ ] #10: Collect committee member details `type: content` `help wanted`
- [ ] #11: Write vision and mission statements `type: content` `help wanted`
- [ ] #12: Gather past event information `type: content` `help wanted`
- [ ] #13: Collect event photos for gallery `type: content` `help wanted`

---

## 🚀 Development Workflow

### Local Development Setup

```bash
# Clone repository
git clone https://github.com/ieee-cs-your-institution/website.git
cd website

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

### Environment Variables

**`.env.example`:**

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=IEEE CS SBC Your Institution
NEXT_PUBLIC_INSTITUTION_NAME=Your Institution Name

# Contact Form
CONTACT_FORM_WEBHOOK=https://formspree.io/f/your-form-id

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Future: Supabase (for admin panel)
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### Creating a Feature

```bash
# Create feature branch from dev
git checkout dev
git pull origin dev
git checkout -b feat/event-card-component

# Make changes and commit
git add .
git commit -m "feat: add EventCard component with hover effects"

# Push and create PR
git push origin feat/event-card-component
# Go to GitHub and create Pull Request to dev branch
```

### Code Review Checklist

Before requesting review:

- [ ] Code builds without errors (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] TypeScript checks pass (`npm run type-check`)
- [ ] Component is responsive (test on mobile/tablet/desktop)
- [ ] Accessible (keyboard navigation, screen reader compatible)
- [ ] No console.log statements left in code
- [ ] Comments added for complex logic
- [ ] PR description explains what and why

Reviewer checks:

- [ ] Code follows project conventions
- [ ] No obvious bugs or edge cases missed
- [ ] Performance considerations addressed
- [ ] Accessibility tested
- [ ] Mobile responsiveness verified

---

## 🌐 Deployment Strategy

### Vercel Deployment

**Step 1: Connect Repository**

1. Go to vercel.com
2. Import your GitHub repository
3. Configure project:
   - Framework: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

**Step 2: Configure Domains**

- `main` branch → `your-domain.com` (production)
- `staging` branch → `staging.your-domain.com`
- `dev` branch → `dev.your-domain.com`
- Feature branches → Auto-generated preview URLs

**Step 3: Environment Variables**
Add all variables from `.env.example` in Vercel dashboard

**Step 4: Deploy**

- Push to any branch triggers automatic deployment
- PR deployments create preview URLs
- Merge to main deploys to production

### Custom Domain Setup

If you have a custom domain:

1. Add domain in Vercel dashboard
2. Update DNS records (provided by Vercel)
3. Wait for SSL certificate (automatic)
4. Update `NEXT_PUBLIC_SITE_URL` environment variable

### Deployment Checklist

Before going live:

- [ ] All content reviewed and proofread
- [ ] All images optimized (WebP format)
- [ ] Contact form tested
- [ ] Links verified (no broken links)
- [ ] Lighthouse scores >90
- [ ] Cross-browser tested
- [ ] Mobile devices tested
- [ ] Analytics configured
- [ ] Sitemap submitted to Google Search Console
- [ ] Domain DNS configured
- [ ] SSL certificate active

---

## 🎨 Design Guidelines for Contributors

### Adding Images

**Size Guidelines:**

- Hero background: 1920x1080px (WebP, <500KB)
- Event posters: 800x600px (WebP, <200KB)
- Committee photos: 400x400px square (WebP, <100KB)
- Gallery photos: 1200x800px (WebP, <300KB)
- Thumbnails: 300x200px (WebP, <50KB)

**Naming Convention:**

```
/public/images/
  ├─ events/
  │  └─ 2024-12-15-ml-workshop-poster.jpg
  ├─ committee/
  │  └─ john-doe-chairperson.jpg
  └─ gallery/
     └─ ml-workshop-2024/
        ├─ photo-001.jpg
        └─ photo-002.jpg
```

### Writing Content

**Tone:** Professional, welcoming, educational

**Structure:**

- Use clear headings (H2, H3)
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Bold for emphasis (sparingly)

**Event Descriptions:**

- Start with what the event is about
- Explain why it's valuable
- List key takeaways
- Include logistics (date, time, location)

---

## 🔮 Post-MVP Dynamic Features

### Phase 8: Supabase Integration (Days 8-10)

**Setup:**

1. Create Supabase project
2. Design database schema
3. Set up authentication (admin only)
4. Configure storage buckets for images

**Database Tables:**

```sql
-- Events table
CREATE TABLE events (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  date DATE NOT NULL,
  content TEXT,
  poster_url TEXT,
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Committee members table
CREATE TABLE committee_members (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  photo_url TEXT,
  email TEXT,
  linkedin TEXT,
  order_index INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Gallery photos table
CREATE TABLE gallery_photos (
  id UUID PRIMARY KEY,
  album_id UUID REFERENCES gallery_albums(id),
  url TEXT NOT NULL,
  caption TEXT,
  uploaded_at TIMESTAMP DEFAULT NOW()
);
```

**Features:**

- Admin login page
- CRUD operations for events
- CRUD operations for committee members
- Image upload to Supabase storage
- Automatic thumbnail generation

### Phase 9: Admin Dashboard (Days 11-12)

**Routes:**

- `/admin/login` - Admin authentication
- `/admin/dashboard` - Overview stats
- `/admin/events` - Manage events
- `/admin/committee` - Manage team members
- `/admin/gallery` - Upload photos

**Dashboard Features:**

- View site statistics (page views, members, events)
- Quick actions (create event, add member)
- Recent activity log
- User-friendly forms with rich text editor

---

## 📚 Documentation to Create

### 1. ARCHITECTURE.md

- System overview diagram
- Tech stack explanation
- Data flow diagrams
- Folder structure explanation

### 2. CONTENT_GUIDE.md

- How to add a new event
- How to update committee members
- How to upload gallery photos
- Content writing guidelines
- Image preparation guide

### 3. ONBOARDING.md

- Getting started guide
- Development setup instructions
- First contribution walkthrough
- Where to ask for help

### 4. CONTRIBUTING.md

- Code of conduct
- How to report bugs
- How to suggest features
- PR process
- Code style guide

---

## ✅ Acceptance Criteria

### Home Page

- [ ] IEEE Top Bar with correct links
- [ ] Main navigation with all menu items
- [ ] Hero section with institution branding
- [ ] "WELCOME!" heading
- [ ] Vision section with content and CTA
- [ ] Mission section with content and CTA
- [ ] Footer with IEEE legal links
- [ ] Mobile responsive
- [ ] Page loads in <3 seconds

### Committee Page

- [ ] Executive committee section
- [ ] Faculty advisor section
- [ ] All members have photos
- [ ] Member cards show name, role, contact
- [ ] LinkedIn links work
- [ ] Responsive grid layout

### Events Page

- [ ] Lists all events (past and upcoming)
- [ ] Events sortable by date
- [ ] Filter by event type
- [ ] Event cards show poster, title, date
- [ ] Clicking card opens event detail
- [ ] Event detail shows full info + resources

### Gallery Page

- [ ] Photo albums organized by event
- [ ] Grid layout for photos
- [ ] Lightbox opens on photo click
- [ ] Navigation arrows in lightbox
- [ ] Mobile swipe gestures work

### Contact Page

- [ ] Contact form with validation
- [ ] Form submission works
- [ ] Success/error messages shown
- [ ] Email, social media links visible
- [ ] Google Maps embed (optional)

---

## 🚨 Common Pitfalls to Avoid

1. **Not Optimizing Images**
   - Problem: Large image files slow down site
   - Solution: Use `next/image`, convert to WebP, compress

2. **Hardcoding Content**
   - Problem: Difficult to update
   - Solution: Use MDX/JSON files

3. **Ignoring Mobile Users**
   - Problem: Broken layout on phones
   - Solution: Test on real devices, use responsive utilities

4. **Poor Accessibility**
   - Problem: Unusable for screen readers
   - Solution: Semantic HTML, alt text, keyboard navigation

5. **No Error Handling**
   - Problem: App crashes on errors
   - Solution: Try-catch blocks, error boundaries, fallback UI

6. **Skipping Git Branches**
   - Problem: Conflicts in main branch
   - Solution: Always create feature branches

7. **No Documentation**
   - Problem: Future maintainers confused
   - Solution: Comment code, write guides

---

## 📞 References

**For Design Questions:**

- Reference IEEE brand guidelines
- Check DESIGN_SYSTEM.md
- Look at reference site: edu.ieee.org/in-sairamitcs

---

## 🎯 Success Metrics

After launch, track these metrics:

**Traffic:**

- Monthly unique visitors
- Page views per session
- Bounce rate (<60%)
- Average session duration (>2 minutes)

**Engagement:**

- Event page visits
- Contact form submissions
- Social media clicks
- Join IEEE button clicks

**Technical:**

- Average page load time (<3s)
- Mobile traffic percentage
- Lighthouse scores (>90)
- Zero critical errors

---

## 📅 Timeline Summary

| Day   | Phase   | Key Deliverables                 |
| ----- | ------- | -------------------------------- |
| 1     | Setup   | Dev environment, IEEE branding   |
| 2     | Layout  | Header, footer, navigation       |
| 3     | Home    | Complete home page               |
| 4     | Team    | Committee & scope members pages  |
| 5     | Events  | Events listing, detail, gallery  |
| 6     | Content | About, contact, collabratec      |
| 7     | Deploy  | Production launch                |
| 8-10  | Backend | Supabase integration             |
| 11-12 | Admin   | Dashboard for content management |

---

## 🎉 Launch Day Checklist

**T-minus 1 day:**

- [ ] Final content review
- [ ] All images optimized
- [ ] Lighthouse audit passed
- [ ] Cross-browser tested
- [ ] Mobile devices tested
- [ ] Forms tested
- [ ] Backups configured
- [ ] Analytics ready
- [ ] Social media posts prepared

**Launch day:**

- [ ] Deploy to production
- [ ] Verify domain is live
- [ ] Test all critical paths
- [ ] Announce on social media
- [ ] Send email to members
- [ ] Monitor error logs
- [ ] Respond to feedback

**T-plus 1 Day:**

- [ ] Review analytics
- [ ] Fix any reported bugs
- [ ] Gather user feedback
- [ ] Plan improvements
- [ ] Thank contributors

---

## 📖 Additional Resources

**IEEE Resources:**

- [IEEE Brand Guidelines](https://brand-experience.ieee.org/)
- [IEEE Student Branch Toolkit](https://students.ieee.org/)
- [IEEE Collabratec](https://ieee-collabratec.ieee.org/)

**Technical Documentation:**

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Vercel Deployment](https://vercel.com/docs)

**Design Tools:**

- [Figma](https://figma.com) - Design mockups
- [TinyPNG](https://tinypng.com/) - Image compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG optimization
