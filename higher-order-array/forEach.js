allFuns = {}

Array.prototype.tsforEach = function(cb) {
    for(let i = 0; i < this.length; i++) {
        cb(this[i], i, this)
    }
}


allFuns.tsforEach = Array.prototype.tsforEach
module.exports = allFuns