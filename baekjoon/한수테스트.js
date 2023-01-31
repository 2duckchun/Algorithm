function isHansu(n) {
  if (n < 100) return true
  const arr = []
  while (n !== 0) {
      arr.push(n % 10)
      n = Math.floor(n / 10)
  }
  let set = new Set()
  for (let i = 0; i < arr.length - 1; i++) {
      set.add(arr[i] - arr[i + 1])
  }
  if (set.size === 1) {
      return true
  }
  return false
}