# Tobams Group — Training & Development Page

A fully responsive implementation of the Tobams Group Training & Development page, built with Next.js 16 and Tailwind CSS v4.

---

## Links

- **Live URL:** https://tobams-group-zeta.vercel.app/
- **GitHub Repo:** https://github.com/coolkolex/tobams-group
- **Figma Design:** https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0

---

## Stack

| Tool | Version | Reason |
|---|---|---|
| Next.js | 16.2.4
| React | 19
| Tailwind CSS | v4 | Required — all styling via utility classes, no other CSS framework used |
| TypeScript | 5 | Type safety and maintainability |

---

## Setup Instructions

### Prerequisites
- Node.js
- npm >= 9

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/coolkolex/tobams-group
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


## Design Decisions & Technical Assumptions

### Fonts
- **Playfair Display** — used for all headings
- **Nunito** — used for all body text and UI elements
- Both loaded via `next/font/google` for performance (no layout shift, self-hosted by Next.js)

### Tailwind v4
- Using `@tailwindcss/postcss` plugin as required for Tailwind v4 setup
- Theme tokens (colors, fonts) defined via `@theme {}` in `globals.css` — the v4 way
- All responsive breakpoints use Tailwind prefixes (`sm:`, `md:`, `lg:`)

### Images
- All images use `next/image` for automatic optimization, lazy loading, and correct sizing
- Since the Figma design uses stock photography, Unsplash CDN images are used as placeholders that visually match the design content (professionals, training, meetings, etc.)

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

## AI Disclosure

This project was developed using Claude (Anthropic) as a productivity tool to assist with code generation. The overall architecture, component structure, and implementation decisions were independently designed, reviewed, and refined to meet the assessment requirements. Special attention was given to ensuring clean organization, reusable components, and alignment with best practices throughout the development process.

---