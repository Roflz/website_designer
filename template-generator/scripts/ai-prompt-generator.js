const { TemplateGenerator } = require('./generate.js');
const fs = require('fs-extra');
const path = require('path');

class AIPromptGenerator extends TemplateGenerator {
  constructor() {
    super();
  }

  async generateFromClientInfo(clientInfo, templateType = null) {
    try {
      console.log('🤖 AI-Powered Website Generator');
      console.log('Analyzing client information and generating AI prompt...\n');
      
      // Determine template type if not provided
      if (!templateType) {
        templateType = this.determineTemplateType(clientInfo);
      }
      
      console.log(`📋 Template Type: ${templateType}`);
      
      // Generate the AI prompt with client information
      const aiPrompt = this.generateAIPrompt(clientInfo, templateType);
      
      // Save prompt to file
      const promptPath = await this.savePromptToFile(aiPrompt, templateType);
      
      console.log('📝 Generated AI Prompt:');
      console.log('='.repeat(50));
      console.log(aiPrompt);
      console.log('='.repeat(50));
      console.log('\n📋 Instructions:');
      console.log('1. Copy the prompt above or from the saved file');
      console.log('2. Send it to an AI assistant (like ChatGPT, Claude, etc.)');
      console.log('3. Ask the AI to analyze the client information and provide a JSON configuration');
      console.log('4. The AI should return a JSON object with the template-specific structure');
      console.log('5. Copy the AI response and save it to a file');
      console.log('6. Run: npm run generate-from-ai <filename>');
      console.log(`\n💾 Prompt saved to: ${promptPath}`);
      
      return aiPrompt;
      
    } catch (error) {
      console.error('❌ Failed to generate AI prompt:', error.message);
      throw error;
    }
  }

  async savePromptToFile(prompt, templateType) {
    const fs = require('fs-extra');
    const path = require('path');
    
    // Create prompts directory if it doesn't exist
    const promptsDir = path.join(__dirname, '../prompts');
    await fs.ensureDir(promptsDir);
    
    // Use static filename based on template type
    const filename = `ai-prompt-${templateType}.txt`;
    const filePath = path.join(promptsDir, filename);
    
    // Save prompt to file (overwrite if exists)
    await fs.writeFile(filePath, prompt, 'utf8');
    
    return filePath;
  }

  determineTemplateType(clientInfo) {
    // Auto-determine template type based on client info
    const businessKeywords = ['company', 'agency', 'business', 'consulting', 'services', 'solutions', 'corporate'];
    const portfolioKeywords = ['freelancer', 'developer', 'designer', 'individual', 'personal', 'creative'];
    
    const description = (clientInfo.description || '').toLowerCase();
    const businessName = (clientInfo.businessName || '').toLowerCase();
    
    // Check for business indicators
    const hasBusinessKeywords = businessKeywords.some(keyword => 
      description.includes(keyword) || businessName.includes(keyword)
    );
    
    // Check for portfolio indicators
    const hasPortfolioKeywords = portfolioKeywords.some(keyword => 
      description.includes(keyword) || businessName.includes(keyword)
    );
    
    if (hasBusinessKeywords && !hasPortfolioKeywords) {
      return 'business';
    } else if (hasPortfolioKeywords && !hasBusinessKeywords) {
      return 'portfolio';
    } else {
      // Default to business if unclear
      return 'business';
    }
  }

