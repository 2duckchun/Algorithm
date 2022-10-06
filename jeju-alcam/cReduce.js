

Array.prototype.cReduce = function(cb, acc, i = 0) {

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