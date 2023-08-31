const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const [elementA, elementB] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let mod = null;
let A = elementA;
let B = elementB;
let gcd = 0;
while (mod !== 0) {
  mod = A % B;
  A = B;
  B = mod;
}
gcd = A;

console.log((elementA * elementB) / gcd);
