const { AIPromptGenerator } = require('./ai-prompt-generator.js');

async function testTemplateSpecificPrompts() {
  console.log('🧪 Testing Template-Specific AI Prompt System\n');

  const aiGenerator = new AIPromptGenerator();

  // Test client info
  const clientInfo = {
    clientName: "Maria Rodriguez",
    businessName: "EcoTech Solutions",
    email: "maria@ecotechsolutions.com",
    location: "Portland, OR",
    description: "Environmental technology consulting firm helping companies implement sustainable solutions.",
    requirements: "Modern, eco-friendly design with green theme. Include services, testimonials, case studies.",
    targetAudience: "Corporations, government agencies, eco-conscious businesses",
    industry: "Environmental Technology",
    colorPreferences: "Green and blue theme",
    stylePreferences: "Modern, professional, eco-friendly"
  };

  // Test business template prompt
  console.log('📋 Testing Business Template Prompt:');
  console.log('='.repeat(50));
  try {
    const businessPrompt = await aiGenerator.generateFromClientInfo(clientInfo, 'business');
    console.log('✅ Business template prompt generated successfully');
  } catch (error) {
    console.error('❌ Business template prompt failed:', error.message);
  }

  console.log('\n');

  // Test portfolio template prompt
  console.log('📋 Testing Portfolio Template Prompt:');
  console.log('='.repeat(50));
  try {
    const portfolioPrompt = await aiGenerator.generateFromClientInfo(clientInfo, 'portfolio');
    console.log('✅ Portfolio template prompt generated successfully');
  } catch (error) {
    console.error('❌ Portfolio template prompt failed:', error.message);
  }

  console.log('\n');

  // Test auto-detection
  console.log('📋 Testing Auto-Detection:');
  console.log('='.repeat(50));
  try {
    const autoPrompt = await aiGenerator.generateFromClientInfo(clientInfo);
    console.log('✅ Auto-detection prompt generated successfully');
  } catch (error) {
    console.error('❌ Auto-detection prompt failed:', error.message);
  }

  console.log('\n🎉 Template-specific prompt system test completed!');
}

// Run test if called directly
if (require.main === module) {
  testTemplateSpecificPrompts().catch(console.error);
}

module.exports = { testTemplateSpecificPrompts }; 