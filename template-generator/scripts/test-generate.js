const { TemplateGenerator } = require('./generate.js');

class TestGenerator extends TemplateGenerator {
  async generateWebsite() {
    try {
      console.log('🧪 Test Website Generator');
      console.log('Creating project with default values...\n');
      
      // Default values for testing
      const details = {
        projectName: 'test-project',
        clientName: 'Test Client',
        businessName: 'Test Business',
        tagline: 'Professional solutions for your business',
        description: 'We help businesses grow with modern digital solutions',
        email: 'test@example.com',
        phone: '+1 (555) 123-4567',
        primaryColor: 'Blue',
        secondaryColor: 'Gray'
      };

      const templateType = 'portfolio';
      
      const customization = {
        jobTitle: 'Software Developer',
        location: 'San Francisco, CA',
        yearsExperience: '3+',
        githubUrl: 'https://github.com/testuser',
        linkedinUrl: 'https://linkedin.com/in/testuser',
        fiverrUrl: 'https://fiverr.com/testuser',
        includeSkills: true,
        includeExperience: true,
        includeProjects: true,
        includeEducation: true
      };

      console.log('📋 Using default values:');
      console.log(`- Project: ${details.projectName}`);
      console.log(`- Client: ${details.clientName}`);
      console.log(`- Template: ${templateType}`);
      console.log(`- Skills: ${customization.includeSkills ? 'Yes' : 'No'}`);
      console.log(`- Experience: ${customization.includeExperience ? 'Yes' : 'No'}`);
      console.log(`- Projects: ${customization.includeProjects ? 'Yes' : 'No'}`);
      console.log(`- Education: ${customization.includeEducation ? 'Yes' : 'No'}\n`);

      await this.createProject(details, templateType, customization);
      
      console.log('✅ Test project generated successfully!');
      console.log(`📁 Project created in: ${details.projectName}`);
      console.log('🚀 Run "npm run dev" to start development');
      
    } catch (error) {
      console.error('❌ Failed to generate test website:', error.message);
      process.exit(1);
    }
  }
}

// Run test generator
const testGenerator = new TestGenerator();
testGenerator.generateWebsite(); 