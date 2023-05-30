const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const n = parseInt(fs.readFileSync(filePath).toString().trim());

let count = 0;
let answer = [];
function hanoi(n, from, temp, to) {
  if (n === 0) {
    return;
  }
  hanoi(n - 1, from, to, temp);
  count++;
  answer.push(`${from} ${to}`);
  hanoi(n - 1, temp, from, to);
}

hanoi(n, 1, 2, 3);

console.log(count);
console.log(answer.join("\n"));
