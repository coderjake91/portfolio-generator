const inquirer = require('inquirer');
//include require statement in order to use Node 'fs' module
// const fs = require('fs');
// const generatePage = require('./src/page-template');

//function that utilizes inquirer to prompt user with a series of questions to fill out the portfolio information
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some infromation about yourself:'
        }
    ]);
};

//function that prompts user with the relavent questions to generate data for the portfolio site
const promptProject = portfolioData => {

    //store prompt answer objects into a 'projects' array property in the  portfolioData object (initialize on first function call with an empty array)
    if(!portfolioData.projects){
        portfolioData.projects = [];
    }

    console.log(`
    =================
    Add a New Project
    =================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the Github link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this Project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]).then(projectData => {
                //push user data to the projects array property of portfolioData
                portfolioData.projects.push(projectData);
                if(projectData.confirmAddProject){
                    //recursively call promptProject again if user wants to add another project to their portfolio
                    return promptProject(portfolioData);
                } else {
                    return portfolioData;
                }
            });
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });

