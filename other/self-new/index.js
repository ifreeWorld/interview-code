function SelfNew() {
  var params = Array.prototype.slice.call(arguments, 1)
  var func = arguments[0]

  var obj = {}
  obj.__proto__ = func.prototype
  var result = func.apply(obj, params)
  if (typeof result === 'object' && result !== null) {
    return result
  } else {
    return obj
  }
}