# Jakub Sokal — Portfolio

Personal portfolio site built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
# or
pnpm install
```

### 2. Configure environment variables
```bash
cp .env.local.example .env.local
```
Then fill in the values (see [Environment Variables](#environment-variables) below).

### 3. Add your profile photo
Place a `profile.jpg` (or `.png`) in the `/public` directory. The About section will display it automatically.

### 4. Add your CV PDF
Place your `Jakub_Sokal_CV_Portfolio.pdf` in the `/public` directory. The hero CTA and navbar download button will link to it.

### 5. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx              # Root layout - fonts, metadata, ThemeProvider
│   ├── page.tsx                # Home page — assembles all sections
│   └── globals.css             # Tailwind directives + custom CSS
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with scroll detection
│   │   └── Footer.tsx          # Minimal footer
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero
│   │   ├── About.tsx           # Bio + stats + photo
│   │   ├── Skills.tsx          # Tech stack with Devicons
│   │   ├── Projects.tsx        # Server Component - GitHub API fetch
│   │   ├── ProjectsClient.tsx  # Client Component - filtering UI
│   │   ├── Experience.tsx      # Timeline of work history
│   │   ├── Education.tsx       # Education cards
│   │   └── Contact.tsx         # Formspree contact form
│   └── ui/
│       ├── ThemeToggle.tsx     # Dark/light mode toggle
│       ├── ProjectCard.tsx     # GitHub repo card
│       └── SectionWrapper.tsx  # Scroll-animated section container
├── context/
│   └── ThemeProvider.tsx       # next-themes wrapper
├── lib/
│   ├── data.ts                 # All personalisation data (edit this!)
│   ├── github.ts               # GitHub REST API utilities
│   └── utils.ts                # cn(), formatRepoName(), timeAgo()
├── types/
│   └── index.ts                # TypeScript interfaces
├── public/
│   ├── profile.jpg             # ← Profile photo
│   └── Jakub_Sokal_CV_Portfolio.pdf  # ← CV download
└── .env.local.example
```

---

## ✏️ Personalisation

**All content lives in `lib/data.ts`** — edit this single file to update:
- Name, title, tagline, bio, location
- Work experience timeline
- Education
- Skills & tech stack
- Social links

---

## 🔑 Environment Variables

Create `.env.local` from the example:

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_GITHUB_USERNAME` | Your GitHub username | ✅ Yes |
| `GITHUB_TOKEN` | GitHub PAT (increases API rate limit) | Recommended |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for contact form | ✅ For contact |
| `NEXT_PUBLIC_SITE_URL` | Your deployed URL (for meta tags) | Optional |

### Getting a GitHub Token
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Generate a **classic** token with no scopes (public repos only)
3. Add it to `.env.local` as `GITHUB_TOKEN`

### Setting up Formspree
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy the 8-character form ID (e.g. `xrgaqpvw`)
4. Add it to `.env.local` as `NEXT_PUBLIC_FORMSPREE_ID`

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Font Display | `Fraunces` | Headings, hero name |
| Font Body | `DM Sans` | Body text |
| Font Mono | `JetBrains Mono` | Labels, tags, code |
| Accent | `#F5A623` (amber) | CTAs, highlights, icons |
| Dark BG | `#080D16` | Night mode background |
| Light BG | `#FAFAF7` | Day mode background |

---

## 📦 Key Libraries

| Library | Purpose |
|---|---|
| `next` 14 | App Router, SSR, Image optimisation |
| `framer-motion` | Scroll animations, page transitions |
| `next-themes` | Dark/light mode with SSR support |
| `lucide-react` | Consistent icon set |
| `tailwind-merge` + `clsx` | Type-safe className merging |
| Devicons CDN | Technology icons in Skills section |
| Formspree | No-backend contact form |

---

## 🚢 Deployment

Deployed on **Vercel**:

```bash
npm i -g vercel
vercel
```

Add environment variables in the Vercel dashboard under **Project → Settings → Environment Variables**.

---

## ♿ Accessibility

- Semantic HTML with ARIA labels throughout
- All interactive elements are keyboard navigable
- Focus indicators with amber outline
- Skip to main content link in layout
- `alt` text on all images
- `aria-live` regions for form state changes
- WCAG 2.1 AA colour contrast

---

## 📄 License

MIT