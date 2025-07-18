const { AutoTestGenerator } = require('./auto-test-generator.js');
const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

// At the top, import the unified prompt generator
const { generatePrompt } = require('./ai-prompt-generator.js');

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
    // Portfolio-specific required sections and fields
    const portfolioSections = {
      headerSection: {
        description: "Header section with logo and navItems (name, href).",
        example: {
          logo: "Your Logo",
          navItems: [
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Experience", href: "#experience" },
            { name: "Contact", href: "#contact" }
          ]
        }
      },
      footerSection: {
        description: "Footer with brand, quickLinks, contactInfo, copyright, backToTop.",
        example: {
          brand: {
            name: "Your Name",
            description: "A short description or tagline for your portfolio.",
            socialLinks: [
              { name: "GitHub", url: "https://github.com/yourusername" },
              { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
              { name: "Website", url: "https://yourwebsite.com" }
            ]
          },
          quickLinks: [
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Projects", href: "#projects" },
            { name: "Experience", href: "#experience" },
            { name: "Contact", href: "#contact" }
          ],
          contactInfo: ["your@email.com", "Your Location"],
          copyright: {
            year: 2024,
            name: "Your Name",
            madeWith: "Made with",
            love: "and lots of coffee."
          },
          backToTop: "Back to top"
        }
      },
      heroSection: {
        description: "Hero section with greeting, name, title, description, ctas, stats, scrollIndicator.",
        example: {
          greeting: "Hello, I'm",
          name: "Your Name",
          title: "Your Professional Title or Tagline",
          description: "Short summary about yourself, your skills, and what you offer.",
          ctas: [
            { label: "View My Work", action: "scroll", target: "projects", icon: null, style: "primary" },
            { label: "Get In Touch", action: "scroll", target: "contact", icon: null, style: "secondary" },
            { label: "Download CV", action: "download", target: "/cv.pdf", icon: null, style: "secondary" }
          ],
          stats: [
            { value: "5+", label: "Years Experience" },
            { value: "20", label: "Projects Completed" }
          ],
          scrollIndicator: { target: "about" }
        }
      },
      aboutSection: {
        description: "About section with heading, subheading, personalInfo, profileImage, profileBadge, whoIAm, whatIDo, downloadCV.",
        example: {
          heading: "About Me",
          subheading: "A short introduction about yourself and your journey",
          personalInfo: [
            { icon: "User", label: "Name", value: "Your Name" },
            { icon: "MapPin", label: "Location", value: "Your Location" }
          ],
          profileImage: { src: "", alt: "Profile Image" },
          profileBadge: "5+",
          whoIAm: { heading: "Who I Am", paragraphs: ["Paragraph 1", "Paragraph 2"] },
          whatIDo: { heading: "What I Do", skills: [{ title: "Frontend Development", description: "React, TypeScript, Next.js" }] },
          downloadCV: { label: "Download CV", icon: "User", href: "/cv.pdf" }
        }
      },
      skillsSection: {
        description: "Skills section with heading, subheading, skillCategories (icon, title, skills), additionalSkills.",
        example: {
          heading: "My Skills",
          subheading: "A summary of your technical skills and expertise",
          skillCategories: [
            { icon: "Code", title: "Frontend Development", skills: [{ name: "React", level: 90 }] }
          ],
          additionalSkills: ["Git", "Figma"]
        }
      },
      experienceSection: {
        description: "Experience section with heading, subheading, workExperience, education.",
        example: {
          heading: "Work Experience",
          subheading: "Your professional journey and educational background",
          workExperience: [
            { id: 1, title: "Job Title", company: "Company Name", location: "Location", period: "Start – End", description: "Role description.", technologies: ["React"], achievements: ["Achievement 1"] }
          ],
          education: [
            { id: 1, degree: "Degree", school: "School Name", location: "Location", period: "Start – End", description: "Studies description." }
          ]
        }
      },
      projectsSection: {
        description: "Projects section with heading, subheading, filters, projects.",
        example: {
          heading: "Featured Projects",
          subheading: "Showcase your best work and what you can do",
          filters: [
            { id: "all", label: "All" },
            { id: "web", label: "Web Apps" }
          ],
          projects: [
            { id: 1, title: "E-Commerce Platform", description: "Full-stack e-commerce platform.", image: "https://...", liveUrl: "https://...", githubUrl: "https://...", fiverrUrl: "https://...", technologies: ["React"], category: "web", featured: true }
          ]
        }
      },
      contactSection: {
        description: "Contact section with heading, subheading, connectHeading, connectText, sendMessageHeading, info, socialLinks, formFields, form, sentMessage.",
        example: {
          heading: "Get in Touch",
          subheading: "Ready to work together or have questions? Reach out!",
          connectHeading: "Let's Connect",
          connectText: "I'm always open to discussing new opportunities.",
          sendMessageHeading: "Send a Message",
          info: [
            { icon: "Mail", title: "Email", value: "your@email.com", link: "mailto:your@email.com" }
          ],
          socialLinks: [
            { name: "GitHub", url: "https://github.com/yourusername", color: "hover:bg-gray-800" }
          ],
          formFields: [
            { label: "Your Name", name: "name", type: "text" }
          ],
          form: {
            nameLabel: "Your Name",
            emailLabel: "Your Email",
            messageLabel: "Your Message",
            submitText: "Send Message",
            successTitle: "Message Sent!",
            successText: "Thank you for reaching out."
          },
          sentMessage: {
            heading: "Message Sent Successfully!",
            text: "Thank you for reaching out."
          }
        }
      },
      socialLinks: {
        description: "Array of social links (icon, label, link).",
        example: [
          { icon: "Github", label: "GitHub", link: "https://github.com/yourusername" }
        ]
      }
    };

    return `You are a professional website content generator. Based on the client information below, generate unique, contextual content for each section of their portfolio website.

CLIENT INFORMATION:
${JSON.stringify(clientInfo, null, 2)}

REQUIRED SECTIONS AND FIELDS:
${JSON.stringify(portfolioSections, null, 2)}

INSTRUCTIONS:
1. Analyze the client's background, skills, and requirements
2. Generate unique, professional content for each section
3. Make content specific to their personal brand and target audience
4. Use their actual name and contact info
5. Create realistic projects, experience, and skills
6. Match their color preferences and style requirements
7. Ensure all content is cohesive and professional

RESPONSE FORMAT:
Return a JSON object with this exact structure:
{
  "details": {
    "projectName": "generated-project-name",
    "clientName": "client's actual name",
    "tagline": "unique tagline based on their skills",
    "description": "unique personal description",
    "email": "their email",
    "phone": "their phone",
    "primaryColor": "color based on their preferences",
    "secondaryColor": "complementary color"
  },
  "templateType": "portfolio",
  "customization": {
    "headerSection": { ... },
    "footerSection": { ... },
    "heroSection": { ... },
    "aboutSection": { ... },
    "skillsSection": { ... },
    "experienceSection": { ... },
    "projectsSection": { ... },
    "contactSection": { ... },
    "socialLinks": [ ... ]
  }
}

IMPORTANT:
- Make content unique and specific to this client
- Don't use generic templates
- Base everything on their actual background and requirements
- Create realistic, professional content that matches their field
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
        headerSection: customization.headerSection || {},
        footerSection: customization.footerSection || {},
        heroSection: customization.heroSection || {},
        aboutSection: customization.aboutSection || {},
        skillsSection: customization.skillsSection || {},
        experienceSection: customization.experienceSection || {},
        projectsSection: customization.projectsSection || {},
        contactSection: customization.contactSection || {},
        socialLinks: customization.socialLinks || []
      }
    };
  }
}

// Export for use
module.exports = { AIContentGenerator };

// Example usage functions
async function generateFromResponse(responsePath) {
  const aiGenerator = new AIContentGenerator();
  return await aiGenerator.generateFromAIResponse(responsePath);
}

// Run if called directly
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args[0] === 'prompt') {
    // Delegate to the unified prompt generator
    require('./ai-prompt-generator.js');
    // Exit after delegation
    process.exit(0);
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