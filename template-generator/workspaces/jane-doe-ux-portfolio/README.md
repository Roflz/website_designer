# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases software development skills, projects, and professional experience with beautiful animations and a clean design.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Built with Next.js for excellent SEO performance
- **TypeScript**: Full TypeScript support for better development experience
- **Animations**: Smooth scroll animations using Framer Motion
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Filterable project gallery with detailed information

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
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
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Customization

### Personal Information
Update the following files with your personal information:

1. **`app/layout.tsx`** - Update metadata (title, description, etc.)
2. **`components/Hero.tsx`** - Update name, title, and description
3. **`components/About.tsx`** - Update personal information and bio
4. **`components/Skills.tsx`** - Update skills and proficiency levels
5. **`components/Projects.tsx`** - Add your projects with images and links
6. **`components/Experience.tsx`** - Update work experience and education
7. **`components/Contact.tsx`** - Update contact information and social links

### Styling
- **Colors**: Update the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in `tailwind.config.js` and `app/globals.css`
- **Animations**: Modify animations in `tailwind.config.js`

### Images
- Replace placeholder images with your own project screenshots
- Update profile image in the About section
- Ensure all images are optimized for web

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section
│   ├── Projects.tsx         # Projects showcase
│   ├── Experience.tsx       # Work experience and education
│   ├── Contact.tsx          # Contact form and information
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Sections

### Hero Section
- Animated introduction with your name and title
- Call-to-action buttons
- Professional statistics
- Smooth scroll indicator

### About Section
- Personal information card
- Professional bio
- Skills overview
- Download CV button

### Skills Section
- Categorized skills with progress bars
- Additional technologies grid
- Animated skill levels

### Projects Section
- Filterable project gallery
- Project images with hover effects
- Technology tags
- Live demo and code links

### Experience Section
- Timeline of work experience
- Educational background
- Professional certifications
- Key achievements

### Contact Section
- Functional contact form
- Contact information cards
- Social media links
- Form validation and submission

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed to any platform that supports Next.js static exports.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or contact me.

---

**Made with ❤️ and lots of coffee**
