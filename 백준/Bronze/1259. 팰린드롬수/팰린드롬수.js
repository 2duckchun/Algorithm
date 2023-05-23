const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const arr = fs.readFileSync(filePath).toString().trim().split(newLine);

function solution(arr) {
  for (let num of arr) {
    let isPel = true;
    for (let i = 0; i <= Math.floor(num.length / 2); i++) {
      if (num[0] === "0") {
        isPel = false;
        break;
      }
      if (num[i] !== num[num.length - 1 - i]) {
        isPel = false;
        console.log("no");
        break;
      }
    }
    if (isPel) {
      console.log("yes");
    }
  }
}

solution(arr);
