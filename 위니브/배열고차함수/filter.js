allFuns = {}

Array.prototype.tsfilter = function(cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}

allFuns.tsfilter = Array.prototype.tsfilter
module.exports = allFuns

// Array.prototype.tsfilter = function(cb) {
//     let result = []
//     for(let i = 0; i < this.length; i++) {
//         if(cb(this[i], i, this)) {
//             result.push(this[i])
//         }
//     }
//     return result
// }