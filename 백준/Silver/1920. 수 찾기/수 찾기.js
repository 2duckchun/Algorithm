const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [cN, cnArr, cM, cmArr] = fs.readFileSync(filePath).toString().trim().split(newLine)

let N = parseInt(cN)
let M = parseInt(cM)
const set = new Set(cnArr.split(" ").map(Number))
const mArr = cmArr.split(" ").map(Number)

function solution(set, mArr) {
  let result = ""
  for (let num of mArr) {
    if (set.has(num)) {
      result += `1\n`
    } else {
      result += `0\n`
    }
  }
  return result
}

console.log(solution(set, mArr))