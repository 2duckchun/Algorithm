const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim().split('\r\n')
const [N, ...order] = input.map(Number)
console.log(N)
console.log(order)
function merge(arr1, arr2) {
    let results = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i])
        i++
      } else {
        results.push(arr2[j])
        j++
      }
    }
    while (i < arr1.length) {
      results.push(arr1[i])
      i++
    }
    while (j < arr2.length) {
      results.push(arr2[j])
      j++
    }
    return results
  }
  function solution(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = solution(arr.slice(0, mid))
    let right = solution(arr.slice(mid))
    return merge(left, right)
  }

const answer = solution(order)
console.log(answer.join("\n"))
