const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(1)
  .map((el) => el.split(" ").map(Number));

function solution(input) {
  let answer = "";
  for (let arr of input) {
    arr.sort((a, b) => a - b);
    answer += `${arr[arr.length - 3]}\n`;
  }

  console.log(answer);
}

solution(input);
