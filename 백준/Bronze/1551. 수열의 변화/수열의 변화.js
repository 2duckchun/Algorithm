const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs.readFileSync(filePath).toString().trim().split(newLine);

const [N, K] = input[0].split(" ").map(Number);
const sequence = input[1].split(",").map(Number);

function solution(sequence, K) {
  if (K === 0) return sequence.join(",").trim();
  const newSequence = [];
  for (let i = 0; i < sequence.length - 1; i++) {
    newSequence.push(sequence[i + 1] - sequence[i]);
  }
  return solution(newSequence, K - 1);
}

console.log(solution(sequence, K));