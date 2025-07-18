const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const Handlebars = require('handlebars');

// 1. Add a schema definition for business and portfolio config structures at the top of the file
const businessConfigSchema = {
  headerContent: {
    businessName: 'string',
    navItems: [{ label: 'string', href: 'string' }]
  },
  heroContent: {
    headline: 'string',
    subheadline: 'string',
    ctaText: 'string',
    ctaLink: 'string',
    image: {
      src: 'string',
      alt: 'string',
      overlay: 'string',
      overlayColor: 'string',
      shadow: 'string',
      rounded: 'string',
      zoomOnHover: 'boolean',
      blurBackground: 'boolean',
      aspectRatio: 'string',
      className: 'string'
    }
  },
  aboutContent: {
    title: 'string',
    text: 'string',
    image: {
      src: 'string',
      alt: 'string',
      overlay: 'string',
      overlayColor: 'string',
      shadow: 'string',
      rounded: 'string',
      zoomOnHover: 'boolean',
      blurBackground: 'boolean',
      aspectRatio: 'string',
      className: 'string'
    },
    highlights: [{ icon: 'string', title: 'string', subtitle: 'string' }],
    mission: { title: 'string', text: 'string' },
    companyInfo: [{ icon: 'string', text: 'string' }],
    cta: { text: 'string', icon: 'string', link: 'string' }
  },
  servicesContent: {
    title: 'string',
    subtitle: 'string',
    services: [{ icon: 'string', title: 'string', description: 'string' }],
    cta: { text: 'string', link: 'string' }
  },
  projectsContent: {
    title: 'string',
    subtitle: 'string',
    filters: [{ id: 'string', label: 'string' }],
    caseStudies: [{ id: 'number', title: 'string', category: 'string', image: 'string', description: 'string', technologies: ['string'], liveUrl: 'string', codeUrl: 'string', fiverrUrl: 'string' }],
    cta: { text: 'string', icon: 'string', link: 'string' }
  },
  processContent: {
    title: 'string',
    subtitle: 'string',
    steps: [{ icon: 'string', title: 'string', description: 'string' }]
  },
  testimonialsContent: {
    title: 'string',
    subtitle: 'string',
    testimonials: [{ name: 'string', role: 'string', company: 'string', quote: 'string' }]
  },
  contactContent: {
    title: 'string',
    subtitle: 'string',
    contactInfo: [{ icon: 'string', label: 'string', value: 'string' }],
    socialLinks: [{ icon: 'string', label: 'string', href: 'string' }],
    map: { label: 'string', placeholder: 'string' }
  },
  footerContent: {
    copyright: 'string',
    links: [{ label: 'string', href: 'string' }],
    social: [{ icon: 'string', label: 'string', href: 'string' }]
  }
};

// Replace the old portfolioConfigSchema with the new one matching portfolio_website/site.config.ts
const portfolioConfigSchema = {
  headerSection: {
    logo: 'string',
    navItems: [{ name: 'string', href: 'string' }]
  },
  footerSection: {
    brand: {
      name: 'string',
      description: 'string',
      socialLinks: [{ name: 'string', url: 'string' }]
    },
    quickLinks: [{ name: 'string', href: 'string' }],
    contactInfo: ['string'],
    copyright: {
      year: 'number',
      name: 'string',
      madeWith: 'string',
      love: 'string'
    },
    backToTop: 'string'
  },
  heroSection: {
    greeting: 'string',
    name: 'string',
    title: 'string',
    description: 'string',
    ctas: [{ label: 'string', action: 'string', target: 'string', icon: 'any', style: 'string' }],
    stats: [{ value: 'string', label: 'string' }],
    scrollIndicator: { target: 'string' }
  },
  aboutSection: {
    heading: 'string',
    subheading: 'string',
    personalInfo: [{ icon: 'any', label: 'string', value: 'string', link: 'string' }],
    profileImage: { src: 'string', alt: 'string' },
    profileBadge: 'string',
    whoIAm: { heading: 'string', paragraphs: ['string'] },
    whatIDo: { heading: 'string', skills: [{ title: 'string', description: 'string' }] },
    downloadCV: { label: 'string', icon: 'any', href: 'string' }
  },
  skillsSection: {
    heading: 'string',
    subheading: 'string',
    skillCategories: [{ icon: 'any', title: 'string', skills: [{ name: 'string', level: 'number' }] }],
    additionalSkills: ['string']
  },
  experienceSection: {
    heading: 'string',
    subheading: 'string',
    workExperience: [{ id: 'number', title: 'string', company: 'string', location: 'string', period: 'string', description: 'string', technologies: ['string'], achievements: ['string'] }],
    education: [{ id: 'number', degree: 'string', school: 'string', location: 'string', period: 'string', description: 'string' }]
  },
  projectsSection: {
    heading: 'string',
    subheading: 'string',
    filters: [{ id: 'string', label: 'string' }],
    projects: [{ id: 'number', title: 'string', description: 'string', image: 'string', liveUrl: 'string', githubUrl: 'string', fiverrUrl: 'string', technologies: ['string'], category: 'string', featured: 'boolean' }]
  },
  contactSection: {
    heading: 'string',
    subheading: 'string',
    connectHeading: 'string',
    connectText: 'string',
    sendMessageHeading: 'string',
    info: [{ icon: 'any', title: 'string', value: 'string', link: 'string' }],
    socialLinks: [{ name: 'string', url: 'string', color: 'string' }],
    formFields: [{ label: 'string', name: 'string', type: 'string' }],
    form: { nameLabel: 'string', emailLabel: 'string', messageLabel: 'string', submitText: 'string', successTitle: 'string', successText: 'string' },
    sentMessage: { heading: 'string', text: 'string' }
  },
  socialLinks: [{ icon: 'any', label: 'string', link: 'string' }]
};

