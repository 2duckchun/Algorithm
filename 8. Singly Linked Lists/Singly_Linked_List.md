# Singly Linked Lists
## Objectives
- Define what a Singly Linked List is (싱글 링크드 리스트가 뭔지 정의하기)
- Compare and contrast Linked Lists with Arrays (어레이와 링크드 리스트의 차이점에 대해 비교하기)
- Implement insertion, removal, and traversal methods on Singly Linked Lists (삽입, 삭제, 순회 메서드를 싱글 링크드 리스트로 구현해보기)

## What is a linked list?
- A data structure that contains a `head`, `tail` and `length property` (head와 tail과 length 프로퍼티를 가진 자료구조)
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null
(링크드 리스트는 `노드`와 각 노드에 연결된 `값`, 그리고 다음 노드를 연결하거나 null과 연결되는 `포인터`로 구성된다.)

## Comparisons with Arrays
### Lists
- Do not have indexes (인덱스가 없음)
- Connected via nodes with a next pointer (포인터를 통해 다음 노드로 연결됨)
- Random access is not allowed (랜덤 엑세스가 허용되지 않음)

### Arrays
- Indexed in order! (순서대로 인덱싱 되어있음)
- Insertion and deletion can be expensive (삽입과 삭제 연산이 비쌈)
- Can quickly be accessed at a specific index (특정 인덱스 값을 통해 빠르게 접근 가능)

## BigO
- Insertion(삽입) : 맨 앞이나 맨 뒤에 노드를 추가하는 것은 O(1), 중간 인덱스가 있다고 가정하고 삽입할 경우 O(N)
- Removal(삭제) : O(N)
- Searching(검색) : O(N)
- Access(접근) : O(N)

## 언제 사용하나요?
- 단방향 연결 리스트는 삽입 연산(특히 unshift)에 있어 장점을 가지며, 
- 주어진 순서대로 데이터를 관리할 필요가 있거나 임의로 데이터에 접근할 필요가 없을 경우 이점이 있음.

## RECAP
- Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built in index whereas Linked Lists do not
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues

