function solution(numLog) {
    let result = "";
    for (let i = 0; i < numLog.length - 1; i++) {
        const value = numLog[i + 1] - numLog[i]
        if (value === 1) result += "w"
        else if (value === -1) result += "s"
        else if (value === 10) result += "d"
        else if (value === -10) result += "a"
    }
    return result;
}