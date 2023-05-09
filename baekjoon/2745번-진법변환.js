const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const converter = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  O: 24,
  P: 25,
  Q: 26,
  R: 27,
  S: 28,
  T: 29,
  U: 30,
  V: 31,
  W: 32,
  X: 33,
  Y: 34,
  Z: 35,
};

function solution(input) {
  const N = input[0]
    .split("")
    .map((el) => converter[el])
    .reverse();
  const notation = parseInt(input[1]);

  let answer = 0;
  for (let i = 0; i < N.length; i++) {
    answer += N[i] * Math.pow(notation, i);
  }
  console.log(answer);
}

solution(input);