// 2. Add a validation function
function validateConfig(config, schema, path = '') {
  for (const key in schema) {
    const expected = schema[key];
    const actual = config[key];
    const currentPath = path ? `${path}.${key}` : key;
    if (Array.isArray(expected)) {
      if (!Array.isArray(actual)) return `Expected array at ${currentPath}`;
      if (expected.length > 0 && actual.length > 0) {
        for (let i = 0; i < actual.length; i++) {
          const err = validateConfig(actual[i], expected[0], `${currentPath}[${i}]`);
          if (err) return err;
        }
      }
    } else if (typeof expected === 'object') {
      if (typeof actual !== 'object' || actual === null) return `Expected object at ${currentPath}`;
      const err = validateConfig(actual, expected, currentPath);
      if (err) return err;
    } else {
      if (typeof actual !== expected) return `Expected ${expected} at ${currentPath}`;
    }
  }
  return null;
}

class TemplateGenerator {
  constructor() {
    this.templates = {
      portfolio: '../portfolio_website',
      business: '../business_landing_page'
    };
  }

  async generateWebsite() {
    console.log(chalk.blue.bold('🎨 Website Template Generator'));
    console.log(chalk.gray('Create custom websites for your Fiverr clients\n'));

    try {
      // Get project details
      const answers = await this.getProjectDetails();
      
      // Select template
      const templateChoice = await this.selectTemplate();
      
      // Get additional customization details
      const customization = await this.getCustomizationDetails(templateChoice);
      
      // Generate project
      await this.createProject(answers, templateChoice, customization);
      
      console.log(chalk.green.bold('\n✅ Website generated successfully!'));
      console.log(chalk.yellow(`📁 Project created in: ${answers.projectName}`));
      console.log(chalk.cyan('🚀 Run "npm run dev" to start development'));
      
    } catch (error) {
      console.error(chalk.red('❌ Error generating website:'), error);
    }
  }

