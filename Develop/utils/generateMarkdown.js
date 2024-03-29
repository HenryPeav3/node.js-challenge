// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache" ){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

    `
  }
  else if(license ==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license ==="GNU"){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  // other else ifs for other licenses
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
  1. [Installation](#installation)
  2. [Examples](#examples)
  3. [Methods](#methods)
  4. [Objects](#objects)
  5. [Questions](#questions)
  6. [Answers](#answers)
  7. [Separator](#separator)
  8. [Prompt Types](#prompt types)

## Installation
${data.installation}

## Examples
${data.examples}

## Methods
${data.methods}

## Objects
${data.objects}

## Questions
${data.questions}

## Answers
${data.answers}

## Separator
${data.separator}

## Prompt Types
${data.prompttypes}
`;
}

module.exports = generateMarkdown;
