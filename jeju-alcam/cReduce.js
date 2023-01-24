allFuns = {}
/* 여기서부터 시작! */

Array.prototype.cReduce = function(cb, acc, i = 0) {
  if (this.length <= i) return acc
  if (acc === undefined) {
    acc = this[i]
    i = i + 1
  }
  acc = cb(acc, this[i], i, this)
  return this.cReduce(cb, acc, i + 1)
}

// console.log will be called 3 times:
//    'hi', 5, 0, original array
//    'hi50', 8, 1, original array
//    'hi5081', 7, 2, original array
// result will be 'hi508172'

// 최종적으로 acc를 리턴하고
// acc를 계속 가지고 재귀를 돌아야함
// 재귀함수는 변하는 파라미터와 종료조건이 들어가있어야 함

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