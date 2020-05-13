// 柯里化是将多参数的函数拆分为单个参数的函数，内部再返回一个函数，这个函数是接收后面的参数，依次处理，就是缩小了函数的适用范围
function curry(func) {
  var self = this
  return function fn(...params) {
    if (params.length === func.length) {
      return func.apply(self, params)
    }
    return (...innerParams) => {
      return fn.apply(self, [...params, ...innerParams])
    }
  }
}

function test(a,b,c) {
  console.log(a,b,c)
}
var func1 = curry(test)
var func2 = func1(1)
var func3 = func2(2)
func3(3)


// 反柯里化是将一些方法扩大使用范围，比如将Array.prototype.push等这样的已经成型的方法扩大使用范围，让不是数组类型也对象也能使用
function uncurry(fn) {
  return (target, ...params) => {
    return fn.apply(target, params)
  }
}
var slice = uncurry(Array.prototype.slice)
function test() {
  var result = slice(arguments, 1)
  console.log(result)
}
test(1,2,3,4)

// 第二种反柯里化方法
Function.prototype.uncurry = function() {
  var self = this
  return (...params) => {
    var context = params[0]
    var args = params.slice(1)
    return self.apply(context, args)
  }
}
var slice = Array.prototype.slice.uncurry()
function test() {
  var result = slice(arguments, 1)
  console.log(result)
}
test(1,2,3,4)