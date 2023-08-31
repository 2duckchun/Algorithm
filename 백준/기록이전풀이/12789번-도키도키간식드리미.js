const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
let [max, line] = fs.readFileSync(filePath).toString().trim().split(newLine);

max = +max;
line = line.split(" ").map((n) => +n);

function solution(line, max) {
  let count = 1;
  const unorderedLine = line.reverse();
  const waitLine = [];

  while (unorderedLine.length > 0) {
    if (waitLine.at(-1) === count) {
      waitLine.pop();
      count++;
      continue;
    }

    const person = unorderedLine.pop();

    if (person === count) {
      count++;
      continue;
    } else {
      waitLine.push(person);
    }
  }

  while (waitLine.length > 0 && waitLine.at(-1) === count) {
    count++;
    waitLine.pop();
  }

  return waitLine.length > 0 ? "Sad" : "Nice";
}

console.log(solution(line, max));
