// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"what is the name of your application?",
    },
    {
        type:"input",
        name:"installation",
        message:"Please include any installation instructions.",
    },
    {
        type:"input",
        name:"examples",
        message:"Please give solid examples?",
    },
    {
        type:"input",
        name:"methods",
        message:"What methods were used?"
    },
    {
        type:"input",
        name:"objects",
        message:"What is the objects?",
    },
    {
        type:"input",
        name:"questions",
        message:"Any questions?",
    },
    {
        type:"input",
        name:"answers",
        message:"You are correct!",
    },
    {
        type:"input",
        name:"separator",
        message:"What is the separator?",
    },
    {
        type:"list",
        name:"prompt types",
        message:"Describe the prompt types?"
    },
    {
        type:"list",
        name:"license",
        message:"Please select a license for your application",
        choices: ["Apache", "MIT", "GNU", "None"],
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data=>{
        console.log(data)
        fs.writeFileSync("test.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();
