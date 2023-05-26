const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(1);

function solution(input) {
  for (let i = 0; i < input.length; i = i + 2) {
    const K = input[i];
    const N = input[i + 1];
    const apartment = Array.from(Array(K + 1), () => Array(N).fill(0));
    // 0층 채우기
    for (let i = 0; i < N; i++) {
      apartment[0][i] = i + 1;
    }
    for (let i = 1; i <= K; i++) {
      for (let j = 0; j < N; j++) {
        if (j === 0) {
          apartment[i][j] = 1;
          continue;
        }
        apartment[i][j] = apartment[i][j - 1] + apartment[i - 1][j];
      }
    }
    console.log(apartment[K][N - 1]);
  }
}

solution(input);
