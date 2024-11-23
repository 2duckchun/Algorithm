function solution(n, computers) {
    // 정답 변수
    let answer = 0; 
    
    // 방문 체크 배열
    const visited = new Array(n).fill(false)
    
    for (let comIdx = 0; comIdx < computers.length; comIdx++) {
        if (!visited[comIdx]) {
            BFS(comIdx, visited, computers)
            answer++        
        }
    }
    
    return answer
}

function BFS(start, visited, computers) {
    const queue = [start]
    visited[start] = true
    
    while (queue.length > 0) {
        const comIdx = queue.shift()
        
        for (let netIdx = 0; netIdx < computers.length; netIdx++) {
            if (!visited[netIdx] && computers[comIdx][netIdx]) {
                queue.push(netIdx)
                visited[netIdx] = true
            }
        }
    }
}