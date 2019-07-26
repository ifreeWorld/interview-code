function getVariableType(v) {
  var arr = [
    'Number',
    'String',
    'Boolean',
    'Symbol',
    'Undefined',
    'Null',
    'Object',
    'Array',
    'Set',
    'Function'
  ]
  var str = Object.prototype.toString.call(v)
  var type = ''
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    var temp = `[object ${item}]`
    if (temp === str) {
      type = item
      break
    }
  }
  return type
}

console.log(getVariableType(1))
console.log(getVariableType('1'))
console.log(getVariableType(false))
console.log(getVariableType(Symbol(1)))
console.log(getVariableType(undefined))
console.log(getVariableType(null))
console.log(getVariableType(new Object({})))
console.log(getVariableType(new Array([])))
console.log(getVariableType(new Set([])))
console.log(getVariableType(new Function()))

console.log(Object.prototype.toString.call(1))                // "[object Number]"
console.log(Object.prototype.toString.call('1'))              // "[object String]"
console.log(Object.prototype.toString.call(false))            // "[object Boolean]"
console.log(Object.prototype.toString.call(Symbol(1)))        // "[object Symbol]"
console.log(Object.prototype.toString.call(undefined))        // "[object Undefined]"
console.log(Object.prototype.toString.call(null))             // "[object Null]"
console.log(Object.prototype.toString.call(new Object({})))   // "[object Object]"
console.log(Object.prototype.toString.call(new Array([])))    // "[object Array]"
console.log(Object.prototype.toString.call(new Set([])))      // "[object Set]"
console.log(Object.prototype.toString.call(new Function()))   // "[object Function]"









