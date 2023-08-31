const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim();

/**
 * 주어진 임의의 문자열로 펠린드롬을 만들어야 한다.
 * 정답이 여러개인 경우, 사전순으로 펠린드롬을 만들어야 한다.
 *
 * 펠린드롬 규칙 : 펠린드롬을 이루는 문자열의 길이가 짝수일 경우, 문자는 모두 짝수개씩 있어야 하며
 * 펠린드롬을 이루는 문자열의 길이가 홀수일 경우, 문자열을 이루는 한 문자의 길이만 홀수여야 하고 나머지는 짝수여야 함.
 */

function solution(input) {
  let isOdd = input.length % 2 ? true : false;
  let oddChar = "";
  let oddCount = 0;

  const map = new Map();
  for (let char of input) {
    const charVal = map.get(char);
    if (charVal) map.set(char, charVal + 1);
    else map.set(char, 1);
  }

  for (let mapArr of map.entries()) {
    if (mapArr[1] % 2 !== 0) {
      oddCount++;
      oddChar = mapArr[0];
    }
  }
  if (isOdd && oddCount !== 1) return "I'm Sorry Hansoo";
  if (!isOdd && oddCount !== 0) return "I'm Sorry Hansoo";

  const charArr = [...map].sort((a, b) => a[0].localeCompare(b[0]));
  let halfStr = "";
  for (let char of charArr) {
    for (let i = 0; i < Math.floor(char[1] / 2); i++) {
      halfStr += char[0];
    }
  }

  if (isOdd) return `${halfStr}${oddChar}${halfStr.split("").reverse().join("")}`;
  else return `${halfStr}${halfStr.split("").reverse().join("")}`;
}

console.log(solution(input).trim());
