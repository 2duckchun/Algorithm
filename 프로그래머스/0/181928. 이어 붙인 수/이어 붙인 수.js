function solution(num_list) {
    let answer = 0;
    let 짝수 = "";
    let 홀수 = ""
    num_list.map((num) => {
        if (num % 2 === 0) {
            짝수 += "" + num
        } else {
            홀수 += "" + num
        }
    });
    return +짝수 + +홀수;
}