const fs = require('fs')
const input = ~~fs.readFileSync('text.txt').toString().trim()

function isHansu(n) {
    if (n < 100) {
        return true
    }
    let string = n.toString()
    const a = string[0] - string[1]
    const b = string[1] - string[2]
    if (a === b) {
        return true
    }
    return false
}

function solution(input) {
    let count = 0
    for (let i = 1; i <= input; i++) {
        if (isHansu(i)) {
            count++
        }
    }
    return count
}

console.log(solution(input))