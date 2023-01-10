allFuns = {}

Array.prototype.tsmap = function(cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
    }
    return result
}

const arr = [1, 2, 3, 4, 5]
const b = arr.tsmap((e) => {
    return e * 2
})
console.log(b);

allFuns.tsmap = Array.prototype.tsmap
module.exports = allFuns

// Array.prototype.tsmap = function (cb) {
//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this))
//     }
//     return result
// }