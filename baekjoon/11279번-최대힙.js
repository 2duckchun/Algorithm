const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim().split(newLine).map(Number).slice(1);

class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    // 최대힙 배열에서 자식요소가 부모요소를 찾는 공식 : n - 1 / 2
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      const parentNode = this.values[parentIndex];
      if (element <= parentNode) break;
      this.values[index] = parentNode;
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMax() {
    // 추출되어야 하는 값은 인덱스의 가장 맨 처음 값.
    // 배열의 마지막 인덱스와 배열의 처음 인덱스를 교환해야함.
    // 배열의 맨 마지막 값은 없애야 함.
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    // 최대힙에서 부모가 자식요소를 찾는 공식 (2n + 1, 2n + 2)
    let index = 0;
    const length = this.values.length;
    const current = this.values[index];
    while (true) {
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      let swapIndex = null;
      const leftNode = this.values[leftIndex];
      const rightNode = this.values[rightIndex];

      if (leftIndex < length) {
        if (leftNode > current) {
          swapIndex = leftIndex;
        }
      }
      if (rightIndex < length) {
        if ((swapIndex === null && rightNode > current) || (swapIndex !== null && rightNode > leftNode)) {
          swapIndex = rightIndex;
        }
      }
      if (swapIndex === null) return;

      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = current;
      index = swapIndex;
    }
  }
}

function solution(input) {
  const heap = new MaxHeap();
  let answer = "";
  for (let info of input) {
    if (info > 0) heap.insert(info);
    if (info === 0) {
      heap.values.length === 0 ? (answer += `0\n`) : (answer += `${heap.extractMax()}\n`);
    }
  }
  return answer;
}

console.log(solution(input).trim());
