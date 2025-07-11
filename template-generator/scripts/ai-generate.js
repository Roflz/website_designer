const { TemplateGenerator } = require('./generate.js');
const fs = require('fs-extra');
const path = require('path');

class AIGenerator extends TemplateGenerator {
  constructor() {
    super();
  }

  async generateFromClientInfo(clientInfo) {
    try {
      console.log('🤖 AI-Powered Website Generator');
      console.log('Interpreting client information and generating website...\n');
      
      // Use AI to interpret client info and generate appropriate details
      const interpretedDetails = await this.interpretClientInfo(clientInfo);
      
      console.log('📋 Interpreted Details:');
      console.log(`- Project: ${interpretedDetails.projectName}`);
      console.log(`- Client: ${interpretedDetails.clientName}`);
      console.log(`- Template: ${interpretedDetails.templateType}`);
      console.log(`- Job Title: ${interpretedDetails.customization.jobTitle}`);
      console.log(`- Location: ${interpretedDetails.customization.location}`);
      console.log(`- Experience: ${interpretedDetails.customization.yearsExperience}\n`);

      await this.createProject(
        interpretedDetails.details, 
        interpretedDetails.templateType, 
        interpretedDetails.customization
      );
      
      console.log('✅ AI-generated website created successfully!');
      console.log(`📁 Project created in: ${interpretedDetails.details.projectName}`);
      console.log('🚀 Run "npm run dev" to start development');
      
      return interpretedDetails.details.projectName;
      
    } catch (error) {
      console.error('❌ Failed to generate website:', error.message);
      throw error;
    }
  }

  async interpretClientInfo(clientInfo) {
    // Extract basic information
    const projectName = this.generateProjectName(clientInfo.businessName || clientInfo.clientName);
    const clientName = clientInfo.clientName || 'Client';
    const businessName = clientInfo.businessName || clientInfo.clientName || 'Business';
    
    // Determine template type based on client needs
    const templateType = this.determineTemplateType(clientInfo);
    
    // Generate appropriate content based on client info
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
      jobTitle: this.generateJobTitle(clientInfo),
      location: this.extractLocation(clientInfo),
      yearsExperience: this.extractExperience(clientInfo),
      githubUrl: this.generateGitHubUrl(clientInfo),
      linkedinUrl: this.generateLinkedInUrl(clientInfo),
      fiverrUrl: this.generateFiverrUrl(clientInfo),
      includeSkills: this.shouldIncludeSkills(clientInfo),
      includeExperience: this.shouldIncludeExperience(clientInfo),
      includeProjects: this.shouldIncludeProjects(clientInfo),
      includeEducation: this.shouldIncludeEducation(clientInfo)
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
    const businessKeywords = ['business', 'company', 'agency', 'startup', 'corporate', 'service'];
    
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
    
    return 'default';
  }

  determinePrimaryColor(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    
    if (text.includes('blue') || text.includes('professional')) return 'Blue';
    if (text.includes('green') || text.includes('nature') || text.includes('eco')) return 'Green';
    if (text.includes('purple') || text.includes('creative')) return 'Purple';
    if (text.includes('orange') || text.includes('energetic')) return 'Orange';
    if (text.includes('red') || text.includes('bold')) return 'Red';
    
    return 'Blue'; // Default
  }

  determineSecondaryColor(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    
    if (text.includes('modern') || text.includes('minimal')) return 'Gray';
    if (text.includes('warm') || text.includes('friendly')) return 'Orange';
    if (text.includes('cool') || text.includes('calm')) return 'Blue';
    
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
    
    return 'Software Developer'; // Default
  }

  extractLocation(clientInfo) {
    return clientInfo.location || 'San Francisco, CA';
  }

  extractExperience(clientInfo) {
    const text = (clientInfo.description || clientInfo.requirements || '').toLowerCase();
    
    if (text.includes('senior') || text.includes('5+') || text.includes('5 years')) return '5+';
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
}

// Export for use
module.exports = { AIGenerator };

// Example usage function
async function generateFromFiverrInfo(clientInfo) {
  const aiGenerator = new AIGenerator();
  return await aiGenerator.generateFromClientInfo(clientInfo);
}

// Run if called directly
if (require.main === module) {
  // Example client info from Fiverr
  const exampleClientInfo = {
    clientName: 'John Doe',
    businessName: 'TechStart Solutions',
    email: 'john@techstart.com',
    location: 'Austin, TX',
    description: 'I need a portfolio website for my software development business. I\'m a full stack developer with 5 years of experience working with React, Node.js, and Python. I want to showcase my projects and skills.',
    requirements: 'Modern design, responsive, include projects section, skills section, and contact form.'
  };

  generateFromFiverrInfo(exampleClientInfo)
    .then(projectName => {
      console.log(`\n🎉 Website generated: ${projectName}`);
    })
    .catch(error => {
      console.error('Error:', error);
    });
} 