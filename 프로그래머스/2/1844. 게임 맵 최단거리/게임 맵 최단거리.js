function solution(maps) {
    // BFS
    const queue = [[0, 0, 1]]
    const coord = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    const visited = Array.from({ length: maps.length }, () => new Array(maps[0].length).fill(false))
    
    const isValidCoord = (x, y) => {
        return x >= 0 && x < maps.length && y >= 0 && y < maps[0].length
    }
    
    while (queue.length > 0) {
        const [x, y, trace] = queue.shift()
        visited[x][y] = true
        // 종료조건
        if (x === maps.length - 1 && y === maps[0].length - 1) {
            return trace
        }
        
        // x, y를 기준으로 동서남북으로 이동할 수 있는 위치를 구하고 탐색 지속
        for (const [cx, cy] of coord) {
            const nx = x + cx
            const ny = y + cy
            if (isValidCoord(nx, ny) && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true
                queue.push([nx, ny, trace + 1])
            }
        }
    }
    
    return -1
}