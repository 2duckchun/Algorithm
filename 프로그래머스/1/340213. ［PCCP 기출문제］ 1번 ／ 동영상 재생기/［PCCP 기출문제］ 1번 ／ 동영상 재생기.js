function solution(video_len, pos, op_start, op_end, commands) {
    const videoTime = parseTimeToSecond(video_len)
    const posTime = parseTimeToSecond(pos)
    const opStartTime = parseTimeToSecond(op_start)
    const opEndTime = parseTimeToSecond(op_end)
    let currentTime = opStartTime <= posTime && posTime <= opEndTime ? opEndTime : posTime
    for (const command of commands) {
        if (command === 'next') {
            currentTime += 10
            if (videoTime < currentTime) currentTime = videoTime
        } else if (command === 'prev') {
            currentTime -= 10
            if (currentTime < 0) currentTime = 0
        }
        if (opStartTime <= currentTime && currentTime <= opEndTime) currentTime = opEndTime
    }
    return parseTimeToString(currentTime)
}

function parseTimeToSecond(time) {
    const [mm, ss] = time.split(":").map(Number)
    return (mm * 60) + ss
}

function parseTimeToString(time) {
    let mm = String(Math.floor(time / 60))
    let ss = String(time % 60)
    if (mm.length === 1) mm = "0" + mm
    if (ss.length === 1) ss = "0" + ss
    return `${mm}:${ss}`
}