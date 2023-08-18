function solution(rank, attendance) {
    const KVA = []
    
    for (let i = 0; i < rank.length; i++) {
        let temp = [i, rank[i], attendance[i]]
        KVA.push(temp)
    }
    
    const sortedKVA = KVA.sort((a, b) => a[1] - b[1]).filter(el => el[2]).slice(0, 3)
    
    return sortedKVA[0][0] * 10000 + sortedKVA[1][0] * 100 + sortedKVA[2][0]
}