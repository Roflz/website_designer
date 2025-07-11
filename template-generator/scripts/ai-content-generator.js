const { AutoTestGenerator } = require('./auto-test-generator.js');
const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

class AIContentGenerator extends AutoTestGenerator {
  constructor() {
    super();
  }

  async promptYesNo(question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return new Promise(resolve => {
      rl.question(question, answer => {
        rl.close();
        resolve(answer.trim().toLowerCase() === 'y' || answer.trim().toLowerCase() === 'yes');
      });
    });
  }

  async generateFromClientInfo(clientInfo) {
    try {
      console.log('🤖 AI Content Generator');
      console.log('Analyzing client info and generating unique content...\n');
      
      // Generate AI prompt with all possible sections
      const prompt = this.generateAIPrompt(clientInfo);
      
      console.log('📝 Generated AI Prompt:');
      console.log('='.repeat(50));
      console.log(prompt);
      console.log('='.repeat(50));
      console.log('\n📋 Send this prompt to ChatGPT/Claude and save the response as "ai-response.json"');
      console.log('Then run: npm run generate-from-ai-response\n');
      
      return prompt;
      
    } catch (error) {
      console.error('❌ Failed to generate AI prompt:', error.message);
      throw error;
    }
  }

  generateAIPrompt(clientInfo) {
    const sections = this.getRequiredSections();
    
    return `You are a professional website content generator. Based on the client information below, generate unique, contextual content for each section of their website.

CLIENT INFORMATION:
${JSON.stringify(clientInfo, null, 2)}

REQUIRED SECTIONS AND FIELDS:
${JSON.stringify(sections, null, 2)}

INSTRUCTIONS:
1. Analyze the client's business type, industry, and requirements
2. Generate unique, professional content for each section
3. Make content specific to their business and target audience
4. Use their actual name, business name, and contact info
5. Create realistic testimonials, projects, and experience
6. Match their color preferences and style requirements
7. Ensure all content is cohesive and professional

RESPONSE FORMAT:
Return a JSON object with this exact structure:
{
  "details": {
    "projectName": "generated-project-name",
    "clientName": "client's actual name",
    "businessName": "business name",
    "tagline": "unique tagline based on their business",
    "description": "unique business description",
    "email": "their email",
    "phone": "their phone",
    "primaryColor": "color based on their preferences",
    "secondaryColor": "complementary color"
  },
  "templateType": "portfolio" or "business",
  "customization": {
    // All the section content as specified in sections above
  }
}

IMPORTANT: 
- Make content unique and specific to this client
- Don't use generic templates
- Base everything on their actual business and requirements
- Create realistic, professional content that matches their industry
- Use their actual contact information and preferences

Generate the JSON response now:`;
  }

