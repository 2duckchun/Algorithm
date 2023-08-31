const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const N = parseInt(input.shift());

function solution(N, input) {
  const page = [];
  let val = 0;

  const paper = (left, bottom) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (!page[i + bottom][j + left]) {
          page[i + bottom][j + left] = 1;
          val += 1;
        }
      }
    }
  };

  for (let i = 0; i < 100; i++) {
    const row = Array(100).fill(0);
    page.push(row);
  }

  for (let i = 0; i < input.length; i++) {
    let [left, bottom] = input[i].split(" ");
    left = parseInt(left);
    bottom = parseInt(bottom);
    paper(left, bottom);
  }

  console.log(val);
}

solution(N, input);
