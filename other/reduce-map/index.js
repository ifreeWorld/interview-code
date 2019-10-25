// https://m.runoob.com/jsref/jsref-map.html

/**
 * @param func 函数，包含三个参数(item, index, arr)，arr为当前的遍历的arr
 * @param context 回调函数func中的this指向
 */
Array.prototype.selfMap = function(func, context) {
  var self = this
  var result = []
  self.reduce((prev, cur, idx, arr) => {
    result.push(func.call(context, cur, idx, arr))
  }, null)
  return result
}

var arr = [1, 2, 3, 4]
var obj = 3

var result = arr.selfMap(function(item, index, arr) {
  return item + this
}, obj)

/**
 * 实现一个reduce函数
 */
Array.prototype.selfReduce = function(func, init) {
  var self = this
  var result = []
  var prev
  var i = 0
  if (init === undefined) {
    prev = self[0]
    i = 1
  } else {
    prev = init
  }

  for (; i < self.length; i++) {
    prev = func(prev, self[i], i, self)
  }
  return prev
}

var arr = [1, 2, 5, 50, 3]
var add1 = arr.selfReduce(function(prev, cur, idx, src) {
  return prev + cur
}, 100)
var add2 = arr.selfReduce(function(prev, cur, idx, src) {
  return prev + cur
})
console.log(add1)
console.log(add2)
