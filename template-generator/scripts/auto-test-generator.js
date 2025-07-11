const { TemplateGenerator } = require('./generate.js');
const fs = require('fs-extra');
const path = require('path');

class AutoTestGenerator extends TemplateGenerator {
  constructor() {
    super();
  }

  async generateFromClientInfo(clientInfo) {
    try {
      console.log('🤖 Auto Test Generator');
      console.log('Simulating AI response for testing...\n');
      
      // Simulate AI analysis and generate configuration
      const aiResponse = this.simulateAIResponse(clientInfo);
      
      console.log('📋 Simulated AI Configuration:');
      console.log(`- Project: ${aiResponse.details.projectName}`);
      console.log(`- Client: ${aiResponse.details.clientName}`);
      console.log(`- Template: ${aiResponse.templateType}`);
      console.log(`- Job Title: ${aiResponse.customization.jobTitle}`);
      console.log(`- Location: ${aiResponse.customization.location}`);
      console.log(`- Experience: ${aiResponse.customization.yearsExperience}\n`);

      await this.createProject(
        aiResponse.details, 
        aiResponse.templateType, 
        aiResponse.customization
      );
      
      console.log('✅ Auto-generated website created successfully!');
      console.log(`📁 Project created in: ${aiResponse.details.projectName}`);
      console.log('🚀 Run "npm run dev" to start development');
      
      return aiResponse.details.projectName;
      
    } catch (error) {
      console.error('❌ Failed to generate website:', error.message);
      throw error;
    }
  }

  simulateAIResponse(clientInfo) {
    // Extract basic information
    const projectName = this.generateProjectName(clientInfo.businessName || clientInfo.clientName);
    const clientName = clientInfo.clientName || 'Client';
    const businessName = clientInfo.businessName || clientInfo.clientName || 'Business';
    
    // Determine template type based on client needs
    const templateType = this.determineTemplateType(clientInfo);
    
    // Generate comprehensive content based on client info
    const details = {
      projectName,
      clientName,
      businessName,
      tagline: this.generateTagline(clientInfo),
      description: this.generateDescription(clientInfo),
      email: clientInfo.email || 'contact@example.com',
      phone: clientInfo.phone || '+1 (555) 123-4567',
      primaryColor: this.determinePrimaryColor(clientInfo),
      secondaryColor: this.determineSecondaryColor(clientInfo)
    };

    const customization = {
      // Portfolio-specific fields
      jobTitle: this.generateJobTitle(clientInfo),
      location: this.extractLocation(clientInfo),
      yearsExperience: this.extractExperience(clientInfo),
      githubUrl: this.generateGitHubUrl(clientInfo),
      linkedinUrl: this.generateLinkedInUrl(clientInfo),
      fiverrUrl: this.generateFiverrUrl(clientInfo),
      includeSkills: this.shouldIncludeSkills(clientInfo),
      includeExperience: this.shouldIncludeExperience(clientInfo),
      includeProjects: this.shouldIncludeProjects(clientInfo),
      includeEducation: this.shouldIncludeEducation(clientInfo),
      
      // Business-specific fields
      services: this.generateServices(clientInfo),
      businessType: this.determineBusinessType(clientInfo),
      includeTestimonials: this.shouldIncludeTestimonials(clientInfo),
      includePricing: this.shouldIncludePricing(clientInfo),
      includeTeam: this.shouldIncludeTeam(clientInfo),
      includeBlog: this.shouldIncludeBlog(clientInfo),
      
      // Comprehensive content generation
      heroContent: this.generateHeroContent(clientInfo, templateType),
      aboutContent: this.generateAboutContent(clientInfo, templateType),
      skillsContent: this.generateSkillsContent(clientInfo),
      experienceContent: this.generateExperienceContent(clientInfo),
      projectsContent: this.generateProjectsContent(clientInfo),
      servicesContent: this.generateServicesContent(clientInfo),
      testimonialsContent: this.generateTestimonialsContent(clientInfo),
      processContent: this.generateProcessContent(clientInfo),
      contactContent: this.generateContactContent(clientInfo)
    };

    return { details, templateType, customization };
  }

  generateProjectName(businessName) {
    if (!businessName) return 'client-website';
    return businessName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') + '-website';
  }

  determineTemplateType(clientInfo) {
    // Analyze client info to determine if it's a portfolio or business site
    const portfolioKeywords = ['developer', 'designer', 'freelancer', 'portfolio', 'personal', 'creative'];
    const businessKeywords = ['business', 'company', 'agency', 'startup', 'corporate', 'service', 'consulting'];
    
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    
    const portfolioScore = portfolioKeywords.filter(keyword => text.includes(keyword)).length;
    const businessScore = businessKeywords.filter(keyword => text.includes(keyword)).length;
    
    return portfolioScore > businessScore ? 'portfolio' : 'business';
  }

  generateTagline(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const taglines = {
      developer: 'Professional software solutions for modern businesses',
      designer: 'Creative design solutions that make your brand stand out',
      agency: 'Full-service digital solutions for growing businesses',
      startup: 'Innovative solutions for forward-thinking companies',
      consulting: 'Expert consulting services for business growth',
      default: 'Professional solutions for your business'
    };
    
    return taglines[businessType] || taglines.default;
  }