  getRequiredSections() {
    return {
      // Header section
      "headerContent": {
        "description": "Header section with businessName and navItems. Infer navItems from the sections present in the site (e.g., Home, About, Services, Projects, Contact, etc.).",
        "example": {
          "businessName": "EcoTech Solutions",
          "navItems": [
            { "label": "Home", "href": "/" },
            { "label": "About", "href": "#about" },
            { "label": "Services", "href": "#services" },
            { "label": "Projects", "href": "#projects" },
            { "label": "Contact", "href": "#contact" }
          ]
        }
      },
      // Portfolio-specific sections
      "heroContent": {
        "description": "For portfolio: greeting, name, title, description, ctas, stats, scrollIndicator. For business: headline, subheadline, ctaText, ctaLink, image",
        "example": {
          "greeting": "Hello, I'm",
          "name": "Client Name",
          "title": "Professional Title",
          "description": "Unique description based on their skills and experience",
          "ctas": [{"label": "View My Work", "action": "scroll", "target": "projects", "icon": null, "style": "primary"}],
          "stats": [{"value": "5+", "label": "Years Experience"}]
        }
      },
      "aboutContent": {
        "description": "About section with personal info, highlights, mission (with title and text), etc.",
        "example": {
          "heading": "About Me",
          "subheading": "Get to know me better",
          "personalInfo": [{"icon": "User", "label": "Name", "value": "Client Name"}],
          "whoIAm": {"heading": "Who I Am", "paragraphs": ["Unique paragraph 1", "Unique paragraph 2"]},
          "whatIDo": {"heading": "What I Do", "skills": [{"title": "Skill Category", "description": "Skills description"}]},
          "mission": {"title": "Our Mission", "text": "Our mission is to..."}
        }
      },
      "skillsContent": {
        "description": "Skill categories with skills and levels, additional skills list",
        "example": {
          "heading": "My Skills",
          "subheading": "Technical expertise overview",
          "skillCategories": [{"icon": "Code", "title": "Category", "skills": [{"name": "Skill", "level": 90}]}],
          "additionalSkills": ["Skill 1", "Skill 2"]
        }
      },
      "experienceContent": {
        "description": "Work experience and education history",
        "example": {
          "heading": "Work Experience",
          "subheading": "Professional journey",
          "workExperience": [{"id": 1, "title": "Job Title", "company": "Company", "location": "Location", "period": "2020-2023", "description": "Job description", "technologies": ["Tech1", "Tech2"], "achievements": ["Achievement 1", "Achievement 2"]}],
          "education": [{"id": 1, "degree": "Degree", "school": "School", "period": "2016-2020", "description": "Education description", "achievements": ["Achievement 1"]}]
        }
      },
      "projectsContent": {
        "description": "Project showcase with filters, case studies, and CTA",
        "example": {
          "title": "My Projects",
          "subtitle": "Showcase of work",
          "filters": [{"id": "all", "label": "All Projects"}],
          "caseStudies": [{"id": 1, "title": "Project Name", "category": "web", "image": "image-url", "description": "Project description", "technologies": ["Tech1", "Tech2"], "liveUrl": "live-url", "codeUrl": "code-url", "fiverrUrl": "fiverr-url"}],
          "cta": {"text": "View All Projects", "icon": "Eye", "link": "#contact"}
        }
      },
      "servicesContent": {
        "description": "Services offered with icons, titles, and descriptions",
        "example": {
          "title": "Our Services",
          "subtitle": "What we offer",
          "services": [{"icon": "Code", "title": "Service Name", "description": "Service description"}],
          "cta": {"text": "Get a Quote", "link": "#contact"}
        }
      },
      "testimonialsContent": {
        "description": "Client testimonials with names, roles, companies, and quotes",
        "example": {
          "title": "What Clients Say",
          "subtitle": "Client feedback",
          "testimonials": [{"name": "Client Name", "role": "Role", "company": "Company", "quote": "Unique testimonial quote"}]
        }
      },
      "processContent": {
        "description": "Work process steps with icons, titles, and descriptions",
        "example": {
          "title": "Our Process",
          "subtitle": "How we work",
          "steps": [{"icon": "Search", "title": "Step Title", "description": "Step description"}]
        }
      },
      "footerContent": {
        "description": "Footer section with copyright, links, and social media. Always include at least a copyright field.",
        "example": {
          "copyright": "© 2024 EcoTech Solutions. All rights reserved.",
          "links": [
            { "label": "Privacy Policy", "href": "/privacy" },
            { "label": "Terms of Service", "href": "/terms" }
          ],
          "social": [
            { "icon": "Github", "label": "GitHub", "href": "https://github.com/yourusername" },
            { "icon": "Linkedin", "label": "LinkedIn", "href": "https://linkedin.com/in/yourusername" }
          ]
        }
      },
      "contactContent": {
        "description": "Contact information, social links, and map. Map must have label and placeholder. All arrays should have unique keys (e.g., label or href).",
        "example": {
          "title": "Get In Touch",
          "subtitle": "Contact us",
          "contactInfo": [
            { "icon": "Mail", "label": "Email", "value": "email@example.com", "link": "mailto:email@example.com" }
          ],
          "socialLinks": [
            { "icon": "Github", "label": "GitHub", "link": "https://github.com/username" }
          ],
          "map": { "label": "Our Location", "placeholder": "Map will appear here" }
        }
      }
    };
  }

