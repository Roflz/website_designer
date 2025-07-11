// Centralized site content config for portfolio_website

import { User, MapPin, Calendar, Mail, Phone, Globe, Code, Database, Smartphone, Cloud, Palette, Settings, Github, Linkedin, ExternalLink, ShieldCheck, Zap, Terminal } from 'lucide-react'

export const headerSection = {
  logo: 'Your Logo',
  navItems: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
}

export const footerSection = {
  brand: {
    name: 'Your Name',
    description: 'A short description or tagline for your portfolio.',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/yourusername' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername/' },
      { name: 'Website', url: 'https://yourwebsite.com' },
    ]
  },
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
  contactInfo: [
    'your@email.com',
    'Your Location'
  ],
  copyright: {
    year: new Date().getFullYear(),
    name: 'Your Name',
    madeWith: 'Made with',
    love: 'and lots of coffee.'
  },
  backToTop: 'Back to top',
}

export const heroSection = {
  greeting: "Hello, I'm",
  name: "Your Name",
  title: "Your Professional Title or Tagline",
  description: `Write a short summary about yourself, your skills, and what you offer. This is your chance to make a great first impression!`,
  ctas: [
    { label: 'View My Work', action: 'scroll', target: 'projects', icon: null, style: 'primary' },
    { label: 'Get In Touch', action: 'scroll', target: 'contact', icon: Mail, style: 'secondary' },
    { label: 'Download CV', action: 'download', target: '/cv.pdf', icon: null, style: 'secondary' },
  ],
  stats: [
    { value: 'X+', label: 'Years Experience' },
    { value: 'X', label: 'Projects Completed' },
    { value: 'X', label: 'Happy Clients' },
    { value: '100%', label: 'Commitment to Quality' },
  ],
  scrollIndicator: { target: 'about' },
}

export const aboutSection = {
  heading: 'About Me',
  subheading: 'A short introduction about yourself and your journey',
  personalInfo: [
    { icon: User, label: 'Name', value: 'Your Name' },
    { icon: MapPin, label: 'Location', value: 'Your Location' },
    { icon: Calendar, label: 'Born', value: 'YYYY' },
    { icon: Mail, label: 'Email', value: 'your@email.com', link: 'mailto:your@email.com' },
    { icon: Github, label: 'GitHub', link: 'https://github.com/yourusername' },
    { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/yourusername/' },
    { icon: Globe, label: 'Website', link: 'https://yourwebsite.com' },
  ],
  profileImage: {
    src: '',
    alt: 'Profile Image',
  },
  profileBadge: 'X+',
  whoIAm: {
    heading: 'Who I Am',
    paragraphs: [
      `Write a few sentences about your background, what got you into your field, and what motivates you.`,
      `Share your approach, your values, or what makes you unique as a professional.`,
      `Let visitors know what you can help them with and why they should work with you.`,
    ],
  },
  whatIDo: {
    heading: 'What I Do',
    skills: [
      { title: 'Frontend Development', description: 'React, TypeScript, Next.js, Tailwind CSS, HTML/CSS' },
      { title: 'Backend Development', description: 'Node.js, Python, Databases, API Design' },
      { title: 'DevOps & Cloud', description: 'Docker, AWS, CI/CD, Linux' },
      { title: 'Other Skills', description: 'List any other relevant skills here' },
    ],
  },
  downloadCV: { label: 'Download CV', icon: User, href: '/cv.pdf' },
}

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
    ]
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 85 },
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 75 },
      { name: 'Git', level: 95 },
      { name: 'CI/CD', level: 90 },
      { name: 'Linux', level: 80 },
      { name: 'Nginx', level: 70 },
    ]
  },
  {
    icon: Zap,
    title: 'Automation & ML',
    skills: [
      { name: 'Workflow Automation', level: 80 },
      { name: 'Machine Learning', level: 75 },
      { name: 'OpenCV', level: 70 },
      { name: 'scikit-learn', level: 70 },
      { name: 'Pandas', level: 80 },
      { name: 'NumPy', level: 80 },
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Software Testing',
    skills: [
      { name: 'Test Automation', level: 85 },
      { name: 'Unit Testing', level: 80 },
      { name: 'Integration Testing', level: 80 },
      { name: 'Manual QA', level: 70 },
      { name: 'Requirements-Based Verification', level: 75 },
    ]
  },
  {
    icon: Terminal,
    title: 'Languages',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C#', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 85 },
      { name: 'Bash', level: 70 },
    ]
  }
];

skillCategories.forEach(cat => cat.skills.sort((a, b) => b.level - a.level));

export const skillsSection = {
  heading: 'My Skills',
  subheading: 'A summary of your technical skills and expertise',
  skillCategories,
  additionalSkills: [
    'GitHub Actions', 'Jenkins', 'Terraform', 'Jupyter', 'Matplotlib', 'Flask', 'Selenium', 'VS Code', 'Postman', 'JSON/YAML', 'Regular Expressions'
  ],
}

