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
- 방문한 노드의 값을 저장할 변수를 하나 만든다.
- current라는 변수에 BST의 root를 저장한다.
- node를 인수로 받는 헬퍼 펑션을 만든다.
1. 노드의 값을 값을 저장하는 변수에 푸쉬한다.
2. 만약 노드에 왼쪽 프로퍼티가 있으면, 해당 왼쪽 프로퍼티와 함께 헬퍼펑션을 호출한다.
3. 만약 노드에 오른쪽 프로퍼티가 있다면, 해당 오른쪽 프로퍼티와 함께 헬퍼펑션을 호출한다.
- 헬퍼 함수를 current 변수에 대해 호출한다.

```js
class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    if(this.root === null) {
      this.root = newNode
      return this
    }
    let current = this.root;
    while(true) {
      if (value === current.value) return undefined
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      }
      if (value > current.value) {
        if(current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  find(value) {
    if (this.root === null) return undefined
    let current = this.root
    while(current.value !== value) {
      if (value < current.value) {
        if (current.left === null) return undefined
        current = current.left
      }
      if (value > current.value) {
        if (current.right === null) return undefined
        current = current.right
      }
    }
    return current
  }

  BFS() {
    let node = this.root
    let queue = []
    let data = []
    queue.push(node)
    while(queue.length) {
      node = queue.shift()
      data.push(node)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }

  DFS_Pre() {
    const data = []
    const current = this.root
    const helper = (node) => {
      data.push(node.value)
      if (node.left) helper(node.left)
      if (node.right) helper(node.right)
    }
    helper(current)
    return data
  }
}


class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
```