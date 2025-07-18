// Centralized site content config for jane-doe-portfolio

import { User, MapPin, Calendar, Mail, Phone, Globe, Code, Database, Smartphone, Cloud, Palette, Settings, Github, Linkedin, ExternalLink, ShieldCheck, Zap, Terminal } from 'lucide-react'

export const headerSection = {
  logo: "Jane Doe",
  navItems: [
    {
      name: "Home",
      href: "#home"
    },
    {
      name: "About",
      href: "#about"
    },
    {
      name: "Skills",
      href: "#skills"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Experience",
      href: "#experience"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ]
};

export const footerSection = {
  brand: {
    name: "Jane Doe",
    description: "Bold & Interactive UI/UX Design for Web & Mobile",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/yourusername"
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yourusername/"
      },
      {
        name: "Website",
        url: "https://yourwebsite.com"
      }
    ]
  },
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
      name: "Skills",
      href: "#skills"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Experience",
      href: "#experience"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ],
  contactInfo: [ "jane@janedesign.com", "San Francisco, CA" ],
  copyright: {
    year: 2025,
    name: "Jane Doe",
    madeWith: "Made with",
    love: "and lots of coffee."
  },
  backToTop: "Back to top"
};

export const heroSection = {
  greeting: "Hello, I'm",
  name: "Jane Doe",
  title: "Freelance UI/UX Designer",
  description: "I'm a freelance UI/UX designer based in San Francisco, specializing in modern, creative web and mobile app design.",
  ctas: [
    {
      label: "View My Work",
      action: "scroll",
      target: "projects",
      icon: null,
      style: "primary"
    },
    {
      label: "Get In Touch",
      action: "scroll",
      target: "contact",
      icon: "Mail",
      style: "secondary"
    }
  ],
  stats: [
    {
      value: "X+",
      label: "Years Experience"
    },
    {
      value: "X",
      label: "Projects Completed"
    },
    {
      value: "X",
      label: "Happy Clients"
    },
    {
      value: "100%",
      label: "Commitment to Quality"
    }
  ],
  scrollIndicator: {
    target: "about"
  }
};

export const aboutSection = {
  heading: "About Me",
  subheading: "Freelance UI/UX designer specializing in web and mobile app design",
  personalInfo: [
    {
      icon: "User",
      label: "Name",
      value: "Jane Doe"
    },
    {
      icon: "MapPin",
      label: "Location",
      value: "San Francisco, CA"
    },
    {
      icon: "Calendar",
      label: "Born",
      value: "YYYY"
    },
    {
      icon: "Mail",
      label: "Email",
      value: "jane@janedesign.com",
      link: "mailto:jane@janedesign.com"
    },
    {
      icon: "Github",
      label: "GitHub",
      link: "https://github.com/yourusername"
    },
    {
      icon: "Linkedin",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/yourusername/"
    },
    {
      icon: "Globe",
      label: "Website",
      link: "https://yourwebsite.com"
    }
  ],
  profileImage: {
    src: "",
    alt: "Profile Image"
  },
  profileBadge: "X+",
  whoIAm: {
    heading: "Who I Am",
    paragraphs: [ "Write a few sentences about your background, what got you into your field, and what motivates you.", "Share your approach, your values, or what makes you unique as a professional.", "Let visitors know what you can help them with and why they should work with you." ]
  },
  whatIDo: {
    heading: "What I Do",
    skills: [
      {
        title: "UI Design",
        description: "Figma, Sketch, Adobe XD, Wireframing, Visual Design"
      },
      {
        title: "UX Research",
        description: "User Interviews, Personas, User Flows, Usability Testing"
      },
      {
        title: "Interaction Design",
        description: "Prototyping, Wireframing, Micro-interactions"
      },
      {
        title: "Mobile & Web Design",
        description: "Responsive Design, Design Systems, Accessibility"
      }
    ]
  },
  downloadCV: {
    label: "Download CV",
    icon: "User",
    href: "/cv.pdf"
  }
};

export const skillsSection = {
  heading: "My Skills",
  subheading: "A summary of my design skills and expertise",
  skillCategories: [
    {
      icon: "Edit",
      title: "UI Design",
      skills: [
        {
          name: "Figma",
          level: 90
        },
        {
          name: "Sketch",
          level: 80
        },
        {
          name: "Adobe XD",
          level: 85
        },
        {
          name: "Visual Design",
          level: 90
        },
        {
          name: "Design Systems",
          level: 80
        }
      ]
    },
    {
      icon: "Users",
      title: "UX Research",
      skills: [
        {
          name: "User Interviews",
          level: 90
        },
        {
          name: "Usability Testing",
          level: 85
        },
        {
          name: "Personas",
          level: 80
        },
        {
          name: "User Flows",
          level: 85
        }
      ]
    },
    {
      icon: "Smartphone",
      title: "Interaction Design",
      skills: [
        {
          name: "Prototyping",
          level: 90
        },
        {
          name: "Wireframing",
          level: 85
        },
        {
          name: "Micro-interactions",
          level: 80
        },
        {
          name: "Responsive Design",
          level: 85
        }
      ]
    }
  ],
  additionalSkills: [ "Accessibility", "Typography", "User Research", "Design Systems", "Animation", "Illustration" ]
};

