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
            message:'Write whatever you think test means for your project',
        },
    ])
    .then((data) => createReadmeFile(data))
        // console.log(data);
    


  

function createReadmeFile(output) {
    console.log(output);
    console.log("willy");
    // let readMeTitle;
    // let readMeDescription;
    // const title = "# Title";
    // const description ="## Description";
    // const tests = "# Tests";
    // const useage = "## Useage Info";
    // const contribution = "## Project Contribution"
    // const testingInfo = "## Testing";
    // const installInfo = "## Installation Info";


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

${output.test}`



    fs.writeFile('README.md', mdtext, (q) => 
        q ? console.log(q) : console.log('Success')
    


    )};
