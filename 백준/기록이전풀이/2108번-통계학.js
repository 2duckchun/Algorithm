const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

const map = new Map();
input.forEach((el) => {
  const amount = map.has(el) ? map.get(el) + 1 : 1;
  map.set(el, amount);
});

const arr = Array(...map);
arr.sort((a, b) => {
  if (b[1] !== a[1]) {
    return b[1] - a[1];
  }
  return a[0] - b[0];
});

let answer = "";

answer += `${Math.round(input.reduce((acc, e) => acc + e, 0) / input.length)}\n`;
answer += `${input[Math.floor(input.length / 2)]}\n`;
if (arr.length === 1) {
  answer += `${arr[0][0]}\n`;
} else {
  answer += `${arr[0][1] === arr[1][1] ? arr[1][0] : arr[0][0]}\n`;
}
answer += `${input[input.length - 1] - input[0]}\n`;
console.log(answer.trim());
