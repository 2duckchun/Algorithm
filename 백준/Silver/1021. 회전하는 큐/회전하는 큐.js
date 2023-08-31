const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine)
const [N, M] = input.shift().split(" ").map(Number)
const arr = input[0].split(" ").map(Number)


class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.size++
  }

  dequeue() {
    if (!this.size) return null
    const node = this.head
    if (this.head === this.tail) {
      this.tail = null
    }
    this.head = this.head.next
    // if (this.head.prev) this.head.prev = null
    node.next = null
    this.size--
    return node
  }

  rotate_right() {
    if (!this.size) return null
    if (this.head === this.tail) return null
    let node = this.head
    this.head = this.head.next
    node.next = null
    this.head.prev = null
    this.tail.next = node
    node.prev = this.tail
    this.tail = node
    return "done"
  }

  rotate_left() {
    if (!this.size) return null
    if (this.head === this.tail) return null
    let node = this.tail
    this.tail = this.tail.prev
    this.tail.next = null
    node.prev = null
    this.head.prev = node
    node.next = this.head
    this.head = node
    return "done"
  }

  find(value) {
    if (!this.size) return null
    let index = 0;
    let node = this.head
    while (this.size > index) {
      if (node.value === value) return index
      index++
      node = node.next
    }
    return index
  }
}

function solution(N, M, arr) {
  const queue = new Queue()
  let target = 0
  let answer = 0
  for (let i = 0; i < N; i++) {
    queue.enqueue(i + 1)
  }
  for (let el of arr) {
    while (target < M) {
      if (queue.head.value === el) {
        target++
        queue.dequeue()
        break
      }
      if (queue.find(el) <= Math.floor(queue.size / 2)) {
        answer++
        queue.rotate_right()
      } else {
        answer++
        queue.rotate_left()
      }
    }
  }
  return answer
}

console.log(solution(N, M, arr))
