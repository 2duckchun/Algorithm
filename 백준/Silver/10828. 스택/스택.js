const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1)

function solution(input) {
  const stack = []
  let result = ""
  for (let orders of input) {
    const order = orders.split(" ")
    const orderlist = {
      push: () => {
        stack.push(order[1])
      },
      pop: () => {
        const popStack = stack.pop()
        if (popStack) result += `${popStack}\n`
        else result += `-1\n`
      },
      size: () => {
        result += `${stack.length}\n`
      },

      empty: () => {
        if (!stack.length) result += `1\n`
        else result += `0\n`
      },

      top: () => {
        if (stack.length) result += `${stack[stack.length - 1]}\n`
        else result += `${-1}\n`
      }
    }
    orderlist[order[0]]()
  }
  return result
}

console.log(solution(input).trim())
