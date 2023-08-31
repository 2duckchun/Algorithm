const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs.readFileSync(filePath).toString().split(newLine);
const setting = input.shift().split(" ");

function solution(setting, input) {
  const N = parseInt(setting[0]);
  const M = parseInt(setting[1]);
  const arr = Array(parseInt(N)).fill(0);

  const helper = (start, end, value) => {
    for (let i = start; i <= end; i++) {
      arr[i] = value;
    }
  };

  for (let i = 0; i < M; i++) {
    const parsedInput = input[i].split(" ");
    const startBox = parseInt(parsedInput[0]) - 1;
    const endBox = parseInt(parsedInput[1]) - 1;
    const value = parseInt(parsedInput[2]);
    helper(startBox, endBox, value);
  }

  console.log(arr.join(" "));
}

solution(setting, input);
