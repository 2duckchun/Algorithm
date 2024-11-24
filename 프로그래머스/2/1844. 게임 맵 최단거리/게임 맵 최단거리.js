function solution(maps) {
    const queue = [[0, 0, 1]]; // 초기 위치와 경로 길이 저장 [x, y, distance]
    const visited = Array.from({ length: maps.length }, () =>
        new Array(maps[0].length).fill(false)
    );
    const coord = [
        [-1, 0], [0, 1], [1, 0], [0, -1] // 상, 우, 하, 좌
    ];
    const maxX = maps.length - 1;
    const maxY = maps[0].length - 1;

    const isValidCoord = (x, y) => {
        return x >= 0 && x <= maxX && y >= 0 && y <= maxY;
    };

    while (queue.length > 0) {
        const [x, y, trace] = queue.shift();

        // 목적지 도달 시 최단 경로 반환
        if (x === maxX && y === maxY) {
            return trace;
        }

        // 현재 위치에서 동서남북 탐색
        for (const [cx, cy] of coord) {
            const nx = x + cx;
            const ny = y + cy;

            if (
                isValidCoord(nx, ny) && // 유효 좌표인지 확인
                maps[nx][ny] === 1 && // 벽인지 확인
                !visited[nx][ny] // 방문 여부 확인
            ) {
                visited[nx][ny] = true; // 큐에 추가할 때 방문 처리
                queue.push([nx, ny, trace + 1]);
            }
        }
    }

    return -1; // 목적지에 도달할 수 없는 경우
}