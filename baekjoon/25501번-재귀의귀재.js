const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

function recursion(string, i = 0, j = 1, count = 1) {
  if (i >= string.length - j) return [1, count];
  if (string[i] !== string[string.length - j]) return [0, count];
  return recursion(string, (i = i + 1), (j = j + 1), (count = count + 1));
}

const palindrome = input.map((el) => {
  return recursion(el);
});

console.log(palindrome.join("\n").replaceAll(",", " "));
