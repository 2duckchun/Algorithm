const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().split(' ')
input.forEach((e, i, arr) => {
    arr[i] = parseInt(e)
})

const realchess = [ 1, 1, 2, 2, 2, 8 ]

const answer = input.map((e, i) => {
    return realchess[i] - e
})
console.log(answer[0], answer[1], answer[2], answer[3], answer[4], answer[5]);