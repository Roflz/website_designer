# Portfolio Website – Technical Architecture Document

## Table of Contents
1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Entry Point & Bootstrapping](#entry-point--bootstrapping)
4. [Routing & Navigation](#routing--navigation)
5. [State Management](#state-management)
6. [Theming & Styling](#theming--styling)
7. [Component Organization & Data Flow](#component-organization--data-flow)
8. [Configuration & Build Process](#configuration--build-process)
9. [Assets & Static Files](#assets--static-files)
10. [Third-Party Libraries](#third-party-libraries)
11. [Responsiveness & Accessibility](#responsiveness--accessibility)
12. [Notable Features & Advanced Implementations](#notable-features--advanced-implementations)
13. [Summary & Recommendations](#summary--recommendations)

---

## 1. Project Overview
A modern, responsive portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS. The site showcases professional skills, projects, and experience, with a focus on clean design, smooth animations, and accessibility. It supports dark mode, is SEO-optimized, and is ready for deployment on Vercel or similar platforms.

## 2. Project Structure
```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component (entry point)
│   └── page.tsx             # Home page component (all sections)
├── components/
│   ├── Header.tsx           # Navigation header (with dark mode toggle)
│   ├── Hero.tsx             # Hero/intro section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects showcase
│   ├── Experience.tsx       # Work experience and education
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with links and copyright
├── public/                  # Static assets (images, SVGs, etc.)
├── tailwind.config.js       # Tailwind CSS configuration (custom colors, fonts)
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration (aliases, strictness)
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project overview and customization guide
└── project_ideas.md         # (Optional) Project ideas for inspiration
```

## 3. Entry Point & Bootstrapping
- **`app/layout.tsx`** is the root layout, applying global styles, fonts (Inter), and metadata for SEO and social sharing.
- **`app/page.tsx`** is the main page, rendering all sections in order: Header, Hero, About, Skills, Projects, Experience, Contact, Footer.
- The app uses Next.js App Router, so routing is file-based and server/client components are supported.

## 4. Routing & Navigation
- **Single-page layout:** All main content is rendered in `app/page.tsx` as a single-page site.
- **Section navigation:** The `Header` provides anchor links (e.g., `#about`, `#projects`) for smooth scrolling to each section.
- **Mobile navigation:** The `Header` includes a responsive mobile menu, toggled with a hamburger icon.

## 5. State Management
- **Local state only:**
  - The `Header` manages dark mode state (`isDark`) and mobile menu state (`isMenuOpen`) using React `useState`.
  - Dark mode preference is persisted in `localStorage` and toggles the `dark` class on `<html>`.
  - The `Projects` component manages a local filter state for project categories.
  - The `Contact` form manages form state and submission status locally.
- **No global state or external state management libraries are used.**

## 6. Theming & Styling
- **Tailwind CSS** is the primary styling solution, with extensive use of utility classes and dark mode variants.
- **Custom color palettes** are defined in `tailwind.config.js`:
  - `primary` (blue shades) and `dark` (gray/blue-black shades) for backgrounds, text, and accents.
- **Dark mode** is enabled via `darkMode: 'class'` and toggled by adding/removing the `dark` class on `<html>`.
- **Custom component classes** in `globals.css`:
  - `.btn-primary`, `.btn-secondary`, `.card`, `.gradient-text`, etc., for consistent UI elements.
- **Animations** are handled with Framer Motion and custom Tailwind keyframes.
- **Fonts:** Inter (sans) and JetBrains Mono (mono) are imported via Google Fonts and set in Tailwind config.

## 7. Component Organization & Data Flow
- **Component structure:**
  - All major sections are implemented as React function components in `/components`.
  - Components are organized by feature/section (not atomic design).
- **Data flow:**
  - Data is passed via props only where needed (most components are self-contained).
  - Static data (e.g., project lists, skills, experience) is defined within each component.
  - No external API calls or context providers are used.
- **Component details:**
  - **Header:** Navigation, dark mode toggle, responsive menu.
  - **Hero:** Animated intro, CTA buttons, stats.
  - **About:** Personal info, bio, skills preview, download CV.
  - **Skills:** Categorized skills with progress bars and additional skills grid.
  - **Projects:** Filterable project gallery, project cards, live/code links.
  - **Experience:** Work/education timeline, certifications, achievements.
  - **Contact:** Contact info cards, social links, animated form with validation and feedback.
  - **Footer:** Brand, quick links, contact info, copyright, scroll-to-top.

## 8. Configuration & Build Process
- **`package.json`:**
  - Scripts: `dev`, `build`, `start`, `lint`.
  - Dependencies: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, etc.
- **`tailwind.config.js`:**
  - Custom color palettes, font families, animations, and keyframes.
- **`tsconfig.json`:**
  - Path alias: `@/*` for root imports.
  - Strict type checking and modern module resolution.
- **`postcss.config.js`:**
  - Loads Tailwind CSS and Autoprefixer.
- **`next.config.js`:**
  - Image domains for Next.js image optimization.
- **Build:**
  - Standard Next.js build process (`next build`).
  - Ready for deployment on Vercel, Netlify, or any static host.

## 9. Assets & Static Files
- **`public/` directory:**
  - Stores static assets (images, SVGs, etc.) referenced in components (e.g., project images, profile image).
  - Images in the demo are mostly external URLs, but the structure supports local assets.
- **Asset usage:**
  - Images are used in the Projects, About, and Hero sections.
  - Social icons are provided by Lucide React.

## 10. Third-Party Libraries
- **Next.js:** Framework for SSR, routing, and static export.
- **React:** UI library.
- **TypeScript:** Type safety and developer tooling.
- **Tailwind CSS:** Utility-first CSS framework.
- **Framer Motion:** Animations and transitions.
- **Lucide React:** Icon set.
- **clsx, tailwind-merge:** Utility libraries for className management.
- **Autoprefixer, PostCSS:** CSS tooling.

## 11. Responsiveness & Accessibility
- **Responsive design:**
  - Uses Tailwind's responsive utilities for layout, spacing, and typography.
  - Navigation adapts to mobile with a hamburger menu.
  - Grid layouts adjust for different screen sizes.
- **Accessibility:**
  - Semantic HTML elements (e.g., `<nav>`, `<section>`, `<footer>`).
  - Buttons and links have accessible labels and focus states.
  - Color contrast is maintained in both light and dark modes.
  - Animations are smooth and non-intrusive.

## 12. Notable Features & Advanced Implementations
- **Dark mode:**
  - User preference is persisted in `localStorage` and toggled via a button in the Header.
  - All sections and components use Tailwind's `dark:` variants for consistent theming.
- **Animations:**
  - Framer Motion is used for section transitions, button effects, and scroll animations.
  - Custom keyframes for fade-in, slide-up, and bounce effects.
- **Filterable project gallery:**
  - Projects can be filtered by type (web, mobile, AI/ML) with animated transitions.
- **Contact form:**
  - Animated, with validation, submission feedback, and reset logic.
- **Reusable UI classes:**
  - Custom classes for buttons, cards, and gradient text ensure design consistency.
- **SEO & metadata:**
  - Rich metadata in `layout.tsx` for OpenGraph, Twitter, and search engines.

## 13. Summary & Recommendations
### Strengths
- Clean, modern, and professional design.
- Fully responsive and accessible.
- Consistent theming and dark mode support.
- Modular, maintainable component structure.
- Smooth, high-quality animations.
- Ready for deployment and easy customization.

### Areas for Improvement
- Consider extracting static data (projects, skills, experience) to JSON or MDX for easier content management.
- Add automated tests (unit, integration, e2e) for critical components and forms.
- Integrate analytics (e.g., Google Analytics) for usage tracking.
- Add support for internationalization (i18n) if targeting a global audience.
- Consider using Next.js Image component for all images for better optimization.

---

**This document provides a complete, professional overview of the portfolio website's architecture and implementation. It is suitable for onboarding, handoff, or technical review purposes.** 