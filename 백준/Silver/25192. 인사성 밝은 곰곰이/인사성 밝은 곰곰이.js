const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

function solution(input) {
  let gomgom = 0;
  const set = new Set();
  for (let chat of input) {
    if (chat === "ENTER") {
      set.clear();
      continue;
    }
    if (!set.has(chat)) {
      set.add(chat);
      gomgom++;
    }
  }
  console.log(gomgom);
}

solution(input);
