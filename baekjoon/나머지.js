const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim().split("\n").map(Number)

function solution(input) {
    const map = new Map()
    for (let i = 0; i < input.length; i++) {
        const key = input[i] % 42
        if (map.has(key) === false) {
            map.set(input[i] % 42, true)
        }
    }
    return map.size
}

console.log(solution(input))