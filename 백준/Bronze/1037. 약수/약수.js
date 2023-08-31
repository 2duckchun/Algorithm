const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .pop()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const length = Math.floor(input.length / 2);

if (input.length % 2 === 0) console.log(input[length] * input[length - 1]);
else console.log(Math.pow(input[length], 2));
