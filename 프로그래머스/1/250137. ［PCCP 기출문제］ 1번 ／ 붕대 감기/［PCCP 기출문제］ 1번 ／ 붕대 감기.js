function solution(bandage, health, attacks) {
    const [시전시간, 초당회복량, 추가회복량] = bandage
    let 마지막공격시간 = 0
    let 현재체력 = health
    for (const [공격시간, 피해량] of attacks) {
        const 시간차 = 공격시간 - 마지막공격시간 - 1
        const 회복량 = (시간차 * 초당회복량) + (Math.floor(시간차 / 시전시간) * 추가회복량)
        현재체력 = Math.min(현재체력 + 회복량, health)
        현재체력 -= 피해량
        마지막공격시간 = 공격시간
        if (현재체력 <= 0) return -1
    }
    return 현재체력
}