allFuns = {}

Array.prototype.tsmap = function (cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
    }
    return result
}


allFuns.tsmap = Array.prototype.tsmap
module.exports = allFuns