# CLASS
## THE BASIC SYNTAX
```js
class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = grade
  }
}

let firstStudent = new Student("2", "DC", 2)
let secondStudent = new Student("3", "DC", 3)
```
- The method to create new objects must be called constructor
- The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well

## Instance Methods
```js
class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName
    this.lastName = lastName
    this.grade = grade
    this.tardies = 0
    this.scores = []
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`
  }
  markLate() {
    this.tardies += 1
    if(this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!"
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} time`
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }
  calculateAverage() {
    let sum = this.scores.reduce((a, b) => a + b, 0)
    return sum / this.scores.length
  }
}
let firstStudent = new Student("2", "DC", 2)
firstStudent.fullname()
```

## Class Methods
```js
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y
    console.log(dy, dy)
    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)
Point.distance(p1, p2)
```
- 클래스 메서드는 인스턴스 메서드는 호출할 수 없고, 클래스 차원에서 호출하는 메서드이다.
- 유틸리티적인 역할을 하는 경우가 많다.

## this
- inside all of our instance methods and constructor, the keyword `this` refers to
the object created from that class (also known as an instance)

## Recap
- Classes are blueprints that when created make objects known as instances
- Classes are created with the `new` keyword
- The `constructor` function is a special function that gets run when the class is instantiated
- Instance methods can be added to classes similar to methods in objects
- Class methods can be added using the static keyword