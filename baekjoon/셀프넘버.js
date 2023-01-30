// const map = new Map(new Array(10000).fill(0).map((e, i) => [i + 1, true]))

// function d(n) {
//     let number = n;
//     let result = 0;
//     for (let i = 0; i < String(n).length; i++) {
//         result += number % 10
//         number = Math.floor(number/10)
//     }
//     return n + result
// }

// for (let i = 1; i <= 10000; i++) {
//     let noself = d(i)
//     map.delete(noself)
// }

// for (let self of map.keys()) {
//     console.log(self)
// }

function d(n) {
    let result = n
    let left = 0
    while (n) {
        left += n % 10
        n = Math.floor(n / 10)
    }
    return result + left
}

function solution(number) {
    const map = new Map(new Array(10000).fill(0).map((_, i) => [i + 1, true]))
    let answer = ""
    for (let i = 1; i <= number; i++) {
        map.delete(d(i))
    }
    for (const key of map.keys()) {
        answer += key + "\n"
    }
    return answer
}

console.log(solution(10000))