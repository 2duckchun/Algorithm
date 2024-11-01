const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0;
let K = 0;
let list = [];
let count = 0;

rl.on('line', (line) => {
    if (count === 0) {
        [N, K] = line.trim().split(" ").map(Number)
        count++
    } else {
        const [A, B] = line.trim().split(" ").map(Number)
        list.push(B - A)
    }
})

rl.on('close', () => {
    list.sort((a, b) => a - b)
    const answer = list[K - 1]
    if (answer <= 0) console.log(0)
    else console.log(answer)
})