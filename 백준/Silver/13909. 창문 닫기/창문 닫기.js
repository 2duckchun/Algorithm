const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const N = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(N) {
  console.log(Math.floor(Math.sqrt(N)));
}

solution(N);