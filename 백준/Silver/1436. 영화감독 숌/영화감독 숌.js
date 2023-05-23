const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const num = parseInt(fs.readFileSync(filePath).toString().trim());

let count = 0;
let answer = 0;
while (count < num) {
  answer++;
  if (answer.toString().includes("666")) {
    count++;
  }
}

console.log(answer);
