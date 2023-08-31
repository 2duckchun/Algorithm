const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(1);

class Node {
  constructor(value) {
    this.value = value;
    this.abs = Math.abs(value);
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  insert(value) {
    const node = new Node(value);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const current = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.values[parentIndex];

      if (current.abs > parentNode.abs || (current.abs === parentNode.abs && current.value > parentNode.value)) break;

      // if (current.abs > parentNode.abs) break;

      // if (current.abs < parentNode.abs) {
      //   this.values[index] = parentNode;
      //   this.values[parentIndex] = current;
      // }

      // if (current.abs === current.abs && current.value < parentNode.value) {
      //   this.values[index] = parentNode;
      //   this.values[parentIndex] = current;
      // }

      this.values[index] = parentNode;
      this.values[parentIndex] = current;
      index = parentIndex;
    }
  }

  extract() {
    let head = this.values[0];
    let tail = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = tail;
      this.sinkDown();
    }
    return head?.value;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const current = this.values[index];
    while (true) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let leftNode = this.values[leftIndex];
      let rightNode = this.values[rightIndex];
      let swapIndex = null;

      if (leftIndex < length) {
        if (leftNode.abs < current.abs || (leftNode.abs === current.abs && leftNode.value < current.value)) {
          swapIndex = leftIndex;
        }
      }

      if (rightIndex < length) {
        if (swapIndex === null) {
          if (rightNode.abs < current.abs || (rightNode.abs === current.abs && rightNode.value < current.value)) {
            swapIndex = rightIndex;
          }
        }

        if (swapIndex !== null) {
          if (rightNode.abs < leftNode.abs || (rightNode.abs === leftNode.abs && rightNode.value < leftNode.value)) {
            swapIndex = rightIndex;
          }
        }
      }

      // if (leftIndex < length) {
      //   if (leftNode.abs < current.abs) {
      //     swapIndex = leftIndex;
      //   }

      //   if (current.abs === leftNode.abs) {
      //     if (leftNode.value < current.value) {
      //       swapIndex = leftIndex;
      //     }
      //   }
      // }

      // if (rightIndex < length) {
      //   if (swapIndex === null && rightNode.abs < current.abs) {
      //     swapIndex = rightIndex;
      //   }
      //   if (swapIndex !== null && rightNode.abs < leftNode.abs) {
      //     swapIndex = rightIndex;
      //   }
      //   if (swapIndex !== null && leftNode.abs === rightNode.abs) {
      //     if (rightNode.value < leftNode.value) {
      //       swapIndex = rightIndex;
      //     }
      //   }
      // }

      if (swapIndex === null) break;
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = current;
      index = swapIndex;
    }
  }
}

function solution(input) {
  const heap = new PriorityQueue();
  let answer = "";
  for (let i of input) {
    if (i !== 0) heap.insert(i);
    if (i === 0) {
      heap.values.length === 0 ? (answer += `0\n`) : (answer += `${heap.extract()}\n`);
    }
  }
  return answer;
}

console.log(solution(input).trim());
