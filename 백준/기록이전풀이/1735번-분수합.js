const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [M, N] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .map((el) => el.split(" ").map(Number));

function getGcd(num1, num2) {
  let [A, B] = [num1, num2].sort((a, b) => b - a);
  let remainder = null;
  while (remainder !== 0) {
    remainder = A % B;
    A = B;
    B = remainder;
  }
  return A;
}

function solution(M, N) {
  const firstGcd = getGcd(M[1], N[1]);
  const firstLcm = (M[1] * N[1]) / firstGcd;
  const num = M[0] * Math.floor(firstLcm / M[1]) + N[0] * Math.floor(firstLcm / N[1]);
  const secondGcd = getGcd(num, firstLcm);
  return `${Math.floor(num / secondGcd)} ${Math.floor(firstLcm / secondGcd)}`;
}

console.log(solution(M, N));
