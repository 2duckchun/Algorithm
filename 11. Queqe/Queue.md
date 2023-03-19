# Queue
## Objectives
- Define what a queue is
- Understand use cases for a queue
- Implement operations on a queue data structure

## What is a Queue?
- A FIFO data structure! First In First Out

## We've seen this before
- Queues exist everywhere! Think about the last time you waited in line...
### How do we use them in programming?
- Background tasks
- Uploading resources
- Printing / Task processing

## BigO
- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

## Array queue
```js
// 배열로 queue를 구현할 수 있으나 인덱스의 낭비가 심해서 비효율적
const queue = []
queue.push("First")
queue.push("Second")
queue.push("Third")
queue.shift()
queue.shift()
queue.shift()

const queue2 = []
queue2.unshift("First")
queue2.unshift("Second")
queue2.unshift("Third")
queue2.pop()
queue2.pop()
queue2.pop()
// 그러므로, 큐를 다룰때는 큐 클래스를 만드는 것이 확실히 말이 됨
```

## A Queue Class
```js
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    const newNode = new Node(value)
    if(!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }

  /**
   * Dequeue 의사코드
   * 만약 first 프로퍼티가 없다면 null을 리턴
   * 1. 첫번째 프로퍼티를 변수에 저장한다.
   * 2. first 프로퍼티와 last 프로퍼티가 같은 노드인지 확인하고, (노드가 한개인지 확인하는 것임) 그렇다면 first와 last를 null로 둔다.
   * 3. 만약 노드가 1개 이상이면, first 프로퍼티를 first.next로 두고, size를 1 내린다.
   * 4. dequeue된 노드를 리턴한다.
   */
  dequeue() {
    if(!this.first) return null

    const temp = this.first
    if(this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp
  }
}
```