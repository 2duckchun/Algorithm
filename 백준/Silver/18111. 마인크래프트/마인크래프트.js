const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const [N, M, B] = input.shift().trim().split(" ").map(Number);

const land = [];
input.forEach((el) => {
  land.push(el.split(" ").map(Number));
});

const getTimeAndBlock = (target, N, M, B, land) => {
  let block = B;
  let time = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (land[i][j] > target) {
        const leftBlocks = land[i][j] - target;
        time += leftBlocks * 2;
        block += leftBlocks;
      } else if (land[i][j] < target) {
        const needBlocks = target - land[i][j];
        time += needBlocks * 1;
        block -= needBlocks;
      }
    }
  }
  return [time, block];
};

function solution(N, M, B, land) {
  let answer = [Number.MAX_SAFE_INTEGER, 0];
  for (let i = 0; i <= 256; i++) {
    const [time, block] = getTimeAndBlock(i, N, M, B, land);
    if (block < 0) break;
    if (time <= answer[0] && block >= 0) {
      answer[0] = time;
      answer[1] >= i ? answer[1] : (answer[1] = i);
    }
  }
  return answer;
}

console.log(solution(N, M, B, land).join(" ").trim());
