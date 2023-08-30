## 트리 순회(Tree Traversal)

- 어떤 트리이던 상관없이 트리 내부의 모든 노드에 방문하는 알고리즘.
- 넓이 우선 탐색(Breadth First Search:BFS)와 깊이 우선 탐색(Depth First Search:DFS)로 나뉨.
- 깊이 우선 탐색은 InOrder, PreOrder, PostOrder로 나뉨.

## 넓이 우선 탐색(BFS)

- 방문할 노드를 담을 배열(방문 노드 배열이라고 하겠음)와 큐(queue)를 생성한다.
- 루트 노드를 큐에 위치시킨다.
- 큐에 아무것도 남지 않을때까지 루프를 반복한다.

1. 큐에 있는 노드를 디큐(Dequeue)하고, 방문 노드 배열에 push한다.
2. 만약 디큐한 노드의 left에 프로퍼티가 있다면 해당 노드를 큐에 큐(queue)한다.
3. 만약 디큐한 노드의 right에 프로퍼티가 있다면 해당 노드를 큐에 큐한다.

- 루프가 끝나면(큐에 아무것도 남지 않게 된다면) 방문 노드 배열을 리턴한다.

## 깊이 우선 탐색 - 전위 탐색 (DFS - PreOrder)

- 방문한 노드의 값을 저장할 data 변수를 하나 만든다.
- current라는 변수에 BST의 root를 저장한다.
- node를 인수로 받는 헬퍼 펑션을 만든다.

1. 노드의 값을 저장하는 변수에 푸쉬한다.
2. 만약 노드에 왼쪽 프로퍼티가 있으면, 해당 왼쪽 프로퍼티와 함께 헬퍼펑션을 호출한다.
3. 만약 노드에 오른쪽 프로퍼티가 있다면, 해당 오른쪽 프로퍼티와 함께 헬퍼펑션을 호출한다.

- 헬퍼 함수에 current를 인수로 넣고 호출한다.

## 깊이 우선 탐색 - 중위 탐색 (DFS - InOrder)

- 방문한 노드의 값을 저장할 data 변수를 하나 만든다.
- current라는 변수에 BST의 root를 저장한다.
- node를 인수로 받는 헬퍼 펑션을 만든다.

1. 만약 노드에 왼쪽 프로퍼티가 있으면, 해당 왼쪽 프로퍼티와 함께 헬퍼펑션을 호출한다.
2. 노드의 값을 data에 푸쉬한다.
3. 만약 노드에 오른쪽 프로퍼티가 있으면, 해당 오른쪽 프로퍼티와 함께 헬퍼펑션을 호출한다.

- 헬퍼 함수에 current를 인수로 넣고 호출한다.

## 깊이 우선 탐색 - 후위 탐색 (DFS - PostOrder)

- 방문한 노드의 값을 저장할 data 변수를 하나 만든다.
- current라는 변수에 BST의 root를 저장한다.
- node를 인수로 받는 헬퍼 펑션을 만든다.

1. 만약 노드에 왼쪽 프로퍼티가 있으면, 해당 왼쪽 프로퍼티와 함께 헬퍼펑션을 호출한다.
2. 만약 노드에 오른쪽 프로퍼티가 있으면, 해당 오른쪽 프로퍼티와 함께 헬퍼펑션을 호출한다.
3. 노드의 값을 data에 푸쉬한다.

- 헬퍼 함수에 current를 인수로 넣고 호출한다.

## DFS, BFS를 언제 쓰면 좋을까요?

- BFS는 한 층의 depth를 큐에 저장한다.
- 따라서 넓이가 넓은 트리의 경우, BFS는 공간복잡도를 많이 차지한다.
- DFS는 어느 한 깊이에 대해 재귀나 스택의 공간복잡도를 차지한다.
- 따라서 깊이가 깊은 트리의 경우, DFS는 공간복잡도를 많이 차지한다.
- DFS에는 preorder, inorder, postorder가 있다.
- 보통은 비슷하게 사용하나, inorder로 순회하면 데이터가 오름차순 정렬되어 출력된다.
- preorder로 순회하면 데이터는 루트부터 왼쪽, 오른쪽 순으로 정렬되어 출력된다. 따라서 exports 하기 좋은 환경이 된다.

## RECAP

- 트리는 비선형 데이터 구조이다.
- 이진 트리는 트리의 특이한 케이스이다. 어떤 종류의 값이든 가질 수 있으나, 부모 노드는 최대 2개의 자식 노드만 가질 수 있다.
- 이진탐색트리는 이진 트리의 특이한 케이스이다. 부모 노드는 최대 2개의 자식 노드만 가질 수 있고, 부모노드의 왼쪽 프로퍼티는 부모노드보다 작은 값이, 오른쪽 프로퍼티는 부모노드보다 큰 값이 들어가야 한다.
- 트리를 탐색, 순회하는 알고리즘에는 대표적으로 DFS, BFS가 있다.

```js
class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return undefined;
    let current = this.root;
    while (current.value !== value) {
      if (value < current.value) {
        if (current.left === null) return undefined;
        current = current.left;
      }
      if (value > current.value) {
        if (current.right === null) return undefined;
        current = current.right;
      }
    }
    return current;
  }

  BFS() {
    let node = this.root;
    let queue = [];
    let data = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFS_Pre_stack() {
    const data = [];
    let current = this.root;
    const stack = [];
    stack.push(current);
    while (stack.length) {
      current = stack.pop();
      data.push(current.value);
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
    return data;
  }

  DFS_PreOrder() {
    const data = [];
    const current = this.root;
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }

  DFS_PostOrder() {
    const data = [];
    const current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(current);
    return data;
  }

  DFS_InOrder() {
    const data = [];
    const current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const bst = new BST();
bst.insert(50);
bst.insert(75);
bst.insert(60);
bst.insert(80);
bst.insert(25);
bst.insert(13);
bst.insert(40);
bst.insert(12);
bst.insert(11);
bst.insert(10);
bst.insert(9);
bst.insert(8);
bst.insert(7);
```
