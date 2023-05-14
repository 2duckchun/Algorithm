const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const numArr = fs.readFileSync(filePath).toString().trim().split(newLine).slice(0, -1).map(Number);

function solution(numArr) {
  let answer = [];
  for (let num of numArr) {
    let divisor = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisor.push(i);
      }
    }
    let add = divisor.slice(0, -1).reduce((acc, e) => acc + e, 0);
    add === num ? answer.push(`${num} = ${divisor.slice(0, -1).join(" + ")}`) : answer.push(`${num} is NOT perfect.`);
  }
  return answer.join("\n");
}

console.log(solution(numArr));
