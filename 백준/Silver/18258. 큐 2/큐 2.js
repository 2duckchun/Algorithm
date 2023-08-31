const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.size) return null;
    const node = this.head;

    if (this.head === this.tail) {
      this.tail = null;
    }
    this.head = this.head.next;
    node.next = null;
    this.size--;
    return node;
  }
}

function solution(orders) {
  const queue = new Queue();
  let answer = "";
  for (let orderStr of orders) {
    let order = orderStr.split(" ");
    switch (order[0]) {
      case "push":
        queue.enqueue(parseInt(order[1]));
        break;
      case "pop":
        const node = queue.dequeue();
        if (node) answer += `${node.value}\n`;
        else answer += `-1\n`;
        break;
      case "size":
        answer += `${queue.size}\n`;
        break;
      case "empty":
        if (!queue.size) answer += `1\n`;
        else answer += `0\n`;
        break;
      case "front":
        if (queue.head) answer += `${queue.head.value}\n`;
        else answer += `-1\n`;
        break;
      case "back":
        if (queue.tail) answer += `${queue.tail.value}\n`;
        else answer += `-1\n`;
        break;
    }
  }

  return answer;
}

console.log(solution(input).trim());
