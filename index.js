const inquirer = require('inquirer');
const fs = require('fs');
const path= require("path")

function badge(license){
    if (license !== "None"){
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    else{
        return '';
    }
}
function licenseSection(license){
    if(license !=="None"){
        return `## License
        
        This project is licensed under the ${license} license `;
    }
    else{
        return "";
    }
}
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
//   }


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
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
          },
    ])
    .then((data) => createReadmeFile(data))
        // console.log(data);
    


  

function createReadmeFile(output) {
    console.log(output);
    console.log("willy");


    const mdtext = `
# ${output.title}

${badge(output.license)}

## Project Description

${output.description}

## Installation Info 
\`\`\`
${output.installation}
\`\`\`

## Useage Info

${output.useage}

## How to Contribute to This

${output.contribution}

## Testing Info

${output.test}

[link to app demo](https://drive.google.com/file/d/1Da_TAG9CVPQlMJIu8Z8ozw5WmvGnDePp/view)
 

${licenseSection(output.license)}`

fs.writeFile('README.md', mdtext, (q) => 
q ? console.log(q) : console.log('Success')




)


    };

