const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine);
const [_, K] = input.shift().split(" ").map(Number);
const arr = input.pop().split(" ").map(Number);

function solution(arr, K) {
  const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
      count++;
      if (count === K) answer = results[results.length - 1];
    }
    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
      count++;
      if (count === K) answer = results[results.length - 1];
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
      count++;
      if (count === K) answer = results[results.length - 1];
    }
    return results;
  };

  let count = 0;
  let answer = null;

  const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  };

  console.log(mergeSort(arr));
  if (!answer) answer = -1;
  console.log(answer);
}

solution(arr, K);
