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

function solution(input) {
  let answer = "";
  for (let info of input) {
    let [H, W, N] = info;
    let room = "";
    let floor = 0;
    let number = 0;

    if (N % H === 0) {
      floor = H;
      number = Math.floor(N / H);
    } else {
      floor = N % H;
      number = Math.floor(N / H) + 1;
    }

    room += `${floor}`;
    if (number < 10) room += `0${number}`;
    else room += `${number}`;
    answer += `${room}\n`;
  }
  return answer;
}

console.log(solution(input).trim());
