const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const hive = parseInt(fs.readFileSync(filePath).toString().trim());

function solution(hive) {
  let floor = 1;
  let room = 1;
  while (hive > room) {
    room = room + floor * 6;
    floor += 1;
  }
  console.log(floor);
}

solution(hive);
