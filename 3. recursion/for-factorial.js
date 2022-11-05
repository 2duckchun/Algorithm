// let result = 1
// for (let i = 1; i < 6; i++) {
//     result = result * i
// }

// console.log(result);

function factorial_for (num) {
    let result = 1
    for(let i = 1; i <= num; i++) {
        result = result * i
    }
    return result
}

console.log(factorial_for(5));

function factorial_for2 (num) {
    let result = 1
    for(let i = num ; i > 0; i--) {
        result *= i
    }
    return result
}

console.log(factorial_for2(5));