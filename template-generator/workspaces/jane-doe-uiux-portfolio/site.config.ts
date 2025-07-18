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
    { name: 'Contact', href: '#contact' }]}

export const footerSection = {
  brand: {
    name: 'Your Name',
    description: 'A short description or tagline for your portfolio.',
    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/yourusername' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername/' },
      { name: 'Website', url: 'https://yourwebsite.com' }]
  },
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }],
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
  backToTop: 'Back to top'}

export const heroSection = {
  greeting: "Hello, I'm",
  name: "Your Name",
  title: "Your Professional Title or Tagline",
  description: `Write a short summary about yourself, your skills, and what you offer. This is your chance to make a great first impression!`,
  ctas: [
    { label: 'View My Work', action: 'scroll', target: 'projects', icon: null, style: 'primary' },
    { label: 'Get In Touch', action: 'scroll', target: 'contact', icon: Mail, style: 'secondary' },
    { label: 'Download CV', action: 'download', target: '/cv.pdf', icon: null, style: 'secondary' }],
  stats: [
    { value: 'X+', label: 'Years Experience' },
    { value: 'X', label: 'Projects Completed' },
    { value: 'X', label: 'Happy Clients' },
    { value: '100%', label: 'Commitment to Quality' }],
  scrollIndicator: { target: 'about' }}

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
    { icon: Globe, label: 'Website', link: 'https://yourwebsite.com' }],
  profileImage: {
    src: '',
    alt: 'Profile Image'},
  profileBadge: 'X+',
  whoIAm: {
    heading: 'Who I Am',
    paragraphs: [
      `Write a few sentences about your background, what got you into your field, and what motivates you.`,
      `Share your approach, your values, or what makes you unique as a professional.`,
      `Let visitors know what you can help them with and why they should work with you.`]},
  whatIDo: {
    heading: 'What I Do',
    skills: [
      { title: 'Frontend Development', description: 'React, TypeScript, Next.js, Tailwind CSS, HTML/CSS' },
      { title: 'Backend Development', description: 'Node.js, Python, Databases, API Design' },
      { title: 'DevOps & Cloud', description: 'Docker, AWS, CI/CD, Linux' },
      { title: 'Other Skills', description: 'List any other relevant skills here' }]},
  downloadCV: { label: 'Download CV', icon: User, href: '/cv.pdf' }}

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
      { name: 'JavaScript', level: 90 }]
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
      { name: 'REST APIs', level: 85 }]
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
      { name: 'Nginx', level: 70 }]
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
      { name: 'NumPy', level: 80 }]
  },
  {
    icon: ShieldCheck,
    title: 'Software Testing',
    skills: [
      { name: 'Test Automation', level: 85 },
      { name: 'Unit Testing', level: 80 },
      { name: 'Integration Testing', level: 80 },
      { name: 'Manual QA', level: 70 },
      { name: 'Requirements-Based Verification', level: 75 }]
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
      { name: 'Bash', level: 70 }]
  }
];

skillCategories.forEach(cat => cat.skills.sort((a, b) => b.level - a.level));export const contactSection = {
  heading: 'Get in Touch',
  subheading: 'Ready to work together or have questions? Reach out!',
  connectHeading: 'Let\'s Connect',
  connectText: 'I\'m always open to discussing new opportunities, interesting projects, or just having a chat about technology.',
  sendMessageHeading: 'Send a Message',
  info: [
    { icon: Mail, title: 'Email', value: 'your@email.com', link: 'mailto:your@email.com' },
    { icon: Phone, title: 'Phone', value: '123-456-7890', link: 'tel:1234567890' },
    { icon: Globe, title: 'Website', value: 'yourwebsite.com', link: 'https://yourwebsite.com' }],
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/yourusername', color: 'hover:bg-gray-800' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername/', color: 'hover:bg-blue-600' },
    { name: 'Website', url: 'https://yourwebsite.com', color: 'hover:bg-green-600' }],
  formFields: [
    { label: 'Your Name', name: 'name', type: 'text' },
    { label: 'Your Email', name: 'email', type: 'email' },
    { label: 'Subject', name: 'subject', type: 'text' },
    { label: 'Your Message', name: 'message', type: 'textarea' }],
  form: {
    nameLabel: 'Your Name',
    emailLabel: 'Your Email',
    messageLabel: 'Your Message',
    submitText: 'Send Message',
    successTitle: 'Message Sent!',
    successText: 'Thank you for reaching out. I will get back to you soon.'},
  sentMessage: {
    heading: 'Message Sent Successfully!',
    text: 'Thank you for reaching out. I will get back to you as soon as possible.'}}

export const socialLinks = [
  { icon: Github, label: 'GitHub', link: 'https://github.com/yourusername' },
  { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/yourusername/' },
  { icon: ExternalLink, label: 'Website', link: 'https://yourwebsite.com' }] 