
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName} 

  ## Description 
  
  ${data.projectDescription} 
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.commandDependencies}
  
  ## Usage 
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
 md
  ![alt text](assets/images/screenshot.png)
 
  
  
  ## Credits
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  
  ## License
  
  ${data.licenseKind}
  
  ---
  
  🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![
      
  ](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  Badges aren't _necessary_, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  
  ## Features
  
  If your project has a lot of features, consider adding a heading called "Features" and listing them there.
  
  
  ## Contributing
  
  If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.
  
  ## Tests
  
  ${data.commandTest} 

  ## Questions 
  github profile:  <a href="https://github.com/${data.username}">https://github.com/${data.username}</a> <br>
  email: ${data.email} 
  `;
}

module.exports = generateMarkdown;
