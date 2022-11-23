/*
Quick Sort

* Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
* Works by selecting one element (called the "pivot") and 
  finding the index where the pivot should end up in the sorted array
* Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
*/

/* 
Pivot Helper

* in order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
* Given an array, this helper function should designate an element as the pivot
* it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot,
  and all values greater than the pivot are moved to the right of the pivot.
* The order of elements on either side of the pivot doesn't matter!
* The helper should do this in place, that is, it should not create a new array
* When complete, the helper should return the index of the pivot
*/

/*
Picking a pivot

* the runtime of quick sort depends in part on how one selects the pivot
* Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting
* For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later)
*/

/*
Pivot Pseudocode

* it will help to accept three arguments: an array, a start index, and an end index
  (these can default to 0 and the array length minus 1, respectively)
* Grab the pivot from the start of the array
* Store the current pivot index in a variable(this will keep track of where the pivot should end up)
* Loop through the array from the start until the end
  - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
* Swap the starting element (i.e. the pivot) with the pivot index
* Return the pivot index
*/

function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        var temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    var median = Math.floor((start + end) / 2)
    var pivot = arr[median]
    var swapIdx = start
    for(var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])
// 3 (인덱스 3)을 리턴함

// Quicksort Pseudocode
/*
* Call the pivot helper on the array
* When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray
  to the right of that index
* Your base case occurs when you consider a subarray with less than 2 elements
*/

function QuickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    QuickSort(arr, left, pivotIndex - 1)
    QuickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

/*
Big O of Quicksort
- 시간복잡도(베스트) : n log n
- 시간복잡도(평균) : n log n
- 시간복잡도(최악) : n^2
- 공간복잡도: log n

(정렬된 배열의 경우, 쪼갤수 있는 방법이 없어서
  쪼개는데 n, 정렬에 n이 듦 -> 피벗 고를때 양 극단을 고르면 문제가 됨)
(그래서 피벗으로 중간값을 골라야함)

O(log n) decompositions
O(n) comparisons per decomposition

*/
