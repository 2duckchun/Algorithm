const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const input = +fs.readFileSync(filePath).toString().trim();

function solution(X) {
  let BIT = X.toString(2);

  const helper = (bit) => {
    let count = 0;
    for (let i = 0; i < bit.length; i++) {
      if (bit[i] === "1") count++;
    }
    return count;
  };

  return helper(BIT);
}

console.log(solution(input));
