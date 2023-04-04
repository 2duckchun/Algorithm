# Binary Tree
## Objectives
- 트리가 무엇인지 정의한다. (Define what a tree is)
- 트리와 리스트를 비교해보기 (Compare and contrast trees and lists)
- 트리와 이진트리, 이진검색트리 비교하기 (Explain the differences between trees, binary trees, and binary search trees)
- 이진 검색 트리 구현하기 (Implement operations on binary search trees(BST))

## What is a tree?
- 부모 / 자식 노드의 관계를 정리한 자료구조라고 할 수 있음.
- 오로지 노드는 부모-자식 관계에 따라 자식인 노드만을 가리킬 수 있음. (자식이 부모를 가르켜선 안됨)
- 모든 노드가 루트에서 멀어지는 방식으로 연결됨.

## 리스트와 트리의 차이점
- 리스트는 선형, 트리는 비선형 (리스트는 쭉쭉 가고, 트리는.. 삶의 갈림길에서 선택을 내린다.)

## TREE TERMINOLOGY
- Root(루트) : 트리 노드의 최상단
- Child(자식) : 노드에서 다른 노드로 연결이 된 노드이나, 루트에서 멀어지는 방향으로 연결된 노드
- Parent(부모) : 노드에서 다른 노드로 연결이 된 노드이나, 루트에서 조금 더 가깝게 연결되어있는 노드
- Siblings(형제) : 같은 부모 노드를 가지는 노드 그룹
- leaf(리프) : 자식 노드가 없는 노드
- Edge(간선) - 노드와 다른 노드를 잇는 커넥션

## 이진트리는 어떻게 동작할까?(How BSTS Work?)
- 모든 부모노드는 최대 두 자식 노드를 가진다. (Every Parent Node has at most two children)
- 모든 부모노드의 왼쪽 노드는 부모 노드보다 작다. (Every Node to the left of the Parent Node is always less than Parent)
- 모든 부모노드의 오른쪽 노드는 부모 노드보다 크다. (Every Node to the right of the Parent Node is always greater than Parent)

## 이진탐색트리가 단순 이진트리보다 탐색이 빠른 이유
- BST는 부모 노드를 기준으로 한 방향은 부모 노드보다 작고 한 방향은 부모 노드보다 크다.
- 따라서 특정 노드를 찾기 위해 검색의 범위를 절반씩 줄여나갈 수 있다.

## BST 클래스
```js
class BST {
  constructor() {
    this.root = null
  }

  // insert(value) {
  //   let newNode = new Node(value)
  //   if(this.root === null) {
  //     this.root = newNode
  //     return this
  //   } else {
  //     let current = this.root;
  //     while(true) {
  //       if (value === current.value) return undefined
  //       if (value < current.value) {
  //         if(current.left === null) {
  //           current.left = newNode
  //           return this
  //         } else {
  //           current = current.left
  //         }
  //       } else if(value > current.value) {
  //         if(current.right === null) {
  //           current.right = newNode;
  //           return this
  //         } else {
  //           current = current.right
  //         }
  //       }
  //     }
  //   }
  // }
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
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

let tree = new BST()
tree.root = new Node(10)
tree.right = new Node(200)
tree.root.left = new Node(7)
tree.root.left.right = new Node(9) ...
```

## 노드 추가하기
- 새 노드 생성
- 루트에서 시작
- 루트가 있는지 체크하고, 만약 루트가 없다면 새 노드가 루트가 됨.
- 루트가 있다면 새 노드가 노드보다 큰 값을 가졌는지, 작은 값을 가졌는지 판단함.
- 크다면? 
1. 기준 노드의 오른쪽 노드가 있는지 확인함.
2. 오른쪽 노드가 있다면, 오른쪽 노드로 이동한 후 이 과정을 반복함.
3. 오른쪽 노드가 없다면, 새 노드가 오른쪽 노드가 됨.
- 작다면?
1. 기준 노드의 왼쪽 노드가 있는지 확인함.
2. 왼쪽 노드가 있다면, 왼쪽 노드로 이동한 후 이 과정을 반복함.
3. 왼쪽 노드가 없다면, 새 노드가 왼쪽 노드가 됨.
