allFuns = {}

Array.prototype.tsReduce = function(cb, acc) {
    let i = 0
    if (acc === undefined) {
        acc = this[i]
        i += 1
    }
    for(i; i < this.length; i++) {
        acc = cb(acc, this[i], i, this)
    }
    return acc
}

allFuns.tsReduce = Array.prototype.tsReduce
module.exports = allFuns

// Array.prototype.tsReduce = function(cb, acc) {
//     let i = 0
//     if (acc === undefined) {
//         acc = this[i]
//         i = i + 1
//     }
//     for(i; i < this.length; i++) {
//         acc = cb(acc, this[i], i, this)
//     }
//     return acc
// }