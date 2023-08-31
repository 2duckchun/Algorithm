const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";

const input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let stack = [];
  let answer = "";
  let isTag = false;
  for (let char of input) {
    if (char === "<") {
      isTag = true;
      if (stack.length) {
        answer += stack.reverse().join("");
        stack = [];
      }
      stack.push(char);
      continue;
    }

    if (char === ">") {
      isTag = false;
      stack.push(char);
      answer += stack.join("");
      stack = [];
      continue;
    }

    if (char === " " && !isTag) {
      answer += stack.reverse().join("");
      answer += " ";
      stack = [];
      continue;
    }

    stack.push(char);
  }

  if (stack.length) {
    answer += stack.reverse().join("");
  }

  console.log(answer);
}

solution(input);
