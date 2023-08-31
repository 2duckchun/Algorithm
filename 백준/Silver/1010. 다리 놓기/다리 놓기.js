const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(1)
  .map((el) => el.split(" ").map(Number));

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function solution(input) {
  let answer = "";
  for (let num of input) {
    const [r, n] = num;
    const bridge = Math.round(factorial(n) / (factorial(n - r) * factorial(r)));
    answer += `${bridge}\n`;
  }
  return answer;
}

console.log(solution(input).trim());

/** 
 * 조합문제
 * N <= M이고, N개의 사이트에 모두 다리를 연결해야함. 다리는 중복되는 개념이 아니므로 조합을 사용
 * nCr = n! / (n - r)! r!
*/
