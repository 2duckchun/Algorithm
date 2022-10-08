// Array.prototype.getCharCount = function(i = 0,
//     charSet = this.reduce((acc, e) => {
//     return acc + e
//     }, ''), 
//     result = {})
//     {
//       if (i >= charSet.length) return result
//       result[charSet[i]] = (result[charSet[i]] || 0) + 1
//       return this.getCharCount(i + 1, charSet, result)
//     }
//   const a = ['Charmander', 'Charmeleon', 'Charizard'].getCharCount()


const findA = (str, i = 0, result = {}) => {
    if (str.length <= i) {
        
        return result
    }
    result[str[i]] = (result[str[i]] || 0) + 1
    return findA(str, i + 1, result)
}

const a = findA('derifjasdasd;ghdg;ha')
console.log(a)