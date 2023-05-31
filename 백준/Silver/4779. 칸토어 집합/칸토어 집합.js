const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

const 칸토어 = (num) => {
  let 나눈넘 = Math.floor(num / 3);
  if (나눈넘 === 0) return "-";
  let 공백 = "";
  for (let i = 나눈넘; i < 나눈넘 * 2; i++) {
    공백 += " ";
  }
  return `${칸토어(나눈넘)}${공백}${칸토어(나눈넘)}`;
};

function solution(input) {
  let answer = "";
  for (let number of input) {
    let num = Math.pow(3, number);
    answer += `${칸토어(num)}\n`;
  }
  return answer;
}

console.log(solution(input).trim());
