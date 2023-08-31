const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(a, b) {
  let arr = [];
  let count = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      arr.push(i);
      count += 1;
    }
    if (count === b) return arr[count - 1];
  }
  return arr[b - 1] ? arr[b - 1] : 0;
}

console.log(solution(a, b));
