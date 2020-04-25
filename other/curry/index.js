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
