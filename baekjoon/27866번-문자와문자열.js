const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const [str, num] = input;

const solution = (str, num) => {
  const arr = str.split("");
  console.log(arr[num - 1]);
};

solution(str, num);
