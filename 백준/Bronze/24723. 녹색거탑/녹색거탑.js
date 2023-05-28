const fs = require("fs")
const n = ~~fs.readFileSync("/dev/stdin").toString().trim()

console.log(Math.pow(2, n))