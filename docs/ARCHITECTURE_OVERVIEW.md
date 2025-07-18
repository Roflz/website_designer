# Comprehensive Technical Architecture Document

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

This workspace is a professional website generator and template system, supporting both business landing pages and portfolio websites. It is built with Next.js, React, TypeScript, and Tailwind CSS, and includes a robust template generation engine, a theme library, and comprehensive documentation. The system is designed for extensibility, maintainability, and high-quality, modern web design.

---

## 2. Project Structure

```
website_designer/
├── business_landing_page/         # Business landing page template (Next.js)
├── portfolio_website/             # Portfolio website template (Next.js)
├── template-generator/            # Template and content generation engine
├── theme-lib/                     # Shared theme and UI component library
├── scripts/                       # Utility scripts for workspace management
├── prompts/                       # AI and documentation prompt templates
├── package.json                   # Root dependencies and scripts
├── TEMPLATE_GENERATOR_COMMANDS.md # Generator usage documentation
├── TEMPLATE_SPECIFIC_COMMANDS.md  # Template-specific command documentation
└── ... (other config and lock files)
```

### Key Directories

- **business_landing_page/**: Production-ready business site template with all sections, assets, and config.
- **portfolio_website/**: Production-ready portfolio template with all sections, assets, and config.
- **template-generator/**: Contains the AI-driven content generator, prompt generator, config mapping, and workspace/project creation logic.
- **theme-lib/**: Houses shared UI components, theming logic, and CSS for use across templates.
- **scripts/**: Workspace-level utility scripts.
- **prompts/**: Markdown prompt templates for AI and documentation.

---

## 3. Entry Point & Bootstrapping

### Templates (`business_landing_page/`, `portfolio_website/`)
- **`app/layout.tsx`**: Root layout, applies global styles, fonts, and metadata.
- **`app/page.tsx`**: Main page, renders all sections in order (Header, Hero, About, etc.).
- **`next.config.js`**: Next.js configuration for images, domains, etc.
- **`package.json`**: Defines scripts (`dev`, `build`, `start`, `lint`) and dependencies.

### Template Generator (`template-generator/`)
- **`scripts/ai-prompt-generator.js`**: Generates AI prompts for content creation.
- **`scripts/ai-content-generator.js`**: Maps AI responses to config, creates new workspaces.
- **`scripts/generate.js`**: Orchestrates the full generation process, including config writing and validation.

---

## 4. Routing & Navigation

- **Single-page layout**: All main content is rendered in `app/page.tsx` as a single-page site.
- **Section navigation**: `Header` provides anchor links (e.g., `#about`, `#projects`) for smooth scrolling.
- **Mobile navigation**: Responsive menu toggled with a hamburger icon.
- **No dynamic routing**: All navigation is handled via anchor links and scroll behavior.

---

## 5. State Management

- **Local state only**: Managed via React `useState` and `useEffect` in components.
  - Dark mode toggle in `Header`.
  - Mobile menu open/close state.
  - Project filter state in `Projects`.
  - Contact form state and submission status.
- **No global state libraries**: No Redux, Zustand, or Context API for global state.

---

## 6. Theming & Styling

- **Tailwind CSS**: Primary styling solution, with custom color palettes and dark mode support.
- **theme-lib**: Centralized theme variables, color palette switcher, and shared UI components.
- **Custom classes**: For buttons, cards, gradients, etc., defined in `globals.css` and `theme-lib/src/theme.css`.
- **Dark mode**: Enabled via `darkMode: 'class'` in Tailwind config, toggled by adding/removing the `dark` class on `<html>`.
- **Fonts**: Inter and JetBrains Mono imported via Google Fonts.

---

## 7. Component Organization & Data Flow

- **Feature-based organization**: Each section (Header, Hero, About, etc.) is a self-contained React component.
- **Data flow**: Components import their config from `site.config.ts` and destructure required fields at the top.
- **No prop drilling**: Most data is local to each section/component.
- **Shared UI**: theme-lib provides reusable UI elements (e.g., BackToTopButton, ColorPaletteSwitcher).

---

## 8. Configuration & Build Process

- **Config files**:
  - `site.config.ts`: Centralized content/config for each template, generated by the template-generator.
  - `tailwind.config.js`: Custom colors, fonts, and animations.
  - `tsconfig.json`: TypeScript strictness and path aliases.
  - `postcss.config.js`: Loads Tailwind and Autoprefixer.
  - `next.config.js`: Next.js image domains and settings.
- **Build**:
  - Standard Next.js build (`next build`).
  - Ready for deployment on Vercel, Netlify, or any static host.

---

## 9. Assets & Static Files

- **`public/` directories**: Store static assets (images, PDFs, etc.) for each template.
  - `portfolio_website/public/cv.pdf`: Example resume for download.
  - `business_landing_page/public/images/`: (Empty or to be populated with images.)
- **No images found in creative-design-studio or business_landing_page by default.**
- **theme-lib/src/theme.css**: Centralized CSS for theme variables.

---

## 10. Third-Party Libraries

- **Next.js**: SSR, routing, static export.
- **React**: UI library.
- **TypeScript**: Type safety.
- **Tailwind CSS**: Utility-first CSS.
- **Framer Motion**: Animations.
- **Lucide React**: Icon set.
- **clsx, tailwind-merge**: Class name utilities.
- **Autoprefixer, PostCSS**: CSS tooling.

---

## 11. Responsiveness & Accessibility

- **Responsive design**: Tailwind’s responsive utilities for layout, spacing, and typography.
- **Accessibility**:
  - Semantic HTML elements.
  - Accessible labels and focus states.
  - Color contrast maintained in both light and dark modes.
- **Animations**: Smooth, non-intrusive, and accessible.

---

## 12. Notable Features & Advanced Implementations

- **AI-driven content generation**: Prompts and config mapping for unique, client-specific sites.
- **Dark mode**: User preference persisted in localStorage, toggled via Header.
- **Filterable project gallery**: Projects can be filtered by type with animated transitions.
- **Contact form**: Animated, with validation and feedback.
- **Reusable UI**: theme-lib provides shared components and theme logic.
- **Extensive documentation**: Markdown docs for branding, architecture, theme variables, and more.
- **Automated testing**: (Planned/partially implemented) via auto-test-generator.js.

---

## 13. Summary & Recommendations

### Strengths
- Clean, modern, and professional design.
- Fully responsive and accessible.
- Modular, maintainable component structure.
- Robust template and content generation workflow.
- Centralized theming and shared UI library.
- Ready for production deployment.

### Areas for Improvement
- Consider extracting static data (projects, skills, experience) to JSON or MDX for easier content management.
- Add automated tests for critical components and forms.
- Integrate analytics for usage tracking.
- Add support for internationalization (i18n).
- Use Next.js Image component for all images for better optimization.
- Populate public/images/ with real assets as needed.

---

**This document provides a complete, professional overview of your project’s architecture and implementation. It is suitable for onboarding, handoff, or technical review purposes.** 