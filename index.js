// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, location, github, linkedin }) =>
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
Direct any quetsions to ${username} at ${profile}
For additional questions, email me at ${email}

## Video Demonstration
See a video demonstration: [Watch Video](https://drive.google.com/your_shareable_link_here)`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you from?',
        },
        {
            type: 'input',
            name: 'hobby',
            message: 'What is your favorite hobby?',
        },
        {
            type: 'input',
            name: 'food',
            message: 'What is your favorite food?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },
    ])
    .then((answers) => {
        const htmlPageContent = generateHTML(answers);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
