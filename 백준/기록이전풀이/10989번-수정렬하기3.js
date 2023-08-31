const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(1);

const array = Array(10000).fill(0);

for (let i = 0; i < input.length; i++) {
  let num = input[i];
  if (num !== 0) {
    array[num - 1] += 1;
  }
}

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i]; j++) {
    console.log(i + 1);
  }
}
