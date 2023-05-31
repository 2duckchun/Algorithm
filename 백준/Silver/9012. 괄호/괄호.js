const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1)

function solution(input) {
  let answer = ""
  for (let psStr of input) {
    const PS = psStr.split("")
    const stack = []
    while (PS.length !== 0) {
      stack.push(PS.shift())
      if (stack[stack.length - 2] === "(" && stack[stack.length - 1] === ")") { 
          stack.pop()
          stack.pop()
        }
    }
    if (stack.length === 0) {
      answer += "YES\n"
    } else {
      answer += "NO\n"
    }
  }
  return answer
}

console.log(solution(input).trim())