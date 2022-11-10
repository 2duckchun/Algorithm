/*
배열 내 숫자를 오름차순하는 정렬 알고리즘을 작성하라.
*/

function sort(arr) {
    // 외부 for로 하나씩 돌아감
    // 내부 for문으로도 하나씩 돌아감.
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }   
        }        
    }
    return arr
}

console.log(sort([5, 3, 2, 4, 1, 9, 6, 8, 7]));