  generateAIPrompt(clientInfo, templateType) {
    // Contextual introduction
    const intro = `# Website Generator AI Task

You are an expert software engineer and product designer. Your task is to analyze the provided client information and generate a JSON configuration for an automated website generator. This configuration will be used to create a professional, production-ready business or portfolio website. The website must be clear, user-friendly, and visually appealing, following best practices for modern web design and user experience.

Carefully review the client information and reason about what should be changed from the default template. Only change fields when you are confident there is a clear, strong reason to do so based on the client information. Otherwise, preserve the default values and structure. Follow all rules and schema descriptions provided below.`;

    // Detailed section/field descriptions
    const sectionDescriptions = `### Website JSON Structure and Section Purposes
- **headerContent**: Navigation bar and branding for the site. Contains business or personal name and navigation items.
- **heroContent**: The main hero section at the top of the site. Contains a headline, subheadline, and two CTAs (primary and secondary) with their text and links. The purpose is to immediately communicate the main value proposition and provide clear actions for the user.
- **aboutContent**: Section describing the business or individual, including highlights, mission, and company/personal info.
- **servicesContent**: Lists the services offered (for business) or main skills (for portfolio), with a CTA to request a quote or contact.
- **projectsContent**: Showcases projects or case studies. Includes filter buttons for project types, a grid/list of projects, and a CTA to start a project or contact.
- **testimonialsContent**: Displays client or peer testimonials.
- **processContent**: Outlines the workflow or process steps.
- **skillsContent** (portfolio): Technical skills and proficiencies.
- **experienceContent** (portfolio): Work and education history.
- **contactContent**: Contact form and contact information.
- **footerContent**: Footer with copyright, links, and social media.

Each field in the JSON corresponds to a specific part of the website. Only update a field if you are confident it is necessary based on the client information.`;

    // Universal rules
    const universalRules = `### Universal Content Rules
- For all sections and fields: Do not change the value of any field from its default unless you are confident there is a clear, strong reason to do so based on the client information.
- Do not make minor, stylistic, or unnecessary changes to text, labels, or titles. Only update fields when there is a clear, explicit reason from the client information.
- Do not rename section titles or headings unless explicitly instructed by the client information.
- Avoid redundant or nearly identical CTAs within the same section.
- Always include filter buttons for project types in the projects section, even if there is only one type.
`;

    const templateSpecificPrompt = this.getTemplateSpecificPrompt(templateType);
    
    return `${intro}

## Client Information
${this.formatClientInfo(clientInfo)}

${sectionDescriptions}

${universalRules}

${templateSpecificPrompt}

## Required Output Format
Return ONLY a valid JSON object with this exact structure for ${templateType} template:

${this.getTemplateSpecificJSONStructure(templateType)}

## Analysis Guidelines
- Be professional and appropriate for the client's industry
- Consider their target audience and business goals
- Make reasonable assumptions when information is missing
- Ensure all URLs are placeholder format (not real links)
- Choose colors that match their industry and preferences
- Include sections that would be relevant for their type of work
- Follow the exact JSON structure provided for the ${templateType} template

Please analyze the client information and provide the JSON configuration.`;
  }

  getTemplateSpecificPrompt(templateType) {
    if (templateType === 'business') {
      return `### Business Template Specific Requirements
- **Header Navigation**: Use "name" field (not "label") for navigation items
- **About Section**: Include "highlights" array with business achievements and "companyInfo" array with company details
- **Services Focus**: Emphasize business services, team expertise, and client results
- **Testimonials**: Include client testimonials with company names and roles
- **Process**: Include business process/workflow steps
- **Contact**: Business contact information with professional details`;
    } else {
      return `### Portfolio Template Specific Requirements
- **Header Navigation**: Use "name" field (not "label") for navigation items
- **Personal Focus**: Emphasize individual skills, experience, and personal achievements
- **Projects**: Showcase individual work with technologies used
- **Skills**: Technical skills with proficiency levels
- **Experience**: Work history and education
- **Contact**: Personal contact information`;
    }
  }

