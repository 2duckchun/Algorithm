/*

버블정렬이라고 부르는 이유 :
가장 큰 값이 버블되며 위로 올라가는 알고리즘

BubbleSort Pseudocode

Start looping from with a variable called i the end of the array towards the beginning

Start an inner loop with a variable called j from the beginning until i - 1

if arr[j] is greater than arr[j + 1], swap those two value.

Return the sorted array

*/

// function bubbleSort(arr) {
//     let noSwaps
//     for(let i = arr.length; i > 0; i--) {
//         noSwaps = true
//         for(let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//                 noSwaps = false
//             }
//         }
//         if (noSwaps) break
//     }
//     return arr
// }

function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + i]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) {
      console.log("정렬이 미리 되어버림!");
      return arr;
    }
  }
  console.log("정렬이 성공적으로 끝남!");
  return arr;
}

// 버블정렬
// 외부 for문은 배열의 끝을 활용하여 끝부터 시작방향으로 루프 설계
// 내부 for문은 0부터 i까지로 루프 설계
function DCbubble(arr) {
  let noSwaps;
  for (let i = arr.length - 1; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const b = DCbubble([7, 3, 2, 4, 5, 6, 1, 8, 84, 84954, 51621, 1541, 5495424, 1, 51611, 6854]);
console.log(b);
