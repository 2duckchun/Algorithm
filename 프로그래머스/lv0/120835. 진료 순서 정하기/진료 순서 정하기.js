function solution(emergency) {

    let key = [...emergency].sort((a, b) => b - a) // 내림차순
    let object = {}
    
    key.forEach((e, i) => {
        object[e] = i + 1
    })
    
    let answer = emergency.map((e) => object[e])
    
    return answer
}