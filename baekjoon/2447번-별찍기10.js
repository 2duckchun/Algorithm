const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const num = ~~fs.readFileSync(filePath).toString().trim();

function solution(num) {
  const star = (i, j, num) => {
    if (i % 3 === 1 && j % 3 === 1) return " ";
    else {
      if (num === 1) return "*";
      return star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  };

  let answer = "";
  for (let i = 0; i < num; i++) {
    let line = "";
    for (let j = 0; j < num; j++) {
      line += star(i, j, num);
    }
    answer += `${line}\n`;
  }

  console.log(answer);
}

solution(num);
