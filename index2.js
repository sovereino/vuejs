const fs = require('fs')
const util = require('util')


const readDirWithPromise = util.promisify(fs.readdir)

const readirPromise = () => new Promise((resolve, reject) => {
fs.readdir('./', (err, result) =>{


})


})