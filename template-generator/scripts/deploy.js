const { exec } = require('child_process');
const util = require('util');
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');

const execAsync = util.promisify(exec);

class DeploymentManager {
  constructor() {
    this.projectPath = process.cwd();
  }

  async deployWebsite() {
    console.log(chalk.blue.bold('🚀 Website Deployment Manager'));
    console.log(chalk.gray('Deploy your website to Vercel with custom domain\n'));

    try {
      // Check if we're in a Next.js project
      const packageJsonPath = path.join(this.projectPath, 'package.json');
      if (!await fs.pathExists(packageJsonPath)) {
        throw new Error('No package.json found. Make sure you\'re in a Next.js project directory.');
      }

      const packageJson = await fs.readJson(packageJsonPath);
      if (!packageJson.dependencies?.next) {
        throw new Error('This is not a Next.js project.');
      }

      // Build the project
      await this.buildProject();
      
      // Deploy to Vercel
      await this.deployToVercel();
      
      // Setup custom domain (if provided)
      await this.setupCustomDomain();
      
      console.log(chalk.green.bold('\n✅ Website deployed successfully!'));
      
    } catch (error) {
      console.error(chalk.red('❌ Deployment failed:'), error.message);
      process.exit(1);
    }
  }

  async buildProject() {
    const spinner = ora('Building project...').start();
    
    try {
      await execAsync('npm run build', { cwd: this.projectPath });
      spinner.succeed('Project built successfully');
    } catch (error) {
      spinner.fail('Build failed');
      throw new Error(`Build failed: ${error.message}`);
    }
  }

  async deployToVercel() {
    const spinner = ora('Deploying to Vercel...').start();
    
    try {
      // Check if Vercel CLI is installed
      try {
        await execAsync('vercel --version');
      } catch (error) {
        spinner.text = 'Installing Vercel CLI...';
        await execAsync('npm install -g vercel');
      }

      // Deploy to Vercel
      spinner.text = 'Deploying to Vercel...';
      const { stdout } = await execAsync('vercel --prod --yes', { cwd: this.projectPath });
      
      // Extract deployment URL
      const urlMatch = stdout.match(/https:\/\/[^\s]+/);
      if (urlMatch) {
        this.deploymentUrl = urlMatch[0];
        spinner.succeed(`Deployed to: ${this.deploymentUrl}`);
      } else {
        spinner.succeed('Deployed to Vercel');
      }
      
    } catch (error) {
      spinner.fail('Vercel deployment failed');
      throw new Error(`Vercel deployment failed: ${error.message}`);
    }
  }

  async setupCustomDomain() {
    const { domain } = await this.promptForDomain();
    
    if (!domain) {
      console.log(chalk.yellow('⏭️  Skipping custom domain setup'));
      return;
    }

    const spinner = ora('Setting up custom domain...').start();
    
    try {
      // Add custom domain to Vercel
      await execAsync(`vercel domains add ${domain}`, { cwd: this.projectPath });
      
      // Configure DNS (provide instructions)
      spinner.succeed(`Custom domain added: ${domain}`);
      console.log(chalk.cyan('\n📋 DNS Configuration Instructions:'));
      console.log(chalk.gray('1. Go to your domain registrar'));
      console.log(chalk.gray('2. Add these DNS records:'));
      console.log(chalk.gray(`   - Type: CNAME, Name: @, Value: cname.vercel-dns.com`));
      console.log(chalk.gray(`   - Type: A, Name: @, Value: 76.76.19.19`));
      console.log(chalk.gray('3. Wait for DNS propagation (up to 24 hours)'));
      
    } catch (error) {
      spinner.fail('Custom domain setup failed');
      console.log(chalk.yellow('You can add the custom domain later in the Vercel dashboard'));
    }
  }

  async promptForDomain() {
    const inquirer = require('inquirer');
    
    const { domain } = await inquirer.prompt([
      {
        type: 'input',
        name: 'domain',
        message: 'Custom domain (optional):',
        default: '',
        validate: (input) => {
          if (!input) return true; // Optional
          const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
          if (!domainRegex.test(input)) {
            return 'Please enter a valid domain name';
          }
          return true;
        }
      }
    ]);

    return { domain: domain.trim() };
  }

  async generateDeploymentReport() {
    const report = {
      deploymentUrl: this.deploymentUrl,
      deploymentDate: new Date().toISOString(),
      projectPath: this.projectPath,
      buildStatus: 'success',
      customDomain: null
    };

    const reportPath = path.join(this.projectPath, 'deployment-report.json');
    await fs.writeJson(reportPath, report, { spaces: 2 });
    
    console.log(chalk.cyan('\n📄 Deployment report saved to: deployment-report.json'));
  }
}

// Run deployment
const deployer = new DeploymentManager();
deployer.deployWebsite().then(() => {
  deployer.generateDeploymentReport();
}); 