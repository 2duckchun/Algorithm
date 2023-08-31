const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

const cantor = (num) => {
  let divide = Math.floor(num / 3);
  if (divide === 0) return "-";
  let space = "";
  for (let i = divide; i < divide * 2; i++) {
    space += " ";
  }
  return `${cantor(divide)}${space}${cantor(divide)}`;
};

function solution(input) {
  let answer = "";
  for (let number of input) {
    let num = Math.pow(3, number);
    answer += `${cantor(num)}\n`;
  }
  return answer;
}

console.log(solution(input).trim());
