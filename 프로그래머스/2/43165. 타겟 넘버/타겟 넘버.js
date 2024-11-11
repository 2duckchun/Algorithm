function solution(numbers, target) {
    let count = 0;
    // 넓우탐은 큐를 쓴다.
    const queue = [{index: 0, sum: 0}]
    while (queue.length > 0) {
        const {index, sum} = queue.pop()
        if (index === numbers.length) {
            if (sum === target) {
                count++
            }
        } else {
            queue.push({index: index + 1, sum: sum + numbers[index]})
            queue.push({index: index + 1, sum: sum - numbers[index]})
        }
    }
    return count
}