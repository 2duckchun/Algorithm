const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const num = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(num) {
  let index = 1;
  let mass = 1;
  for (let i = 2; num > mass; i++) {
    mass = mass + i;
    index += 1;
  }
  let calc = mass - num;

  if (index % 2 === 0) {
    console.log(`${index - calc}/${1 + calc}`);
  } else {
    console.log(`${1 + calc}/${index - calc}`);
  }
}

solution(num);