  getTemplateSpecificJSONStructure(templateType) {
    if (templateType === 'business') {
      return `\`\`\`json
{
  "details": {
    "projectName": "url-friendly-project-name",
    "clientName": "Client Name",
    "businessName": "Business Name",
    "tagline": "Professional tagline here",
    "description": "Business description here",
    "email": "contact@example.com",
    "phone": "+1 (555) 123-4567",
    "primaryColor": "#2e7d32",
    "secondaryColor": "#0277bd"
  },
  "templateType": "business",
  "customization": {
    "headerContent": {
      "businessName": "Your Business Name",
      "navItems": [
        { "name": "Home", "href": "#home" },
        { "name": "About", "href": "#about" },
        { "name": "Services", "href": "#services" },
        { "name": "Client Work", "href": "#projects" },
        { "name": "Process", "href": "#process" },
        { "name": "Contact", "href": "#contact" }
      ]
    },
    "heroContent": {
      "headline": "Main headline for the business",
      "subheadline": "Supporting description",
      "ctaText": "Get a Free Quote",
      "ctaLink": "#contact",
      "secondaryCtaText": "View Services",
      "secondaryCtaLink": "#services",
      "image": {
        "src": "https://example.com/hero-image.jpg",
        "alt": "Hero image alt text",
        "overlay": "gradient",
        "overlayColor": "from-black/70 via-transparent to-primary/60",
        "shadow": null,
        "rounded": null,
        "zoomOnHover": false,
        "blurBackground": false,
        "aspectRatio": "21/9",
        "className": "h-[60vh] md:h-[70vh] w-full object-cover object-center"
      }
    },
    "aboutContent": {
      "title": "About Our Business",
      "text": "Delivering quality digital solutions to help your business grow.",
      "image": {
        "src": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
        "alt": "Team working together",
        "overlay": "gradient",
        "overlayColor": "from-primary/60 to-secondary/40",
        "shadow": "2xl",
        "rounded": "full",
        "zoomOnHover": true,
        "blurBackground": false,
        "aspectRatio": "1/1",
        "className": "w-80 h-80 mx-auto object-cover object-center"
      },
      "highlights": [
        { "icon": "Award", "title": "Professional Team", "subtitle": "Experienced" },
        { "icon": "Globe", "title": "Clients Worldwide", "subtitle": "Global Reach" },
        { "icon": "Briefcase", "title": "Reliable Support", "subtitle": "Fast Turnaround" },
        { "icon": "Award", "title": "Client Satisfaction", "subtitle": "5-Star Rated" }
      ],
      "mission": {
        "title": "Our Mission",
        "text": "Our mission is to empower businesses with modern, effective digital solutions that drive real results. We believe in building long-term partnerships and delivering measurable value to every client."
      },
      "companyInfo": [
        { "icon": "Briefcase", "text": "Serving clients worldwide since 2020" },
        { "icon": "Globe", "text": "Remote & Flexible" },
        { "icon": "Award", "text": "100+ Projects Delivered" }
      ],
      "cta": {
        "text": "Get Started",
        "icon": "Briefcase",
        "link": "#contact"
      }
    },
    "servicesContent": {
      "title": "Our Services",
      "subtitle": "Solutions to help your business grow and succeed.",
      "services": [
        {
          "icon": "Code",
          "title": "Website Design & Development",
          "description": "Modern, responsive websites tailored to your business needs."
        },
        {
          "icon": "PenTool",
          "title": "Branding & Logo Design",
          "description": "Professional branding and logo creation to make your business stand out."
        },
        {
          "icon": "ShoppingCart",
          "title": "E-Commerce Solutions",
          "description": "Online stores with secure payments and easy management."
        },
        {
          "icon": "TrendingUp",
          "title": "SEO & Digital Marketing",
          "description": "Boost your online presence and attract more customers."
        },
        {
          "icon": "FileText",
          "title": "Content Creation",
          "description": "Engaging copy, blog posts, and marketing materials."
        },
        {
          "icon": "LifeBuoy",
          "title": "Ongoing Support & Maintenance",
          "description": "Reliable updates, troubleshooting, and technical support."
        }
      ],
      "cta": {
        "text": "Get a Free Quote",
        "link": "#contact"
      }
    },
    "projectsContent": {
      "title": "Recent Client Work",
      "subtitle": "Real results for real businesses—see how we help clients succeed.",
      "filters": [
        { "id": "all", "label": "All Work" },
        { "id": "web", "label": "Websites" },
        { "id": "branding", "label": "Branding" },
        { "id": "seo", "label": "SEO" },
        { "id": "content", "label": "Content" },
        { "id": "support", "label": "Support" }
      ],
      "caseStudies": [
        {
          "id": "1",
          "title": "Website Redesign for Local Bakery",
          "description": "Transformed an outdated site into a modern, mobile-friendly experience, increasing online orders by 40%.",
          "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
          "category": "web",
          "results": "Online orders up 40%"
        },
        {
          "id": "2",
          "title": "E-Commerce Launch for Retailer",
          "description": "Built a custom online store with secure payments and inventory management.",
          "image": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
          "category": "web",
          "results": "Launched in 2 weeks"
        },
        {
          "id": "3",
          "title": "Branding & Logo for Startup",
          "description": "Developed a unique brand identity and logo, helping the client stand out in a crowded market.",
          "image": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
          "category": "branding",
          "results": "Brand recognition boost"
        },
        {
          "id": "4",
          "title": "SEO Boost for Consultant",
          "description": "Implemented SEO best practices, resulting in a 3x increase in organic traffic.",
          "image": "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
          "category": "seo",
          "results": "3x organic traffic"
        },
        {
          "id": "5",
          "title": "Content Strategy for Agency",
          "description": "Created a content plan and blog series that increased leads by 25%.",
          "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
          "category": "content",
          "results": "Leads up 25%"
        },
        {
          "id": "6",
          "title": "Ongoing Support for SaaS",
          "description": "Provided reliable updates, troubleshooting, and technical support, ensuring 99.9% uptime.",
          "image": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
          "category": "support",
          "results": "99.9% uptime"
        }
      ],
      "cta": {
        "text": "Start Your Project",
        "icon": "Eye",
        "link": "#contact"
      }
    },
    "testimonialsContent": {
      "title": "What Clients Say",
      "subtitle": "Real feedback from real businesses—see how we deliver results and build lasting partnerships.",
      "testimonials": [
        {
          "name": "Sarah Johnson",
          "role": "Owner",
          "company": "Sweet Treats Bakery",
          "quote": "The new website brought in so many new customers! The process was smooth and the results exceeded my expectations."
        },
        {
          "name": "David Lee",
          "role": "Founder",
          "company": "RetailPro",
          "quote": "Our online store was up and running in no time. Professional, reliable, and always available for support."
        },
        {
          "name": "Emily Chen",
          "role": "Marketing Director",
          "company": "BrightStart Agency",
          "quote": "The branding and content strategy helped us stand out and attract more leads. Highly recommended!"
        }
      ]
    },
    "processContent": {
      "title": "Our Process",
      "subtitle": "A simple, transparent workflow for every project.",
      "steps": [
        {
          "icon": "Search",
          "title": "Discovery & Consultation",
          "description": "We discuss your goals and requirements to understand your business needs."
        },
        {
          "icon": "ClipboardList",
          "title": "Planning & Strategy",
          "description": "We create a tailored plan and timeline for your project."
        },
        {
          "icon": "Layout",
          "title": "Design & Development",
          "description": "We bring your vision to life with modern design and robust development."
        },
        {
          "icon": "MessageCircle",
          "title": "Review & Feedback",
          "description": "You review the work and provide feedback for revisions."
        },
        {
          "icon": "Rocket",
          "title": "Launch & Support",
          "description": "We launch your project and provide ongoing support as needed."
        }
      ]
    },
    "footerContent": {
      "businessName": "Your Business Name",
      "tagline": "Professional digital solutions for modern businesses. Let's build your success together.",
      "social": [
        { "name": "LinkedIn", "url": "https://linkedin.com/company/yourbusiness" },
        { "name": "Facebook", "url": "https://facebook.com/yourbusiness" },
        { "name": "Twitter", "url": "https://twitter.com/yourbusiness" }
      ],
      "quickLinks": [
        { "name": "Home", "href": "#home" },
        { "name": "About", "href": "#about" },
        { "name": "Services", "href": "#services" },
        { "name": "Client Work", "href": "#projects" },
        { "name": "Process", "href": "#process" },
        { "name": "Contact", "href": "#contact" },
        { "name": "Privacy Policy", "href": "#" },
        { "name": "Terms of Service", "href": "#" }
      ],
      "contact": [
        "business@email.com",
        "+1 (555) 123-4567",
        "123 Main St, San Francisco, CA",
        "Mon-Fri: 9am – 6pm"
      ],
      "copyright": "Your Business Name. Made with love by Your Business Team."
    },
    "contactContent": {
      "title": "Request a Free Quote",
      "subtitle": "Ready to start your project or have questions? Fill out the form and we'll get back to you promptly.",
      "infoTitle": "Let's Work Together",
      "infoText": "We're here to help your business grow. Reach out for a free consultation or quote—no obligation!",
      "contactInfo": [
        {
          "icon": "Mail",
          "title": "Email",
          "value": "business@email.com",
          "link": "mailto:business@email.com"
        },
        {
          "icon": "Phone",
          "title": "Phone",
          "value": "+1 (555) 123-4567",
          "link": "tel:+15551234567"
        },
        {
          "icon": "MapPin",
          "title": "Location",
          "value": "123 Main St, San Francisco, CA",
          "link": "https://goo.gl/maps/example"
        },
        {
          "icon": "Clock",
          "title": "Business Hours",
          "value": "Mon-Fri: 9am – 6pm",
          "link": "#"
        }
      ],
      "map": {
        "label": "Our Location",
        "placeholder": "[Google Map Placeholder]"
      },
      "form": {
        "nameLabel": "Name",
        "emailLabel": "Email",
        "serviceLabel": "Service Needed",
        "messageLabel": "Message",
        "submitText": "Send Request",
        "successTitle": "Request Sent!",
        "successText": "Thank you for your interest. We'll get back to you soon!"
      }
    }
  }
}
\`\`\``;
    } else {
      return `\`\`\`json
{
  "details": {
    "projectName": "url-friendly-project-name",
    "clientName": "Client Name",
    "businessName": "Business Name",
    "tagline": "Professional tagline here",
    "description": "Business description here",
    "email": "contact@example.com",
    "phone": "+1 (555) 123-4567",
    "primaryColor": "#2e7d32",
    "secondaryColor": "#0277bd"
  },
  "templateType": "portfolio",
  "customization": {
    "headerContent": {
      "businessName": "Client Name",
      "navItems": [
        { "name": "Home", "href": "#home" },
        { "name": "About", "href": "#about" },
        { "name": "Skills", "href": "#skills" },
        { "name": "Experience", "href": "#experience" },
        { "name": "Projects", "href": "#projects" },
        { "name": "Contact", "href": "#contact" }
      ]
    },
    "heroContent": {
      "greeting": "Hello, I'm",
      "name": "Client Name",
      "title": "Professional Title",
      "description": "Personal description",
      "ctas": [
        { "text": "View My Work", "link": "#projects", "style": "primary" },
        { "text": "Contact Me", "link": "#contact", "style": "secondary" }
      ],
      "stats": [{ "value": "5+", "label": "Years Experience" }]
    },
    "aboutContent": {
      "heading": "About Me",
      "subheading": "Get to know me better",
      "personalInfo": [{"icon": "User", "label": "Name", "value": "Client Name"}],
      "whoIAm": {"heading": "Who I Am", "paragraphs": ["Paragraph 1", "Paragraph 2"]},
      "whatIDo": {"heading": "What I Do", "skills": [{"title": "Skill Category", "description": "Skills description"}]},
      "mission": {"title": "My Mission", "text": "Personal mission statement"}
    },
    "skillsContent": {
      "heading": "My Skills",
      "subheading": "Technical expertise overview",
      "skillCategories": [{"icon": "Code", "title": "Category", "skills": [{"name": "Skill", "level": 90}]}],
      "additionalSkills": ["Skill 1", "Skill 2"]
    },
    "experienceContent": {
      "heading": "Work Experience",
      "subheading": "Professional journey",
      "workExperience": [{"id": 1, "title": "Job Title", "company": "Company", "location": "Location", "period": "2020-2023", "description": "Job description", "technologies": ["Tech1", "Tech2"], "achievements": ["Achievement 1", "Achievement 2"]}],
      "education": [{"id": 1, "degree": "Degree", "school": "School", "period": "2016-2020", "description": "Education description", "achievements": ["Achievement 1"]}]
    },
    "projectsContent": {
      "title": "My Projects",
      "subtitle": "Showcase of work",
      "filters": [{"id": "all", "label": "All Projects"}],
      "caseStudies": [{"id": 1, "title": "Project Name", "category": "web", "image": "image-url", "description": "Project description", "technologies": ["Tech1", "Tech2"], "liveUrl": "live-url", "codeUrl": "code-url", "fiverrUrl": "fiverr-url"}],
      "cta": {"text": "View All Projects", "icon": "Eye", "link": "#contact"}
    },
    "contactContent": {
      "title": "Get In Touch",
      "subtitle": "Contact me",
      "contactInfo": [{ "icon": "Mail", "label": "Email", "value": "email@example.com", "link": "mailto:email@example.com" }],
      "socialLinks": [{ "icon": "Github", "label": "GitHub", "link": "https://github.com/username" }],
      "map": { "label": "My Location", "placeholder": "Map will appear here" }
    }
  }
}
\`\`\``;
    }
  }

