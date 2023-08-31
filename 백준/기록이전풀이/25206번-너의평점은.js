const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs.readFileSync(filePath).toString().trim().split(newLine);

function solution(input) {
  const grade = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };

  let totalhak = 0;
  let hakgwa = 0;

  for (let i = 0; i < input.length; i++) {
    const parsedInput = input[i].split(" ");
    const hak = parseInt(parsedInput[1]);
    const gwa = parsedInput[2];
    if (gwa === "P") {
      continue;
    }
    totalhak += hak;
    hakgwa += hak * grade[gwa];
  }
  let answer = hakgwa / totalhak;
  console.log(answer.toFixed(6));
}

solution(input);
