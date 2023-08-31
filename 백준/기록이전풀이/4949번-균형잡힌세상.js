const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const strArr = fs.readFileSync(filePath).toString().trim().split(newLine).slice(0, -1);

function solution(strArr) {
  let answer = "";
  for (let str of strArr) {
    const stack = [];
    for (let char of str) {
      if (char === "(" || char === ")" || char === "[" || char === "]") {
        stack.push(char);
      }
      if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
        stack.pop();
        stack.pop();
      }
      if (stack[stack.length - 1] === "]" && stack[stack.length - 2] === "[") {
        stack.pop();
        stack.pop();
      }
    }
    if (!stack.length) answer += "yes\n";
    else answer += "no\n";
  }
  return answer;
}

console.log(solution(strArr).trim());
