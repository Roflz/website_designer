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
      name: "Client Work",
      href: "#projects",
      label: "Client Work",
      key: "Client Work"
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
  headline: "Minimal Design, Maximum Impact",
  subheadline: "Logo and brand identity design for small businesses who want to look professional from day one.",
  ctaText: "Get a Free Quote",
  ctaLink: "#contact",
  image: {
    src: "https://example.com/hero-image.jpg",
    alt: "Abstract branding sketches on a desk",
    overlay: "gradient",
    overlayColor: "from-black/70 via-transparent to-primary/60",
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
  subheading: "Creative Design Studio helps small businesses build lasting first impressions through thoughtful branding.",
  personalInfo: [],
  mission: {
    title: "Our Mission",
    text: "To help small businesses succeed through accessible, high-quality branding that reflects their values and speaks to their customers."
  },
  highlights: [
    {
      icon: "Award",
      title: "100+ Brands Built",
      subtitle: "Across startups and local businesses",
      key: 0
    },
    {
      icon: "Smile",
      title: "Client-Focused",
      subtitle: "Collaborative and transparent",
      key: 1
    },
    {
      icon: "PenTool",
      title: "Design-Driven",
      subtitle: "Modern and minimal",
      key: 2
    },
    {
      icon: "Star",
      title: "5-Star Rated",
      subtitle: "Proven satisfaction",
      key: 3
    }
  ],
  companyInfo: [
    {
      icon: "Briefcase",
      text: "Established in 2019, based in Portland, OR",
      key: 0
    },
    {
      icon: "PenTool",
      text: "Specialized in logo and brand identity design",
      key: 1
    },
    {
      icon: "Globe",
      text: "Serving clients nationwide",
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
  subtitle: "Design solutions tailored to small business growth.",
  services: [
    {
      icon: "PenTool",
      title: "Logo Design",
      description: "Crafted, scalable logo designs built to grow with your business.",
      key: 0
    },
    {
      icon: "Layers",
      title: "Brand Identity",
      description: "Visual systems that include color palette, typography, and brand guidelines.",
      key: 1
    },
    {
      icon: "Image",
      title: "Marketing Materials",
      description: "Designs for business cards, flyers, and social templates aligned with your brand.",
      key: 2
    }
  ],
  cta: {
    text: "Get a Free Quote",
    link: "#contact"
  }
};

export const projectsContent = {
  title: "Recent Client Work",
  subtitle: "Explore our branding and identity projects.",
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
      label: "Logo Design",
      key: "Logo Design"
    },
    {
      id: "print",
      label: "Print",
      key: "Print"
    }
  ],
  caseStudies: [
    {
      id: "1",
      title: "Bloom Boutique Logo",
      description: "Soft, elegant logo for a Portland-based florist that reflects modern femininity.",
      image: "https://images.unsplash.com/photo-1519222970733-f546218fa6d0?auto=format&fit=crop&w=800&q=80",
      category: "logo",
      results: "Improved brand recall and store foot traffic"
    },
    {
      id: "2",
      title: "CraftHaus Branding Kit",
      description: "Full brand system for a local woodcraft business, blending rustic and modern aesthetics.",
      image: "https://images.unsplash.com/photo-1587574293340-ea6a2c01f1c6?auto=format&fit=crop&w=800&q=80",
      category: "branding",
      results: "Unified presence across print and digital"
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
  subtitle: "Simple and collaborative from start to finish.",
  steps: [
    {
      icon: "Search",
      title: "Discovery",
      description: "Understand your business, audience, and goals."
    },
    {
      icon: "Edit3",
      title: "Concepts",
      description: "Sketch and refine initial design directions."
    },
    {
      icon: "Layers",
      title: "Build the System",
      description: "Create the full visual identity and apply it across materials."
    },
    {
      icon: "Package",
      title: "Delivery",
      description: "Provide all files and brand documentation ready for launch."
    }
  ]
};

export const testimonialsContent = {
  title: "What Clients Say",
  subtitle: "Real feedback from real small business owners.",
  testimonials: [
    {
      name: "Nina Feldman",
      role: "Owner",
      company: "Bloom Boutique",
      quote: "The branding Sarah created brought my shop to life. Clients mention the logo all the time!",
      key: "Nina Feldman"
    },
    {
      name: "Ben Carter",
      role: "Founder",
      company: "CraftHaus",
      quote: "Sarah turned vague ideas into a beautiful brand that feels just right. Couldn’t recommend her more.",
      key: "Ben Carter"
    }
  ]
};

export const contactContent = {
  title: "Request a Free Quote",
  subtitle: "Let’s talk about how we can build your brand together.",
  infoTitle: "Let's Work Together",
  infoText: "Whether you're just starting or need a refresh, we’ll help your business look its best.",
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
      value: "Mon–Fri: 9am–5pm",
      link: "#",
      key: "Mon–Fri: 9am–5pm"
    }
  ],
  map: {
    label: "Our Location",
    placeholder: "[Google Map Placeholder]"
  },
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    serviceLabel: "Service Needed",
    messageLabel: "Message",
    submitText: "Send Request",
    successTitle: "Request Sent!",
    successText: "Thanks for reaching out. We’ll respond shortly."
  },
  socialLinks: []
};

export const footerContent = {
  businessName: "Creative Design Studio",
  tagline: "Helping small businesses look big through clean, intentional design.",
  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/sarahjohnson"
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
      name: "Client Work",
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
    "Mon–Fri: 9am–5pm"
  ],
  copyright: "© 2024 Creative Design Studio",
  links: []
};
