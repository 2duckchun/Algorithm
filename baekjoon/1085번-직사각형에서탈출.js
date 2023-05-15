const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const [x, y, w, h] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const xw = w - x;
const yh = h - y;
const answer = Math.min(x, y, xw, yh);

console.log(answer);
