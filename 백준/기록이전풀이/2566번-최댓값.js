const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);

function solution(input) {
  const matrix = [];
  for (let i = 0; i < input.length; i++) {
    const row = input[i].split(" ").map(Number);
    matrix.push(row);
  }
  let max = 0;
  let row = 0;
  let col = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const current = matrix[i][j];
      if (max <= current) {
        max = current;
        row = i + 1;
        col = j + 1;
      }
    }
  }
  console.log(max);
  console.log(row, col);
}

solution(input);
