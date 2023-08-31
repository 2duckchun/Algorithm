function collectOddValues(arr) {
    let newArr = []
    if (arr.length === 0) return []
    if (arr[0] % 2 !== 0) newArr.push(arr[0])
    // console.log(newArr);
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr
}

collectOddValues([1,2,3,4,5,6,7,8,9])