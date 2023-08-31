const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

let num = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

function solution(num) {
  let arr = [];
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (num.reduce((acc, e) => acc + e, 0) === num[i] + num[j] + 100) {
        arr = num.filter((el) => el !== num[i] && el !== num[j]);
        break;
      }
    }
    if (arr.length) break;
  }
  arr.sort((a, b) => a - b);
  return arr.join("\n");
}

console.log(solution(num).trim());
