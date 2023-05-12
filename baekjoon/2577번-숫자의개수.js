const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

const [A, B, C] = input;
const num = (A * B * C).toString().split("");

const obj = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

num.forEach((e) => {
  obj[e] = obj[e] + 1;
});

Object.values(obj).forEach((e) => {
  console.log(e);
});
