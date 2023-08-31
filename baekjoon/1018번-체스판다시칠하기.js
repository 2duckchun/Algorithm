const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine)

const [M, N] = input.shift().split(" ").map(Number)
console.log(M, N, input)
const whiteLine = "WBWBWBWB"
const blackLine = "BWBWBWBW"

for (let i = 0; i < N - 8; i++) {
    for (let j = 0; j < M - 8; j++) {
        for (let k = i; k < i + 8; k++) {
            for (let l = j; l < j + 8; l++) {
                
            }
        }
    }
}