export const experienceSection = {
  heading: "Work Experience",
  subheading: "Your professional journey and educational background",
  workExperience: [
    {
      id: 1,
      title: "Job Title",
      company: "Company Name",
      location: "Location",
      period: "Start – End",
      description: "Describe your responsibilities, achievements, and tools used in this role.",
      technologies: [ "Tool 1", "Tool 2", "Tool 3" ],
      achievements: [ "Achievement or responsibility #1", "Achievement or responsibility #2", "Achievement or responsibility #3" ]
    },
    {
      id: 2,
      title: "Job Title",
      company: "Company Name",
      location: "Location",
      period: "Start – End",
      description: "Describe your responsibilities, achievements, and tools used in this role.",
      technologies: [ "Tool 1", "Tool 2", "Tool 3" ],
      achievements: [ "Achievement or responsibility #1", "Achievement or responsibility #2", "Achievement or responsibility #3" ]
    }
  ],
  education: [
    {
      id: 1,
      degree: "Degree",
      school: "School Name",
      location: "Location",
      period: "Start – End",
      description: "Describe your studies, focus areas, and any honors or awards."
    }
  ]
};

export const projectsSection = {
  heading: "Featured Projects",
  subheading: "Showcase your best work and what you can do",
  filters: [
    {
      id: "all",
      label: "All"
    },
    {
      id: "web",
      label: "Web Design"
    },
    {
      id: "mobile",
      label: "Mobile Design"
    },
    {
      id: "uiux",
      label: "UI/UX"
    },
    {
      id: "case",
      label: "Case Studies"
    }
  ],
  projects: [
    {
      id: 1,
      title: "Mobile App Redesign",
      description: "UI/UX redesign of a mobile productivity app, improving usability and visual appeal.",
      image: "https://images.unsplash.com/photo-1564865875360-39fbc05a98a1?w=500&h=300&fit=crop",
      liveUrl: "https://example.com/mobile-app-redesign",
      githubUrl: "",
      fiverrUrl: "",
      technologies: [ "Figma", "Sketch", "Adobe XD" ],
      category: "mobile",
      featured: true
    }
  ]
};

export const contactSection = {
  heading: "Get in Touch",
  subheading: "Ready to work together or have questions? Reach out!",
  connectHeading: "Let's Connect",
  connectText: "I'm always open to discussing new design projects, collaborations, or just a chat about UI/UX.",
  sendMessageHeading: "Send a Message",
  info: [
    {
      icon: "Mail",
      title: "Email",
      value: "jane@janedesign.com",
      link: "mailto:jane@janedesign.com"
    },
    {
      icon: "Phone",
      title: "Phone",
      value: "123-456-7890",
      link: "tel:1234567890"
    },
    {
      icon: "Globe",
      title: "Website",
      value: "janedesign.com",
      link: "https://janedesign.com"
    }
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      color: "hover:bg-gray-800"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yourusername/",
      color: "hover:bg-blue-600"
    },
    {
      name: "Website",
      url: "https://yourwebsite.com",
      color: "hover:bg-green-600"
    }
  ],
  formFields: [
    {
      label: "Your Name",
      name: "name",
      type: "text"
    },
    {
      label: "Your Email",
      name: "email",
      type: "email"
    },
    {
      label: "Subject",
      name: "subject",
      type: "text"
    },
    {
      label: "Your Message",
      name: "message",
      type: "textarea"
    }
  ],
  form: {
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    messageLabel: "Your Message",
    submitText: "Send Message",
    successTitle: "Message Sent!",
    successText: "Thank you for reaching out. I will get back to you soon."
  },
  sentMessage: {
    heading: "Message Sent Successfully!",
    text: "Thank you for reaching out. I will get back to you as soon as possible."
  }
};

export const socialLinks = [
  {
    icon: "Github",
    label: "GitHub",
    link: "https://github.com/yourusername"
  },
  {
    icon: "Linkedin",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/yourusername/"
  },
  {
    icon: "ExternalLink",
    label: "Website",
    link: "https://yourwebsite.com"
  }
];
