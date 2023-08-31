const solution = require('./find.js')

describe('test tsfind', () => {
  it('콜백함수에 3개의 파라미터 출력하기', () => {
    let callbacks;
    [9].tsfind((e, i, arr) => {
      callbacks = [e, i]
    })
    expect(callbacks).toEqual([9, 0])
  })
  it('첫번째 엘리멘트에 부합할 경우', () => {
    const a = [9, 2, 3]
    const result = a.tsfind((e) => e === 9)
    expect(result).toEqual(9)
  })
  it('두번째 엘리먼트에 부합할 경우', () => {
    const a = ['abc', 'dd', 'abc']
    const result = a.tsfind((e) => e === 'dd')
    expect(result).toEqual('dd')
  })
  it('마지막 엘리먼트에 부합할 경우', () => {
    const a = ['abc', 'dd', 'abc', 'defg']
    const result = a.tsfind((e) => e === 'defg')
    expect(result).toEqual('defg')
  })
  it('아무것도 못찾았을 경우', () => {
    const a = ['abc', 'dd', 'abc', 'defg']
    const result = a.tsfind((e) => e === 'defgh')
    expect(result + '').toEqual('undefined')
  })
})