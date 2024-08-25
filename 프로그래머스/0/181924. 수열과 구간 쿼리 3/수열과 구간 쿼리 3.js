function solution(arr, queries) {
    for (const [a, b] of queries) {
        const temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }
    return arr;
}