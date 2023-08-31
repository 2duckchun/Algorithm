const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const bill = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1).map(Number);

function solution(bill) {
  const stack = [];
  for (let money of bill) {
    if (money === 0) stack.pop();
    else stack.push(money);
  }
  return stack.reduce((acc, e) => acc + e, 0);
}

console.log(solution(bill));
