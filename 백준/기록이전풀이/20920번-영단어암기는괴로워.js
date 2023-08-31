const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const [N, M] = input.shift().split(" ").map(Number);

function solution(M, input) {
  let map = new Map();
  for (let char of input) {
    if (char.length >= M) {
      let mapNum = map.get(char);
      mapNum ? map.set(char, mapNum + 1) : map.set(char, 1);
    }
  }
  let arr = Array(...map);
  arr.sort((a, b) => {
    // 빈도에 따른 정렬
    if (a[1] !== b[1]) return b[1] - a[1];

    // 빈도가 같으면? 길이에 따른 정렬
    if (a[0].length !== b[0].length) return b[0].length - a[0].length;

    // 길이도 같다면 알파벳 순에 따른 정렬
    return a[0].localeCompare(b[0]);
  });

  let answer = "";
  arr.forEach((el) => {
    answer += `${el[0]}\n`;
  });
  return answer;
}
console.log(solution(M, input).trim());
