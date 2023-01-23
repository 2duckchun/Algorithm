const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim().split(' ').map(Number)
const [고정비, 생산비, 판매비] = input

function solution(고정비, 생산비, 판매비) {
    if (생산비 >= 판매비) {
        return -1
    }
    const 순이익 = 판매비 - 생산비
    return Math.floor(고정비 / 순이익) + 1
}

console.log(solution(고정비, 생산비, 판매비))