const { TemplateGenerator } = require('./generate.js');
const fs = require('fs-extra');
const path = require('path');

class AIPromptGenerator extends TemplateGenerator {
  constructor() {
    super();
  }

  async generateFromClientInfo(clientInfo) {
    try {
      console.log('🤖 AI-Powered Website Generator');
      console.log('Analyzing client information and generating AI prompt...\n');
      
      // Generate the AI prompt with client information
      const aiPrompt = this.generateAIPrompt(clientInfo);
      
      console.log('📝 Generated AI Prompt:');
      console.log('='.repeat(50));
      console.log(aiPrompt);
      console.log('='.repeat(50));
      console.log('\n📋 Instructions:');
      console.log('1. Copy the prompt above');
      console.log('2. Send it to an AI assistant (like ChatGPT, Claude, etc.)');
      console.log('3. Ask the AI to analyze the client information and provide a JSON configuration');
      console.log('4. The AI should return a JSON object with the following structure:');
      console.log('   - details: { projectName, clientName, businessName, tagline, description, email, phone, primaryColor, secondaryColor }');
      console.log('   - templateType: "portfolio" or "business"');
      console.log('   - customization: { jobTitle, location, yearsExperience, githubUrl, linkedinUrl, fiverrUrl, includeSkills, includeExperience, includeProjects, includeEducation }');
      console.log('5. Copy the AI response and save it to a file');
      console.log('6. Run: npm run generate-from-ai <filename>');
      
      return aiPrompt;
      
    } catch (error) {
      console.error('❌ Failed to generate AI prompt:', error.message);
      throw error;
    }
  }

  generateAIPrompt(clientInfo) {
    return `# Website Configuration Analysis

## Client Information
${this.formatClientInfo(clientInfo)}

## Task
Analyze the client information above and generate a JSON configuration for a professional website. Consider the following:

### Template Type Decision
- **Portfolio**: Choose if the client is a freelancer, developer, designer, or individual showcasing work
- **Business**: Choose if the client is a company, agency, startup, or service business

### Content Generation
- **Project Name**: Create a URL-friendly name from the business name
- **Tagline**: Generate a compelling tagline based on their business type and description
- **Description**: Write a brief business description
- **Job Title**: Determine appropriate professional title based on their work
- **Experience Level**: Extract or infer years of experience from their description
- **Location**: Use provided location or infer from context

### Design Choices
- **Primary Color**: Choose based on industry, preferences, or professional standards
- **Secondary Color**: Complementary color choice
- **Sections to Include**: Determine which sections (skills, experience, projects, education) are relevant

### Social Links
- Generate appropriate placeholder URLs for GitHub, LinkedIn, and Fiverr

## Required Output Format
Return ONLY a valid JSON object with this exact structure:

\`\`\`json
{
  "details": {
    "projectName": "url-friendly-project-name",
    "clientName": "Client Name",
    "businessName": "Business Name",
    "tagline": "Professional tagline here",
    "description": "Business description here",
    "email": "contact@example.com",
    "phone": "+1 (555) 123-4567",
    "primaryColor": "Blue",
    "secondaryColor": "Gray"
  },
  "templateType": "portfolio",
  "customization": {
    "jobTitle": "Professional Title",
    "location": "City, State",
    "yearsExperience": "3+",
    "githubUrl": "https://github.com/username",
    "linkedinUrl": "https://linkedin.com/in/username",
    "fiverrUrl": "https://fiverr.com/username",
    "includeSkills": true,
    "includeExperience": true,
    "includeProjects": true,
    "includeEducation": true
  }
}
\`\`\`

## Analysis Guidelines
- Be professional and appropriate for the client's industry
- Consider their target audience and business goals
- Make reasonable assumptions when information is missing
- Ensure all URLs are placeholder format (not real links)
- Choose colors that match their industry and preferences
- Include sections that would be relevant for their type of work

Please analyze the client information and provide the JSON configuration.`;
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
async function generatePrompt(clientInfo) {
  const aiGenerator = new AIPromptGenerator();
  return await aiGenerator.generateFromClientInfo(clientInfo);
}

async function generateFromAIResponse(aiResponseFile) {
  const aiGenerator = new AIPromptGenerator();
  return await aiGenerator.generateFromAIResponse(aiResponseFile);
}

// Run if called directly
if (require.main === module) {
  const command = process.argv[2];
  
  if (command === 'prompt') {
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
    
    generatePrompt(exampleClientInfo)
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
    console.log('  node ai-prompt-generator.js prompt                    # Generate AI prompt');
    console.log('  node ai-prompt-generator.js generate <response-file>  # Generate website from AI response');
  }
} 