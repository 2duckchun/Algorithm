const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArray = []

rl.on('line', (line) => {
    inputArray.push(line.trim())
})

rl.on('close', () => {
    const S = inputArray[0]
    const answer = S.replace(/\(\)/g, "(1)").replace(/\)\(/g, ")+(")
    console.log(answer)
})
