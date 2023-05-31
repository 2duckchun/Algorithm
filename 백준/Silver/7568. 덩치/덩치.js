const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const people = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(1)
  .map((el) => el.split(" ").map(Number));

function solution(people) {
  const answer = [];
  for (const [x, y] of people) {
    let rank = 1;
    for (let i = 0; i < people.length; i++) {
      const [p, q] = people[i];
      if (x < p && y < q) rank++;
    }
    answer.push(rank);
  }
  return answer;
}

console.log(solution(people).join(" "));
