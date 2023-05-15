const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [A, B, C] = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

function solution(A, B, C) {
  if (A + B + C !== 180) return "Error";
  const set = new Set([A, B, C]);

  if (set.size === 1) return "Equilateral";
  if (set.size === 2) return "Isosceles";
  if (set.size === 3) return "Scalene";
}

console.log(solution(A, B, C));
