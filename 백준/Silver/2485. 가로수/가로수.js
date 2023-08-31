const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const numArr = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(1);

function getGcd(num1, num2) {
  let [a, b] = [num1, num2].sort((a, b) => b - a);
  let mod = null;
  while (mod !== 0) {
    mod = a % b;
    a = b;
    b = mod;
  }
  return a;
}

function solution(numArr) {
  let distance = [];
  for (let i = numArr.length - 1; i > 0; i--) {
    distance.push(numArr[i] - numArr[i - 1]);
  }

  let gcd = getGcd(distance[0], distance[1]);

  for (let i = 0; i < distance.length; i++) {
    gcd = getGcd(gcd, distance[i]);
  }

  let totalDistance = distance.reduce((ac, e) => ac + e, 0);
  let totalNeedTree = totalDistance / gcd + 1;
  return totalNeedTree - numArr.length;
}

console.log(solution(numArr));
