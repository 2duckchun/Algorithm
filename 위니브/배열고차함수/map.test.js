const solution = require('./map.js')

describe('test gsMap', () => {
  const cb = (e, i) => {
    return e + i + 1
  }
  it('should run callback with 3 parameters', () => {
    let callbacks;
    [9].tsmap((e, i, arr) => {
      callbacks = [e, i, arr]
    })
    expect(callbacks).toEqual([9, 0, [9]])
  })
  it('should not change original array', () => {
    const a = [1, 2, 3]
    a.tsmap(cb)
    expect(a).toEqual([1, 2, 3])
  })
  it('should return [] for []', () => {
    expect([].tsmap(cb)).toEqual([])
  })
  it('should return new array of 3 elements increased by the value of its index', () => {
    const a = [1, 2, 3]
    const c = a.tsmap(cb)
    expect(c).toEqual([2, 4, 6])
  })
  it('should return new array of 3 elements increased by the value of its index twice', () => {
    const a = [1, 2, 3]
    const c = a.tsmap(cb).tsmap(cb)
    expect(c).toEqual([3, 6, 9])
  })
})