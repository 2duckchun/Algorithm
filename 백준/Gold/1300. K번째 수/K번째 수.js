const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inputArray = []

function findLessthenMid(mid, N) {
    let count = 0
    for (let i = 1; i <= N; i++) {
        count += Math.min(Math.floor(mid / i), N)
    }
    return count
}

rl.on('line', (line) => {
    inputArray.push(line.trim())
})

rl.on('close', () => {
    const [N, K] = inputArray.map(Number)
    let left = 1
    let right = N * N
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (findLessthenMid(mid, N) >= K) right = mid - 1
        else left = mid + 1
    }
    console.log(left)
})