  async generateFromAIResponse(responsePath = 'config/ai-response.json') {
    try {
      console.log('🤖 Processing AI Response...\n');
      
      // Read AI response
      const aiResponse = await fs.readJson(responsePath);
      
      console.log('📋 AI Generated Content:');
      console.log(`- Project: ${aiResponse.details.projectName}`);
      console.log(`- Client: ${aiResponse.details.clientName}`);
      console.log(`- Template: ${aiResponse.templateType}`);
      console.log(`- Business: ${aiResponse.details.businessName}\n`);

      // Check if project folder exists
      const workspacesDir = path.join(__dirname, '../workspaces');
      const projectPath = path.join(workspacesDir, aiResponse.details.projectName);
      if (await fs.pathExists(projectPath)) {
        const confirm = await this.promptYesNo(`⚠️  The folder "${aiResponse.details.projectName}" already exists. Delete and overwrite? (y/n): `);
        if (!confirm) {
          console.log('❌ Aborted. Project folder was not deleted or overwritten.');
          return;
        }
        await fs.remove(projectPath);
        console.log(`🗑️  Deleted existing folder: ${aiResponse.details.projectName}`);
      }

      // Map AI response to template-specific structure
      const mappedContent = this.mapToTemplateStructure(aiResponse);

      // Create project with mapped content
      await this.createProject(
        mappedContent.details, 
        mappedContent.templateType, 
        mappedContent.customization
      );

      // Config validation temporarily disabled during development
      // console.log('🔎 Config validation skipped during development');

      console.log('✅ AI-generated website created successfully!');
      console.log(`📁 Project created in: ${aiResponse.details.projectName}`);
      console.log('🚀 Run "npm run dev" to start development');
      
      return aiResponse.details.projectName;
      
    } catch (error) {
      console.error('❌ Failed to process AI response:', error.message);
      throw error;
    }
  }

  mapToTemplateStructure(aiResponse) {
    const templateType = aiResponse.templateType;
    
    if (templateType === 'business') {
      return this.mapBusinessContent(aiResponse);
    } else {
      return this.mapPortfolioContent(aiResponse);
    }
  }

  mapBusinessContent(aiResponse) {
    const customization = aiResponse.customization;
    
    return {
      details: aiResponse.details,
      templateType: aiResponse.templateType,
      customization: {
        // Map header content - ensure navItems use "name" field
        headerContent: {
          businessName: customization.headerContent?.businessName || aiResponse.details.businessName,
          navItems: (customization.headerContent?.navItems || []).map(item => ({
            name: item.name || item.label || item.key,
            href: item.href
          }))
        },
        // Map hero content
        heroContent: {
          headline: customization.heroContent?.headline || "Welcome to " + aiResponse.details.businessName,
          subheadline: customization.heroContent?.subheadline || aiResponse.details.description,
          ctaText: customization.heroContent?.ctaText || "Get Started",
          ctaLink: customization.heroContent?.ctaLink || "#services",
          image: customization.heroContent?.image || ""
        },
        // Map about content - ensure highlights and companyInfo are included
        aboutContent: {
          heading: customization.aboutContent?.title || "About Our Business",
          subheading: customization.aboutContent?.text || "Learn more about our company",
          personalInfo: customization.aboutContent?.personalInfo || [],
          
          mission: customization.aboutContent?.mission || {
            title: "Our Mission",
            text: "To provide exceptional service and value to our clients."
          },
          highlights: customization.aboutContent?.highlights || [
            { icon: "Award", title: "5+ Years Experience", subtitle: "Industry Expertise" },
            { icon: "Users", title: "100+ Happy Clients", subtitle: "Trusted Partner" }
          ],
          companyInfo: customization.aboutContent?.companyInfo || [
            { icon: "Briefcase", text: "Founded in 2020" },
            { icon: "Globe", text: "Serving Nationwide" }
          ]
        },
        // Map other content sections
        servicesContent: customization.servicesContent || {
          title: "Our Services",
          subtitle: "What we offer",
          services: [],
          cta: { text: "Get a Quote", link: "#contact" }
        },
        projectsContent: customization.projectsContent || {
          title: "Our Projects",
          subtitle: "Recent work",
          filters: [{ id: "all", label: "All Projects" }],
          caseStudies: [],
          cta: { text: "View All Projects", icon: "Eye", link: "#contact" }
        },
        testimonialsContent: customization.testimonialsContent || {
          title: "What Clients Say",
          subtitle: "Client feedback",
          testimonials: []
        },
        processContent: customization.processContent || {
          title: "Our Process",
          subtitle: "How we work",
          steps: []
        },
        footerContent: customization.footerContent || {
          copyright: `© 2024 ${aiResponse.details.businessName}. All rights reserved.`,
          links: [],
          social: []
        },
        contactContent: customization.contactContent || {
          title: "Get In Touch",
          subtitle: "Contact us",
          contactInfo: [],
          socialLinks: [],
          map: { label: "Our Location", placeholder: "Map will appear here" }
        }
      }
    };
  }