  generateDescription(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const descriptions = {
      developer: 'We help businesses grow with modern software solutions and digital innovation.',
      designer: 'We create stunning visual experiences that connect with your audience and drive results.',
      agency: 'We provide comprehensive digital services to help your business thrive in the digital age.',
      startup: 'We partner with innovative companies to build scalable digital solutions.',
      consulting: 'We deliver expert consulting services to help your business achieve its goals.',
      default: 'We help businesses grow with modern digital solutions.'
    };
    
    return descriptions[businessType] || descriptions.default;
  }

  determineBusinessType(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    
    if (text.includes('developer') || text.includes('software') || text.includes('coding')) return 'developer';
    if (text.includes('design') || text.includes('creative') || text.includes('visual')) return 'designer';
    if (text.includes('agency') || text.includes('service')) return 'agency';
    if (text.includes('startup') || text.includes('innovative')) return 'startup';
    if (text.includes('consulting') || text.includes('consultant')) return 'consulting';
    
    return 'default';
  }

  determinePrimaryColor(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || clientInfo.colorPreferences || '').toLowerCase();
    
    if (text.includes('green') || text.includes('eco') || text.includes('environmental')) return 'Green';
    if (text.includes('blue') || text.includes('professional')) return 'Blue';
    if (text.includes('purple') || text.includes('creative')) return 'Purple';
    if (text.includes('orange') || text.includes('energetic')) return 'Orange';
    if (text.includes('red') || text.includes('bold')) return 'Red';
    
