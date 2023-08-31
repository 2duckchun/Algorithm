const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);
const set = new Set();

input.forEach((el) => {
  const [name, cng] = el.split(" ");
  if (cng === "enter") set.add(name);
  if (cng === "leave") set.delete(name);
});

// const answer = [...set].sort((a, b) => {
//   return b.localeCompare(a);
// });

const answer = [...set].sort().reverse();

console.log(answer.join("\n"));
