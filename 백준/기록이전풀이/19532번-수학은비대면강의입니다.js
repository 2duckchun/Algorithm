const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const [a, b, c, d, e, f] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

function solution(a, b, c, d, e, f) {
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      let xVal = (a * x) + (b * y) === c
      let yVal = (d * x) + (e * y) === f
      if (xVal && yVal) {
        return [x, y]
      }
    }
  }
}

console.log(
  ...solution(a, b, c, d, e, f))