const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";

const croAlpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let input = fs.readFileSync(filePath).toString().trim();

for (let i = 0; i < croAlpha.length; i++) {
  const target = croAlpha[i];
  input = input.replaceAll(target, "*");
}

console.log(input.length);
