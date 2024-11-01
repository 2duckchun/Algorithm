const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const input1 = []
const input2 = []
const input3 = []
let count = 0
rl.on('line', (line) => {
    if (count === 0) {
        input1.push(line.trim())      
    } else if (count === 1) {
        input2.push(line.trim())
    } else {
        input3.push(line.trim())
    }
    count++
})

rl.on('close', () => {
    const [N, M] = input1[0].split(" ").map(Number)
    const sequence = input2[0].split(" ").map(Number)
    const range = input3.map(el => el.split(" ").map(Number))
    let answer = ""
    
    const prefixSum = new Array(sequence.length + 1).fill(0)
    for (let i = 1; i <= sequence.length; i++) {
        let value = prefixSum[i - 1] + sequence[i - 1]
        prefixSum[i] = value
    }
    for (const [x1, x2] of range) {
        let value = prefixSum[x2] - prefixSum[x1 - 1]     
        answer += value + '\n'
    }
    console.log(answer)
})