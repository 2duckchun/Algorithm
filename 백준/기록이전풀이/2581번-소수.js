const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

function solution(input) {
  const [M, N] = input;
  const answer = [];

  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      answer.push(i);
    }
  }

  if (answer.length === 0) return -1;
  return `${answer.reduce((acc, e) => acc + e, 0)}\n${answer[0]}`;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(solution(input));
