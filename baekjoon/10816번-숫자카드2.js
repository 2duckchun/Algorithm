const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const N = input[1].split(" ").map(Number);
const M = input[3].split(" ").map(Number);
const map = new Map();

for (let num of N) {
  if (map.has(num)) {
    map.set(num, map.get(num) + 1);
  } else {
    map.set(num, 1);
  }
}

const answer = [];

for (let card of M) {
  if (map.has(card)) {
    answer.push(map.get(card));
  } else {
    answer.push(0);
  }
}

console.log(answer.join(" "));
