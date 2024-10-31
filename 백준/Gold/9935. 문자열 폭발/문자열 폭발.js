const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// mirkovC4nizCC44
// C4
const inputArray = []

rl.on('line', (line) => {
    inputArray.push(line.trim())
})

rl.on('close', () => {
    const inputString = inputArray[0]
    const bomb = inputArray[1]
    let stack = []
    for (let i = 0; i < inputString.length; i++) {
        stack.push(inputString[i])
        if (stack.slice(-bomb.length).join("") === bomb) {
            stack.splice(-bomb.length)
        }
    }
    const answer = stack.length !== 0 ? stack.join("") : 'FRULA'
    console.log(answer)
})