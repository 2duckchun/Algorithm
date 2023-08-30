const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const [N, K] = input.shift().split(" ").map(Number);
const lines = input.map(Number);

function solution(K, lines) {
  /**
   * 이분탐색을 사용한다.
   * max와 min을 구한다. (초기 max는 lines의 최대값, min은 1)
   * - lines의 랜선들을 특정 길이로 잘라서 K개를 만들어야 한다. 같은 K개를 만들더라도 길이가 최대한 길어야 한다. 예)
   * 자르는 길이가 짧을수록 랜선은 많이 만들어진다.
   */
  let max = Math.max(...lines);
  let min = 1;
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let cuttedLines = lines.reduce((acc, e) => acc + Math.floor(e / mid), 0);
    if (cuttedLines >= K) min = mid + 1;
    else max = mid - 1;
  }
  console.log(max);
}

solution(K, lines);
