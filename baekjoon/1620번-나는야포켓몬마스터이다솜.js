const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const [N, M] = input.shift().split(" ").map(Number);

const dictArr = input.slice(0, N);
const dictMap = new Map();

dictArr.forEach((el, i) => {
  dictMap.set(el, i + 1);
});

const needToFind = input.slice(-M).map((el) => {
  if (isNaN(el)) {
    return el;
  }
  return parseInt(el);
});

const answer = needToFind.map((el) => {
  if (isNaN(el)) {
    return dictMap.get(el);
  }
  return dictArr[el - 1];
});

console.log(answer.join("\n"));
