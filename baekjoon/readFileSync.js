const fs = require('fs')
const input = ~~fs.readFileSync('text.txt').toString().trim()

function solution(input) {
    
    // 주어진 수가 10보다 작다면 앞에 0을 붙여 두자리수로 만든다.
    // 각 자리의 숫자를 더한다.
    // 주어진 수의 가장 오른쪽 자리수와 앞에서 구한 합의 가장 오른쪽 자리수를 이어붙이면 새로운 수를 만들 수 있다.
    /*
    주어진수(26) => 2 + 6 = 더한수(8)
    새로운수 = 주어진수(6) + 더한수(8) = 주어진수(68) 
    */

    let 주어진수 = input
    let 더한수 = 0
    let 싸이클 = 0 

    while(true) {
        싸이클 += 1
        더한수 = ~~(주어진수 / 10) + ~~(주어진수 % 10)
        주어진수 = (주어진수 % 10).toString() + (더한수 % 10).toString()
        if (~~주어진수 === input) {
            return console.log(싸이클)
        }
    }
}
solution(input)