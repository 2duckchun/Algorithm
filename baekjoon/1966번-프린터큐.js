const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(newLine)
  .slice(1)
  .map((el) => el.split(" ").map(Number));

class Node {
  constructor(priority, marker) {
    this.priority = priority;
    this.marker = marker;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(priority, marker) {
    const newNode = new Node(priority, marker);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;
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

function solution(input) {
  let answer = "";
  for (let i = 0; i < input.length; i = i + 2) {
    const [N, M] = input[i];
    const priority = input[i + 1];
    const queue = new Queue();
    let count = 0;

    for (let j = 0; j < N; j++) {
      let isMarker = M === j;
      queue.enqueue(priority[j], isMarker);
    }
    priority.sort((a, b) => a - b);

    while (true) {
      if (priority[priority.length - 1] === queue.head.priority) {
        const node = queue.dequeue();
        priority.pop();
        count++;
        if (node.marker) break;
      } else {
        const node = queue.dequeue();
        queue.enqueue(node.priority, node.marker);
      }
    }
    answer += `${count}\n`;
  }
  return answer;
}

console.log(solution(input).trim());
