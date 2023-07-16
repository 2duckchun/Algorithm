function solution(numbers, k) {
    let index = 0
    let count = 1
    while(count < k) {
        if (index + 1 === numbers.length) {
            index = 1
            count++
            continue
        }
        if (index + 2 === numbers.length) {
            index = 0
            count++
            continue
        }
        index+=2
        count++
    }
    
    return numbers[index]
}