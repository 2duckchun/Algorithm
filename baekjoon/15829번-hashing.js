const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [str] = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

function solution(str) {
  let hash = 0;
  let r = 1;
  let mod = 1234567891;
  for (let char of str) {
    let code = char.charCodeAt() - 96;
    hash = (hash + code * r) % mod;
    r = (r * 31) % mod;
  }
  return hash;
}

console.log(solution(str));
