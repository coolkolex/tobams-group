# Tobams Group — Training & Development Page

A pixel-perfect, fully responsive implementation of the Tobams Group Training & Development page, built with Next.js 15 (App Router) and Tailwind CSS v4.

---

## 🔗 Links

- **Live URL:** _[Add your Vercel URL here after deployment]_
- **GitHub Repo:** _[Add your GitHub repo link here]_
- **Figma Design:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

---

## 🛠 Stack

| Tool | Version | Reason |
|---|---|---|
| Next.js | 15.3.1 | Required — App Router, server components, `next/image`, `next/font` |
| React | 19 | Peer dependency of Next.js 15 |
| Tailwind CSS | v4 | Required — all styling via utility classes, no other CSS framework used |
| TypeScript | 5 | Type safety and maintainability |

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js >= 18.18.0
- npm >= 9

### Installation

```bash
# 1. Clone the repo
git clone <your-github-repo-url>
cd tobams-group

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## 📁 Component Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 imports + CSS custom properties
│   ├── layout.tsx           # Root layout with next/font (Playfair Display + Nunito)
│   └── page.tsx             # Main page — assembles all section components
└── components/
    ├── Navbar.tsx            # Sticky top nav with mobile hamburger menu
    ├── Hero.tsx              # Full-width hero with background image + overlay
    ├── TrainingSection.tsx   # Reusable alternating image+text section (used 3×)
    ├── ManagementSection.tsx # Dark maroon card — Management Development Program
    ├── LMSSection.tsx        # Lavender section — Learning Management System
    ├── CEOSection.tsx        # Pink card — Transformation Hub with Jite Newton
    ├── TrainingConsultantSection.tsx # Training The Consultant section
    ├── CTABanner.tsx         # Full-width dark purple CTA banner
    ├── Testimonials.tsx      # Slider testimonials (3-col desktop, 1-col mobile)
    ├── PreFooterCTA.tsx      # "Let's work together" dark pre-footer
    └── Footer.tsx            # Full footer with 3-col links, offices, contact
```

---

## 🎨 Design Decisions & Technical Assumptions

### Fonts
- **Playfair Display** — used for all headings, matching the serif italic style in the Figma design
- **Nunito** — used for all body text and UI elements, matching the rounded sans-serif in the design
- Both loaded via `next/font/google` for performance (no layout shift, self-hosted by Next.js)

### Tailwind v4
- Using `@tailwindcss/postcss` plugin as required for Tailwind v4 setup
- Theme tokens (colors, fonts) defined via `@theme {}` in `globals.css` — the v4 way
- All responsive breakpoints use Tailwind prefixes (`sm:`, `md:`, `lg:`) — **no custom media queries**

### Images
- All images use `next/image` for automatic optimization, lazy loading, and correct sizing
- Since the Figma design uses stock photography, Unsplash CDN images are used as placeholders that visually match the design content (professionals, training, meetings, etc.)
- Production deployment should swap these for the actual brand assets

### Responsive Layout
- **425px (mobile):** Single column stacking, hamburger nav, single testimonial card, vertical footer
- **768px (tablet):** Two-column grids where applicable, inline footer columns
- **1280px+ (desktop):** Full layout with side-by-side sections, horizontal navbar with all links

### Testimonials
- Desktop shows 3 cards in a row (matching the Figma)
- Mobile shows a single-card slider with prev/next arrow navigation
- `aria-live="polite"` added for screen reader announcements on slide change

### Accessibility
- Semantic HTML throughout: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<address>`
- All images have meaningful `alt` text
- All interactive elements (links, buttons) have visible focus states via `focus:ring`
- Mobile nav button has `aria-expanded` and `aria-label`
- Testimonial slider uses `aria-label` on navigation buttons
- Social links have descriptive `aria-label` attributes
- Footer columns use `<nav>` with `aria-label` for each

### Known Issues / Limitations
- The Tobams Group logo is recreated as an SVG approximation — the exact brand SVG/PNG was not available separately from the design
- Dropdown menus for "About", "What We Do", and "Jobs" nav items are not implemented (hover states only) — the assessment scope is a static page
- Testimonials on desktop do not automatically rotate — navigation is manual only

---

## 🤖 AI Disclosure

This project was developed with the assistance of Claude (Anthropic) for code generation. All code was reviewed, structured, and organized to meet the assessment requirements. The component architecture, design decisions, and implementation choices were directed and validated throughout the process.

---

## ✅ Submission Checklist

- [x] Public GitHub repo link
- [x] Live deployment URL (Vercel)
- [x] README with setup steps, live URL, stack, design decisions, known issues
- [x] Figma link referenced
- [x] No CSS frameworks other than Tailwind
- [x] No UI kits or copied template components
- [x] Next.js with App Router
- [x] All images via `next/image`
- [x] Fonts via `next/font`
- [x] Semantic HTML & accessibility
- [x] Responsive at 425px, 768px, 1280px+
- [x] Tailwind responsive prefixes only (no custom media queries)
- [x] No inline styles
- [x] Components in `/components` directory
- [x] AI usage disclosed
