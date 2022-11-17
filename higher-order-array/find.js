allFuns = {}

Array.prototype.tsfind = function(cb) {
    let result = []
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            return this[i]
        }
    }
}

allFuns.tsfind = Array.prototype.tsfind
module.exports = allFuns