/*

버블정렬이라고 부르는 이유 :
가장 큰 값이 버블되며 위로 올라가는 알고리즘

BubbleSort Pseudocode

Start looping from with a variable called i the end of the array towards the beginning

Start an inner loop with a variable called j from the beginning until i - 1

if arr[j] is greater than arr[j + 1], swap those two value.

Return the sorted array

*/

function bubbleSort(arr) {
    let noSwaps
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true
        for(let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return arr
}

const b = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])
console.log(b);