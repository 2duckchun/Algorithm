## 이진 힙(binary heap)

- Binary Search Heap과 굉장히 비슷하나 몇가지 다른 룰이 존재하는 알고리즘.
- 최대 이진힙, 최소 이진힙으로 나눌 수 있으며, 최대 이진힙에서 부모 노드는 언제나 자식 노드보다 큼.
- 최소 이진힙에서는 부모 노드는 언제나 자식 노드보다 작음.

## 최대 이진힙(Max Binary Heap)

- 각 부모 노드들은 최대 2개의 자식 노드를 가진다.
- 각 부모 노드들의 값은 언제나 자식 노드보다 크다.
- 최대 이진힙에서, 부모 노드는 자식 노드보다 언제나 크지만, 형제 노드들끼리는 순서가 보장되지 않는다.
- 이진힙은 언제나 최적의 용량을 가진다. (다음 깊이로 내려가기 전에 모든 left와 right가 채워진다.) 또한 언제나 왼쪽의 자식이 먼저 채워진다.

## 이진 힙을 알아야 하는 이유

- 이진 힙은 우선순위 큐를 구현하는데 사용한다.
- 우선순위 큐는 각 노드에 중요도를 부여해서 주요한 정도에 따라 노드를 큐 안의 적절한 장소에 배치하는 자료구조이다.
- 그래프를 순회하는 알고리즘에서도 이진 힙을 많이 사용한다.

## 이진 힙의 부모노드/자식노드 찾기 공식

- 힙을 배열로 만든 뒤...
- 부모 노드의 인덱스가 n이라면? 왼쪽 노드의 위치는 2n+1, 오른쪽 노드의 위치는 2n+2
- 자식 노드의 인덱스가 n이라면? 부모 노드의 위치는 (n-1)/2 (floor)

## 위의 공식을 이용해 node class 없이 배열만으로 이진힙을 구성할 수 있다.

```js
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  // 이전에 스스로 작성해본 것
  // sinkDown() {
  //   let length = this.values.length;
  //   let index = 0;
  //   let leftIdx = index * 2 + 1;
  //   let rightIdx = index * 2 + 2;
  //   while (leftIdx < length && rightIdx < length) {
  //     let swapIdx;
  //     if (this.values[index] > this.values[leftIdx] && this.values[index] > this.values[rightIdx]) break;
  //     if (this.values[leftIdx] > this.values[rightIdx]) swapIdx = leftIdx;
  //     else swapIdx = rightIdx;
  //     let temp = this.values[index];
  //     this.values[index] = this.values[swapIdx];
  //     this.values[swapIdx] = temp;
  //     index = swapIdx;
  //     leftIdx = index * 2 + 1;
  //     rightIdx = index * 2 + 2;
  //   }
  //   if (length <= 2) this.values.sort((a, b) => b - a);
  //   console.log(this.values);
  // }

  // 이전에 스스로 작성해본 것
  // bubbleUp() {
  //   let index = this.values.length - 1;
  //   let parentIndex = Math.floor((index - 1) / 2);
  //   while (this.values[index] > this.values[parentIndex] && index > 0) {
  //     let temp = this.values[index];
  //     this.values[index] = this.values[parentIndex];
  //     this.values[parentIndex] = temp;
  //     index = parentIndex;
  //     parentIndex = Math.floor((index - 1) / 2);
  //   }
  // }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element > parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMin() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const b = new MinBinaryHeap();
// const b = new MaxBinaryHeap();
b.insert(50);
b.insert(25);
b.insert(80);
b.insert(9);
b.insert(3);
b.insert(8);
b.insert(19);
```
