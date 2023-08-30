function solution(분자1, 분모1, 분자2, 분모2) {
    const getGcd = (num1, num2) => {
        let [a, b] = [num1, num2].sort((a, b) => b - a)
        mod = null
        while(mod !== 0) {
            mod = a % b
            a = b
            b = mod
        }
        return a
    }
    const firstLcm = 분모1 * 분모2 / getGcd(분모1, 분모2)
    const num = (분자1 * (firstLcm / 분모1)) + (분자2 * (firstLcm / 분모2))
    return [num / getGcd(firstLcm, num), firstLcm / getGcd(firstLcm, num)]
}