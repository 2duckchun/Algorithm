allFuns = {}
/* 여기서부터 시작! */

Array.prototype.cReduce = function(cb, acc, i = 0) {
  if (this.length <= i) return acc
  acc = cb(acc, this[i], i, this)
  return this.cReduce(cb, acc, i + 1)
}

const result = [5,8,7].cReduce( (acc, e, i, arr) => {
  console.log(acc, e, i, arr)
  return acc + e + i
}, 'hi')
// console.log will be called 3 times:
//    'hi', 5, 0, original array
//    'hi50', 8, 1, original array
//    'hi5081', 7, 2, original array
// result will be 'hi508172'

allFuns.cReduce = Array.prototype.cReduce
module.exports = allFuns





// Array.prototype.cReduce = function (cb, acc = 0, i = 0) {
//   if (this.length <= i) return acc
//   if (acc === 0 && i === 0 && typeof this[i] === 'string') {
//     acc = ""
//   }
//   acc = cb(acc, this[i], i, this)
//   return this.cReduce(cb, acc, i + 1)
// }