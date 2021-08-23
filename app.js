const inquirer = require('inquirer');
//include require statement in order to use Node 'fs' module
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// //creates index.html using Node module 'fs' and .writeFile method, generates basic HTML structure for portfolio site output using template literals, handles errors using error object and 'throw'
// fs.writeFile('./index.html', pageHTML , err => {
//     if(err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

//utilize inquirer to prompt user with a series of questions to fill out the portfolio information
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));