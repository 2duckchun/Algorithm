const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(0, -1)
  .map((el) => el.split(" ").map(Number));

function solution(input) {
  for (let arr of input) {
    arr.sort((a, b) => a - b);
    let a = Math.pow(arr[0], 2);
    let b = Math.pow(arr[1], 2);
    let c = Math.pow(arr[2], 2);
    console.log(a + b === c ? "right" : "wrong");
  }
}

solution(input);
