// site.config.ts
// =============================
// Edit the text, links, and images below to customize your site content!
// =============================

export const heroContent = {
  // Main headline for the hero section
  headline: "Grow Your Business with Professional Digital Solutions",
  // Subheadline text
  subheadline: "Modern websites, branding, and digital services to help your business stand out and succeed online.",
  // Text for the main call-to-action button
  ctaText: "Get a Free Quote",
  // Link for the CTA button
  ctaLink: "#contact",
  // Hero image with effects (full-width background)
  image: {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    alt: "Mountain landscape at sunrise",
    overlay: "gradient",
    overlayColor: "from-black/70 via-transparent to-primary/60",
    shadow: undefined, // No shadow for background
    rounded: undefined, // No rounding for background
    zoomOnHover: false,
    blurBackground: false,
    aspectRatio: "21/9", // Cinematic wide
    className: "h-[60vh] md:h-[70vh] w-full object-cover object-center"
  }
};

export const aboutContent = {
  // Title for the about section
  title: "About Our Business",
  // Main about text
  text: "Delivering quality digital solutions to help your business grow.",
  // About image with effects
  image: {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    alt: "Team working together",
    overlay: "gradient",
    overlayColor: "from-primary/60 to-secondary/40",
    shadow: "2xl",
    rounded: "full",
    zoomOnHover: true,
    blurBackground: false,
    aspectRatio: "1/1",
    className: "w-80 h-80 mx-auto object-cover object-center"
  },
  highlights: [
    {
      icon: "Award",
      title: "Professional Team",
      subtitle: "Experienced"
    },
    {
      icon: "Globe",
      title: "Clients Worldwide",
      subtitle: "Global Reach"
    },
    {
      icon: "Briefcase",
      title: "Reliable Support",
      subtitle: "Fast Turnaround"
    },
    {
      icon: "Award",
      title: "Client Satisfaction",
      subtitle: "5-Star Rated"
    }
  ],
  mission: {
    title: "Our Mission",
    text: "Our mission is to empower businesses with modern, effective digital solutions that drive real results. We believe in building long-term partnerships and delivering measurable value to every client."
  },
  companyInfo: [
    { icon: "Briefcase", text: "Serving clients worldwide since 2020" },
    { icon: "Globe", text: "Remote & Flexible" },
    { icon: "Award", text: "100+ Projects Delivered" }
  ],
  cta: {
    text: "Get Started",
    icon: "Briefcase",
    link: "#contact"
  }
};

export const servicesContent = {
  title: "Our Services",
  subtitle: "Solutions to help your business grow and succeed.",
  services: [
    {
      icon: "Code",
      title: "Website Design & Development",
      description: "Modern, responsive websites tailored to your business needs."
    },
    {
      icon: "PenTool",
      title: "Branding & Logo Design",
      description: "Professional branding and logo creation to make your business stand out."
    },
    {
      icon: "ShoppingCart",
      title: "E-Commerce Solutions",
      description: "Online stores with secure payments and easy management."
    },
    {
      icon: "TrendingUp",
      title: "SEO & Digital Marketing",
      description: "Boost your online presence and attract more customers."
    },
    {
      icon: "FileText",
      title: "Content Creation",
      description: "Engaging copy, blog posts, and marketing materials."
    },
    {
      icon: "LifeBuoy",
      title: "Ongoing Support & Maintenance",
      description: "Reliable updates, troubleshooting, and technical support."
    }
  ],
  cta: {
    text: "Get a Free Quote",
    link: "#contact"
  }
}

