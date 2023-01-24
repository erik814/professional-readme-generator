const inquirer = require('inquirer');
const fs = require('fs');
let badge = '';

const prompts = [
    {
        type: 'input',
        message: 'What is the name of this project?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: "Please give a description of the project.",
        name: 'description',
    },
    {
        type: 'input',
        message: 'How can this project be installed?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions for usage.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please select the license type.',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'How can someone contribute to this project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What tests have you performed on this project?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is the link to your GitHub Profile?',
        name: 'githubLink',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
]

function makeBadge(data){
    if(data.license === 'MIT'){
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }else if(data.license === "GPLv2"){
        badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    }else if(data.license === "Apache"){
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }else if(data.license === "GPLv3"){
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    };
};


inquirer
    .prompt(prompts)
    .then(data =>{
        makeBadge(data);
        let createMD = 
        
`# ${data.projectName} ${badge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project was created using a ${data.license} license.

## Contribution

${data.contribution}

## Tests

${data.tests}

## Questions

If you have any questions about this project, please feel free to reach out to me!
## ##
Github: [${data.github}](${data.githubLink})
## ##
Email: [${data.email}](mailto:${data.email})`

    fs.writeFile('professional-readme.md', createMD, err =>{
        if(err){
            console.log(err)
        }else{
            console.log('Your new README has been created!')
        }
    })
})