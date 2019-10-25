/**
 * 拍平数组，递归实现
 * @param {*} list 
 */
function flatten(list) {
  var result = []
  list.forEach(item => {
    if (!Array.isArray(item)) {
      result.push(item)
    } else {
      result = result.concat(flatten(item))
    }
  })
  return result
}

/**
 * 拍平数组，reduce实现
 * @param {*} list 
 */
function flatten(list) {
  var result = []
  result = list.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return [...prev, ...flatten(cur)]
    } else {
      return [...prev, cur]
    }
  }, [])
  return result
}

const a = flatten([1, 2, [3, [4, 5, [6, [7, 8]]]]]);
console.log(a);