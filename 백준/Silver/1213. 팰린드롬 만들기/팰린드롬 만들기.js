// !! 홀수 개를 가진 알파벳의 개수가 2개 이상이면 팰린드롬 생성 불가
// 홀수 개를 가진 알파벳의 개수가 한개이거나 모두 짝수 개를 가진 알파벳의 경우 팰린드롬으로 생성 가능하다.

const sen = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("");

const getPalindrome = (sen) => {
  // 알파벳별 빈도수 계산
  let table = new Map();
  for (const ch of sen) {
    if (table.has(ch)) table.set(ch, table.get(ch) + 1);
    else table.set(ch, 1);
  }
  // 사전식 정렬
  table = Object.values([...table]).sort((a, b) => a[0].localeCompare(b[0]));

  // 홀수개의 알파벳 개수와 해당하는 알파벳 체크
  let oddCnt = 0;
  let oddChar = "";
  for (const [key, val] of table) {
    if (val % 2) {
      oddCnt++;
      oddChar = key;
    }
  }

  // 홀수개의 알파벳이 두개 이상이면 팰린드롬 생성 불가!
  if (oddCnt > 1) return "I'm Sorry Hansoo";

  // 팰린드롬 생성 과정
  let firstHalf = "";

  for (let [key, val] of table) {
    let s = "";
    for (let i = 0; i < Math.floor(val / 2); i++) {
      s += key;
    }
    firstHalf += s;
  }
  const secondHalf = firstHalf.split("").reverse().join("");
  return oddCnt === 1
    ? firstHalf + oddChar + secondHalf
    : firstHalf + secondHalf;
};

console.log(getPalindrome(sen));