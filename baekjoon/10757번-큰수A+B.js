const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const A = BigInt(input[0]);
const B = BigInt(input[1]);
const answer = A + B;
console.log(answer.toString());
