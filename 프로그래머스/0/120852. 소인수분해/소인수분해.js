function solution(n) {
    const answer = [];
    for (let i = 2; i <= n; i++) {
        let count = 0;
        if (n % i !== 0) continue
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++ 
        }
        if (count === 2) answer.push(i)
    }
    return answer;
}