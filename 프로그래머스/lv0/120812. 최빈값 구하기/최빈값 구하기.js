function solution(array) {
    let map = new Map()
    array.forEach((ele) => {
        if (map.get(ele)) {
            map.set(ele, map.get(ele) + 1)
        } else {
            map.set(ele, 1)    
        }
    })
    const ansArr = [...map].sort((a, b) => b[1] - a[1])
    if (ansArr.length === 1) return ansArr[0][0]
    if (ansArr[0][1] === ansArr[1][1]) return -1
    return ansArr[0][0]
    
}