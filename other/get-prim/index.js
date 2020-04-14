/* 
  获取质数乘积
 */
var a = 7
var b = func(a, [])
console.log(b)

function func (num, arr) {
  var result = getPrim(num)
  arr.push(result)
  
  if (result <= num) {
    if (num / result === 1) {
      return arr
    }
    if (num % result === 0) {
      func(num/ result, arr)
    }
  }
  
  return arr
}

function getPrim(num) {
  for (var i = 2; i <= num; i++) {
    if (num % i === 0) {
      return i
    }
  }
}

