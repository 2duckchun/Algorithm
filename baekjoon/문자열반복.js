const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim().split('\r\n')
const [num, ...arr] = input

function solution(input) {
  console.log(input)
  for (let i = 0; i < input.length; i++) {
    const [num, str] = input[i].split(" ")
    let result = ""
    for (let j = 0; j < str.length; j++) {
      for (let k = 0; k < num; k++) {
        result += str[j]
      }
    }
    console.log(result)
  }
}

solution(arr)