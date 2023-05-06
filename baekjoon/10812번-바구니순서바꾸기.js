const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs.readFileSync(filePath).toString().split(newLine);
const setting = input.shift().split(" ");
const n = parseInt(setting[0]);
const m = parseInt(setting[1]);

function solution(n, m, input) {
  const arr = Array(n)
    .fill(0)
    .map((_, i) => i + 1);

  const helper = (begin, end, mid) => {
    const tempArr = [];
    for (let i = mid; i <= end; i++) {
      tempArr.push(arr[i]);
    }
    for (let j = begin; j < mid; j++) {
      tempArr.push(arr[j]);
    }
    for (let i = 0; i < tempArr.length; i++) {
      arr[begin + i] = tempArr[i];
    }
  };

  for (let i = 0; i < m; i++) {
    const parsedInput = input[i].split(" ");
    const begin = parseInt(parsedInput[0]) - 1;
    const end = parseInt(parsedInput[1]) - 1;
    const mid = parseInt(parsedInput[2]) - 1;
    helper(begin, end, mid);
  }

  console.log(arr);
}

solution(n, m, input);
