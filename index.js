// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, install, usage, contribution, test, license, username, profile, email }) =>
`# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Video Demonstration](#video-demonstration)

## Installation
${install}

## Usage
${usage}

## Contributing
${contribution}

## Tests
${test}

## License
Project is covered under the ${license} license

## Questions
Direct any quetsions to ${username} at ${profile}.
For additional questions, email me at ${email}

## Video Demonstration
See a video demonstration: [Watch Video](https://drive.google.com/your_shareable_link_here)`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation instructions of your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information of your project?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the contribution guidelines of your project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions of your project?',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What is the license for your project?',
            choices: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange'],

        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
    .then((answers) => {
        const readmeContent = generateREADME(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });
