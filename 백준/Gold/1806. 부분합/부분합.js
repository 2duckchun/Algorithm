const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let N, S;
let sequence = []
let count = 0

rl.on('line', (line) => {
    if (count === 0) [N, S] = line.trim().split(" ").map(Number)
    else sequence = line.trim().split(" ").map(Number)
    count++
})

rl.on('close', () => {
    let minLength = Infinity;
    let currentSum = 0;
    let left = 0;
    for (let right = 0; right < sequence.length; right++) {
        currentSum += sequence[right]
        while (currentSum >= S) {
            minLength = Math.min(minLength, right - left + 1)
            currentSum -= sequence[left]
            left++
        }
    }
    let answer = minLength === Infinity ? 0 : minLength
    console.log(answer)
})