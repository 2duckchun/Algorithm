/**
 * 선영이 AC 만듬
 * AC : 정수 배열에 연산을 하기 위해 만든 언어
 * AC에는 두가지 함수가 있음. R(뒤집기), D(버리기)
 * R은 배열에 있는 수의 순서를 뒤집음
 * D는 첫번째 수를 버림 (배열이 비어있는데 D를 사용한 경우 에러 발생)
 * 함수는 조합해서 한번에 사용 가능. AB -> A하고 B / RDD -> R하고 D D
 * 배열의 초깃값과 함수가 주어졌을 때, 최종 결과를 구하는 프로그램 작성.
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

function solution(input) {
  let answer = "";

  for (let i = 0; i < input.length; i = i + 3) {
    const queue = [];
    const orders = input[i].split(""); // 오더는 배열로 만들고 뒤집음
    let isValid = true;
    let queueStr = "";
    let isReverse = false;
    for (let j = 1; j < input[i + 2].length - 1; j++) {
      if (input[i + 2][j] !== "[" || input[i + 2][j] !== "]") queueStr += input[i + 2][j];
    }
    const queueElement = queueStr.length !== 0 ? queueStr.split(",") : [];

    for (let ele of queueElement) {
      queue.push(ele);
    }

    for (let order of orders) {
      if (order === "R") {
        isReverse = !isReverse;
        continue;
      }
      if (order === "D") {
        if (queue.length) {
          isReverse ? queue.pop() : queue.shift();
        } else {
          isValid = false;
          break;
        }
      }
    }
    if (isValid) {
      isReverse ? (answer += `[${queue.reverse()}]\n`) : (answer += `[${queue}]\n`);
    } else answer += `error\n`;
  }
  return answer;
}

console.log(solution(input).trim());
