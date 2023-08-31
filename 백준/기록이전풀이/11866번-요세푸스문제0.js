const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;
    const node = this.front;
    if (this.front === this.back) {
      this.back = null;
    }
    this.front = this.front.next;
    node.next = null;
    this.size--;
    return node;
  }
}

function solution(N, K) {
  const queue = new Queue();
  for (let i = 0; i < N; i++) {
    queue.enqueue(i + 1);
  }

  let answer = "<";
  let count = 1;
  while (queue.size !== 1) {
    if (count < K) {
      count++;
      const node = queue.dequeue();
      queue.enqueue(node.value);
    }
    if (count === K) {
      count = 1;
      const pop = queue.dequeue();
      answer += `${pop.value}, `;
    }
  }
  const lastPop = queue.dequeue();
  answer += `${lastPop.value}>`;

  return answer;
}

console.log(solution(N, K).trim());
