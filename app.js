//learn how to process command-line arguments using process
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

//capture user input by generating a new sliced array (ignoring node and file path at index values [0,1], user input starts at [2], the third element in the array)
const profileDataArgs = process.argv.slice(2, process.argv.length);

//create arrow function to print portfolio profile data using an implicit return and condensed function argument syntax
const printProfileData = profileDataArr => {
    //iterate through command-line arguments using .forEach array method- outputs user portfolio name and job title
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);

