# Comprehensive React.js Project Analysis Prompt

## Objective
You are an expert website designer and software architect. Your task is to thoroughly analyze a React.js website project. You must read through **every file** in the project and produce a comprehensive technical document that details the architecture and every aspect of how the code creates the website. The resulting documentation should be suitable for professional use, providing a clear, detailed, and accurate description of the project's structure, logic, and implementation.

## Instructions for the AI

1. **Read Every File:**
   - Systematically read every file in the project, including all source code, configuration files, stylesheets, assets, and documentation.
   - Do not skip any files, even those that may seem trivial or boilerplate.

2. **Document Project Architecture:**
   - Describe the overall project structure, including the purpose of each major directory and file.
   - Explain the entry point of the application and how the app is bootstrapped.
   - Detail the routing system, including how pages and navigation are handled.
   - Document the state management approach (e.g., React Context, Redux, Zustand, etc.), including where and how global state is managed.
   - Explain the theming and styling strategy (e.g., Tailwind CSS, CSS Modules, styled-components), including how dark mode and color themes are implemented.
   - Describe any custom hooks, utilities, or helper functions and their roles.
   - Document how components are organized (e.g., atomic design, feature-based, etc.) and how they interact.
   - Explain how data flows through the application, including props, context, and any API calls.
   - Note any code-splitting, lazy loading, or performance optimizations present.

3. **Component-Level Analysis:**
   - For each component, document:
     - Its purpose and where it is used.
     - Its props and state (if any).
     - How it interacts with other components or global state.
     - Any side effects or lifecycle logic.
     - How it handles styling and theming.

4. **Configuration and Build:**
   - Explain the purpose of each configuration file (e.g., `package.json`, `tsconfig.json`, `tailwind.config.js`, etc.).
   - Document the build process, including any scripts, plugins, or custom configurations.

5. **Assets and Static Files:**
   - List and describe the purpose of all static assets (images, SVGs, fonts, etc.).
   - Explain how assets are imported and used in the project.

6. **Third-Party Libraries:**
   - List all major third-party libraries and dependencies.
   - Explain their roles and how they are integrated into the project.

7. **Theming and Responsiveness:**
   - Document how the project handles theming (light/dark mode, color schemes).
   - Explain how the site ensures responsiveness and accessibility.

8. **Other Notable Features:**
   - Document any authentication, analytics, or other integrations.
   - Note any testing strategies or files present.
   - Highlight any unique or advanced implementation details.

9. **Summary and Recommendations:**
   - Provide a summary of the project's strengths and any areas for improvement.
   - Offer recommendations for maintainability, scalability, or performance if applicable.

## Output Format
- The documentation should be clear, well-structured, and use professional technical writing standards.
- Use headings, subheadings, bullet points, and code snippets where appropriate.
- Ensure the document is comprehensive and leaves no aspect of the project unexplained.

---

**Use this prompt to instruct an AI or a human reviewer to produce a professional, exhaustive technical document for any React.js website project.** 