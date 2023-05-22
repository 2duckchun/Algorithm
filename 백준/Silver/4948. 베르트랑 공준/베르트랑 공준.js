const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const arr = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(0, -1);

function isPrime(num) {
  if (num <= 1) return false;
  if (num % 2 === 0) return num === 2 ? true : false;
  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numArr) {
  let answer = "";
  for (let num of numArr) {
    let count = 0;
    for (let i = num + 1; i <= num * 2; i++) {
      if (isPrime(i)) count++;
    }
    answer += `${count}\n`;
  }
  return answer;
}

console.log(solution(arr).trim());
