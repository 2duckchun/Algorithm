const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const N = parseInt(input.shift());

function solution(N, input) {
  const page = [];
  const paper = (left, bottom) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        page[i + bottom][j + left] = 1;
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

  let val = 0;
  page.forEach((e) => {
    e.forEach((e) => {
      val += e;
    });
  });
  console.log(val);
}

solution(N, input);
// // paper(3, 7);
// // paper(15, 7);
// // paper(5, 2);

// function getPage() {
//   let val = 0;
//   page.forEach((e) => {
//     e.forEach((e) => {
//       val += e;
//     });
//   });
//   console.log(val);
// }

// // getPage();
