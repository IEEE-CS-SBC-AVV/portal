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
│   ├── components/       # Reusable components (Navbar, Footer)
│   ├── config/           # IEEE design system configuration
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities and constants
│   └── types/            # TypeScript definitions
├── public/               # Static assets
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

Follows **IEEE Brand Guidelines** with official colors, typography, and accessibility standards (WCAG AA compliant).

- **Primary Color:** IEEE Blue (#00629B)
- **Typography:** Open Sans, 16px minimum
- **Accessibility:** 44px touch targets, proper contrast, semantic HTML

## Project Approach

**Phase 1 (Current):** Static website with Markdown/JSON content  
**Phase 2 (Planned):** Dynamic features with Supabase backend and admin dashboard

## Features

### Current

- Responsive, accessible design
- IEEE brand-compliant styling
- Contact form with validation
- Event filtering and search
- Automated CI/CD with GitHub Actions

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
