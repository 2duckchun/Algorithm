# Doubly Linked Lists
## Objectives
- Construct a Doubly Linked List
- Compare and contrast Doubly and Singly Linked Lists
- Implement basic operations on a Doubly Linked List

## Comparisons with Singly Linked Lists
- More memory === More Flexibility (it's almost always a tradeoff!)

Node (val next prev)
DoublyLinkedList (head tail length)

```js
class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  /**
   * Push 메서드 : 더블 링크드 리스트의 끝에 새로운 노드를 추가하는 메서드
   * 의사코드
   * 새 노드를 만든다. 메서드는 노드에 추가할 value를 파라미터로 받아야 한다.
   * 리스트가 비어있을 경우, 리스트의 head와 tail을 새로운 노드로 설정한 후 length를 늘리고 리턴한다.
   * 그렇지 않을 경우, 기존의 tail의 next를 새로운 노드에 연결한 후, 새 노드의 prev를 기존의 tail과 연결한다.
   * 리스트의 tail을 새 노드로 바꿔준다.
   * length를 1 늘려준다.
   * 리스트를 리턴한다.
  */
  push(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
}

```