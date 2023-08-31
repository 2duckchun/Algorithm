/*
Selection Sort

* Similar to bubble sort, but instead of first placing large values
into sorted position, it places small values into sorted position

*/

/*
Psuedocode

* Store the first element as the smallest value you've seen so far.
* Compare this item to the next item in the array until you find a smaller number.
* if a smaller number is found, designate that smaller number to be the new 'minimum' and continue until the end of the array.
* if the "minimum" is not the value(index) you initially began with, swap the two values.
* Repeat this with the next element until the array is sorted. 

*/

// function selectionSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var lowest = i
//         for(var j =  i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[lowest]) {
//                 lowest = j 
//             }
//         }
//         // if (i !== lowest) {
//             var temp = arr[i]
//             arr[i] = arr[lowest]
//             arr[lowest] = temp
//         // }
//     }
//     return arr
// }

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i                                 // (1)
        for (let j = i + 1; j < arr.length; j++) {     // (2)
        	if (arr[j] < arr[lowest]) lowest = j       // (3)
        }
        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp                             // (4)
    }
    return arr                                         // (5)
}


selectionSort([1, 2, 3, 34, 22, 10, 19, 17])