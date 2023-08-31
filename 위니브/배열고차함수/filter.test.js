const solution = require('./filter.js')

describe('test tsfilter', () => {
  const cb = (e, i) => {
    return e < 8
  }
  it('콜백함수에 3개의 파라미터 출력하기', () => {
    let callbacks;
    [9].tsfilter((e, i, arr) => {
      callbacks = [e, i, arr]
    })
    expect(callbacks).toEqual([9, 0, [9]])
  })
  it('오리지널 어레이 그대로 출력하기', () => {
    const a = [1, 2, 3]
    a.tsfilter(cb)
    expect(a).toEqual([1, 2, 3])
  })
  it('빈 배열 출력하기', () => {
    expect([].tsfilter(cb)).toEqual([])
  })
  it('모든 조건이 true일 경우', () => {
    const a = [1, 2, 3]
    const c = a.tsfilter(cb)
    expect(c).toEqual([1, 2, 3])
  })
  it('모든 조건이 false일 경우', () => {
    const a = [9, 9, 9]
    const c = a.tsfilter(cb).tsfilter(cb)
    expect(c).toEqual([])
  })
  it('필터링에 맞게 출력하기', () => {
    const a = [9, 2, 3, 9, 9, 3]
    const c = a.tsfilter(cb).tsfilter(cb)
    expect(c).toEqual([2, 3, 3])
  })
})