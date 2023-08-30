const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [M, N] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function isPrime(num) {
  if (num <= 1) return false;
  if (num % 2 === 0) return num === 2 ? true : false;
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(M, N) {
  let answer = "";
  for (let i = M; i <= N; i++) {
    if (isPrime(i) === true) answer += `${i}\n`;
  }
  return answer;
}

console.log(solution(M, N).trim());
