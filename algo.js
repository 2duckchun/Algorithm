function solution(i, j, k) {
    let answer = 0
    let str = ""
    for (let num = i; num <= j; num++) {
        str += num
    }
    for (const char of str) {
        if (char == k) {
            answer += 1
        }
    }
    return answer;
}

console.log(solution(1, 13, 1))