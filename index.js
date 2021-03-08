const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type:'input',
            name:'description',
            message:'Describe your project functionality'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions for your project',
        },
        {
            type:'input',
            name:'useage',
            message:'Describe how to use your project',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can others contribute to this project?',
        },
        {
            type:'input',
            name:'test',
            message:'Please provide any testing information here',
        },
    ])
    .then((data) => createReadmeFile(data))
        // console.log(data);
    


  

function createReadmeFile(output) {
    console.log(output);
    console.log("willy");


    const mdtext = `
# ${output.title}


## Project Description

${output.description}

## Installation Info 

${output.installation}

## Useage Info

${output.useage}

## How to Contribute to This

${output.contribution}

## Testing Info

${output.test}

[link to app demo](https://drive.google.com/file/d/1Da_TAG9CVPQlMJIu8Z8ozw5WmvGnDePp/view)`



    fs.writeFile('README.md', mdtext, (q) => 
        q ? console.log(q) : console.log('Success')
    


    )};
