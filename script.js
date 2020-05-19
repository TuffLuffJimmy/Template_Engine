const { readFile } = require('fs')
const { promisify } = require('util')
const rf = promisify(readFile)

rf('./employee', 'utf8')
  .then((data) => {
    console.log(data)
  })