function solution(num_list, n) {
    let answer = []
    while (num_list.length !== 0) {
        let parts = []
        for (let i = 0; i < n; i++) {
            parts.push(num_list.shift())
        }
        answer.push([...parts])
    }
    return answer;
}