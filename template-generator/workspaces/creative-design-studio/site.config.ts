// site.config.ts
// =============================
// Edit the text, links, and images below to customize your site content!
// =============================

export const headerContent = {
  businessName: "Creative Design Studio",
  navItems: [
    {
      name: "Home",
      href: "#home",
      label: "Home",
      key: "Home"
    },
    {
      name: "About",
      href: "#about",
      label: "About",
      key: "About"
    },
    {
      name: "Services",
      href: "#services",
      label: "Services",
      key: "Services"
    },
    {
      name: "Portfolio",
      href: "#projects",
      label: "Portfolio",
      key: "Portfolio"
    },
    {
      name: "Process",
      href: "#process",
      label: "Process",
      key: "Process"
    },
    {
      name: "Contact",
      href: "#contact",
      label: "Contact",
      key: "Contact"
    }
  ]
};

export const heroContent = {
  headline: "Modern Branding & Logo Design",
  subheadline: "Clean, minimal visual identities that help small businesses stand out.",
  ctaText: "Get a Free Quote",
  ctaLink: "#contact",
  image: {
    src: "https://example.com/hero-image.jpg",
    alt: "Graphic design showcase",
    overlay: "gradient",
    overlayColor: "from-primary/70 to-secondary/50",
    shadow: null,
    rounded: null,
    zoomOnHover: false,
    blurBackground: false,
    aspectRatio: "21/9",
    className: "h-[60vh] md:h-[70vh] w-full object-cover object-center"
  }
};

export const aboutContent = {
  heading: "About Our Business",
  subheading: "Creative Design Studio is a Portland‑based graphic design firm specializing in branding and logo design for small businesses. We combine modern aesthetics with strategic thinking to deliver standout visual identities.",
  personalInfo: [],
  mission: {
    title: "Our Mission",
    text: "Our mission is to deliver modern, minimal graphic designs that empower small businesses to make a memorable impression."
  },
  highlights: [
    {
      icon: "PenTool",
      title: "Branding Experts",
      subtitle: "Specialized",
      key: 0
    },
    {
      icon: "Layout",
      title: "Logo Design",
      subtitle: "Unique Identities",
      key: 1
    },
    {
      icon: "DeviceMobile",
      title: "Mobile‑Friendly",
      subtitle: "Responsive",
      key: 2
    },
    {
      icon: "Palette",
      title: "Modern Aesthetic",
      subtitle: "Minimal Style",
      key: 3
    }
  ],
  companyInfo: [
    {
      icon: "PenTool",
      text: "Branding & Logo Design Specialists",
      key: 0
    },
    {
      icon: "MapPin",
      text: "Based in Portland, OR",
      key: 1
    },
    {
      icon: "DeviceMobile",
      text: "Mobile‑First Approach",
      key: 2
    }
  ],
  image: {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    alt: "Default about image",
    overlay: "gradient",
    overlayColor: "from-primary/60 to-secondary/40",
    shadow: "2xl",
    rounded: "full",
    zoomOnHover: true,
    blurBackground: false,
    aspectRatio: "1/1",
    className: "w-80 h-80 mx-auto object-cover object-center"
  }
};

export const servicesContent = {
  title: "Our Services",
  subtitle: "Helping your brand stand out with clean, professional design.",
  services: [
    {
      icon: "PenTool",
      title: "Brand Identity",
      description: "Comprehensive branding strategies and visual guidelines.",
      key: 0
    },
    {
      icon: "Layout",
      title: "Logo Design",
      description: "Custom logo creation that captures your brand’s essence.",
      key: 1
    },
    {
      icon: "DeviceMobile",
      title: "Digital Assets",
      description: "Social media graphics, website icons, and digital collateral.",
      key: 2
    },
    {
      icon: "Printer",
      title: "Print Design",
      description: "Business cards, brochures, packaging, and other print materials.",
      key: 3
    },
    {
      icon: "Palette",
      title: "Color & Typography",
      description: "Curated palettes and typography for cohesive brand visuals.",
      key: 4
    },
    {
      icon: "Headset",
      title: "Consultation",
      description: "Expert advice to refine your brand strategy and visuals.",
      key: 5
    }
  ],
  cta: {
    text: "Get a Free Quote",
    link: "#contact"
  }
};

