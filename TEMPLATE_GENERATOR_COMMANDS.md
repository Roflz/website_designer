# Template Generator Commands Reference

## Root Directory Commands

These commands can be run from the root directory and correspond to commands in the `template-generator` workspace:

### **Website Generation Commands**

| Root Command | Template-Generator Command | Description |
|--------------|---------------------------|-------------|
| `npm run generate:prompt` | `npm run ai-prompt` | Generates AI prompt from hardcoded client info (Maria Rodriguez, EcoTech Solutions) |
| `npm run generate:website` | `npm run generate-from-ai-response` | Creates website from `ai-response.json` file |
| `npm run generate:auto` | `npm run auto` | Auto-generates website with test content using `auto-test-generator.js` |
| `npm run generate:interactive` | `npm run generate` | Interactive website generation with manual input prompts |
| `npm run deploy:website` | `npm run deploy` | Deploys generated website to Vercel |

### **Workflow Commands**

| Root Command | Template-Generator Command | Description |
|--------------|---------------------------|-------------|
| `npm run generate:prompt` | `npm run ai-prompt` | Step 1: Generate AI prompt for ChatGPT/Claude |
| `npm run generate:website` | `npm run generate-from-ai-response` | Step 2: Generate website from AI response |

### **Alternative Commands**

| Root Command | Template-Generator Command | Description |
|--------------|---------------------------|-------------|
| `npm run generate:auto` | `npm run auto` | Quick test with auto-generated content |
| `npm run generate:interactive` | `npm run generate` | Manual input for all website details |

## Complete Workflow

### **From Root Directory:**
```bash
# 1. Generate AI prompt
npm run generate:prompt

# 2. Send prompt to AI and save response as ai-response.json

# 3. Generate website
npm run generate:website
```

### **From Template-Generator Directory:**
```bash
cd template-generator

# 1. Generate AI prompt
npm run ai-prompt

# 2. Send prompt to AI and save response as ai-response.json

# 3. Generate website
npm run generate-from-ai-response
```

## File Locations

- **AI Prompt**: `template-generator/ai-prompt.txt`
- **AI Response**: `template-generator/ai-response.json`
- **Generated Website**: `[project-name]/` (created at root level)

## Notes

- All commands use npm workspaces to run the actual scripts in the `template-generator` directory
- The generated website will be created at the root level, not inside the template-generator directory
- The AI prompt uses hardcoded example client info (Maria Rodriguez, EcoTech Solutions)
- The AI response must be saved as `ai-response.json` in the template-generator directory 