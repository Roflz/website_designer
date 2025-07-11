# Template-Specific AI Prompt System

## Overview

The template-specific AI prompt system ensures that AI-generated content matches the exact structure expected by each template type (business vs portfolio). This prevents issues like missing navigation items, empty sections, and structural mismatches.

## Features

### 🎯 **Template-Specific Prompts**
- **Business Template**: Optimized for company websites with services, testimonials, and business processes
- **Portfolio Template**: Optimized for individual professionals with skills, experience, and personal projects
- **Auto-Detection**: Automatically determines template type based on client information

### 🔧 **Content Mapping**
- Maps AI response to template-specific structure
- Ensures correct field names (e.g., `name` vs `label` for navigation)
- Provides fallback content for missing sections
- Maintains AI reasoning while ensuring structural compatibility

## Usage

### Generate Template-Specific Prompts

```bash
# Auto-detect template type
npm run prompt

# Specify business template
npm run prompt:business

# Specify portfolio template  
npm run prompt:portfolio

# Direct command with template argument
npm run prompt portfolio
```

### Generate Website from AI Response

```bash
# Generate website from AI response
npm run generate-from-ai ai-response.json
```

## Template-Specific Requirements

### Business Template
- **Header Navigation**: Uses `name` field (not `label`) for navigation items
- **About Section**: Includes `highlights` array with business achievements and `companyInfo` array
- **Services Focus**: Emphasizes business services, team expertise, and client results
- **Testimonials**: Includes client testimonials with company names and roles
- **Process**: Includes business process/workflow steps
- **Contact**: Business contact information with professional details

### Portfolio Template
- **Header Navigation**: Uses `name` field (not `label`) for navigation items
- **Personal Focus**: Emphasizes individual skills, experience, and personal achievements
- **Projects**: Showcases individual work with technologies used
- **Skills**: Technical skills with proficiency levels
- **Experience**: Work history and education
- **Contact**: Personal contact information

## JSON Structure Examples

### Business Template Structure
```json
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
      "businessName": "Business Name",
      "navItems": [
        { "name": "Home", "href": "#home" },
        { "name": "About", "href": "#about" },
        { "name": "Services", "href": "#services" }
      ]
    },
    "aboutContent": {
      "heading": "About Us",
      "highlights": [
        { "icon": "Award", "title": "Achievement", "subtitle": "Description" }
      ],
      "companyInfo": [
        { "icon": "Briefcase", "text": "Company detail" }
      ]
    }
  }
}
```

### Portfolio Template Structure
```json
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
        { "name": "Skills", "href": "#skills" }
      ]
    },
    "heroContent": {
      "greeting": "Hello, I'm",
      "name": "Client Name",
      "title": "Professional Title",
      "description": "Personal description"
    }
  }
}
```

## Testing

Run the template-specific test to verify the system works correctly:

```bash
npm run test:template-specific
```

## Benefits

1. **Structural Compatibility**: Ensures AI-generated content matches template expectations
2. **Reduced Errors**: Prevents missing navigation items and empty sections
3. **Better AI Guidance**: Provides template-specific instructions to AI
4. **Consistent Output**: Maintains consistent structure across different AI responses
5. **Fallback Content**: Provides sensible defaults for missing sections

## Workflow

1. **Generate Template-Specific Prompt**: Use `npm run prompt:business` or `npm run prompt:portfolio`
2. **Send to AI**: Copy the prompt and send to ChatGPT/Claude
3. **Save AI Response**: Save the AI response as `ai-response.json`
4. **Generate Website**: Run `npm run generate-from-ai ai-response.json`
5. **Verify Results**: Check that navigation items and sections display correctly

## Troubleshooting

### Common Issues

1. **Missing Navigation Items**: Ensure AI response uses `name` field for navItems
2. **Empty About Sections**: Check that `highlights` and `companyInfo` arrays are included
3. **Template Mismatch**: Verify `templateType` matches the intended template

### Debug Commands

```bash
# Test template-specific prompts
npm run test:template-specific

# Generate and inspect prompts
npm run prompt:business > business-prompt.txt
npm run prompt:portfolio > portfolio-prompt.txt
``` 