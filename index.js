const inquirer = require('inquirer')
const fs = require('fs')

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
        choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
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
        message: 'What should someone do if they have questions about this project?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
]

inquirer
    .prompt(prompts)
    .then(data =>{
        let createMD = `
# ${data.projectName}

## Description

${data.description}

## Table of Contents

- [Installation]
- [Usage]
- [License]
- [Contribution]
- [Tests]
- [Questions]

## Installation

${installation}

## Usage

${Usage}

## License

${license}

## Contribution

${contribution}

## Tests

${tests}

## Questions

${questions}

## 




        `

    fs.writeFile('professional-readme.md', createMD, err =>{
        if(err){
            console.log('Please complete all of the questions.')
        }else{
            console.log('Good work!')
        }
    })
})