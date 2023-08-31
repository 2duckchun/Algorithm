const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(1);

function solution(input) {
  for (let change of input) {
    let Quarter = Math.floor(change / 25);
    let Dime = Math.floor((change - Quarter * 25) / 10);
    let Nickel = Math.floor((change - Quarter * 25 - Dime * 10) / 5);
    let Penny = Math.floor(change % 5);

    console.log([Quarter, Dime, Nickel, Penny].join(" "));
  }
}

solution(input);
