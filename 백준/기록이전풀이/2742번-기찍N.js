const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const num = parseInt(fs.readFileSync(filePath).toString().trim());

let answer = "";
for (let i = num; i > 0; i--) {
  answer += i + "\n";
}
console.log(answer);
