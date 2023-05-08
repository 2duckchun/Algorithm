const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs.readFileSync(filePath).toString().trim().split(newLine);
let [N, M] = input.shift().split(" ").map(Number);

function solution(N, M, input) {
  const matrixA = input.slice(0, N).map((el) => el.split(" ").map(Number));
  const matrixB = input.slice(N).map((el) => el.split(" ").map(Number));

  for (let i = 0; i < N; i++) {
    const matrixAdd = [];
    const rowA = matrixA[i];
    const rowB = matrixB[i];
    for (let j = 0; j < M; j++) {
      matrixAdd.push(rowA[j] + rowB[j]);
    }
    console.log(matrixAdd.join(" "));
  }
}

solution(N, M, input);
