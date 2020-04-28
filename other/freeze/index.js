/**
 * 深冻结
 */
function freeze(obj) {
  Object.freeze(obj)
  
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'object' && !Object.isFrozen(obj[key])) {
      freeze(obj[key])
    }
  }
}

var a = {
  b: 1,
  c: {
    d: 2
  }
}

freeze(a)
console.log(Object.isFrozen(a.c))
a.b = 2
a.c.d = 4
console.log(a)

/**
 * 浅冻结
 */

function freeze(obj) {
  Object.freeze(obj)
}