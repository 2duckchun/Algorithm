const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const arr = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(0, -1);

function solution(arr) {
  const max = Math.max(...arr) * 2 + 1;
  const prime = Array(max).fill(true).fill(false, 0, 2);

  for (let i = 2; i < Math.sqrt(max); i++) {
    if (!prime[i]) continue;
    for (let j = i + i; j < prime.length; j = j + i) {
      prime[j] = false;
    }
  }

  for (let num of arr) {
    let count = "";
    for (let i = num + 1; i <= num * 2; i++) {
      if (prime[i]) count++;
    }
    console.log(count);
  }
}

solution(arr);