  mapPortfolioContent(aiResponse) {
    const customization = aiResponse.customization;
    
    return {
      details: aiResponse.details,
      templateType: aiResponse.templateType,
      customization: {
        // Map header content - ensure navItems use "name" field
        headerContent: {
          businessName: customization.headerContent?.businessName || aiResponse.details.clientName,
          navItems: (customization.headerContent?.navItems || []).map(item => ({
            name: item.name || item.label || item.key,
            href: item.href
          }))
        },
        // Map hero content for portfolio
        heroContent: {
          greeting: customization.heroContent?.greeting || "Hello, I'm",
          name: customization.heroContent?.name || aiResponse.details.clientName,
          title: customization.heroContent?.title || "Professional",
          description: customization.heroContent?.description || aiResponse.details.description,
          ctas: customization.heroContent?.ctas || [
            { label: "View My Work", action: "scroll", target: "projects", icon: null, style: "primary" }
          ],
          stats: customization.heroContent?.stats || [
            { value: "3+", label: "Years Experience" }
          ]
        },
        // Map other portfolio-specific content
        aboutContent: customization.aboutContent || {
          heading: "About Me",
          subheading: "Get to know me better",
          personalInfo: [],
          whoIAm: { heading: "Who I Am", paragraphs: [aiResponse.details.description] },
          whatIDo: { heading: "What I Do", skills: [] },
          mission: { title: "My Mission", text: "To deliver exceptional results for my clients." }
        },
        skillsContent: customization.skillsContent || {
          heading: "My Skills",
          subheading: "Technical expertise",
          skillCategories: [],
          additionalSkills: []
        },
        experienceContent: customization.experienceContent || {
          heading: "Work Experience",
          subheading: "Professional journey",
          workExperience: [],
          education: []
        },
        projectsContent: customization.projectsContent || {
          title: "My Projects",
          subtitle: "Showcase of work",
          filters: [{ id: "all", label: "All Projects" }],
          caseStudies: [],
          cta: { text: "View All Projects", icon: "Eye", link: "#contact" }
        },
        contactContent: customization.contactContent || {
          title: "Get In Touch",
          subtitle: "Contact me",
          contactInfo: [],
          socialLinks: [],
          map: { label: "My Location", placeholder: "Map will appear here" }
        }
      }
    };
  }
}

// Export for use
module.exports = { AIContentGenerator };

// Example usage functions
async function generatePrompt(clientInfo) {
  const aiGenerator = new AIContentGenerator();
  return await aiGenerator.generateFromClientInfo(clientInfo);
}

async function generateFromResponse(responsePath) {
  const aiGenerator = new AIContentGenerator();
  return await aiGenerator.generateFromAIResponse(responsePath);
}

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args[0] === 'prompt') {
    // Example client info for testing
    const exampleClientInfo = {
      clientName: "Maria Rodriguez",
      businessName: "EcoTech Solutions",
      email: "maria@ecotechsolutions.com",
      location: "Portland, OR",
      description: "I need a business website for my environmental technology consulting firm. We help companies implement sustainable technology solutions and reduce their carbon footprint.",
      requirements: "Modern, eco-friendly design with green theme. Include services, testimonials, case studies, and contact form. Highlight our expertise in renewable energy and sustainability.",
      targetAudience: "Corporations, government agencies, eco-conscious businesses",
      industry: "Environmental Technology Consulting",
      colorPreferences: "Green, blue, and white - eco-friendly palette",
      stylePreferences: "Clean, modern, professional, environmentally conscious"
    };

    generatePrompt(exampleClientInfo)
      .then(async prompt => {
        // Save prompt to file in the prompts directory inside template-generator
        const path = require('path');
        const fs = require('fs-extra');
        const promptPath = path.resolve(__dirname, '../prompts/ai-prompt.txt');
        await fs.ensureDir(path.dirname(promptPath));
        await fs.writeFile(promptPath, prompt, 'utf8');
        console.log(`\n💾 Prompt saved to ${promptPath}`);
        console.log('\n🎉 AI prompt generated successfully!');
        console.log('📝 Copy the prompt above or from template-generator/prompts/ai-prompt.txt and send it to ChatGPT/Claude');
        console.log('💾 Save the AI response as "ai-response.json"');
        console.log('🚀 Then run: npm run generate-from-ai-response');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else if (args[0] === 'generate') {
    generateFromResponse()
      .then(projectName => {
        console.log(`\n🎉 AI-generated website: ${projectName}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  } else {
    console.log('Usage:');
    console.log('  node scripts/ai-content-generator.js prompt  - Generate AI prompt');
    console.log('  node scripts/ai-content-generator.js generate - Generate website from AI response');
  }
} 