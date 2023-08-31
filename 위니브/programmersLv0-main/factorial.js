// function factorial(n) {
//     if(n <= 1) return 1
//     return n * factorial(n - 1)
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

function solution(n) {
    
    function factorial(number) {
        if (number <= 1) return 1
        return number * factorial(number - 1)
    }
    
    for (let i = 10; i >= 0; i--) {
        if (n >= factorial(i)) {
            return i
        }
    }
}