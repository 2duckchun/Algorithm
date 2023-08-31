const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1).pop().split(" ").map(Number);

function solution(input) {
  const answer = [];

  for (let num of input) {
    if (num <= 1) continue;

    for (let i = 2; i <= num; i++) {
      if (num === i) answer.push(num);
      if (num % i === 0) break;
    }
  }
  return answer.length;
}

console.log(solution(input));
