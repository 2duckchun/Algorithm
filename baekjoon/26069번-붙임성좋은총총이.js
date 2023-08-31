const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(1)
  .map((el) => el.split(" "));

function solution(input) {
  const set = new Set();
  set.add("ChongChong");
  for (let meet of input) {
    if (set.has(meet[0])) set.add(meet[1]);
    if (set.has(meet[1])) set.add(meet[0]);
  }
  console.log(set.size);
}

solution(input);
