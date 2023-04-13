// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>
  license !== "None" ? `![Badge](https://img.shields.io/badge/license-${license}-blue.svg)` : "";

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) =>
  license !== "None" ? `* [License](#license)` : "";

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>
  license !== "None"
    ? `## License

This project is licensed under the ${license} license.`
    : "";

// TODO: Create a function to generate markdown for README

const generateMarkdown = (data) => `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)
- [Deployed](#deployed)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Credits
${data.credits}

## Questions
For any questions, please contact ${data.author} at ${data.email}.
You can also find my GitHub profile at https://github.com/${data.githubUsername}/.

## Deployed
This project is deployed at ${data.deployed}.`;

module.exports = generateMarkdown;