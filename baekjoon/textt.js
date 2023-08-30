const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(1)
  .map((el) => el.split(" ").map(Number));

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function solution(input) {
  let answer = "";
  for (let num of input) {
    const [r, n] = num;
    const bridge = Math.round(factorial(n) / (factorial(n - r) * factorial(r)));
    answer += `${bridge}\n`;
  }
  return answer;
}

console.log(solution(input).trim());
