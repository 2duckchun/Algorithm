const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);

const N = new Set(input[1].split(" ").map(Number));
const M = new Set(input[3].split(" ").map(Number));

const answer = [...M].map((el) => {
  if (N.has(el)) {
    return 1;
  }
  return 0;
});

console.log(answer.join(" "));
