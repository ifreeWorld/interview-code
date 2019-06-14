class queue {
  constructor() {
    this.arr = []
  }
  put(item) {
    this.arr.push(item)
  }
  get() {
    return this.arr.shift()
  }
  getFirst() {
    return this.arr[0]
  }
  count() {
    return this.arr.length
  }
  isEmpty() {
    return this.arr.length === 0
  }
}