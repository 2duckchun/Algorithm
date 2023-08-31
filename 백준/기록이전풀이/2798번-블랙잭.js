const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [setting, cards] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .map((el) => el.split(" ").map(Number));

function solution(setting, cards) {
  const [N, M] = setting;
  let score = 0;
  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let combi = cards[i] + cards[j] + cards[k];
        if (combi === M) return M;
        if (combi > score && combi < M) score = combi;
      }
    }
  }
  return score;
}

console.log(solution(setting, cards));
