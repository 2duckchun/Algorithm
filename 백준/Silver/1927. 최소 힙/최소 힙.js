const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(1);

class MinHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const current = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      const parent = this.values[parentIndex];
      if (current > parent) break;
      this.values[index] = parent;
      this.values[parentIndex] = current;
      index = parentIndex;
    }
  }

  extractMin() {
    // 배열의 맨 앞은 추출되어야 함
    // 배열의 맨 끝은 pop되어야 함
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const current = this.values[index];
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      const left = this.values[leftIndex];
      const right = this.values[rightIndex];
      let swapIndex = null;
      if (leftIndex < length) {
        if (left < current) {
          swapIndex = leftIndex;
        }
      }
      if (rightIndex < length) {
        if ((swapIndex === null && right < current) || (swapIndex !== null && right < left)) {
          swapIndex = rightIndex;
        }
      }
      if (swapIndex === null) break;
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = current;
      index = swapIndex;
    }
  }
}

function solution(input) {
  const heap = new MinHeap();
  let answer = "";
  for (let info of input) {
    if (info > 0) heap.insert(info);
    if (info === 0) {
      heap.values.length === 0 ? (answer += `0\n`) : (answer += `${heap.extractMin()}\n`);
    }
  }
  return answer;
}

console.log(solution(input).trim());
