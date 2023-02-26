# CLASS
## THE SYNTAX
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