    return 'Blue'; // Default
  }

  determineSecondaryColor(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || clientInfo.colorPreferences || '').toLowerCase();
    
    if (text.includes('modern') || text.includes('minimal')) return 'Gray';
    if (text.includes('warm') || text.includes('friendly')) return 'Orange';
    if (text.includes('cool') || text.includes('calm')) return 'Blue';
    if (text.includes('white') || text.includes('clean')) return 'White';
    
    return 'Gray'; // Default
  }

  generateJobTitle(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    
    if (text.includes('full stack') || text.includes('fullstack')) return 'Full Stack Developer';
    if (text.includes('frontend') || text.includes('front-end')) return 'Frontend Developer';
    if (text.includes('backend') || text.includes('back-end')) return 'Backend Developer';
    if (text.includes('ui/ux') || text.includes('ux')) return 'UI/UX Designer';
    if (text.includes('web designer')) return 'Web Designer';
    if (text.includes('software engineer')) return 'Software Engineer';
    if (text.includes('consultant') || text.includes('consulting')) return 'Business Consultant';
    if (text.includes('designer') || text.includes('creative')) return 'Creative Designer';
    
    return 'Software Developer'; // Default
  }

  extractLocation(clientInfo) {
    return clientInfo.location || 'San Francisco, CA';
  }

  extractExperience(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    
    if (text.includes('senior') || text.includes('5+') || text.includes('5 years') || text.includes('10+')) return '5+';
    if (text.includes('mid') || text.includes('3+') || text.includes('3 years')) return '3+';
    if (text.includes('junior') || text.includes('1+') || text.includes('1 year')) return '1+';
    
    return '3+'; // Default
  }

  generateGitHubUrl(clientInfo) {
    return clientInfo.githubUrl || 'https://github.com/yourusername';
  }

  generateLinkedInUrl(clientInfo) {
    return clientInfo.linkedinUrl || 'https://linkedin.com/in/yourusername';
  }

  generateFiverrUrl(clientInfo) {
    return clientInfo.fiverrUrl || 'https://fiverr.com/yourusername';
  }

  shouldIncludeSkills(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    return !text.includes('no skills') && !text.includes('skip skills');
  }

  shouldIncludeExperience(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    return !text.includes('no experience') && !text.includes('skip experience');
  }

  shouldIncludeProjects(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    return !text.includes('no projects') && !text.includes('skip projects');
  }

  shouldIncludeEducation(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    return !text.includes('no education') && !text.includes('skip education');
  }

  generateServices(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const serviceMap = {
      developer: 'Web Development, Software Solutions, API Integration',
      designer: 'UI/UX Design, Branding, Graphic Design',
      agency: 'Web Design, Digital Marketing, Branding',
      startup: 'Software Development, MVP Development, Technical Consulting',
      consulting: 'Business Strategy, Process Optimization, Digital Transformation',
      default: 'Web Development, Digital Solutions, Consulting'
    };
    return serviceMap[businessType] || serviceMap.default;
  }

  shouldIncludeTestimonials(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    return !text.includes('no testimonials') && !text.includes('skip testimonials');
  }

  shouldIncludePricing(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    return !text.includes('no pricing') && !text.includes('skip pricing');
  }

  shouldIncludeTeam(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    return !text.includes('no team') && !text.includes('skip team');
  }

  shouldIncludeBlog(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    return !text.includes('no blog') && !text.includes('skip blog');
  }

  // Comprehensive content generation methods
  generateHeroContent(clientInfo, templateType) {
    const businessType = this.determineBusinessType(clientInfo);
    const name = clientInfo.clientName || 'Professional';
    
    if (templateType === 'portfolio') {
      return {
        greeting: "Hello, I'm",
        name: name,
        title: this.generateJobTitle(clientInfo),
        description: this.generateHeroDescription(clientInfo),
        ctas: [
          { label: 'View My Work', action: 'scroll', target: 'projects', icon: null, style: 'primary' },
          { label: 'Get In Touch', action: 'scroll', target: 'contact', icon: null, style: 'secondary' },
          { label: 'Download CV', action: 'download', target: '/cv.pdf', icon: null, style: 'secondary' },
        ],
        stats: [
          { value: this.extractExperience(clientInfo), label: 'Years of Experience' },
          { value: '50+', label: 'Projects Completed' },
          { value: '100%', label: 'Client Satisfaction' },
          { value: '24/7', label: 'Support Available' },
        ],
        scrollIndicator: { target: 'about' },
      };
    } else {
      return {
        headline: this.generateBusinessHeadline(clientInfo),
        subheadline: this.generateBusinessSubheadline(clientInfo),
        ctaText: "Get Started",
        ctaLink: "#contact",
        image: {
          src: this.generateHeroImage(clientInfo),
          alt: `${businessType} professional working`,
          overlay: "gradient",
          overlayColor: "from-black/70 via-transparent to-primary/60",
          shadow: undefined,
          rounded: undefined,
          zoomOnHover: false,
          blurBackground: false,
          aspectRatio: "21/9",
          className: "h-[60vh] md:h-[70vh] w-full object-cover object-center"
        }
      };
    }
  }

  generateAboutContent(clientInfo, templateType) {
    const businessType = this.determineBusinessType(clientInfo);
    const name = clientInfo.clientName || 'Professional';
    
    if (templateType === 'portfolio') {
      return {
        heading: 'About Me',
        subheading: 'Get to know me better and understand my journey',
        personalInfo: [
          { icon: 'User', label: 'Name', value: name },
          { icon: 'MapPin', label: 'Location', value: this.extractLocation(clientInfo) },
          { icon: 'Calendar', label: 'Experience', value: `${this.extractExperience(clientInfo)} years` },
          { icon: 'Mail', label: 'Email', value: clientInfo.email || 'contact@example.com', link: `mailto:${clientInfo.email || 'contact@example.com'}` },
          { icon: 'Github', label: 'GitHub', link: this.generateGitHubUrl(clientInfo) },
          { icon: 'Linkedin', label: 'LinkedIn', link: this.generateLinkedInUrl(clientInfo) },
          { icon: 'Globe', label: 'Fiverr', link: this.generateFiverrUrl(clientInfo) },
        ],
        profileImage: {
          src: '',
          alt: 'Profile Image',
        },
        profileBadge: this.extractExperience(clientInfo),
        whoIAm: {
          heading: 'Who I Am',
          paragraphs: this.generateAboutParagraphs(clientInfo),
        },
        whatIDo: {
          heading: 'What I Do',
          skills: this.generateWhatIDoSkills(clientInfo),
        },
        downloadCV: { label: 'Download CV', icon: 'User', href: '/cv.pdf' },
      };
    } else {
      return {
        title: `About ${clientInfo.businessName || 'Our Business'}`,
        text: this.generateBusinessAboutText(clientInfo),
        image: {
          src: this.generateAboutImage(clientInfo),
          alt: `${businessType} team working together`,
          overlay: "gradient",
          overlayColor: "from-primary/60 to-secondary/40",
          shadow: "2xl",
          rounded: "full",
          zoomOnHover: true,
          blurBackground: false,
          aspectRatio: "1/1",
          className: "w-80 h-80 mx-auto object-cover object-center"
        },
        highlights: this.generateBusinessHighlights(clientInfo),
        mission: {
          title: "Our Mission",
          text: this.generateMissionText(clientInfo)
        },
        companyInfo: this.generateCompanyInfo(clientInfo),
        cta: {
          text: "Get Started",
          icon: "Briefcase",
          link: "#contact"
        }
      };
    }
  }

  generateSkillsContent(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const skillCategories = this.generateSkillCategories(clientInfo, businessType);
    
    return {
      heading: 'My Skills',
      subheading: 'A comprehensive overview of my technical skills and expertise',
      skillCategories,
      additionalSkills: this.generateAdditionalSkills(clientInfo, businessType),
    };
  }

  generateExperienceContent(clientInfo) {
    return {
      heading: 'Work Experience',
      subheading: 'My professional journey and background',
      workExperience: this.generateWorkExperience(clientInfo),
      education: this.generateEducation(clientInfo),
    };
  }

  generateProjectsContent(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    
    return {
      title: businessType === 'portfolio' ? 'My Projects' : 'Recent Client Work',
      subtitle: businessType === 'portfolio' ? 'Showcase of my best work and achievements' : 'Real results for real businesses',
      filters: this.generateProjectFilters(clientInfo),
      caseStudies: this.generateCaseStudies(clientInfo),
      cta: {
        text: businessType === 'portfolio' ? 'View All Projects' : 'Start Your Project',
        icon: "Eye",
        link: "#contact"
      }
    };
  }

  generateServicesContent(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const services = this.generateServicesList(clientInfo, businessType);
    
    return {
      title: "Our Services",
      subtitle: "Solutions to help your business grow and succeed.",
      services,
      cta: {
        text: "Get a Free Quote",
        link: "#contact"
      }
    };
  }

  generateTestimonialsContent(clientInfo) {
    return {
      title: "What Clients Say",
      subtitle: "Real feedback from satisfied clients",
      testimonials: this.generateTestimonials(clientInfo),
    };
  }

  generateProcessContent(clientInfo) {
    return {
      title: "Our Process",
      subtitle: "A simple, transparent workflow for every project.",
      steps: this.generateProcessSteps(clientInfo),
    };
  }

  generateContactContent(clientInfo) {
    return {
      title: "Get In Touch",
      subtitle: "Ready to start your project? Let's discuss your needs.",
      contactInfo: [
        { icon: 'Mail', label: 'Email', value: clientInfo.email || 'contact@example.com', link: `mailto:${clientInfo.email || 'contact@example.com'}` },
        { icon: 'Phone', label: 'Phone', value: clientInfo.phone || '+1 (555) 123-4567', link: `tel:${clientInfo.phone || '+1 (555) 123-4567'}` },
        { icon: 'MapPin', label: 'Location', value: this.extractLocation(clientInfo) },
      ],
      socialLinks: [
        { icon: 'Github', label: 'GitHub', link: this.generateGitHubUrl(clientInfo) },
        { icon: 'Linkedin', label: 'LinkedIn', link: this.generateLinkedInUrl(clientInfo) },
        { icon: 'Globe', label: 'Fiverr', link: this.generateFiverrUrl(clientInfo) },
      ],
    };
  }

  // Helper methods for content generation
  generateHeroDescription(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const descriptions = {
      developer: `I build scalable software solutions and modern web applications. From full-stack development to DevOps automation, I help businesses turn complex problems into elegant, working code.`,
      designer: `I create stunning visual experiences that connect with your audience and drive results. From UI/UX design to branding, I help businesses stand out in the digital landscape.`,
      consultant: `I provide expert consulting services to help businesses grow and succeed. From strategy to implementation, I deliver measurable results and lasting partnerships.`,
      default: `I help businesses grow with modern digital solutions and innovative approaches. From concept to execution, I deliver results that exceed expectations.`
    };
    return descriptions[businessType] || descriptions.default;
  }

  generateBusinessHeadline(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const headlines = {
      developer: "Custom Software Solutions for Modern Businesses",
      designer: "Creative Design Solutions That Drive Results",
      agency: "Full-Service Digital Solutions for Growing Businesses",
      startup: "Innovative Solutions for Forward-Thinking Companies",
      consulting: "Expert Consulting Services for Business Growth",
      default: "Professional Solutions for Your Business"
    };
    return headlines[businessType] || headlines.default;
  }

  generateBusinessSubheadline(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const subheadlines = {
      developer: "Modern, scalable, and secure software development services.",
      designer: "Creative design that connects with your audience and drives conversions.",
      agency: "Comprehensive digital services to help your business thrive.",
      startup: "Innovative solutions that scale with your business growth.",
      consulting: "Strategic consulting to help you achieve your business goals.",
      default: "Professional services tailored to your business needs."
    };
    return subheadlines[businessType] || subheadlines.default;
  }

  generateHeroImage(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const images = {
      developer: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
      designer: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
      agency: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80",
      startup: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80",
      consulting: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
      default: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
    };
    return images[businessType] || images.default;
  }

  generateAboutParagraphs(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const paragraphs = {
      developer: [
        `I started my journey in software development with a passion for solving complex problems through code. From building automation tools to developing scalable web applications, I've always been drawn to creating solutions that make a real impact.`,
        `With ${this.extractExperience(clientInfo)} years of experience, I've worked across the full stack - from frontend interfaces to backend systems, from cloud infrastructure to DevOps automation. I believe in writing clean, maintainable code that scales with your business.`,
        `I thrive in fast-paced environments where innovation and quality both matter. Whether you need a complete web application, API integration, or automation solutions, I'm here to help you build something amazing.`
      ],
      designer: [
        `My journey in design began with a fascination for how visual elements can communicate and connect with people. From user interface design to brand identity creation, I've always focused on creating experiences that resonate.`,
        `With ${this.extractExperience(clientInfo)} years of experience, I've helped businesses of all sizes create compelling visual identities and user experiences. I believe in design that not only looks great but also drives results.`,
        `I specialize in creating designs that are both beautiful and functional. Whether you need a complete brand overhaul, website design, or marketing materials, I'm here to help your business stand out.`
      ],
      default: [
        `I began my professional journey with a passion for helping businesses grow and succeed. Through years of experience, I've developed a deep understanding of what it takes to deliver real results.`,
        `With ${this.extractExperience(clientInfo)} years of experience, I've worked with clients across various industries, helping them achieve their goals through strategic solutions and innovative approaches.`,
        `I believe in building lasting partnerships and delivering measurable value to every client. Whether you're just starting out or looking to scale, I'm here to help you succeed.`
      ]
    };
    return paragraphs[businessType] || paragraphs.default;
  }

  generateWhatIDoSkills(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const skills = {
      developer: [
        { title: 'Frontend Development', description: 'React, TypeScript, Next.js, Tailwind CSS, HTML/CSS' },
        { title: 'Backend Development', description: 'Node.js, Python, PostgreSQL, MongoDB, REST APIs' },
        { title: 'DevOps & Cloud', description: 'Docker, AWS, Git, CI/CD, Linux, Nginx' },
        { title: 'Automation & Tools', description: 'Workflow automation, API integration, testing frameworks' }
      ],
      designer: [
        { title: 'UI/UX Design', description: 'User interface design, user experience, wireframing, prototyping' },
        { title: 'Brand Identity', description: 'Logo design, brand guidelines, visual identity systems' },
        { title: 'Web Design', description: 'Responsive design, modern layouts, conversion optimization' },
        { title: 'Graphic Design', description: 'Marketing materials, social media graphics, print design' }
      ],
      default: [
        { title: 'Strategic Planning', description: 'Business strategy, market analysis, growth planning' },
        { title: 'Digital Solutions', description: 'Web development, digital marketing, automation' },
        { title: 'Client Consulting', description: 'Process optimization, technology implementation, training' },
        { title: 'Project Management', description: 'Agile methodologies, team coordination, delivery management' }
      ]
    };
    return skills[businessType] || skills.default;
  }

  generateBusinessAboutText(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const texts = {
      developer: "We specialize in building custom software solutions that help businesses scale and succeed. Our team combines technical expertise with business understanding to deliver solutions that drive real results.",
      designer: "We create stunning visual experiences that help businesses connect with their audience and drive conversions. Our design approach focuses on both aesthetics and functionality.",
      agency: "We provide comprehensive digital services to help businesses thrive in the digital age. From web development to marketing, we're your partner for growth.",
      startup: "We partner with innovative companies to build scalable solutions that grow with your business. Our agile approach ensures fast delivery and continuous improvement.",
      consulting: "We deliver expert consulting services to help businesses achieve their goals. Our strategic approach combines industry knowledge with practical implementation.",
      default: "We help businesses grow with modern digital solutions and strategic approaches. Our commitment is to deliver measurable results and lasting partnerships."
    };
    return texts[businessType] || texts.default;
  }

  generateBusinessHighlights(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const highlights = {
      developer: [
        { icon: "Code", title: "Custom Development", subtitle: "Tailored Solutions" },
        { icon: "Shield", title: "Secure & Scalable", subtitle: "Enterprise Ready" },
        { icon: "Zap", title: "Fast Delivery", subtitle: "Quick Turnaround" },
        { icon: "Award", title: "Quality Code", subtitle: "Best Practices" }
      ],
      designer: [
        { icon: "Palette", title: "Creative Design", subtitle: "Unique Concepts" },
        { icon: "Users", title: "User-Focused", subtitle: "UX Driven" },
        { icon: "TrendingUp", title: "Results Oriented", subtitle: "Conversion Focused" },
        { icon: "Award", title: "Award Winning", subtitle: "Recognized Work" }
      ],
      default: [
        { icon: "Award", title: "Professional Team", subtitle: "Experienced" },
        { icon: "Globe", title: "Clients Worldwide", subtitle: "Global Reach" },
        { icon: "Briefcase", title: "Reliable Support", subtitle: "Fast Turnaround" },
        { icon: "Award", title: "Client Satisfaction", subtitle: "5-Star Rated" }
      ]
    };
    return highlights[businessType] || highlights.default;
  }

  generateMissionText(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const missions = {
      developer: "Our mission is to empower businesses with custom software solutions that scale and drive real results. We believe in writing clean, maintainable code that grows with your business.",
      designer: "Our mission is to create compelling visual experiences that help businesses connect with their audience and achieve their goals. We believe in design that drives results.",
      agency: "Our mission is to provide comprehensive digital services that help businesses thrive in the digital age. We believe in building lasting partnerships and delivering measurable value.",
      default: "Our mission is to help businesses grow and succeed through innovative digital solutions and strategic partnerships. We believe in delivering measurable results and lasting value."
    };
    return missions[businessType] || missions.default;
  }

  generateCompanyInfo(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const info = {
      developer: [
        { icon: "Briefcase", text: "Serving clients worldwide since 2020" },
        { icon: "Globe", text: "Remote & Flexible" },
        { icon: "Award", text: "100+ Projects Delivered" }
      ],
      designer: [
        { icon: "Briefcase", text: "Creative solutions since 2020" },
        { icon: "Globe", text: "Global Design Services" },
        { icon: "Award", text: "50+ Brands Transformed" }
      ],
      default: [
        { icon: "Briefcase", text: "Serving clients worldwide since 2020" },
        { icon: "Globe", text: "Remote & Flexible" },
        { icon: "Award", text: "100+ Projects Delivered" }
      ]
    };
    return info[businessType] || info.default;
  }

  generateSkillCategories(clientInfo, businessType) {
    const categories = {
      developer: [
        {
          icon: 'Code',
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
          icon: 'Database',
          title: 'Backend Development',
          skills: [
            { name: 'Node.js', level: 85 },
            { name: 'Python', level: 80 },
            { name: 'PostgreSQL', level: 75 },
            { name: 'MongoDB', level: 70 },
            { name: 'Express.js', level: 75 },
            { name: 'REST APIs', level: 85 },
          ]
        },
        {
          icon: 'Cloud',
          title: 'DevOps & Cloud',
          skills: [
            { name: 'Docker', level: 80 },
            { name: 'AWS', level: 75 },
            { name: 'Git', level: 95 },
            { name: 'CI/CD', level: 85 },
            { name: 'Linux', level: 80 },
            { name: 'Nginx', level: 70 },
          ]
        }
      ],
      designer: [
        {
          icon: 'Palette',
          title: 'Design Tools',
          skills: [
            { name: 'Figma', level: 95 },
            { name: 'Adobe Creative Suite', level: 90 },
            { name: 'Sketch', level: 85 },
            { name: 'InVision', level: 80 },
            { name: 'Protopie', level: 75 },
            { name: 'Principle', level: 70 },
          ]
        },
        {
          icon: 'Users',
          title: 'UX/UI Design',
          skills: [
            { name: 'User Research', level: 90 },
            { name: 'Wireframing', level: 95 },
            { name: 'Prototyping', level: 90 },
            { name: 'User Testing', level: 85 },
            { name: 'Information Architecture', level: 80 },
            { name: 'Interaction Design', level: 85 },
          ]
        },
        {
          icon: 'TrendingUp',
          title: 'Design Strategy',
          skills: [
            { name: 'Brand Identity', level: 90 },
            { name: 'Visual Design', level: 95 },
            { name: 'Typography', level: 90 },
            { name: 'Color Theory', level: 85 },
            { name: 'Layout Design', level: 90 },
            { name: 'Responsive Design', level: 85 },
          ]
        }
      ],
      default: [
        {
          icon: 'Briefcase',
          title: 'Business Skills',
          skills: [
            { name: 'Strategic Planning', level: 90 },
            { name: 'Project Management', level: 85 },
            { name: 'Client Relations', level: 95 },
            { name: 'Problem Solving', level: 90 },
            { name: 'Communication', level: 95 },
            { name: 'Analytics', level: 80 },
          ]
        },
        {
          icon: 'TrendingUp',
          title: 'Digital Marketing',
          skills: [
            { name: 'SEO', level: 85 },
            { name: 'Social Media', level: 90 },
            { name: 'Content Marketing', level: 80 },
            { name: 'Email Marketing', level: 75 },
            { name: 'Google Ads', level: 70 },
            { name: 'Analytics', level: 85 },
          ]
        },
        {
          icon: 'Globe',
          title: 'Technology',
          skills: [
            { name: 'Web Development', level: 80 },
            { name: 'WordPress', level: 85 },
            { name: 'Shopify', level: 75 },
            { name: 'E-commerce', level: 80 },
            { name: 'CMS', level: 85 },
            { name: 'API Integration', level: 70 },
          ]
        }
      ]
    };
    
    const skillCategories = categories[businessType] || categories.default;
    // Sort each skills array descending by level
    skillCategories.forEach(cat => cat.skills.sort((a, b) => b.level - a.level));
    return skillCategories;
  }

  generateAdditionalSkills(clientInfo, businessType) {
    const skills = {
      developer: [
        'GitHub Actions', 'GitLab CI', 'Jenkins', 'Terraform',
        'FastAPI', 'Flask', 'GraphQL', 'WebSocket',
        'Selenium', 'Jest', 'Cypress', 'Docker Compose',
        'VS Code', 'Postman', 'JSON/YAML', 'Regular Expressions'
      ],
      designer: [
        'Adobe XD', 'InVision', 'Zeplin', 'Abstract',
        'Sketch', 'Principle', 'Framer', 'Lottie',
        'After Effects', 'Premiere Pro', 'Illustrator', 'Photoshop',
        'Design Systems', 'Component Libraries', 'Design Tokens', 'Accessibility'
      ],
      default: [
        'Google Analytics', 'Google Ads', 'Facebook Ads', 'LinkedIn Ads',
        'Mailchimp', 'HubSpot', 'Salesforce', 'Zapier',
        'Canva', 'Buffer', 'Hootsuite', 'Trello',
        'Asana', 'Slack', 'Zoom', 'Microsoft Office'
      ]
    };
    return skills[businessType] || skills.default;
  }

  generateWorkExperience(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const experience = {
      developer: [
        {
          id: 1,
          title: 'Senior Software Developer',
          company: 'Tech Solutions Inc.',
          location: this.extractLocation(clientInfo),
          period: '2022 – Present',
          description: 'Lead development of scalable web applications and microservices. Implemented CI/CD pipelines and automated testing frameworks.',
          technologies: ['React', 'Node.js', 'Python', 'Docker', 'AWS', 'PostgreSQL'],
          achievements: [
            'Developed 10+ production applications',
            'Reduced deployment time by 60%',
            'Implemented automated testing with 90% coverage',
            'Mentored junior developers'
          ]
        },
        {
          id: 2,
          title: 'Full Stack Developer',
          company: 'Digital Agency',
          location: this.extractLocation(clientInfo),
          period: '2020 – 2022',
          description: 'Built responsive websites and web applications for clients across various industries.',
          technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express'],
          achievements: [
            'Delivered 25+ client projects',
            'Improved site performance by 40%',
            'Implemented responsive design best practices',
            'Maintained 99.9% uptime'
          ]
        }
      ],
      designer: [
        {
          id: 1,
          title: 'Senior UI/UX Designer',
          company: 'Creative Studio',
          location: this.extractLocation(clientInfo),
          period: '2022 – Present',
          description: 'Lead designer for digital products and brand identities. Created user-centered designs that drive conversions.',
          technologies: ['Figma', 'Sketch', 'Adobe Creative Suite', 'InVision', 'Principle'],
          achievements: [
            'Designed 15+ successful products',
            'Increased conversion rates by 35%',
            'Created comprehensive design systems',
            'Led user research initiatives'
          ]
        },
        {
          id: 2,
          title: 'Visual Designer',
          company: 'Marketing Agency',
          location: this.extractLocation(clientInfo),
          period: '2020 – 2022',
          description: 'Created visual designs for marketing campaigns and brand identities.',
          technologies: ['Adobe Creative Suite', 'Sketch', 'InVision', 'After Effects'],
          achievements: [
            'Designed 50+ marketing campaigns',
            'Created 20+ brand identities',
            'Improved brand recognition by 45%',
            'Collaborated with marketing teams'
          ]
        }
      ],
      default: [
        {
          id: 1,
          title: 'Business Consultant',
          company: 'Strategic Solutions',
          location: this.extractLocation(clientInfo),
          period: '2022 – Present',
          description: 'Provide strategic consulting services to help businesses grow and optimize their operations.',
          technologies: ['Strategic Planning', 'Process Optimization', 'Digital Transformation', 'Analytics'],
          achievements: [
            'Helped 30+ businesses grow',
            'Increased client revenue by 40%',
            'Optimized business processes',
            'Implemented digital solutions'
          ]
        },
        {
          id: 2,
          title: 'Project Manager',
          company: 'Digital Agency',
          location: this.extractLocation(clientInfo),
          period: '2020 – 2022',
          description: 'Managed digital projects and client relationships for web development and marketing campaigns.',
          technologies: ['Agile', 'Scrum', 'Project Management', 'Client Relations'],
          achievements: [
            'Managed 40+ successful projects',
            'Maintained 95% client satisfaction',
            'Delivered projects on time and budget',
            'Led cross-functional teams'
          ]
        }
      ]
    };
    return experience[businessType] || experience.default;
  }

  generateEducation(clientInfo) {
    return [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        period: '2016 – 2020',
        description: 'Focused on software engineering, algorithms, and web development.',
        achievements: ['Dean\'s List', 'Graduated with Honors', 'Capstone Project Award']
      },
      {
        id: 2,
        degree: 'Certification in Digital Marketing',
        school: 'Digital Marketing Institute',
        period: '2021',
        description: 'Comprehensive training in modern digital marketing strategies and tools.',
        achievements: ['Google Analytics Certified', 'Facebook Ads Certified', 'SEO Specialist']
      }
    ];
  }

  generateProjectFilters(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const filters = {
      developer: [
        { id: "all", label: "All Projects" },
        { id: "web", label: "Web Apps" },
        { id: "mobile", label: "Mobile Apps" },
        { id: "api", label: "APIs" },
        { id: "automation", label: "Automation" }
      ],
      designer: [
        { id: "all", label: "All Work" },
        { id: "ui", label: "UI/UX Design" },
        { id: "branding", label: "Branding" },
        { id: "web", label: "Web Design" },
        { id: "print", label: "Print Design" }
      ],
      default: [
        { id: "all", label: "All Work" },
        { id: "web", label: "Websites" },
        { id: "branding", label: "Branding" },
        { id: "seo", label: "SEO" },
        { id: "content", label: "Content" }
      ]
    };
    return filters[businessType] || filters.default;
  }

  generateCaseStudies(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const caseStudies = {
      developer: [
        {
          id: 1,
          title: "E-commerce Platform",
          category: "web",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
          description: "Full-stack e-commerce platform with payment processing and inventory management.",
          technologies: ["React", "Node.js", "Stripe", "MongoDB"],
          liveUrl: "https://example.com",
          codeUrl: "https://github.com/example",
          fiverrUrl: "https://fiverr.com/example"
        },
        {
          id: 2,
          title: "Task Management App",
          category: "web",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          description: "Real-time task management application with team collaboration features.",
          technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
          liveUrl: "https://example.com",
          codeUrl: "https://github.com/example",
          fiverrUrl: "https://fiverr.com/example"
        }
      ],
      designer: [
        {
          id: 1,
          title: "Brand Identity Design",
          category: "branding",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
          description: "Complete brand identity design including logo, guidelines, and marketing materials.",
          technologies: ["Adobe Creative Suite", "Figma", "Brand Guidelines"],
          liveUrl: "https://example.com",
          codeUrl: null,
          fiverrUrl: "https://fiverr.com/example"
        },
        {
          id: 2,
          title: "E-commerce UI/UX",
          category: "ui",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
          description: "User interface and experience design for modern e-commerce platform.",
          technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
          liveUrl: "https://example.com",
          codeUrl: null,
          fiverrUrl: "https://fiverr.com/example"
        }
      ],
      default: [
        {
          id: 1,
          title: "Business Website",
          category: "web",
          image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
          description: "Modern business website with SEO optimization and lead generation.",
          technologies: ["WordPress", "SEO", "Google Analytics"],
          liveUrl: "https://example.com",
          codeUrl: null,
          fiverrUrl: "https://fiverr.com/example"
        },
        {
          id: 2,
          title: "Digital Marketing Campaign",
          category: "seo",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          description: "Comprehensive digital marketing strategy with measurable results.",
          technologies: ["Google Ads", "Facebook Ads", "SEO", "Analytics"],
          liveUrl: "https://example.com",
          codeUrl: null,
          fiverrUrl: "https://fiverr.com/example"
        }
      ]
    };
    return caseStudies[businessType] || caseStudies.default;
  }

  generateServicesList(clientInfo, businessType) {
    const services = {
      developer: [
        {
          icon: "Code",
          title: "Custom Web Development",
          description: "Full-stack web applications built with modern technologies and best practices."
        },
        {
          icon: "Smartphone",
          title: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android."
        },
        {
          icon: "Database",
          title: "API Development",
          description: "RESTful APIs and microservices for scalable backend solutions."
        },
        {
          icon: "Zap",
          title: "Automation Solutions",
          description: "Workflow automation and process optimization for business efficiency."
        },
        {
          icon: "Cloud",
          title: "DevOps & Cloud",
          description: "Infrastructure setup, deployment automation, and cloud migration."
        },
        {
          icon: "Shield",
          title: "Maintenance & Support",
          description: "Ongoing maintenance, updates, and technical support for your applications."
        }
      ],
      designer: [
        {
          icon: "Palette",
          title: "UI/UX Design",
          description: "User interface and experience design for web and mobile applications."
        },
        {
          icon: "Award",
          title: "Brand Identity",
          description: "Complete brand identity design including logo, guidelines, and visual assets."
        },
        {
          icon: "Layout",
          title: "Web Design",
          description: "Responsive website design with modern aesthetics and user experience."
        },
        {
          icon: "Image",
          title: "Graphic Design",
          description: "Marketing materials, social media graphics, and print design."
        },
        {
          icon: "Users",
          title: "User Research",
          description: "User research, usability testing, and design strategy consulting."
        },
        {
          icon: "TrendingUp",
          title: "Design Systems",
          description: "Comprehensive design systems and component libraries for consistency."
        }
      ],
      default: [
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
      ]
    };
    return services[businessType] || services.default;
  }

  generateTestimonials(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const testimonials = {
      developer: [
        {
          name: "Sarah Johnson",
          role: "CTO",
          company: "TechStart Inc.",
          quote: "The custom software solution transformed our business operations. Professional, reliable, and delivered exactly what we needed."
        },
        {
          name: "Michael Chen",
          role: "Founder",
          company: "Digital Solutions",
          quote: "Outstanding development work. The team delivered a scalable solution that grew with our business needs."
        },
        {
          name: "Emily Rodriguez",
          role: "Operations Manager",
          company: "Global Retail",
          quote: "The automation tools saved us hours every day. Highly recommend for any business looking to optimize processes."
        }
      ],
      designer: [
        {
          name: "David Lee",
          role: "Marketing Director",
          company: "Creative Agency",
          quote: "The brand identity design perfectly captured our vision. The new look helped us stand out in a crowded market."
        },
        {
          name: "Lisa Wang",
          role: "Product Manager",
          company: "Innovation Labs",
          quote: "The UI/UX design improved our user engagement by 40%. Professional work that drives real results."
        },
        {
          name: "Alex Thompson",
          role: "CEO",
          company: "Startup Ventures",
          quote: "Outstanding design work that helped us launch successfully. The attention to detail was impressive."
        }
      ],
      default: [
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
    };
    return testimonials[businessType] || testimonials.default;
  }

  generateProcessSteps(clientInfo) {
    return [
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
    ];
  }

  generateAboutImage(clientInfo) {
    const businessType = this.determineBusinessType(clientInfo);
    const images = {
      developer: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      designer: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      agency: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      default: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
    };
    return images[businessType] || images.default;
  }
}

// Export for use
module.exports = { AutoTestGenerator };

// Example usage function
async function generateFromClientInfo(clientInfo) {
  const autoGenerator = new AutoTestGenerator();
  return await autoGenerator.generateFromClientInfo(clientInfo);
}

// Run if called directly
if (require.main === module) {
  // Example client info for testing
  const exampleClientInfo = {
    clientName: "Sarah Chen",
    businessName: "Digital Solutions Pro",
    email: "sarah@digitalsolutionspro.com",
    location: "Austin, TX",
    description: "I need a portfolio website for my web development business. I specialize in React, Node.js, and modern web technologies.",
    requirements: "Professional portfolio showcasing my development skills, include projects, skills, and contact form. Modern design with blue theme.",
    targetAudience: "Startups, small businesses, tech companies",
    industry: "Web Development",
    colorPreferences: "Blue and white, professional look",
    stylePreferences: "Clean, modern, technical"
  };

  generateFromClientInfo(exampleClientInfo)
    .then(projectName => {
      console.log(`\n🎉 Auto-generated website: ${projectName}`);
    })
    .catch(error => {
      console.error('Error:', error);
    });
} 