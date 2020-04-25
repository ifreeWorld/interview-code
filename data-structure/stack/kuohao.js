/*
给定一个只包括 ‘(’，’)’，’{’，’}’，’[’，’]’ 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: “()”
输出: true

示例 2:
输入: “()[]{}”
输出: true

示例 3:
输入: “(]”
输出: false

示例 4:
输入: “([)]”
输出: false

示例 5:
输入: “{[]}”
输出: true
*/
class Stack {
  constructor() {
    this.arr = []
  }
  
  put(item) {
    this.arr.push(item)
  }
  
  get() {
    return this.arr.pop()
  }
  
  len() {
    return this.arr.length
  }
}

var obj = {
  '{': -1,
  '}': 1,
  '(': -2,
  ')': 2,
  '[': -3,
  ']': 3,
}

function isOk(str) {
  var stack = new Stack()
  var arr = str.split('')
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] < 0) {
      stack.put(arr[i])
    } else {
      if (stack.len() > 0) {
        var key = stack.get()
        if (obj[arr[i]] + obj[key] !== 0) {
          return false
        }
      } else {
        return false
      }
    }
  }
  
  if (stack.len() > 0) {
    return false
  }
  
  return true
}

console.log(isOk("()"))
console.log(isOk("()[]{}"))
console.log(isOk("(]"))
console.log(isOk("([)]"))
console.log(isOk("{[]}"))