const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N = 0;
let answer = '';

rl.on('line', (line) => {
    N = Number(line);
});

function hanoi(n, from, temp, to) {
    if (n === 0) return;

    hanoi(n - 1, from, to, temp);
    
    // 경로 기록 (N이 20 이하일 때만 수행 과정 저장)
    if (N <= 20) answer += `${from} ${to}\n`;

    hanoi(n - 1, temp, from, to);
}

rl.on('close', () => {
    // 이동 횟수 계산
    console.log((BigInt(2) ** BigInt(N) - BigInt(1)).toString());
    
    // N이 20 이하인 경우에만 수행 과정 출력
    if (N <= 20) {
        hanoi(N, 1, 2, 3);
        console.log(answer.trim());
    }
});