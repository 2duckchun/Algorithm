const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

function solution(input) {
  let answer = "";
  for (const num of input) {
    const [A, B] = num
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);
    let big = A;
    let small = B;
    let mod = null;

    while (mod !== 0) {
      mod = big % small;
      big = small;
      small = mod;
    }
    gcd = big;
    answer += `${(A * B) / gcd}\n`;
  }
  return answer;
}

console.log(solution(input).trim());
