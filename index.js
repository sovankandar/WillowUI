#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';

const program = new Command();

program
  .command('init <appname>')
  .description('Initialize a React + Tailwind (v4) project with Vite')
  .action(async (appname) => {
    // Initial welcome message
    console.log('\n🎨 Thanks for using Willow UI - Never Stop Just Design! 🎨\n');
    
    // Show requirements message
    setTimeout(() => {
      console.log('🛠️  Requirements: React + Tailwind CSS (V4) with Vite\n');
    }, 1000);

    // Loading animation frames
    const frames = ['🌱', '🌿', '🌳', '🪵', '⚡', '🎯'];
    let i = 0;
    
    // Start loading animation after requirements message
    setTimeout(() => {
      const loadingInterval = setInterval(() => {
        process.stdout.write(`\r${frames[i]} Initializing Willow UI project "${appname}"...`);
        i = (i + 1) % frames.length;
      }, 200);

      // Clear loading animation and show success message
      setTimeout(() => {
        clearInterval(loadingInterval);
        console.log(`\n🌲 Successfully initialized "${appname}" project!`);
      }, 3000);
    }, 2000);
    const { execSync } = await import('child_process');
    const path = (await import('path')).default;
    const fs = (await import('fs')).default;

    const projectPath = path.resolve(process.cwd(), appname);

    execSync(`npm create vite@latest ${appname} -- --template react-ts`, { stdio: 'inherit' });

    execSync(`npm install -D tailwindcss @tailwindcss/vite`, {
      cwd: projectPath,
      stdio: 'inherit'
    });

    const viteConfigPath = path.join(projectPath, 'vite.config.ts');
    let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');

    if (!viteConfig.includes('@tailwindcss/vite')) {
      viteConfig = `import tailwindcss from '@tailwindcss/vite'\n` + viteConfig;
    }
    if (viteConfig.includes('plugins:')) {
      viteConfig = viteConfig.replace(
        /plugins:\s*\[/,
        `plugins: [\n    tailwindcss(),`
      );
    } else {
      viteConfig = viteConfig.replace(
        /defineConfig\(\{/,
        `defineConfig({\n  plugins: [tailwindcss()],`
      );
    }

    fs.writeFileSync(viteConfigPath, viteConfig);

    const cssPath = path.join(projectPath, 'src', 'index.css');
    let cssContent = '';
    if (fs.existsSync(cssPath)) {
      cssContent = fs.readFileSync(cssPath, 'utf8');
    }
    if (!cssContent.includes('@import "tailwindcss";')) {
      cssContent = `@import "tailwindcss";\n` + cssContent;
      fs.writeFileSync(cssPath, cssContent);
    }

    console.log('✅ React + Tailwind 4 (Vite) setup complete');
    console.log(`Next steps:\n  cd ${appname}\n  npm install (if not already)\n  npm run dev`);
  });

program
  .command('add <component>')
  .description('Add a UI component from willoui templates')
  .action((component) => {
    const cwd = process.cwd();
    const srcDir = path.join(cwd, 'src');
    const componentsDir = path.join(srcDir, 'components');
    const uiDir = path.join(componentsDir, 'ui');

    if (!fs.existsSync(srcDir)) {
      console.log('❌ src directory does not exist. Please ensure you are in a React project root.');
      return;
    }

    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir);
      console.log('📁 Created components directory');
    }

    if (!fs.existsSync(uiDir)) {
      fs.mkdirSync(uiDir);
      console.log('📁 Created ui directory');
    }

    const fileName = `${component.charAt(0).toUpperCase() + component.slice(1)}.tsx`;
    const filePath = path.join(uiDir, fileName);

    if (fs.existsSync(filePath)) {
      console.log(`⚠️ ${fileName} already exists in ui directory`);
      return;
    }

    const templatePath = path.join(__dirname, 'willoui', 'src', 'components', fileName);

    if (!fs.existsSync(templatePath)) {
      console.log(`❌ No template found for "${component}". Please add it in willoui/src/components/`);
      return;
    }

    fs.copyFileSync(templatePath, filePath);
    console.log(`✅ Created ${filePath} from willoui/src/components/`);
  });

program.parse();
