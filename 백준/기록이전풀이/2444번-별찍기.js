const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const num = ~~fs.readFileSync(filePath).toString();

for (let i = 1; i <= num; i++) {
  let result = "";
  for (let j = num - i; j > 0; j--) {
    result += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    result += "*";
  }
  console.log(result);
}

for (let i = num - 1; i > 0; i--) {
  let result = "";
  for (let j = num - i; j > 0; j--) {
    result += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    result += "*";
  }
  console.log(result);
}
