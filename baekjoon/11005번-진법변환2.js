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
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
  16: "G",
  17: "H",
  18: "I",
  19: "J",
  20: "K",
  21: "L",
  22: "M",
  23: "N",
  24: "O",
  25: "P",
  26: "Q",
  27: "R",
  28: "S",
  29: "T",
  30: "U",
  31: "V",
  32: "W",
  33: "X",
  34: "Y",
  35: "Z",
};

function solution(input) {
  const parsedInput = input.map((el) => parseInt(el));
  const arr = [];
  let [N, B] = parsedInput;

  if (N < B) {
    console.log(converter[N]);
    return;
  }

  while (N >= B) {
    let modulo = N % B;
    N = parseInt(N / B);
    arr.push(modulo);
    if (N < B) {
      arr.push(N);
    }
  }
  console.log(
    arr
      .reverse()
      .map((el) => converter[el])
      .join("")
      .trim()
  );
}

solution(input);
