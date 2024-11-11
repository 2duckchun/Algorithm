function solution(numbers, target) {
    let count = 0;
    // 재귀 사용 깊우탐
    const dfs = (index, sum) => {
        if (index === numbers.length) {
            if (sum === target) {
                count++
            }
        } else {
            dfs(index + 1, sum + numbers[index])
            dfs(index + 1, sum - numbers[index])
        }
    }
    dfs(0, 0)
    return count
}