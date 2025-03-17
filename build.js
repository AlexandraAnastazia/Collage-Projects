// build.js

const { exec } = require('child_process');
const path = require('path');

// Path to your TypeScript configuration file
const tscConfigPath = path.join(__dirname, 'tsconfig.json');

// Function to run a shell command
const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
      }
      console.log(`Stdout: ${stdout}`);
      resolve(stdout);
    });
  });
};

// Main build function
const build = async () => {
  try {
    console.log('Starting build process...');
    
    // Compile TypeScript files
    await runCommand(`tsc -p ${tscConfigPath}`);
    
    console.log('Build process completed successfully.');
  } catch (error) {
    console.error('Build process failed.');
  }
};

// Run the build function
build();
