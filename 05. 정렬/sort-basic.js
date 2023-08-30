/*
배열 내 숫자를 오름차순하는 정렬 알고리즘을 작성하라.
*/

function naiveBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sort([8, 1, 2, 3, 4, 5, 6, 7]));

for (let i = 0; i < arr.length; i++) {
  let change = false;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      change = true;
    }
  }
  if (!change) {
    console.log("미리끝남");
    break;
  }
}
