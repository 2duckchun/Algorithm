const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(1)
  .map((el) => el.split(" ").map(Number));

function solution(input) {
  let answer = "";
  for (let info of input) {
    let [H, W, N] = info;
    let room = "";
    let floor = 0;
    let number = 0;

    if (N % H === 0) {
      floor = H;
      number = Math.floor(N / H);
    } else {
      floor = N % H;
      number = Math.floor(N / H) + 1;
    }

    room += `${floor}`;
    if (number < 10) room += `0${number}`;
    else room += `${number}`;
    answer += `${room}\n`;
  }
  return answer;
}

console.log(solution(input).trim());

/** 
 * 풀이 단계
 1. 문제를 층수 구하기, 호수 구하기로 분할한다.
 2. 각 문제를 해결하고 병합해서 답을 구한다.

 * 층수의 계산과 호수의 계산을 신경써야 하는 문제.
 * 만약 층수(H)가 6층까지이고, 총 손님이 6명이라면 101 ~ 601까지 모든 층수의 1호에 대해 손님이 가득 차게됨.
 * 1 % 6 = 1, 2 % 6 = 2, 3 % 6 = 3, 4 % 6 = 4, 5 % 6 = 5, 7 % 6 = 1 ... 와 같이 층수를 배정할 수 있음.
 * 반례는 6 % 6 = 0, 12 % 6 = 0 형태임. 손님수를 층수로 나눴을 때 나눠떨어지면 모듈로 연산만으로는 층수를 배정할 수 없음.
 * 따라서 N % H 가 0이라면 가장 최고층에 있다는 의미로써 층수에 H를 할당함.
 
 * 층수가 다 차면 +1 호수를 사용하게 됨.
 * Math.floor(N / H) 라고 가정할 경우
 * Math.floor(1 / 6) = 0 ~ Math.floor(5 / 6) = 0임. 몫에 1을 더한 값을 호수로 사용함.
 * 반례는 손님수가 층수와 나눠 떨어질 경우임. Math.floor(6 / 6)의 몫은 1이지만 6층의 1호를 사용함. (몫을 그대로 사용함)
 * Math.floor(12 / 6)은 6층의 2호를 사용함. 
 * 따라서 N % H === 0 일 경우 손님수를 층수로 나눈 몫을 그대로 사용하고, N % H !== 0일 경우 손님수를 층수로 나눈 몫에 +1을 해줌.

*/
