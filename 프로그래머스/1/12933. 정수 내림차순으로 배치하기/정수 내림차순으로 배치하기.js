function solution(n) {
    const number = String(n).split("").map(Number).sort((a, b) => b - a)
    const answer = +number.join("")
    
    return answer;
}