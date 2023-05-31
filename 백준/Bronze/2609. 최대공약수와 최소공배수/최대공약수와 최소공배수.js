const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
let [A, B] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number).sort((a, b) => b - a)

let lcmA = A
let lcmB = B

let mod = null

while(mod !== 0) {
  mod = A % B
  A = B
  B = mod
}

let lcm = (lcmA * lcmB) / A
console.log(A)
console.log(lcm)