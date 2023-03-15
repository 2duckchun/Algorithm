# Stack
## Objectives
- Define what a stack is
- Undefined use cases for a stack
- Implement operations on a stack data structure

## What is a Stack?
- A LIFO data structure! : The last element added to the stack will be the first element removed from the stack

## How is it used?
- Call Stack
- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack!

## JS에서 스택을 구현하기 쉬운 언어는 배열이다.
### 그런데 일부 프로그래밍 언어에는 그 자체에 스택이라는 데이터 종류가 있기도 하다.

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