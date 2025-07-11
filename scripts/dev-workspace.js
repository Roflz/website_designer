#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

// Get project name from command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error('❌ Error: Project name is required');
  console.log('Usage: npm run dev:workspace <project-name>');
  console.log('Example: npm run dev:workspace ecotech-solutions-site');
  process.exit(1);
}

// Construct the project path
const workspacesDir = path.join(__dirname, '../template-generator/workspaces');
const projectPath = path.join(workspacesDir, projectName);

// Check if project exists
if (!fs.existsSync(projectPath)) {
  console.error(`❌ Error: Project "${projectName}" not found in template-generator/workspaces/`);
  console.log('Available projects:');
  
  try {
    const projects = fs.readdirSync(workspacesDir);
    projects.forEach(project => {
      console.log(`  - ${project}`);
    });
  } catch (error) {
    console.log('  No projects found in template-generator/workspaces/');
  }
  
  process.exit(1);
}

// Check if package.json exists in the project
const packageJsonPath = path.join(projectPath, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error(`❌ Error: No package.json found in ${projectPath}`);
  process.exit(1);
}

console.log(`🚀 Starting dev server for: ${projectName}`);
console.log(`📁 Project path: ${projectPath}`);

// Change to project directory and run npm run dev
const child = spawn('npm', ['run', 'dev'], {
  cwd: projectPath,
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error('❌ Failed to start dev server:', error.message);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
}); 