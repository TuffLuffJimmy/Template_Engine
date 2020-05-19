const Manager = require("./lib/Manager")
const Employee = require("./lib/Employee")
const Intern = require("./lib/Intern")
const Engineer = require('./lib/Engineer')


const axios = require('axios')
const { readFile, writeFile } = require('fs')
const chalk = require('chalk')
const { prompt } = require('inquirer')
const { promisify } = require('util')

const rf = promisify(readFile)
const wf = promisify(writeFile)

const inputTypeSelect = () => {
  prompt({
    type: 'list',
    name: 'typeSelect',
    message: 'Please select type of new Employee',
    choices: ['Employee', 'Engineer', 'Intern', 'Manager', 'EXIT']
  })
    .then(({ typeSelect }) => {
      switch (typeSelect) {
        case 'Employee':
          newEmployee()
          break
        case 'Engineer':
          newEngineer()
          break
        case 'Intern':
          newIntern()
          break
        case 'Manager':
          newManager()
          break
        case 'EXIT':
          process.exit()
          break
        default:
          break
      }
    })
    .catch(err => console.log(err)
    )
}

const newEmployee = () => {
  prompt([
    {
      type: 'input',
      name: 'employeeName',
      message: 'Please enter new employee name'
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Please enter new employee id'
    },
    {
      type: 'input',
      name: 'employeeEmail',
      message: 'Please enter new employee email'
    }
  ])
    .then(({ employeeName, employeeId, employeeEmail }) => {
      const e = new Employee(employeeName, employeeId, employeeEmail)
      rf('./output/Employee.json', 'utf8')
        .then(data => {
          let employees = JSON.parse(data)
          employees.push(e)
          wf('./output/Employee.json', JSON.stringify(employees))
            .then(() => {
              inputTypeSelect()
            })
            .catch(err => console.log(err))
        })
    })
    .catch(err => console.log(err))

}

const newEngineer = () => {
  prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'Please enter new engineer name'
    },
    {
      type: 'input',
      name: 'EngineerId',
      message: 'Please enter new engineer id'
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'Please enter new engineer email'
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'Please enter new engineer github username'
    }
  ])
    .then(({ engineerName, EngineerId, engineerEmail, engineerGithub }) => {
      const e = new Engineer(engineerName, EngineerId, engineerEmail, engineerGithub)
      rf('./output/Engineer.json', 'utf8')
        .then(data => {
          let engineers = JSON.parse(data)
          engineers.push(e)
          wf('./output/Engineer.json', JSON.stringify(engineers))
            .then(() => {
              inputTypeSelect()
            })
            .catch(err => console.log(err))
        })
    })
    .catch(err => console.log(err))
}

const newIntern = () => {
  prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'Please enter new intern name'
    },
    {
      type: 'input',
      name: 'internId',
      message: 'Please enter new intern id'
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'Please enter new intern email'
    },
    {
      type: 'input',
      name: 'internSchool',
      message: `Please enter new intern's school`
    }
  ])
    .then(({ internName, internId, internEmail, internSchool }) => {
      const e = new Engineer(internName, internId, internEmail, internSchool)
      rf('./output/Intern.json', 'utf8')
        .then(data => {
          let interns = JSON.parse(data)
          interns.push(e)
          wf('./output/Intern.json', JSON.stringify(interns))
            .then(() => {
              inputTypeSelect()
            })
            .catch(err => console.log(err))
        })
    })
    .catch(err => console.log(err))
}

const newManager = () => {
  prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Please enter new Manager name'
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Please enter new Manager id'
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Please enter new Manager email'
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: `Please enter new Manager's office number`
    }
  ])
    .then(({ managerName, managerId, managerEmail, managerOfficeNumber }) => {
      const e = new Engineer(managerName, managerId, managerEmail, managerOfficeNumber)
      rf('./output/manager.json', 'utf8')
        .then(data => {
          let managers = JSON.parse(data)
          managers.push(e)
          wf('./output/manager.json', JSON.stringify(managers))
            .then(() => {
              inputTypeSelect()
            })
            .catch(err => console.log(err))
        })
    })
    .catch(err => console.log(err))
}

// BEGIN PROGRAM HERE
inputTypeSelect()