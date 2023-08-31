function solution(my_string, overwrite_string, s) {
    let answer = my_string.slice(0, s);
    answer += overwrite_string
    answer += my_string.slice(answer.length)
    return answer
}