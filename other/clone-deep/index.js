/**
 * 深拷贝
 * @param {*} obj 
 */
function cloneDeep(obj) {
  // 不是对象，直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  // 是数组
  if (Array.isArray(obj)) {
    var arr = new Array()
    obj.forEach(item => {
      arr.push(cloneDeep(item))
    })
    return arr
  } else {
    // 不是数组，说明是对象
    var result = {}
    Object.keys(obj).forEach(key => {
      result[key] = cloneDeep(obj[key])
    })
    return result
  }
}
const obj1 = {
  b: {
    c: 1,
    e: {
      f: [2, 3]
    }
  }
}
const obj2 = cloneDeep(obj1)
console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))
obj1.b.e.f = [4,5]
obj1.b.c = {
  g: 2
}
console.log(JSON.stringify(obj1))
console.log(JSON.stringify(obj2))