const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(0, -1)
  .map((v) => v.split(" ").map(Number));

function solution(input) {
  let answer = input.map(([a, b]) => {
    if (a % b === 0) return "multiple";
    if (b % a === 0) return "factor";
    return "neither";
  });
  return answer.join("\n");
}

console.log(solution(input));
