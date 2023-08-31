/*
1. Binary search is a much faster form of search
2. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
3. Binary search only works on sorted arrays!
*/

/*
Binary Search Pseudocode
- the function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
  - Create a pointer in the middle
  - if you find the value you want, return the index
  - if the value is too small, move the left pointer up
  - if the value is too large, move the right pointer down
- if you never find the value, return -1
*/

function binarySearch(arr, val){

}

console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95));
