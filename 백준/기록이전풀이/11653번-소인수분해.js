const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
let num = parseInt(fs.readFileSync(filePath).toString().trim());

const primes = [];
let i = 2;
while (true) {
  if (num % i === 0) {
    primes.push(i);
    num = num / i;
    i = 1;
  }
  i++;
  if (num < i) {
    break;
  }
}

console.log(primes.join("\n"));
