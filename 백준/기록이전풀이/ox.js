const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim().split("\r\n")
const [N, ...ox] = input

function solution(ox) {
    let result = 0
    let acc = 0
    let answer = ''
    for (let i = 0; i < ox.length; i++) {
        for(let j = 0; j < ox[i].length; j++) {
            if (ox[i][j] === 'O') {
                acc += 1
                result += acc
            } else {
                acc = 0
            }
        }
        if (i !== ox.length - 1) {
            answer += result + "\n"
        } else {
            answer += result
        }
        result = 0
        acc = 0
    }
    return answer
}

console.log(solution(ox))