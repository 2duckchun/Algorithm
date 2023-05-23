const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const arr = fs.readFileSync(filePath).toString().trim().split(newLine);

function solution(arr) {
  arr.forEach((el) => {
    palindrome(el);
  });
}

function palindrome(str) {
  if (str[0] === "0") return;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      console.log("no");
      return;
    }
  }
  console.log("yes");
  return;
}
solution(arr);
