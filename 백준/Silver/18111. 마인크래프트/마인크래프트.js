const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const [N, M, B] = input.shift().trim().split(" ").map(Number);

/**
 * 세로N, 가로M의 범위만큼의 땅의 높이를 동일하게 할 수 있도록 땅고르기를 한다.
 * 기존의 블럭을 파낼 수 있고, 가지고 있는 블럭을 땅에 꼽아넣을 수도 있다.
 * 뽑을때는 2초, 넣을때는 1초가 걸린다.
 * 높이는 0 ~ 256까지 만들 수 있다.
 * 땅고르기 작업에 걸리는 최소시간과 그 때의 땅의 높이를 출력하라.
 * 최소시간이 같다면 땅의 높이가 가장 높은 것을 출력하라.
 *
 * 문제해결방안
 * 0층부터 256층까지 다 땅고르기를 해본다.
 * 가장 시간이 적게 걸리는 것들을 찾아내고,
 * 시간이 같다면 높이가 가장 높은 것을 찾아낸다.
 * 특정 층(높은 층)에서 가진 블록이 -가 되면 그 이상의 층에서도 블록은 모자라므로
 * 반복문을 해제한다.
 */

const land = input.map((el) => el.split(" ").map(Number));

const helper = (N, M, B, floor, land) => {
  let time = 0;
  let block = B;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (land[i][j] > floor) {
        let removeLand = land[i][j] - floor;
        block += removeLand;
        time += removeLand * 2;
      } else if (land[i][j] < floor) {
        let addLand = floor - land[i][j];
        block -= addLand;
        time += addLand * 1;
      }
    }
  }

  return [time, block];
};

function solution(N, M, B, land) {
  let minTime = Number.MAX_SAFE_INTEGER;
  let maxFloor = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i <= 256; i++) {
    const [time, block] = helper(N, M, B, i, land);
    if (block < 0) break;
    if (time <= minTime) {
      minTime = time;
      i >= maxFloor ? (maxFloor = i) : null;
    }
  }
  console.log(minTime, maxFloor);
}

solution(N, M, B, land);