## 구현
```js
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // push 메서드 - 링크드 리스트의 tail에 노드를 추가함.
  push(val) {
    let newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  // 순회 메서드 - 리스트에 있는 노드들을 head부터 끝까지 순회함.
  traverse() {
    let current = this.head
    while(current) {
      console.log(current)
      current = current.next
    }
  }

  // Pop 메서드 - 링크드 리스트의 마지막 노드를 삭제하고 tail을 반환함.
  /*
  수도코드
  - 리스트에 노드가 없다면, undefined를 리턴
  - tail에 닿을때까지 list를 순회
  - 2번째로 뒤에 있는 노드의 next 프로퍼티를 null로 설정
  - 2번째로 뒤에 있는 노드를 tail로 설정
  - length 1 감소
  - 삭제된 node를 return함
  */
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while(current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  // shift 메서드 - 리스트의 head노드를 반환 및 제거하고 다음 노드를 head로 만듦
  /* 
  수도코드
  - 리스트에 노드가 없다면, undefined 반환.
  - 현재 head 프로퍼티를 변수에 저장함.
  - 현재의 head 프로퍼티를 head의 next 노드로 만듦.
  - length를 1 줄임.
  - 제거된 노드를 return함
  */
  shift() {
    if (!this.head) return undefined
    const currentHead = this.head
    this.head = this.head.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }

  // unshift 메서드 - 새로운 노드를 링크드 리스트의 맨 앞에 추가하는 메서드
  /*
  수도코드
  - 메서드는 파라미터로 value를 받는다.
  - 노드 생성 클래스를 이용하여 value를 사용해 새로운 노드를 만든다.
  - 리스트에 헤드가 없었다면, 새로운 헤드와 테일을 새로운 노드로 바꾼다.
  - 그게 아니라면 새로운 노드의 next를 현재의 헤드값으로 바꾼다.
  - 헤드 프로퍼티를 새로운 노드로 바꾼다.
  - 링크드 리스트의 length를 1 증가시킨다.
  - 링크드 리스트를 리턴한다.
  */
  unshift(val) {
    const newNode = new Node(val)
      if (!this.head) {
        this.head = newNode
        this.tail = this.head
      } else {
        newNode.next = this.head
        this.head = newNode
      }
    this.length++
    return this
  }

  // get 메서드 - 링크드 리스트의 어느 위치에 있는 노드를 반환하는 메서드
  /*
  수도코드
  - 메서드는 파라미터로 인덱스를 받는다.
  - 인덱스가 0보다 작거나, list의 length보다 크거나 같을 경우 null을 리턴한다.
  - 할당된 index만큼 리스트를 Loop하고, index만큼 Loop했다면 해당 노드를 return 한다.
  */
  get(index) {
    if (index < 0 || index >= this.length) return null
    let count = 0
    let current = this.head
    while (count !== index) {
      current = current.next
      count++
    }
    return current
  }

  // set 메서드 - 링크드 리스트의 어느 위치에 있는 노드의 value를 바꾸는 메서드
  /*
  수도코드
  - 메서드는 파라미터로 값과 인덱스를 받는다.
  - 특정한 노드를 찾기 위해 get 메서드를 이용해라..
  - 노드를 못찾았다면 false를 반환해라
  - 노드를 찾았다면 노드를 새로운 값으로 반환하고, true를 반환해라.
  */
  set(index, val) {
    let foundNode = this.get(index)
    if (!foundNode) return false
    else foundNode.val = val
    return true
  }
  
  // insert 메서드 - 링크드 리스트의 특정 위치에 새로운 노드를 추가하는 메서드
  /*
  수도코드
  - 메서드는 파라미터로 값과 인덱스를 받는다.
  - 인덱스가 0보다 작거나, length보다 클 경우 false를 리턴해라.
  - 인덱스가 length와 같다면 끝 노드에 추가하는 것과 같으므로, push 메서드를 대신 호출한다.
  - 인덱스가 0이라면 unshift를 호출한다.
  - 그렇지 않다면 get 메서드를 호출하되 -1의 인덱스로 호출하고,
  - get 메서드로 받아온 node에 새로운 node의 next를 연결한다.
  - 
  - 노드를 못찾았다면 false를 반환해라
  - 노드를 찾았다면 노드를 새로운 값으로 반환하고, true를 반환해라.
  */
  insert(index, val) {
    // edge case
    if (index < 0 || index > this.length) {
      return false
      }
    if (index === this.length) {
      this.push(val)
      return true
      }
    if (index === 0) {
      this.unshift(val)
      return true
      }

    let newNode = new Node(val)
    let prevNode = this.get(index - 1)
    let postNode = prevNode.next
    prevNode.next = newNode
    newNode.next = postNode
    this.length++
    return true
  }

  // remove 메서드 - 링크드 리스트의 특정 위치에 있는 노드를 삭제하는 메서드
  /*
  수도코드
  - 메서드는 파라미터로 인덱스를 받는다.
  - 인덱스가 0보다 작거나, length보다 (같거나) 클 경우, undefined를 리턴한다.
  - 만약에 인덱스가 length -1과 같을 경우 pop 메서드를 실행한다.
  - 만약에 인덱스가 0일 경우, shift 메서드를 실행한다.
  - 그 경우가 아닐 경우, get 메서드를 호출하고, get 메서드를 호출할때는 인덱스 -1을 인수로 하여 호출한다.
  - get으로 받아온 메서드의 next 프로퍼티를 2단계 위의 노드로 설정한다. (node.next.next)
  - length를 1 감소시킨다.
  - 삭제된 노드를 반환한다.
  */
  remove(index) {
    // edge case
    if (index < 0 || index >= this.length) return undefined
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()

    let prevNode = this.get(index - 1)
    let removeNode = prevNode.next
    prevNode.next = prevNode.next.next
    this.length--
    return removeNode
  }
  
  // reverse 메서드 - 링크드 리스트를 반대로 나열하는 메서드
  /*
  수도코드
  - 링크드 리스트의 헤드와 테일을 바꾼다.
  - 다음 노드를 저장할 변수인 next를 만든다.
  - 노드의 next에 할당할 노드를 저장할 변수인 prev를 만든다.
  - node라는 변수를 만들고, 초기 헤드(헤드와 테일을 바꿨다면 바꿨다면 테일)를 할당한다.
  - 리스트의 길이만큼 루프를 돈다.
  - 노드 변수의 다음 노드를 next에 저장한다.
  - 현재 노드의 next를 prev로 할당한다.
  - prev를 현재 노드로 설정하고
  - 다음에 쓰일 next 노드를 node에 할당한다.
  */
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next = null
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }

  print() {
    let arr = []
    var current = this.head
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr)
  }
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("!")
list.traverse()
```

