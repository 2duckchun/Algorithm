function solution(nums) {
    let set = new Set()
    for (let num of nums) {
        set.add(num)
    }
    let answer = [Math.floor(nums.length / 2), set.size].sort((a, b) => a - b)
    return answer[0]
}