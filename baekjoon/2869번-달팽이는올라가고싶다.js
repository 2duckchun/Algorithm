const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine)[0].split(" ").map(Number);
const [A, B, V] = input;

function solution(A, B, V) {
  let height = V - A;
  let oneDayMove = A - B;
  console.log(Math.ceil(height / oneDayMove) + 1);
}

solution(A, B, V);
