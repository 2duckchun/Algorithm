const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs.readFileSync(filePath).toString().split(newLine);
const N = parseInt(input.shift());

function solution(N, input) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    let map = new Map();
    let isGroupLetter = true;
    for (let j = 0; j < input[i].length; j++) {
      if (!map.get(input[i][j])) {
        map.set(input[i][j], true);
      } else {
        if (input[i][j] !== input[i][j - 1]) {
          isGroupLetter = false;
          break;
        }
      }
    }
    if (isGroupLetter) {
      count += 1;
    }
  }
  console.log(count);
}

solution(N, input);
