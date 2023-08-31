const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

const A = new Set(input[0].split(" ").map(Number));
const B = new Set(input[1].split(" ").map(Number));
const subAtoB = [];
const subBtoA = [];

[...A].forEach((el) => {
  if (!B.has(el)) {
    subAtoB.push(el);
  }
});

[...B].forEach((el) => {
  if (!A.has(el)) {
    subBtoA.push(el);
  }
});

console.log(subAtoB.length + subBtoA.length);