export const experienceSection = {
  heading: 'Work Experience',
  subheading: 'Your professional journey and educational background',
  workExperience: [
    {
      id: 1,
      title: 'Job Title',
      company: 'Company Name',
      location: 'Location',
      period: 'Start – End',
      description: 'Describe your responsibilities, achievements, and technologies used in this role.',
      technologies: ['Tech1', 'Tech2', 'Tech3'],
      achievements: [
        'Achievement or responsibility #1',
        'Achievement or responsibility #2',
        'Achievement or responsibility #3',
      ]
    },
    {
      id: 2,
      title: 'Job Title',
      company: 'Company Name',
      location: 'Location',
      period: 'Start – End',
      description: 'Describe your responsibilities, achievements, and technologies used in this role.',
      technologies: ['Tech1', 'Tech2', 'Tech3'],
      achievements: [
        'Achievement or responsibility #1',
        'Achievement or responsibility #2',
        'Achievement or responsibility #3',
      ]
    },
  ],
  education: [
    {
      id: 1,
      degree: 'Degree',
      school: 'School Name',
      location: 'Location',
      period: 'Start – End',
      description: 'Describe your studies, focus areas, and any honors or awards.',
    },
  ],
}

export const projectsSection = {
  heading: 'Featured Projects',
  subheading: 'Showcase your best work and what you can do',
  filters: [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'automation', label: 'Automation' },
    { id: 'ml', label: 'Machine Learning' },
  ],
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with user authentication, shopping cart, and payment integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      fiverrUrl: 'https://www.fiverr.com/yourusername/ecommerce-development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      category: 'web',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management app with real-time updates and drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      liveUrl: 'https://example-taskapp.com',
      githubUrl: 'https://github.com/yourusername/task-management-app',
      fiverrUrl: 'https://www.fiverr.com/yourusername/web-app-development',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Vuetify', 'PWA'],
      category: 'web',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with interactive maps and location-based forecasts.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop',
      liveUrl: 'https://example-weather.com',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      fiverrUrl: 'https://www.fiverr.com/yourusername/api-integration',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      category: 'web',
      featured: false,
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      description: 'Cross-platform mobile app for fitness tracking with workout planning and progress monitoring.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      liveUrl: 'https://example-fitness.com',
      githubUrl: 'https://github.com/yourusername/fitness-tracker',
      fiverrUrl: 'https://www.fiverr.com/yourusername/mobile-app-development',
      technologies: ['React Native', 'Redux', 'Firebase', 'Expo', 'HealthKit'],
      category: 'mobile',
      featured: true,
    },
    {
      id: 5,
      title: 'Data Processing Automation',
      description: 'Automated data processing pipeline for large datasets with ETL operations and reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      liveUrl: 'https://github.com/yourusername/data-automation',
      githubUrl: 'https://github.com/yourusername/data-automation',
      fiverrUrl: 'https://www.fiverr.com/yourusername/automation-scripts',
      technologies: ['Python', 'Pandas', 'Apache Airflow', 'PostgreSQL', 'Docker'],
      category: 'automation',
      featured: false,
    },
    {
      id: 6,
      title: 'Machine Learning Model',
      description: 'ML model for predictive analytics with real-time processing and automated retraining.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      liveUrl: 'https://example-ml-demo.com',
      githubUrl: 'https://github.com/yourusername/ml-predictive-model',
      fiverrUrl: 'https://www.fiverr.com/yourusername/ml-development',
      technologies: ['Python', 'scikit-learn', 'TensorFlow', 'Flask', 'AWS SageMaker'],
      category: 'ml',
      featured: false,
    },
  ],
}

export const contactSection = {
  heading: 'Get in Touch',
  subheading: 'Ready to work together or have questions? Reach out!',
  connectHeading: 'Let\'s Connect',
  connectText: 'I\'m always open to discussing new opportunities, interesting projects, or just having a chat about technology.',
  sendMessageHeading: 'Send a Message',
  info: [
    { icon: Mail, title: 'Email', value: 'your@email.com', link: 'mailto:your@email.com' },
    { icon: Phone, title: 'Phone', value: '123-456-7890', link: 'tel:1234567890' },
    { icon: Globe, title: 'Website', value: 'yourwebsite.com', link: 'https://yourwebsite.com' },
  ],
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/yourusername', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername/', color: 'hover:bg-blue-600' },
    { name: 'Website', url: 'https://yourwebsite.com', color: 'hover:bg-green-600' },
  ],
  formFields: [
    { label: 'Your Name', name: 'name', type: 'text' },
    { label: 'Your Email', name: 'email', type: 'email' },
    { label: 'Subject', name: 'subject', type: 'text' },
    { label: 'Your Message', name: 'message', type: 'textarea' },
  ],
  form: {
    nameLabel: 'Your Name',
    emailLabel: 'Your Email',
    messageLabel: 'Your Message',
    submitText: 'Send Message',
    successTitle: 'Message Sent!',
    successText: 'Thank you for reaching out. I will get back to you soon.',
  },
  sentMessage: {
    heading: 'Message Sent Successfully!',
    text: 'Thank you for reaching out. I will get back to you as soon as possible.',
  },
}

export const socialLinks = [
  { icon: Github, label: 'GitHub', link: 'https://github.com/yourusername' },
  { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/yourusername/' },
  { icon: ExternalLink, label: 'Website', link: 'https://yourwebsite.com' },
] 