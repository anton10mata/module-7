// Import required modules
import inquirer from 'inquirer';
import fs from 'fs';

// Function to prompt the user for information
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
};

// Function to generate the README content
const generateReadme = ({
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  license,
  github,
  email,
}) => `
# ${title}

![License](https://img.shields.io/badge/license-${license}-blue.svg)

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions
If you have any questions, feel free to reach out:

- GitHub: [${github}](https://github.com/${github})
- Email: ${email}
`;

// Main function to initialize the app
const init = () => {
  promptUser()
    .then((answers) => {
      const readmeContent = generateReadme(answers);

      // Write the content to README.md file
      fs.writeFileSync('README.md', readmeContent);

      console.log('Successfully created README.md');
    })
    .catch((err) => console.error(err));
};

// Initialize the app
init();
