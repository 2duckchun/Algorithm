const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

function solution(input) {
  input.sort((a, b) => {
    const prev = a.split(" ").map(Number);
    const next = b.split(" ").map(Number);
    if (prev[1] !== next[1]) {
      return prev[1] - next[1];
    }
    return prev[0] - next[0];
  });
  return input.join("\n");
}

console.log(solution(input));

const b = ["a", "g", "g", "x", "b", "c", "d", "k"];
console.log(b.sort());
