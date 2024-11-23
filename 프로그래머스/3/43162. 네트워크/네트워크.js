function solution(n, computers) {
    // 정답 변수
    let answer = 0; 
    
    // 방문 체크 배열
    const visited = new Array(n).fill(false)
    
    // 컴퓨터가 있는 1차 배열 순회
    for (let comIdx = 0; comIdx < computers.length; comIdx++) { 
        if (!visited[comIdx]) {
            // 방문하지 않은 컴퓨터에 한해 DFS 시작
            DFS(comIdx, visited, computers)
            answer++
        }
    }
    
    return answer
}

function DFS(comIdx, visited, computers) {
    // 방문한 컴퓨터는 바로 방문 처리
    visited[comIdx] = true
    
    // 컴퓨터의 네트워크 검사
    for (let netIdx = 0; netIdx < computers.length; netIdx++) {
        // 컴퓨터와 네트워크 인덱스가 서로 연결되어 있고 (1일 경우)
        // 해당 네트워크 인덱스에 위치한 컴퓨터를 방문하지 않았을 경우
        // DFS 시작
        if (computers[comIdx][netIdx] && !visited[netIdx]) {
            DFS(netIdx, visited, computers)
        }
    }
}