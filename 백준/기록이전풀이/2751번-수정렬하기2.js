const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(1);

console.log(input.sort((a, b) => a - b).join("\n"));

console.log([a, g, g, x, b, c, d, k].sort((a, b) => a - b));
