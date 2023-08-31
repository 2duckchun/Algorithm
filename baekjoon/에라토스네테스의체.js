const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const num = ~~fs.readFileSync(filePath).toString().trim();

function solution(num) {
  const set = new Set(
    Array(num - 1)
      .fill(0)
      .map((el, i) => i + 2)
  );
  for (let i = 2; i <= num; i++) {
    if (!set.has(i)) continue;
    for (let j = i + i; j <= num; j += i) {
      set.delete(j);
    }
  }
  const arr = [...set];
  n = 6;
  for (let i = 0; i <= n; i++) {
    if (arr[i] > Math.floor(n / 2)) break;
    const kk = n - arr[i];
    if (set.has(kk)) {
      console.log("있다 ㅋㅋ");
    }
  }
}

solution(num);
