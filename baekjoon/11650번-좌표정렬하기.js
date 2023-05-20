const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

input.sort((a, b) => {
  const prev = a.split(" ").map(Number);
  const next = b.split(" ").map(Number);

  if (prev[0] !== next[0]) {
    return prev[0] - next[0];
  }
  return prev[1] - next[1];
});

console.log(input.join("\n"));