  formatClientInfo(clientInfo) {
    let formatted = '';
    
    if (clientInfo.clientName) formatted += `**Client Name**: ${clientInfo.clientName}\n`;
    if (clientInfo.businessName) formatted += `**Business Name**: ${clientInfo.businessName}\n`;
    if (clientInfo.email) formatted += `**Email**: ${clientInfo.email}\n`;
    if (clientInfo.phone) formatted += `**Phone**: ${clientInfo.phone}\n`;
    if (clientInfo.location) formatted += `**Location**: ${clientInfo.location}\n`;
    if (clientInfo.description) formatted += `**Description**: ${clientInfo.description}\n`;
    if (clientInfo.requirements) formatted += `**Requirements**: ${clientInfo.requirements}\n`;
    if (clientInfo.targetAudience) formatted += `**Target Audience**: ${clientInfo.targetAudience}\n`;
    if (clientInfo.industry) formatted += `**Industry**: ${clientInfo.industry}\n`;
    if (clientInfo.githubUrl) formatted += `**GitHub URL**: ${clientInfo.githubUrl}\n`;
    if (clientInfo.linkedinUrl) formatted += `**LinkedIn URL**: ${clientInfo.linkedinUrl}\n`;
    if (clientInfo.fiverrUrl) formatted += `**Fiverr URL**: ${clientInfo.fiverrUrl}\n`;
    if (clientInfo.colorPreferences) formatted += `**Color Preferences**: ${clientInfo.colorPreferences}\n`;
    if (clientInfo.stylePreferences) formatted += `**Style Preferences**: ${clientInfo.stylePreferences}\n`;
    if (clientInfo.specialRequirements) formatted += `**Special Requirements**: ${clientInfo.specialRequirements}\n`;
    
    return formatted || 'No client information provided.';
  }

