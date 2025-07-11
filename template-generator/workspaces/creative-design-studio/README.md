# Business Landing Page Template

A modern, responsive business landing page template built with Next.js, TypeScript, and Tailwind CSS. This template is perfect for freelancers and agencies offering landing page services to clients. It features a professional design, dynamic color themes, dark/light mode, and all the essential sections for a high-converting business site.

## ✨ Features

- **Modern, Professional Design**: Clean layout, beautiful gradients, and subtle animations
- **Fully Responsive**: Looks great on all devices
- **Theme System**: Multiple color palettes with gradient accents, each with light/dark backgrounds
- **Dark/Light Mode**: Toggle for user preference
- **Customizable Sections**: Hero, About, Services, Projects/Client Work, Process, Testimonials, Contact, Footer
- **Contact Form**: With validation and ready for integration
- **Accessible & SEO-Friendly**: Built with best practices
- **Easy to Brand**: Update colors, logo, and content in minutes

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/business-landing-page.git
   cd business-landing-page
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser**
   Go to [http://localhost:3000](http://localhost:3000)

## 🛠️ Customization

### Branding & Content
- **Logo/Business Name**: Update in `components/Header.tsx` and `components/Footer.tsx`
- **Colors & Theme**: Use the theme switcher in the header, or edit palettes in `components/ColorPaletteSwitcher.tsx` and CSS variables in `app/globals.css`
- **Section Content**: Edit text and images in the components under `components/`
- **Contact Info**: Update in `components/Contact.tsx` and `components/Footer.tsx`

### Sections
- **Hero**: Business value prop, CTA, stats
- **About**: Business story, mission, highlights
- **Services**: List of services offered
- **Projects/Client Work**: Case studies or portfolio
- **Process**: Timeline or how you work
- **Testimonials**: Client reviews
- **Contact**: Inquiry/quote form
- **Footer**: Business info, links, contact

### Theming
- **Color Palettes**: Easily switch between popular color themes (blue/purple, yellow/orange, green, red/pink, teal/cyan, rose/orange)
- **Dark/Light Mode**: Toggle in the header; backgrounds and accents adapt automatically
- **Custom Gradients**: Update palette gradients in `ColorPaletteSwitcher.tsx` and CSS variables

### Images & Icons
- Replace placeholder images and icons with your own business assets
- Use Lucide React or your preferred icon set

## 📁 Project Structure

```
business_landing_page/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main landing page
├── components/
│   ├── Header.tsx           # Navigation and theme switcher
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About/business story
│   ├── Services.tsx         # Services offered
│   ├── Projects.tsx         # Client work/case studies
│   ├── Process.tsx          # How you work
│   ├── Testimonials.tsx     # Client reviews
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` or `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ for modern businesses and freelancers** 