/**
 * 实现一个简单的响应式
 */
var a = {
  b: 1,
  c: 2
}
function responsive() {
  Object.keys(a).forEach(key => {
    var value = a[key]
    Object.defineProperty(a, key, {
      get: () => {
        console.log('get', key)
        return value
      },
      set: (val) => {
        console.log('set', key, val)
        value = val
      }
    })
  })
}
responsive()

var b = a.b
a.c = 3