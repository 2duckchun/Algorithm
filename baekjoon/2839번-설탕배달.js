const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const num = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(num) {
  let answer = 0;
  while (true) {
    if (num <= 2) return -1;

    if (num % 5 === 0 && num % 3 === 0) {
      answer += Math.floor(num / 5);
      break;
    }

    if (num % 5 === 0 && num % 3 !== 0) {
      answer += Math.floor(num / 5);
      break;
    }

    num -= 3;
    answer += 1;

    if (num % 5 === 0) {
      answer += Math.floor(num / 5);
      break;
    }
  }
  return answer;
}

console.log(solution(num));