  async generateFromAIResponse(aiResponseFile) {
    try {
      console.log('🤖 Processing AI Response...');
      
      // Read the AI response file
      const aiResponse = await fs.readFile(aiResponseFile, 'utf8');
      
      // Extract JSON from the response (handle cases where AI includes markdown)
      const jsonMatch = aiResponse.match(/```json\s*([\s\S]*?)\s*```/) || 
                       aiResponse.match(/```\s*([\s\S]*?)\s*```/) ||
                       aiResponse.match(/\{[\s\S]*\}/);
      
      if (!jsonMatch) {
        throw new Error('Could not find valid JSON in AI response');
      }
      
      const jsonString = jsonMatch[1] || jsonMatch[0];
      const config = JSON.parse(jsonString);
      
      console.log('📋 AI-Generated Configuration:');
      console.log(`- Project: ${config.details.projectName}`);
      console.log(`- Client: ${config.details.clientName}`);
      console.log(`- Template: ${config.templateType}`);
      console.log(`- Job Title: ${config.customization.jobTitle}`);
      console.log(`- Location: ${config.customization.location}`);
      console.log(`- Experience: ${config.customization.yearsExperience}\n`);

      await this.createProject(
        config.details, 
        config.templateType, 
        config.customization
      );
      
      console.log('✅ Website generated from AI response successfully!');
      console.log(`📁 Project created in: ${config.details.projectName}`);
      console.log('🚀 Run "npm run dev" to start development');
      
      return config.details.projectName;
      
    } catch (error) {
      console.error('❌ Failed to process AI response:', error.message);
      throw error;
    }
  }
}

