const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim().split("\r\n").pop()

function solution(input) {
    const arr = input.split('')
    const result = arr.reduce((acc, e, i) => {
        return acc + parseInt(e)
    }, 0)
    console.log(result)
}

solution(input)