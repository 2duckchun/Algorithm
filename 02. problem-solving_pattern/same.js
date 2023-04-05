/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array has it's correponding value squared in the second array.
The frequency of values must be the same.
*/


// naive solution

// 1. 배열 2개를 인수로 받는다.
// 2. 첫번째 어레이의 각각의 값들이 두번째 어레이에 제곱형태로 존재하면 트루를 반환한다.
// 3. 이때 빈도는 값들의 빈도는 같아야 한다.

const same = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false
    // 첫번째 어레이의 엘리먼트를 순회함.
    // 첫번째 어레이의 엘리먼트 중 제곱된 값이 두번째 어레이에 있으면
    // 그 어레이의 요소를 splice로 파버림.
    // 모든 배열이 순회된다면 true를 반환하고
    // false를 반환
    for (let element of arr1) {
        console.log(element);
        console.log(arr2);
        let correctIndex = arr2.indexOf(element ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}


same([1, 2, 3], [4, 1, 9])
same([1, 2, 3], [1, 9])
same([1, 2, 1], [4, 4, 1])


// N^2
/*
경계조건이 괜찮은지, 경계조건이 아닌지 확인 / 이 케이스에서는 arr1.length와 arr2.length가 같은지 아닌지?
*/


refactored
function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    } 
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1) {
        // if(!(key ** 2 in frequencyCounter2)) {
        //     console.log();
        //     return false
        // }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}



same([1, 2, 3], [4, 1, 9]) // true
same([1, 2, 3], [1, 9]) // false
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)