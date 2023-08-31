const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const arr = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(1);

function solution(numArr) {
  const maxNum = Math.max(...numArr);
  const set = new Set(
    Array(maxNum - 1)
      .fill(0)
      .map((_, i) => i + 2)
  );

  for (let i = 2; i <= maxNum; i++) {
    if (!set.has(i)) continue;
    for (let j = i + i; j <= maxNum; j += i) {
      set.delete(j);
    }
  }
  const arr = [...set];

  let answer = "";

  for (let num of numArr) {
    let count = 0;
    for (let i = 0; ; i++) {
      if (arr[i] > Math.floor(num / 2)) {
        answer += `${count}\n`;
        break;
      }
      const sub = num - arr[i];
      if (set.has(sub)) {
        count++;
      }
    }
  }

  return answer;
}

console.log(solution(arr).trim());
