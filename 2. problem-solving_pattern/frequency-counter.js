/* Example
Write a function called same, which accepts two arrays.
The function should return true if every value in the array
has it's corresponding value squared in the second array.
The frequency of values must be the same.

2개의 배열을 허용하는 same이라는 함수를 작성해라.
첫번째 배열의 각각의 값들이 두번째 배열에 속한 값과 상응한다면 참을 반환해라.
두번째 배열에 속한 값은 제곱이어야 한다.
값의 (빈도, frequency)는 같아야 한다.

same([1, 2, 3], [4, 1, 9)] // true -> 순서가 섞여도 괜찮음.
same([1, 2, 3], [1, 9]) // false 
same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

*/