# IEEE CS SBC — Website

This repository builds the official website for the IEEE Computer Society Student Branch Committee.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Components:** shadcn/ui
- **Deployment:** Vercel
- **Future Backend:** Supabase (Auth, Postgres, Storage)

## Project Approach

**Static-first → Dynamic**

We're building this in phases:
1. **Phase 1 (Current):** Static website with content in Markdown/JSON
2. **Phase 2 (Future):** Dynamic features with Supabase backend and admin dashboard

## Features

### Current (Static MVP)
- Responsive, accessible design
- Pages: Home, About, Team, Events, Projects, Resources, Join, Contact
- Content management via Markdown/JSON
- Automated CI/CD with GitHub Actions
- Vercel deployment with preview builds

### Planned (Dynamic Phase)
- Admin dashboard for content management
- Event registration system
- User authentication
- Image uploads
- Newsletter integration


## Security & Privacy

- Never commit secrets or API keys
- Use `.env.example` as a reference for required environment variables
- Store sensitive data in GitHub/Vercel environment variables

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note:** This is an active development project. The static MVP is our current focus, with dynamic features planned for Phase 2.