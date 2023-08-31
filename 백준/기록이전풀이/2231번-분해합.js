const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const num = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(num) {
  let temp = num;
  let digits = 0;
  while (temp) {
    digits += 1;
    temp = Math.floor(temp / 10);
  }

  let begin = num - digits * 9;

  for (let i = begin; i < num; i++) {
    let add = i
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, e) => acc + e, 0);
    if (i + add === num) return i;
  }

  return 0;
}

console.log(solution(num));
