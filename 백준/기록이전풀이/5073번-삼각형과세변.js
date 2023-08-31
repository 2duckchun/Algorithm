const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(0, -1)
  .map((el) => el.split(" ").map(Number));

function solution(input) {
  let answer = [];

  input.forEach((el) => {
    const tri = el.sort((a, b) => b - a);
    const set = new Set(tri);
    if (tri[1] + tri[2] - tri[0] <= 0) answer.push("Invalid");
    else if (set.size === 1) answer.push("Equilateral");
    else if (set.size === 2) answer.push("Isosceles");
    else if (set.size === 3) answer.push("Scalene");
  });

  return answer.join("\n");
}

console.log(solution(input));
