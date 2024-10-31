const [N, C, ...coord] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);
coord.sort((a, b) => a - b);

function canSetting(coord, distance, maxRouter) {
    let total = 1; // 첫 번째 라우터를 항상 첫 위치에 설치
    let lastPosition = coord[0]; // 마지막으로 설치한 라우터의 위치

    for (let i = 1; i < coord.length; i++) { // 두 번째 좌표부터 시작
        if (coord[i] - lastPosition >= distance) { // 설치 가능한 거리인지 체크
            total++;
            lastPosition = coord[i]; // 마지막 설치 위치 갱신
            if (total === maxRouter) return true; // 최대 라우터 수에 도달했으면 true 반환
        }
    }
    return false; // 설치 불가능
}

function main(N, C, coord) {
    let minD = 1;
    let maxD = coord[coord.length - 1] - coord[0]; // 최대 거리는 가장 멀리 있는 두 좌표의 차이
    let solution = 1;

    while (minD <= maxD) {
        const midD = Math.floor((minD + maxD) / 2);
        if (canSetting(coord, midD, C)) {
            solution = midD; // 가능하면 더 큰 거리로 시도
            minD = midD + 1;
        } else {
            maxD = midD - 1; // 불가능하면 거리를 줄임
        }
    }
    console.log(solution);
}

main(N, C, coord); // main 함수 호출
