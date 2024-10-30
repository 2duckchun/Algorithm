const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArray = []

rl.on('line', (line) => {
    inputArray.push(line.trim())
})

rl.on('close', () => {
    const N = +inputArray[0]
    let minY = Infinity
    let ansIdx = null
    for (let i = 1; i <= N; i++) {
        const [x, y] = inputArray[i].split(" ").map(Number)
        if (minY > y) {
            minY = y
            ansIdx = i
        }
    }
    
    const [X, Y] = inputArray[ansIdx].split(" ").map(Number)
    console.log(`${X} ${Y}`)
})