const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";

const input = fs.readFileSync(filePath).toString().trim().split("");

function solution(input, count = 0) {
  if (input.length === 0) return count;

  if (input[0] === "d" && input[1] === "z" && input[2] === "=") return solution(input.slice(3), (count = count + 1));

  if (
    (input[0] === "c" && input[1] === "=") ||
    (input[0] === "c" && input[1] === "-") ||
    (input[0] === "l" && input[1] === "j") ||
    (input[0] === "n" && input[1] === "j") ||
    (input[0] === "s" && input[1] === "=") ||
    (input[0] === "z" && input[1] === "=") ||
    (input[0] === "d" && input[1] === "-")
  )
    return solution(input.slice(2), (count = count + 1));

  return solution(input.slice(1), (count = count + 1));
}

console.log(solution(input));
