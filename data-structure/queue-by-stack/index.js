/**
 * 用两个栈来实现一个队列，完成队列的Push和Pop操作
 * 
 * 假设两个栈分别为 stack1 和 stack2，将stack1用于入队操作，将stack2用于出队操作。当stack2为空时，将stack1的元素弹出并推入stack2中。每次出队操作，就是对stack2的弹出操作。
 */

class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.unshift(item)
  }
  pop() {
    return this.stack.shift()
  }
  size() {
    return this.stack.length
  }
}

class Queue {
  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }
  push(item) {
    this.stack1.push(item)
  }
  pop() {
    if (this.stack1.size() === 0 && this.stack2.size() === 0) {
      return null
    }
    if (this.stack2.size() === 0) {
      var len = this.stack1.size()
      for(var i = 0; i < len; i++) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }
}


var queue = new Queue()
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5)
queue.push(6)
queue.push(7)
queue.push(8)
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())