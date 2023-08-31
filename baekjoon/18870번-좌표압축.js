/**
 * 최초 배열을 만듬 (키로 활용할 예정)
 * set 하나 만듬.
 * set을 이용해 정렬함.
 * map으로 key value 형식으로 씀
 */

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const key = fs.readFileSync(filePath).toString().trim().split(newLine)[1].split(" ").map(Number);
const map = new Map();

// Array.from(new Set(key))
//   .sort((a, b) => a - b)
//   .forEach((el, i) => map.set(el, i));

[...new Set(key)].sort((a, b) => a - b).forEach((el, i) => map.set(el, i));

let answer = "";

key.forEach((el) => {
  answer += `${map.get(el)} `;
});

console.log(answer.trim());
