const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let N = 0
let regions = []
let total = 0
let count = 0

rl.on('line', (line) => {
    if (count === 0) N = +line.trim()
    else if (count === 1) regions = line.trim().split(" ").map(Number)
    else total = +line.trim()
    count++
})

function canGive(regions, mid, total) {
    let sum = 0
    for (const budget of regions) {
        if (budget <= mid) sum += budget
        else sum += mid
    }
    return sum <= total
}

rl.on('close', () => {
    let min = 0
    let max = Math.max(...regions)
    while (min <= max) {
        // 상한액
        let mid = Math.floor((min + max) / 2)
        if (canGive(regions, mid, total)) min = mid + 1
        else max = mid - 1
    }
    console.log(max)
})