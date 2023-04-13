// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ([
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines for your project:",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions for your project:",
  },
  {
    type: "input",
    name: "credits",
    message: "Please provide credits for your project:",
  },
  {
    type: "input",
    name: "deployed",
    message: "Please provide a link to your deployed application:",
  },
]);

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Success! Your README.md file has been generated!");
  });
};
// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown({ ...data }));
  });
};



// Function call to initialize app
init();
