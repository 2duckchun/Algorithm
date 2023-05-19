const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number);

function insertion(input) {
  for (let i = 0; i < input.length - 1; i++) {
    j = i;
    while (input[j] > input[j + 1]) {
      let temp = input[j];
      input[j] = input[j + 1];
      input[j + 1] = temp;
      j--;
    }
  }

  let avg = input.reduce((acc, e) => acc + e, 0) / input.length;
  let median = 0;
  if (input.length % 2 === 0) {
    let index = Math.floor(input.length / 2);
    median = (input[index - 1] + input[index]) / 2;
  } else {
    median = input[Math.floor(input.length / 2)];
  }

  return `${avg}\n${median}`;
}

console.log(insertion(input));
