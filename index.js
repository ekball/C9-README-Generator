// TODO: Include packages needed for this application

// allow usage of npm inquirer package
const inquirer = require('inquirer');

// allow manipulation of files
const fs = require('fs');

// import generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter the description of your project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the intended usage of this project?',
      },
      {
        type: 'checkbox',
        name: 'license',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Who are the contributors to this project?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are the instructions to test your project?',
      }

    ])

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return new Promise((resolve, reject) => {

        fs.writeFile(fileName, data, err => {

            if (err) {
                reject (err);
                return;
            }

            resolve({
                ok: true,
                message: 'File has been written.'
            });
        })
    })
}

// TODO: Create a function to initialize app
function init() {

    // use question passed through this function as an argument
    questions()
        .then(ReadMeData => {
            return generateMarkdown(ReadMeData);
        })
        .then(ReadMeDoc => {
            return writeToFile('README.md', ReadMeDoc);
        })
        .catch(err => {
            console.log(err);
        });

}

// Function call to initialize app
init();
