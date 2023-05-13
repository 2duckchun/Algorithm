const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const numArr = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

function solution(numArr) {
  for (let num of numArr) {
    let index = 1;
    let mass = 1;
    for (let i = 2; num > mass; i++) {
      mass = mass + i;
      index += 1;
    }
    let calc = mass - num;
    if (index % 2 === 0) {
      console.log(`TERM ${num} IS ${index - calc}/${1 + calc}`);
    } else {
      console.log(`TERM ${num} IS ${1 + calc}/${index - calc}`);
    }
  }
}

solution(numArr);
