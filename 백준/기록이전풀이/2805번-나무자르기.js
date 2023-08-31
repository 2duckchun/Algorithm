const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [setting, trees] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .map((el) => el.split(" ").map(Number));

function solution(setting, trees) {
  const [_, needMeter] = setting;
  let max = Math.max(...trees);
  let min = 1;
  let mid = Math.floor((max + min) / 2);
  while (min <= max) {
    mid = Math.floor((max + min) / 2);

    let cuttedMeter = trees.reduce((acc, e) => {
      if (e >= mid) {
        return acc + e - mid;
      }
      return acc;
    }, 0);
    if (cuttedMeter >= needMeter) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return max;
}

console.log(solution(setting, trees));
