const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const [N, K] = input.shift().split(" ").map(Number);
const lines = input.map(Number);

function solution(K, lines) {
  let max = Math.max(...lines);
  let min = 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let cuttedLines = lines.reduce((acc, e) => acc + Math.floor(e / mid), 0);
    if (cuttedLines >= K) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  console.log(max);
}

solution(K, lines);