// Export for use
module.exports = { AIPromptGenerator };

// Example usage functions
async function generatePrompt(clientInfo, templateType = null) {
  const aiGenerator = new AIPromptGenerator();
  return await aiGenerator.generateFromClientInfo(clientInfo, templateType);
}

async function generateFromAIResponse(aiResponseFile) {
  const aiGenerator = new AIPromptGenerator();
  return await aiGenerator.generateFromAIResponse(aiResponseFile);
}

// Run if called directly
if (require.main === module) {
  const command = process.argv[2];
  
  if (command === 'prompt') {
    // Get template type from command line arguments
    const templateType = process.argv[3]; // e.g., "business" or "portfolio"
    
    // Generate prompt from client info
    const exampleClientInfo = {
      clientName: "Sarah Johnson",
      businessName: "Creative Design Studio",
      email: "sarah@creativedesignstudio.com",
      location: "Portland, OR",
      description: "I need a portfolio website for my graphic design business. I specialize in branding and logo design for small businesses.",
      requirements: "Modern, clean design with portfolio gallery, about section, and contact form. Should showcase my work and be mobile-friendly.",
      targetAudience: "Small business owners and startups",
      industry: "Graphic Design",
      colorPreferences: "Blue and gray, professional look",
      stylePreferences: "Modern and minimal"
    };
    
    generatePrompt(exampleClientInfo, templateType)
      .then(prompt => {
        console.log('\n🎉 AI Prompt generated successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else if (command === 'generate') {
    // Generate website from AI response file
    const aiResponseFile = process.argv[3];
    if (!aiResponseFile) {
      console.error('Please provide the AI response file path');
      process.exit(1);
    }
    
    generateFromAIResponse(aiResponseFile)
      .then(projectName => {
        console.log(`\n🎉 Website generated: ${projectName}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    console.log('Usage:');
    console.log('  node scripts/ai-prompt-generator.js prompt [template]     # Generate AI prompt (template: business/portfolio)');
    console.log('  node scripts/ai-prompt-generator.js generate <response-file>  # Generate website from AI response');
    console.log('');
    console.log('Examples:');
    console.log('  node scripts/ai-prompt-generator.js prompt business       # Generate business template prompt');
    console.log('  node scripts/ai-prompt-generator.js prompt portfolio      # Generate portfolio template prompt');
    console.log('  node scripts/ai-prompt-generator.js prompt                # Auto-detect template type');
  }
} 