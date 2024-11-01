const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0;
let N = 0, M = 0;
const matrix = [];
const queries = [];

rl.on('line', (line) => {
    if (count === 0) {
        [N, M] = line.split(' ').map(Number);
    } else if (count <= N) {
        matrix.push(line.split(' ').map(Number));
    } else {
        queries.push(line.split(' ').map(Number));
    }
    count++;
});

rl.on('close', () => {
    // 2차원 누적합 배열 초기화
    const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

    // prefixSum[i][j] 계산
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            prefixSum[i][j] = matrix[i - 1][j - 1]
                            + prefixSum[i - 1][j] 
                            + prefixSum[i][j - 1] 
                            - prefixSum[i - 1][j - 1];
        }
    }

    // 각 쿼리에 대해 구간 합 계산 및 출력
    const results = queries.map(([x1, y1, x2, y2]) => {
        return prefixSum[x2][y2] 
             - prefixSum[x1 - 1][y2] 
             - prefixSum[x2][y1 - 1] 
             + prefixSum[x1 - 1][y1 - 1];
    });

    console.log(results.join('\n'));
});
