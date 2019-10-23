// 2个数字相加，不许用js的四则运算
// 原理是 a+b = (a ^ b) + (a & b) << 1 ，具体见https://yuchengkai.cn/docs/cs/algorithm.html#%E6%8C%89%E4%BD%8D%E6%93%8D%E4%BD%9C
// a ^ b 为异或， a & b 为按位与， <<1 为进一位  （二进制）
function sum(a, b) {
  if (a === 0) {
    return b
  }
  if (b === 0) {
    return a
  }
  var c = a ^ b
  var d = (a & b) << 1
  return sum(c, d)
}

console.log(sum(1, 2))