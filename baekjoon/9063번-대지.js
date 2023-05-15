const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(1)
  .map((el) => el.split(" ").map(Number));

function solution(input) {
  if (input.length <= 1) return 0;

  let minX = Infinity;
  let minY = Infinity;

  let maxX = -Infinity;
  let maxY = -Infinity;

  input.forEach((el) => {
    if (el[0] < minX) minX = el[0];
    if (el[1] < minY) minY = el[1];
    if (el[0] > maxX) maxX = el[0];
    if (el[1] > maxY) maxY = el[1];
  });

  return (maxX - minX) * (maxY - minY);
}

console.log(solution(input));
