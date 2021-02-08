
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// const api = require('./utils/api.js');
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input

const questions = [
    
        
        
        "What is your GitHub username?", "What is your email address?", "What is your project's name?", "What kind of license should your project have?", "What command should be run to install your dependencies?", "What command should be run to run tests?", "Write a description or your project", 
    ];


// Inquirer prompts for userResponses
let userResponses = [
    {
        type: 'input',
        message: questions[0] + "(Required)",
        name: 'username',
        validate: NameInput => {
            if (NameInput) {
                return true;
            }
            else {
                console.log("Please enter a valid username");
                return false;
            }
        }

    },


    {
        type: 'input',
        message: questions[1] + "(Required)",
        name: 'email',
        validate: NameInput => {
            if (NameInput) {
                return true;
            }
            else {
                console.log("Please enter a valid e-mail");
                return false;
            }
        }

    },

    {
        type: 'input',
        message: questions[2] + "(Required)",
        name: 'projectName',
        validate: NameInput => {
            if (NameInput) {
                return true;
            }
            else {
                console.log("Please enter a valid project-name");
                return false;
            }
        }

    },

    {
        type: 'input',
        message: questions[3] + "(Required)",
        name: 'licenseKind',
        validate: NameInput => {
            if (NameInput) {
                return true;
            }
            else {
                console.log("Please a valid license-kind is required");
                return false;
            }
        }

    },

    {
        type: 'input',
        message: questions[4] + "(Required)",
        name: 'commandDependencies',
        validate: NameInput => {
            if (NameInput) {
                return true;
            }
            else {
                console.log("Please a valid command-dependency is required");
                return false;
            }
        }

    },

    {
        type: 'input',
        message: questions[5] + "(Required)",
        name: 'commandTest',
        validate: NameInput => {
            if (NameInput) {
                return true;
            }
            else {
                console.log("Please enter a valid command test");
                return false;
            }
        }

    },


    {
        type: 'input',
        message: questions[6] + "(Required)",
        name: 'projectDescription',
        validate: NameInput => {
            if (NameInput) {
                return true;
            }
            else {
                console.log("Please enter a valid description of your project");
                return false;
            }
        }

    },



];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err=> {
        if (err) {
            return  console.log(err);
        }
        console.log('Success! Your README.md file has been generated!')
    });

}

const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
     userResponses = await inquirer.prompt(userResponses);
    console.log("Your responses: ", userResponses);
    console.log("Thank you for your responses! ");

    // const userInfo = await api.getUser(userResponses);
    // console.log("Your GitHub user info: ", userInfo);

    console.log("Generating yor README")
    const markdown = generateMarkdown (userResponses);
    console.log(markdown);

    await writeFileAsync('ExampleREADME.md', markdown)

   //false.w 
}

// Function call to initialize app
init();
