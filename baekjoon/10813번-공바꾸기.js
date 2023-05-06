const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs.readFileSync(filePath).toString().split(newLine);
const setting = input.shift().split(" ");

function solution(setting, input) {
  const N = parseInt(setting[0]);
  const M = parseInt(setting[1]);
  const arr = Array(parseInt(N))
    .fill(0)
    .map((ele, i) => i + 1);

  const helper = (first, second) => {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
  };

  for (let i = 0; i < M; i++) {
    const parsedInput = input[i].split(" ");
    const firstBox = parseInt(parsedInput[0]) - 1;
    const secondBox = parseInt(parsedInput[1]) - 1;
    helper(firstBox, secondBox);
  }
  console.log(arr.join(" "));
}

solution(setting, input);
