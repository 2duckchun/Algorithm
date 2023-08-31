const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

const addIndex = input.map((el, i) => {
  const arr = el.split(" ");
  arr[0] = parseInt(arr[0]);
  arr.push(i);
  return arr;
});

addIndex.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[2] - b[2];
});

const answer = addIndex
  .map((el) => {
    el.pop();
    return el.join(" ");
  })
  .join("\n");

console.log(answer);
