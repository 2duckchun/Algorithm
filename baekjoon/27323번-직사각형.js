const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [A, B] = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

console.log(A * B);
