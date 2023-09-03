const fs = require('fs')
const arr = fs.readFileSync('/dev/stdin').toString().split("\n")
const num = ~~arr.shift()

function solution(num, arr) {
    for (let i = 0; i < num; i++) {
        const number = arr[i].split(' ')
        console.log(`Case #${i + 1}:`, ~~number[0] + ~~number[1])
    }
}

solution(num, arr)