const solution = require('./forEach.js')

describe('test tsforEach', () => {
  it('should run callback with 3 parameters', () => {
    let callbacks;
    [9].tsforEach((e, i, arr) => {
      callbacks = [e, i, arr]
    })
    expect(callbacks).toEqual([9, 0, [9]])
  })
  it('should not run callback for empty array', () => {
    let counter = 0;
    [].tsforEach(() => {
      counter += 1
    })
    expect(counter).toEqual(0)
  })
  it('should run callback correct number of times, with the correct element input', () => {
    let elements = [];
    [9, 7, 8, 5, 6].tsforEach((e) => {
      elements.push(e)
    })
    expect(elements).toEqual([9, 7, 8, 5, 6])
  })
  it('should run callback with correct number of parameters', () => {
    let indices = [];
    [9, 7, 8, 5, 6].tsforEach((_, i) => {
      indices.push(i)
    })
    expect(indices).toEqual([0, 1, 2, 3, 4])
  })
})
