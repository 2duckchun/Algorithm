const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).slice(1);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  push_front(val) {
    const newNode = new Node(val);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.front.next = newNode;
      newNode.prev = this.front;
      this.front = newNode;
    }
    this.size++;
  }

  push_back(val) {
    const newNode = new Node(val);
    if (!this.back) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.prev = newNode;
      newNode.next = this.back;
      this.back = newNode;
    }
    this.size++;
  }

  pop_front() {
    if (!this.front) return null;
    const newNode = this.front;
    if (this.size === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.prev;
      this.front.next = null;
      newNode.prev = null;
    }
    this.size--;
    return newNode;
  }

  pop_back() {
    if (!this.back) return null;
    const newNode = this.back;
    if (this.size === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.back = this.back.next;
      this.back.prev = null;
      newNode.next = null;
    }
    this.size--;
    return newNode;
  }
}

function solution(input) {
  const deq = new Deque();
  let answer = "";
  for (let orderStr of input) {
    const order = orderStr.split(" ");
    let node = null;
    switch (order[0]) {
      case "push_front":
        deq.push_front(order[1]);
        break;
      case "push_back":
        deq.push_back(order[1]);
        break;
      case "pop_front":
        node = deq.pop_front();
        if (node !== null) answer += `${node.value}\n`;
        else answer += `-1\n`;
        break;
      case "pop_back":
        node = deq.pop_back();
        if (node !== null) answer += `${node.value}\n`;
        else answer += `-1\n`;
        break;
      case "size":
        answer += `${deq.size}\n`;
        break;
      case "empty":
        if (deq.size === 0) answer += `1\n`;
        else answer += `0\n`;
        break;
      case "front":
        if (deq.size === 0) answer += `-1\n`;
        else answer += `${deq.front.value}\n`;
        break;
      case "back":
        if (deq.size === 0) answer += `-1\n`;
        else answer += `${deq.back.value}\n`;
        break;
    }
  }
  return answer;
}

console.log(solution(input).trim());
