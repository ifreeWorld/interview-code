// https://m.runoob.com/jsref/jsref-map.html

/**
 * @param func 函数，包含三个参数(item, index, arr)，arr为当前的遍历的arr
 * @param context 回调函数func中的this指向
 */
Array.prototype.selfMap = function(func, context) {
  var arr = this
  var result = []
  arr.reduce(function(total, cur, idx, src) {
    if (idx === 1) {
      result.push(func.call(context, total, idx - 1, src))
    }
    result.push(func.call(context, cur, idx, src))
  })
  return result
}

var arr = [1, 2, 3, 4]
var obj = 3

var result = arr.selfMap(function(item, index, arr) {
  return item + this
}, obj)
