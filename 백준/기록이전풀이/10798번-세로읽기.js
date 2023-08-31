const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);

function solution(input) {
  const matrix = [];
  let maxLength = 0;

  for (let i = 0; i < input.length; i++) {
    const row = input[i];
    if (maxLength < row.length) {
      maxLength = row.length;
    }
  }

  for (let i = 0; i < input.length; i++) {
    const row = Array(maxLength).fill(undefined);
    for (let j = 0; j < input[i].length; j++) {
      row[j] = input[i][j];
    }
    matrix.push(row);
  }

  let string = "";
  for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== undefined) {
        string += matrix[j][i];
      }
    }
  }
  console.log(string);
}

solution(input);
