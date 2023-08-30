const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs.readFileSync(filePath).toString().trim().split(newLine);

function solution(input) {
  const result = [];
  for (let str of input) {
    if (!isNaN(str)) {
      continue;
    }
    const arr = str.split(" ").map((el) => {
      return el.split("").reverse().join("");
    });
    result.push(arr.join(" "));
  }
  return result.join("\n");
}

console.log(solution(input));
