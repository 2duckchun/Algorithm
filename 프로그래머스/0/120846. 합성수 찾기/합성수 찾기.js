function solution(n) {
    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            const modulo = i % j
            if (modulo === 0) count++
        }
        if (count > 2) result++
    }
    
    return result;
}