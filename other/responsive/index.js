/**
 * 实现一个简单的响应式
 */
function Observer(a) {
  for (var key in a) {
    debugger
    if (a.hasOwnProperty(key)) {
      Object.defineProperty(a, key, {
        get: () => {
          console.log('get')
          return a[key]
        },
        set: (val) => {
          console.log('set')
          a[key] = val
        }
      })
    }
  }
}
var a = {
  b: 1,
  c: 2
}
Observer(a)

var b = a.b
a.c = 3


var a = {
  name: '112'
}

var proxy = new Proxy(a, {
  get: function(target, key, receiver) {
    return target[key]
  },
  set: function(target, key, value, receiver) {
    target[key] = value
  }
});
console.log(proxy.name)

proxy.name = '23'
console.log(proxy.name)
console.log(a.name)