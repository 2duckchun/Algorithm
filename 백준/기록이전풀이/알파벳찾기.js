const fs = require('fs')
const input = fs.readFileSync('text.txt').toString().trim()

function solution(input) {
  const obj = {
    a : -1, b : -1, c : -1, d : -1, e : -1, f : -1, g : -1, h : -1, i : -1, j : -1, k : -1, l : -1, m : -1, n : -1, o : -1, p : -1, q : -1, r : -1, s : -1, t : -1, u : -1, v : -1, w : -1, x : -1, y : -1,  z : -1
  }
  let result = ''
  for (let i = 0; i < input.length; i++) {
    if (obj[input[i]] === -1) {
      obj[input[i]] = i
    }
  }
  const values = Object.values(obj)
  for (const num of values) {
    result += `${num} `
  }
  return result
}

console.log(solution(input))