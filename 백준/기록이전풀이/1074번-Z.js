const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [n, r, c] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(n, r, c) {
  let answer = 0;
  const divide = (row, col, size) => {
    if (row === r && col === c) {
      console.log(answer);
      return;
    }

    if (r >= row && r < row + size && c >= col && c < col + size) {
      let half = parseInt(size / 2);
      divide(row, col, half);
      divide(row, col + half, half);
      divide(row + half, col, half);
      divide(row + half, col + half, half);
    } else {
      answer += size * size;
    }
  };
  divide(0, 0, Math.pow(2, n));
}

solution(n, r, c);
