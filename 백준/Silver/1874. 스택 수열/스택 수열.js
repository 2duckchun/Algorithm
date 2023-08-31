const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [N, ...input] = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

/**
 * N이 주어지고 1부터 N까지 추적하는 변수
 *
 */

function solution(N, input) {
  let stack = [];
  let pointer = 0;
  let count = 1;
  let answer = "";
  while (input[pointer]) {
    if (input[pointer] >= count) {
      stack.push(count);
      count++;
      answer += `+\n`;
      continue;
    }
    if (stack[stack.length - 1] === input[pointer]) {
      pointer++;
      stack.pop();
      answer += `-\n`;
    }
    if (stack[stack.length - 1] > input[pointer]) {
      return "NO";
    }
  }
  return answer;
}

console.log(solution(N, input).trim());
