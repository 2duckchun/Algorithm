const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const [N, M] = input.shift().split(" ").map(Number);
const S = new Set(input.slice(0, N));
const strArr = input.slice(N);

let answer = 0;

strArr.forEach((el) => {
  if (S.has(el)) {
    answer += 1;
  }
});

console.log(answer);