export const projectsContent = {
  title: "Portfolio",
  subtitle: "Selected works showcasing our branding and logo design projects.",
  filters: [
    {
      id: "all",
      label: "All Work",
      key: "All Work"
    },
    {
      id: "branding",
      label: "Branding",
      key: "Branding"
    },
    {
      id: "logo",
      label: "Logos",
      key: "Logos"
    },
    {
      id: "print",
      label: "Print",
      key: "Print"
    },
    {
      id: "digital",
      label: "Digital",
      key: "Digital"
    }
  ],
  caseStudies: [
    {
      id: "1",
      title: "Logo & Identity for Local Café",
      description: "Created a warm, inviting logo and brand palette that boosted customer recognition.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      category: "logo",
      results: "Brand recall up 30%"
    }
  ],
  cta: {
    text: "Start Your Project",
    icon: "Eye",
    link: "#contact"
  }
};

export const processContent = {
  title: "Our Process",
  subtitle: "A clear, step‑by‑step workflow for every project.",
  steps: [
    {
      icon: "Search",
      title: "Discovery",
      description: "We learn about your brand and goals."
    },
    {
      icon: "ClipboardList",
      title: "Concept",
      description: "We develop initial sketches and mood boards."
    },
    {
      icon: "Layout",
      title: "Design",
      description: "We create polished visuals and prototypes."
    },
    {
      icon: "MessageCircle",
      title: "Review",
      description: "You provide feedback and we refine the design."
    },
    {
      icon: "Rocket",
      title: "Delivery",
      description: "We hand off final assets and guidelines."
    }
  ]
};

export const testimonialsContent = {
  title: "What Clients Say",
  subtitle: "Real feedback on our collaborative design process.",
  testimonials: []
};

export const contactContent = {
  title: "Request a Free Quote",
  subtitle: "Ready to elevate your brand? Send us a message and we'll respond promptly.",
  infoTitle: "Let's Talk",
  infoText: "Reach out for a no‑obligation consultation on your design needs.",
  contactInfo: [
    {
      icon: "Mail",
      title: "Email",
      value: "sarah@creativedesignstudio.com",
      link: "mailto:sarah@creativedesignstudio.com",
      key: "sarah@creativedesignstudio.com"
    },
    {
      icon: "Phone",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      key: "+1 (555) 123-4567"
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "Portland, OR",
      link: "https://goo.gl/maps/example",
      key: "Portland, OR"
    },
    {
      icon: "Clock",
      title: "Business Hours",
      value: "Mon‑Fri: 9am – 5pm",
      link: "#",
      key: "Mon‑Fri: 9am – 5pm"
    }
  ],
  map: {
    label: "Our Studio",
    placeholder: "[Google Map Placeholder]"
  },
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    serviceLabel: "Service Needed",
    messageLabel: "Message",
    submitText: "Send Request",
    successTitle: "Request Sent!",
    successText: "Thank you! We'll be in touch soon."
  },
  socialLinks: []
};

export const footerContent = {
  businessName: "Creative Design Studio",
  tagline: "Modern & Minimal Graphic Design Solutions",
  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/yourprofile"
    },
    {
      name: "Behance",
      url: "https://behance.net/yourprofile"
    }
  ],
  quickLinks: [
    {
      name: "Home",
      href: "#home"
    },
    {
      name: "About",
      href: "#about"
    },
    {
      name: "Services",
      href: "#services"
    },
    {
      name: "Portfolio",
      href: "#projects"
    },
    {
      name: "Process",
      href: "#process"
    },
    {
      name: "Contact",
      href: "#contact"
    },
    {
      name: "Privacy Policy",
      href: "#"
    },
    {
      name: "Terms of Service",
      href: "#"
    }
  ],
  contact: [
    "sarah@creativedesignstudio.com",
    "+1 (555) 123-4567",
    "Portland, OR",
    "Mon‑Fri: 9am – 5pm"
  ],
  copyright: "Creative Design Studio. Made with passion.",
  links: []
};
