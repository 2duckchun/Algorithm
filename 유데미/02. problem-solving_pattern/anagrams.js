/*
Given two strings, write a function to determine 
if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed 
by rearranging the letters of another, such as cinema, formed from iceman.

 + 제약사항 : 모두 소문자와 대문자를 모두 같이 취급할 것
  ex) validAnagram('lowercase', 'LOWERCASE') // true
*/

// frequency counter pattern

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false
    // str1에 대한 객체를 만들어본다.
    // str2에 대한 객체를 만들어본다.
    lowerStr1 = str1.toLowerCase()
    lowerStr2 = str2.toLowerCase()
    // 객체에 뭔가를 넣고 채운다.
    const object1 = {}
    const object2 = {}
    for (let i = 0; i < str1.length; i++) {
        object1[lowerStr1[i]] = ( object1[lowerStr1[i]] || 0 ) + 1 
        object2[lowerStr2[i]] = ( object2[lowerStr2[i]] || 0 ) + 1 
    } 
    // 한 객체에 대해 상대 객체의 빈도수가 같은지 조사한다.
    for (let val in object1) {
        if (!(val in object2)) return false
        if (object1[val] !== object2[val]) return false
    }
    return true
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('lowercase', 'LOWERCASE') // true
validAnagram('anagram', 'nagaram') // true
validAnagram('awesome', 'awesom') // false
validAnagram('cinema', 'iceman') // true

function answer(first, second) {
    if (first.length !== second.length) return false
    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true
}