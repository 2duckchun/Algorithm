const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim().split("\r\n")

function solution(input) {
    let result = ""
    for (let i = 1; i < input.length; i++) {
        const arr = input[i].split(" ")
        let num = 0
        let count = 0
        let avg = 0
        for (let j = 1; j < arr.length; j++) {
            num += ~~arr[j]
        }
        avg = (num / ~~arr[0]) 
        for (let k = 1; k < arr.length; k++) {
            if (avg < arr[k]) {
                count += 1
            }
        }
        result += ((count / ~~arr[0]) * 100).toFixed(3) + "%" + "\n"
    }
    return console.log(result)
}

solution(input)