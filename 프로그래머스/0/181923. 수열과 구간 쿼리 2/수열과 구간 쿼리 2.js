function solution(arr, queries) {
    const result = []
    for (const [s, e, k] of queries) {
        const partial = []
        for (let i = s; i <= e; i++) {
            if (arr[i] > k) partial.push(arr[i])
        }
        partial.sort((a, b) => a - b)
        if (partial[0]) result.push(partial[0])
        else result.push(-1)
    }
    return result;
}