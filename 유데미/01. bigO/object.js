let instructor = {
    firstName : "Kelly",
    isInstructor : true,
    favoriteNumbers: [1, 2, 3, 4]
}

const a = Object.keys(instructor)
console.log(a);

const b = Object.values(instructor)
console.log(b);

const c = Object.entries(instructor)
console.log(c)

const d = instructor.hasOwnProperty("firstName")
console.log(d);