// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    console.log(license);

    if (!license) {
        return '';
    }

    else if (license = 'GNU AGPLv3') {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
        // return licenseBadge;
    }

    else if (license = 'GNU GPLv3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
        // return licenseBadge;

    }
    
    else if (license = 'GNU LGPLv3') {
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]`;
        // return licenseBadge;

    }

    else if (license = 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
        // return licenseBadge;

    }

    else if (license = 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
        // return licenseBadge;

    }

    else if (license = 'MIT License') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
        // return licenseBadge;

    }

    else if (license = 'Boost Software License 1.0') {
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
        // return licenseBadge;

    }

    else if (license = 'The Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
        // return licenseBadge;

    }
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

      if (!license) {
        return '';
    }

    else if (license = 'GNU AGPLv3') {
        return `(https://www.gnu.org/licenses/agpl-3.0)`;
        // return licenseLink;
    }

    else if (license = 'GNU GPLv3') {
        return `(https://www.gnu.org/licenses/gpl-3.0)`;
        // return licenseLink;
    }

    else if (license = 'GNU LGPLv3') {
        return `(https://www.gnu.org/licenses/lgpl-3.0)`;
        // return licenseLink;
    }

    else if (license = 'Mozilla Public License 2.0') {
        return `(https://opensource.org/licenses/MPL-2.0)`;
        // return licenseLink;
    }

    else if (license = 'Apache License 2.0') {
        return `(https://opensource.org/licenses/Apache-2.0)`;
        // return licenseLink;
    }

    else if (license = 'MIT License') {
        return `(https://opensource.org/licenses/MIT)`;
        // return licenseLink;
    }

    else if (license = 'Boost Software License 1.0') {
        return `(https://www.boost.org/LICENSE_1_0.txt)`;
        // return licenseLink;
    }

    else if (license = 'The Unlicense') {
        return `(http://unlicense.org/)`;
        // return licenseLink;
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // license badge
  renderLicenseBadge(license);

  // license link
  renderLicenseLink(license);

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

## Description
${data.description}   

        
## Table of Contents
* [Installation](#install)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)   

         
## <a name="install"> Installation </a>
${data.installation}   

    
## <a name="usage"> Usage </a>
${data.usage}   
     
     
## <a name="credits"> Credits </a>
${data.credits}   

     
## <a name="license"> License </a>
${data.license}   

${renderLicenseBadge(data.license)}     
${renderLicenseLink(data.license)}

       
## ## <a name="contributions"> Contributions </a>
${data.contributions}   

      
## <a name="tests"> Tests </a>
${data.test}   

      
## <a name="questions"> Questions? </a>
GitHub Link: **[${data.github}](https://github.com/${data.github}/)**   
Email Address: <${data.email}>

`;
}

module.exports = generateMarkdown;
 