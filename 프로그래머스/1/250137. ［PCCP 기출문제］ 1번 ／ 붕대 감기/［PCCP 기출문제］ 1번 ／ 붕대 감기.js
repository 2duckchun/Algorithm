function solution(bandage, health, attacks) {
    const [시전시간, 초당회복량, 추가회복량] = bandage
    const 공격정보 = new Map()
    for (const [공격시간, 데미지] of attacks) {
        공격정보.set(공격시간, 데미지)        
    }
    
    const 마지막공격 = attacks[attacks.length-1][0]
    let 회복스택 = 0
    let 현재체력 = health
    
    for (let i = 0; i <= 마지막공격; i++) {
        const is공격시간 = 공격정보.has(i)
        // 회복타임
        if (!is공격시간) {
            회복스택++
            현재체력 += 초당회복량
            if (회복스택 === 시전시간) {
                현재체력 += 추가회복량
                회복스택 = 0
            }
            현재체력 = Math.min(현재체력, health)
        } else {
        // 맞는타임
            현재체력 -= 공격정보.get(i)
            회복스택 = 0
        }
        if (현재체력 <= 0) return -1
    }
    
    return 현재체력
}