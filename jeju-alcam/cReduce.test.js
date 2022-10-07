const solution = require('./cReduce.js')

describe('test cReduce', () => {
  it('콜백함수가 4개의 파라미터를 모두 받아 실행하기', () => {
    let callbacks;
    [9].cReduce((acc, e, i, arr) => {
      callbacks = [acc, e, i, arr]
    }, 8)
    expect(callbacks).toEqual([8, 9, 0, [9]])
  })
  it('초기값 -3인 채로 배열 내 모든 숫자를 더함. 이때 요소가 짝수일 때 추가로 +1을 더해줌.', () => {
    const cb = (ac, cv, ci) => {
      return ac + cv + (cv % 2 === 0)
    }
    expect([1, 2, 3].cReduce(cb, -3)).toEqual(4)
  })
  it('배열["one","two","three"]을 reduce 메서드를 이용하여 { one: "1 of 3", two: "2 of 2", three: "3 of 3" }로 만들기', () => {
    const cb = (ac, cv, ci, ar) => {
      ac[cv] = `${ci + 1} of ${ar.length}`
      return ac
    }
    const a = ['one', 'two', 'three']
    const b = { one: '1 of 3', two: '2 of 3', three: '3 of 3' }
    expect(a.cReduce(cb, {})).toEqual(b)
  })
  it('배열 ["bob", "obo", "boo"]을 reduce 메서드를 이용해 { bob: true, obo: false, boo: true }로 만들기', () => {
    const cb = (ac, cv, ci) => {
      ac[cv] = (ci % 2 === 0)
      return ac
    }
    const a = ['bob', 'obo', 'boo']
    const b = { bob: true, obo: false, boo: true }
    expect(a.cReduce(cb, {})).toEqual(b)
  })

  it('배열의 모든 요소 더하기 with 초기값 입력 안한 상태', () => {
    const cb = (ac, cv) => {
      return ac + cv
    }
    const test = [1, 2, 3, 4]
    expect(test.cReduce(cb)).toEqual(10)
  })

  it('문자열로 구성된 배열 ["1", "2", "3"] 를 더해서 "123" 만들기', () => {
    const cb = (ac, cv) => {
      return ac + cv
    }
    const a = ['1', '2', '3']
    const b = '123'
    expect(a.cReduce(cb)).toEqual(b)
  })
})
