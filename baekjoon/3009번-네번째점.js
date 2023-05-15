const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .map((el) => el.split(" ").map(Number));

function solution(input) {
  const x = {};
  const y = {};
  input.forEach((el) => {
    x[el[0]] = x[el[0]] ? x[el[0]] + 1 : 1;
    y[el[1]] = y[el[1]] ? y[el[1]] + 1 : 1;
  });

  let answer = [];
  for (let key in x) {
    let value = x[key];
    if (value < 2) {
      answer.push(key);
    }
  }
  for (let key in y) {
    let value = y[key];
    if (value < 2) {
      answer.push(key);
    }
  }
  console.log(answer.join(" "));
}

solution(input);
