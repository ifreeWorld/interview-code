/**
 * 判断一个字符串是否另一个字符串的子序列， 比如给定 a = apple, b = axpfxplle; 那么a就是b的子序列。 你也可以这么理解，在b中删除零个或多个字符，如果可以使得a和b相等，那么说明a就是b的子序列。
 * @param {*} a 子字符串
 * @param {*} b 父字符串
 */
function isChildStr(a, b) {
  var i = 0
  var j = 0
  while(i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++
    }
    j++
  }
  return i === a.length
}