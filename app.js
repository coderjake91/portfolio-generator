//include require statement in order to use Node 'fs' module
const fs = require('fs');
const generatePage = require('./src/page-template');

//learn how to process command-line arguments using process
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

//capture user input by generating a new sliced array (ignoring node and file path at index values [0,1], user input starts at [2], the third element in the array)
const profileDataArgs = process.argv.slice(2, process.argv.length);

//use assignment destructuring ES6 syntax to assign assign user name and github variables to command-line argument array
const [name, github] = profileDataArgs;

//Note: assignment destructuring syntax is equivalent to the following expressions...
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];

//creates index.html using Node module 'fs' and .writeFile method, generates basic HTML structure for portfolio site output using template literals, handles errors using error object and 'throw'
fs.writeFile('./index.html', generatePage(name, github), err => {
    if(err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});

