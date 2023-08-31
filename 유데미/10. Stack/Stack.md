# Stack
## Objectives
- Define what a stack is
- Undefined use cases for a stack
- Implement operations on a stack data structure

## What is a Stack?
- A LIFO data structure! : The last element added to the stack will be the first element removed from the stack
- They are not a built in data structure in JS, but are relatively simple to implement

## How is it used?
- Call Stack
- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack!
- Queues are useful for processing tasks and are foundational for more complex data structures.

## JS에서 스택을 구현하기 쉬운 언어는 배열이다.
### 그런데 일부 프로그래밍 언어에는 그 자체에 스택이라는 데이터 종류가 있기도 하다.

## BigO
- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

```js
let stack = []
stack.push("Google")
stack.push("Instagram")
stack.push("youtube")
stack.pop()
stack.pop()
stack.pop()

stack.unshift("photoshop")
stack.unshift("clone")
stack.unshift("hello")
stack.shift()
stack.shift()
stack.shift()
// shift, unshift는 스택을 구현하기에는 부적절한 방식이라고 할 수 있음.
// 하지만 스택에서 굳이 인덱스를 가질 필요성도 없어 배열도 딱히 쓸모있다고 할 수는 없다.
```

```js
// 선입선출과 데이터만 필요할 경우 스택 클래스를 구현할 수 있음

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    const newNode = new Node(val)
    if(!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      const temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }

  pop() {
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