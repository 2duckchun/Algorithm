const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const dot = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(dot) {
  let edge = Math.pow(2, dot) + 1;
  console.log(Math.pow(edge, 2));
}

solution(dot);
