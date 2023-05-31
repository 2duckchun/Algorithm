const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const num = ~~fs.readFileSync(filePath).toString().trim();

const memo = [0, 1];

for (let i = 1; i < num; i++) {
  memo[i + 1] = BigInt(memo[i]) + BigInt(memo[i - 1]);
}

console.log(memo[num].toString());
