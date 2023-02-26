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