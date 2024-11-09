function solution(friends, gifts) {
    const obj = {}
    
    for (const friend of friends) {
        obj[friend] = {
            index: 0,
            willGet: 0,
            toSend: {}
        }
    }
    
    for (const gift of gifts) {
        const [giver, taker] = gift.split(" ")
        obj[giver].toSend[taker] = (obj[giver].toSend[taker] || 0) + 1
        obj[giver].index++
        obj[taker].index--
    }
    
    for (const friend1 of friends) {
        for (const friend2 of friends) {
            if (friend1 === friend2) continue
            const myGift = obj[friend1].toSend[friend2] || 0
            const friendGift = obj[friend2].toSend[friend1] || 0
            if (myGift > friendGift) {
                obj[friend1].willGet++
            } else if (myGift === friendGift) {
                if (obj[friend1].index > obj[friend2].index) {
                    obj[friend1].willGet++
                }
            }
        }
    }
    
    let maxGift = 0
    
    for (const friend of friends) {
        if (maxGift < obj[friend].willGet) maxGift = obj[friend].willGet
    }
    
    return maxGift;
}