class stack {
  constructor() {
    this.arr = []
  }
  put(item) {
    this.arr.push(item)
  }
  get() {
    return this.arr.pop()
  }
  getFirst() {
    return this.arr[this.arr.length - 1]
  }
  count() {
    return this.arr.length
  }
  isEmpty() {
    return this.arr.length === 0
  }
}