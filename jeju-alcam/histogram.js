const height = [2, 1, 900, 9001, 10, 10]

const histogram = (arr) => {
    let resultArr = [arr[0], arr[1]];
    for (let i = 0; i <= arr.length; i = i + 1) {
        if (parseInt((resultArr[0] + resultArr[1])) < parseInt((arr[i] + arr[i + 1]))) {
            resultArr[0] = arr[i]
            resultArr[1] = arr[i + 1]
        }
    }
    console.log(resultArr);
    let minimum = Math.min(...resultArr)
    return minimum * 2
}

const a = histogram(height)
console.log(a);