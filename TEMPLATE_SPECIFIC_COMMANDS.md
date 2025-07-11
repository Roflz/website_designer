# Template-Specific AI Prompt Commands

## 🎯 **New Commands Available**

### Generate Template-Specific AI Prompts

```bash
# Auto-detect template type based on client info
npm run prompt

# Specify business template
npm run prompt:business

# Specify portfolio template  
npm run prompt:portfolio
```

### Generate Website from AI Response

```bash
# Generate website from AI response file
npm run generate:from-ai ai-response.json
```

### Testing

```bash
# Test the template-specific system
npm run test:template-specific
```

## 🔧 **What These Commands Do**

### `npm run prompt:business`
- Generates AI prompt specifically for business websites
- Ensures correct JSON structure with `name` field for navigation
- Includes `highlights` and `companyInfo` arrays for about section
- Focuses on business services, testimonials, and processes

### `npm run prompt:portfolio`
- Generates AI prompt specifically for portfolio websites
- Ensures correct JSON structure for individual professionals
- Focuses on personal skills, experience, and projects
- Includes portfolio-specific sections like skills and experience

### `npm run prompt`
- Auto-detects template type based on client information
- Uses business keywords (company, agency, consulting) vs portfolio keywords (freelancer, developer, individual)
- Defaults to business template if unclear

### `npm run generate:from-ai`
- Takes AI response JSON and maps it to template-specific structure
- Ensures compatibility with template expectations
- Provides fallback content for missing sections

## 🚀 **Workflow**

1. **Generate Template-Specific Prompt**:
   ```bash
   npm run prompt:business
   ```

2. **Send to AI**: Copy the prompt and send to ChatGPT/Claude

3. **Save AI Response**: Save as `ai-response.json`

4. **Generate Website**:
   ```bash
   npm run generate:from-ai ai-response.json
   ```

5. **Verify Results**: Check that navigation items and sections display correctly

## ✅ **Benefits**

- **Fixes Navigation Issues**: Ensures `name` field is used for navigation items
- **Fixes Empty Sections**: Provides `highlights` and `companyInfo` arrays for business template
- **Template-Specific Guidance**: AI gets specific instructions for each template type
- **Fallback Content**: Sensible defaults for missing sections
- **Consistent Structure**: Maintains consistent JSON structure across different AI responses

## 📋 **Available Commands Summary**

| Command | Description |
|---------|-------------|
| `npm run prompt` | Auto-detect template type and generate prompt |
| `npm run prompt:business` | Generate business template prompt |
| `npm run prompt:portfolio` | Generate portfolio template prompt |
| `npm run generate:from-ai` | Generate website from AI response |
| `npm run test:template-specific` | Test the template-specific system | 