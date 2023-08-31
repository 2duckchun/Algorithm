const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [setting, input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .map((el) => el.split(" ").map(Number));

function solution(setting, input) {
  const [N, K] = setting;

  for (let i = 0; i < input.length; i++) {
    let isSwap = false;
    for (let j = 0; j < input.length - i; j++) {
      if (input[j] < input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }

  return input[K - 1];
}

console.log(solution(setting, input));
