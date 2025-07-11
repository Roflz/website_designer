# Fiverr Client Information Template

Use this template to collect information from Fiverr clients and generate their website automatically.

## Required Information

### Basic Details
- **Client Name**: [Client's full name]
- **Business Name**: [Business/company name]
- **Email**: [Contact email]
- **Phone**: [Contact phone - optional]
- **Location**: [City, State/Country]

### Project Requirements
- **Description**: [What they need - portfolio, business site, etc.]
- **Requirements**: [Specific features they want]
- **Target Audience**: [Who the website is for]
- **Industry/Business Type**: [What they do]

### Social Links (Optional)
- **GitHub URL**: [If they have one]
- **LinkedIn URL**: [If they have one]
- **Fiverr URL**: [Your Fiverr profile]

### Design Preferences
- **Color Preferences**: [Any specific colors mentioned]
- **Style Preferences**: [Modern, minimal, creative, etc.]
- **Special Requirements**: [Any specific features or sections]

## Example Client Information

```javascript
const clientInfo = {
  clientName: "Sarah Johnson",
  businessName: "Creative Design Studio",
  email: "sarah@creativedesignstudio.com",
  phone: "+1 (555) 123-4567",
  location: "Portland, OR",
  description: "I need a portfolio website for my graphic design business. I specialize in branding and logo design for small businesses.",
  requirements: "Modern, clean design with portfolio gallery, about section, and contact form. Should showcase my work and be mobile-friendly.",
  targetAudience: "Small business owners and startups",
  industry: "Graphic Design",
  githubUrl: "https://github.com/sarahjohnson",
  linkedinUrl: "https://linkedin.com/in/sarahjohnson",
  fiverrUrl: "https://fiverr.com/yourusername",
  colorPreferences: "Blue and gray, professional look",
  stylePreferences: "Modern and minimal",
  specialRequirements: "Include testimonials section"
};
```

## Usage Instructions

1. **Collect Information**: Use this template to gather client details from Fiverr messages
2. **Format Data**: Convert the information into the JavaScript object format above
3. **Run AI Generator**: Use the `scripts/ai-generate.js` script to create the website
4. **Review & Customize**: Check the generated site and make any final adjustments
5. **Deliver**: Provide the client with the source code and live URL

## AI Interpretation Features

The AI generator will automatically:

- **Determine Template Type**: Portfolio vs Business site based on keywords
- **Generate Content**: Appropriate taglines, descriptions, and job titles
- **Choose Colors**: Based on preferences and industry
- **Select Sections**: Skills, experience, projects, education based on requirements
- **Create Project Name**: URL-friendly name from business name
- **Set Experience Level**: Based on keywords in description
- **Choose Job Title**: Appropriate title based on industry and skills mentioned

## Quick Start

```bash
# Run with example client info
node scripts/ai-generate.js

# Or use in your own script
const { AIGenerator } = require('./scripts/ai-generate.js');
const aiGenerator = new AIGenerator();
const projectName = await aiGenerator.generateFromClientInfo(clientInfo);
``` 