  async getProjectDetails() {
    const questions = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name (kebab-case):',
        validate: (input) => {
          if (!input.match(/^[a-z0-9-]+$/)) {
            return 'Use only lowercase letters, numbers, and hyphens';
          }
          return true;
        }
      },
      {
        type: 'input',
        name: 'clientName',
        message: 'Client name:',
        default: 'Your Client'
      },
      {
        type: 'input',
        name: 'businessName',
        message: 'Business name:',
        default: 'Your Business'
      },
      {
        type: 'input',
        name: 'tagline',
        message: 'Main tagline:',
        default: 'Professional solutions for your business'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Brief description:',
        default: 'We help businesses grow with modern digital solutions'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Contact email:',
        default: 'contact@yourbusiness.com'
      },
      {
        type: 'input',
        name: 'phone',
        message: 'Phone number:',
        default: '+1 (555) 123-4567'
      },
      {
        type: 'list',
        name: 'primaryColor',
        message: 'Primary brand color:',
        choices: [
          { name: 'Blue', value: '#3B82F6' },
          { name: 'Green', value: '#10B981' },
          { name: 'Purple', value: '#8B5CF6' },
          { name: 'Red', value: '#EF4444' },
          { name: 'Orange', value: '#F97316' },
          { name: 'Teal', value: '#14B8A6' }
        ]
      },
      {
        type: 'list',
        name: 'secondaryColor',
        message: 'Secondary brand color:',
        choices: [
          { name: 'Gray', value: '#6B7280' },
          { name: 'Slate', value: '#64748B' },
          { name: 'Zinc', value: '#71717A' },
          { name: 'Neutral', value: '#737373' },
          { name: 'Stone', value: '#78716C' }
        ]
      }
    ];

    return await inquirer.prompt(questions);
  }

  async selectTemplate() {
    const { template } = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Select template type:',
        choices: [
          { name: '📊 Portfolio Website (Professional)', value: 'portfolio' },
          { name: '🏢 Business Landing Page (Conversion-focused)', value: 'business' }
        ]
      }
    ]);

    return template;
  }

  async getCustomizationDetails(templateType) {
    if (templateType === 'portfolio') {
      return await this.getPortfolioCustomization();
    } else {
      return await this.getBusinessCustomization();
    }
  }

  async getPortfolioCustomization() {
    const questions = [
      {
        type: 'input',
        name: 'jobTitle',
        message: 'Job title/role:',
        default: 'Software Developer'
      },
      {
        type: 'input',
        name: 'location',
        message: 'Location:',
        default: 'Denver, Colorado'
      },
      {
        type: 'input',
        name: 'yearsExperience',
        message: 'Years of experience:',
        default: '5+'
      },
      {
        type: 'input',
        name: 'githubUrl',
        message: 'GitHub URL:',
        default: 'https://github.com/yourusername'
      },
      {
        type: 'input',
        name: 'linkedinUrl',
        message: 'LinkedIn URL:',
        default: 'https://linkedin.com/in/yourusername'
      },
      {
        type: 'input',
        name: 'fiverrUrl',
        message: 'Fiverr URL:',
        default: 'https://fiverr.com/yourusername'
      },
      {
        type: 'confirm',
        name: 'includeSkills',
        message: 'Include skills section?',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeExperience',
        message: 'Include work experience section?',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeProjects',
        message: 'Include projects section?',
        default: true
      },
      {
        type: 'confirm',
        name: 'includeEducation',
        message: 'Include education section?',
        default: true
      }
    ];

    return await inquirer.prompt(questions);
  }

  async getBusinessCustomization() {
    const questions = [
      {
        type: 'list',
        name: 'businessType',
        message: 'Business type:',
        choices: [
          { name: 'Agency/Consulting', value: 'agency' },
          { name: 'E-commerce/Retail', value: 'ecommerce' },
          { name: 'SaaS/Software', value: 'saas' },
          { name: 'Restaurant/Food', value: 'restaurant' },
          { name: 'Healthcare/Medical', value: 'healthcare' },
          { name: 'Real Estate', value: 'realestate' },
          { name: 'Fitness/Wellness', value: 'fitness' },
          { name: 'Education/Training', value: 'education' },
          { name: 'Other', value: 'other' }
        ]
      },
      {
        type: 'input',
        name: 'services',
        message: 'Services (comma-separated):',
        default: 'Web Design, Development, SEO'
      },
      {
        type: 'input',
        name: 'targetAudience',
        message: 'Target audience:',
        default: 'Small to medium businesses'
      },
      {
        type: 'confirm',
        name: 'includeTestimonials',
        message: 'Include testimonials section?',
        default: true
      },
      {
        type: 'confirm',
        name: 'includePricing',
        message: 'Include pricing section?',
        default: false
      },
      {
        type: 'confirm',
        name: 'includeTeam',
        message: 'Include team section?',
        default: false
      },
      {
        type: 'confirm',
        name: 'includeBlog',
        message: 'Include blog section?',
        default: false
      }
    ];

    return await inquirer.prompt(questions);
  }

  async createProject(details, templateType, customization) {
    const spinner = ora('Generating website...').start();
    
    try {
      const templatePath = this.templates[templateType];
      const workspacesDir = path.join(__dirname, '../workspaces');
      await fs.ensureDir(workspacesDir);
      const projectPath = path.join(workspacesDir, details.projectName);
      
      // Copy template
      await fs.copy(templatePath, projectPath);
      
      // Update package.json
      await this.updatePackageJson(projectPath, details);
      
      // Update site configuration with full customization
      await this.updateSiteConfig(projectPath, details, templateType, customization);
      
      // Update theme colors
      await this.updateThemeColors(projectPath, details);
      
      // Copy theme-lib to local lib directory
      await this.setupThemeLib(projectPath);
      
      // Install dependencies
      spinner.text = 'Installing dependencies...';
      await this.installDependencies(projectPath);
      
      spinner.succeed('Website generated successfully!');
      
    } catch (error) {
      spinner.fail('Failed to generate website');
      throw error;
    }
  }

  async updatePackageJson(projectPath, details) {
    const packagePath = path.join(projectPath, 'package.json');
    const packageJson = await fs.readJson(packagePath);
    
    packageJson.name = details.projectName;
    packageJson.description = `Custom website for ${details.businessName}`;
    
    await fs.writeJson(packagePath, packageJson, { spaces: 2 });
  }

  async updateSiteConfig(projectPath, details, templateType, customization) {
    const configPath = path.join(projectPath, 'site.config.ts');
    
    if (templateType === 'portfolio') {
      // Always use the new generator logic for portfolio templates
      const configContent = this.generateCompleteSiteConfig(details, templateType, customization);
      await fs.writeFile(configPath, configContent);
    } else {
      // Business fallback logic (if needed)
      if (customization.heroContent) {
        const configContent = this.generateCompleteSiteConfig(details, templateType, customization);
        await fs.writeFile(configPath, configContent);
      } else {
        let configContent = await fs.readFile(configPath, 'utf8');
        configContent = await this.customizeBusinessConfig(configContent, details, customization);
        await fs.writeFile(configPath, configContent);
      }
    }
  }

  generateCompleteSiteConfig(details, templateType, customization) {
    if (templateType === 'portfolio') {
      return this.generatePortfolioConfig(details, customization);
    } else {
      return this.generateBusinessConfig(details, customization);
    }
  }

  generatePortfolioConfig(details, customization) {
    function jsonToJsObject(obj, indent = 0) {
      const pad = '  '.repeat(indent);
      if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        // If array of primitives (string/number/bool), serialize directly
        if (typeof obj[0] !== 'object' || obj[0] === null) {
          return '[ ' + obj.map(item => JSON.stringify(item)).join(', ') + ' ]';
        }
        // Otherwise, array of objects
        return '[\n' + obj.map(item => pad + '  ' + jsonToJsObject(item, indent + 1)).join(',\n') + '\n' + pad + ']';
      } else if (typeof obj === 'object' && obj !== null) {
        const entries = Object.entries(obj).map(([key, value]) => {
          return `${pad}  ${key}: ${jsonToJsObject(value, indent + 1)}`;
        });
        return '{\n' + entries.join(',\n') + '\n' + pad + '}';
      } else if (typeof obj === 'string') {
        return '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
      } else {
        return JSON.stringify(obj);
      }
    }

    // Defensive fix: flatten contactInfo if it is nested (array of arrays)
    let footerSection = customization.footerSection || {};
    if (Array.isArray(footerSection.contactInfo) && Array.isArray(footerSection.contactInfo[0])) {
      footerSection.contactInfo = footerSection.contactInfo.flat();
    }
    // Debug: Print the value and type of contactInfo before validation
    if (footerSection && footerSection.contactInfo) {
      console.log('DEBUG contactInfo:', JSON.stringify(footerSection.contactInfo));
      console.log('DEBUG contactInfo[0]:', JSON.stringify(footerSection.contactInfo[0]));
      console.log('DEBUG typeof contactInfo[0]:', typeof footerSection.contactInfo[0]);
    }
    // Build the config object with all required/optional fields and correct structure
    const configObj = {
      headerSection: customization.headerSection || {},
      footerSection: footerSection,
      heroSection: customization.heroSection || {},
      aboutSection: customization.aboutSection || {},
      skillsSection: customization.skillsSection || {},
      experienceSection: customization.experienceSection || {},
      projectsSection: customization.projectsSection || {},
      contactSection: customization.contactSection || {},
      socialLinks: customization.socialLinks || []
    };
    // Remove validation step; just serialize and export configObj as in business config
    // (No call to validateConfig)

    // Only emit export statements, no top-level code or variable declarations
    return `// Centralized site content config for ${details.projectName}

import { User, MapPin, Calendar, Mail, Phone, Globe, Code, Database, Smartphone, Cloud, Palette, Settings, Github, Linkedin, ExternalLink, ShieldCheck, Zap, Terminal } from 'lucide-react'

export const headerSection = ${jsonToJsObject(configObj.headerSection, 0)};

export const footerSection = ${jsonToJsObject(configObj.footerSection, 0)};

export const heroSection = ${jsonToJsObject(configObj.heroSection, 0)};

export const aboutSection = ${jsonToJsObject(configObj.aboutSection, 0)};

export const skillsSection = ${jsonToJsObject(configObj.skillsSection, 0)};

export const experienceSection = ${jsonToJsObject(configObj.experienceSection, 0)};

export const projectsSection = ${jsonToJsObject(configObj.projectsSection, 0)};

export const contactSection = ${jsonToJsObject(configObj.contactSection, 0)};

export const socialLinks = ${jsonToJsObject(configObj.socialLinks, 0)};
`;
  }

  generateBusinessConfig(details, customization) {
    function jsonToJsObject(obj, indent = 0) {
      const pad = '  '.repeat(indent);
      if (Array.isArray(obj)) {
        if (obj.length === 0) return '[]';
        return '[\n' + obj.map(item => pad + '  ' + jsonToJsObject(item, indent + 1)).join(',\n') + '\n' + pad + ']';
      } else if (typeof obj === 'object' && obj !== null) {
        const entries = Object.entries(obj).map(([key, value]) => {
          return `${pad}  ${key}: ${jsonToJsObject(value, indent + 1)}`;
        });
        return '{\n' + entries.join(',\n') + '\n' + pad + '}';
      } else if (typeof obj === 'string') {
        return '"' + obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
      } else {
        return JSON.stringify(obj);
      }
    }

    // --- PATCH: Use default image object if AI provides a string or nothing ---
    function getImageObject(aiImage, defaultImageObj) {
      if (typeof aiImage === 'object' && aiImage !== null) return aiImage;
      return defaultImageObj;
    }
    
    // Fix project images to use external URLs instead of local files
    function fixProjectImages(projectsContent) {
      if (projectsContent && projectsContent.caseStudies) {
        projectsContent.caseStudies.forEach(project => {
          if (project.image && project.image.startsWith('images/')) {
            // Replace local image paths with external URLs
            if (project.image.includes('office')) {
              project.image = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';
            } else if (project.image.includes('solar')) {
              project.image = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80';
            } else {
              project.image = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
            }
          }
        });
      }
      return projectsContent;
    }
    // Define sensible placeholder image objects (update these as needed)
    // If the AI does not provide a hero image, default to no image (empty src)
    const defaultHeroImage = {
      src: '',
      alt: '',
      overlay: '',
      overlayColor: '',
      shadow: '',
      rounded: '',
      zoomOnHover: false,
      blurBackground: false,
      aspectRatio: '',
      className: ''
    };
    const defaultAboutImage = {
      src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      alt: 'Default about image',
      overlay: 'gradient',
      overlayColor: 'from-primary/60 to-secondary/40',
      shadow: '2xl',
      rounded: 'full',
      zoomOnHover: true,
      blurBackground: false,
      aspectRatio: '1/1',
      className: 'w-80 h-80 mx-auto object-cover object-center'
    };
    // --- END PATCH ---

    // --- MAIN LOGIC: Fill all fields from AI JSON (customization), only use defaults for images if missing ---
    let heroContent = customization.heroContent || {};
    heroContent.image = getImageObject(heroContent.image, defaultHeroImage);
    let aboutContent = customization.aboutContent || {};
    aboutContent.image = getImageObject(aboutContent.image, defaultAboutImage);

    // --- PATCH: Ensure contactContent.form.submitText always exists ---
    let contactContent = customization.contactContent || {};
    if (!contactContent.form) contactContent.form = {};
    if (!contactContent.form.submitText) contactContent.form.submitText = 'Send Message';
    // --- END PATCH ---

    // --- PATCH: Ensure unique keys in arrays ---
    function ensureUniqueKeys(arr, keyName = 'id') {
      if (!Array.isArray(arr)) return arr;
      return arr.map((item, idx) => {
        if (!item[keyName]) {
          // Use label, href, name, or fallback to index
          item[keyName] = item.label || item.href || item.name || item.value || idx;
        }
        return item;
      });
    }
    
    // --- PATCH: Ensure header navItems use 'label' property consistently ---
    if (customization.headerContent && customization.headerContent.navItems) {
      customization.headerContent.navItems = customization.headerContent.navItems.map(item => ({
        ...item,
        label: item.label || item.name || 'Navigation',
        key: item.key || item.label || item.name || 'nav'
      }));
    }
    if (customization.headerContent && customization.headerContent.navItems) {
      customization.headerContent.navItems = ensureUniqueKeys(customization.headerContent.navItems, 'key');
    }
    if (aboutContent.highlights) aboutContent.highlights = ensureUniqueKeys(aboutContent.highlights, 'key');
    if (aboutContent.companyInfo) aboutContent.companyInfo = ensureUniqueKeys(aboutContent.companyInfo, 'key');
    if (customization.servicesContent && customization.servicesContent.services) {
      customization.servicesContent.services = ensureUniqueKeys(customization.servicesContent.services, 'key');
    }
    if (customization.projectsContent && customization.projectsContent.filters) {
      customization.projectsContent.filters = ensureUniqueKeys(customization.projectsContent.filters, 'key');
    }
    if (customization.projectsContent && customization.projectsContent.caseStudies) {
      customization.projectsContent.caseStudies = ensureUniqueKeys(customization.projectsContent.caseStudies, 'id');
    }
    if (customization.testimonialsContent && customization.testimonialsContent.testimonials) {
      customization.testimonialsContent.testimonials = ensureUniqueKeys(customization.testimonialsContent.testimonials, 'key');
    }
    if (contactContent.contactInfo) contactContent.contactInfo = ensureUniqueKeys(contactContent.contactInfo, 'key');
    if (contactContent.socialLinks) contactContent.socialLinks = ensureUniqueKeys(contactContent.socialLinks, 'key');
    // --- END PATCH ---

    // --- PATCH: Ensure all expected arrays are always present ---
    // Footer arrays - ensure complete footerContent structure
    if (!customization.footerContent) customization.footerContent = {};
    if (!customization.footerContent.businessName) customization.footerContent.businessName = details.businessName;
    if (!customization.footerContent.tagline) customization.footerContent.tagline = details.tagline;
    if (!customization.footerContent.copyright) customization.footerContent.copyright = `© ${new Date().getFullYear()} ${details.businessName}. All rights reserved.`;
    if (!customization.footerContent.links) customization.footerContent.links = [];
    if (!customization.footerContent.social) customization.footerContent.social = [];
    if (!customization.footerContent.quickLinks) customization.footerContent.quickLinks = [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" }
    ];
    if (!customization.footerContent.contact) customization.footerContent.contact = [
      details.email,
      details.phone,
      customization.location || "Portland, OR"
    ];
    // Header arrays
    if (!customization.headerContent) customization.headerContent = {};
    if (!customization.headerContent.navItems) customization.headerContent.navItems = [];
    // Contact arrays
    if (!contactContent.contactInfo) contactContent.contactInfo = [];
    if (!contactContent.socialLinks) contactContent.socialLinks = [];
    // About arrays
    if (!aboutContent.highlights) aboutContent.highlights = [];
    if (!aboutContent.companyInfo) aboutContent.companyInfo = [];
    // Services arrays
    if (customization.servicesContent && !customization.servicesContent.services) customization.servicesContent.services = [];
    // Projects arrays
    if (customization.projectsContent && !customization.projectsContent.filters) customization.projectsContent.filters = [];
    if (customization.projectsContent && !customization.projectsContent.caseStudies) customization.projectsContent.caseStudies = [];
    // Testimonials arrays
    if (customization.testimonialsContent && !customization.testimonialsContent.testimonials) customization.testimonialsContent.testimonials = [];
    // Process arrays
    if (customization.processContent && !customization.processContent.steps) customization.processContent.steps = [];
    // --- END PATCH ---

    // Fix project images
    const fixedProjectsContent = fixProjectImages(customization.projectsContent);
    
    const configObj = {
      headerContent: customization.headerContent,
      heroContent,
      aboutContent,
      servicesContent: customization.servicesContent,
      projectsContent: fixedProjectsContent,
      processContent: customization.processContent,
      testimonialsContent: customization.testimonialsContent,
      contactContent,
      footerContent: customization.footerContent
    };
    // --- END MAIN LOGIC ---

    // --- BYPASS VALIDATOR AND REMOVE DEBUG LOG ---
    // (No validation or flooding logs)
    // --- END BYPASS ---

    return `// site.config.ts
// =============================
// Edit the text, links, and images below to customize your site content!
// =============================

export const headerContent = ${jsonToJsObject(configObj.headerContent, 0)};

export const heroContent = ${jsonToJsObject(configObj.heroContent, 0)};

export const aboutContent = ${jsonToJsObject(configObj.aboutContent, 0)};

export const servicesContent = ${jsonToJsObject(configObj.servicesContent, 0)};

export const projectsContent = ${jsonToJsObject(configObj.projectsContent, 0)};

export const processContent = ${jsonToJsObject(configObj.processContent, 0)};

export const testimonialsContent = ${jsonToJsObject(configObj.testimonialsContent, 0)};

export const contactContent = ${jsonToJsObject(configObj.contactContent, 0)};

export const footerContent = ${jsonToJsObject(configObj.footerContent, 0)};
`;
  }

  async customizePortfolioConfig(configContent, details, customization) {
    // Replace basic placeholders with more specific patterns
    const basicReplacements = {
      'Riley Mahn': details.clientName,
      'Generalist Software Developer with a Specialist\'s Mindset': customization.jobTitle,
      'Denver, Colorado': customization.location,
      'mahnriley@gmail.com': details.email,
      'https://github.com/roflz': customization.githubUrl,
      'https://www.linkedin.com/in/rileymahn/': customization.linkedinUrl,
      'https://www.fiverr.com/yourfiverrusername': customization.fiverrUrl
    };

    Object.entries(basicReplacements).forEach(([placeholder, value]) => {
      configContent = configContent.replace(new RegExp(placeholder, 'g'), value);
    });

    // Handle years of experience more carefully to avoid affecting skill levels
    configContent = configContent.replace(
      /value: '5\+'/g, 
      `value: '${customization.yearsExperience}'`
    );

    // Customize sections based on user preferences
    if (!customization.includeSkills) {
      configContent = this.removeSection(configContent, 'skillsSection');
    }
    if (!customization.includeExperience) {
      configContent = this.removeSection(configContent, 'experienceSection');
    }
    if (!customization.includeProjects) {
      configContent = this.removeSection(configContent, 'projectsSection');
    }
    if (!customization.includeEducation) {
      configContent = this.removeSection(configContent, 'education');
    }

    return configContent;
  }

  async customizeBusinessConfig(configContent, details, customization) {
    // Replace basic placeholders
    const basicReplacements = {
      'Your Business': details.businessName,
      'Professional solutions for your business': details.tagline,
      'We help businesses grow with modern digital solutions': details.description,
      'contact@yourbusiness.com': details.email,
      '\\+1 \\(555\\) 123-4567': details.phone
    };

    Object.entries(basicReplacements).forEach(([placeholder, value]) => {
      configContent = configContent.replace(new RegExp(placeholder, 'g'), value);
    });

    // Customize services based on business type
    const services = customization.services.split(',').map(s => s.trim());
    configContent = this.updateServices(configContent, services, customization.businessType);

    // Customize sections based on user preferences
    if (!customization.includeTestimonials) {
      configContent = this.removeSection(configContent, 'testimonialsContent');
    }
    if (!customization.includePricing) {
      configContent = this.removeSection(configContent, 'pricingContent');
    }
    if (!customization.includeTeam) {
      configContent = this.removeSection(configContent, 'teamContent');
    }
    if (!customization.includeBlog) {
      configContent = this.removeSection(configContent, 'blogContent');
    }

    return configContent;
  }

  removeSection(configContent, sectionName) {
    // Find the start of the section
    const sectionStart = configContent.indexOf(`export const ${sectionName} = {`);
    if (sectionStart === -1) return configContent;

    // Find the matching closing brace for the section
    let braceCount = 0;
    let sectionEnd = sectionStart;
    let inString = false;
    let escapeNext = false;
    for (let i = sectionStart; i < configContent.length; i++) {
      const char = configContent[i];
      if (escapeNext) { escapeNext = false; continue; }
      if (char === '\\') { escapeNext = true; continue; }
      if (char === '"' || char === "'" || char === '`') { inString = !inString; continue; }
      if (!inString) {
        if (char === '{') braceCount++;
        else if (char === '}') {
          braceCount--;
          if (braceCount === 0) { sectionEnd = i + 1; break; }
        }
      }
    }
    // Remove the section
    let before = configContent.substring(0, sectionStart);
    let after = configContent.substring(sectionEnd);
    // Remove a trailing comma before or after the section
    before = before.replace(/,?\s*$/, '');
    after = after.replace(/^\s*,?/, '');
    let result = before + after;
    // Clean up double commas, trailing commas in arrays/objects
    result = result.replace(/,\s*,/g, ',');
    result = result.replace(/,\s*([}\]])/g, '$1');
    result = result.replace(/([\[{])\s*,/g, '$1');
    return result;
  }

  updateServices(configContent, services, businessType) {
    // Create service objects based on business type
    const serviceTemplates = {
      agency: [
        { icon: 'Code', title: 'Web Design & Development', description: 'Custom websites and web applications.' },
        { icon: 'PenTool', title: 'Branding & Design', description: 'Professional branding and graphic design.' },
        { icon: 'TrendingUp', title: 'Digital Marketing', description: 'SEO, PPC, and social media marketing.' }
      ],
      ecommerce: [
        { icon: 'ShoppingCart', title: 'E-commerce Solutions', description: 'Online stores and payment processing.' },
        { icon: 'Package', title: 'Inventory Management', description: 'Product catalog and order management.' },
        { icon: 'Truck', title: 'Shipping & Logistics', description: 'Order fulfillment and delivery tracking.' }
      ],
      saas: [
        { icon: 'Cloud', title: 'Software Development', description: 'Custom software and SaaS solutions.' },
        { icon: 'Shield', title: 'Security & Compliance', description: 'Data protection and regulatory compliance.' },
        { icon: 'Zap', title: 'API Integration', description: 'Third-party integrations and automation.' }
      ]
    };

    const template = serviceTemplates[businessType] || serviceTemplates.agency;
    
    // Replace services in config
    const servicesString = template.map(service => 
      `    {
      icon: "${service.icon}",
      title: "${service.title}",
      description: "${service.description}"
    }`
    ).join(',\n');

    const servicesRegex = /services: \[[\s\S]*?\],/;
    const replacement = `services: [
${servicesString}
  ],`;

    return configContent.replace(servicesRegex, replacement);
  }

  // Ensure DEFAULT_PALETTE is exported in lib/palettes.ts
  async setupThemeLib(projectPath) {
    const libPath = path.join(projectPath, 'lib');
    const themeLibPath = path.join(__dirname, '../../theme-lib/src');
    await fs.ensureDir(libPath);
    await fs.copy(themeLibPath, libPath);
    // Patch palettes.ts if needed
    const palettesPath = path.join(libPath, 'palettes.ts');
    if (await fs.pathExists(palettesPath)) {
      let palettesContent = await fs.readFile(palettesPath, 'utf8');
      if (!palettesContent.includes('export const DEFAULT_PALETTE')) {
        palettesContent += '\n\nexport const DEFAULT_PALETTE = { primary: "#2563eb", secondary: "#64748b" };\n';
        await fs.writeFile(palettesPath, palettesContent, 'utf8');
      }
    }
    // Update package.json to use local lib
    const packagePath = path.join(projectPath, 'package.json');
    const packageJson = await fs.readJson(packagePath);
    if (packageJson.dependencies['theme-lib']) {
      packageJson.dependencies['theme-lib'] = 'file:./lib';
    }
    await fs.writeJson(packagePath, packageJson, { spaces: 2 });
    
    // Fix the CSS import path in globals.css
    const globalsCssPath = path.join(projectPath, 'app/globals.css');
    if (await fs.pathExists(globalsCssPath)) {
      let cssContent = await fs.readFile(globalsCssPath, 'utf8');
      cssContent = cssContent.replace(
        /@import 'theme-lib\/src\/theme\.css';/g,
        "@import '../lib/theme.css';"
      );
      await fs.writeFile(globalsCssPath, cssContent, 'utf8');
    }
    
    // Fix the import statements in layout.tsx and Header.tsx to use local lib
    const layoutPath = path.join(projectPath, 'app/layout.tsx');
    if (await fs.pathExists(layoutPath)) {
      let layoutContent = await fs.readFile(layoutPath, 'utf8');
      layoutContent = layoutContent.replace(
        /from 'theme-lib'/g,
        "from '../lib'"
      );
      await fs.writeFile(layoutPath, layoutContent, 'utf8');
    }
    
    const headerPath = path.join(projectPath, 'components/Header.tsx');
    if (await fs.pathExists(headerPath)) {
      let headerContent = await fs.readFile(headerPath, 'utf8');
      headerContent = headerContent.replace(
        /from 'theme-lib'/g,
        "from '../lib'"
      );
      await fs.writeFile(headerPath, headerContent, 'utf8');
    }
    
    // Fix the Tailwind config content paths to point to local lib
    const tailwindConfigPath = path.join(projectPath, 'tailwind.config.js');
    if (await fs.pathExists(tailwindConfigPath)) {
      let tailwindConfig = await fs.readFile(tailwindConfigPath, 'utf8');
      tailwindConfig = tailwindConfig.replace(
        /'\.\.\/theme-lib\/src\/\*\*\/\*\.\{js,ts,jsx,tsx\}'/g,
        "'./lib/**/*.{js,ts,jsx,tsx}'"
      );
      await fs.writeFile(tailwindConfigPath, tailwindConfig, 'utf8');
    }
  }

  async updateThemeColors(projectPath, details) {
    const tailwindConfigPath = path.join(projectPath, 'tailwind.config.js');
    let tailwindConfig = await fs.readFile(tailwindConfigPath, 'utf8');
    
    // Update primary and secondary colors
    tailwindConfig = tailwindConfig.replace(
      /primary: ['"][^'"]*['"]/,
      `primary: '${details.primaryColor}'`
    );
    
    tailwindConfig = tailwindConfig.replace(
      /secondary: ['"][^'"]*['"]/,
      `secondary: '${details.secondaryColor}'`
    );
    
    await fs.writeFile(tailwindConfigPath, tailwindConfig);
  }

  async installDependencies(projectPath) {
    const { exec } = require('child_process');
    const util = require('util');
    const execAsync = util.promisify(exec);
    
    await execAsync('npm install', { cwd: projectPath });
  }
}

// Export for testing
module.exports = { TemplateGenerator };

// Run generator if this file is executed directly
if (require.main === module) {
  const generator = new TemplateGenerator();
  generator.generateWebsite();
} 