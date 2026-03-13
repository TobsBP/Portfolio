<div align="center">

# 🗂️ Portfolio

> 🚀 Personal portfolio built with modern web technologies, showcasing projects, skills, and experience.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Biome](https://img.shields.io/badge/Biome-linter-60a5fa?style=flat-square&logo=biome)](https://biomejs.dev/)

</div>

---

## 📁 Structure

```
src/
├── app/
│   ├── page.tsx          # Home — hero section
│   ├── about/            # About — timeline & facts
│   ├── projects/         # Projects showcase
│   ├── knowledge/        # Skills & tech stack
│   ├── contact/          # Contact page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── NavBar.tsx        # Navigation
│   ├── HeroCode.tsx      # Animated code display
│   ├── ProjectCard.tsx   # Project card
│   ├── CertificatesCard.tsx
│   ├── Knowledge.tsx     # Tech grid
│   ├── TechGrid.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts       # Projects data
│   ├── technologies.ts   # Tech stack icons
│   ├── certificates.ts
│   └── heroCode.ts       # Hero animation content
└── lib/
    └── fonts.ts          # Font configuration
```

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | React Icons |
| **Linter / Formatter** | Biome |
| **Git Hooks** | Husky + lint-staged |
| **CI/CD** | GitHub Actions |

## 📄 Pages

- **`/`** — Hero section with animated code snippet
- **`/projects`** — Portfolio of projects with tech badges
- **`/about`** — Profile, career timeline, and fun facts
- **`/knowledge`** — Full tech stack visualization
- **`/contact`** — Contact information

## ⚡ Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Scripts

```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Lint & format with Biome
```
