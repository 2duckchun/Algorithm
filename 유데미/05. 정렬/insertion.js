/*
Insertion Sort

* Builds up the sort by gradually creating a larger left half which is always sorted

[ 5, 3, 4, 1, 2]
[ 3, 5, 4, 1, 2]
[ 3, 4, 5, 1, 2]
[ 1, 3, 4, 5, 2]
[ 1, 2, 3, 4, 5]


Insertion Sort Pseudocode
* Start by picking the second element in the array
* Now compare the second element with the one before it and swap if necessary
* Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
* Repeat until the array is sorted.
*/

function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
