/**
 * set으로 만듬
 * set도 sort가 되나 확인
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = new Set(fs.readFileSync(filePath).toString().trim().split(newLine).slice(1));
console.log(
  Array.from(input)
    .sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      }
      return a.localeCompare(b);
    })
    .join("\n")
);
