const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim().split('\r\n').map(Number)
input.shift()
function solution(input) {
    let noSwaps
    for (let i = input.length - 1; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i; j++) {
            if (input[j] > input[j + 1]) {
                temp = input[j]
                input[j] = input[j + 1]
                input[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return input
}
console.log(solution(input))