const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);

const [M, N] = input.shift().split(" ").map(Number);

const white = ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"];
const black = ["BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB"];

let answer = Infinity;

function check(x, y, chess) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (chess[i][j] !== input[i + x][j + y]) {
        count++;
      }
    }
  }
  return count;
}

for (let i = 0; i <= M - 8; i++) {
  for (let j = 0; j <= N - 8; j++) {
    let whiteboard = check(i, j, white);
    let blackboard = check(i, j, black);
    let real = whiteboard > blackboard ? blackboard : whiteboard;
    if (answer > real) {
      answer = real;
    }
  }
}

console.log(answer);
