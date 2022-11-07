/*
How do we search?

Given an array, the simplest way to search for an value is to look at
every element in the array and check if it's the value we want
*/

/*
JavaScript has search!

There ara many different search methods on arrays in JavaScript:
- indexOf
- includes
- find
- findIndex

But how do these functions work?
  -> Linear Search
*/

/*
- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- if it is, return the index at which the element is found
- if the value is never found, return -1
*/

function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === num) return i
    }
    return -1
}

console.log(linearSearch([1, 2, 3, 4, 5], 5));
