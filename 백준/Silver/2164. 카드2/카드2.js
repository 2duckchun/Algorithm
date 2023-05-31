const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const num = ~~fs.readFileSync(filePath).toString().trim()

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.size++
  }
  
  dequeue() {
    if (!this.first) return null
    let temp = this.first
    if (this.fisrt === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp
  }
}

function solution(num) {
  const queue = new Queue()
  for (let i = 1; i <= num; i++) {
    queue.enqueue(i)
  }
  while (queue.size !== 1) {
    queue.dequeue();
    const node = queue.dequeue()
    queue.enqueue(node.value)
  }
  console.log(queue.first.value)
}

solution(num)

