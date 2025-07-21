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
  headline: "Elevate Your Brand with Custom Design",
  subheadline: "We create impactful branding and logos tailored to small businesses.",
  ctaText: "View Portfolio",
  ctaLink: "#projects",
  image: {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    alt: "Graphic design tools on desk",
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
  subheading: "At Creative Design Studio, we specialize in creating branding and logo designs that help small businesses stand out and connect with their audience.",
  personalInfo: [],
  mission: {
    title: "Our Mission",
    text: "Our mission is to craft unique visual identities that empower small businesses to connect with their audience and grow their brand."
  },
  highlights: [
    {
      icon: "Award",
      title: "Professional Team",
      subtitle: "Experienced",
      key: 0
    },
    {
      icon: "Globe",
      title: "Small Business Focus",
      subtitle: "Tailored Solutions",
      key: 1
    },
    {
      icon: "Briefcase",
      title: "Reliable Support",
      subtitle: "Fast Turnaround",
      key: 2
    },
    {
      icon: "Award",
      title: "Client Satisfaction",
      subtitle: "5-Star Rated",
      key: 3
    }
  ],
  companyInfo: [
    {
      icon: "Briefcase",
      text: "Serving clients worldwide since 2020",
      key: 0
    },
    {
      icon: "Globe",
      text: "Remote & Flexible",
      key: 1
    },
    {
      icon: "Award",
      text: "100+ Projects Delivered",
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
  subtitle: "Comprehensive design solutions to elevate your brand.",
  services: [
    {
      icon: "PenTool",
      title: "Branding & Logo Design",
      description: "Unique logos and brand identities that resonate with your audience.",
      key: 0
    },
    {
      icon: "FileText",
      title: "Print & Stationery Design",
      description: "Brochures, business cards, and marketing materials with cohesive branding.",
      key: 1
    },
    {
      icon: "Image",
      title: "Digital Graphics & Social Media",
      description: "Engaging graphics and assets for websites and social platforms.",
      key: 2
    },
    {
      icon: "ClipboardList",
      title: "Brand Guidelines",
      description: "Comprehensive brand guidelines to ensure consistency across all channels.",
      key: 3
    },
    {
      icon: "Package",
      title: "Packaging & Label Design",
      description: "Creative packaging designs that stand out on shelves.",
      key: 4
    },
    {
      icon: "Layout",
      title: "UI & Web Design",
      description: "Modern, responsive user interface and website design.",
      key: 5
    }
  ],
  cta: {
    text: "Get a Free Quote",
    link: "#contact"
  }
};

export const projectsContent = {
  title: "Recent Client Work",
  subtitle: "Real results for real businesses—see how we bring brands to life.",
  filters: [
    {
      id: "all",
      label: "All Work",
      key: "All Work"
    },
    {
      id: "web",
      label: "Websites",
      key: "Websites"
    },
    {
      id: "branding",
      label: "Branding",
      key: "Branding"
    },
    {
      id: "seo",
      label: "SEO",
      key: "SEO"
    },
    {
      id: "content",
      label: "Content",
      key: "Content"
    },
    {
      id: "support",
      label: "Support",
      key: "Support"
    }
  ],
  caseStudies: [
    {
      id: "1",
      title: "Logo Design for Local Bakery",
      description: "Created a warm, inviting logo that increased brand recognition by 30%.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      category: "branding",
      results: "Brand recognition up 30%"
    },
    {
      id: "2",
      title: "Brand Identity for Startup",
      description: "Developed a cohesive brand package including logo, colors, and typography.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
      category: "branding",
      results: "Launched in 1 week"
    },
    {
      id: "3",
      title: "Packaging Design for Beverage Company",
      description: "Designed eye-catching labels that boosted shelf appeal.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      category: "content",
      results: "Shelf appeal increased"
    },
    {
      id: "4",
      title: "Social Media Graphics for Retailer",
      description: "Produced a series of branded posts that increased engagement by 50%.",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      category: "content",
      results: "Engagement up 50%"
    },
    {
      id: "5",
      title: "Brand Guidelines for Tech Firm",
      description: "Created a detailed style guide to maintain consistent branding.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      category: "content",
      results: "Consistency across platforms"
    },
    {
      id: "6",
      title: "Stationery Set for Consultancy",
      description: "Designed business cards, letterhead, and envelopes for a professional look.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      category: "content",
      results: "Brand cohesion achieved"
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
  subtitle: "A simple, transparent workflow for every project.",
  steps: [
    {
      icon: "Search",
      title: "Discovery & Consultation",
      description: "We discuss your goals and requirements to understand your brand vision."
    },
    {
      icon: "ClipboardList",
      title: "Planning & Strategy",
      description: "We develop a tailored design plan and timeline for your project."
    },
    {
      icon: "Layout",
      title: "Design & Development",
      description: "We bring your brand to life with creative design and attention to detail."
    },
    {
      icon: "MessageCircle",
      title: "Review & Feedback",
      description: "You review the designs and provide feedback for any revisions."
    },
    {
      icon: "Rocket",
      title: "Delivery & Support",
      description: "We deliver final assets and provide support for implementation as needed."
    }
  ]
};

export const testimonialsContent = {
  title: "What Clients Say",
  subtitle: "Real feedback from real businesses—see how we deliver results and build lasting partnerships.",
  testimonials: [
    {
      name: "Laura Mitchell",
      role: "Owner",
      company: "Sweet Treats Bakery",
      quote: "Sarah captured our brand perfectly—our new logo has been a huge hit with customers!",
      key: "Laura Mitchell"
    },
    {
      name: "Michael Brown",
      role: "Founder",
      company: "RetailPro",
      quote: "The brand package was delivered quickly and looks amazing across all our materials.",
      key: "Michael Brown"
    },
    {
      name: "Emily Chen",
      role: "Marketing Director",
      company: "BrightStart Agency",
      quote: "Creative Design Studio helped us stand out online with cohesive visuals and on-brand assets.",
      key: "Emily Chen"
    }
  ]
};

export const contactContent = {
  title: "Request a Free Quote",
  subtitle: "Ready to start your project or have questions? Fill out the form and we'll get back to you promptly.",
  infoTitle: "Let's Work Together",
  infoText: "We're here to help your business grow. Reach out for a free consultation or quote—no obligation!",
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
      link: "#",
      key: "Portland, OR"
    },
    {
      icon: "Clock",
      title: "Business Hours",
      value: "Mon-Fri: 9am – 6pm",
      link: "#",
      key: "Mon-Fri: 9am – 6pm"
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
    successText: "Thank you for your interest. We'll get back to you soon!"
  },
  socialLinks: []
};

export const footerContent = {
  businessName: "Creative Design Studio",
  tagline: "Modern branding and logo design for small businesses.",
  social: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/creative-design-studio"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/creative-design-studio"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/creative-design-studio"
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
    "Mon-Fri: 9am – 6pm"
  ],
  copyright: "Creative Design Studio. Made with love by Creative Design Studio Team.",
  links: []
};
