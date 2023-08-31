const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const [a1a0, c, n0] = fs
  .readFileSync(filePath)
  .toString()
  .split(newLine)
  .map((el) => el.split(" ").map(Number));

function solution(a1a0, cArr, n0Arr) {
  const [a1, a0] = a1a0;
  const [c] = cArr;
  const [n0] = n0Arr;

  for (let i = n0; i <= 100; i++) {
    const condition = a1 * i + a0 <= c * i;
    if (!condition) {
      return 0;
    }
  }
  return 1;
}

console.log(solution(a1a0, c, n0));
