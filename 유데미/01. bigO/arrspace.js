function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

const b = sum([1, 2, 3, 4, 5])

// O(1) 공간
console.log(b);