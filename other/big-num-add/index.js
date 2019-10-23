// 大数相加
function bigNumAdd(a, b) {
  var arrA = a.split('')
  var arrB = b.split('')
  // a和b的长度差
  var distance = Math.abs(arrA.length - arrB.length)
  // a和b的长度最大值
  var maxLen = Math.max(arrA.length, arrB.length)
  
  // 为a、b补齐0，即1+22的时候，为1补0为01+22
  if (arrA.length > arrB.length) {
    for (var i = 0; i < distance; i++) {
      arrB.unshift(0)
    }
  } else {
    for (var i = 0; i < distance; i++) {
      arrA.unshift(0)
    }
  }
  
  var extra = 0
  var result = []
  for (var i = maxLen - 1; i >= 0; i--) {
    var c = +arrA[i] + +arrB[i] + extra
    if (c >= 10) {
      c = c % 10
      result.unshift(c)
      extra = 1
    } else {
      result.unshift(c)
      extra = 0
    }
  }
  if (extra === 1) {
    result.unshift(1)
  }
  return result.join('')
}

console.log(bigNumAdd('123456789','9876'), 123456789 + 9876)