export const projectsContent = {
  title: "Recent Client Work",
  subtitle: "Real results for real businesses—see how we help clients succeed.",
  filters: [
    { id: "all", label: "All Work" },
    { id: "web", label: "Websites" },
    { id: "branding", label: "Branding" },
    { id: "seo", label: "SEO" },
    { id: "content", label: "Content" },
    { id: "support", label: "Support" }
  ],
  caseStudies: [
    {
      id: "1",
      title: "Website Redesign for Local Bakery",
      description: "Transformed an outdated site into a modern, mobile-friendly experience, increasing online orders by 40%.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      category: "web",
      results: "Online orders up 40%"
    },
    {
      id: "2",
      title: "E-Commerce Launch for Retailer",
      description: "Built a custom online store with secure payments and inventory management.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      category: "web",
      results: "Launched in 2 weeks"
    },
    {
      id: "3",
      title: "Branding & Logo for Startup",
      description: "Developed a unique brand identity and logo, helping the client stand out in a crowded market.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
      category: "branding",
      results: "Brand recognition boost"
    },
    {
      id: "4",
      title: "SEO Boost for Consultant",
      description: "Implemented SEO best practices, resulting in a 3x increase in organic traffic.",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      category: "seo",
      results: "3x organic traffic"
    },
    {
      id: "5",
      title: "Content Strategy for Agency",
      description: "Created a content plan and blog series that increased leads by 25%.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", // Modern office/agency
      category: "content",
      results: "Leads up 25%"
    },
    {
      id: "6",
      title: "Ongoing Support for SaaS",
      description: "Provided reliable updates, troubleshooting, and technical support, ensuring 99.9% uptime.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      category: "support",
      results: "99.9% uptime"
    }
  ],
  cta: {
    text: "Start Your Project",
    icon: "Eye",
    link: "#contact"
  }
}

export const processContent = {
  title: "Our Process",
  subtitle: "A simple, transparent workflow for every project.",
  steps: [
    {
      icon: "Search",
      title: "Discovery & Consultation",
      description: "We discuss your goals and requirements to understand your business needs."
    },
    {
      icon: "ClipboardList",
      title: "Planning & Strategy",
      description: "We create a tailored plan and timeline for your project."
    },
    {
      icon: "Layout",
      title: "Design & Development",
      description: "We bring your vision to life with modern design and robust development."
    },
    {
      icon: "MessageCircle",
      title: "Review & Feedback",
      description: "You review the work and provide feedback for revisions."
    },
    {
      icon: "Rocket",
      title: "Launch & Support",
      description: "We launch your project and provide ongoing support as needed."
    }
  ]
}

export const testimonialsContent = {
  title: "What Clients Say",
  subtitle: "Real feedback from real businesses—see how we deliver results and build lasting partnerships.",
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Owner",
      company: "Sweet Treats Bakery",
      quote: "The new website brought in so many new customers! The process was smooth and the results exceeded my expectations."
    },
    {
      name: "David Lee",
      role: "Founder",
      company: "RetailPro",
      quote: "Our online store was up and running in no time. Professional, reliable, and always available for support."
    },
    {
      name: "Emily Chen",
      role: "Marketing Director",
      company: "BrightStart Agency",
      quote: "The branding and content strategy helped us stand out and attract more leads. Highly recommended!"
    }
  ]
}

export const contactContent = {
  title: "Request a Free Quote",
  subtitle: "Ready to start your project or have questions? Fill out the form and we'll get back to you promptly.",
  infoTitle: "Let's Work Together",
  infoText: "We're here to help your business grow. Reach out for a free consultation or quote—no obligation!",
  contactInfo: [
    {
      icon: "Mail",
      title: "Email",
      value: "business@email.com",
      link: "mailto:business@email.com"
    },
    {
      icon: "Phone",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "MapPin",
      title: "Location",
      value: "123 Main St, San Francisco, CA",
      link: "https://goo.gl/maps/example"
    },
    {
      icon: "Clock",
      title: "Business Hours",
      value: "Mon-Fri: 9am – 6pm",
      link: "#"
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
  }
}

export const footerContent = {
  businessName: "Your Business Name",
  tagline: "Professional digital solutions for modern businesses. Let's build your success together.",
  social: [
    { name: "LinkedIn", url: "https://linkedin.com/company/yourbusiness" },
    { name: "Facebook", url: "https://facebook.com/yourbusiness" },
    { name: "Twitter", url: "https://twitter.com/yourbusiness" }
  ],
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Client Work", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ],
  contact: [
    "business@email.com",
    "+1 (555) 123-4567",
    "123 Main St, San Francisco, CA",
    "Mon-Fri: 9am – 6pm"
  ],
  copyright: "Your Business Name. Made with love by Your Business Team."
}

export const headerContent = {
  businessName: "Your Business Name",
  navItems: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Client Work", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" }
  ]
}

// Add more sections as needed, following the same pattern! 