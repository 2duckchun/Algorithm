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
  
  /**
   * Pop 메서드 : 더블 링크드 리스트의 끝 노드를 제거하고, 제거한 노드를 반환하는 메서드
   * 의사코드
   * 만약 DLL이 비어있다면? undefined를 리턴한다.
   * 당장의 tail은 리스트에서 삭제되면서 return될 값이 되므로 따로 변수에 할당해둔다.
   * tail의 prev가 가장 끝 노드가 될 것이므로 따로 변수에 할당해둔다.
   * 당장의 tail의 prev 값을 null로 한다.
   * 따로 변수에 할당된 tail의 prev의 next를 null로 한다.
   * prev값을 새로운 tail로 할당한다.
   * 전체 길이를 1 줄여준다.
   * 만약 길이가 0이 된다면? head와 tail을 모두 비워준다.
   * 과정이 끝나면 처음에 저장한 tail을 리턴한다.
  */
  pop() {
    if (!this.head) return undefined
    let lastNode = this.tail

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = lastNode.prev
      this.tail.next = null
      lastNode.prev = null
    }
    this.length--
    return lastNode 
  }

  /**
   * Shift 메서드 : 더블 링크드 리스트의 맨 앞 노드를 제거하고, 제거한 노드를 반환하는 메서드
   * 의사코드
   * 만약 DLL이 비어있다면 undefined를 리턴함.
   * 현재 헤드 프로퍼티를 변수로 저장해놓음, (oldHead로 명명함) (나중에 리턴할 것임)
   * 만약 length가 1이라면? 헤드와 테일을 null로 설정함.
   * 그 외의 상황이라면 oldHead의 next 프로퍼티를 head로 설정하고
   * oldHead의 next를 null로 만들고, 현재 헤드의 prev를 null로 만듦.
   * length를 1 줄이고
   * oldHead를 리턴함.
  */
  shift() {
    if (!this.head) {
      return undefined
    }
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      oldHead.next = null
      this.head.prev = null
    }
    this.length--
    return oldHead
  }

  /**
   * unshift 메서드 : DLL의 맨 앞에 노드를 추가하는 메서드
   * 의사코드
   * unshift 메서드는 value를 받고, 그 value로 새로운 node를 생성함.
   * 만약 DLL에 노드가 없다면? 만들어진 노드를 head와 tail로 설정하고, length를 1 증가시키고 DLL을 return
   * 노드가 있다면 현재 head의 prev값을 새로운 노드로 하고, 새로운 노드의 next를 현재 head로 함.
   * head를 새로운 노드로 바꿔주고 length를 1 증가시키고 DLL을 return
  */
  unshift(val) {
    const newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
}

```