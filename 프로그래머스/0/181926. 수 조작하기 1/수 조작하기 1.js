function solution(n, control) {
    for (const key of control) {
        if (key === 'w') n++
        else if (key === 's') n--
        else if (key === 'd') n += 10
        else if (key === 'a') n -= 10
    }
    return n;
}