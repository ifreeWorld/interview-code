/**
 * 实现一个累加器
 * add(1,2)(3).sumOf()
 * add(1)(2,3).sumOf()
 * add(1)(2)(3).sumOf()
 * add(1,2,3).sumOf()
 */
function add() {
  var params = Array.prototype.slice.call(arguments)

  var _add = function() {
    params = params.concat(Array.prototype.slice.call(arguments))
    return _add
  }

  _add.sumOf = function() {
    return params.reduce((prev, next) => {
      return prev + next
    }, 0)
  }
  return _add
}
console.log(add(2, 3, 4).sumOf())
console.log(add(2)(3, 4).sumOf())
console.log(add(2)(3)(4).sumOf())
console.log(add(2, 3)(4).sumOf())
console.log(add(2, 3, 4, 5).sumOf())
