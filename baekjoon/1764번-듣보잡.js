const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [setting, ...input] = fs.readFileSync(filePath).toString().trim().split(newLine);
const [N, M] = setting.split(" ").map(Number);
const dut = new Set(input.slice(0, N));
const bo = new Set(input.slice(N));

const answer = [];
[...dut].forEach((el) => {
  if (bo.has(el)) {
    answer.push(el);
  }
});

console.log(`${answer.length}\n${answer.sort().join("\n")}`);
