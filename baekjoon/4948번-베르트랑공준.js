const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const arr = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(0, -1);

function solution(arr) {
  const max = Math.max(...arr) * 2 + 1;
  const prime = Array(max).fill(true).fill(false, 0, 2);

  for (let i = 2; i < Math.sqrt(max); i++) {
    if (!prime[i]) continue;
    for (let j = i + i; j < prime.length; j = j + i) {
      prime[j] = false;
    }
  }

  for (let num of arr) {
    let count = "";
    for (let i = num + 1; i <= num * 2; i++) {
      if (prime[i]) count++;
    }
    console.log(count);
  }
}

solution(arr);

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num % 2 === 0) return num === 2 ? true : false;
//   for (let i = 3; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// function solution(numArr) {
//   let answer = "";
//   for (let num of numArr) {
//     let count = 0;
//     for (let i = num + 1; i <= num * 2; i++) {
//       if (isPrime(i)) count++;
//     }
//     answer += `${count}\n`;
//   }
//   return answer;
// }

// console.log(solution(arr).trim());
