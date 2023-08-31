const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim().split("\r\n")
const score = input.pop().split(" ").map(Number)

function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps - false
            }
        }
        if (noSwaps) {
            break
        }
    }
    return arr
}

function solution(score) {
    const arr = bubbleSort(score)
    let num = 0
    const max = arr[arr.length - 1]
    for (let i = 0; i < arr.length; i++) {
        num += arr[i] / max * 100
    }
    return num / arr.length
}

console.log(solution(score))